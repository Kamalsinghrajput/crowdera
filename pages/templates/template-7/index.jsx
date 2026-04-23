import Head from 'next/head';
import Link from 'next/link';

export default function Template7() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif' }}>
      <Head>
        <title>Charifund | Template 7 - Coming Soon</title>
        <meta name="description" content="Template 7 is under construction." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Minimal placeholder header */}
      <header style={{ padding: '1.5rem 2rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#f59e0b', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>CHARIFUND</span>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Template 7</span>
      </header>

      {/* Coming soon body */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '9999px', padding: '0.4rem 1.2rem', marginBottom: '2rem', display: 'inline-block' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Template {7}</span>
        </div>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
          Coming<br />Soon
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.125rem', maxWidth: '28rem', marginBottom: '3rem', lineHeight: 1.6 }}>
          This template slot is ready. Add your components to{' '}
          <code style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.1)', borderRadius: '4px', padding: '0.1em 0.4em', fontSize: '0.875em' }}>
            templates/template-7/components/
          </code>{' '}
          and start building.
        </p>
        <Link href="/" legacyBehavior>
          <a style={{ background: '#f59e0b', color: '#0a0a0a', fontWeight: 700, padding: '1rem 2.5rem', borderRadius: '9999px', textDecoration: 'none', fontSize: '0.95rem', display: 'inline-block', transition: 'opacity 0.2s' }}>
            ← Back to Templates
          </a>
        </Link>
      </main>

      {/* Minimal placeholder footer */}
      <footer style={{ padding: '1.5rem 2rem', borderTop: '1px solid rgba(255,255,255,0.08)', textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.8rem' }}>
        Charifund — Template 7 placeholder footer
      </footer>
    </div>);

}