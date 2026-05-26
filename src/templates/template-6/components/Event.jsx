"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";
import { MdLocationOn } from "react-icons/md";
import { FiStar } from "react-icons/fi";

const EVENTS = [
  {
    id: 1,
    title: "Women's Economic Justice Practice Engages",
    desc: "Ultimate measure of success you gotta smoke test your hypothesis, nor hire the best slow-walk our commitment. Lean into that problem. Tiger team ultimate.",
    location: "14200 Park Meadow Drive, Suite 330S",
  },
  {
    id: 2,
    title: "Provide Healthy Meals To A Child",
    desc: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec.",
    location: "14200 Park Meadow Drive, Suite 330S",
  },
  {
    id: 3,
    title: "Helping Before, During And After A Crisis",
    desc: "Tbrand terrorists keep it lean mumbo jumbo, but turn the ship, for accountable talk digitalize productize. Make it look like digital this is meaningless, or we have.",
    location: "14200 Park Meadow Drive, Suite 330S",
  },
  {
    id: 4,
    title: "Child Education & Community Outreach",
    desc: "Circle back on our core competencies, nor we need to think big picture, also table the discussion. Let's pressure test this and circle back organically.",
    location: "14200 Park Meadow Drive, Suite 330S",
  },
  {
    id: 5,
    title: "Clean Water Access for Rural Families",
    desc: "Move the needle gain traction, or we need to crystallize a plan, but cross-pollination touch base. Organic growth, and window of opportunity.",
    location: "14200 Park Meadow Drive, Suite 330S",
  },
];

// Pastel card backgrounds cycling per card
const CARD_BACKGROUNDS = ["#D6E9F8", "#EDE8E1", "#E8E3F3"];

const GAP = 24;
const AUTO_MS = 3500;

export default function Event({ isAllEventsPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  /* ─── Measure card widths on mount/resize ─── */
  useEffect(() => {
    const measure = () => {
      let visible = 1;
      if (window.innerWidth >= 1024) visible = 3;
      else if (window.innerWidth >= 640) visible = 2;

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

  const maxIndex = Math.max(0, EVENTS.length - visibleCount);

  /* ─── Clamp index when screen resizes ─── */
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  /* ─── Auto-advance timer ─── */
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_MS);
  };

  useEffect(() => {
    if (isAllEventsPage || EVENTS.length <= visibleCount) return;
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [maxIndex, isAllEventsPage, visibleCount]);

  const goTo = (i) => {
    setCurrentIndex(Math.max(0, Math.min(i, maxIndex)));
    startTimer();
  };

  const translateX = cardWidth ? -(currentIndex * (cardWidth + GAP)) : 0;

  return (
    <section className="bg-white py-20 px-6 font-sans">
      <div className="max-w-[1240px] mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* "Our Events" pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full border bg-white px-5 py-2.5 mb-5"
            style={{ borderColor: "#D4C3F0", color: "#6B3FA0" }}
          >
            <FiStar size={13} strokeWidth={2.5} />
            <span className="text-xs font-bold uppercase tracking-[0.15em]">
              Our Events
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-black leading-tight tracking-tight"
            style={{ color: "#211823" }}
          >
            Our Latest Upcoming Events
          </h2>
        </div>

        {/* ── Carousel track ── */}
        <div className="overflow-hidden" ref={trackRef}>
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
              willChange: "transform",
            }}
          >
            {EVENTS.map((event, idx) => (
              <div
                key={event.id}
                className="flex-shrink-0 relative rounded-[22px] p-7 flex flex-col gap-4 overflow-hidden"
                style={{
                  width: cardWidth ? `${cardWidth}px` : "100%",
                  background: CARD_BACKGROUNDS[idx % CARD_BACKGROUNDS.length],
                  minHeight: "290px",
                }}
              >
                {/* Decorative star watermark */}
                <span
                  className="absolute bottom-[-12px] right-[-8px] text-[110px] leading-none pointer-events-none select-none"
                  style={{ color: "#4a3060", opacity: 0.1 }}
                  aria-hidden="true"
                >
                  ✳
                </span>

                {/* Title */}
                <h3
                  className="font-black leading-snug text-[18px] relative z-10"
                  style={{ color: "#211823" }}
                >
                  {event.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] leading-relaxed flex-1 relative z-10"
                  style={{ color: "#5a5070" }}
                >
                  {event.desc}
                </p>

                {/* Location */}
                <div
                  className="flex items-center gap-1.5 text-[12px] font-semibold relative z-10"
                  style={{ color: "#4a3060" }}
                >
                  <MdLocationOn size={15} />
                  {event.location}
                </div>

                <ButtonLetterRoll
                  text="Event Details"
                  href="/templates/template-6/initiatives?tab=events"
                  bgColor="#ffffff"
                  textColor="#211823"
                  borderColor="transparent"
                  hoverBgColor="var(--primary)"
                  hoverTextColor="#ffffff"
                  hoverBorderColor="transparent"
                  className="self-start"
                  showArrow={false}
                />
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
        {!isAllEventsPage && (
          <div className="text-center mt-10">
            <ButtonLetterRoll
              text="View All Events"
              href="/templates/template-6/initiatives?tab=events"
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
