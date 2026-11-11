import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const COOKIE = 'fr_admin';
const key = () => new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-only-secret-change-me');

export async function createSession(adminId: number, email: string) {
  const token = await new SignJWT({ sub: String(adminId), email })
    .setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime('7d').sign(key());
  (await cookies()).set(COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 7 });
}
export async function destroySession() { (await cookies()).delete(COOKIE); }
export async function getSession(): Promise<{ id: number; email: string } | null> {
  const t = (await cookies()).get(COOKIE)?.value;
  if (!t) return null;
  try { const { payload } = await jwtVerify(t, key()); return { id: Number(payload.sub), email: String(payload.email) }; } catch { return null; }
}
export async function requireAdmin() {
  const s = await getSession();
  if (!s) redirect('/admin/login');
  return s;
}
export const COOKIE_NAME = COOKIE;
