import { getSettings } from '@/lib/settings';
import SettingsForm from '@/components/admin/SettingsForm';
export const dynamic = 'force-dynamic';
export default async function Texts() {
  return (<><div className="adm-top"><h1>Textes du site</h1></div><p style={{ marginBottom: '1.2rem' }} className="muted">Modifiez ici les textes fixes des pages. Les livres, auteurs, articles et la presse se gèrent dans leurs sections.</p><SettingsForm values={await getSettings()} /></>);
}
