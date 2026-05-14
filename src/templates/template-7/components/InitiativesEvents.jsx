import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";

export const events = [
  {
    id: "event-7-1",
    img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80",
    date: "22 Oct 2024",
    title: "Youth Leadership Summit",
    organizer: "Future Leaders",
    time: "10:00 AM",
    location: "Bangalore, India",
    desc: "Empowering the next generation of social entrepreneurs.",
    raised: 5000,
    goal: 20000,
    isVerified: true,
    isTaxExempt: true,
    category: "Education",
    eventType: "physical",
    status: "active"
  }
];

const InitiativesEvents = ({ data: initialEventsData, primaryColor = "#4f46e5" }) => {
  const eventsList = initialEventsData || events;

  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div key={eventItem.id} className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] transition-all duration-500 group border border-slate-100 flex flex-col opacity-0">

            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                {eventItem.isVerified && (
                  <span className="bg-white text-indigo-600 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-indigo-600 text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-4">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-5">
                <Users size={14} className="text-indigo-600 shrink-0" />
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-widest">{eventItem.organizer}</span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-3 bg-slate-50 rounded-2xl px-4 py-4 mb-6 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">{eventItem.date}</div>
                  <div className="text-[11px] font-bold text-slate-400">{eventItem.time}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fundraising Progress</span>
                  <span className="text-sm font-black text-indigo-600">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-indigo-600"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>Raised: ₹{eventItem.raised.toLocaleString("en-IN")}</span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider border border-indigo-100">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-slate-900 text-white font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                    Donate
                  </button>
                  <button className="bg-white text-slate-900 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-indigo-100 active:scale-95 border-2 border-transparent">
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
