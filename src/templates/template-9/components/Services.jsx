"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";

const TAB_DATA = [
  {
    key: "Medical",
    title: "Medical Assist",
    tagline: "Every child deserves a healthy start",
    desc: "Thanks to giving people like you, 33 million children are growing up healthy, nourished and treated for childhood killers like pneumonia.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
    btnText: "MEET THE TEAM",
    accent: "#E3692A",
  },
  {
    key: "Education",
    title: "Empower Girls",
    tagline: "Empower through knowledge",
    desc: "We believe education is the key to unlocking a child's full potential and breaking the cycle of poverty in vulnerable communities.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    btnText: "EXPLORE SCHOOLS",
    accent: "#F2B740",
  },
  {
    key: "Food & Nutrition",
    title: "Pure Food",
    tagline: "Nourish a growing body and mind",
    desc: "Providing daily nutritious meals and clean drinking water to thousands of children across community schools to ensure healthy growth.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80",
    btnText: "SEE PROJECTS",
    accent: "#E3692A",
  },
];

// Pixels of scroll track consumed PER TAB (gives a smooth, leisurely feel)
const PX_PER_TAB = 600;
const TOTAL_SCROLL_TRACK = TAB_DATA.length * PX_PER_TAB; // 1800 px

// Visible height of the pinned panel (must match the section's fixed height)
const PANEL_HEIGHT = 820;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tabProgress, setTabProgress] = useState(0); // 0–1 within current tab
  const [showScrollHint, setShowScrollHint] = useState(true);
  const outerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!outerRef.current || window.innerWidth < 1024) return;

      // Distance from the document top to the outer wrapper's top edge
      const outerTop =
        outerRef.current.getBoundingClientRect().top + window.scrollY;

      // How many px the user has scrolled INTO the sticky zone
      const scrolledIn = Math.max(0, window.scrollY - outerTop);
      const overallProgress = Math.min(1, scrolledIn / TOTAL_SCROLL_TRACK);

      const segmentSize = 1 / TAB_DATA.length;
      let newIndex = Math.floor(overallProgress / segmentSize);
      newIndex = Math.min(TAB_DATA.length - 1, newIndex);

      const segmentStart = newIndex * segmentSize;
      const localProgress = Math.min(
        1,
        (overallProgress - segmentStart) / segmentSize,
      );

      setActiveIndex(newIndex);
      setTabProgress(localProgress);
      setShowScrollHint(scrolledIn < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // sync on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /*
     * KEY RULE for `position: sticky` to work:
     *   1. The outer wrapper must NOT have overflow:hidden / overflow:auto.
     *   2. The outer wrapper must be taller than the sticky child.
     *   3. `top:0` on the sticky child = stick to viewport top.
     *
     * Total outer height = visible panel + all scroll-track so the section
     * "locks" the page until every tab has been revealed by scrolling.
     */
    <div
      ref={outerRef}
      className="hidden lg:block relative w-full bg-[#2b1f18]"
      style={{ height: `${PANEL_HEIGHT + TOTAL_SCROLL_TRACK}px` }}
    >
      {/* ── Sticky panel ─────────────────────────────────────────────── */}
      <div
        className="sticky top-0 w-full overflow-hidden shadow-2xl"
        style={{ height: `${PANEL_HEIGHT}px` }}
      >
        <section className="w-full h-full flex flex-row font-sans">
          {/* ── LEFT COLUMN ───────────────────────────────────────────── */}
          <div className="w-1/2 bg-[#2b1f18] px-20 py-32 flex flex-col relative overflow-hidden">
            {/* Large decorative index number */}
            <span
              className="absolute bottom-6 right-6 font-black leading-none pointer-events-none select-none transition-all duration-700"
              style={{
                fontSize: "200px",
                color: "rgba(255,255,255,0.03)",
                lineHeight: 1,
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            {/* Section label */}
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-6 relative z-10"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Our program
            </span>

            {/* Tab pills — driven by scroll, click also works */}
            <div className="flex flex-wrap gap-3 mb-10 border-b border-white/10 pb-6 relative z-10">
              {TAB_DATA.map((tab, idx) => (
                <button
                  key={tab.key}
                  className={`px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-500 ${
                    activeIndex === idx
                      ? "bg-white text-[#2b1f18] shadow-lg scale-105"
                      : "text-white/40 cursor-default"
                  }`}
                >
                  {tab.key}
                </button>
              ))}
            </div>

            {/* Stacked content — each tab sits absolutely, fades in/out */}
            <div className="relative flex-1 z-10">
              {TAB_DATA.map((tab, idx) => (
                <div
                  key={tab.key}
                  className="absolute inset-0 flex flex-col gap-5 max-w-[500px]"
                  style={{
                    opacity: activeIndex === idx ? 1 : 0,
                    transform:
                      activeIndex === idx
                        ? "translateY(0px)"
                        : activeIndex > idx
                          ? "translateY(-40px)"
                          : "translateY(40px)",
                    transition:
                      "opacity 0.6s ease, transform 0.6s cubic-bezier(0.25,1,0.5,1)",
                    pointerEvents: activeIndex === idx ? "auto" : "none",
                  }}
                >
                  <h2 className="text-white font-black text-6xl xl:text-7xl uppercase tracking-tighter leading-[1.05] m-0">
                    {tab.title}
                  </h2>
                  <h4 className="text-[var(--secondary)] font-extrabold text-[17px] tracking-tight leading-snug m-0 uppercase">
                    {tab.tagline}
                  </h4>
                  <p className="text-white/75 text-[15px] leading-[1.8] font-serif m-0 mb-2">
                    {tab.desc}
                  </p>
                  <div>
                    <ButtonLetterRoll
                      text={tab.btnText}
                      href={
                        idx === 0
                          ? "/templates/template-9/team"
                          : "/templates/template-9/initiatives"
                      }
                      bgColor="var(--primary)"
                      textColor="#ffffff"
                      borderColor="var(--primary)"
                      hoverBgColor="var(--secondary)"
                      hoverTextColor="#2b1f18"
                      hoverBorderColor="var(--secondary)"
                      hoverSecondaryLetterColor="#2b1f18"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ── Bottom bar: dots + scroll hint + counter ──────────── */}
            <div className="absolute bottom-10 left-20 right-20 flex items-center justify-between z-10">
              {/* Progress dots */}
              <div className="flex items-center gap-3">
                {TAB_DATA.map((_, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-full transition-all duration-500"
                    style={{
                      width: activeIndex === idx ? "40px" : "8px",
                      height: "8px",
                      background:
                        activeIndex > idx
                          ? "rgba(255,255,255,0.6)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  >
                    {activeIndex === idx && (
                      <div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{
                          width: `${tabProgress * 100}%`,
                          background: "var(--secondary)",
                          transition: "width 0.1s linear",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Scroll hint */}
              <div
                className="flex items-center gap-2 transition-opacity duration-500"
                style={{ opacity: showScrollHint ? 1 : 0 }}
              >
                <span className="text-white/60 text-[12px] uppercase tracking-widest font-black">
                  Scroll to explore
                </span>
                <svg
                  className="animate-bounce"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>

              {/* Tab counter */}
              <span className="text-white/50 font-black text-sm tracking-widest">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(TAB_DATA.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN — image filmstrip ──────────────────────── */}
          <div className="w-1/2 relative h-full bg-[#1e1611] overflow-hidden">
            {/* Vertically-stacked images, slides up to reveal next */}
            <div
              className="w-full flex flex-col"
              style={{
                height: `${TAB_DATA.length * 100}%`,
                transform: `translateY(-${(activeIndex / TAB_DATA.length) * 100}%)`,
                transition: "transform 0.7s cubic-bezier(0.25,1,0.5,1)",
              }}
            >
              {TAB_DATA.map((tab) => (
                <div
                  key={tab.key}
                  className="relative shrink-0"
                  style={{ height: `${100 / TAB_DATA.length}%` }}
                >
                  <Image
                    src={tab.img}
                    alt={tab.title}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-90"
                    priority
                  />
                  {/* Subtle tinted overlay per tab */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `${tab.accent}18` }}
                  />
                </div>
              ))}
            </div>

            {/* Vertical "Programs" label on the right edge */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10 pointer-events-none">
              <span
                className="text-white/40 font-black text-[12px] uppercase tracking-[0.4em]"
                style={{ writingMode: "vertical-rl" }}
              >
                Programs
              </span>
            </div>

            {/* Bottom progress bar across the image */}
            <div
              className="absolute bottom-0 left-0 h-[3px] z-10"
              style={{
                width: `${((activeIndex + tabProgress) / TAB_DATA.length) * 100}%`,
                background:
                  "linear-gradient(90deg, var(--primary), var(--secondary))",
                transition: "width 0.1s linear",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
