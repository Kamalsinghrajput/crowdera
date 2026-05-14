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

const InitiativesCampaigns = ({ data: initialCampaignData, primaryColor = "#4f46e5" }) => {
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
            className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_60px_rgba(79,70,229,0.15)] transition-all duration-500 group border border-slate-100 flex flex-col opacity-0"
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
              <div className="absolute top-5 left-5 flex gap-2 flex-wrap">
                {campaignItem.isVerified && (
                  <span className="bg-white text-indigo-600 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg">
                    Verified
                  </span>
                )}
                {campaignItem.isTaxExempt && (
                  <span className="bg-indigo-600 text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider shadow-lg">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow text-left">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-4">
                {campaignItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-5">
                <Users size={14} className="text-indigo-600 shrink-0" />
                <span className="text-xs text-indigo-600 font-bold uppercase tracking-widest">
                  {campaignItem.organizer}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-[15px] leading-relaxed line-clamp-2 mb-8 font-medium">
                {campaignItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Fundraising Progress
                  </span>
                  <span className="text-sm font-black text-indigo-600">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-indigo-600"
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <span>
                    Raised: ₹{campaignItem.raised.toLocaleString("en-IN")}
                  </span>
                  <span>Goal: ₹{campaignItem.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Donors count */}
              <div className="flex items-center gap-1.5 mb-4">
                <Heart
                  size={14}
                  className="text-rose-500"
                  fill="#f43f5e"
                  fillOpacity="0.1"
                />
                <span className="text-sm font-bold text-slate-900">
                  {campaignItem.donors} donors
                </span>
              </div>

              {/* Category tag */}
              <div className="mb-6">
                <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-wider border border-indigo-100">
                  {campaignItem.category}
                </span>
              </div>

              {/* SDG icons */}
              {campaignItem.sdgs && campaignItem.sdgs.length > 0 && (
                <div className="flex gap-2 mb-8">
                  {campaignItem.sdgs.map((sustainableGoalId) => (
                    <div
                      key={sustainableGoalId}
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[11px] font-black shadow-md hover:scale-110 transition-transform cursor-help"
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
                  <button className="bg-slate-900 text-white font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
                    Donate
                  </button>
                  <button className="bg-white text-slate-900 font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest border-2 border-slate-900 hover:bg-slate-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-2xl text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-indigo-100 active:scale-95 border-2 border-transparent">
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
