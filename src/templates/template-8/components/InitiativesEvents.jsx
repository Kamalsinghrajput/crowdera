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

const InitiativesEvents = ({ data: initialEventsData, primaryColor = "#00715D", secondaryColor = "#D9A86A" }) => {
  const eventsList = initialEventsData || events;

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);

    gsap.to(card, {
      rotateX: -y * 10,
      rotateY: x * 10,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      {eventsList.map((eventItem) => {
        const progressPercentage = Math.min(100, Math.round((eventItem.raised / eventItem.goal) * 100));
        return (
          <div 
            key={eventItem.id} 
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="bg-white rounded-2xl overflow-hidden group flex flex-col border border-gray-100 opacity-0 relative"
            style={{ willChange: 'transform' }}
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
                  <span className="bg-[#00715D] text-white text-[10px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-lg">Verified</span>
                )}
                {eventItem.isTaxExempt && (
                  <span className="bg-[#D9A86A] text-white text-[10px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-lg">Tax Exempt</span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-[#111] group-hover:text-[#00715D] transition-colors line-clamp-2 mb-4">
                {eventItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-5">
                <Users size={14} className="text-[#00715D] shrink-0" />
                <span className="text-xs text-[#00715D] font-bold uppercase tracking-widest">{eventItem.organizer}</span>
              </div>

              {/* Date / Time Box */}
              <div className="flex items-start gap-2 bg-gray-50 rounded-xl px-4 py-4 mb-6 border border-gray-100">
                <Calendar size={16} className="text-[#00715D] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#111] uppercase tracking-widest">{eventItem.date}</div>
                  <div className="text-[11px] font-bold text-gray-400">{eventItem.time}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {eventItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Donation Progress</span>
                  <span className="text-sm font-bold text-[#00715D]">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-[#00715D]"
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
                <span className="bg-[#D9A86A]/10 text-[#D9A86A] text-[10px] font-bold py-1.5 px-4 rounded uppercase tracking-widest border border-[#D9A86A]/20">
                  {eventItem.category}
                </span>
              </div>

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-[#00715D] text-white font-bold py-3.5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#111] transition-all active:scale-95 shadow-md">
                    Donate
                  </button>
                  <button className="bg-white text-[#111] font-bold py-3.5 rounded-full text-[10px] uppercase tracking-widest border-2 border-[#111] hover:bg-gray-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-[#D9A86A] text-white font-bold py-3.5 rounded-full text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95 border-2 border-transparent">
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
