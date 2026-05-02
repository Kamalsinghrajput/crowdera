"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const TEAM = [
  {
    name: "Leslie Alexander",
    role: "Junior Poster",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=450",
  },
  {
    name: "Dianne Russell",
    role: "Junior Poster",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=450",
  },
  {
    name: "Ralph Edwards",
    role: "Junior Poster",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=450",
  },
  {
    name: "Annette Black",
    role: "Junior Poster",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=450",
  },
];

import TeamCard from "./TeamCard";

export default function Team({ isAllTeamPage }) {
  const displayTeam = isAllTeamPage ? [...TEAM, ...TEAM] : TEAM;

  return (
    <section
      style={{
        background: "#F9F9F9",
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
              "radial-gradient(circle, rgba(0,123,57,0.03) 0%, transparent 70%)",
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
              "radial-gradient(circle, rgba(255,164,21,0.03) 0%, transparent 70%)",
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
        {/* Header */}
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
                background: "#007B39",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: 700,
                color: "#121d18",
              }}
            >
              Our Team Member
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#121d18",
              margin: 0,
            }}
          >
            Meet the Dedicated Team
          </h2>
        </div>

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

        {/* t2-btn CTA */}
        {!isAllTeamPage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Link href="/templates/template-3/team">
              <a className="t2-btn">
                <span>All Team Members</span>
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </i>
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
