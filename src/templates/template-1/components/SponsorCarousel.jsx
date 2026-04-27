import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sponsors = [
  {
    icon: (
      <>
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
      </>
    ),
    label: "TheBird",
  },
  {
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
    label: "Heart Care",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </>
    ),
    label: "CharityLife",
  },
  {
    icon: (
      <>
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    label: "Tree Life",
  },
  {
    icon: (
      <>
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </>
    ),
    label: "Lorem Ipsum",
  },
  {
    icon: (
      <>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </>
    ),
    label: "HomeAid",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
      </>
    ),
    label: "PeopleFirst",
  },
  {
    icon: (
      <>
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M12 2a4 4 0 0 1 4 4v6H8V6a4 4 0 0 1 4-4z" />
      </>
    ),
    label: "GlobalHope",
  },
];

const SPONSOR_GAP = 20;
const SPONSOR_INTERVAL = 2800;

export default function SponsorCarousel() {
  const [idx, setIdx] = useState(0);
  const [itemW, setItemW] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const trackRef = useRef(null);
  const maxIdx = Math.max(0, sponsors.length - visibleCount);

  useEffect(() => {
    const measure = () => {
      let v = 5;
      if (window.innerWidth < 640) v = 2;
      else if (window.innerWidth < 1024) v = 3;
      setVisibleCount(v);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setItemW((w - SPONSOR_GAP * (v - 1)) / v);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const next = useCallback(
    () => setIdx((i) => (i >= maxIdx ? 0 : i + 1)),
    [maxIdx],
  );
  const prev = useCallback(
    () => setIdx((i) => (i <= 0 ? maxIdx : i - 1)),
    [maxIdx],
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, SPONSOR_INTERVAL);
    return () => clearInterval(t);
  }, [next, paused]);

  const translateX = itemW ? -(idx * (itemW + SPONSOR_GAP)) : 0;

  return (
    <div
      className="bg-white py-10 relative z-20 border-b border-gray-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={trackRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${SPONSOR_GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
              willChange: "transform",
            }}
          >
            {sponsors.map((s, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl py-5 px-4 cursor-pointer group"
                style={{
                  width: itemW
                    ? `${itemW}px`
                    : `calc(${100 / visibleCount}% - ${(SPONSOR_GAP * (visibleCount - 1)) / visibleCount}px)`,
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  className="transition-all group-hover:stroke-brand-teal"
                >
                  {s.icon}
                </svg>
                <span className="font-extrabold text-[10px] uppercase tracking-[2.5px] text-gray-400 group-hover:text-brand-dark transition-colors text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={prev}
            aria-label="Previous sponsor"
            className="w-9 h-9 rounded-full border-2 border-gray-200 hover:border-[#091F1B] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#091F1B] transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next sponsor"
            className="w-9 h-9 rounded-full bg-[#091F1B] flex items-center justify-center text-white hover:bg-[var(--primary)] hover:text-[#091F1B] transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
