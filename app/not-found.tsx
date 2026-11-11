import Link from 'next/link';
export default function NotFound() {
  return <div className="wrap section"><h1>Page introuvable</h1><p className="muted" style={{ margin: '1rem 0 2rem' }}>Cette page n’existe pas ou a été déplacée.</p><Link className="btn" href="/">Retour à l’accueil</Link></div>;
}
