'use client';
import { useState } from 'react';

export default function Form({ action, children, submit = 'Envoyer', done }: { action: string; children: React.ReactNode; submit?: string; done: string }) {
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [err, setErr] = useState('');
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    try {
      const r = await fetch(action, { method: 'POST', body: new FormData(e.currentTarget) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { setState('ok'); } else { setErr(j.error || 'Une erreur est survenue.'); setState('err'); }
    } catch { setErr('Connexion impossible. Réessayez.'); setState('err'); }
  }
  if (state === 'ok') return <p className="notice" role="status">{done}</p>;
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {state === 'err' && <p className="notice" role="alert">{err}</p>}
      <div><button className="btn" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Envoi…' : submit}</button></div>
    </form>
  );
}
