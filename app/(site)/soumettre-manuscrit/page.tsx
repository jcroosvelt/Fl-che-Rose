import type { Metadata } from 'next';
import Form from '@/components/Form';
export const metadata: Metadata = { title: 'Soumettre un manuscrit', description: 'Envoyez votre manuscrit de poésie, roman, essai ou nouvelles à Flèche Rose Éditions.' };

export default function Submit() {
  return (
    <>
      <div className="page-head"><div className="wrap"><h1>Soumettre un manuscrit</h1><p>Nous lisons chaque proposition. Décrivez votre projet et ajoutez un lien vers votre texte complet (Google Drive, Dropbox…). Réponse sous quelques semaines.</p></div></div>
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="wrap">
          <Form action="/api/manuscrits" submit="Envoyer ma proposition" done="Proposition reçue. Merci, notre comité de lecture vous répondra par e-mail.">
            <div className="two">
              <label>Prénom *<input name="first_name" required maxLength={120} autoComplete="given-name" /></label>
              <label>Nom *<input name="last_name" required maxLength={120} autoComplete="family-name" /></label>
            </div>
            <div className="two">
              <label>E-mail *<input name="email" type="email" required autoComplete="email" /></label>
              <label>Téléphone<input name="phone" type="tel" autoComplete="tel" /></label>
            </div>
            <label>Titre du manuscrit *<input name="title" required maxLength={200} /></label>
            <div className="two">
              <label>Genre<select name="genre"><option>Poésie</option><option>Roman</option><option>Nouvelles</option><option>Essai</option><option>Théâtre</option><option>Autre</option></select></label>
              <label>Langue<select name="language"><option>Français</option><option>Créole</option><option>Bilingue</option></select></label>
            </div>
            <label>Synopsis *<textarea name="synopsis" required minLength={20} maxLength={5000} placeholder="De quoi parle votre livre ? Qui êtes-vous ?" /></label>
            <label>Lien vers le manuscrit complet<input name="file_url" type="url" placeholder="https://drive.google.com/…" /></label>
          </Form>
        </div>
      </section>
    </>
  );
}
