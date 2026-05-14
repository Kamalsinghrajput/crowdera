import Head from 'next/head';
import Initiatives from '../../../src/templates/template-9/components/Initiatives';
import Navbar from '../../../src/templates/template-9/components/Navbar';

export default function Template9() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Head>
        <title>Charifund | Template 9 - Initiatives</title>
        <meta name="description" content="Explore our initiatives." />
      </Head>

      <Navbar />
      
      <main className="pt-20 md:pt-24">
        <Initiatives />
      </main>

      <footer className="bg-black py-48 border-t-4 border-red-600">
        <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div>
                    <h2 className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
                        Get<br />Involved.
                    </h2>
                    <p className="text-white/40 text-xl max-w-md font-bold uppercase tracking-widest leading-relaxed">We are building a network of immediate action and sustainable impact.</p>
                </div>
                <div className="flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8">Resources</h4>
                            <ul className="space-y-4 text-white text-xs font-black uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red-600 transition-colors">Emergency Kit</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Volunteering</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Impact Report</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-8">Legal</h4>
                            <ul className="space-y-4 text-white text-xs font-black uppercase tracking-widest">
                                <li><a href="#" className="hover:text-red-600 transition-colors">Privacy</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Terms</a></li>
                                <li><a href="#" className="hover:text-red-600 transition-colors">Tax Info</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.5em]">
                <span>© 2024 CRA NETWORK</span>
                <span>GLOBAL RELIEF ALLIANCE</span>
            </div>
        </div>
      </footer>
    </div>
  );
}