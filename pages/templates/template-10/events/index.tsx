import Head from "next/head";
import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Calendar, ArrowRight } from "lucide-react";
import Navbar from "../../../../src/templates/template-10/components/Navbar";
import FooterSection from "../../../../src/templates/template-10/components/FooterSection";
import { events } from "../../../../src/templates/template-10/data/eventsData";

export default function AllEventsPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Head>
        <title>All Events | BigHearts – Template 10</title>
        <meta
          name="description"
          content="Browse all upcoming and ongoing charity events. Get involved and make a difference."
        />
      </Head>
      <Navbar />

      <main className="pt-[72px]">
        {/* ── Hero banner ── */}
        <div
          className="relative py-20 md:py-28 text-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #7C3682 0%, #5E2A63 50%, #2d1330 100%)",
          }}
        >
          {/* Decorative glows */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_30%_50%,#e8547a,transparent_60%)]" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_50%,#9b59b6,transparent_55%)]" />

          <div className="relative z-10 px-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-10 h-0.5 bg-t10-rose" />
              <span className="text-t10-rose font-extrabold tracking-widest uppercase text-sm">
                Get Involved
              </span>
              <span className="block w-10 h-0.5 bg-t10-rose" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              All Charity Events
            </h1>
            <p className="text-white/60 max-w-lg mx-auto text-sm leading-relaxed">
              Join us at our upcoming events and be part of something meaningful.
              Every event is an opportunity to create real change.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 md:mt-14 pb-20">
          {/* Back link */}
          <Link href="/templates/template-10">
            <span className="inline-flex items-center gap-2 text-t10-rose font-bold mb-10 hover:gap-3 transition-all text-sm cursor-pointer">
              <ArrowLeft size={16} /> Back to Home
            </span>
          </Link>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 md:gap-8 mb-12 p-5 md:p-6 rounded-2xl items-center"
            style={{ background: "linear-gradient(135deg,#fdf4f6 0%,#f8f0ff 100%)" }}
          >
            <div>
              <div className="text-2xl font-black text-gray-800">{events.length}</div>
              <div className="text-xs text-gray-500 font-semibold">Total Events</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-black text-gray-800">
                {events.filter((e) => e.status === "upcoming").length}
              </div>
              <div className="text-xs text-gray-500 font-semibold">Upcoming</div>
            </div>
            <div className="h-8 w-px bg-gray-200 hidden md:block" />
            <div>
              <div className="text-2xl font-black text-gray-800">
                {events.filter((e) => e.status === "finished").length}
              </div>
              <div className="text-xs text-gray-500 font-semibold">Finished</div>
            </div>
          </div>

          {/* Event cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => {
              const pct = Math.min(
                100,
                Math.round((ev.raised / ev.goal) * 100)
              );
              return (
                <div
                  key={ev.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-all group flex flex-col border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                    {/* Date badge */}
                    <div className="absolute top-3 left-3 bg-gradient-to-br from-t10-rose to-t10-roseDark text-white text-center rounded-lg px-2.5 py-1.5 shadow-md min-w-[48px]">
                      <div className="text-xl font-black leading-none">
                        {ev.day}
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-widest opacity-80">
                        {ev.month}
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-t10-purple text-white text-[10px] font-bold py-1 px-2.5 rounded-full">
                        {ev.category}
                      </span>
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-extrabold text-sm leading-snug">
                        {ev.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-gray-500 text-xs mb-4 flex-grow leading-relaxed line-clamp-2">
                      {ev.desc}
                    </p>

                    {/* Meta */}
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Calendar
                          size={11}
                          className="text-t10-rose shrink-0"
                        />
                        {ev.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <Clock
                          size={11}
                          className="text-t10-rose shrink-0"
                        />
                        {ev.time}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <MapPin
                          size={11}
                          className="text-t10-rose shrink-0"
                        />
                        {ev.venue}
                      </div>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-[11px] font-bold text-gray-800 mb-1">
                        <span>
                          Raised:{" "}
                          <span className="text-t10-rose">
                            ₹{ev.raised.toLocaleString("en-IN")}
                          </span>
                        </span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-t10-rose to-t10-purple"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>

                    {/* Status + CTA */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                          ev.status === "finished"
                            ? "bg-gray-100 text-gray-500"
                            : "bg-t10-rose/10 text-t10-rose"
                        }`}
                      >
                        {ev.status === "finished" ? "Finished" : "● Upcoming"}
                      </span>
                      <Link href={`/templates/template-10/events/${ev.id}`}>
                        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-t10-rose to-t10-roseDark text-white font-bold text-xs px-4 py-2 rounded-full hover:shadow-lg transition-all cursor-pointer">
                          Details <ArrowRight size={11} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
