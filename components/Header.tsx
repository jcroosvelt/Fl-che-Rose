'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE } from '@/lib/site';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="top">
      <div className="wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <b>Flèche Rose</b> Éditions
        </Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? 'Fermer' : 'Menu'}
        </button>
        <nav id="nav" className={'nav' + (open ? ' open' : '')} aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path.startsWith(n.href) ? 'page' : undefined} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" aria-current={path === '/contact' ? 'page' : undefined} onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
