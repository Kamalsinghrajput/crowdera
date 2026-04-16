import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Heart, Target } from 'lucide-react';
import Navbar from '../../../../src/templates/template-1/components/Navbar';
import Footer from '../../../../src/templates/template-1/components/Footer';

const allCampaigns = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
    title: "Empowering Children's Futures, One Voice at a Time!",
    tag: "Children & Elderly",
    desc: "Safeguarding children's rights and creating a brighter future for every child in need. We work with local communities to provide education, nutrition, and emotional support.",
    raised: 540564, goal: 1000000,
  },
  {
    img: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&auto=format&fit=crop&q=80",
    title: "Supporting Joyful Minds Through Education",
    tag: "Education",
    desc: "Helping underprivileged children get quality education and building schools in rural areas. Every child deserves the right to learn.",
    raised: 357811, goal: 500000,
  },
  {
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80",
    title: "Volunteer Groups Making Real Impact",
    tag: "Community",
    desc: "Join our campaign to bring joy to children, women and the elderly across the globe through hands-on volunteer programs and community outreach.",
    raised: 232609, goal: 400000,
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80",
    title: "Clean Water For Every Village",
    tag: "Clean Water",
    desc: "Building wells and water purification systems to bring safe drinking water to communities where access is still a life-or-death challenge.",
    raised: 185000, goal: 300000,
  },
  {
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=80",
    title: "Medical Aid For Remote Areas",
    tag: "Healthcare",
    desc: "Delivering free healthcare and medicine to underserved regions across the globe, including mobile clinics and telemedicine services.",
    raised: 410000, goal: 700000,
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80",
    title: "Food Security For Families In Crisis",
    tag: "Hunger Relief",
    desc: "Providing nutritious meals to families in need, ensuring no child goes to bed hungry, through food banks and community kitchens.",
    raised: 290000, goal: 500000,
  },
  {
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80",
    title: "Safe Shelter For Displaced Families",
    tag: "Shelter",
    desc: "Constructing emergency shelters and transitional housing for families displaced by conflict, natural disasters, or extreme poverty.",
    raised: 175000, goal: 450000,
  },
  {
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
    title: "Reforestation & Climate Action",
    tag: "Environment",
    desc: "Planting 1 million trees and restoring degraded ecosystems to fight climate change and protect biodiversity for future generations.",
    raised: 95000, goal: 250000,
  },
  {
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    title: "Mental Health Support Programmes",
    tag: "Mental Health",
    desc: "Providing accessible mental health resources, counselling, and peer support networks for communities with limited access to professional care.",
    raised: 62000, goal: 200000,
  },
];

const tagColors: Record<string, string> = {
  'Children & Elderly': '#EF5350',
  'Education':          '#42A5F5',
  'Community':          '#66BB6A',
  'Clean Water':        '#29B6F6',
  'Healthcare':         '#EC407A',
  'Hunger Relief':      '#FFA726',
  'Shelter':            '#AB47BC',
  'Environment':        '#26A69A',
  'Mental Health':      '#7E57C2',
};

export default function AllCampaigns() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>All Campaigns | Charifund</title>
        <meta name="description" content="Browse all active fundraising campaigns by Charifund. Every donation makes a real difference." />
      </Head>

      <Navbar />

      <main className="pt-28 pb-20">
        {/* Hero banner */}
        <div className="bg-brand-dark py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,#FFCA08,transparent_60%)]" />
          <p className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-2">Make A Difference</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">All Campaigns</h1>
          <p className="text-white/60 max-w-xl mx-auto">
            Every donation — big or small — creates ripples of change. Choose a cause that speaks to your heart.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-12">
          {/* Back link */}
          <Link href="/templates/template-1">
            <a className="inline-flex items-center gap-2 text-brand-teal font-bold mb-10 hover:gap-3 transition-all">
              <ArrowLeft size={18} /> Back to Home
            </a>
          </Link>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 mb-12 p-6 bg-brand-gray rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Target size={20} className="text-brand-teal" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-brand-dark">{allCampaigns.length}</div>
                <div className="text-xs text-gray-500">Active Campaigns</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                <Heart size={20} className="text-brand-dark" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-brand-dark">
                  ₹{allCampaigns.reduce((s, c) => s + c.raised, 0).toLocaleString('en-IN')}
                </div>
                <div className="text-xs text-gray-500">Total Raised</div>
              </div>
            </div>
          </div>

          {/* Campaign grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCampaigns.map((c, i) => {
              const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
              const tagColor = tagColors[c.tag] || '#00715D';
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.07)] hover:shadow-xl transition-all group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span
                      className="absolute top-3 left-3 text-white text-[11px] font-bold py-1 px-3 rounded-full"
                      style={{ backgroundColor: tagColor }}
                    >
                      {c.tag}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h2 className="text-base font-extrabold text-brand-dark mb-2 leading-snug">
                      {c.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{c.desc}</p>

                    {/* Progress */}
                    <div className="flex justify-between text-xs font-bold text-brand-dark mb-1.5">
                      <span>Raised: <span className="text-brand-teal">₹{c.raised.toLocaleString('en-IN')}</span></span>
                      <span>{pct}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-4 overflow-hidden">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-teal transition-all duration-700"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mb-5">
                      <span>Goal: ₹{c.goal.toLocaleString('en-IN')}</span>
                    </div>

                    <button className="w-full bg-brand-dark text-white font-bold py-3 rounded-full hover:bg-brand-teal transition-colors text-sm">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
