import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";

export const events = [
  {
    id: "event-1",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
    date: "15 Sept 2024",
    title: "Global Charity Run for Health",
    organizer: "Health Foundation",
    time: "07:00 AM",
    location: "Mumbai, India",
    desc: "Join us for our annual charity run to raise funds for critical healthcare services.",
    raised: 12000,
    goal: 50000,
    isVerified: true,
    isTaxExempt: true,
    category: "Healthcare",
    eventType: "physical",
    status: "active"
  }
];

const InitiativesEvents = ({ data: initialEventsData, primaryColor = "#f59e0b" }) => {
  const eventsList = initialEventsData || events;

  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div key={eventItem.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col opacity-0">

            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {eventItem.isVerified && (
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold py-1 px-3 rounded uppercase tracking-widest shadow-sm">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-orange-500 text-white text-[10px] font-bold py-1 px-3 rounded uppercase tracking-widest shadow-sm">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-xl font-bold leading-tight text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2 mb-4">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-4">
                <Users size={14} className="text-orange-500 shrink-0" />
                <span className="text-xs text-orange-500 font-bold uppercase tracking-wider">{eventItem.organizer}</span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-2 bg-gray-50 rounded-xl px-4 py-3 mb-6 border border-gray-100">
                <Calendar size={16} className="text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-gray-900 uppercase tracking-widest">{eventItem.date}</div>
                  <div className="text-[11px] font-bold text-gray-400">{eventItem.time}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fundraising Progress</span>
                  <span className="text-sm font-black text-orange-500">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-orange-500"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <span>Raised: ₹{eventItem.raised.toLocaleString("en-IN")}</span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-orange-50 text-orange-500 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest border border-orange-100">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-gray-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-lg">
                    Donate
                  </button>
                  <button className="bg-white text-gray-900 font-bold py-3 rounded-xl text-xs border-2 border-gray-900 hover:bg-gray-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg active:scale-95 border-2 border-transparent">
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
