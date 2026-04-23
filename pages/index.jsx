import Head from 'next/head';
import Link from 'next/link';

const templates = [
{ id: 1, name: 'Template 1', description: 'Charity & Donation — Hero carousel, campaigns, gallery, board members & more.', status: 'ready', color: 'from-amber-400 to-orange-500' },
{ id: 2, name: 'Template 2', description: 'Ready for your next design. Start building your second template here.', status: 'coming-soon', color: 'from-sky-400 to-blue-600' },
{ id: 3, name: 'Template 3', description: 'Ready for your next design. Start building your third template here.', status: 'coming-soon', color: 'from-violet-400 to-purple-600' },
{ id: 4, name: 'Template 4', description: 'Ready for your next design. Start building your fourth template here.', status: 'coming-soon', color: 'from-emerald-400 to-green-600' },
{ id: 5, name: 'Template 5', description: 'Ready for your next design. Start building your fifth template here.', status: 'coming-soon', color: 'from-rose-400 to-red-600' },
{ id: 6, name: 'Template 6', description: 'Ready for your next design. Start building your sixth template here.', status: 'coming-soon', color: 'from-cyan-400 to-teal-600' },
{ id: 7, name: 'Template 7', description: 'Ready for your next design. Start building your seventh template here.', status: 'coming-soon', color: 'from-fuchsia-400 to-pink-600' },
{ id: 8, name: 'Template 8', description: 'Ready for your next design. Start building your eighth template here.', status: 'coming-soon', color: 'from-lime-400 to-green-500' },
{ id: 9, name: 'Template 9', description: 'Ready for your next design. Start building your ninth template here.', status: 'coming-soon', color: 'from-yellow-400 to-amber-600' },
{ id: 10, name: 'Template 10', description: 'Ready for your next design. Start building your tenth template here.', status: 'coming-soon', color: 'from-indigo-400 to-blue-700' }];


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <Head>
        <title>Charifund | Template Library</title>
        <meta name="description" content="Browse all Charifund charity website templates" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="py-12 px-6 text-center border-b border-white/10">
        <span className="inline-block bg-amber-400 text-gray-900 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-4">Charifund</span>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">Template Library</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          10 charity website templates — all in one project. Click a card to preview or start building.
        </p>
      </header>

      {/* Template Grid */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((t) =>
          <Link
            key={t.id}
            href={`/templates/template-${t.id}`}
            id={`template-card-${t.id}`}
            legacyBehavior>
            
              <a className="group relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900 hover:border-white/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl block">
                {/* Gradient top bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${t.color}`} />

                <div className="p-6">
                  {/* Number badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${t.color} text-white font-black text-lg mb-4 shadow-lg`}>
                    {t.id}
                  </div>

                  <h2 className="text-white font-bold text-xl mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {t.name}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{t.description}</p>

                  {/* Status badge */}
                  {t.status === 'ready' ?
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                      Live
                    </span> :

                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                      Coming Soon
                    </span>
                }
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-5 right-5 text-gray-600 group-hover:text-amber-400 transition-colors duration-200">
                  <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            </Link>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-600 text-sm">
        Charifund Template Library &mdash; Built with Next.js
      </footer>
    </div>);

}