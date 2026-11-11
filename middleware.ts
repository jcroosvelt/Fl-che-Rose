import { NextResponse, type NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/admin/login') return NextResponse.next();
  const t = req.cookies.get('fr_admin')?.value;
  try {
    if (!t) throw new Error('no token');
    await jwtVerify(t, new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-only-secret-change-me'));
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }
}
export const config = { matcher: ['/admin/:path*'] };
