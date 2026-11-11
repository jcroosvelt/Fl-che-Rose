import { sql } from '@/lib/db';
import { ok, bad, clean, isEmail } from '@/lib/forms';

export async function POST(req: Request) {
  const fd = await req.formData();
  if (clean(fd.get('website'))) return ok();
  const f = (k: string, m = 300) => clean(fd.get(k), m);
  const email = f('email', 200);
  if (!f('first_name') || !f('last_name') || !isEmail(email) || !f('title') || f('synopsis', 5000).length < 20) return bad('Complétez les champs obligatoires.');
  await sql`INSERT INTO manuscript_submissions (first_name, last_name, email, phone, title, genre, language, synopsis, file_url)
    VALUES (${f('first_name')}, ${f('last_name')}, ${email}, ${f('phone')}, ${f('title')}, ${f('genre')}, ${f('language')}, ${f('synopsis', 5000)}, ${f('file_url', 500)})`;
  return ok();
}
