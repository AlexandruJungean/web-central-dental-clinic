"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL ?? "alex.jungean@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  message?: string;
}

export async function submitContactForm(data: ContactFormData) {
  try {
    await Promise.all([
      resend.emails.send({
        from: `Central Dental Clinic <${FROM_EMAIL}>`,
        to: NOTIFY_EMAIL,
        subject: `Programare nouă: ${data.name} — ${data.treatment}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #0A0A0A;">
            <h2 style="font-size: 20px; font-weight: 400; border-bottom: 1px solid #E5E5E5; padding-bottom: 16px;">
              Solicitare nouă de programare
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr><td style="padding: 8px 0; color: #999; width: 120px;">Nume</td><td style="padding: 8px 0;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #999;">Telefon</td><td style="padding: 8px 0;">${data.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #999;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>
              <tr><td style="padding: 8px 0; color: #999;">Tratament</td><td style="padding: 8px 0;">${data.treatment}</td></tr>
              ${data.message ? `<tr><td style="padding: 8px 0; color: #999; vertical-align: top;">Mesaj</td><td style="padding: 8px 0;">${data.message}</td></tr>` : ""}
            </table>
          </div>
        `,
      }),

      resend.emails.send({
        from: `Central Dental Clinic <${FROM_EMAIL}>`,
        to: data.email,
        subject: "Confirmare programare — Central Dental Clinic",
        html: `
          <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #0A0A0A;">
            <h2 style="font-size: 22px; font-weight: 400;">Mulțumim, ${data.name}!</h2>
            <p style="color: #555; line-height: 1.7; margin-top: 16px;">
              Am primit solicitarea dumneavoastră de programare pentru <strong>${data.treatment}</strong>.
            </p>
            <p style="color: #555; line-height: 1.7;">
              Echipa noastră vă va contacta în cel mai scurt timp la numărul
              <strong>${data.phone}</strong> pentru a confirma data și ora consultației.
            </p>
            <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 32px 0;" />
            <p style="color: #999; font-size: 14px;">
              Central Dental Clinic<br/>
              Strada Andrei Mureșan 5, Sighetu Marmației<br/>
              +40 749 165 211
            </p>
          </div>
        `,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("Email send failed:", error);
    return { success: false, error: "A apărut o eroare. Vă rugăm să ne contactați telefonic." };
  }
}
