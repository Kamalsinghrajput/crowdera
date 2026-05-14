import React from "react";
import Image from "next/image";
import { Users, Heart } from "lucide-react";

const SUSTAINABLE_GOAL_COLORS = {
  1: "#E5243B", 2: "#DDA63A", 3: "#4C9F38", 4: "#C5192D", 5: "#FF3A21", 6: "#26BDE2", 7: "#FCC30B", 8: "#A21942", 9: "#FD6925", 10: "#DD1367", 11: "#FD9D24", 12: "#BF8B2E", 13: "#3F7E44", 14: "#0A97D9", 15: "#56C02B", 16: "#00689D", 17: "#19486A",
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

const InitiativesCampaigns = ({ data: initialCampaignData, primaryColor = "#dc2626" }) => {
  const campaignsList = initialCampaignData || campaigns;

  return (
    <>
      {campaignsList.map((campaignItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((campaignItem.raised / campaignItem.goal) * 100)
        );
        return (
          <div
            key={campaignItem.id}
            className="bg-white rounded-none border-b-8 border-black overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col opacity-0"
          >
            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-72 overflow-hidden border-b-4 border-black">
              <Image
                src={campaignItem.img}
                alt={campaignItem.title}
                layout="fill"
                objectFit="cover"
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-0 left-0 flex flex-col gap-0">
                {campaignItem.isVerified && (
                  <span className="bg-black text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em] w-fit">
                    Verified
                  </span>
                )}
                {campaignItem.isTaxExempt && (
                  <span className="bg-red-600 text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em] w-fit">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="font-black text-3xl text-black mb-6 uppercase tracking-tighter leading-none group-hover:text-red-600 transition-colors">
                {campaignItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-2 mb-6 bg-gray-100 p-3 border-l-4 border-red-600">
                <Users size={16} className="text-black shrink-0" />
                <span className="text-xs text-black font-black uppercase tracking-[0.1em]">
                  {campaignItem.organizer}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-tight mb-8 font-bold uppercase tracking-tight">
                {campaignItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="border-4 border-black p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black text-black uppercase tracking-[0.2em] italic">
                    Live Progress
                  </span>
                  <span className="text-2xl font-black text-red-600 italic">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 h-6 mb-4 border-2 border-black relative overflow-hidden">
                  <div
                    className="h-full bg-red-600 transition-all duration-1000 ease-out"
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-0 border-t-2 border-black pt-4 mt-2">
                  <div className="border-r-2 border-black">
                    <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Raised</span>
                    <span className="text-sm font-black text-black">₹{campaignItem.raised.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="text-right pl-4">
                    <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Target</span>
                    <span className="text-sm font-black text-black">₹{campaignItem.goal.toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* Donors count */}
              <div className="flex items-center gap-2 mb-6 italic">
                <Heart
                  size={16}
                  className="text-red-600"
                  fill="#dc2626"
                />
                <span className="text-sm font-black text-black uppercase tracking-widest">
                  {campaignItem.donors} donors
                </span>
              </div>

              {/* Category tag */}
              <div className="mb-8">
                <span className="bg-black text-white text-[10px] font-black py-2 px-6 uppercase tracking-[0.2em]">
                  {campaignItem.category}
                </span>
              </div>

              {/* SDG icons */}
              {campaignItem.sdgs && campaignItem.sdgs.length > 0 && (
                <div className="flex gap-2 mb-10 flex-wrap">
                  {campaignItem.sdgs.map((sustainableGoalId) => (
                    <div
                      key={sustainableGoalId}
                      className="w-10 h-10 rounded-none border-2 border-black flex items-center justify-center text-white text-[12px] font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-help"
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
              <div className="mt-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-black text-white font-black py-5 uppercase tracking-[0.2em] text-xs hover:bg-red-600 transition-all active:translate-y-1">
                    Donate
                  </button>
                  <button className="bg-white text-black font-black py-5 uppercase tracking-[0.2em] text-xs border-4 border-black hover:bg-gray-100 transition-all active:translate-y-1">
                    View
                  </button>
                </div>
                <button className="w-full bg-red-600 text-white font-black py-6 uppercase tracking-[0.3em] text-xs shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:translate-y-2">
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

export default InitiativesCampaigns;
