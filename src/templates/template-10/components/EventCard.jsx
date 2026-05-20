import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";

export default function EventCard({ event }) {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col sm:flex-row h-full">
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`}</style>
      {/* Image with date badge */}
      <div className="relative w-full sm:w-44 md:w-48 shrink-0 h-52 sm:h-auto overflow-hidden">
        <img
          src={event.img}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-3 left-3 bg-gradient-to-br from-t10-rose to-t10-roseDark text-white text-center rounded-lg px-2.5 py-1.5 min-w-[48px] shadow-lg">
          <div className="text-xl font-black leading-none">{event.day}</div>
          <div className="text-[9px] font-bold uppercase tracking-wider opacity-80">
            {event.month}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-extrabold text-gray-800 text-[17px] mb-1 leading-snug group-hover:text-t10-rose transition-colors duration-300">
            {event.title}
          </h3>
          <p className="text-[11px] text-gray-400 font-semibold mb-1.5">
            {event.subtitle}
          </p>
          <p className="text-xs text-gray-500 line-clamp-2 mb-3 leading-relaxed">
            {event.desc}
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[var(--primary)] font-semibold mb-0.5">
            <MapPin size={12} /> Venue
          </div>
          <p className="text-xs text-gray-500 mb-2">{event.venue}</p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar size={12} /> {event.date}
          </div>
        </div>
        <Link href={`/templates/template-10/events/${event.id}`}>
          <span className="mt-4 inline-flex items-center gap-2 bg-[var(--primary)] text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-t10-roseDark transition-all duration-300 self-start cursor-pointer">
            <ArrowRight size={12} /> Event Details
          </span>
        </Link>
      </div>
    </div>
  );
}
