'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavLink({ href, exact, children }: { href: string; exact?: boolean; children: React.ReactNode }) {
  const p = usePathname();
  const on = exact ? p === href : p === href || p.startsWith(href + '/');
  return <Link href={href} aria-current={on ? 'page' : undefined}>{children}</Link>;
}
