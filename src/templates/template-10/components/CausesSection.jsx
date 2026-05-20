import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const causes = [
  {
    id: 1,
    title: "The Opportunity to Help Shelter with Food",
    description:
      "Diam volutpat commodo sed egestas egestas fringilla phasellus.",
    badge: "ANIMALS",
    badgeColor: "bg-purple-600",
    raised: "$75,018",
    goal: "$20,000",
    toGo: "$55,018",
    progress: 100,
    illustration: (
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="300" height="200" fill="#E3F4FF" />
        <circle cx="80" cy="80" r="40" fill="#6366F1" opacity="0.3" />
        <circle cx="100" cy="100" r="35" fill="#6366F1" opacity="0.4" />
        <path
          d="M70 130 Q80 120 90 130"
          stroke="#6366F1"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="130"
          y="60"
          width="120"
          height="100"
          fill="#60A5FA"
          opacity="0.2"
          rx="5"
        />
        <text
          x="180"
          y="120"
          fontSize="40"
          fill="#6366F1"
          fontWeight="bold"
          textAnchor="middle"
        >
          ❤️
        </text>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Assistance in Purchasing Equipment for Schools",
    description:
      "Massa tempor nec feugiat nisl pretium fusce. Sagittis purus amet.",
    badge: "RECYCLING",
    badgeColor: "bg-red-600",
    raised: "$39,660",
    goal: "$40,000",
    toGo: "$340",
    progress: 99,
    illustration: (
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="300" height="200" fill="#FFFBEB" />
        <circle cx="150" cy="100" r="45" fill="#FBBF24" opacity="0.3" />
        <rect
          x="110"
          y="80"
          width="80"
          height="70"
          fill="#F59E0B"
          opacity="0.4"
          rx="3"
        />
        <text
          x="150"
          y="125"
          fontSize="50"
          fill="#D97706"
          fontWeight="bold"
          textAnchor="middle"
        >
          🎓
        </text>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Construction of Affordable Housing for Poor People",
    description:
      "Pretium nibh ipsum consequat nisl. Quam adipiscing vitae proin.",
    badge: "CHARITY",
    badgeColor: "bg-green-600",
    raised: "$9,833",
    goal: "$10,000",
    toGo: "$167",
    progress: 98,
    illustration: (
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="300" height="200" fill="#DCFCE7" />
        <rect
          x="100"
          y="70"
          width="100"
          height="90"
          fill="#86EFAC"
          opacity="0.4"
          rx="5"
        />
        <polygon points="150,40 180,70 120,70" fill="#22C55E" opacity="0.5" />
        <text
          x="150"
          y="120"
          fontSize="50"
          fill="#16A34A"
          fontWeight="bold"
          textAnchor="middle"
        >
          🏠
        </text>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Food Security Program",
    description:
      "Fighting hunger through nutrition programs and food distribution.",
    badge: "FOOD",
    badgeColor: "bg-yellow-600",
    raised: "$45,000",
    goal: "$60,000",
    toGo: "$15,000",
    progress: 75,
    illustration: (
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="300" height="200" fill="#FEF3C7" />
        <circle cx="120" cy="100" r="35" fill="#FCD34D" opacity="0.4" />
        <circle cx="170" cy="100" r="35" fill="#FCD34D" opacity="0.4" />
        <text
          x="150"
          y="120"
          fontSize="50"
          fill="#D97706"
          fontWeight="bold"
          textAnchor="middle"
        >
          🍽️
        </text>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Environmental Care Initiative",
    description: "Protecting forests and wildlife for a sustainable future.",
    badge: "ENVIRONMENT",
    badgeColor: "bg-teal-600",
    raised: "$25,500",
    goal: "$30,000",
    toGo: "$4,500",
    progress: 85,
    illustration: (
      <svg
        viewBox="0 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect width="300" height="200" fill="#CCFBF1" />
        <path
          d="M100 140 Q100 80 120 60 Q130 50 140 70 Q150 40 160 70 Q170 50 180 60 Q200 80 200 140"
          fill="#99F6E4"
          opacity="0.5"
        />
        <rect
          x="80"
          y="140"
          width="140"
          height="30"
          fill="#6EE7B7"
          opacity="0.4"
        />
        <text
          x="150"
          y="120"
          fontSize="50"
          fill="#14B8A6"
          fontWeight="bold"
          textAnchor="middle"
        >
          🌳
        </text>
      </svg>
    ),
  },
];

const GAP = 24;
const AUTO_MS = 4500;
const TOTAL = causes.length;

export default function CausesSection() {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const measure = () => {
      let v = 3;
      if (window.innerWidth < 640) v = 1;
      else if (window.innerWidth < 1024) v = 2;
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
      id="causes"
      className="relative overflow-hidden py-20"
      style={{
        minHeight: "600px",
        backgroundImage: "url('/assets/template-10-causes-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`}</style>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-[var(--primary)]" />
            <span className="text-[var(--primary)] font-extrabold tracking-widest uppercase text-xs">
              Features Causes
            </span>
            <span className="block w-10 h-0.5 bg-[var(--primary)]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-gray-800 mb-4 leading-tight">
            Support Our Futures Companies
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-500 text-[17px] leading-relaxed">
            Sed libero enim sed faucibus turpis in eu. Bibendum at varius vel
            pharetra vel turpis nunc eget fringilla ut morbi. Turpis egestas sed
            tempus urna et pharetra.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="overflow-hidden w-full max-w-6xl"
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
            {causes.map((cause, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  width: cardWidth
                    ? `${cardWidth}px`
                    : `calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
                }}
              >
                {/* Illustration at top */}
                <div className="w-full h-40 relative">{cause.illustration}</div>

                {/* Card content */}
                <div className="p-5">
                  {/* Badge */}
                  <div
                    className={`inline-block ${cause.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}
                  >
                    {cause.badge}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-800 mb-2 line-clamp-2">
                    {cause.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {cause.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-pink-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${cause.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Funding details */}
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Goal:</span>
                      <span className="font-bold text-gray-800">
                        {cause.goal}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Raised:</span>
                      <span className="font-bold text-pink-600">
                        {cause.raised}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">To Go:</span>
                      <span className="font-bold text-pink-600">
                        {cause.toGo}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-10 w-full max-w-6xl">
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

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
                  background: i === index ? "#D02367" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            aria-label="Next"
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
