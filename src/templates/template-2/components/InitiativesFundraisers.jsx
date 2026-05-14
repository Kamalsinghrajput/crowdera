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
      <style>{`
        :root {
          --primary: #007B39;
          --secondary: #FFA415;
          --bg-color: #121d18;
        }
        .t2-btn { display: inline-flex; align-items: center; gap: 0; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
        .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--bg-color, #121d18); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
        .t2-btn span::before { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
        .t2-btn:hover span::before { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
        .t2-btn:hover span { color: white; }
        .t2-btn i { position: relative; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: var(--bg-color, #121d18); border-radius: 50%; font-size: 18px; color: white; overflow: hidden; transition: all 500ms ease; z-index: 2; margin-left: -10px; }
        .t2-btn i::after { content: ""; position: absolute; inset: 0; background-color: var(--secondary, #FFA415); transform-origin: right; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
        .t2-btn:hover i::after { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
        .t2-btn:hover i { color: white; }
        .t2-btn.t2-btn-secondary span, .t2-btn.t2-btn-secondary i { background-color: var(--secondary, #FFA415); color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary span::before, .t2-btn.t2-btn-secondary i::after { background-color: var(--bg-color, #121d18); }
        .t2-btn.t2-btn-secondary:hover span, .t2-btn.t2-btn-secondary:hover i { color: white; }
        
        /* Small Variant for Card */
        .t2-btn-sm span { height: 40px; padding: 0 20px; font-size: 11px; }
        .t2-btn-sm i { width: 40px; height: 40px; font-size: 14px; }
      `}</style>

      {fundraisersList.map((fundraiserItem) => {
        const progressPercentage = Math.min(100, Math.round((fundraiserItem.raised / fundraiserItem.goal) * 100));
        return (
          <div key={fundraiserItem.id} className="bg-white rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col border border-gray-100 opacity-0 p-8">

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
            <div className="bg-[#fcf8f1] rounded-2xl p-6 mb-8 border border-[#EBD3AF]/30">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[11px] font-black text-[#121D18] uppercase tracking-widest">Fundraising Progress</span>
                <span className="text-sm font-black text-[#007B39]">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-white rounded-full h-1.5 mb-3 overflow-hidden">
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
            <div className="mt-auto grid grid-cols-2 gap-3 items-center">
              <button className="t2-btn t2-btn-secondary t2-btn-sm">
                <span>Donate Now</span>
                <i>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </i>
              </button>
              <button className="bg-white text-[#121D18] font-black h-[40px] px-6 rounded-full text-[11px] border-2 border-[#121D18] hover:bg-[#121D18] hover:text-white transition-all active:scale-95 uppercase tracking-widest">
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
