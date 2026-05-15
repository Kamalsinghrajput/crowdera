"use client";
import {
  FiAward,
  FiBookOpen,
  FiCamera,
  FiRadio,
  FiTv,
  FiMessageCircle,
  FiZap,
  FiTrendingUp,
  FiMic,
  FiRss,
} from "react-icons/fi";

/* ─── Palette matching Template 4 style ─── */
const BG = "#ffffff"; 
const DARK = "#121d18";
const GREEN = "#007B39";
const ORANGE = "#FFA415";

/* ─── Featured-in media list ─── */
const FEATURED = [
  { name: "Forbes",     icon: <FiAward      size={30} strokeWidth={1.5} /> },
  { name: "BBC News",   icon: <FiRadio      size={30} strokeWidth={1.5} /> },
  { name: "Reuters",    icon: <FiBookOpen   size={30} strokeWidth={1.5} /> },
  { name: "National Geographic", icon: <FiCamera size={30} strokeWidth={1.5} /> },
  { name: "CNN",        icon: <FiTv         size={30} strokeWidth={1.5} /> },
  { name: "TIME",       icon: <FiTrendingUp size={30} strokeWidth={1.5} /> },
  { name: "The Guardian", icon: <FiMessageCircle size={30} strokeWidth={1.5} /> },
  { name: "TED Talks",  icon: <FiMic        size={30} strokeWidth={1.5} /> },
  { name: "Wired",      icon: <FiZap        size={30} strokeWidth={1.5} /> },
  { name: "Medium",     icon: <FiRss        size={30} strokeWidth={1.5} /> },
];

/* ─── CSS keyframe injected once ─── */
const MARQUEE_STYLE = `
  @keyframes featuredScroll4 {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .featured-track-4 {
    display: inline-flex;
    animation: featuredScroll4 26s linear infinite;
    will-change: transform;
  }
  .featured-track-4:hover { animation-play-state: paused; }
  .featured-item-4 {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 48px;
    flex-shrink: 0;
    cursor: default;
    transition: opacity 0.2s;
    opacity: 1;
  }
  .featured-track-4:hover .featured-item-4 { opacity: 0.4; }
  .featured-track-4:hover .featured-item-4:hover { opacity: 1; }
  .featured-item-4 .featured-icon { color: rgba(18,29,24,0.52); transition: color 0.25s; }
  .featured-item-4 .featured-name { color: rgba(18,29,24,0.52); transition: color 0.25s; font-size: 20px; font-weight: 700; letter-spacing: 0.02em; white-space: nowrap; }
  .featured-item-4:hover .featured-icon,
  .featured-item-4:hover .featured-name { color: #007B39; }
`;

export default function FeaturedIn() {
  /* duplicate list for seamless loop */
  const doubled = [...FEATURED, ...FEATURED];

  return (
    <section
      style={{
        background: BG,
        paddingTop: "80px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_STYLE }} />

      {/* ── Constrained wrapper – same width as navbar ── */}
      <div className="max-w-[1320px] mx-auto px-4">
        {/* "● As Featured In" label */}
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
              background: GREEN,
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 700,
              color: DARK,
              letterSpacing: "0.01em",
            }}
          >
            As Featured In
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(18,29,24,0.08)", marginBottom: "44px" }} />
      </div>

      {/* ── Infinite marquee – constrained overflow clip ── */}
      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ overflow: "hidden" }}
      >
        <div className="featured-track-4">
          {doubled.map((item, i) => (
            <div key={i} className="featured-item-4">
              <span className="featured-icon" style={{ lineHeight: 1 }}>
                {item.icon}
              </span>
              <span className="featured-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
