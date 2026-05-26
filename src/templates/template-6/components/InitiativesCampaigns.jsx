import React from "react";
import Image from "next/image";
import { Users, Heart } from "lucide-react";
import { gsap } from "gsap";

const SUSTAINABLE_GOAL_COLORS = {
  1: "#E5243B",
  2: "#DDA63A",
  3: "#4C9F38",
  4: "#C5192D",
  5: "#FF3A21",
  6: "#26BDE2",
  7: "#FCC30B",
  8: "#A21942",
  9: "#FD6925",
  10: "#DD1367",
  11: "#FD9D24",
  12: "#BF8B2E",
  13: "#3F7E44",
  14: "#0A97D9",
  15: "#56C02B",
  16: "#00689D",
  17: "#19486A",
};

export const campaigns = [
  {
    id: "campaign-1",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
    title: "Empowering children's futures, one voice at a time!",
    organizer: "Prerna Seva Samiti",
    location: "Mumbai, India",
    tag: "Children & Elderly",
    category: "Children & Elderly",
    desc: "Safeguarding children's rights and creating a brighter future for every child in need.",
    raised: 540564,
    goal: 1000000,
    donors: 156,
    isVerified: true,
    isTaxExempt: true,
    sdgs: [3, 4],
  },
];

const InitiativesCampaigns = ({
  data: initialCampaignData,
  primaryColor = "var(--primary)",
  secondaryColor = "var(--secondary)",
}) => {
  const campaignsList = initialCampaignData || campaigns;


  return (
    <>
      {campaignsList.map((campaignItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((campaignItem.raised / campaignItem.goal) * 100),
        );
        return (
          <div
            key={campaignItem.id}
            className="bg-white rounded-2xl overflow-hidden group flex flex-col border border-gray-100 opacity-0 relative"
          >
            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={campaignItem.img}
                alt={campaignItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {campaignItem.isVerified && (
                  <span className="bg-[var(--primary)] text-white text-[12px] font-bold py-1.5 px-4 rounded uppercase tracking-widest shadow-lg">
                    Verified
                  </span>
                )}
                {campaignItem.isTaxExempt && (
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
                {campaignItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-5">
                <Users size={14} className="text-[var(--primary)] shrink-0" />
                <span className="text-[13px] text-[var(--primary)] font-bold uppercase tracking-widest">
                  {campaignItem.organizer}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-[17px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {campaignItem.desc}
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
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[12px] font-bold text-gray-500 uppercase tracking-wider">
                  <span>
                    Raised: ₹{campaignItem.raised.toLocaleString("en-IN")}
                  </span>
                  <span>
                    Goal: ₹{campaignItem.goal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Donors count */}
              <div className="flex items-center gap-1.5 mb-4">
                <Heart
                  size={14}
                  className="text-[var(--secondary)]"
                  fill="var(--secondary)"
                  fillOpacity="0.1"
                />
                <span className="text-sm font-bold text-[#111]">
                  {campaignItem.donors} donors
                </span>
              </div>

              {/* Category tag */}
              <div className="mb-6">
                <span className="bg-[var(--secondary)]/10 text-[var(--secondary)] text-[12px] font-bold py-1.5 px-4 rounded uppercase tracking-widest border border-[var(--secondary)]/20">
                  {campaignItem.category}
                </span>
              </div>

              {/* SDG icons */}
              {campaignItem.sdgs && campaignItem.sdgs.length > 0 && (
                <div className="flex gap-2 mb-8">
                  {campaignItem.sdgs.map((sustainableGoalId) => (
                    <div
                      key={sustainableGoalId}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[12px] font-black shadow-md hover:scale-110 transition-transform cursor-help"
                      style={{
                        background:
                          SUSTAINABLE_GOAL_COLORS[sustainableGoalId] || "#555",
                      }}
                      title={`SDG ${sustainableGoalId}`}
                    >
                      {sustainableGoalId}
                    </div>
                  ))}
                </div>
              )}

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

export default InitiativesCampaigns;
