import type { Metadata } from 'next';
import Form from '@/components/Form';
import { SITE } from '@/lib/site';
export const metadata: Metadata = { title: 'Contact' };

export default function Contact() {
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Contact</h1><p>Une question, une commande, une proposition ? Écrivez-nous, nous répondons sous quelques jours.</p></div></div>
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
            <p><strong>E-mail</strong><br /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p><strong>WhatsApp et téléphone</strong><br /><a href={SITE.whatsapp}>{SITE.phone}</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
