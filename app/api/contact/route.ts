import { getCloudflareContext } from "@opennextjs/cloudflare";
import type { NextRequest } from "next/server";

// Requires a verified sending domain and server-only Cloudflare runtime secrets.
// The visitor never chooses message recipients.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type ContactEnv = {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  CONTACT_PRIMARY_EMAIL?: string;
  CONTACT_SECONDARY_EMAIL?: string;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
};

function config(): ContactEnv {
  let bindings: Partial<ContactEnv> = {};
  try {
    bindings = getCloudflareContext().env as Partial<ContactEnv>;
  } catch {
    // Local `next dev` can use .env.local without Cloudflare context.
  }
  return {
    RESEND_API_KEY: bindings.RESEND_API_KEY || process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: bindings.RESEND_FROM_EMAIL || process.env.RESEND_FROM_EMAIL,
    CONTACT_PRIMARY_EMAIL: bindings.CONTACT_PRIMARY_EMAIL || process.env.CONTACT_PRIMARY_EMAIL,
    CONTACT_SECONDARY_EMAIL: bindings.CONTACT_SECONDARY_EMAIL || process.env.CONTACT_SECONDARY_EMAIL,
    TURNSTILE_SITE_KEY: bindings.TURNSTILE_SITE_KEY || process.env.TURNSTILE_SITE_KEY,
    TURNSTILE_SECRET_KEY: bindings.TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY,
  };
}

function configured(env: ContactEnv): boolean {
  return Boolean(env.RESEND_API_KEY && env.RESEND_FROM_EMAIL &&
    env.CONTACT_PRIMARY_EMAIL && env.TURNSTILE_SECRET_KEY && env.TURNSTILE_SITE_KEY);
}

function response(data: Record<string, unknown>, status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

export function GET() {
  const env = config();
  return response({ enabled: configured(env), siteKey: configured(env) ? env.TURNSTILE_SITE_KEY : null });
}

const text = (v: unknown, max: number) =>
  typeof v === "string" && v.length <= max ? v.trim() : "";

export async function POST(req: NextRequest) {
  const env = config();
  if (!configured(env)) return response({ ok: false, message: "Contact form is not configured yet." }, 503);
  const origin = req.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== req.nextUrl.host) return response({ ok: false, message: "Invalid request origin." }, 403);
    } catch { return response({ ok: false, message: "Invalid request origin." }, 403); }
  }
  if (!(req.headers.get("content-type") || "").toLowerCase().includes("application/json"))
    return response({ ok: false, message: "Expected JSON." }, 415);
  if (Number(req.headers.get("content-length") || "0") > 11000)
    return response({ ok: false, message: "Message is too large." }, 413);

  let raw: unknown;
  try {
    const body = await req.text();
    if (body.length > 11000) return response({ ok: false, message: "Message is too large." }, 413);
    raw = JSON.parse(body);
  } catch { return response({ ok: false, message: "Invalid message." }, 400); }
  if (!raw || typeof raw !== "object" || Array.isArray(raw))
    return response({ ok: false, message: "Invalid message." }, 400);

  const data = raw as Record<string, unknown>;
  if (text(data.website, 100)) return response({ ok: true }); // Honeypot, don't send spam.

  const name = text(data.name, 120);
  const email = text(data.email, 254);
  const country = text(data.country, 100);
  const service = text(data.service, 120);
  const budget = text(data.budget, 70);
  const timeline = text(data.timeline, 70);
  const message = text(data.message, 2000);
  const captcha = text(data.turnstileToken, 2048);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !country || !service ||
      message.length < 10 || !captcha)
    return response({ ok: false, message: "Please complete every required field and the security check." }, 400);

  // Cloudflare requires server-side validation. Each token can only be validated once.
  let validCaptcha = false;
  try {
    const siteverify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY, response: captcha }),
      signal: AbortSignal.timeout(10000),
    });
    if (siteverify.ok) {
      const verify = await siteverify.json() as { success?: boolean; hostname?: string };
      validCaptcha = verify.success === true && verify.hostname === req.nextUrl.hostname;
    }
  } catch { /* Treat errors as a failed challenge. */ }
  if (!validCaptcha) return response({ ok: false, message: "Security check expired or failed. Please try again." }, 400);

  const to = [env.CONTACT_PRIMARY_EMAIL!];
  const secondary = env.CONTACT_SECONDARY_EMAIL?.trim();
  if (secondary && secondary.toLowerCase() !== to[0].toLowerCase()) to.push(secondary);
  const emailBody = [
    "New project inquiry from pactintegration.com",
    "", "Name: " + name, "Reply email: " + email,
    "Country: " + country, "Service: " + service,
    "Budget: " + (budget || "Not specified"),
    "Timeline: " + (timeline || "Not specified"), "", "Project details:", message,
  ].join("\n");

  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { "Authorization": `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: `Pact Integration Website <${env.RESEND_FROM_EMAIL}>`,
        to, reply_to: email,
        subject: "New project inquiry | Pact Integration",
        text: emailBody,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!sent.ok) {
      // Do not log visitor PII or provider response contents.
      console.error("Pact contact email provider rejected submission", sent.status);
      return response({ ok: false, message: "We could not send your enquiry right now. Please try again." }, 502);
    }
    // Provider accepted the email request; delivery to inbox is not guaranteed.
    return response({ ok: true });
  } catch {
    return response({ ok: false, message: "The contact service is unavailable. Please try again." }, 502);
  }
}
