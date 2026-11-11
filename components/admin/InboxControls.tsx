'use client';
import { useState, useTransition } from 'react';
import { updateInbox, deleteInbox } from '@/lib/actions';

type Kind = 'manuscrits' | 'commentaires' | 'messages';
export function StatusSelect({ kind, id, value, options, notes }: { kind: Kind; id: number; value: string; options: [string, string][]; notes?: string | null }) {
  const [pending, start] = useTransition();
  const [n, setN] = useState(notes ?? '');
  return (
    <span style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
      <select value={value} disabled={pending} onChange={(e) => start(() => updateInbox(kind, id, e.target.value, kind === 'manuscrits' ? n : undefined))} aria-label="Statut">
        {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
      </select>
      {kind === 'manuscrits' && (
        <>
          <textarea rows={1} value={n} onChange={(e) => setN(e.target.value)} placeholder="Notes internes" aria-label="Notes internes" style={{ minWidth: 220 }} />
          <button className="btn ghost sm" disabled={pending} onClick={() => start(() => updateInbox(kind, id, value, n))}>Enregistrer la note</button>
        </>
      )}
    </span>
  );
}
export function DeleteBtn({ kind, id }: { kind: 'manuscrits' | 'commentaires' | 'messages' | 'abonnes'; id: number }) {
  const [pending, start] = useTransition();
  return <button className="btn danger sm" disabled={pending} onClick={() => confirm('Supprimer définitivement ?') && start(() => deleteInbox(kind, id))}>Supprimer</button>;
}
