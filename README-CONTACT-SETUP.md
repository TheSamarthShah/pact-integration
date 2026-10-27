# Pact Integration — secure project inquiry form

## Recipients
- Main recipient: `contact@pactintegration.com`
- Optional second recipient: `info@pactintegration.com` **only if the mailbox or forwarding alias actually exists**.
- Both receive the same submitted details if both runtime variables are configured.

## Files
- `public/index.html`: current V3 SEO homepage with photo-free founder cards and a `Send project inquiry` action.
- No founder portrait files are included. All three founder cards use initials instead of photos.
- `app/api/contact/route.ts`: new server-side Next.js handler. No other routes, admin pages, SEO config, or Cloudflare deployment files are overwritten.

## Required one-time setup
1. Confirm the mailboxes are real and receive test emails from a separate account.
2. Create an account at https://resend.com/ and **verify your sending domain**, including the appropriate DNS records supplied by Resend (do not overwrite MX records already used for receiving mail).
3. Create a Resend API key with sending permission.
4. Create a Cloudflare Turnstile widget restricted to `pactintegration.com` (and your approved preview hostnames if testing). Get its **site key** and **secret key**.
5. In Cloudflare Workers / your deployed `pact-integration` service, configure the following **runtime** environment variables/secrets. Never commit secret values:

```
RESEND_API_KEY=<secret Resend key>
RESEND_FROM_EMAIL=notifications@pactintegration.com
CONTACT_PRIMARY_EMAIL=contact@pactintegration.com
CONTACT_SECONDARY_EMAIL=info@pactintegration.com
TURNSTILE_SITE_KEY=<public Cloudflare Turnstile site key>
TURNSTILE_SECRET_KEY=<secret Cloudflare Turnstile key>
```

`RESEND_FROM_EMAIL` must belong to the domain that Resend verified. Use the sender address accepted by your Resend account; you do not have to create a receiving inbox for it. Set `CONTACT_SECONDARY_EMAIL` only if `info@pactintegration.com` receives messages. All server secrets go in the **Cloudflare runtime configuration**, not `NEXT_PUBLIC_*` environment variables or `public/`.

6. Copy the files from this ZIP to the same paths in `TheSamarthShah/pact-integration`, commit and deploy via your existing Cloudflare/OpenNext workflow.
7. Load the homepage, complete the Turnstile challenge, submit one real test enquiry and confirm **both inboxes received it**. Check spam folders. Check Resend logs if it fails.

## Safety and UX
- Without all required runtime variables, the button is disabled and clearly says enquiries are unavailable; the website will not falsely claim delivery.
- API validates inputs, rejects oversized requests and mismatched origins, verifies Cloudflare Turnstile server side, and sends only to configured business recipients.
- Sender is always your verified domain; visitor's email is used only as `Reply-To`.
- Provider success indicates request acceptance, not necessarily email delivery. Review Resend delivery logs and mailbox spam filtering for operational assurance.
- Set Cloudflare rate-limit / WAF rules on `POST /api/contact` to protect against abuse; Turnstile alone is not a volume limit.
- For production, ensure your site has an appropriate privacy policy disclosing how leads are processed and retained.
- Existing SEO service pages and blog pages already deployed should remain unchanged.

## Test commands (development only)
```
npx tsc --noEmit
npm run build
```

The static preview HTML opened as a local file cannot deliver enquiries: its button requires a running Next.js backend. Live receiving and provider acceptance have not been tested here because no private credentials were available.
