import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export const fundraisers = [
  {
    id: "fund-9-1",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb8?auto=format&fit=crop&w=600&q=80",
    name: "Wilson Family",
    campaignName: "Memorial Fund for James",
    category: "Memorial",
    desc: "A memorial fund dedicated to supporting the family and honoring the legacy of James Wilson.",
    raised: 12000,
    goal: 20000,
    donors: 85,
    isVerified: true,
    isTaxExempt: true,
  },
];

const InitiativesFundraisers = ({ data: initialFundraisersData, primaryColor = "#dc2626" }) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group flex flex-col opacity-0 p-8 text-left">

            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 bg-black flex-shrink-0 border-4 border-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image src={fundraiserItem.img} alt={fundraiserItem.name} layout="fill" objectFit="cover" className="grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="min-w-0">
                <div className="font-black text-black text-2xl leading-none uppercase tracking-tighter italic">{fundraiserItem.name}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] mt-1 truncate">SUPPORTING {fundraiserItem.campaignName || fundraiserItem.organizer}</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-black text-white text-[10px] font-black py-1 px-4 uppercase tracking-[0.2em]">VERIFIED</span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-red-600 text-white text-[10px] font-black py-1 px-4 uppercase tracking-[0.2em]">TAX EXEMPT</span>
              )}
            </div>

            {/* Description — brutalist style */}
            <p className="text-black text-sm leading-tight mb-8 line-clamp-3 font-black uppercase tracking-tight italic border-l-4 border-red-600 pl-4">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-white border-2 border-black p-6 mb-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-black text-black uppercase tracking-[0.2em]">PROGRESS</span>
                <span className="text-xl font-black text-red-600 italic leading-none">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-100 h-4 border-2 border-black mb-3 overflow-hidden">
                <div
                  className="h-full bg-red-600 transition-all duration-1000 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-black text-black uppercase tracking-widest">
                <span>RAISED: ₹{fundraiserItem.raised.toLocaleString("en-IN")}</span>
                <span>GOAL: ₹{fundraiserItem.goal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-4">
              <button className="bg-black text-white font-black py-4 text-xs uppercase tracking-[0.3em] hover:bg-red-600 transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                DONATE
              </button>
              <button className="bg-white text-black font-black py-4 text-xs uppercase tracking-[0.3em] border-4 border-black hover:bg-gray-100 transition-all active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                VIEW
              </button>
            </div>

          </div>
        );
      })}
    </>
  );
};

export default InitiativesFundraisers;
