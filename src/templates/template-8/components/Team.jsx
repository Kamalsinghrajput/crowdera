"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { PiHandHeart, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Dr. Anil Sharma",
    role: "Chairperson",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dr. Anil Sharma is a seasoned leader with over 20 years of experience in social development and public policy. He has worked extensively on community welfare initiatives and strategic planning for non-profit organizations.",
    organization: "Joyful Minds",
    joinedAt: "01-01-2010",
    status: "Active",
    socials: {
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "Priya Desai",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Priya brings a wealth of expertise in sustainable development and corporate partnerships. She spearheads our core outreach programs globally.",
    organization: "Joyful Minds",
    joinedAt: "15-05-2014",
    status: "Active",
    socials: {
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Finance Head",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Marcus oversees financial strategy and compliance. With a background in investment banking, he ensures optimal resource allocation for maximum impact.",
    organization: "Joyful Minds",
    joinedAt: "10-08-2018",
    status: "Active",
    socials: { x: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Sarah Lin",
    role: "Operations Chief",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Sarah is a logistics expert who manages our on-ground operations and field teams, ensuring our campaigns run seamlessly across various regions.",
    organization: "Joyful Minds",
    joinedAt: "22-11-2020",
    status: "Active",
    socials: {
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
  {
    name: "Dr. Elena Rostova",
    role: "Medical Director",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dr. Rostova oversees all global health initiatives. She has spent over a decade leading medical missions in conflict zones and disaster-stricken regions.",
    organization: "Joyful Minds",
    joinedAt: "05-03-2015",
    status: "Active",
    socials: { x: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "David Okafor",
    role: "Head of Technology",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "David leads our digital transformation efforts, leveraging cutting-edge tech to streamline donor engagement and field reporting.",
    organization: "Joyful Minds",
    joinedAt: "12-09-2019",
    status: "Active",
    socials: {
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Anita Singh",
    role: "Legal Advisor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Anita ensures our organization adheres to all international non-profit regulations and handles our global policy advocacy initiatives.",
    organization: "Joyful Minds",
    joinedAt: "22-01-2016",
    status: "Active",
    socials: { x: "https://twitter.com", linkedin: "https://linkedin.com" },
  },
  {
    name: "Michael Chen",
    role: "Communications Director",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Michael crafts the narrative of our impact, managing public relations, social media, and campaign awareness worldwide.",
    organization: "Joyful Minds",
    joinedAt: "18-07-2021",
    status: "Active",
    socials: {
      x: "https://twitter.com",
      linkedin: "https://linkedin.com",
      facebook: "https://facebook.com",
    },
  },
];

export default function Team({ isAllTeamPage }) {
  const displayTeam = isAllTeamPage ? TEAM : TEAM.slice(0, 3);

  return (
    <section className="bg-[#fcfcfc] py-24 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 relative z-10">
        {/* Header */}
        {!isAllTeamPage && (
          <div className="text-center mb-16">
            <p className="text-[var(--primary)] font-['Montserrat'] font-bold text-[14px] uppercase tracking-[1px] mb-3">
              Our Board Members
            </p>
            <h2 className="text-[var(--bg-color)] font-['Montserrat'] font-extrabold text-[42px] leading-tight mb-6">
              Meet Our Dedicated <br /> Board Members
            </h2>

            {/* Custom Separator */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-[2px] w-12 bg-[var(--primary)]"></div>
              <div className="text-[var(--primary)]">
                <PiHandHeart size={32} />
              </div>
              <div className="h-[2px] w-12 bg-[var(--primary)]"></div>
            </div>
          </div>
        )}

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
                <a className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[17px] px-8 py-4 rounded-full hover:bg-[var(--bg-color)] transition-colors duration-300">
                  View All
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary)] opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--secondary)] opacity-[0.03] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
