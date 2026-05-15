import React from "react";
import Image from "next/image";
import { Users, Heart } from "lucide-react";

const SUSTAINABLE_GOAL_COLORS = {
  1: "#E5243B", // No Poverty
  2: "#DDA63A", // Zero Hunger
  3: "#4C9F38", // Good Health and Well-being
  4: "#C5192D", // Quality Education
  5: "#FF3A21", // Gender Equality
  6: "#26BDE2", // Clean Water and Sanitation
  7: "#FCC30B", // Affordable and Clean Energy
  8: "#A21942", // Decent Work and Economic Growth
  9: "#FD6925", // Industry, Innovation and Infrastructure
  10: "#DD1367", // Reduced Inequality
  11: "#FD9D24", // Sustainable Cities and Communities
  12: "#BF8B2E", // Responsible Consumption and Production
  13: "#3F7E44", // Climate Action
  14: "#0A97D9", // Life Below Water
  15: "#56C02B", // Life on Land
  16: "#00689D", // Peace, Justice and Strong Institutions
  17: "#19486A", // Partnerships for the Goals
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
  {
    id: "campaign-2",
    img: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&auto=format&fit=crop&q=80",
    title: "Supporting Joyful Minds Through Education",
    organizer: "Education First NGO",
    location: "Bangalore, India",
    tag: "Education",
    category: "Education",
    desc: "Helping underprivileged children get quality education and building schools in rural areas.",
    raised: 357811,
    goal: 500000,
    donors: 89,
    isVerified: true,
    isTaxExempt: false,
    sdgs: [4, 10],
  },
  {
    id: "campaign-3",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80",
    title: "Volunteer Groups Making Real Impact",
    organizer: "Community Builders",
    location: "Pune, India",
    tag: "Community",
    category: "Community",
    desc: "Join our campaign to bring joy to children, women and the elderly across the globe.",
    raised: 232609,
    goal: 400000,
    donors: 112,
    isVerified: false,
    isTaxExempt: true,
    sdgs: [11, 17],
  },
];

const InitiativesCampaigns = ({ data: initialCampaignData, primaryColor = "#007B39", secondaryColor = "#FFA415" }) => {
  const campaignsList = initialCampaignData || campaigns;

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
      
      {campaignsList.map((campaignItem) => {
        const progressPercentage = Math.min(
          100,
          Math.round((campaignItem.raised / campaignItem.goal) * 100)
        );
        return (
          <div
            key={campaignItem.id}
            className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group flex flex-col border border-gray-100 opacity-0"
          >
            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={campaignItem.img}
                alt={campaignItem.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {campaignItem.isVerified && (
                  <span className="bg-[#007B39] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Verified
                  </span>
                )}
                {campaignItem.isTaxExempt && (
                  <span className="bg-[#FFA415] text-white text-[10px] font-bold py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="text-2xl font-bold leading-tight text-[#121D18] group-hover:text-[#007B39] transition-colors line-clamp-2 mb-4 font-sora">
                {campaignItem.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-4">
                <Users size={14} className="text-[#007B39] shrink-0" />
                <span className="text-sm text-[#007B39] font-black uppercase tracking-wider">
                  {campaignItem.organizer}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-[15px] leading-relaxed line-clamp-2 mb-8">
                {campaignItem.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] font-black text-[#121D18] uppercase tracking-widest">
                    Fundraising Progress
                  </span>
                  <span className="text-sm font-black text-[#007B39]">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-3 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out bg-[#007B39]"
                    style={{
                      width: `${progressPercentage}%`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[11px] font-bold text-gray-400 uppercase tracking-wider">
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
                  className="text-[#FFA415]"
                  fill="#FFA415"
                  fillOpacity="0.1"
                />
                <span className="text-sm font-bold text-[#121D18]">
                  {campaignItem.donors} donors
                </span>
              </div>

              {/* Category tag */}
              <div className="mb-6">
                <span className="bg-[#FFA415]/10 text-[#121D18] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest border border-[#FFA415]/20">
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
                <div className="grid grid-cols-2 gap-3 items-center">
                  <button className="t2-btn t2-btn-secondary t2-btn-sm">
                    <span>Donate Now</span>
                  </button>
                  <button className="bg-white text-[#121D18] font-black h-[40px] px-6 rounded-full text-[11px] border-2 border-[#121D18] hover:bg-[#121D18] hover:text-white transition-all active:scale-95 uppercase tracking-widest">
                    View
                  </button>
                </div>
                <button className="w-full bg-[#FFA415] text-white font-black py-3 rounded-full text-[11px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95 border-2 border-transparent">
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
