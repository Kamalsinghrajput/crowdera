"use client";
import { useRef } from "react";
import {
  FiStar,
  FiFilm,
  FiGrid,
  FiTriangle,
  FiFeather,
  FiGlobe,
  FiActivity,
  FiShare2,
  FiSun,
  FiShield,
} from "react-icons/fi";

/* ─── Partner list ─── */
const PARTNERS = [
  { name: "Global", icon: <FiStar size={30} strokeWidth={1.5} /> },
  { name: "Travel", icon: <FiFilm size={30} strokeWidth={1.5} /> },
  { name: "Brand", icon: <FiGrid size={30} strokeWidth={1.5} /> },
  { name: "Planet", icon: <FiTriangle size={30} strokeWidth={1.5} /> },
  { name: "Nature", icon: <FiFeather size={30} strokeWidth={1.5} /> },
  { name: "Horizon", icon: <FiGlobe size={30} strokeWidth={1.5} /> },
  { name: "Apex", icon: <FiActivity size={30} strokeWidth={1.5} /> },
  { name: "Unity", icon: <FiShare2 size={30} strokeWidth={1.5} /> },
  { name: "Solaris", icon: <FiSun size={30} strokeWidth={1.5} /> },
  { name: "Vantage", icon: <FiShield size={30} strokeWidth={1.5} /> },
];

/* ─── CSS keyframe injected once ─── */
const MARQUEE_STYLE = `
  @keyframes partnerScroll5 {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .partner-track-5 {
    display: inline-flex;
    animation: partnerScroll5 22s linear infinite;
    will-change: transform;
  }
  .partner-track-5:hover { animation-play-state: paused; }
  .partner-item-5 {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 48px;
    flex-shrink: 0;
    cursor: default;
    transition: opacity 0.2s;
    opacity: 1;
  }
  .partner-track-5:hover .partner-item-5 { opacity: 0.4; }
  .partner-track-5:hover .partner-item-5:hover { opacity: 1; }
  .partner-item-5 .partner-icon { color: var(--bg-color); opacity: 0.52; transition: color 0.25s, opacity 0.25s; }
  .partner-item-5 .partner-name { color: var(--bg-color); opacity: 0.52; transition: color 0.25s, opacity 0.25s; font-size: 20px; font-weight: 700; letter-spacing: 0.02em; white-space: nowrap; font-family: 'Montserrat', sans-serif; }
  .partner-item-5:hover .partner-icon,
  .partner-item-5:hover .partner-name { color: var(--secondary); opacity: 1; }
`;

export default function Partners() {
  /* duplicate list for seamless loop */
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      style={{
        background: "var(--secondary-bg-color)",
        paddingTop: "60px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_STYLE }} />

      {/* ── Constrained wrapper – same width as navbar ── */}
      <div className="max-w-[1320px] mx-auto px-4">
        {/* "● Our Trusted Partner" label */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginBottom: "44px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "var(--secondary)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "var(--bg-color)",
              letterSpacing: "0.01em",
            }}
          >
            Our Trusted Partner
          </span>
        </div>
      </div>

      {/* ── Infinite marquee – constrained overflow clip ── */}
      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ overflow: "hidden" }}
      >
        <div className="partner-track-5">
          {doubled.map((p, i) => (
            <div key={i} className="partner-item-5">
              <span className="partner-icon" style={{ lineHeight: 1 }}>
                {p.icon}
              </span>
              <span className="partner-name">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
