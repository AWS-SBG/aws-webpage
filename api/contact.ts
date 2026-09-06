export const config = { runtime: 'edge' };

const TO = process.env.CONTACT_TO ?? 'aws-builders@umich.edu';
const FROM = process.env.CONTACT_FROM ?? 'onboarding@resend.dev';

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string,
  );

export default async function handler(req: Request) {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY is not set');
    return json(500, { error: 'Contact form is not configured yet.' });
  }

  let payload: { name?: string; email?: string; message?: string; website?: string };
  try {
    payload = await req.json();
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  // Honeypot — real people never fill this in, bots do.
  if (payload.website) return json(200, { ok: true });

  const name = (payload.name ?? '').trim();
  const email = (payload.email ?? '').trim();
  const message = (payload.message ?? '').trim();

  if (!name || !email || !message) {
    return json(400, { error: 'Name, email, and message are all required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'That email address does not look right.' });
  }
  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return json(400, { error: 'That message is too long.' });
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `AWS Builders Site <${FROM}>`,
      to: [TO],
      reply_to: email,
      subject: `Website contact — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html:
        `<p><strong>Name:</strong> ${escapeHtml(name)}<br>` +
        `<strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error('[contact] Resend responded %d: %s', res.status, await res.text());
    return json(502, { error: 'We could not send that just now. Please email us directly.' });
  }

  return json(200, { ok: true });
}
