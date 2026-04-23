import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Trophy, Heart } from "lucide-react";

const donors = [
{
  img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  name: "Arjun Mehta",
  amount: 125000,
  rank: 1,
  badge: "🥇"
},
{
  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
  name: "Priya Sharma",
  amount: 98500,
  rank: 2,
  badge: "🥈"
},
{
  img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80",
  name: "Raj Kapoor",
  amount: 72000,
  rank: 3,
  badge: "🥉"
},
{
  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
  name: "Ananya Iyer",
  amount: 64000,
  rank: 4,
  badge: "⭐"
},
{
  img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
  name: "David Chen",
  amount: 55500,
  rank: 5,
  badge: "⭐"
},
{
  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  name: "Sarah Williams",
  amount: 47800,
  rank: 6,
  badge: "⭐"
}];


const GAP = 24;
const AUTO_MS = 3800;
const TOTAL = donors.length;

const rankGradients = {
  1: "linear-gradient(135deg, #f5d020, #f79b00)",
  2: "linear-gradient(135deg, #bdc3c7, #8e9eab)",
  3: "linear-gradient(135deg, #cd7f32, #a0522d)"
};

export default function TopDonorsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardW, setCardW] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isReady, setIsReady] = useState(false);

  // Measure card width based on viewport
  useEffect(() => {
    const measure = () => {
      let v = 4;
      if (window.innerWidth < 640) v = 1;else
      if (window.innerWidth < 768) v = 2;else
      if (window.innerWidth < 1024) v = 3;
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
    () => setIndex((i) => i >= MAX_IDX ? 0 : i + 1),
    [MAX_IDX]
  );
  const goPrev = useCallback(
    () => setIndex((i) => i <= 0 ? MAX_IDX : i - 1),
    [MAX_IDX]
  );

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardW ? -(index * (cardW + GAP)) : 0;

  // Mount reveal
  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsReady(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top-donors"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#fdf4f6 0%,#ffffff 50%,#f8f0ff 100%)" }}>
      
      {/* Decorative elements */}
      <svg
        className="absolute top-12 left-6 w-28 opacity-10 animate-float-slow pointer-events-none"
        viewBox="0 0 120 120">
        
        <circle cx="60" cy="60" r="55" stroke="#9b59b6" strokeWidth="3" fill="none" />
        <circle cx="60" cy="60" r="35" stroke="#9b59b6" strokeWidth="1.5" fill="none" />
      </svg>
      <svg
        className="absolute bottom-8 right-8 w-24 opacity-10 animate-float-delay pointer-events-none"
        viewBox="0 0 100 100">
        
        <path
          d="M50 90S10 68 10 42C10 26 18 15 30 18C40 21 46 29 50 37C54 29 60 21 70 18C82 15 90 26 90 42C90 68 50 90 50 90Z"
          fill="#e8547a" />
        
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ease-out ${
        isReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`
        }>
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-t10-rose" />
            <span className="inline-flex items-center gap-2 text-t10-rose font-extrabold text-xs uppercase tracking-[3px]">
              <Trophy size={14} /> Hall of Fame
            </span>
            <span className="block w-10 h-0.5 bg-t10-rose" />
          </div>
          <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] leading-tight mb-3">
            Our Top{" "}
            <span className="text-t10-rose">Donors</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            These generous hearts have made an extraordinary impact. Thank you for changing lives.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform"
            }}>
            
            {donors.map((d, i) =>
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center
                           shadow-md hover:shadow-xl hover:border-t10-rose/30 transition-all duration-300 group"

              style={{
                width: cardW ?
                `${cardW}px` :
                `calc(${100 / visibleCount}% - ${GAP * (visibleCount - 1) / visibleCount}px)`
              }}>
              
                {/* Avatar with rank badge */}
                <div className="relative mb-4">
                  <div
                  className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-offset-2 ring-offset-white
                               group-hover:scale-105 transition-transform duration-300"

                  style={{
                    "--tw-ring-color": d.rank <= 3 ? "#e8547a" : "rgba(155,89,182,0.25)"
                  }}>
                  
                    <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
                  </div>
                  {/* Rank badge */}
                  <div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold shadow-lg text-white"
                  style={{
                    background:
                    rankGradients[d.rank] || "linear-gradient(135deg, #9b59b6, #7C3682)"
                  }}>
                  
                    {d.rank <= 3 ? `#${d.rank}` : d.rank}
                  </div>
                </div>

                {/* Emoji badge */}
                <div className="text-2xl mb-2">{d.badge}</div>

                {/* Name */}
                <h4 className="text-gray-800 font-extrabold text-base mb-1 group-hover:text-t10-rose transition-colors">
                  {d.name}
                </h4>

                {/* Amount */}
                <div className="flex items-center gap-1.5 mt-2">
                  <Heart size={13} className="text-t10-rose" fill="currentColor" />
                  <span className="text-t10-rose font-black text-lg">
                    ₹{d.amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mt-1">Total donated</p>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_IDX + 1 }).map((_, i) =>
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "28px" : "10px",
                height: "10px",
                background: i === index ? "#e8547a" : "rgba(232, 84, 122, 0.2)"
              }} />

            )}
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border-2 border-gray-200 hover:border-t10-rose
                         flex items-center justify-center text-gray-400 hover:text-t10-rose transition-all">

              
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-gradient-to-r from-t10-rose to-t10-roseDark flex items-center justify-center
                         text-white hover:shadow-lg hover:shadow-t10-rose/30 transition-all">

              
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>);

}