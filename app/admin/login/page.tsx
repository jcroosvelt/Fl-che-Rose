'use client';
import { useActionState } from 'react';
import { login } from '@/lib/actions';

export default function Login() {
  const [state, action, pending] = useActionState(login, null as { error?: string; email?: string } | null);
  return (
    <div className="login">
      <form action={action}>
        <h1>Flèche Rose — administration</h1>
        {state?.error && <p className="errmsg" role="alert">{state.error}</p>}
        <label>E-mail<input name="email" type="email" required autoComplete="username" autoFocus defaultValue={state?.email ?? ''} key={state?.email ?? 'e'} /></label>
        <label>Mot de passe<input name="password" type="password" required autoComplete="current-password" /></label>
        <button className="btn" disabled={pending}>{pending ? 'Connexion…' : 'Se connecter'}</button>
      </form>
    </div>
  );
}
