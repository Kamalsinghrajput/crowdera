"use client";
import React from "react";
import Link from "next/link";
import FloatingBird from "./FloatingBird";
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
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Priya Desai",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Priya brings a wealth of expertise in sustainable development and corporate partnerships. She spearheads our core outreach programs globally.",
    organization: "Joyful Minds",
    joinedAt: "15-05-2014",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Marcus Johnson",
    role: "Finance Head",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Marcus oversees financial strategy and compliance. With a background in investment banking, he ensures optimal resource allocation for maximum impact.",
    organization: "Joyful Minds",
    joinedAt: "10-08-2018",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Sarah Lin",
    role: "Operations Chief",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Sarah is a logistics expert who manages our on-ground operations and field teams, ensuring our campaigns run seamlessly across various regions.",
    organization: "Joyful Minds",
    joinedAt: "22-11-2020",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Dr. Elena Rostova",
    role: "Medical Director",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Dr. Rostova oversees all global health initiatives. She has spent over a decade leading medical missions in conflict zones and disaster-stricken regions.",
    organization: "Joyful Minds",
    joinedAt: "05-03-2015",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "David Okafor",
    role: "Head of Technology",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "David leads our digital transformation efforts, leveraging cutting-edge tech to streamline donor engagement and field reporting.",
    organization: "Joyful Minds",
    joinedAt: "12-09-2019",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Anita Singh",
    role: "Legal Advisor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Anita ensures our organization adheres to all international non-profit regulations and handles our global policy advocacy initiatives.",
    organization: "Joyful Minds",
    joinedAt: "22-01-2016",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Michael Chen",
    role: "Communications Director",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    bio: "Michael crafts the narrative of our impact, managing public relations, social media, and campaign awareness worldwide.",
    organization: "Joyful Minds",
    joinedAt: "18-07-2021",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
];

export default function Team({ isAllTeamPage = false }) {
  // Colors handled by global CSS variables in index.jsx

  const displayTeam = isAllTeamPage ? TEAM : TEAM.slice(0, 4);

  return (
    <section
      className={`bg-[var(--secondary-bg-color)] ${isAllTeamPage ? "pt-16" : "pt-[120px]"} pb-[100px] relative`}
    >
      <FloatingBird position="right" />
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span className="text-[17px] text-[var(--bg-color)] italic">
              Our Board Members
            </span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-[var(--bg-color)]">
            Meet Our Dedicated
            <br /> Board Members.
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayTeam.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* See All button */}
        {!isAllTeamPage && (
          <div className="text-center mt-[70px]">
            <Link href="/templates/template-2/team">
              <a className="t2-btn">
                <span>See All Board Members</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
