"use client";
import { useState, useEffect, useRef, useCallback } from "react";


const DONORS = [
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    name: "Arjun Mehta",
    amount: 125000,
    rank: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    name: "Priya Sharma",
    amount: 98500,
    rank: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
    name: "Raj Kapoor",
    amount: 72000,
    rank: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    name: "Ananya Iyer",
    amount: 64000,
    rank: 4,
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    name: "David Chen",
    amount: 55500,
    rank: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    name: "Sarah Williams",
    amount: 47800,
    rank: 6,
  },
];

const GAP = 30;
const AUTO_MS = 3800;

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

  const MAX_IDX = Math.max(0, DONORS.length - visibleCount);

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
      className="py-[120px]"
      style={{ background: "var(--t2-darkTeal)" }}
    >
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-t2-secondary" />
            <span className="text-[16px] text-white italic">Hall of Fame</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,56px)] leading-[1.2] text-white m-0">
            Our Top Donors
          </h2>
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
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {DONORS.map((d, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 group shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
                style={{
                  width: cardW
                    ? `${cardW}px`
                    : `calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
                }}
              >
                {/* Avatar with rank badge */}
                <div className="relative mb-6">
                  <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  {/* Rank badge */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[14px]  shadow-lg ${d.rank <= 3 ? "bg-t2-secondary text-white" : "bg-t2-dark text-white"}`}
                  >
                    #{d.rank}
                  </div>
                </div>

                {/* Name */}
                <h4 className="text-[20px] text-t2-dark mb-2 group-hover:text-t2-secondary transition-colors">
                  {d.name}
                </h4>

                {/* Amount */}
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-[22px] text-t2-secondary">
                    ${d.amount.toLocaleString("en-US")}
                  </span>
                </div>
                <p className="text-[14px] text-t2-gray mt-2">Total Donated</p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-[50px]">
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_IDX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "24px" : "10px",
                  height: "10px",
                  background: i === index ? "var(--t2-secondary)" : "#DDE3E3",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className="w-[50px] h-[50px] rounded-full border border-[#DDE3E3] flex items-center justify-center text-white hover:border-t2-secondary hover:bg-t2-secondary hover:text-white transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="w-[50px] h-[50px] rounded-full border border-[#DDE3E3] flex items-center justify-center text-white hover:border-t2-secondary hover:bg-t2-secondary hover:text-white transition-all duration-300"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
