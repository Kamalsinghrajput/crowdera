import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { events } from "../data/eventsData";
import EventCard from "./EventCard";

export default function EventsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  const preview = events.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      id="events"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background: "#511F54",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-t10-rose/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-t10-purple/10 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header row */}
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4
                      transition-all duration-700 ease-out ${
                        isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-10 h-0.5 bg-t10-rose" />
              <span className="text-t10-rose font-extrabold text-xs uppercase tracking-[3px]">
                Ongoing Events
              </span>
            </div>
            <h2 className="font-black text-white text-3xl md:text-4xl lg:text-[44px] leading-tight">
              Get Involved: Upcoming
              <br />
              <span className="text-t10-rose">Charity Events</span>
            </h2>
          </div>
          <Link href="/templates/template-10/events">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-t10-rose to-t10-roseDark text-white font-extrabold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(232,84,122,0.4)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,84,122,0.5)] transition-all duration-300 cursor-pointer flex-shrink-0">
              <ArrowRight size={14} /> Explore More
            </span>
          </Link>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {preview.map((ev, i) => (
            <div
              key={ev.id}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isReady ? 1 : 0,
                transform: isReady ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${150 + i * 120}ms`,
              }}
            >
              <EventCard event={ev} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
