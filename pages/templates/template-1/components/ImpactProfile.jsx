import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();

/* ── World map outline as a subtle SVG watermark ── */
function WorldMapBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* North America */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M60 80 C80 60 120 55 150 70 L200 65 C220 60 240 70 250 90 L260 120 C255 140 240 160 220 170 L200 190 C180 210 160 250 140 270 L120 300 C100 320 80 310 70 290 L55 260 C40 230 45 200 50 170 Z"
      />
      {/* Greenland */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M180 30 C200 20 230 25 245 45 L250 65 C245 80 225 85 205 75 L185 55 Z"
      />
      {/* South America */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M190 300 C210 290 240 295 255 315 L265 345 C270 375 260 410 245 440 L230 460 C210 475 190 465 180 445 L165 415 C150 380 155 340 170 315 Z"
      />
      {/* Europe */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M430 60 C450 50 480 55 495 75 L500 100 C495 120 475 130 455 125 L435 115 C415 105 410 85 430 60 Z"
      />
      {/* Africa */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M440 145 C465 135 495 140 510 165 L520 200 C530 240 525 290 510 330 L490 370 C470 400 445 405 425 385 L410 350 C395 310 395 265 405 225 L420 185 Z"
      />
      {/* Asia */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M510 55 C560 40 630 45 680 60 L740 70 C790 80 830 95 850 120 L865 150 C870 175 855 200 825 210 L780 220 C740 225 700 215 665 200 L620 185 C575 170 535 145 515 120 L505 90 Z"
      />
      {/* Australia */}
      <path
        opacity="0.18"
        fill="none"
        stroke="white"
        strokeWidth="1.2"
        d="M720 310 C750 295 800 300 830 325 L845 355 C850 385 835 415 810 425 L775 430 C745 432 720 415 710 390 L700 360 C698 335 710 318 720 310 Z"
      />
      {/* Latitude lines */}
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="0"
        y1="120"
        x2="1000"
        y2="120"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="0"
        y1="180"
        x2="1000"
        y2="180"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="0"
        y1="240"
        x2="1000"
        y2="240"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="0"
        y1="300"
        x2="1000"
        y2="300"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="0"
        y1="360"
        x2="1000"
        y2="360"
      />
      {/* Longitude lines */}
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="200"
        y1="0"
        x2="200"
        y2="500"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="400"
        y1="0"
        x2="400"
        y2="500"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="600"
        y1="0"
        x2="600"
        y2="500"
      />
      <line
        opacity="0.08"
        stroke="white"
        strokeWidth="0.8"
        x1="800"
        y1="0"
        x2="800"
        y2="500"
      />
    </svg>
  );
}

export default function ImpactProfile() {
  const sectionRef = useRef(null);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const TARGET = 10000;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate card entrance
          gsap.fromTo(
            sectionRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          );

          // Animate the big counter
          const obj = { val: 0 };
          gsap.to(obj, {
            val: TARGET,
            duration: 2.5,
            ease: "power2.out",
            onUpdate() {
              if (countRef.current) {
                countRef.current.textContent = Math.round(
                  obj.val,
                ).toLocaleString();
              }
            },
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-8">
        {/* ── The Card ── */}
        <div
          ref={sectionRef}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #F5A623 0%, #E8961A 100%)",
            opacity: 0,
          }}
        >
          {/* World map watermark */}
          <WorldMapBg />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-14 text-white text-center">
            {/* Top tagline */}
            <p className="uppercase tracking-[0.25em] text-white/70 text-xs font-semibold mb-8">
              To create a world where every life is valued, uplifted, and
              empowered without barriers.
            </p>

            {/* Big animated counter */}
            <div className="mb-2">
              <span className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-none">
                <span ref={countRef}>0</span>
                <span className="ml-2 text-2xl sm:text-4xl md:text-6xl">
                  Individuals
                </span>
              </span>
            </div>

            {/* Sub-label */}
            <p className="text-xl md:text-2xl font-bold text-white/90 mb-6">
              Reached
            </p>

            {/* Description */}
            <p className="text-white/80 max-w-xl mx-auto mb-14 leading-relaxed">
              To promote well-being and opportunity by creating awareness,
              providing support, and building positive, resilient communities
              worldwide.
            </p>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 text-left">
              <div>
                <h3 className="text-lg font-extrabold mb-2">
                  Community Development
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  Our foundation focuses on spreading awareness, offering direct
                  support, and encouraging individuals to lead balanced and
                  empowered lives through community-driven initiatives and
                  programs.
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-lg font-extrabold mb-2">
                  Geographic Presence
                </h3>
                <p className="text-white/75 text-sm">
                  Worldwide — active across Asia, Africa, and the Americas.
                </p>
              </div>
            </div>

            {/* View Annual Report button */}
            <Link href={`/templates/template-1/annual-report/${CURRENT_YEAR}`}>
              <a className="inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/60 pb-0.5 hover:border-white hover:gap-3 transition-all duration-200 text-base">
                View Annual Report {CURRENT_YEAR}
                <ArrowRight size={16} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
