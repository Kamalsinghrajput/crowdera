"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

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
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M60 80 C80 60 120 55 150 70 L200 65 C220 60 240 70 250 90 L260 120 C255 140 240 160 220 170 L200 190 C180 210 160 250 140 270 L120 300 C100 320 80 310 70 290 L55 260 C40 230 45 200 50 170 Z"
      />
      {/* Greenland */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M180 30 C200 20 230 25 245 45 L250 65 C245 80 225 85 205 75 L185 55 Z"
      />
      {/* South America */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M190 300 C210 290 240 295 255 315 L265 345 C270 375 260 410 245 440 L230 460 C210 475 190 465 180 445 L165 415 C150 380 155 340 170 315 Z"
      />
      {/* Europe */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M430 60 C450 50 480 55 495 75 L500 100 C495 120 475 130 455 125 L435 115 C415 105 410 85 430 60 Z"
      />
      {/* Africa */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M440 145 C465 135 495 140 510 165 L520 200 C530 240 525 290 510 330 L490 370 C470 400 445 405 425 385 L410 350 C395 310 395 265 405 225 L420 185 Z"
      />
      {/* Asia */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M510 55 C560 40 630 45 680 60 L740 70 C790 80 830 95 850 120 L865 150 C870 175 855 200 825 210 L780 220 C740 225 700 215 665 200 L620 185 C575 170 535 145 515 120 L505 90 Z"
      />
      {/* Australia */}
      <path
        opacity="0.1"
        fill="none"
        stroke="#fff"
        strokeWidth="1.2"
        d="M720 310 C750 295 800 300 830 325 L845 355 C850 385 835 415 810 425 L775 430 C745 432 720 415 710 390 L700 360 C698 335 710 318 720 310 Z"
      />
    </svg>
  );
}

export default function ImpactProfile() {
  const primaryColor = "#000000";

  const [count, setCount] = useState(0);
  const target = 10000;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * target));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isVisible]);

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          ref={sectionRef}
          className="relative rounded-[30px] overflow-hidden "
          style={{ background: primaryColor }}
        >
          {/* World map watermark */}
          <WorldMapBg />

          {/* Decorative orange circles from template-2 style */}
          <div className="absolute top-[-60px] right-[15%] w-[280px] h-[280px] rounded-full border border-t2-secondary/10 pointer-events-none" />
          <div className="absolute bottom-[-80px] left-[10%] w-[380px] h-[380px] rounded-full border border-t2-secondary/10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 py-[80px] text-center">
            {/* Top tagline */}
            <p className="tracking-[0.1em] text-white/70 text-[14px] mb-8 uppercase">
              To create a world where every life is valued, uplifted, and
              empowered without barriers.
            </p>

            {/* Big animated counter */}
            <div className="mb-4">
              <span className="text-[clamp(40px,8vw,100px)] leading-none text-[var(--secondary)]">
                {count.toLocaleString()}
              </span>
              <span className="ml-4 text-[clamp(24px,4vw,40px)] text-white">
                Individuals Reached
              </span>
            </div>

            {/* Description */}
            <p className="text-[16px] text-white/80 max-w-[700px] mx-auto mb-14 leading-[1.8]">
              To promote well-being and opportunity by creating awareness,
              providing support, and building positive, resilient communities
              worldwide.
            </p>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 text-left max-w-[900px] mx-auto">
              <div>
                <h3 className="text-[20px] mb-3 text-white">
                  Community Development
                </h3>
                <p className="text-white/70 text-[15px] leading-[1.7]">
                  Our foundation focuses on spreading awareness, offering direct
                  support, and encouraging individuals to lead balanced and
                  empowered lives through community-driven initiatives and
                  programs.
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-[20px] mb-3 text-white">
                  Geographic Presence
                </h3>
                <p className="text-white/70 text-[15px] leading-[1.7]">
                  Worldwide — active across Asia, Africa, and the Americas,
                  bringing hope and resources to those who need it most.
                </p>
              </div>
            </div>

            {/* View Annual Report button */}
            <Link href={`/templates/template-2/annual-report/${CURRENT_YEAR}`}>
              <a className="inline-flex items-center gap-3 group text-[var(--secondary)] text-[16px] hover:text-white transition-colors duration-300">
                View Annual Report {CURRENT_YEAR}
                <span className="w-10 h-10 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-t2-dark">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
