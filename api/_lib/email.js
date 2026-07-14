async function sendEmail({ to, subject, html }) {
  if (!process.env.RESEND_API_KEY) return { skipped: true };
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CIRCLE3_FROM_EMAIL || "Circle3 <circle3@islamic-habits.com>",
      to: [to],
      subject,
      html,
    }),
  });
  if (!response.ok) throw new Error(`Email provider returned ${response.status}.`);
  return response.json();
}

const escapeHtml = (value) => String(value).replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);

export async function sendApplicationEmails(application) {
  const support = process.env.CIRCLE3_SUPPORT_EMAIL || "support@islamic-habits.com";
  const rows = ["name", "email", "country", "age_group", "role", "purpose", "language", "timezone", "safety_note"]
    .map((key) => `<tr><th align="left">${escapeHtml(key.replaceAll("_", " "))}</th><td>${escapeHtml(application[key])}</td></tr>`)
    .join("");
  const admin = sendEmail({
    to: support,
    subject: `Circle3 application — ${application.reference}`,
    html: `<h1>New Circle3 application</h1><p>Reference: <strong>${escapeHtml(application.reference)}</strong></p><table cellpadding="8">${rows}</table>`,
  });
  const applicant = sendEmail({
    to: application.email,
    subject: `We received your Circle3 application — ${application.reference}`,
    html: `<p>Assalamu Alaikum ${escapeHtml(application.name)},</p><p>We received your Circle3 pilot application. Your reference is <strong>${escapeHtml(application.reference)}</strong>.</p><p>We will review safety, purpose, language, and timezone before contacting you about a possible match. Please do not send identity documents by email.</p><p>JazakAllah,<br>Islamic Habits</p>`,
  });
  return Promise.allSettled([admin, applicant]);
}
