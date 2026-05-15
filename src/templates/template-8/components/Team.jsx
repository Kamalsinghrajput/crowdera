"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { PiHandHeart, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Cathy Decosta",
    role: "Core Team",
    designation: "CEO",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Thomas Ster",
    role: "Core Team",
    designation: "CTO",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Andren Willium",
    role: "Core Team",
    designation: "CFO",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=400",
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


          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayTeam.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>

          {!isAllTeamPage && (
            <div className="mt-16 flex justify-center">
              <Link href="/templates/template-8/team">
                <a className="inline-block bg-[#006755] text-white font-['Montserrat'] font-bold text-[16px] px-8 py-4 rounded-full hover:bg-[#1A1A1A] transition-colors duration-300">
                  View All
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#006755] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#CAA166] opacity-[0.03] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}

