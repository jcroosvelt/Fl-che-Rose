import { NextResponse } from 'next/server';
export const ok = () => NextResponse.json({ ok: true });
export const bad = (m = 'Requête invalide', s = 400) => NextResponse.json({ ok: false, error: m }, { status: s });
export const clean = (v: FormDataEntryValue | null, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
