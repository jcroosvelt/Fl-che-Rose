// Usage : ADMIN_EMAIL=... ADMIN_PASSWORD=... node scripts/create-admin.mjs
import fs from 'node:fs';
import bcrypt from 'bcryptjs';
import { neon } from '@neondatabase/serverless';
const env = fs.existsSync('.env.local') ? fs.readFileSync('.env.local', 'utf8') : '';
const sql = neon(process.env.DATABASE_URL || env.match(/DATABASE_URL="([^"]+)"/)?.[1]);
const { ADMIN_EMAIL: email, ADMIN_PASSWORD: pw } = process.env;
if (!email || !pw || pw.length < 12) throw new Error('ADMIN_EMAIL et ADMIN_PASSWORD (12+ caractères) requis');
await sql`INSERT INTO admin_users (email, name, password_hash, role) VALUES (${email.toLowerCase()}, 'Administrateur', ${await bcrypt.hash(pw, 12)}, 'admin')
  ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash, active = true`;
console.log('Compte admin prêt :', email);
