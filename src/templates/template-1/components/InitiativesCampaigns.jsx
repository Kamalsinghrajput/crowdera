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
  {
    id: "campaign-4",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80",
    title: "Medical Assistance for Rural Areas",
    organizer: "Health For All",
    location: "Hyderabad, India",
    tag: "Healthcare",
    category: "Healthcare",
    desc: "Providing essential medical supplies and healthcare services to remote villages.",
    raised: 120000,
    goal: 300000,
    donors: 45,
    isVerified: true,
    isTaxExempt: true,
    sdgs: [3, 6],
  },
  {
    id: "campaign-5",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80",
    title: "Clean Water Initiative",
    organizer: "Pure Flow Foundation",
    location: "Chennai, India",
    tag: "Water",
    category: "Water",
    desc: "Installing water filtration systems in schools and community centers.",
    raised: 95000,
    goal: 200000,
    donors: 67,
    isVerified: false,
    isTaxExempt: false,
    sdgs: [6, 14],
  },
  {
    id: "campaign-6",
    img: "https://images.unsplash.com/photo-1504221507732-5246c045949b?w=600&auto=format&fit=crop&q=80",
    title: "Green Earth Reforestation",
    organizer: "Eco Warriors",
    location: "New Delhi, India",
    tag: "Environment",
    category: "Environment",
    desc: "Planting 10,000 trees to restore local biodiversity and fight climate change.",
    raised: 45000,
    goal: 100000,
    donors: 32,
    isVerified: true,
    isTaxExempt: false,
    sdgs: [13, 15],
  },
];

const InitiativesCampaigns = ({ data }) => {
  const campaignsList = data || campaigns;

  return (
    <>
      {campaignsList.map((campaign) => {
        const progressPercentage = Math.min(
          100,
          Math.round((campaign.raised / campaign.goal) * 100)
        );
        return (
          <div
            key={campaign.id}
            className="bg-white rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col border-2 border-gray-200 opacity-0"
          >
            {/* Image with Verified / Tax Exempt badges */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={campaign.img}
                alt={campaign.title}
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {campaign.isVerified && (
                  <span className="bg-[#00715D] text-white text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Verified
                  </span>
                )}
                {campaign.isTaxExempt && (
                  <span className="bg-[#FFCA08] text-[#091F1B] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-lg">
                    Tax Exempt
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              {/* Title */}
              <h3 className="font-black text-lg leading-tight text-[#091F1B] group-hover:text-[#00715D] transition-colors line-clamp-2 mb-2">
                {campaign.title}
              </h3>

              {/* Organizer */}
              <div className="flex items-center gap-1.5 mb-3">
                <Users size={14} className="text-[#00715D] shrink-0" />
                <span className="text-sm text-[#00715D] font-black uppercase tracking-wider">
                  {campaign.organizer}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 font-medium">
                {campaign.desc}
              </p>

              {/* Fundraising Progress */}
              <div className="bg-[#FAFAFA] rounded-2xl p-4 mb-6 border border-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-black text-[#091F1B] uppercase tracking-widest">
                    Fundraising Progress
                  </span>
                  <span className="text-xs font-black text-[#00715D]">
                    {progressPercentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${progressPercentage}%`,
                      background: `linear-gradient(to right, #FFCA08, #00715D)`,
                    }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  <span>
                    Raised: ₹{campaign.raised.toLocaleString("en-IN")}
                  </span>
                  <span>Goal: ₹{campaign.goal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Donors count */}
              <div className="flex items-center gap-1.5 mb-4">
                <Heart
                  size={14}
                  className="text-[#00715D]"
                  fill="#00715D"
                  fillOpacity="0.1"
                />
                <span className="text-sm font-black text-[#091F1B]">
                  {campaign.donors} donors
                </span>
              </div>

              {/* Category tag */}
              <div className="mb-6">
                <span className="bg-[#FFCA08]/10 text-[#091F1B] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest border border-[#FFCA08]/20">
                  {campaign.category}
                </span>
              </div>

              {/* SDG icons */}
              {campaign.sdgs && campaign.sdgs.length > 0 && (
                <div className="flex gap-2 mb-6">
                  {campaign.sdgs.map((sdgNumber) => (
                    <div
                      key={sdgNumber}
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-[11px] font-black shadow-md hover:scale-110 transition-transform cursor-help"
                      style={{
                        background:
                          SUSTAINABLE_GOAL_COLORS[sdgNumber] || "#555",
                      }}
                      title={`SDG ${sdgNumber}`}
                    >
                      {sdgNumber}
                    </div>
                  ))}
                </div>
              )}

              {/* Buttons */}
              <div className="mt-auto space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-[#091F1B] text-white font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#00715D] transition-all shadow-md active:scale-95">
                    Donate
                  </button>
                  <button className="bg-white text-[#091F1B] font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest border-2 border-[#091F1B] hover:bg-gray-50 transition-all active:scale-95">
                    View
                  </button>
                </div>
                <button className="w-full bg-[#FFCA08] text-[#091F1B] font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:opacity-90 transition-all shadow-md active:scale-95 border-2 border-transparent">
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
