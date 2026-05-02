"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import {
  FiDroplet,
  FiShoppingBag,
  FiHeart,
  FiUserCheck,
  FiBookOpen,
  FiAlertTriangle,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const BG = "#EBD3AF";
const CARD_BDR = "#bfb49a";
const CARD_HOVER = "black";
const DARK = "#121d18";
const GREEN = "#007B39";
const GAP = 20;
const AUTO_MS = 3000;

const SERVICES = [
  {
    title: "Clean Water Access",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiDroplet size={38} strokeWidth={1.3} />,
  },
  {
    title: "Food Security",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiShoppingBag size={38} strokeWidth={1.3} />,
  },
  {
    title: "Healthcare Outreach",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiHeart size={38} strokeWidth={1.3} />,
  },
  {
    title: "Elderly Care",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiUserCheck size={38} strokeWidth={1.3} />,
  },
  {
    title: "Educational Support",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiBookOpen size={38} strokeWidth={1.3} />,
  },
  {
    title: "Emergency Relief",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiAlertTriangle size={38} strokeWidth={1.3} />,
  },
  {
    title: "Child Protection",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiShield size={38} strokeWidth={1.3} />,
  },
  {
    title: "Community Development",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiUsers size={38} strokeWidth={1.3} />,
  },
];

const TOTAL = SERVICES.length; // 8

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cardWidth, setCardWidth] = useState(0); // px â€“ measured on client
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const [dotCount, setDotCount] = useState(TOTAL - 4 + 1);
  const viewportRef = useRef(null); // overflow:hidden viewport
  const trackRef = useRef(null);
  const overlayRefs = useRef([]);
  const isPausedRef = useRef(false);
  const activeRef = useRef(0); // mirrors activeIndex for timer closure

  /* â”€â”€ measure container â†’ compute card width â”€â”€ */
  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const viewportWidth = viewportRef.current.offsetWidth;
    const currentViewsCount = viewportWidth < 640 ? 1 : viewportWidth < 850 ? 2 : viewportWidth < 1024 ? 3 : 4;
    setVisibleCardsCount(currentViewsCount);
    setDotCount(TOTAL - currentViewsCount + 1);
    setCardWidth((viewportWidth - (currentViewsCount - 1) * GAP) / currentViewsCount);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  /* â”€â”€ slide amount = cardWidth + GAP â”€â”€ */
  const slideAmt = cardWidth + GAP;

  const moveTo = useCallback(
    (rawIndex) => {
      const targetIndex = Math.max(0, Math.min(rawIndex, dotCount - 1));
      activeRef.current = targetIndex;
      setActiveIndex(targetIndex);
      if (trackRef.current && slideAmt > 0) {
        gsap.to(trackRef.current, {
          x: -(targetIndex * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    [slideAmt, dotCount],
  );

  /* â”€â”€ auto-slide â”€â”€ */
  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current || slideAmt === 0) return;
      const next =
        activeRef.current >= dotCount - 1 ? 0 : activeRef.current + 1;
      activeRef.current = next;
      setActiveIndex(next);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          x: -(next * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [slideAmt, dotCount]);

  const handleEnter = (index) => {
    isPausedRef.current = true;
    setHoveredIndex(index);
    if (overlayRefs.current[index])
      gsap.to(overlayRefs.current[index], {
        scaleY: 1,
        duration: 0.38,
        ease: "power3.out",
      });
  };
  const handleLeave = (index) => {
    isPausedRef.current = false;
    setHoveredIndex(null);
    if (overlayRefs.current[index])
      gsap.to(overlayRefs.current[index], {
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
          ref={viewportRef}
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
                cardWidth > 0 ? `${TOTAL * cardWidth + (TOTAL - 1) * GAP}px` : "100%",
            }}
          >
            {SERVICES.map((srv, index) => {
              const isHov = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : `${100 / visibleCardsCount}%`,
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
                      overlayRefs.current[index] = el;
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
        {Array.from({ length: dotCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => moveTo(index)}
            aria-label={`Slide ${index + 1}`}
            style={{
              width: "11px",
              height: "11px",
              border: `1.5px solid ${DARK}`,
              background: activeIndex === index ? DARK : "transparent",
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

