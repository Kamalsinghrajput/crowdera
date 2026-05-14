import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";

export const events = [
  {
    id: "event-9-1",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    date: "12 Dec 2024",
    title: "Annual Fundraising Gala",
    organizer: "Global Hope",
    time: "06:30 PM",
    location: "New Delhi, India",
    desc: "An evening of inspiration and giving to support our 2025 initiatives.",
    raised: 50000,
    goal: 100000,
    isVerified: true,
    isTaxExempt: true,
    category: "Gala",
    eventType: "physical",
    status: "active"
  }
];

const InitiativesEvents = ({ data: initialEventsData, primaryColor = "#dc2626" }) => {
  const eventsList = initialEventsData || events;

  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div key={eventItem.id} className="bg-white rounded-none border-b-8 border-black overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col opacity-0">

            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-72 overflow-hidden border-b-4 border-black">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-0 left-0 flex flex-col gap-0">
                {eventItem.isVerified && (
                  <span className="bg-black text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em] w-fit">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-red-600 text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em] w-fit">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="font-black text-3xl text-black mb-6 uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-2 mb-6 bg-gray-100 p-3 border-l-4 border-red-600">
                <Users size={16} className="text-black shrink-0" />
                <span className="text-xs text-black font-black uppercase tracking-[0.1em]">{eventItem.organizer}</span>
              </div>

              {/* Date / Time Box */}
              <div className="border-4 border-black p-4 mb-6 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-red-600" />
                  <div>
                    <div className="text-xs font-black text-black uppercase tracking-[0.2em]">{eventItem.date}</div>
                    <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest">{eventItem.time}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-tight mb-8 font-bold uppercase tracking-tight">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="border-4 border-black p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] italic">Live Progress</span>
                  <span className="text-2xl font-black text-red-600 italic">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 h-6 mb-4 border-2 border-black relative overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-0 border-t-2 border-black pt-4 mt-2">
                  <div className="border-r-2 border-black">
                    <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Raised</span>
                    <span className="text-sm font-black text-black">₹{eventItem.raised.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-right pl-4">
                    <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Target</span>
                    <span className="text-sm font-black text-black">₹{eventItem.goal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-black text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em]">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-black text-white font-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all active:translate-y-1">
                    Donate
                  </button>
                  <button className="bg-white text-black font-black py-5 uppercase tracking-[0.2em] text-xs border-4 border-black hover:bg-gray-100 transition-all active:translate-y-1">
                    View
                  </button>
                </div>
                <button className="w-full bg-red-600 text-white font-black py-6 uppercase tracking-[0.3em] text-xs shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:translate-y-2">
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
