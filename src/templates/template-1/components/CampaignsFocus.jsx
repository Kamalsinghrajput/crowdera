import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const campaigns = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80",
    title: "Empowering children's futures, one voice at a time!",
    tag: "Children & Elderly",
    desc: "Safeguarding children's rights and creating a brighter future for every child in need.",
    raised: 540564,
    goal: 1000000,
  },
  {
    img: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=600&auto=format&fit=crop&q=80",
    title: "Supporting Joyful Minds Through Education",
    tag: "Education",
    desc: "Helping underprivileged children get quality education and building schools in rural areas.",
    raised: 357811,
    goal: 500000,
  },
  {
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80",
    title: "Volunteer Groups Making Real Impact",
    tag: "Community",
    desc: "Join our campaign to bring joy to children, women and the elderly across the globe.",
    raised: 232609,
    goal: 400000,
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80",
    title: "Clean Water For Every Village",
    tag: "Clean Water",
    desc: "Building wells and water purification systems to bring safe drinking water to communities.",
    raised: 185000,
    goal: 300000,
  },
  {
    img: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&auto=format&fit=crop&q=80",
    title: "Medical Aid For Remote Areas",
    tag: "Healthcare",
    desc: "Delivering free healthcare and medicine to underserved regions across the globe.",
    raised: 410000,
    goal: 700000,
  },
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop&q=80",
    title: "Food Security For Families In Crisis",
    tag: "Hunger Relief",
    desc: "Providing nutritious meals to families in need, ensuring no child goes to bed hungry.",
    raised: 290000,
    goal: 500000,
  },
];

const GAP = 24;
const AUTO_MS = 4000;
const TOTAL = campaigns.length;

const CampaignsFocus = () => {
  const primaryColor = "#223632";

  const sectionRef = useRef(null);
  const shapesRef = useRef(null);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    if (shapesRef.current) {
      gsap.to(shapesRef.current.children, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-10, 10)",
        scale: "random(0.9, 1.15)",
        duration: "random(2.5, 4.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".campaign-card-item",
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.15,
                ease: "power2.out",
              },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const measure = () => {
      let v = 4;
      if (window.innerWidth < 640) v = 1;
      else if (window.innerWidth < 768) v = 2;
      else if (window.innerWidth < 1024) v = 3;
      setVisibleCount(v);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setCardWidth((w - GAP * (v - 1)) / v);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const MAX_INDEX = Math.max(0, TOTAL - visibleCount);

  useEffect(() => {
    if (index > MAX_INDEX) setIndex(MAX_INDEX);
  }, [MAX_INDEX, index]);

  const goNext = useCallback(
    () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1)),
    [MAX_INDEX],
  );
  const goPrev = useCallback(
    () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1)),
    [MAX_INDEX],
  );

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardWidth ? -(index * (cardWidth + GAP)) : 0;

  return (
    <section
      ref={sectionRef}
      id="campaigns"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        backgroundColor: primaryColor,
      }}
    >
      <style></style>
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-16 left-12 w-20 h-20 rounded-full border-4 border-brand-yellow/15" />
        <div className="absolute bottom-24 right-16 w-28 h-28 rounded-full border-2 border-brand-teal/10" />
        <div className="absolute top-1/3 right-10 w-10 h-10 rounded-lg bg-brand-yellow/10 rotate-45" />
        <div className="absolute bottom-1/3 left-20 w-6 h-6 rounded-full bg-brand-teal/15" />
        <div className="absolute bottom-20 left-1/4 hidden lg:block">
          <svg
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            opacity="0.12"
          >
            <path
              d="M40 70 C40 70, 10 45, 10 28 C10 15, 22 10, 30 14 C35 17, 38 22, 40 28 C42 22, 45 17, 50 14 C58 10, 70 15, 70 28 C70 45, 40 70, 40 70Z"
              fill="var(--secondary)"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Campaigns in{" "}
            <span
              className="text-[var(--secondary)]"
              style={{
                color: "var(--primary)",
              }}
            >
              Focus
            </span>
          </h2>
          <p className="text-white max-w-xl mx-auto">
            Every donation makes a difference. See how your contribution can
            change lives.
          </p>
        </div>

        <div
          ref={trackRef}
          className="overflow-hidden max-w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {campaigns.map((c, idx) => {
              const pct = Math.round((c.raised / c.goal) * 100);
              return (
                <div
                  key={idx}
                  className="campaign-card-item flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-xl transition-shadow group flex flex-col"
                  style={{
                    width: cardWidth
                      ? `${cardWidth}px`
                      : `calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
                  }}
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={c.img}
                      alt={c.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 z-10">
                      <h3 className="text-white font-extrabold text-sm leading-snug mb-1.5">
                        {c.title}
                      </h3>
                      <span className="bg-[var(--primary)] text-[#091F1B] text-[10px] font-bold py-0.5 px-2.5 rounded-full">
                        {c.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-gray-500 text-xs mb-4 flex-grow leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="flex justify-between text-xs font-bold text-[#091F1B] mb-1.5">
                      <span>
                        Raised:{" "}
                        <span className="text-[var(--secondary)]">
                          ₹{c.raised.toLocaleString("en-IN")}
                        </span>
                      </span>
                      <span>₹{c.goal.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5 mb-4 overflow-hidden">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-brand-yellow to-brand-teal"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <button className="w-full bg-[#091F1B] text-white font-bold py-2.5 rounded-full hover:bg-[var(--secondary)] transition-colors text-xs">
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "28px" : "10px",
                  height: "10px",
                  background: i === index ? "var(--primary)" : "#d1d5db",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border-2 border-[var(--primary)] hover:border-[#091F1B] flex items-center justify-center text-[#091F1B] hover:bg-[#091F1B] hover:text-white transition-all duration-200"
            >
              <ChevronLeft size={20} color="var(--primary)" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-[#091F1B] flex items-center justify-center text-white hover:bg-[var(--primary)] hover:text-[#091F1B] transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/templates/template-1/initiatives?tab=campaigns">
            <a
              className="inline-flex items-center text-[var(--secondary)] font-bold text-sm hover:text-[#091F1B] transition-colors group"
              style={{
                color: "var(--primary)",
                border: "1px solid var(--primary)",
                padding: "12px 24px",
                borderRadius: "12px",
              }}
            >
              See all campaigns{" "}
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignsFocus;
