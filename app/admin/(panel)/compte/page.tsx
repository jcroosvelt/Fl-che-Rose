import { requireAdmin } from '@/lib/auth';
import PasswordForm from '@/components/admin/PasswordForm';
export default async function Account() {
  const s = await requireAdmin();
  return (<><div className="adm-top"><h1>Mon compte</h1></div><p style={{ marginBottom: '1.2rem' }}>Connecté en tant que <strong>{s.email}</strong>.</p><PasswordForm /></>);
}
