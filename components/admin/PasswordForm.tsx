'use client';
import { useActionState } from 'react';
import { changePassword } from '@/lib/actions';
export default function PasswordForm() {
  const [s, action, pending] = useActionState(changePassword, null as { error?: string; ok?: string } | null);
  return (
    <form action={action} className="adm-card adm-form" style={{ maxWidth: 520, gridTemplateColumns: '1fr' }}>
      {s?.error && <p className="errmsg" role="alert">{s.error}</p>}{s?.ok && <p className="flash" role="status">{s.ok}</p>}
      <label>Mot de passe actuel<input name="current" type="password" required autoComplete="current-password" /></label>
      <label>Nouveau mot de passe<input name="next" type="password" required minLength={12} autoComplete="new-password" /><span className="help">12 caractères minimum.</span></label>
      <div className="actions"><button className="btn" disabled={pending}>Changer le mot de passe</button></div>
    </form>
  );
}
