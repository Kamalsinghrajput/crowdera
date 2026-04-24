import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '../../../../src/templates/template-1/components/Navbar';
import Footer from '../../../../src/templates/template-1/components/Footer';
import { ArrowLeft, Download, TrendingUp, Users, Globe, Heart } from 'lucide-react';

/* ── Report data keyed by year ── */
const reportData =


{
  '2025': {
    highlights: [
    { icon: <Users size={28} />, label: 'Individuals Reached', value: '10,000+' },
    { icon: <Globe size={28} />, label: 'Countries Active', value: '18' },
    { icon: <Heart size={28} />, label: 'Campaigns Run', value: '350+' },
    { icon: <TrendingUp size={28} />, label: 'Funds Raised', value: '$1.2M' }],

    sections: [
    {
      title: 'Message from the Executive Director',
      body: 'This year we expanded our reach significantly, touching the lives of over 10,000 individuals across 18 nations. Our volunteers and donors made this possible through their unwavering commitment to a better world.'
    },
    {
      title: 'Program Impact',
      body: 'Our flagship programs — Clean Water Initiative, Education for All, and Community Health Clinics — collectively served over 6,000 direct beneficiaries. We launched 12 new community centres and distributed over 20,000 meal packages.'
    },
    {
      title: 'Financial Summary',
      body: 'Total funds raised: $1.2 million. Administrative overhead was held below 8%, ensuring the majority of every dollar donated goes directly to programs. Full audited financial statements are available on request.'
    },
    {
      title: 'Looking Ahead',
      body: 'In 2026 we aim to double our geographic presence, launch a digital literacy initiative for rural communities, and strengthen our emergency-relief response capabilities.'
    }]

  },
  '2024': {
    highlights: [
    { icon: <Users size={28} />, label: 'Individuals Reached', value: '7,500+' },
    { icon: <Globe size={28} />, label: 'Countries Active', value: '14' },
    { icon: <Heart size={28} />, label: 'Campaigns Run', value: '280+' },
    { icon: <TrendingUp size={28} />, label: 'Funds Raised', value: '$940K' }],

    sections: [
    {
      title: 'Message from the Executive Director',
      body: '2024 was a year of consolidation and growth. We strengthened existing programs while carefully expanding into four new regions.'
    },
    {
      title: 'Program Impact',
      body: 'Over 7,500 individuals benefited from our programs. We completed construction of 8 community wells and distributed 15,000 educational kits.'
    },
    {
      title: 'Financial Summary',
      body: 'Total funds raised: $940,000. Overhead was maintained at 7.5% of total expenditure.'
    },
    {
      title: 'Looking Ahead',
      body: 'Our 2025 targets focus on scaling impact, with a projected reach of 10,000+ individuals.'
    }]

  }
};

export default function AnnualReport() {
  const primaryColor = "#FFCA08";
  const secondaryColor = "#00715D";

  const router = useRouter();
  const { year } = router.query;
  const data = year ? reportData[year] : null;

  return (
    <div className="bg-white min-h-screen font-sans">
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`}</style>
      <Head>
        <title>Annual Report {year} | Charifund</title>
        <meta name="description" content={`Charifund Annual Impact Report ${year} — see how your support made a difference.`} />
      </Head>

      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero banner */}
        <div
          className="relative py-20 text-white text-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #F5A623 0%, #E8961A 100%)' }}>
          
          <p className="uppercase tracking-widest text-white/70 text-xs mb-3">Charifund Foundation</p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-3">Annual Report</h1>
          <p className="text-3xl font-bold text-white/90">{year}</p>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-16">
          {/* Back link */}
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-[var(--secondary)] font-bold mb-10 hover:gap-3 transition-all">
              <ArrowLeft size={18} /> Back to Home
            </a>
          </Link>

          {data ?
          <>
              {/* Highlight stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {data.highlights.map((h, i) =>
              <div
                key={i}
                className="flex flex-col items-center text-center bg-[#f7f7f7] rounded-2xl p-8 shadow-sm">
                
                    <div className="text-[var(--secondary)] mb-3">{h.icon}</div>
                    <div className="text-3xl font-extrabold text-[#091F1B] mb-1">{h.value}</div>
                    <div className="text-sm text-gray-500 font-medium">{h.label}</div>
                  </div>
              )}
              </div>

              {/* Year selector */}
              <div className="flex items-center gap-3 mb-12">
                <span className="text-gray-400 text-sm font-medium">Other years:</span>
                {Object.keys(reportData).map((y) =>
              <Link key={y} href={`/templates/template-1/annual-report/${y}`}>
                    <a
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                  y === year ?
                  'bg-[#091F1B] text-white' :
                  'border-2 border-brand-dark/20 text-[#091F1B] hover:bg-[#091F1B] hover:text-white'}`
                  }>
                  
                      {y}
                    </a>
                  </Link>
              )}
              </div>

              {/* Report sections */}
              <div className="space-y-10">
                {data.sections.map((sec, i) =>
              <div key={i} className="border-l-4 border-[var(--primary)] pl-6">
                    <h2 className="text-2xl font-extrabold text-[#091F1B] mb-3">{sec.title}</h2>
                    <p className="text-gray-600 leading-relaxed max-w-3xl">{sec.body}</p>
                  </div>
              )}
              </div>

              {/* Download CTA */}
              <div className="mt-16 flex justify-center">
                <button
                className="inline-flex items-center gap-3 bg-[#091F1B] text-white font-bold py-4 px-10 rounded-full
                             hover:bg-[var(--primary)] hover:text-[#091F1B] transition-all transform hover:-translate-y-1 shadow-xl">

                
                  <Download size={18} />
                  Download Full Report PDF
                </button>
              </div>
            </> :

          <div className="text-center py-24">
              <p className="text-2xl font-bold text-gray-400">Report for {year} is not available yet.</p>
              <Link href="/"><a className="mt-6 inline-block text-[var(--secondary)] font-bold">← Back to Home</a></Link>
            </div>
          }
        </div>
      </main>

      <Footer />
    </div>);

}