import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Trophy, Heart } from "lucide-react";

const donors = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    name: "Arjun Mehta",
    amount: 125000,
    rank: 1,
    badge: "🥇",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    name: "Priya Sharma",
    amount: 98500,
    rank: 2,
    badge: "🥈",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
    name: "Raj Kapoor",
    amount: 72000,
    rank: 3,
    badge: "🥉",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    name: "Ananya Iyer",
    amount: 64000,
    rank: 4,
    badge: "⭐",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    name: "David Chen",
    amount: 55500,
    rank: 5,
    badge: "⭐",
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    name: "Sarah Williams",
    amount: 47800,
    rank: 6,
    badge: "⭐",
  },
];

const GAP = 24;
const AUTO_MS = 3800;
const TOTAL = donors.length;

const rankColors = {
  1: "linear-gradient(135deg, #f5d020, #f79b00)",
  2: "linear-gradient(135deg, #bdc3c7, #8e9eab)",
  3: "linear-gradient(135deg, #cd7f32, #a0522d)",
};

export default function TopDonors() {
  const [index, setIndex] = useState(0);
  const [cardW, setCardW] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const trackRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      let v = 4;
      if (window.innerWidth < 640) v = 1;
      else if (window.innerWidth < 768) v = 2;
      else if (window.innerWidth < 1024) v = 3;
      setVisibleCount(v);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setCardW((w - GAP * (v - 1)) / v);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const MAX_IDX = Math.max(0, TOTAL - visibleCount);

  useEffect(() => {
    if (index > MAX_IDX) setIndex(MAX_IDX);
  }, [MAX_IDX, index]);

  const goNext = useCallback(
    () => setIndex((i) => (i >= MAX_IDX ? 0 : i + 1)),
    [MAX_IDX],
  );
  const goPrev = useCallback(
    () => setIndex((i) => (i <= 0 ? MAX_IDX : i - 1)),
    [MAX_IDX],
  );

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardW ? -(index * (cardW + GAP)) : 0;

  return (
    <section
      id="top-donors"
      className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden"
    >
      {/* Decorative bg blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-brand-teal/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-yellow/8 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-brand-yellow font-bold tracking-wider uppercase text-sm mb-3">
            <Trophy size={16} /> Hall of Fame
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            Our Top <span className="text-brand-yellow">Donors</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            These generous hearts have made an extraordinary impact. Thank you
            for changing lives.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {donors.map((d, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white/5 hover:bg-white/10 border border-white/10
                           hover:border-brand-yellow/40 rounded-2xl p-6 flex flex-col items-center
                           text-center transition-all duration-300 group"
                style={{
                  width: cardW
                    ? `${cardW}px`
                    : `calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
                }}
              >
                {/* Avatar with rank badge */}
                <div className="relative mb-4">
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-brand-dark
                               group-hover:scale-105 transition-transform duration-300"
                    style={{
                      "--tw-ring-color":
                        d.rank <= 3 ? "#FFCA08" : "rgba(255,255,255,0.2)",
                    }}
                  >
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Rank badge */}
                  <div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center
                               text-sm font-extrabold shadow-lg"
                    style={{
                      background:
                        rankColors[d.rank] || "rgba(255,255,255,0.15)",
                    }}
                  >
                    {d.rank <= 3 ? `#${d.rank}` : d.rank}
                  </div>
                </div>

                {/* Emoji badge */}
                <div className="text-2xl mb-2">{d.badge}</div>

                {/* Name */}
                <h4 className="text-white font-extrabold text-base mb-1 group-hover:text-brand-yellow transition-colors">
                  {d.name}
                </h4>

                {/* Amount */}
                <div className="flex items-center gap-1.5 mt-2">
                  <Heart
                    size={13}
                    className="text-brand-yellow"
                    fill="currentColor"
                  />
                  <span className="text-brand-yellow font-black text-lg">
                    ₹{d.amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Total donated</p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_IDX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "28px" : "10px",
                  height: "10px",
                  background: i === index ? "#FFCA08" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border-2 border-white/20 hover:border-brand-yellow
                         flex items-center justify-center text-white hover:text-brand-yellow transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-brand-yellow flex items-center justify-center
                         text-brand-dark hover:brightness-110 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
