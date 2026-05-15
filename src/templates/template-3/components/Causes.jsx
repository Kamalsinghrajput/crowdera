"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

const causes = [
  {
    id: 1,
    title: "Well Construction And Purification Projects.",
    tag: "Education",
    text: "Education is a powerful tool for empowering communities and creating lasting change.",
    raised: "$50,000",
    goal: "$65,000",
    percent: 75,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Digital Learning for Rural Students.",
    tag: "Education",
    text: "Providing online education resources to remote communities around the world.",
    raised: "$30,000",
    goal: "$40,000",
    percent: 70,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Medical Support for Communities.",
    tag: "Treatment",
    text: "Emergency healthcare services reaching those who need it most.",
    raised: "$38,000",
    goal: "$60,000",
    percent: 60,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Healthcare Camps & Awareness.",
    tag: "Health",
    text: "Health awareness programs bringing preventive care to underserved regions.",
    raised: "$20,000",
    goal: "$35,000",
    percent: 55,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Clean Water for Communities.",
    tag: "Health",
    text: "Safe drinking water projects transforming lives in rural villages.",
    raised: "$29,000",
    goal: "$45,000",
    percent: 66,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Ending Hunger One Meal at a Time.",
    tag: "Nutrition",
    text: "Daily meals for children fighting malnutrition across developing nations.",
    raised: "$41,000",
    goal: "$60,000",
    percent: 69,
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Food Distribution Drives.",
    tag: "Nutrition",
    text: "Providing food supplies to families struggling with extreme poverty.",
    raised: "$22,000",
    goal: "$40,000",
    percent: 50,
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
  },
];

const GAP = 28; // px gap between cards
const AUTO_MS = 3500; // auto-advance interval
const TOTAL = causes.length;

export default function Causes({ isAllCausesPage }) {
  const trackRef = useRef(null);
  const headingRef = useHeadingAnimation();
  const vpRef = useRef(null);
  const dotRefs = useRef([]);
  const cardWRef = useRef(0); // measured card width in px
  const activeRef = useRef(0); // current logical dot index
  const isPausedRef = useRef(false);
  const timerRef = useRef(null);

  /* ── paint dots without React re-render ── */
  const paintDots = useCallback((idx) => {
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      dot.style.width = i === idx ? "28px" : "8px";
      dot.style.background = i === idx ? "#007B39" : "#D1D5DB";
    });
  }, []);

  /* ── compute card width from container ── */
  const measure = useCallback(() => {
    if (!vpRef.current) return;
    const viewportWidth = vpRef.current.offsetWidth;
    // Calculate visible cards dynamically
    const views = viewportWidth < 768 ? 1 : viewportWidth < 1024 ? 2 : 3;
    const cardWidth = (viewportWidth - (views - 1) * GAP) / views;
    cardWRef.current = cardWidth;

    // Directly size every card in the DOM
    if (trackRef.current) {
      trackRef.current.querySelectorAll(".cause-card").forEach((element) => {
        element.style.width = cardWidth + "px";
      });
      // Re-snap to active position instantly (no animation)
      gsap.set(trackRef.current, {
        x: -(activeRef.current * (cardWidth + GAP)),
      });
    }
  }, []);

  /* ── slide to logical index ── */
  const moveTo = useCallback(
    (rawIndex) => {
      const targetIndex = ((rawIndex % TOTAL) + TOTAL) % TOTAL;
      activeRef.current = targetIndex;
      paintDots(targetIndex);
      if (trackRef.current && cardWRef.current > 0) {
        gsap.to(trackRef.current, {
          x: -(targetIndex * (cardWRef.current + GAP)),
          duration: 0.55,
          ease: "power3.inOut",
        });
      }
    },
    [paintDots],
  );

  /* ── measure on mount + resize ── */
  useEffect(() => {
    // Initial measure after first paint
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  /* ── init dots ── */
  useEffect(() => {
    paintDots(0);
  }, [paintDots]);

  /* ── auto-advance (no state, no re-render) ── */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (isPausedRef.current || cardWRef.current === 0) return;
      moveTo(activeRef.current + 1);
    }, AUTO_MS);
    return () => clearInterval(timerRef.current);
  }, [moveTo]);

  const handlePrev = () => {
    isPausedRef.current = true;
    moveTo(activeRef.current - 1);
    setTimeout(() => {
      isPausedRef.current = false;
    }, 4000);
  };

  const handleNext = () => {
    isPausedRef.current = true;
    moveTo(activeRef.current + 1);
    setTimeout(() => {
      isPausedRef.current = false;
    }, 4000);
  };

  /* ── For seamless wrap we use TOTAL duplicate cards so the last slide
        can show up to 3 full cards. The track holds 2×TOTAL items so
        the GSAP position never goes negative and never overflows. ── */
  const trackCards = [...causes, ...causes];

  return (
    <section id="causes" style={{ background: "#f7f4ee", padding: "110px 0" }}>
      <div className="max-w-[1320px] mx-auto px-4">
        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 12,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#007B39",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontStyle: "italic",
                fontWeight: 600,
                color: "#007B39",
              }}
            >
              Recent Causes
            </span>
          </div>
          <h2
            ref={headingRef}
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "#121D18",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Helping The People In Need
          </h2>
        </div>

        {/* ── Conditional Render: Grid vs Carousel ── */}
        {isAllCausesPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] pb-16">
            {causes.map((course, idx) => (
              <div
                key={idx}
                className="cause-card flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#ebebeb]"
                style={{
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 20px 60px rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div
                  style={{ position: "relative", height: 220, flexShrink: 0 }}
                >
                  <Image
                    src={course.img}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 16,
                      left: 16,
                      background: "#FFA415",
                      color: "#fff",
                      padding: "5px 14px",
                      borderRadius: 50,
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {course.tag}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: "24px 24px 28px",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: "#121D18",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {course.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6F767E",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {course.text}
                  </p>

                  {/* Raised / Goal */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      marginTop: 8,
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#121D18",
                        }}
                      >
                        {course.raised}
                      </span>{" "}
                      <span style={{ fontSize: 12, color: "#9CA3AF" }}>
                        Raised
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#121D18",
                        }}
                      >
                        {course.goal}
                      </span>{" "}
                      <span style={{ fontSize: 12, color: "#9CA3AF" }}>
                        Goal
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "100%",
                        height: 6,
                        background: "#f0f0f0",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: course.percent + "%",
                          background: "#007B39",
                          borderRadius: 99,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        position: "absolute",
                        right: 0,
                        top: -22,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#007B39",
                      }}
                    >
                      {course.percent}%
                    </span>
                  </div>

                  {/* Donate button */}
                  <div style={{ marginTop: 8 }}>
                    <a
                      href="/templates/template-3/initiatives?tab=campaigns"
                      className="t2-btn inline-flex"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Donate Now</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ── Carousel Viewport ── */}
            <div
              ref={vpRef}
              style={{ overflow: "hidden", marginBottom: 48, cursor: "grab" }}
              onMouseEnter={() => {
                isPausedRef.current = true;
              }}
              onMouseLeave={() => {
                isPausedRef.current = false;
              }}
            >
              {/* Track – contains 2× cards for seamless looping */}
              <div
                ref={trackRef}
                style={{ display: "flex", gap: GAP, willChange: "transform" }}
              >
                {trackCards.map((course, idx) => (
                  <div
                    key={idx}
                    className="cause-card flex flex-col bg-white rounded-[16px] overflow-hidden border border-[#ebebeb]"
                    style={{
                      /* width is set imperatively by measure() */
                      width: "calc(33.333% - 19px)",
                      flexShrink: 0,
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 20px 60px rgba(0,0,0,0.08)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Image */}
                    <div
                      style={{
                        position: "relative",
                        height: 220,
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={course.img}
                        alt={course.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          background: "#FFA415",
                          color: "#fff",
                          padding: "5px 14px",
                          borderRadius: 50,
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {course.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      style={{
                        padding: "24px 24px 28px",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        gap: 12,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#121D18",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {course.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#6F767E",
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {course.text}
                      </p>

                      {/* Raised / Goal */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-end",
                          marginTop: 8,
                        }}
                      >
                        <div>
                          <span
                            style={{
                              fontSize: 17,
                              fontWeight: 700,
                              color: "#121D18",
                            }}
                          >
                            {course.raised}
                          </span>{" "}
                          <span style={{ fontSize: 12, color: "#9CA3AF" }}>
                            Raised
                          </span>
                        </div>
                        <div>
                          <span
                            style={{
                              fontSize: 17,
                              fontWeight: 700,
                              color: "#121D18",
                            }}
                          >
                            {course.goal}
                          </span>{" "}
                          <span style={{ fontSize: 12, color: "#9CA3AF" }}>
                            Goal
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div style={{ position: "relative" }}>
                        <div
                          style={{
                            width: "100%",
                            height: 6,
                            background: "#f0f0f0",
                            borderRadius: 99,
                            overflow: "hidden",
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: course.percent + "%",
                              background: "#007B39",
                              borderRadius: 99,
                            }}
                          />
                        </div>
                        <span
                          style={{
                            position: "absolute",
                            right: 0,
                            top: -22,
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#007B39",
                          }}
                        >
                          {course.percent}%
                        </span>
                      </div>

                      {/* Donate button */}
                      <div style={{ marginTop: 8 }}>
                        <a
                          href="/templates/template-3/initiatives?tab=campaigns"
                          className="t2-btn inline-flex"
                          style={{ textDecoration: "none" }}
                        >
                          <span>Donate Now</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Controls: Prev / Dots / Next + View All ── */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              {/* Prev / Dots / Next */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {/* Prev button */}
                <button
                  onClick={handlePrev}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "1.5px solid #121D18",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.25s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#007B39";
                    e.currentTarget.style.borderColor = "#007B39";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "#121D18";
                    e.currentTarget.style.color = "#121D18";
                  }}
                  aria-label="Previous"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Dots — imperatively styled, NO state */}
                <div style={{ display: "flex", gap: 6 }}>
                  {causes.map((_, i) => (
                    <button
                      key={i}
                      ref={(el) => {
                        dotRefs.current[i] = el;
                      }}
                      onClick={() => {
                        isPausedRef.current = true;
                        moveTo(i);
                        setTimeout(() => {
                          isPausedRef.current = false;
                        }, 4000);
                      }}
                      style={{
                        height: 8,
                        width: 8,
                        borderRadius: 99,
                        border: "none",
                        cursor: "pointer",
                        background: "#D1D5DB",
                        padding: 0,
                        transition: "all 0.3s",
                      }}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>

                {/* Next button */}
                <button
                  onClick={handleNext}
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    border: "1.5px solid #121D18",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.25s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#007B39";
                    e.currentTarget.style.borderColor = "#007B39";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "#121D18";
                    e.currentTarget.style.color = "#121D18";
                  }}
                  aria-label="Next"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* View All button */}
              <a
                href="/templates/template-3/initiatives?tab=campaigns"
                className="t2-btn inline-flex"
                style={{ textDecoration: "none" }}
              >
                <span>View All Causes</span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
