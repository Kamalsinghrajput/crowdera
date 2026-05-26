import React from "react";
import Image from "next/image";
import { Users, Calendar } from "lucide-react";
import { gsap } from "gsap";

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

const InitiativesEvents = ({
  data: initialEventsData,
  primaryColor = "var(--primary)",
  secondaryColor = "var(--secondary)",
}) => {
  const eventsList = initialEventsData || events;





  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((eventItem.raised / eventItem.goal) * 100),
        );
        return (
          <div
            key={eventItem.id}
            className="bg-white rounded-2xl overflow-hidden group flex flex-col border border-gray-100 opacity-0 relative"
          >
            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={eventItem.img}
                alt={eventItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {eventItem.isVerified && (
                  <span className="bg-[var(--primary)] text-white text-[12px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-lg">
                    Verified
                  </span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-[var(--secondary)] text-[#2b1f18] text-[12px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-lg">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-[#111] group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-4">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-5">
                <Users size={14} className="text-[var(--primary)] shrink-0" />
                <span className="text-[13px] text-[var(--primary)] font-bold uppercase tracking-widest">
                  {eventItem.organizer}
                </span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-2 bg-gray-50 rounded-xl px-4 py-4 mb-6 border border-gray-100">
                <Calendar
                  size={16}
                  className="text-[var(--primary)] mt-0.5 shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-[#111] uppercase tracking-widest">
                    {eventItem.date}
                  </div>
                  <div className="text-[12px] font-bold text-gray-500">
                    {eventItem.time}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-[17px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[12px] font-bold text-gray-500 uppercase tracking-widest">
                    Donation Progress
                  </span>
                  <span className="text-sm font-bold text-[var(--primary)]">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-[var(--primary)]"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                  <span>
                    Raised: ₹{eventItem.raised.toLocaleString("en-IN")}
                  </span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-[var(--secondary)]/10 text-[var(--secondary)] text-[12px] font-bold py-1.5 px-4 rounded uppercase tracking-widest border border-[var(--secondary)]/20">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="relative overflow-hidden bg-[var(--primary)] text-white font-bold py-3.5 rounded-full text-[12px] uppercase tracking-widest transition-all active:scale-95 shadow-md group/btn">
                    <span className="absolute inset-0 w-full h-full bg-[#211823] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left scale-x-0 group-hover/btn:scale-x-100" />
                    <span className="relative z-10">Donate</span>
                  </button>
                  <button className="relative overflow-hidden bg-white text-[#111] font-bold py-3.5 rounded-full text-[12px] uppercase tracking-widest border-2 border-[#111] transition-all active:scale-95 group/btn">
                    <span className="absolute inset-0 w-full h-full bg-[#111] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left scale-x-0 group-hover/btn:scale-x-100" />
                    <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">View</span>
                  </button>
                </div>
                <button className="relative overflow-hidden w-full bg-[var(--secondary)] text-[#2b1f18] font-bold py-3.5 rounded-full text-[12px] uppercase tracking-widest transition-all shadow-md active:scale-95 border-2 border-transparent group/btn">
                  <span className="absolute inset-0 w-full h-full bg-[var(--primary)] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left scale-x-0 group-hover/btn:scale-x-100" />
                  <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Fundraise</span>
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
