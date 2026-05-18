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
  @keyframes featuredScroll5 {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .featured-track-5 {
    display: inline-flex;
    animation: featuredScroll5 26s linear infinite;
    will-change: transform;
  }
  .featured-track-5:hover { animation-play-state: paused; }
  .featured-item-5 {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 48px;
    flex-shrink: 0;
    cursor: default;
    transition: opacity 0.2s;
    opacity: 1;
  }
  .featured-track-5:hover .featured-item-5 { opacity: 0.4; }
  .featured-track-5:hover .featured-item-5:hover { opacity: 1; }
  .featured-item-5 .featured-icon { color: var(--bg-color); opacity: 0.6; transition: color 0.25s, opacity 0.25s; }
  .featured-item-5 .featured-name { color: var(--bg-color); opacity: 0.6; transition: color 0.25s, opacity 0.25s; font-size: 20px; font-weight: 700; letter-spacing: 0.02em; white-space: nowrap; font-family: 'Montserrat', sans-serif; }
  .featured-item-5:hover .featured-icon,
  .featured-item-5:hover .featured-name { color: var(--primary); opacity: 1; }
`;

export default function FeaturedIn() {
  /* duplicate list for seamless loop */
  const doubled = [...FEATURED, ...FEATURED];

  return (
    <section
      style={{
        background: "var(--secondary-bg-color)",
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
              background: "var(--primary)",
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
            As Featured In
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "color-mix(in srgb, var(--bg-color) 8%, transparent)", marginBottom: "44px" }} />
      </div>

      {/* ── Infinite marquee – constrained overflow clip ── */}
      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ overflow: "hidden" }}
      >
        <div className="featured-track-5">
          {doubled.map((item, i) => (
            <div key={i} className="featured-item-5">
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
