'use client';
import { useActionState } from 'react';
import { saveSettings } from '@/lib/actions';
import { SETTINGS } from '@/lib/settings';

export default function SettingsForm({ values }: { values: Record<string, string> }) {
  const [s, action, pending] = useActionState(saveSettings, null as { ok?: string } | null);
  return (
    <form action={action} style={{ display: 'grid', gap: '1.5rem' }}>
      {s?.ok && <p className="flash" role="status">{s.ok}</p>}
      {SETTINGS.map((g) => (
        <section key={g.title} className="adm-card adm-form">
          <h2 className="wide">{g.title}</h2>
          {g.fields.map((f) => (
            <label key={f.key} className={f.type === 'textarea' ? 'wide' : ''}>{f.label}
              {f.type === 'textarea'
                ? <textarea name={f.key} defaultValue={values[f.key]} rows={4} />
                : <input name={f.key} defaultValue={values[f.key]} />}
              <span className="help">{f.help ?? 'Videz le champ pour revenir au texte d’origine.'}</span>
            </label>
          ))}
        </section>
      ))}
      <div><button className="btn" disabled={pending}>{pending ? 'Enregistrement…' : 'Enregistrer les textes'}</button></div>
    </form>
  );
}
