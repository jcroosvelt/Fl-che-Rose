import { sql } from '@/lib/db';
import { ok, bad, clean, isEmail } from '@/lib/forms';

export async function POST(req: Request) {
  const fd = await req.formData();
  if (clean(fd.get('website'))) return ok();
  const name = clean(fd.get('name'), 120), email = clean(fd.get('email'), 200), message = clean(fd.get('message'), 5000);
  if (!name || !isEmail(email) || message.length < 5) return bad('Complétez tous les champs.');
  await sql`INSERT INTO contact_messages (name, email, message) VALUES (${name}, ${email}, ${message})`;
  return ok();
}
