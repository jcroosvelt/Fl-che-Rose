import { getSettings } from '@/lib/settings';
import type { Metadata } from 'next';
import Form from '@/components/Form';
import { SITE } from '@/lib/site';
export const metadata: Metadata = { title: 'Contact' };

export default async function Contact() {
  const t = await getSettings();
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Contact</h1><p>{t['contact.intro']}</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap split">
          <Form action="/api/contact" submit="Envoyer le message" done="Message envoyé. Merci, nous vous répondons rapidement.">
            <div className="two">
              <label>Nom<input name="name" required maxLength={120} autoComplete="name" /></label>
              <label>E-mail<input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <label>Message<textarea name="message" required minLength={5} maxLength={5000} /></label>
          </Form>
          <div className="ui">
            <p><strong>E-mail</strong><br /><a href={`mailto:${t['site.email']}`}>{t['site.email']}</a></p>
            <p><strong>WhatsApp et téléphone</strong><br /><a href={t['site.whatsapp']}>{t['site.phone']}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
