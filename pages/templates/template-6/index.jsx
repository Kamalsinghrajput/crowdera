import Head from 'next/head';
import Initiatives from '../../../src/templates/template-6/components/Initiatives';
import Navbar from '../../../src/templates/template-6/components/Navbar';

export default function Template6() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Charifund | Template 6 - Initiatives</title>
        <meta name="description" content="Explore our initiatives." />
      </Head>

      <Navbar />
      
      <main className="pt-20">
        <Initiatives />
      </main>

      <footer className="bg-[#0a0a0a] py-20">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
            <span className="text-[#f59e0b] font-black text-2xl tracking-tighter mb-4 block uppercase">Charifund</span>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">Empowering change through community-driven crowdfunding initiatives.</p>
        </div>
      </footer>
    </div>
  );
}