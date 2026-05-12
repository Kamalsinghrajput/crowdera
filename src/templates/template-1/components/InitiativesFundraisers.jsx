import React from "react";
import Image from "next/image";

export const fundraisers = [
  {
    id: "fund-1",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&auto=format&fit=crop&q=80",
    title: "Empowering children's futures, one voice at a time!",
    name: "Arjun Mehta",
    campaignName: "Prerna Seva Samiti",
    location: "Mumbai, India",
    tag: "Education",
    category: "Education",
    type: "Campaign",
    desc: "Fundraising to support child education programs in underserved communities across rural India.",
    raised: 130,
    goal: 1000000,
    donors: 3,
    isVerified: true,
    isTaxExempt: true
  },
  {
    id: "fund-2",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=200&auto=format&fit=crop&q=80",
    title: "Tree Plantation for a Greener Future",
    name: "Priya Sharma",
    campaignName: "Eco Warriors India",
    location: "Bangalore, India",
    tag: "Environment",
    category: "Environment",
    type: "Campaign",
    desc: "Join our mission to plant trees and promote environmental awareness. Your support will help create greener and healthier communities.",
    raised: 0,
    goal: 700000,
    donors: 0,
    isVerified: true,
    isTaxExempt: false
  },
  {
    id: "fund-3",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=200&auto=format&fit=crop&q=80",
    title: "Rural Healthcare Access Campaign",
    name: "Dr. Kavya Nair",
    campaignName: "Health For All Foundation",
    location: "Hyderabad, India",
    tag: "Healthcare",
    category: "Healthcare",
    type: "Campaign",
    desc: "Bringing quality healthcare to remote villages through mobile clinics and telemedicine support.",
    raised: 0,
    goal: 700000,
    donors: 0,
    isVerified: true,
    isTaxExempt: false
  },
  {
    id: "fund-4",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&auto=format&fit=crop&q=80",
    title: "Village Medical Camp Drive",
    name: "Ritu Bansal",
    campaignName: "Rural Care Initiative",
    location: "Jaipur, India",
    tag: "Healthcare",
    category: "Healthcare",
    type: "Event",
    desc: "Organizing a free health checkup and medicine distribution camp for five villages.",
    raised: 55000,
    goal: 60000,
    donors: 92,
    isVerified: true,
    isTaxExempt: false
  },
  {
    id: "fund-5",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=200&auto=format&fit=crop&q=80",
    title: "Community Kitchen Equipment",
    name: "Social Feed",
    campaignName: "Feed Mumbai NGO",
    location: "Mumbai, India",
    tag: "Community",
    category: "Community",
    type: "Campaign",
    desc: "Upgrading industrial stoves and refrigerators for our daily community meal program.",
    raised: 12000,
    goal: 40000,
    donors: 15,
    isVerified: false,
    isTaxExempt: true
  },
  {
    id: "fund-6",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&auto=format&fit=crop&q=80",
    title: "Wildlife Habitat Restoration",
    name: "Nature First",
    campaignName: "Save Wildlife India",
    location: "Assam, India",
    tag: "Environment",
    category: "Environment",
    type: "Event",
    desc: "Restoring corridors for elephants and other wildlife in fragmented forest areas.",
    raised: 200000,
    goal: 500000,
    donors: 110,
    isVerified: true,
    isTaxExempt: false
  }
];

const InitiativesFundraisers = ({ data }) => {
  const fundraisersList = data || fundraisers;

  return (
    <>
      {fundraisersList.map((fundraiser) => {
        const progressPercentage = Math.min(100, Math.round((fundraiser.raised / fundraiser.goal) * 100));
        return (
          <div key={fundraiser.id} className="bg-white rounded-[2rem] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group flex flex-col border-2 border-gray-200 opacity-0 p-6 md:p-8">

            {/* Avatar + Name + Subtitle */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#FFCA08]/20 shadow-md">
                <Image src={fundraiser.img} alt={fundraiser.name} layout="fill" objectFit="cover" />
              </div>
              <div className="min-w-0">
                <div className="font-black text-[#091F1B] text-base leading-tight">{fundraiser.name}</div>
                <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 truncate">Supporting {fundraiser.campaignName}</div>
              </div>
            </div>

            {/* Verified / Tax Exempt Badges */}
            {(fundraiser.isVerified || fundraiser.isTaxExempt) && (
              <div className="flex gap-2 flex-wrap mb-4">
                {fundraiser.isVerified && (
                  <span className="bg-[#00715D] text-white text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-sm">Verified</span>
                )}
                {fundraiser.isTaxExempt && (
                  <span className="bg-[#FFCA08] text-[#091F1B] text-[10px] font-black py-1.5 px-4 rounded-full uppercase tracking-widest shadow-sm">Tax Exempt</span>
                )}
              </div>
            )}

            {/* Description — teal color like reference */}
            <p className="text-[#00715D] text-sm leading-relaxed mb-6 line-clamp-3 font-semibold">
              {fundraiser.desc}
            </p>

            {/* Fundraising Progress */}
            <div className="bg-[#FAFAFA] rounded-2xl p-4 mb-8 border border-gray-50">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-black text-[#091F1B] uppercase tracking-widest">Fundraising Progress</span>
                <span className="text-xs font-black text-[#00715D]">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${progressPercentage}%`,
                    background: `linear-gradient(to right, #FFCA08, #00715D)`
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                <span>Raised: ₹{fundraiser.raised.toLocaleString("en-IN")}</span>
                <span>Goal: ₹{fundraiser.goal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Donate + View Buttons only */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <button className="bg-[#091F1B] text-white font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest hover:bg-[#00715D] transition-all shadow-md active:scale-95 border-2 border-transparent">
                Donate
              </button>
              <button className="bg-white text-[#091F1B] font-black py-3.5 rounded-xl text-[10px] uppercase tracking-widest border-2 border-[#091F1B] hover:bg-gray-50 transition-all active:scale-95">
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
