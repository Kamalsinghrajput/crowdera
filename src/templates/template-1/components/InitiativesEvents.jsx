import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";
import { events } from "./Events";

const InitiativesEvents = ({ data: initialEventsData }) => {
  const eventsList = initialEventsData || events;

  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div key={eventItem.id} className="bg-white rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col border-2 border-gray-100 opacity-0">

            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {eventItem.isVerified && (
                  <span className="bg-[#223632] text-white text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-[var(--primary)] text-[#223632] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">

              {/* Title */}
              <h3 className="font-black text-lg leading-tight text-[#223632] group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-2">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-3">
                <Users size={14} className="text-[#223632] shrink-0 opacity-70" />
                <span className="text-sm text-[#223632] font-black uppercase tracking-wider opacity-70">{eventItem.organizer}</span>
              </div>

              {/* Date / Time */}
              <div className="flex items-start gap-2 bg-gray-50 rounded-2xl px-4 py-3 mb-4 border border-gray-100">
                <Calendar size={16} className="text-[#223632] mt-0.5 shrink-0 opacity-70" />
                <div>
                  <div className="text-xs font-black text-[#223632] uppercase tracking-widest">{eventItem.date}</div>
                  <div className="text-[11px] font-bold text-gray-400">{eventItem.time}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black text-[#223632] uppercase tracking-widest">Fundraising Progress</span>
                  <span className="text-xs font-black text-[#223632]">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${progressPercentage}%`,
                      background: `var(--primary)`
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <span>Raised: {eventItem.raised === 0 ? "0" : `₹${eventItem.raised.toLocaleString("en-IN")}`}</span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-6">
                <span className="bg-[#223632]/5 text-[#223632] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest border border-[#223632]/10">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-[#223632] text-white font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-[var(--primary)] hover:text-[#223632] transition-all shadow-md active:scale-95">
                    Donate
                  </button>
                  <button className="bg-white text-[#223632] font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest border-2 border-[#223632] hover:bg-gray-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-[var(--primary)] text-[#223632] font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95 border-2 border-transparent">
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
