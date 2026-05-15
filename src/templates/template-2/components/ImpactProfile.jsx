"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function ImpactProfile() {


  const [count, setCount] = useState(0);
  const target = 10000;
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
    if (isVisible && isMounted) {
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
  }, [isVisible, isMounted]);

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          ref={sectionRef}
          className="relative rounded-[30px] overflow-hidden "
          style={{ background: "var(--bg-color)" }}
        >
          {/* World map watermark */}
          <img
            src="/assets/map.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

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
            <div className="flex justify-center">
              <Link
                href={`/templates/template-2/annual-report/${CURRENT_YEAR}`}
                className="inline-flex items-center gap-3 group text-[var(--secondary)] text-[16px] hover:text-white transition-colors duration-300"
              >
                <span className="flex items-center gap-3">
                  View Annual Report {CURRENT_YEAR}
                  <span className="w-10 h-10 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-[var(--bg-color)]">
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
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
