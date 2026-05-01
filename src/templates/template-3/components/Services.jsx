"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";

const BG = "#EBD3AF";
const CARD_BDR = "#bfb49a";
const CARD_HOVER = "black";
const DARK = "#121d18";
const GREEN = "#007B39";
const GAP = 20;
const VISIBLE = 4;
const AUTO_MS = 3000;

const SERVICES = [
  {
    title: "Clean Water Access",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M12 2C8 7 5 11 5 15a7 7 0 0 0 14 0C19 11 16 7 12 2z" />
        <circle cx="10" cy="15" r="1.2" />
        <circle cx="14" cy="15" r="1.2" />
      </svg>
    ),
  },
  {
    title: "Food Security",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M3 6h18M5 6v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6" />
        <path d="M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" />
        <line x1="10" y1="11" x2="10" y2="17" />
        <line x1="14" y1="11" x2="14" y2="17" />
      </svg>
    ),
  },
  {
    title: "Healthcare Outreach",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M6 21v-1a6 6 0 0 1 12 0v1" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="12" y1="5" x2="12" y2="11" />
      </svg>
    ),
  },
  {
    title: "Elderly Care",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-1a7 7 0 0 1 14 0v1" />
        <path d="M9 13l1.5 2 2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Educational Support",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Emergency Relief",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: "Child Protection",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Community Development",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: (
      <svg
        width="38"
        height="38"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const TOTAL = SERVICES.length; // 8
const DOT_COUNT = TOTAL - VISIBLE + 1; // 5

export default function Services() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [cardW, setCardW] = useState(0); // px â€“ measured on client
  const vpRef = useRef(null); // overflow:hidden viewport
  const trackRef = useRef(null);
  const overlayRefs = useRef([]);
  const isPausedRef = useRef(false);
  const activeRef = useRef(0); // mirrors activeIdx for timer closure

  /* â”€â”€ measure container â†’ compute card width â”€â”€ */
  const measure = useCallback(() => {
    if (!vpRef.current) return;
    // cardW = (containerW - (VISIBLE-1)*GAP) / VISIBLE
    const cw = vpRef.current.offsetWidth;
    setCardW((cw - (VISIBLE - 1) * GAP) / VISIBLE);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* â”€â”€ slide amount = cardW + GAP â”€â”€ */
  const slideAmt = cardW + GAP;

  const moveTo = useCallback(
    (idx) => {
      const c = Math.max(0, Math.min(idx, DOT_COUNT - 1));
      activeRef.current = c;
      setActiveIdx(c);
      if (trackRef.current && slideAmt > 0) {
        gsap.to(trackRef.current, {
          x: -(c * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    [slideAmt],
  );

  /* â”€â”€ auto-slide â”€â”€ */
  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current || slideAmt === 0) return;
      const next =
        activeRef.current >= DOT_COUNT - 1 ? 0 : activeRef.current + 1;
      activeRef.current = next;
      setActiveIdx(next);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          x: -(next * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [slideAmt]);

  const handleEnter = (i) => {
    isPausedRef.current = true;
    setHoveredIdx(i);
    if (overlayRefs.current[i])
      gsap.to(overlayRefs.current[i], {
        scaleY: 1,
        duration: 0.38,
        ease: "power3.out",
      });
  };
  const handleLeave = (i) => {
    isPausedRef.current = false;
    setHoveredIdx(null);
    if (overlayRefs.current[i])
      gsap.to(overlayRefs.current[i], {
        scaleY: 0,
        duration: 0.32,
        ease: "power3.inOut",
      });
  };

  return (
    <section
      style={{
        background: BG,
        paddingTop: "80px",
        paddingBottom: "0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative rings */}
      {[340, 230].map((size, k) => (
        <div
          key={k}
          style={{
            position: "absolute",
            top: `${-size / 2 + 30}px`,
            right: `${-size / 2 + 30}px`,
            width: `${size}px`,
            height: `${size}px`,
            border: "1.5px solid rgba(139,125,101,0.32)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}
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
          Our Services
        </span>
      </div>
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "52px",
          position: "relative",
          zIndex: 1,
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px,4.5vw,54px)",
            fontWeight: 800,
            color: DARK,
            lineHeight: 1.1,
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          Transforming Lives Through .
        </h2>
      </div>

      {/* â”€â”€ Constrained slider viewport (same width as navbar) â”€â”€ */}
      <div className="max-w-[1320px] mx-auto px-4">
        {/* overflow clip */}
        <div
          ref={vpRef}
          style={{ overflow: "hidden" }}
          onMouseEnter={() => {
            isPausedRef.current = true;
          }}
          onMouseLeave={() => {
            isPausedRef.current = false;
          }}
        >
          {/* Track â€“ absolute pixel widths so gaps work correctly */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${GAP}px`,
              /* track width = TOTAL cards + gaps between them */
              width:
                cardW > 0 ? `${TOTAL * cardW + (TOTAL - 1) * GAP}px` : "100%",
            }}
          >
            {SERVICES.map((srv, i) => {
              const isHov = hoveredIdx === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  style={{
                    width: cardW > 0 ? `${cardW}px` : `${100 / VISIBLE}%`,
                    flexShrink: 0,
                    position: "relative",
                    background: "transparent",
                    border: `1px solid ${CARD_BDR}`,
                    padding: "48px 28px 44px",
                    textAlign: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                >
                  {/* Olive hover fill */}
                  <div
                    ref={(el) => {
                      overlayRefs.current[i] = el;
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: CARD_HOVER,
                      transform: "scaleY(0)",
                      transformOrigin: "center",
                      zIndex: 1,
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 2 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "12px",
                        color: isHov ? "rgba(255,255,255,0.9)" : DARK,
                        transition: "color 0.3s",
                      }}
                    >
                      {srv.icon}
                    </div>
                    <div
                      style={{
                        width: "36px",
                        height: "1px",
                        background: isHov ? "rgba(255,255,255,0.38)" : CARD_BDR,
                        margin: "0 auto 28px",
                        transition: "background 0.3s",
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: isHov ? "#fff" : DARK,
                        marginBottom: "12px",
                        lineHeight: 1.3,
                        transition: "color 0.3s",
                      }}
                    >
                      {srv.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.8",
                        color: isHov ? "rgba(255,255,255,0.78)" : "#6b6558",
                        marginBottom: "28px",
                        transition: "color 0.3s",
                      }}
                    >
                      {srv.text}
                    </p>
                    <a
                      href="#"
                      className="t3-service-readmore"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: isHov ? "#FFA415" : DARK,
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                    >
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "7px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            width: "20px",
                            height: "1.5px",
                            background: "currentColor",
                            verticalAlign: "middle",
                            flexShrink: 0,
                          }}
                        />
                        Read More
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dot navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          padding: "36px 0 52px",
        }}
      >
        {Array.from({ length: DOT_COUNT }).map((_, i) => (
          <button
            key={i}
            onClick={() => moveTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: "11px",
              height: "11px",
              border: `1.5px solid ${DARK}`,
              background: activeIdx === i ? DARK : "transparent",
              cursor: "pointer",
              padding: 0,
              outline: "none",
              transition: "background 0.25s",
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

