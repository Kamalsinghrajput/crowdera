import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

export const fundraisers = [
  {
    id: "fund-7-1",
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

const InitiativesFundraisers = ({ data: initialFundraisersData, primaryColor = "#4f46e5" }) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] transition-all duration-500 group border border-slate-100 flex flex-col opacity-0 p-8 text-left">

            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-indigo-50 shadow-md">
                <Image src={fundraiserItem.img} alt={fundraiserItem.name} layout="fill" objectFit="cover" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-slate-900 text-2xl leading-tight">{fundraiserItem.name}</div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1 truncate">Supporting {fundraiserItem.campaignName || fundraiserItem.organizer}</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-white text-indigo-600 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg border border-slate-100">Verified</span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-indigo-600 text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg">Tax Exempt</span>
              )}
            </div>

            {/* Description — using indigo color for consistency with design style */}
            <p className="text-indigo-600 text-[15px] leading-relaxed mb-8 line-clamp-3 font-semibold">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Donation Progress</span>
                <span className="text-sm font-black text-indigo-600">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-indigo-600"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Raised: ₹{fundraiserItem.raised.toLocaleString("en-IN")}</span>
                <span>Goal: ₹{fundraiserItem.goal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-3">
              <button className="bg-slate-900 text-white font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                Donate
              </button>
              <button className="bg-white text-slate-900 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-50 transition-all active:scale-95">
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
