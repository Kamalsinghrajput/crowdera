import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, MapPin, Clock, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../../../../src/templates/template-1/components/Navbar';
import Footer from '../../../../src/templates/template-1/components/Footer';
import { events } from '../../../../src/templates/template-1/components/Events';

export default function AllEvents() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>All Events | Charifund</title>
        <meta name="description" content="Browse all upcoming and ongoing charity events by Charifund. Get involved and make a difference." />
      </Head>
      <Navbar />

      <main className="pt-28 pb-20">

        {/* ── Hero banner — matches campaigns/annual-report pages ── */}
        <div className="bg-brand-dark py-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,#FFCA08,transparent_60%)]" />
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_50%,#00715D,transparent_55%)]" />
          <span className="text-brand-yellow font-bold tracking-widest uppercase text-sm mb-3 block">Get Involved</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">All Charity Events</h1>
          <p className="text-white/60 max-w-lg mx-auto text-sm leading-relaxed">
            Join us at our upcoming events and be part of something meaningful. Every event is an opportunity to create real change.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-8 mt-12">

          {/* Back link */}
          <Link href="/templates/template-1">
            <a className="inline-flex items-center gap-2 text-brand-teal font-bold mb-10 hover:gap-3 transition-all text-sm">
              <ArrowLeft size={16} /> Back to Home
            </a>
          </Link>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8 mb-12 p-6 bg-brand-gray rounded-2xl items-center">
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">{events.length}</div>
              <div className="text-xs text-gray-500 font-medium">Total Events</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">
                {events.filter(e => e.status === 'upcoming').length}
              </div>
              <div className="text-xs text-gray-500 font-medium">Upcoming</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-extrabold text-brand-dark">
                {events.filter(e => e.status === 'finished').length}
              </div>
              <div className="text-xs text-gray-500 font-medium">Finished</div>
            </div>
          </div>

          {/* ── Event cards — vertical layout matching campaign cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {events.map((ev) => {
              const pct = Math.min(100, Math.round((ev.raised / ev.goal) * 100));
              return (
                <div
                  key={ev.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all group flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Date badge */}
                    <div className="absolute top-3 left-3 bg-brand-yellow text-brand-dark text-center rounded-xl px-2.5 py-1.5 shadow-md min-w-[48px]">
                      <div className="text-xl font-extrabold leading-none">{ev.day}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest">{ev.month}</div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-brand-teal text-white text-[10px] font-bold py-1 px-2.5 rounded-full">
                        {ev.category}
                      </span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-extrabold text-sm leading-snug">{ev.title}</h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-gray-500 text-xs mb-4 flex-grow leading-relaxed line-clamp-2">{ev.desc}</p>

                    {/* Meta */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar size={11} className="text-brand-teal shrink-0" />
                        {ev.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock size={11} className="text-brand-teal shrink-0" />
                        {ev.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin size={11} className="text-brand-teal shrink-0" />
                        {ev.venue}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] font-bold text-brand-dark mb-1">
                        <span>Raised: <span className="text-brand-teal">₹{ev.raised.toLocaleString('en-IN')}</span></span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-brand-yellow to-brand-teal"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    {/* Status + CTA */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                        ev.status === 'finished'
                          ? 'bg-gray-100 text-gray-500'
                          : 'bg-brand-teal/10 text-brand-teal'
                      }`}>
                        {ev.status === 'finished' ? 'Finished' : '● Upcoming'}
                      </span>
                      <Link href={`/templates/template-1/events/${ev.id}`}>
                        <a className="inline-flex items-center gap-1.5 bg-brand-dark text-white font-bold text-xs px-4 py-2 rounded-full hover:bg-brand-yellow hover:text-brand-dark transition-all">
                          Details <ArrowRight size={11} />
                        </a>
                      </Link>
                    </div>
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
