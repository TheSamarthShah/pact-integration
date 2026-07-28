import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

// The page receives searchParams from the URL automatically
export default async function AdminMailerPage({ searchParams }: { searchParams: Promise<{ success?: string }> }) {
  
  // Wait for searchParams (required in modern Next.js App Router)
  const params = await searchParams;

  async function handleSendEmail(formData: FormData) {
    'use server';

    const secret = formData.get('secret') as string;
    const senderName = formData.get('senderName') as string;
    const recipient = formData.get('recipient') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (secret !== process.env.ADMIN_SECRET_KEY) {
      return;
    }

    const sanitizedSlug = senderName.toLowerCase().replace(/[^a-z0-9]/g, '');
    const senderEmail = `${sanitizedSlug}@pactintegration.com`;

    const { error } = await supabase.from('email_logs').insert({
      sender_name: senderName,
      sender_email: senderEmail,
      recipient_email: recipient,
      subject: subject,
      body_text: message,
    });

    // If it saves successfully, refresh the page with a success flag
    if (!error) {
      redirect('?success=true');
    }
  }

  return (
    <main className="min-h-screen p-12 bg-slate-50 text-slate-900 flex justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold mb-6">Internal Mailer</h1>
        
        {/* If the URL has ?success=true, show this banner */}
        {params.success === 'true' && (
          <div className="mb-6 p-4 bg-green-50 text-green-700 border border-green-200 rounded-md font-medium">
            ✅ Email successfully saved to database and queued!
          </div>
        )}

        <form action={handleSendEmail} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold mb-2">Admin Secret Key</label>
            <input type="password" name="secret" required className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Sending As</label>
            <select name="senderName" className="w-full border p-2 rounded-md">
              <option value="Samarth">Samarth</option>
              <option value="Shreyjeetsinh">Shreyjeetsinh</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">To (Email)</label>
            <input type="email" name="recipient" required className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Subject</label>
            <input type="text" name="subject" required className="w-full border p-2 rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea name="message" rows={6} required className="w-full border p-2 rounded-md" />
          </div>

          <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-4 rounded-md">
            Queue Email via Webhook
          </button>
        </form>
      </div>
    </main>
  );
}