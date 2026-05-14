import Head from 'next/head';
import Initiatives from '../../../src/templates/template-7/components/Initiatives';
import Navbar from '../../../src/templates/template-7/components/Navbar';

export default function Template7() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Charifund | Template 7 - Initiatives</title>
        <meta name="description" content="Explore our initiatives." />
      </Head>

      <Navbar />
      
      <main className="pt-24">
        <Initiatives />
      </main>

      <footer className="bg-slate-900 py-32">
        <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-white">
                <div className="col-span-1 lg:col-span-2">
                    <span className="text-white font-black text-3xl tracking-tighter mb-8 block uppercase">Charifund</span>
                    <p className="text-slate-400 text-lg max-w-sm">We are a global community dedicated to providing support and resources to those in need. Join us in making a difference.</p>
                </div>
                <div>
                    <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-8">Navigation</h4>
                    <ul className="space-y-4 text-slate-400 text-sm font-bold">
                        <li><a href="#" className="hover:text-white transition-colors">Campaigns</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Fundraisers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-indigo-400 font-bold uppercase tracking-widest text-[10px] mb-8">Connect</h4>
                    <ul className="space-y-4 text-slate-400 text-sm font-bold">
                        <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-24 pt-12 border-t border-slate-800 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
                © 2024 Charifund. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}