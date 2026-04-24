import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ── Inline SVG logos ── */
const logos = [
  {
    name: "Lifeline Community Partners",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 34s-14-8.5-14-18A8 8 0 0 1 20 10a8 8 0 0 1 14 6c0 9.5-14 18-14 18z"
          fill="#F97316"
          opacity="0.15"
        />
        <path
          d="M20 32s-12-7.5-12-16A7 7 0 0 1 20 10a7 7 0 0 1 12 6c0 8.5-12 16-12 16z"
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
        />
        <path
          d="M14 20c2-3 4-4 6-2s4 4 6 0"
          stroke="#EC4899"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "WorldConnect Trust",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="18" r="10" fill="#0EA5E9" opacity="0.15" />
        <circle
          cx="20"
          cy="18"
          r="10"
          stroke="#0EA5E9"
          strokeWidth="2"
          fill="none"
        />
        <ellipse
          cx="20"
          cy="18"
          rx="4"
          ry="10"
          stroke="#0EA5E9"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="10"
          y1="18"
          x2="30"
          y2="18"
          stroke="#0EA5E9"
          strokeWidth="1.5"
        />
        <path
          d="M13 32 Q17 28 20 30 Q23 28 27 32"
          stroke="#00715D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "BetterWorld Collective",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6 A14 14 0 0 1 34 20 L20 20 Z" fill="#F59E0B" />
        <path d="M34 20 A14 14 0 0 1 20 34 L20 20 Z" fill="#6366F1" />
        <path d="M20 34 A14 14 0 0 1 6 20 L20 20 Z" fill="#10B981" />
        <path d="M6 20 A14 14 0 0 1 20 6 L20 20 Z" fill="#EC4899" />
        <circle cx="20" cy="20" r="5" fill="white" />
        <circle cx="20" cy="20" r="3" fill="#1e293b" />
      </svg>
    ),
  },
  {
    name: "HopeBridge Foundation",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 28 Q8 16 20 16 Q32 16 32 28"
          stroke="#F59E0B"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 28 Q12 20 20 20 Q28 20 28 28"
          stroke="#F97316"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="6"
          y1="28"
          x2="34"
          y2="28"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <line
          x1="14"
          y1="21"
          x2="14"
          y2="28"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <line
          x1="26"
          y1="21"
          x2="26"
          y2="28"
          stroke="#F59E0B"
          strokeWidth="2"
        />
        <circle cx="20" cy="11" r="4" fill="#FBBF24" />
      </svg>
    ),
  },
  {
    name: "GiveForward Fund",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="14" fill="#10B981" opacity="0.15" />
        <circle
          cx="20"
          cy="20"
          r="14"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 28 L20 14"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14 20 L20 14 L26 20"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M15 26 Q20 23 25 26"
          stroke="#059669"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Unity Relief Network",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="14" r="6" fill="#8B5CF6" opacity="0.2" />
        <circle
          cx="20"
          cy="14"
          r="6"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M10 34 C10 26 14 22 20 22 C26 22 30 26 30 34"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="18"
          r="4"
          stroke="#C4B5FD"
          strokeWidth="1.5"
          fill="none"
        />
        <circle
          cx="28"
          cy="18"
          r="4"
          stroke="#C4B5FD"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "EarthCare Alliance",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="13" fill="#00715D" opacity="0.1" />
        <circle
          cx="20"
          cy="20"
          r="13"
          stroke="#00715D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 7 Q24 12 22 18 Q18 22 20 28 Q16 22 18 16 Q16 10 20 7Z"
          fill="#00715D"
          opacity="0.7"
        />
        <path
          d="M13 13 Q18 15 16 20 Q14 16 13 13Z"
          fill="#34D399"
          opacity="0.8"
        />
        <path
          d="M27 13 Q22 15 24 20 Q26 16 27 13Z"
          fill="#34D399"
          opacity="0.8"
        />
      </svg>
    ),
  },
  {
    name: "Bright Futures Initiative",
    logo: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="15" r="7" fill="#FBBF24" opacity="0.3" />
        <circle
          cx="20"
          cy="15"
          r="7"
          stroke="#F59E0B"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="20"
          y1="5"
          x2="20"
          y2="2"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="28"
          y1="8"
          x2="30"
          y2="6"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="30"
          y1="15"
          x2="33"
          y2="15"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="8"
          x2="10"
          y2="6"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="15"
          x2="7"
          y2="15"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="13"
          y="27"
          width="14"
          height="9"
          rx="2"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <line
          x1="20"
          y1="27"
          x2="20"
          y2="36"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const GAP = 20;
const AUTO_MS = 2800;

export default function FeaturedIn() {
  const [idx, setIdx] = useState(0);
  const [itemW, setItemW] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const trackRef = useRef(null);
  const maxIdx = Math.max(0, logos.length - visibleCount);

  useEffect(() => {
    const measure = () => {
      let v = 5;
      if (window.innerWidth < 640) v = 2;
      else if (window.innerWidth < 1024) v = 3;
      setVisibleCount(v);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setItemW((w - GAP * (v - 1)) / v);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (idx > maxIdx) setIdx(maxIdx);
  }, [maxIdx, idx]);

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
    const t = setInterval(next, AUTO_MS);
    return () => clearInterval(t);
  }, [next, paused]);

  const translateX = itemW ? -(idx * (itemW + GAP)) : 0;

  return (
    <section
      className="py-16 bg-[#f7f7f7] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Heading */}
      <div className="container mx-auto px-4 max-w-7xl mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#091F1B] text-center">
          As Featured In
        </h2>
      </div>

      {/* Carousel — same container width as other sections */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div ref={trackRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
              willChange: "transform",
            }}
          >
            {logos.map((org, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3  rounded-2xl py-6 px-4"
                style={{
                  width: itemW
                    ? `${itemW}px`
                    : `calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
                  // border: '1.5px solid #e5e7eb',
                  // boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  minHeight: "120px",
                }}
              >
                {org.logo}
                <p className="text-xs font-semibold text-[#091F1B] text-center leading-tight">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="w-9 h-9 rounded-full border-2 border-brand-dark/20 hover:border-[#091F1B] flex items-center justify-center text-[#091F1B] hover:bg-[#091F1B] hover:text-white transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="w-9 h-9 rounded-full bg-[#091F1B] flex items-center justify-center text-white hover:bg-[var(--primary)] hover:text-[#091F1B] transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
