import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import { RESOURCES, REF_LABEL } from '@/lib/resources';
import ResourceForm from '@/components/admin/ResourceForm';

export default async function Edit({ params }: { params: Promise<{ resource: string; id: string }> }) {
  const { resource, id } = await params;
  const res = RESOURCES[resource];
  if (!res) notFound();
  let row: Record<string, unknown> = {};
  if (id !== 'new') {
    const r = await sql.query(`SELECT * FROM ${res.table} WHERE id = $1`, [Number(id)]);
    if (!r[0]) notFound();
    row = r[0];
  } else {
    for (const f of res.fields) if (f.type === 'boolean') row[f.name] = f.name !== 'preorder';
    if (res.key === 'livres') row.status = 'catalogue';
  }
  const refs: Record<string, { value: string; label: string }[]> = {};
  for (const f of res.fields) if (f.type === 'ref' && f.ref) {
    const c = REF_LABEL[f.ref];
    refs[f.name] = (await sql.query(`SELECT id, ${c.col} AS label FROM ${c.table} ORDER BY ${c.col}`)).map((x: any) => ({ value: String(x.id), label: x.label }));
  }
  return (
    <>
      <div className="adm-top"><h1>{id === 'new' ? `Nouveau : ${res.singular}` : `Modifier : ${res.singular}`}</h1><Link href={`/admin/${res.key}`} className="link">Retour à la liste</Link></div>
      <ResourceForm resKey={res.key} id={id} fields={res.fields} values={JSON.parse(JSON.stringify(row))} refs={refs} />
    </>
  );
}
