import { sql } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET() {
  if (!(await getSession())) return new Response('Non autorisé', { status: 401 });
  const rows = await sql`SELECT email, subscribed, created_at FROM subscribers ORDER BY created_at DESC`;
  const csv = 'email,inscrit,date\n' + rows.map((r: any) => `${r.email},${r.subscribed},${new Date(r.created_at).toISOString()}`).join('\n');
  return new Response(csv, { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="abonnes.csv"' } });
}
