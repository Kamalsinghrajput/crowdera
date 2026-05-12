"use client";

import React, { useRef } from "react";
import { PiHandHeart, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Cathy Decosta",
    role: "Volunteer",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
    phone: "+256 255 6579",
  },
  {
    name: "Thomas Ster",
    role: "Volunteer",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
    phone: "+256 255 6579",
  },
  {
    name: "Andren Willium",
    role: "Volunteer",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400",
    phone: "+256 255 6579",
  },
];

export default function Team({ isAllTeamPage }) {
  const displayTeam = isAllTeamPage ? [...TEAM, ...TEAM] : TEAM;

  return (
    <section className="bg-[#fcfcfc] py-24 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#006755] font-['Montserrat'] font-bold text-[14px] uppercase tracking-[1px] mb-3">
            Supporting Our Cause Together
          </p>
          <h2 className="text-[#1A1A1A] font-['Montserrat'] font-extrabold text-[42px] leading-tight mb-6">
            Meet Our Dedicated <br /> Team Members
          </h2>
          
          {/* Custom Separator */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-12 bg-[#006755]"></div>
            <div className="text-[#006755]">
              <PiHandHeart size={32} />
            </div>
            <div className="h-[2px] w-12 bg-[#006755]"></div>
          </div>
        </div>

        {/* Team Content with Navigation */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-14 h-14 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-300 hover:bg-[#006755] shadow-lg hidden lg:flex">
            <PiCaretLeft size={24} weight="bold" />
          </button>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-14 h-14 rounded-full bg-[#CAA166] text-black flex items-center justify-center transition-all duration-300 hover:bg-[#006755] hover:text-white shadow-lg hidden lg:flex">
            <PiCaretRight size={24} weight="bold" />
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayTeam.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#006755] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CAA166] opacity-[0.03] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}

