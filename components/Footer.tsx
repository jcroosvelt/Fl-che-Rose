import Link from 'next/link';
import { NAV, SITE } from '@/lib/site';
import Newsletter from './Newsletter';

export default function Footer({ t }: { t: Record<string, string> }) {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: '#fff', marginBottom: '.6rem' }}>{SITE.name}</p>
            <p style={{ maxWidth: '36ch' }}>{t['site.tagline']}. {t['site.footer_text']}</p>
            <Newsletter />
          </div>
          <div>
            <h4>Explorer</h4>
            <ul>{NAV.map((n) => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4>Nous écrire</h4>
            <ul>
              <li><Link href="/soumettre-manuscrit">Soumettre un manuscrit</Link></li>
              <li><Link href="/contact">Formulaire de contact</Link></li>
              <li><a href={`mailto:${t['site.email']}`}>{t['site.email']}</a></li>
              <li><a href={t['site.whatsapp']}>WhatsApp {t['site.phone']}</a></li>
            </ul>
          </div>
        </div>
        <p className="legal">© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
