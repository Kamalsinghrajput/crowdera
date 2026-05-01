"use client";
import { useRef } from "react";

/* ─── Palette matching Services section ─── */
const BG = "#EBD3AF";
const DARK = "#121d18";
const GREEN = "#007B39";
const MUTED = "rgba(18,29,24,0.52)";

/* ─── Partner list ─── */
const PARTNERS = [
  {
    name: "Global",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    ),
  },
  {
    name: "Travel",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="2" width="7" height="20" rx="1" />
        <rect x="14" y="2" width="7" height="20" rx="1" />
        <line x1="3" y1="9" x2="10" y2="9" />
        <line x1="14" y1="9" x2="21" y2="9" />
        <line x1="3" y1="15" x2="10" y2="15" />
        <line x1="14" y1="15" x2="21" y2="15" />
      </svg>
    ),
  },
  {
    name: "Brand",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="2" width="9" height="9" />
        <rect x="13" y="2" width="9" height="9" />
        <rect x="2" y="13" width="9" height="9" />
        <rect x="13" y="13" width="9" height="9" />
      </svg>
    ),
  },
  {
    name: "Planet",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polygon points="12 3 22 21 2 21" />
        <polyline points="7 21 12 14 17 21" />
      </svg>
    ),
  },
  {
    name: "Nature",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="4" y1="4" x2="20" y2="20" />
        <line x1="4" y1="11" x2="13" y2="20" />
        <line x1="11" y1="4" x2="20" y2="13" />
      </svg>
    ),
  },
  {
    name: "Horizon",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 3a15 6 0 0 1 0 18A15 6 0 0 1 12 3z" />
      </svg>
    ),
  },
  {
    name: "Apex",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "Unity",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
        <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
      </svg>
    ),
  },
  {
    name: "Solaris",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
        <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
        <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
      </svg>
    ),
  },
  {
    name: "Vantage",
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

/* ─── CSS keyframe injected once ─── */
const MARQUEE_STYLE = `
  @keyframes partnerScroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .partner-track {
    display: inline-flex;
    animation: partnerScroll 22s linear infinite;
    will-change: transform;
  }
  .partner-track:hover { animation-play-state: paused; }
  .partner-item {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 48px;
    flex-shrink: 0;
    cursor: default;
    transition: opacity 0.2s;
    opacity: 1;
  }
  .partner-track:hover .partner-item { opacity: 0.4; }
  .partner-track:hover .partner-item:hover { opacity: 1; }
  .partner-item .partner-icon { color: rgba(18,29,24,0.52); transition: color 0.25s; }
  .partner-item .partner-name { color: rgba(18,29,24,0.52); transition: color 0.25s; font-size: 20px; font-weight: 700; letter-spacing: 0.02em; white-space: nowrap; }
  .partner-item:hover .partner-icon,
  .partner-item:hover .partner-name { color: #121d18; }
`;

export default function Partners() {
  /* duplicate list for seamless loop */
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section
      style={{
        background: BG,
        paddingTop: "0",
        paddingBottom: "72px",
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
            Our Trusted Partner
          </span>
        </div>
      </div>

      {/* ── Infinite marquee – constrained overflow clip ── */}
      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ overflow: "hidden" }}
      >
        <div className="partner-track">
          {doubled.map((p, i) => (
            <div key={i} className="partner-item">
              <span className="partner-icon" style={{ lineHeight: 1 }}>
                {p.icon}
              </span>
              <span className="partner-name">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
