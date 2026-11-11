import { sql } from '@/lib/db';
import { ok, bad, clean, isEmail } from '@/lib/forms';

export async function POST(req: Request) {
  const fd = await req.formData();
  if (clean(fd.get('website'))) return ok(); // champ piège anti-spam
  const email = clean(fd.get('email'), 200).toLowerCase();
  if (!isEmail(email)) return bad('Adresse e-mail invalide');
  await sql`INSERT INTO subscribers (email) VALUES (${email}) ON CONFLICT (email) DO UPDATE SET subscribed = true`;
  return ok();
}
