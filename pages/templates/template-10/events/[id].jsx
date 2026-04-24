import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ArrowLeft, Calendar, Clock, MapPin, Tag, Users,
  CheckCircle, Share2, Heart, Bus, AlarmClock,
  MessageCircle, Info } from
"lucide-react";
import Navbar from "../../../../src/templates/template-10/components/Navbar";
import FooterSection from "../../../../src/templates/template-10/components/FooterSection";
import { events } from "../../../../src/templates/template-10/data/eventsData";

export default function EventDetail() {
  const primaryColor = "#e8547a";
  const secondaryColor = "#9b59b6";

  const router = useRouter();
  const { id } = router.query;
  const ev = events.find((e) => e.id === id);

  if (!ev) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans bg-white">
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`}</style>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-400 mb-4">Event not found.</p>
          <Link href="/templates/template-10/events">
            <span className="text-[var(--primary)] font-bold hover:underline cursor-pointer">← Back to Events</span>
          </Link>
        </div>
      </div>);

  }

  const pct = Math.min(100, Math.round(ev.raised / ev.goal * 100));

  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>{ev.title} | BigHearts Events</title>
        <meta name="description" content={ev.desc} />
      </Head>
      <Navbar />

      {/* ── Full-screen hero image ── */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
        {/* Gradient overlay — BigHearts purple-tinted */}
        <div
          className="absolute inset-0"
          style={{
            background:
            "linear-gradient(to bottom, rgba(45,19,48,0.55) 0%, rgba(26,10,30,0.45) 40%, rgba(45,19,48,0.85) 100%)"
          }} />
        

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          {/* Event type pill */}
          <span className="inline-flex items-center gap-2 bg-t10-rose/20 backdrop-blur-sm border border-t10-rose/40 text-[var(--primary)] text-xs font-bold px-5 py-2 rounded-full mb-6">
            <MapPin size={12} /> {ev.type}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8 max-w-4xl drop-shadow-2xl">
            {ev.title}
          </h1>

          {/* Meta pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
            { icon: <Calendar size={15} />, label: "Date", value: ev.date },
            { icon: <Clock size={15} />, label: "Time", value: ev.time },
            { icon: <MapPin size={15} />, label: "Location", value: ev.venue }].
            map((m, i) =>
            <div
              key={i}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-2xl px-4 sm:px-5 py-3">
              
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-t10-rose to-t10-roseDark flex items-center justify-center text-white shrink-0">
                  {m.icon}
                </div>
                <div className="text-left">
                  <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest">
                    {m.label}
                  </div>
                  <div className="font-extrabold text-sm">{m.value}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {/* Back */}
        <Link href="/templates/template-10/events">
          <span className="inline-flex items-center gap-2 text-[var(--primary)] font-bold mb-8 hover:gap-3 transition-all text-sm cursor-pointer">
            <ArrowLeft size={16} /> Back to Events
          </span>
        </Link>

        {/* Fundraiser attribution */}
        <div className="inline-flex items-center gap-2 text-xs border border-gray-200 rounded-full px-4 py-2 mb-10 shadow-sm"
        style={{ background: "linear-gradient(135deg,#fdf4f6 0%,#f8f0ff 100%)" }}>
          
          <Users size={12} className="text-[var(--primary)]" />
          <span className="text-gray-500">This event supports a fundraising initiative by</span>
          <span className="font-bold text-[var(--secondary)]">{ev.beneficiary}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* ── Left column ── */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {/* About the Event */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-black text-gray-800 mb-6">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-t10-rose to-t10-roseDark flex items-center justify-center shrink-0">
                  <Info size={18} className="text-white" />
                </span>
                About the Event
              </h2>
              <div className="space-y-2">
                {ev.about.split("\n").map((line, i) => {
                  if (!line.trim()) return <div key={i} className="h-2" />;
                  if (line.startsWith("•")) {
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-[7px] shrink-0" />
                        <span>{line.replace("•", "").trim()}</span>
                      </div>);

                  }
                  const isHeading = /^(Why|How|About|Line|Agenda|Event|Schedule|Highlights)/.test(line);
                  return (
                    <p
                      key={i}
                      className={`text-sm leading-relaxed ${
                      isHeading ? "font-extrabold text-gray-800 mt-3" : "text-gray-600"}`
                      }>
                      
                      {line}
                    </p>);

                })}
              </div>
            </div>

            {/* Event Location */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-black text-gray-800 mb-5">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-t10-rose to-t10-roseDark flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </span>
                Event Location
              </h2>
              <p className="flex items-center gap-2 font-extrabold text-gray-800 mb-1">
                <MapPin size={14} className="text-[var(--primary)]" /> {ev.venue}
              </p>
              <p className="text-sm text-gray-400 mb-5">
                Join us at this amazing venue for an unforgettable experience!
              </p>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 h-56 mb-5">
                <iframe
                  title="Event Location"
                  className="w-full h-full border-0"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(ev.venue)}&output=embed`} />
                
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl p-4" style={{ background: "#fdf4f6" }}>
                  <div className="flex items-center gap-2 text-[var(--primary)] font-bold text-sm mb-1.5">
                    <Bus size={14} /> Getting There
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Plan your journey to the venue. Consider public transportation or carpooling options.
                  </p>
                </div>
                <div className="rounded-xl p-4" style={{ background: "#f8f0ff" }}>
                  <div className="flex items-center gap-2 text-[var(--secondary)] font-bold text-sm mb-1.5">
                    <AlarmClock size={14} /> Arrival Time
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Please arrive 15–30 minutes before the event starts to check in and get settled.
                  </p>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h2 className="flex items-center gap-3 text-xl font-black text-gray-800">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-t10-rose to-t10-roseDark flex items-center justify-center shrink-0">
                  <MessageCircle size={18} className="text-white" />
                </span>
                Comments
              </h2>
              <p className="text-sm text-gray-400 mt-5">
                No comments yet. Be the first to share your thoughts!
              </p>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div className="space-y-5">
            {/* Status */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 text-center">
              {ev.status === "finished" ?
              <>
                  <CheckCircle size={40} className="text-[var(--secondary)] mx-auto mb-3" />
                  <p className="font-black text-gray-800 text-lg">Event is Finished</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Thank you for participating in this event
                  </p>
                </> :

              <>
                  <div className="w-10 h-10 rounded-full bg-t10-rose/10 flex items-center justify-center mx-auto mb-3">
                    <Calendar size={22} className="text-[var(--primary)]" />
                  </div>
                  <p className="font-black text-gray-800 text-lg">Event is Upcoming</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Register now to secure your spot
                  </p>
                </>
              }
            </div>

            {/* Fundraising */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <div className="text-3xl font-black text-gray-800 mb-0.5">
                ₹{ev.raised.toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-gray-400 mb-3">
                Raised out of ₹{ev.goal.toLocaleString("en-IN")}
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-1">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-t10-rose to-t10-purple"
                  style={{ width: `${pct}%` }} />
                
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 mb-5">
                <span>{pct}% Complete</span>
                <span>₹{(ev.goal - ev.raised).toLocaleString("en-IN")} to go</span>
              </div>
              <button
                disabled={ev.status === "finished"}
                className="w-full flex items-center justify-center gap-2 font-bold py-3 rounded-full mb-3 transition-all text-sm
                           bg-gradient-to-r from-t10-rose to-t10-roseDark text-white hover:shadow-lg hover:shadow-t10-rose/30
                           disabled:opacity-40 disabled:cursor-not-allowed">


                
                <Heart size={15} /> Donate Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 border-2 border-[var(--secondary)] text-[var(--secondary)] font-bold py-3 rounded-full hover:bg-t10-purple hover:text-white transition-all text-sm">
                <Share2 size={15} /> Share
              </button>
            </div>

            {/* Event Details */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="flex items-center gap-2 font-black text-gray-800 mb-4 text-base">
                <Info size={16} className="text-[var(--primary)]" /> Event Details
              </h3>
              {[
              { icon: <Calendar size={13} />, label: "Date", value: ev.date },
              { icon: <Clock size={13} />, label: "Time", value: ev.time },
              { icon: <MapPin size={13} />, label: "Location", value: ev.venue },
              { icon: <Tag size={13} />, label: "Category", value: ev.category },
              { icon: <Users size={13} />, label: "Max Attendees", value: String(ev.maxAttendees) }].
              map((d, i) =>
              <div key={i} className="rounded-xl px-4 py-3 mb-2" style={{ background: "#fdf4f6" }}>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">
                    <span className="text-[var(--primary)]">{d.icon}</span> {d.label}
                  </div>
                  <div className="text-sm font-bold text-gray-800">{d.value}</div>
                </div>
              )}
            </div>

            {/* Organizer */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-black text-[var(--secondary)] mb-4 text-base">Organizer</h3>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-t10-rose to-t10-roseDark flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  {ev.organizer.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{ev.organizer.name}</div>
                  <div className="text-xs text-gray-400">{ev.organizer.email}</div>
                </div>
              </div>
            </div>

            {/* Beneficiary */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-black text-[var(--secondary)] mb-4 text-base">Beneficiary</h3>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-t10-rose/15 flex items-center justify-center shrink-0">
                  <Heart size={18} className="text-[var(--primary)]" />
                </div>
                <span className="font-bold text-gray-800 text-sm">{ev.beneficiary}</span>
              </div>
            </div>

            {/* Team Fundraisers */}
            <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100">
              <h3 className="font-black text-[var(--secondary)] mb-4 text-base">
                Team Fundraisers (1)
              </h3>
              <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: "#fdf4f6" }}>
                <div className="w-10 h-10 rounded-full bg-t10-purple/10 flex items-center justify-center shrink-0">
                  <Users size={16} className="text-[var(--secondary)]" />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm">{ev.organizer.name}</div>
                  <div className="text-[11px] text-gray-400">
                    Raised ₹0 out of ₹{Math.round(ev.goal * 0.08).toLocaleString("en-IN")} goal.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

}