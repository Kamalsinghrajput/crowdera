import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Instagram, Twitter, Facebook, Plus } from 'lucide-react';
import Navbar from '../../../src/templates/template-1/components/Navbar';
import Footer from '../../../src/templates/template-1/components/Footer';

const allMembers = [
{ img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80", name: "Rajesh Kumar", role: "Founder & CEO", bio: "20+ years in humanitarian work across South Asia." },
{ img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80", name: "Priya Sharma", role: "Chief Operations Officer", bio: "Expert in scaling non-profit operations globally." },
{ img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80", name: "Arjun Mehta", role: "Head of Programs", bio: "Leads field programs across 15 countries." },
{ img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80", name: "Ananya Iyer", role: "Director of Outreach", bio: "Passionate advocate for community development." },
{ img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80", name: "David Chen", role: "Finance Director", bio: "CFA with 15 years in non-profit financial management." },
{ img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=80", name: "Sarah Williams", role: "Communications Lead", bio: "Storyteller driving awareness across 40+ media channels." },
{ img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80", name: "Marcus Johnson", role: "Technology Officer", bio: "Building digital tools to amplify charitable impact." },
{ img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80", name: "Aisha Patel", role: "Legal Advisor", bio: "Expert in international humanitarian law and compliance." }];


export default function Template1Board() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>Board Members | Charifund</title>
        <meta name="description" content="Meet all the board members of Charifund — leaders driving change and impact worldwide." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Banner */}
        <section className="bg-brand-dark pt-36 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-yellow/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <Link href="/templates/template-1">
              <a className="inline-flex items-center gap-2 text-brand-yellow hover:text-white transition-colors text-sm font-semibold mb-4">
                <ArrowLeft size={16} /> Back to Home
              </a>
            </Link>
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm block mb-3">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Our Board <span className="text-brand-yellow">Members</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl text-lg">
              Meet the visionary leaders steering Charifund's mission to create lasting impact worldwide.
            </p>
          </div>
        </section>

        {/* Full Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {allMembers.map((m, idx) =>
              <div key={idx} className="group">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                    <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  
                    <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: 'linear-gradient(to top, #0a2918ee 0%, #145a3288 55%, transparent 100%)' }} />
                  
                    {/* Socials + Button */}
                    <div className="absolute bottom-4 right-4 z-10 group/btn">
                      <div className="absolute bottom-10 right-0 pb-2 flex flex-col gap-2
                                      opacity-0 group-hover/btn:opacity-100
                                      translate-y-2 group-hover/btn:translate-y-0
                                      pointer-events-none group-hover/btn:pointer-events-auto
                                      transition-all duration-300">



                      
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)' }}>
                          <Instagram size={16} color="#fff" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Twitter size={16} color="#fff" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#4267B2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <Facebook size={16} color="#fff" />
                        </a>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center shadow-lg hover:bg-brand-teal hover:text-white transition-colors hover:scale-110 transform">
                        <Plus size={20} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="text-lg font-extrabold text-brand-dark group-hover:text-brand-teal transition-colors">{m.name}</h4>
                    <p className="text-sm text-gray-400 font-medium">{m.role}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed px-2">{m.bio}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}