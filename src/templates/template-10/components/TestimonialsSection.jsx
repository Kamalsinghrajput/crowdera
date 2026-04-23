import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import TestimonialCard from "./TestimonialCard";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const TESTIMONIALS = [
{
  name: "Jane Bryan",
  role: "Volunteer",
  avatar: "J",
  color: "#e8547a",
  quote: "We're curious, passionate, and committed to helping nonprofits learn and grow. Oh, and some of us are stage actors and worm farmers on the side."
},
{
  name: "Ann Peterson",
  role: "Volunteer",
  avatar: "A",
  color: "#e8547a",
  quote: "We're curious, passionate, and committed to helping nonprofits learn and grow. Oh, and some of us are stage actors and worm farmers on the side."
},
{
  name: "Tony Olson",
  role: "Program Director",
  avatar: "T",
  color: "#9b59b6",
  quote: "BigHearts gave us the platform to turn our vision into reality. We've reached more lives in one year than we did in five previously."
},
{
  name: "Sara Lin",
  role: "Donor & Advocate",
  avatar: "S",
  color: "#e67e22",
  quote: "Every dollar I donate here has a story behind it. The transparency and impact reports keep me motivated to give more."
},
{
  name: "Mike Johnson",
  role: "Campaign Manager",
  avatar: "M",
  color: "#3498db",
  quote: "This platform changed how we run campaigns. The tools are intuitive and the support team is incredible."
}];


const GAP = 24;
const AUTO_MS = 5000;

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const MAX_INDEX = Math.max(0, TESTIMONIALS.length - visibleCount);

  useEffect(() => {
    const measure = () => {
      const v = window.innerWidth < 768 ? 1 : 2;
      setVisibleCount(v);
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setCardWidth((w - GAP * (v - 1)) / v);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    if (index > MAX_INDEX) setIndex(MAX_INDEX);
  }, [MAX_INDEX, index]);

  const goNext = useCallback(() => setIndex((i) => i >= MAX_INDEX ? 0 : i + 1), [MAX_INDEX]);
  const goPrev = useCallback(() => setIndex((i) => i <= 0 ? MAX_INDEX : i - 1), [MAX_INDEX]);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardWidth ? -(index * (cardWidth + GAP)) : 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonials-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials"
    className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    style={{ background: "linear-gradient(135deg,#fdf4f6 0%,#fff 60%,#f8f0ff 100%)" }}>
      
      {/* Watermark rings */}
      <svg className="absolute left-8 top-12 w-32 opacity-[0.06] pointer-events-none animate-float-slow" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" stroke="#e8547a" strokeWidth="3" fill="none" />
        <circle cx="60" cy="60" r="35" stroke="#e8547a" strokeWidth="1.5" fill="none" />
      </svg>
      <svg className="absolute right-10 bottom-10 w-24 opacity-[0.06] pointer-events-none animate-float" viewBox="0 0 80 80">
        <path d="M40 72S8 54 8 34C8 21 14 12 24 15C32 17 37 23 40 30C43 23 48 17 56 15C66 12 72 21 72 34C72 54 40 72 40 72Z" fill="#9b59b6" />
      </svg>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Carousel Section */}
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
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform'
              }}>
              
              {TESTIMONIALS.map((t) =>
              <div
                key={t.name}
                style={{
                  width: cardWidth ? `${cardWidth}px` : `calc(${100 / visibleCount}% - ${GAP * (visibleCount - 1) / visibleCount}px)`,
                  flexShrink: 0
                }}>
                
                  <TestimonialCard
                  name={t.name}
                  role={t.role}
                  avatar={t.avatar}
                  color={t.color}
                  quote={t.quote} />
                
                </div>
              )}
            </div>

            {/* Carousel indicators */}
            <div className="flex gap-2 mt-8 justify-center">
              {Array.from({ length: MAX_INDEX + 1 }).map((_, i) =>
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '28px' : '10px',
                  height: '10px',
                  background: i === index ? '#e8547a' : 'rgba(232, 84, 122, 0.2)'
                }} />

              )}
            </div>
          </div>

          {/* Header Section */}
          <div className="testimonials-header">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-10 h-0.5 bg-t10-rose" />
              <span className="text-t10-rose font-extrabold text-xs uppercase tracking-[3px]">Testimonials</span>
              <span className="block w-10 h-0.5 bg-t10-rose" />
            </div>
            <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] mb-4 leading-tight">
              What People Say{" "}
              <span className="text-gray-800">About Our</span>{" "}
              <span className="block text-gray-800">Company</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-sm">
              Ultrices tincidunt arcu non sodales neque. Purus in volutpat consequat mauris nunc tellus rutrum.
            </p>
            <button className="border-2 border-gray-800 text-gray-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
              ALL TESTIMONIALS
            </button>
          </div>
        </div>
      </div>
    </section>);

}