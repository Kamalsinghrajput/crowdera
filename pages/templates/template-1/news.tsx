import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../../src/templates/template-1/components/Navbar';
import Footer from '../../../src/templates/template-1/components/Footer';
import LatestNews from '../../../src/templates/template-1/components/LatestNews';
import { ArrowLeft } from 'lucide-react';

export default function Template1News() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>News &amp; Articles | Charifund</title>
        <meta name="description" content="Read the latest news and articles from Charifund — stories of impact, health, education, and community change." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* Page Hero Banner */}
        <section className="bg-brand-dark pt-36 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-yellow/8 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Link href="/templates/template-1">
                <a className="inline-flex items-center gap-2 text-brand-yellow hover:text-white transition-colors text-sm font-semibold">
                  <ArrowLeft size={16} />
                  Back to Home
                </a>
              </Link>
            </div>
            <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm block mb-3">Our Blog</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              News &amp; <span className="text-brand-yellow">Articles</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl text-lg">
              Stay up to date with our latest stories, campaigns, and community impact from around the world.
            </p>
          </div>
        </section>

        {/* News Section */}
        <LatestNews />
      </main>

      <Footer />
    </div>
  );
}
