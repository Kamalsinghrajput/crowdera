"use client";

import React from "react";
import Link from "next/link";
import TeamCard from "./TeamCard";
import ButtonLetterRoll from "./ButtonLetterRoll";

const BOARD_MEMBERS = [
  {
    name: "Karl Wiggins",
    role: "REGIONAL DIRECTOR",
    color: "#db8a84",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Karl Wiggins serves as our Regional Director, guiding local community actions and establishing resilient support frameworks.",
    organization: "Givico",
    joinedAt: "10-02-2015",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Kari Kelley",
    role: "VICE CHAIR",
    color: "#8bc7bd",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Kari brings immense foresight in resource synchronization and corporate associations to propel our global actions.",
    organization: "Givico",
    joinedAt: "15-05-2017",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Scot Brooks",
    role: "VOLUNTEER",
    color: "#d6a678",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Scot coordinates logistics and support operations with absolute dedication, directly engaging on-ground when most needed.",
    organization: "Givico",
    joinedAt: "22-11-2019",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Dr. Elena Rostova",
    role: "HEAD OF MEDICAL RELIEF",
    color: "#a3c78b",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Dr. Rostova oversees our global healthcare drives, organizing mobile clinic deployment and pharmaceutical distributions with precision.",
    organization: "Givico",
    joinedAt: "14-08-2018",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Marcus Vance",
    role: "COMMUNICATIONS DIRECTOR",
    color: "#c98bc7",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Marcus shapes our public message and campaign visibility, building transparent connections with international advocacy agencies.",
    organization: "Givico",
    joinedAt: "05-11-2020",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Aria Thorne",
    role: "FINANCIAL STRATEGIST",
    color: "#8ba3c7",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    bio: "Aria manages audit processes and long-term financial allocations to secure complete transparency and maximum resource deployment efficiency.",
    organization: "Givico",
    joinedAt: "19-01-2021",
    status: "Active",
    socials: {
      facebook: "https://facebook.com",
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
];

export default function Team({ isAllTeamPage }) {
  return (
    <section className="bg-[#FAF6FC] py-[120px] relative overflow-hidden z-20 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header Block — Hidden on secondary page */}
        {!isAllTeamPage && (
          <div className="text-center mb-16">
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-4"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Board Members
            </span>
            <h2
              className="text-5xl lg:text-7xl font-black text-[#211823] tracking-tighter leading-[1.05] uppercase m-0"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              MEET OUR BOARD MEMBERS
            </h2>
          </div>
        )}

        {/* Team/Board Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(isAllTeamPage ? BOARD_MEMBERS : BOARD_MEMBERS.slice(0, 3)).map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* View All Board Members Button — Hidden on secondary page */}
        {!isAllTeamPage && (
          <div className="text-center mt-16">
            <ButtonLetterRoll
              text="View All Board Members"
              href="/templates/template-6/team"
            />
          </div>
        )}
      </div>
    </section>
  );
}
