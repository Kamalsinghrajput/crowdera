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

const InitiativesFundraisers = ({ data: initialFundraisersData, primaryColor = "#f59e0b" }) => {
  const fundraisersList = initialFundraisersData || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group border border-gray-100 flex flex-col opacity-0 p-8 text-left">

            {/* Profile Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-orange-100 shadow-md">
                <Image src={fundraiserItem.img} alt={fundraiserItem.name} layout="fill" objectFit="cover" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-gray-900 text-xl leading-tight">{fundraiserItem.name}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1 truncate">Supporting {fundraiserItem.campaignName || fundraiserItem.organizer}</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex gap-2 flex-wrap mb-6">
              {fundraiserItem.isVerified && (
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-bold py-1 px-3 rounded uppercase tracking-widest shadow-sm border border-gray-100">Verified</span>
              )}
              {fundraiserItem.isTaxExempt && (
                <span className="bg-orange-500 text-white text-[10px] font-bold py-1 px-3 rounded uppercase tracking-widest shadow-sm">Tax Exempt</span>
              )}
            </div>

            {/* Description — using orange color for consistency with design style */}
            <p className="text-orange-500 text-sm leading-relaxed mb-8 line-clamp-3 font-semibold uppercase tracking-tight">
              {fundraiserItem.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Donation Progress</span>
                <span className="text-sm font-black text-orange-500">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out bg-orange-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Raised: ₹{fundraiserItem.raised.toLocaleString("en-IN")}</span>
                <span>Goal: ₹{fundraiserItem.goal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-auto grid grid-cols-2 gap-3">
              <button className="bg-gray-900 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-orange-500 transition-all active:scale-95 shadow-lg">
                Donate
              </button>
              <button className="bg-white text-gray-900 font-bold py-3 rounded-xl text-xs border-2 border-gray-900 hover:bg-gray-50 transition-all active:scale-95 uppercase tracking-widest">
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
