'use client';
import { useActionState, useState } from 'react';
import { saveResource, deleteResource } from '@/lib/actions';
import type { Field } from '@/lib/resources';

function ImageField({ f, value }: { f: Field; value: string }) {
  const [url, setUrl] = useState(value ?? '');
  return (
    <label className={f.wide ? 'wide' : ''}>{f.label}
      <input name={f.name} type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://…" required={f.required} />
      <span className="help">Collez l’adresse de l’image. {url && <a href={url} target="_blank" rel="noreferrer">Ouvrir</a>}</span>
      {url && <img className="preview" src={url} alt="" />}
    </label>
  );
}

export default function ResourceForm({ resKey, id, fields, values, refs }: { resKey: string; id: string; fields: Field[]; values: Record<string, any>; refs: Record<string, { value: string; label: string }[]> }) {
  const [state, action, pending] = useActionState(saveResource.bind(null, resKey, id), null as { error?: string } | null);
  return (
    <form action={action} className="adm-card adm-form">
      {state?.error && <p className="errmsg wide" role="alert">{state.error}</p>}
      {fields.map((f) => {
        const v = values[f.name];
        const cls = f.wide || f.type === 'textarea' || f.type === 'html' ? 'wide' : '';
        if (f.type === 'image') return <ImageField key={f.name} f={f} value={v ?? ''} />;
        if (f.type === 'boolean') return <label key={f.name} className="check"><input type="checkbox" name={f.name} defaultChecked={!!v} /> {f.label}</label>;
        const help = f.help && <span className="help">{f.help}</span>;
        if (f.type === 'textarea' || f.type === 'html') return <label key={f.name} className={cls}>{f.label}<textarea className={f.type === 'html' ? 'html' : ''} name={f.name} defaultValue={v ?? ''} required={f.required} />{help}</label>;
        if (f.type === 'select') return <label key={f.name} className={cls}>{f.label}<select name={f.name} defaultValue={v ?? ''}><option value="">—</option>{f.options!.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select>{help}</label>;
        if (f.type === 'ref') return <label key={f.name} className={cls}>{f.label}<select name={f.name} defaultValue={v ?? ''} required={f.required}><option value="">—</option>{refs[f.name]?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}</select>{help}</label>;
        const type = f.type === 'number' ? 'number' : f.type === 'date' ? 'date' : f.type === 'url' ? 'url' : 'text';
        const dv = f.type === 'tags' ? (v ?? []).join(', ') : f.type === 'date' && v ? String(v).slice(0, 10) : v ?? '';
        return <label key={f.name} className={cls}>{f.label}<input name={f.name} type={type} defaultValue={dv} required={f.required} />{help}</label>;
      })}
      <div className="actions">
        <button className="btn" disabled={pending}>{pending ? 'Enregistrement…' : 'Enregistrer'}</button>
        {id !== 'new' && (
          <button type="button" className="btn danger" formNoValidate
            onClick={async () => { if (confirm('Supprimer définitivement cet élément ?')) await deleteResource(resKey, id); }}>Supprimer</button>
        )}
      </div>
    </form>
  );
}
