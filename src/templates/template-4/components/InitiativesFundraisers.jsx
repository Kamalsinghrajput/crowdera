import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export const fundraisers = [
  {
    id: "fund-1",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    name: "Sarah Johnson",
    campaignName: "Education First NGO",
    category: "Education",
    desc: "Helping local schools upgrade their technology and learning environments.",
    raised: 8500,
    goal: 15000,
    donors: 42,
    isVerified: true,
    isTaxExempt: true,
  },
];

const InitiativesFundraisers = ({ data: initialFundraisersData, primaryColor = "#007B39", secondaryColor = "#FFA415" }) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white rounded-[2rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col border border-gray-100 opacity-0 p-8 text-left">

            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FFA415]/20 shadow-md">
                <Image src={fundraiserItem.img} alt={fundraiserItem.name} layout="fill" objectFit="cover" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-[#121D18] text-xl leading-tight font-sora">{fundraiserItem.name}</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 truncate">Supporting {fundraiserItem.campaignName || fundraiserItem.organizer}</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-[#007B39] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-sm">Verified</span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-[#FFA415] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-sm">Tax Exempt</span>
              )}
            </div>

            {/* Description — using primary color for consistency with design style */}
            <p className="text-[#007B39] text-[15px] leading-relaxed mb-8 line-clamp-3 font-semibold">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-gray-50 rounded-[1.5rem] p-6 mb-8 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-black text-[#121D18] uppercase tracking-widest">Fundraising Progress</span>
                <span className="text-sm font-black text-[#007B39]">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-[#007B39]"
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
              <button className="t2-btn t2-btn-primary w-full">
                <span className="w-full" style={{ height: '44px', padding: '0 15px', fontSize: '11px', borderRadius: '12px' }}>Donate</span>
              </button>
              <button className="t2-btn w-full">
                <span className="w-full" style={{ height: '44px', padding: '0 15px', fontSize: '11px', borderRadius: '12px', backgroundColor: '#fff', color: '#121d18', border: '1px solid #E5E5E5' }}>View</span>
              </button>
            </div>

          </div>
        );
      })}
    </>
  );
};

export default InitiativesFundraisers;
