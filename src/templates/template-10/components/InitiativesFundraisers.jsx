import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export const fundraisers = [
  {
    id: "fund-1",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80",
    name: "Alex Johnson",
    campaignName: "Mental Health Outreach",
    category: "Healthcare",
    desc: "Helping people access therapy and mental health resources during difficult times.",
    raised: 12500,
    goal: 20000,
    donors: 42,
    isVerified: true,
    isTaxExempt: false,
  },
];

const InitiativesFundraisers = ({
  data: initialFundraisersData,
  primaryColor = "var(--primary)",
}) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100),
        );
        return (
          <div
            key={fundraiserItem.id}
            className="bg-white rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100 opacity-0 p-8 text-left"
          >
            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-4 border-[var(--primary)]/20 shadow-lg group-hover:scale-110 transition-transform duration-500">
                <Image
                  src={fundraiserItem.img}
                  alt={fundraiserItem.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[#1a1a2e] text-2xl leading-tight tracking-tight">
                  {fundraiserItem.name}
                </div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 truncate">
                  SUPPORTING{" "}
                  {fundraiserItem.campaignName || fundraiserItem.organizer}
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-[#1a1a2e] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-md">
                  Verified
                </span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-[var(--primary)] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-md">
                  Tax Exempt
                </span>
              )}
            </div>

            {/* Description — using primary color for consistency with design style */}
            <p className="text-[var(--primary)] text-[17px] leading-relaxed mb-8 line-clamp-3 font-bold uppercase tracking-tight italic">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-[#fdf2f5] rounded-[2rem] p-6 mb-8 border border-[#fbd3de]">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-black text-[#1a1a2e] uppercase tracking-widest">
                  Progress
                </span>
                <span className="text-sm font-black text-[var(--primary)]">
                  {progressPercentage}%
                </span>
              </div>
              <div className="w-full bg-white rounded-full h-2 mb-3 overflow-hidden shadow-inner">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-[var(--primary)]"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>
                  Raised: ₹{fundraiserItem.raised.toLocaleString("en-IN")}
                </span>
                <span>
                  Goal: ₹{fundraiserItem.goal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-3">
              <button className="bg-[#1a1a2e] text-white font-black py-4 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-[var(--primary)] transition-all active:scale-95 shadow-lg">
                Donate
              </button>
              <button className="bg-white text-[#1a1a2e] font-black py-4 rounded-full text-[10px] uppercase tracking-[0.2em] border-2 border-[#1a1a2e] hover:bg-gray-50 transition-all active:scale-95">
                View
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InitiativesFundraisers;
