import type { Metadata } from 'next';
import './globals.css';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} — ${SITE.tagline}`, template: `%s — ${SITE.name}` },
  description: SITE.description,
  openGraph: { siteName: SITE.name, locale: 'fr_FR', type: 'website', images: [SITE.logo] },
  icons: { icon: SITE.logo, apple: SITE.logo },
};

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
