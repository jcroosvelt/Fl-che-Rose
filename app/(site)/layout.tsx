import { getSettings } from '@/lib/settings';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const revalidate = 60;
export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const t = await getSettings();
  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Header />
      <main id="main">{children}</main>
      <Footer t={t} />
    </>
  );
}
