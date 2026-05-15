import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";

export const events = [
  {
    id: "event-1",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
    date: "10 August",
    title: "Annual Food & Nutrition Drive",
    organizer: "Brooklyn Simmons",
    time: "09:00 AM - 01:00 PM",
    location: "Mumbai, India",
    desc: "A massive community drive to distribute nutrition kits to families in underserved urban areas.",
    raised: 25000,
    goal: 50000,
    isVerified: true,
    isTaxExempt: true,
    category: "Nutrition",
    eventType: "physical",
    status: "active",
  },
];

const InitiativesEvents = ({ data: initialEventsData }) => {
  const eventsList = initialEventsData || events;

  return (
    <>
      <style>{`
        :root {
          --primary: #007B39;
          --secondary: #FFA415;
          --bg-color: #121d18;
        }
        .t2-btn { display: inline-flex; align-items: center; gap: 0; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
        .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--bg-color, #121d18); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
        .t2-btn span::before { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
        .t2-btn:hover span::before { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
        .t2-btn:hover span { color: white; }
        .t2-btn i { position: relative; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: var(--bg-color, #121d18); border-radius: 50%; font-size: 18px; color: white; overflow: hidden; transition: all 500ms ease; z-index: 2; margin-left: -10px; }
        .t2-btn i::after { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: right; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
        .t2-btn:hover i::after { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
        .t2-btn:hover i { color: white; }
        .t2-btn.t2-btn-secondary span, .t2-btn.t2-btn-secondary i { background-color: var(--secondary, #FFA415); color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary span::before, .t2-btn.t2-btn-secondary i::after { background-color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary:hover span, .t2-btn.t2-btn-secondary:hover i { color: white; }
        
        /* Small Variant for Card */
        .t2-btn-sm span { height: 40px; padding: 0 20px; font-size: 11px; }
        .t2-btn-sm i { width: 40px; height: 40px; font-size: 14px; }
      `}</style>

      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div key={eventItem.id} className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col border border-gray-100 opacity-0">

            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {eventItem.isVerified && (
                  <span className="bg-[var(--primary)] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-[var(--secondary)] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-[var(--bg-color)] group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-4 font-sora">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-4">
                <Users size={14} className="text-[var(--primary)] shrink-0" />
                <span className="text-sm text-[var(--primary)] font-black uppercase tracking-wider">{eventItem.organizer}</span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-2 bg-gray-50 rounded-2xl px-4 py-3 mb-6 border border-gray-100">
                <Calendar size={16} className="text-[var(--primary)] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[var(--bg-color)] uppercase tracking-widest">{eventItem.date}</div>
                  <div className="text-[11px] font-bold text-gray-400">{eventItem.time}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
               <div className="bg-[#fcf8f1] rounded-2xl p-6 mb-8 border border-[#EBD3AF]/30">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-black text-[var(--bg-color)] uppercase tracking-widest">Fundraising Progress</span>
                  <span className="text-sm font-black text-[var(--primary)]">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-[var(--primary)]"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <span>Raised: ₹{eventItem.raised.toLocaleString("en-IN")}</span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-[var(--secondary)]/10 text-[var(--bg-color)] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest border border-[var(--secondary)]/20">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3 items-center">
                  <button className="t2-btn t2-btn-secondary t2-btn-sm">
                    <span>Donate Now</span>
                  </button>
                  <button className="bg-white text-[var(--bg-color)] font-black h-[40px] px-6 rounded-full text-[11px] border-2 border-[var(--bg-color)] hover:bg-[var(--bg-color)] hover:text-white transition-all active:scale-95 uppercase tracking-widest">
                    View
                  </button>
                </div>
                <button className="w-full bg-[var(--secondary)] text-white font-black py-3 rounded-full text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95 border-2 border-transparent">
                  Fundraise
                </button>
              </div>

            </div>
          </div>
        );
      })}
    </>
  );
};

export default InitiativesEvents;
