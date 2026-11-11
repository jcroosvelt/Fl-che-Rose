'use client';
import { useState } from 'react';

export default function Newsletter() {
  const [state, setState] = useState<'idle' | 'ok' | 'err'>('idle');
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const r = await fetch('/api/newsletter', { method: 'POST', body: fd });
    setState(r.ok ? 'ok' : 'err');
  }
  if (state === 'ok') return <p style={{ marginTop: '1.4rem', color: '#fff' }}>Merci, vous êtes inscrit·e à la lettre.</p>;
  return (
    <form onSubmit={submit} style={{ marginTop: '1.4rem', display: 'flex', gap: '.5rem', maxWidth: 380 }}>
      <label className="skip" htmlFor="nl-email">Adresse e-mail</label>
      <input id="nl-email" name="email" type="email" required placeholder="Votre e-mail"
        style={{ flex: 1, padding: '.7rem .8rem', border: '1px solid #5a5249', background: 'transparent', color: '#fff', font: 'inherit', minWidth: 0 }} />
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden style={{ position: 'absolute', left: -5000 }} />
      <button className="btn" type="submit">S’inscrire</button>
      {state === 'err' && <span role="alert" style={{ color: '#f3b5c4' }}>Échec, réessayez.</span>}
    </form>
  );
}
