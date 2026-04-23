'use client';
import { useState } from "react";

const TEAM = [
{
  name: "Leslie Alexander", role: "Program Director",
  img: "https://randomuser.me/api/portraits/women/44.jpg"
},
{
  name: "Annette Black", role: "Community Manager",
  img: "https://randomuser.me/api/portraits/men/32.jpg"
},
{
  name: "Dianne Russell", role: "Volunteer Coordinator",
  img: "https://randomuser.me/api/portraits/women/68.jpg"
},
{
  name: "Marvin McKinney", role: "Outreach Specialist",
  img: "https://randomuser.me/api/portraits/men/75.jpg"
}];


const SOCIALS = ["f", "t", "in", "yt"];

export default function TeamOne() {
  const [hovered, setHovered] = useState(null);

  return (
    <section style={{ background: "#fff", padding: "120px 0", position: "relative" }}>
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#FFA415" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, color: "#121D18", fontStyle: "italic" }}>
              Our Team Member
            </span>
          </div>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "clamp(28px, 4vw, 52px)", lineHeight: 1.2, color: "#121D18" }}>
            Meet Our Dedicated<br /> Team Members.
          </h2>
        </div>

        {/* Team cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 30 }}>
          {TEAM.map((member, i) =>
          <div key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          style={{
            borderRadius: 12, overflow: "hidden",
            boxShadow: hovered === i ? "0 12px 40px rgba(0,0,0,0.15)" : "0 2px 16px rgba(0,0,0,0.06)",
            transition: "box-shadow 0.3s", background: "#fff"
          }}>
            
              {/* Photo */}
              <div style={{ overflow: "hidden", height: 300 }}>
                <img src={member.img} alt={member.name} style={{
                width: "100%", height: "100%", objectFit: "cover",
                transition: "transform 0.5s",
                transform: hovered === i ? "scale(1.06)" : "scale(1)"
              }} />
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px", position: "relative" }}>
                {/* Social expand */}
                <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 14
              }}>
                  <div style={{ display: "flex", gap: 8, overflow: "hidden", maxWidth: hovered === i ? 180 : 0, transition: "max-width 0.4s ease" }}>
                    {SOCIALS.map((s) =>
                  <a key={s} href="#" style={{
                    width: 34, height: 34, borderRadius: "50%", background: "#F5F5F5",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 700, color: "#121D18",
                    textDecoration: "none", transition: "all 0.3s", textTransform: "uppercase", flexShrink: 0
                  }}
                  onMouseEnter={(e) => {e.currentTarget.style.background = "#007B39";e.currentTarget.style.color = "#fff";}}
                  onMouseLeave={(e) => {e.currentTarget.style.background = "#F5F5F5";e.currentTarget.style.color = "#121D18";}}>
                    {s}</a>
                  )}
                  </div>
                  <button style={{
                  width: 36, height: 36, borderRadius: "50%", background: "#007B39", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                  marginLeft: "auto"
                }}>
                    <span style={{ color: "#fff", fontSize: 20, lineHeight: 1, fontWeight: 300 }}>
                      {hovered === i ? "−" : "+"}
                    </span>
                  </button>
                </div>

                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 18, color: "#121D18", margin: "0 0 4px" }}>
                  <a href="#" style={{ color: "inherit", textDecoration: "none" }}>{member.name}</a>
                </h3>
                <p style={{ fontFamily: "Sora, sans-serif", fontSize: 14, color: "#6C6E76", margin: 0 }}>{member.role}</p>
              </div>
            </div>
          )}
        </div>

        {/* See All button */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a href="#" style={{
            display: "inline-flex", alignItems: "center", borderRadius: 30,
            overflow: "hidden", textDecoration: "none"
          }}>
            <span style={{
              padding: "13px 24px", background: "#121D18", color: "#fff",
              fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16
            }}>See All</span>
            <span style={{
              width: 52, height: 52, background: "#121D18",
              display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%"
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
            </span>
          </a>
        </div>
      </div>
    </section>);

}