"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const SOCIALS = [
  { key: "fb", label: "FB" },
  { key: "tw", label: "TW" },
  { key: "in", label: "IN" },
];

function TeamCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
      {/* Image Container */}
      <div 
        style={{ width: "100%", position: "relative", backgroundColor: "#f0f0f0", aspectRatio: "4/5", overflow: "visible" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={member.img}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          style={{ transition: "transform 0.5s ease" }}
        />
        
        {/* Floating Add/Social Button */}
        <div style={{ position: "absolute", bottom: "-20px", left: "20px", zIndex: 10 }}>
          <div style={{ position: "relative" }}>
            {/* Social Links Popup */}
            <div style={{
              position: "absolute",
              bottom: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              paddingBottom: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              opacity: isHovered ? 1 : 0,
              visibility: isHovered ? "visible" : "hidden",
              transition: "all 0.3s ease",
              pointerEvents: isHovered ? "auto" : "none"
            }}>
              {SOCIALS.map((s, i) => (
                <a key={s.key} href="#" style={{
                  width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#fff", color: "#121d18",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "bold",
                  textDecoration: "none", boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#FFA415"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fff"; e.currentTarget.style.color = "#121d18"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Main Button */}
            <div style={{
              width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#121d18", color: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
              transform: isHovered ? "rotate(45deg)" : "rotate(0deg)"
            }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div style={{ textAlign: "center" }}>
        <h3 style={{ fontSize: "22px", color: "#121d18", marginBottom: "6px", fontWeight: 700 }}>
          <a href="#" style={{ textDecoration: "none", color: "inherit", transition: "color 0.3s" }}
             onMouseEnter={(e) => e.currentTarget.style.color = "#007B39"}
             onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
          >
            {member.name}
          </a>
        </h3>
        <p style={{ fontSize: "15px", color: "#6c6e76", margin: 0 }}>{member.role}</p>
      </div>
    </div>
  );
}

export default function Team({ isAllTeamPage }) {
  const displayTeam = isAllTeamPage ? [...TEAM, ...TEAM] : TEAM;

  return (
    <section style={{ background: "#F9F9F9", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background decoration */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.5, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "40%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(0,123,57,0.03) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "40%", height: "80%", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,164,21,0.03) 0%, transparent 70%)" }} />
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#007B39", display: "inline-block" }} />
            <span style={{ fontSize: "16px", fontStyle: "italic", fontWeight: 700, color: "#121d18" }}>
              Our Team Member
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(36px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.2, color: "#121d18", margin: 0 }}>
            Meet the Dedicated Team
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px", marginBottom: "60px" }}>
          {displayTeam.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* Button */}
        {!isAllTeamPage && (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="/templates/template-3/team"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                backgroundColor: "#121d18", color: "#fff", padding: "12px 24px",
                borderRadius: "30px", textDecoration: "none", fontWeight: 600, fontSize: "15px",
                transition: "background-color 0.3s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#FFA415"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#121d18"}
            >
              All Team Member
              <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "24px", height: "24px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.3)"
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
