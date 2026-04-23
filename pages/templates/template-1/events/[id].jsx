import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ArrowLeft, Calendar, Clock, MapPin, Tag, Users,
  CheckCircle, Share2, Heart, Bus, AlarmClock,
  MessageCircle, Info } from
'lucide-react';
import Navbar from '../../../../src/templates/template-1/components/Navbar';
import Footer from '../../../../src/templates/template-1/components/Footer';
import { events } from '../../../../src/templates/template-1/components/Events';

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const ev = events.find((e) => e.id === id);

  if (!ev) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans bg-white">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-400 mb-4">Event not found.</p>
          <Link href="/templates/template-1/events">
            <a className="text-brand-teal font-bold hover:underline">← Back to Events</a>
          </Link>
        </div>
      </div>);

  }

  const pct = Math.min(100, Math.round(ev.raised / ev.goal * 100));

  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>{ev.title} | Charifund Events</title>
        <meta name="description" content={ev.desc} />
      </Head>
      <Navbar />

      {/* ── Full-screen hero image ── */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
        {/* Gradient overlay — brand-dark tinted */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Event type pill */}
          <span className="inline-flex items-center gap-2 bg-brand-yellow/20 backdrop-blur-sm border border-brand-yellow/40 text-brand-yellow text-xs font-bold px-5 py-2 rounded-full mb-6">
            <MapPin size={12} /> {ev.type}
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-10 max-w-4xl drop-shadow-2xl">
            {ev.title}
          </h1>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
            { icon: <Calendar size={15} />, label: 'Date', value: ev.date },
            { icon: <Clock size={15} />, label: 'Time', value: ev.time },
            { icon: <MapPin size={15} />, label: 'Location', value: ev.venue }].
            map((m, i) =>
            <div key={i}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl px-5 py-3">
                <div className="w-8 h-8 rounded-xl bg-brand-yellow flex items-center justify-center text-brand-dark shrink-0">
                  {m.icon}
                </div>
                <div className="text-left">
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{m.label}</div>
                  <div className="font-extrabold text-sm">{m.value}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="container mx-auto px-4 md:px-8 py-12">

        {/* Back */}
        <Link href="/templates/template-1/events">
          <a className="inline-flex items-center gap-2 text-brand-teal font-bold mb-8 hover:gap-3 transition-all text-sm">
            <ArrowLeft size={16} /> Back to Events
          </a>
        </Link>

        {/* Fundraiser attribution */}
        <div className="inline-flex items-center gap-2 text-xs border border-gray-200 bg-brand-gray rounded-full px-4 py-2 mb-10 shadow-sm">
          <Users size={12} className="text-brand-yellow" />
          <span className="text-gray-500">This event supports a fundraising initiative by</span>
          <span className="font-bold text-brand-teal">{ev.beneficiary}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* About the Event */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-brand-dark mb-6">
                <span className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center shrink-0">
                  <Info size={18} className="text-brand-dark" />
                </span>
                About the Event
              </h2>
              <div className="space-y-2">
                {ev.about.split('\n').map((line, i) => {
                  if (!line.trim()) return <div key={i} className="h-2" />;
                  if (line.startsWith('•')) {
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-[7px] shrink-0" />
                        <span>{line.replace('•', '').trim()}</span>
                      </div>);

                  }
                  const isHeading = /^(Why|How|About|Line|Agenda|Event|Schedule|Highlights)/.test(line);
                  return (
                    <p key={i} className={`text-sm leading-relaxed ${isHeading ? 'font-extrabold text-brand-dark mt-3' : 'text-gray-600'}`}>
                      {line}
                    </p>);

                })}
              </div>
            </div>

            {/* Event Location */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-brand-dark mb-5">
                <span className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-brand-dark" />
                </span>
                Event Location
              </h2>
              <p className="flex items-center gap-2 font-extrabold text-brand-dark mb-1">
                <MapPin size={14} className="text-brand-teal" /> {ev.venue}
              </p>
              <p className="text-sm text-gray-400 mb-5">Join us at this amazing venue for an unforgettable experience!</p>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-56 mb-5">
                <iframe
                  title="Event Location"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(ev.venue)}&output=embed`} />
                
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-gray rounded-xl p-4">
                  <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-1.5">
                    <Bus size={14} /> Getting There
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Plan your journey to the venue. Consider public transportation or carpooling options.
                  </p>
                </div>
                <div className="bg-brand-gray rounded-xl p-4">
                  <div className="flex items-center gap-2 text-brand-teal font-bold text-sm mb-1.5">
                    <AlarmClock size={14} /> Arrival Time
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Please arrive 15–30 minutes before the event starts to check in and get settled.
                  </p>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-brand-dark">
                <span className="w-9 h-9 rounded-xl bg-brand-yellow flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-brand-dark" />
                </span>
                Comments
              </h2>
              <p className="text-sm text-gray-400 mt-5">No comments yet. Be the first to share your thoughts!</p>
            </div>

          </div>

          {/* ── Right sidebar ── */}
          <div className="space-y-5">

            {/* Status */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 text-center">
              {ev.status === 'finished' ?
              <>
                  <CheckCircle size={40} className="text-brand-teal mx-auto mb-3" />
                  <p className="font-extrabold text-brand-dark text-lg">Event is Finished</p>
                  <p className="text-xs text-gray-400 mt-1">Thank you for participating in this event</p>
                </> :

              <>
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto mb-3">
                    <Calendar size={22} className="text-brand-teal" />
                  </div>
                  <p className="font-extrabold text-brand-dark text-lg">Event is Upcoming</p>
                  <p className="text-xs text-gray-400 mt-1">Register now to secure your spot</p>
                </>
              }
            </div>

            {/* Fundraising */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="text-3xl font-extrabold text-brand-dark mb-0.5">
                ₹{ev.raised.toLocaleString('en-IN')}
              </div>
              <div className="text-xs text-gray-400 mb-3">Raised out of ₹{ev.goal.toLocaleString('en-IN')}</div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-1">
                <div className="h-2 rounded-full bg-gradient-to-r from-brand-yellow to-brand-teal" style={{ width: `${pct}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mb-5">
                <span>{pct}% Complete</span>
                <span>₹{(ev.goal - ev.raised).toLocaleString('en-IN')} to go</span>
              </div>
              <button
                disabled={ev.status === 'finished'}
                className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-full mb-3 transition-all text-sm
                           bg-brand-dark text-white hover:bg-brand-yellow hover:text-brand-dark
                           disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-dark disabled:hover:text-white">


                
                <Heart size={15} /> Donate Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 border-2 border-brand-teal text-brand-teal font-bold py-3 rounded-full hover:bg-brand-teal hover:text-white transition-all text-sm">
                <Share2 size={15} /> Share
              </button>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="flex items-center gap-2 font-extrabold text-brand-dark mb-4 text-base">
                <Info size={16} className="text-brand-teal" /> Event Details
              </h3>
              {[
              { icon: <Calendar size={13} />, label: 'Date', value: ev.date },
              { icon: <Clock size={13} />, label: 'Time', value: ev.time },
              { icon: <MapPin size={13} />, label: 'Location', value: ev.venue },
              { icon: <Tag size={13} />, label: 'Category', value: ev.category },
              { icon: <Users size={13} />, label: 'Max Attendees', value: String(ev.maxAttendees) }].
              map((d, i) =>
              <div key={i} className="bg-brand-gray rounded-xl px-4 py-3 mb-2">
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    <span className="text-brand-teal">{d.icon}</span> {d.label}
                  </div>
                  <div className="text-sm font-bold text-brand-dark">{d.value}</div>
                </div>
              )}
            </div>

            {/* Organizer */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-extrabold text-brand-teal mb-4 text-base">Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-dark flex items-center justify-center text-brand-yellow font-extrabold text-lg shrink-0">
                  {ev.organizer.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">{ev.organizer.name}</div>
                  <div className="text-xs text-gray-400">{ev.organizer.email}</div>
                </div>
              </div>
            </div>

            {/* Beneficiary */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-extrabold text-brand-teal mb-4 text-base">Beneficiary</h3>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-yellow/20 flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-brand-dark" />
                </div>
                <span className="font-bold text-brand-dark text-sm">{ev.beneficiary}</span>
              </div>
            </div>

            {/* Team Fundraisers */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-extrabold text-brand-teal mb-4 text-base">Team Fundraisers (1)</h3>
              <div className="flex items-center gap-3 bg-brand-gray rounded-xl p-3">
                <div className="w-10 h-10 rounded-full bg-brand-dark/10 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-brand-dark" />
                </div>
                <div>
                  <div className="font-bold text-brand-dark text-sm">{ev.organizer.name}</div>
                  <div className="text-[11px] text-gray-400">
                    Raised ₹0 out of ₹{Math.round(ev.goal * 0.08).toLocaleString('en-IN')} goal.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>);

}