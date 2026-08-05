import RichTextEditor from "@/components/ui/RichTextEditor";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { cookies } from "next/headers"; // 1. Import Next.js cookies API

export default async function AdminMailerPage({ searchParams }: { searchParams: Promise<{ success?: string }> }) {
  const params = await searchParams;
  
  // 2. Await the cookie store and grab the saved values (or fallback to defaults)
  const cookieStore = await cookies();
  const savedSenderName = cookieStore.get('senderName')?.value || "Samarth";

  async function handleSendEmail(formData: FormData) {
    'use server';

    const secret = formData.get('secret') as string;
    const senderName = formData.get('senderName') as string;
    const recipient = formData.get('recipient') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string; 

    // Reject if the secret is wrong
    if (secret !== process.env.ADMIN_SECRET_KEY) {
      return;
    }

    // 3. Update the cookies immediately upon a successful secret check.
    // Setting maxAge to 30 days (in seconds) so you stay logged in.
    const activeCookies = await cookies();
    activeCookies.set('senderName', senderName, { maxAge: 60 * 60 * 24 * 30 });

    const sanitizedSlug = senderName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const senderEmail = `${sanitizedSlug}@pactintegration.com`;

    const { error } = await supabase.from('email_logs').insert({
      sender_name: senderName,
      sender_email: senderEmail,
      recipient_email: recipient,
      subject: subject,
      body_text: message,
    });

    if (!error) {
      redirect('?success=true');
    }
  }

  return (
    <main className="min-h-screen p-12 bg-slate-50 text-slate-900 flex justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold mb-6">Internal Mailer</h1>
        
        {params.success === 'true' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-md font-medium">
            ✅ Email successfully saved to database and queued!
          </div>
        )}

        <form action={handleSendEmail} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold mb-2">Admin Secret Key</label>
            {/* 4. Use defaultValue to load the saved cookie */}
            <input 
              type="password" 
              name="secret" 
              required 
              className="w-full border p-2 rounded-md" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Sending As</label>
            {/* 5. Use defaultValue to load the previously selected name */}
            <select 
              name="senderName" 
              defaultValue={savedSenderName}
              className="w-full border p-2 rounded-md"
            >
              <option value="Samarth">Samarth</option>
              <option value="Shreyjeetsinh">Shreyjeetsinh</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">To (Comma-separated emails)</label>
            {/* Kept intentionally empty so you don't send emails to the wrong person */}
            <input 
              type="email" 
              name="recipient" 
              multiple 
              required 
              placeholder="ceo@company.com, cto@company.com"
              className="w-full border p-2 rounded-md" 
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Subject</label>
            {/* Kept empty on load */}
            <input type="text" name="subject" required className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <RichTextEditor name="message" />
          </div>

          <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Queue Email via Webhook
          </button>
        </form>
      </div>
    </main>
  );
}