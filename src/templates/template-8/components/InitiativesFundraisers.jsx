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

const InitiativesFundraisers = ({ data: initialFundraisersData, primaryColor = "#00715D", secondaryColor = "#D9A86A" }) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white rounded-2xl hover:shadow-2xl transition-all duration-500 group flex flex-col border border-gray-100 opacity-0 p-8 text-left">

            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#D9A86A]/20 shadow-md">
                <Image src={fundraiserItem.img} alt={fundraiserItem.name} layout="fill" objectFit="cover" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[#111] text-xl leading-tight">{fundraiserItem.name}</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 truncate">Supporting {fundraiserItem.campaignName || fundraiserItem.organizer}</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-[#00715D] text-white text-[10px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-sm">Verified</span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-[#D9A86A] text-white text-[10px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-sm">Tax Exempt</span>
              )}
            </div>

            {/* Description — using primary color for consistency with design style */}
            <p className="text-[#00715D] text-[15px] leading-relaxed mb-8 line-clamp-3 font-semibold">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-black text-[#111] uppercase tracking-widest">Donation Progress</span>
                <span className="text-sm font-black text-[#00715D]">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-[#00715D]"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Raised: ₹{fundraiserItem.raised.toLocaleString("en-IN")}</span>
                <span>Goal: ₹{fundraiserItem.goal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-3">
              <button className="bg-[#00715D] text-white font-bold py-3.5 rounded-full text-[10px] uppercase tracking-widest hover:bg-[#111] transition-all active:scale-95 shadow-md">
                Donate
              </button>
              <button className="bg-white text-[#111] font-bold py-3.5 rounded-full text-[10px] uppercase tracking-widest border-2 border-[#111] hover:bg-gray-50 transition-all active:scale-95">
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
