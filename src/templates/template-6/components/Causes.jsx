"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CauseCard from "./CauseCard";
import { FiHeart } from "react-icons/fi";
import ButtonLetterRoll from "./ButtonLetterRoll";

const causes = [
  {
    id: 1,
    title: "Urge Policymakers To Support Children",
    tag: "KIDS PROTECTION",
    raised: "$3,000",
    goal: "$6,000",
    percent: 55,
    desc: "Your support enables children to live safe, healthy lives free from neglect and exploitation.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Invest In Children And Their Futures",
    tag: "EDUCATION SUPPORT",
    raised: "$16,000",
    goal: "$20,000",
    percent: 85,
    desc: "Education is the single most powerful tool we have to change the world for our children.",
    img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Water For South Sudan Help Children",
    tag: "WATER INFRASTRUCTURE",
    raised: "$8,000",
    goal: "$12,000",
    percent: 75,
    desc: "There are many variations of passages of Lorem ipsum, but the majority have.",
    img: "https://images.unsplash.com/photo-1594708767771-a5e9d3012f0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Your Generosity Means Joseph Can Be A Kid",
    tag: "CHILDREN CARE",
    raised: "$8,000",
    goal: "$10,000",
    percent: 85,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque.",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "When Children Are Fed, So Are Their Dreams",
    tag: "FOOD SECURITY",
    raised: "$15,000",
    goal: "$13,000",
    percent: 90,
    desc: "Workflow ecosystem we're ahead of the curve on that one, yet re-inventing the wheel.",
    img: "https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Convoy Volunteers Serve Survivors Of Disasters",
    tag: "EMERGENCY RELIEF",
    raised: "$4,000",
    goal: "$8,000",
    percent: 50,
    desc: "Product market fit. I have zero cycles for this, products need full resourcing.",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=900&q=80",
  },
];

const GAP = 24;
const AUTO_MS = 3500;

export default function Causes({ isAllCausesPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  /* ─── measure ─────────────────────────────────────────── */
  useEffect(() => {
    const measure = () => {
      let visible = 1;
      if (window.innerWidth >= 1100) visible = 4;
      else if (window.innerWidth >= 780) visible = 3;
      else if (window.innerWidth >= 520) visible = 2;

      setVisibleCount(visible);

      if (trackRef.current) {
        const totalWidth = trackRef.current.offsetWidth;
        setCardWidth((totalWidth - GAP * (visible - 1)) / visible);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const maxIndex = Math.max(0, causes.length - visibleCount);

  /* ─── clamp index when visibleCount changes ───────────── */
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  /* ─── auto-advance ────────────────────────────────────── */
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_MS);
  };

  useEffect(() => {
    if (isAllCausesPage || causes.length <= visibleCount) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [maxIndex, isAllCausesPage, visibleCount]);

  const translateX = cardWidth ? -(currentIndex * (cardWidth + GAP)) : 0;

  const goTo = (i) => {
    setCurrentIndex(Math.max(0, Math.min(i, maxIndex)));
    startTimer(); // reset timer on manual nav
  };

  /* ─── render ──────────────────────────────────────────── */
  return (
    <section
      id="causes"
      className="relative overflow-hidden py-[100px] font-sans"
      style={{ background: "#FAF6FC" }}
    >
      {/* decorative circle pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="60" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
        <circle cx="80" cy="80" r="30" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
        <circle cx="95%" cy="15%" r="90" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
        <circle cx="95%" cy="15%" r="45" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
        <circle cx="10%" cy="85%" r="75" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
        <circle cx="95%" cy="88%" r="55" fill="none" stroke="#C9B8E8" strokeWidth="1.2" />
      </svg>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-5 text-center mb-14">
          <ButtonLetterRoll
            text="Donate Us"
            href="/templates/template-6/initiatives?tab=donate"
            bgColor="#ffffff"
            textColor="var(--primary)"
            borderColor="#D4C3F0"
            hoverBgColor="var(--primary)"
            hoverTextColor="#ffffff"
            hoverBorderColor="var(--primary)"
            leftIcon={<FiHeart size={14} />}
            showArrow={false}
          />

          <h2
            className="text-4xl sm:text-5xl md:text-[52px] font-black leading-tight tracking-tight max-w-[700px]"
            style={{ color: "#211823" }}
          >
            List Of Best Highly Rated Charities
          </h2>
        </div>

        {/* ── Carousel ── */}
        <div className="relative overflow-hidden" ref={trackRef}>
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {causes.map((cause, index) => (
              <div
                key={cause.id}
                className="flex-shrink-0"
                style={{ width: cardWidth ? `${cardWidth}px` : "100%" }}
              >
                <CauseCard course={cause} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot navigation ── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === currentIndex ? "24px" : "8px",
                background: i === currentIndex ? "var(--primary)" : "#D4C3F0",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* ── View All button ── */}
        {!isAllCausesPage && (
          <div className="text-center mt-12">
            <ButtonLetterRoll
              text="View All Campaigns"
              href="/templates/template-6/initiatives?tab=campaigns"
              bgColor="var(--primary)"
              textColor="#ffffff"
              borderColor="var(--primary)"
              hoverBgColor="var(--secondary)"
              hoverTextColor="#211823"
              hoverBorderColor="var(--secondary)"
            />
          </div>
        )}
      </div>
    </section>
  );
}
