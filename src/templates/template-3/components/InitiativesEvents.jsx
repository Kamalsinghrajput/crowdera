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
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((eventItem.raised / eventItem.goal) * 100),
        );
        return (
          <div
            key={eventItem.id}
            className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col border border-gray-100 opacity-0"
          >
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
                  <span className="bg-[var(--primary)] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Verified
                  </span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-[var(--secondary)] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-[#121D18] group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-4 font-sora">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-4">
                <Users size={14} className="text-[var(--primary)] shrink-0" />
                <span className="text-sm text-[var(--primary)] font-black uppercase tracking-wider">
                  {eventItem.organizer}
                </span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-2 bg-[#fcf8f1] rounded-2xl px-4 py-3 mb-6 border border-[#EBD3AF]/30">
                <Calendar
                  size={16}
                  className="text-[var(--primary)] mt-0.5 shrink-0"
                />
                <div>
                  <div className="text-xs font-black text-[#121D18] uppercase tracking-widest">
                    {eventItem.date}
                  </div>
                  <div className="text-[11px] font-bold text-gray-400">
                    {eventItem.time}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[17px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-black text-[#121D18] uppercase tracking-widest">
                    Fundraising Progress
                  </span>
                  <span className="text-sm font-black text-[var(--primary)]">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-[var(--primary)]"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <span>
                    Raised: ₹{eventItem.raised.toLocaleString("en-IN")}
                  </span>
                  <span>Goal: ₹{eventItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-[var(--secondary)]/10 text-[#121D18] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest border border-[var(--secondary)]/20">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto flex flex-col gap-3">
                <div className="flex gap-3">
                  <button className="t2-btn t2-btn-primary flex-1">
                    <span
                      className="w-full"
                      style={{
                        height: "44px",
                        padding: "0 15px",
                        fontSize: "11px",
                        borderRadius: "12px",
                      }}
                    >
                      Donate Now
                    </span>
                  </button>
                  <button className="t2-btn flex-1">
                    <span
                      className="w-full"
                      style={{
                        height: "44px",
                        padding: "0 15px",
                        fontSize: "11px",
                        borderRadius: "12px",
                        backgroundColor: "#fff",
                        color: "#121d18",
                        border: "1px solid #E5E5E5",
                      }}
                    >
                      View Details
                    </span>
                  </button>
                </div>
                <button className="t2-btn t2-btn-secondary w-full">
                  <span
                    className="w-full"
                    style={{
                      height: "44px",
                      fontSize: "11px",
                      borderRadius: "12px",
                    }}
                  >
                    Start a Fundraiser
                  </span>
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
