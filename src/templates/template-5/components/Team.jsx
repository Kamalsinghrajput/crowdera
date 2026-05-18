"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";
import TeamCard from "./TeamCard";

const TEAM = [
  {
    name: "Leslie Alexander",
    role: "Chairperson",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Leslie leads our board with over 15 years of experience in social development. Her strategic vision has transformed communities across three continents.",
    organization: "Tamun Foundation",
    joinedAt: "January 2015",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Dianne Russell",
    role: "Managing Director",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Dianne drives our global partnerships and program delivery. She brings deep expertise in sustainable development and international NGO management.",
    organization: "Tamun Foundation",
    joinedAt: "March 2017",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Ralph Edwards",
    role: "Finance Head",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Ralph oversees all financial operations and ensures our resources are allocated for maximum social impact. Former investment banker turned philanthropist.",
    organization: "Tamun Foundation",
    joinedAt: "June 2018",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Annette Black",
    role: "Operations Chief",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Annette coordinates field teams and logistics across all active campaigns. Her operational excellence keeps our initiatives running seamlessly.",
    organization: "Tamun Foundation",
    joinedAt: "September 2019",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Esther Howard",
    role: "Legal Advisor",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Esther ensures all our operations comply with international laws and regulations. Her guidance helps us navigate complex legal landscapes.",
    organization: "Tamun Foundation",
    joinedAt: "August 2020",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Wade Warren",
    role: "Marketing Director",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Wade leads our global marketing and outreach strategies, ensuring our mission reaches the hearts of millions around the world.",
    organization: "Tamun Foundation",
    joinedAt: "February 2021",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Cameron Williamson",
    role: "Strategy Lead",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Cameron is the architect behind our long-term strategic goals, consistently finding innovative ways to amplify our impact.",
    organization: "Tamun Foundation",
    joinedAt: "May 2021",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
  {
    name: "Jenny Wilson",
    role: "Community Manager",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=450",
    bio: "Jenny builds and nurtures our global community of volunteers and donors, keeping everyone engaged and inspired.",
    organization: "Tamun Foundation",
    joinedAt: "November 2022",
    status: "Active",
    socials: { x: "#", linkedin: "#" },
  },
];

export default function Team({ isAllTeamPage }) {
  const headingRef = useHeadingAnimation();
  const displayTeam = isAllTeamPage ? TEAM : TEAM.slice(0, 4);

  return (
    <section
      style={{
        background: "var(--secondary-bg-color)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "40%",
            height: "80%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--primary) 3%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "40%",
            height: "80%",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--secondary) 3%, transparent) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header - Only visible on homepage */}
        {!isAllTeamPage && (
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "var(--bg-color)",
                }}
              >
                Our Board Members
              </span>
            </div>
            <h2
              ref={headingRef}
              style={{
                fontSize: "clamp(36px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.2,
                color: "var(--bg-color)",
                margin: 0,
              }}
            >
              Meet Our Dedicated Board Members
            </h2>
          </div>
        )}

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {displayTeam.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* Button matching Template 5 UI */}
        {!isAllTeamPage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/templates/template-5/team">
              <a className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[14px] uppercase px-10 py-[18px] transition-colors duration-300 hover:bg-[var(--secondary)] no-underline shadow-lg rounded-full">
                VIEW ALL BOARD MEMBERS
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
