"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();

export default function ImpactProfile() {
  const primaryColor = "var(--primary)";

  const [count, setCount] = useState(0);
  const target = 10000;
  const sectionRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
    <section className="py-[120px] bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        <div
          ref={sectionRef}
          className="relative rounded-[20px] overflow-hidden "
          style={{ background: primaryColor }}
        >
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover pointer-events-none opacity-[0.2]"
            style={{ backgroundImage: "url(/assets/map.svg)" }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-16 py-[80px] text-center">
            {/* Top tagline */}
            <p className="tracking-[0.1em] text-white/80 text-[15px] mb-8 uppercase font-bold">
              To create a world where every life is valued, uplifted, and
              empowered without barriers.
            </p>

            {/* Big animated counter */}
            <div className="mb-4">
              <span className="text-[clamp(40px,8vw,100px)] leading-none text-[var(--secondary)] font-bold">
                {count.toLocaleString()}
              </span>
              <span className="ml-4 text-[clamp(24px,4vw,40px)] text-white font-bold">
                Individuals Reached
              </span>
            </div>

            {/* Description */}
            <p className="text-[17px] text-white/90 max-w-[700px] mx-auto mb-14 leading-[1.8] font-medium">
              To promote well-being and opportunity by creating awareness,
              providing support, and building positive, resilient communities
              worldwide.
            </p>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 text-left max-w-[900px] mx-auto">
              <div>
                <h3 className="text-[20px] mb-3 text-white font-bold">
                  Community Development
                </h3>
                <p className="text-white/70 text-[17px] leading-[1.7] font-medium">
                  Our foundation focuses on spreading awareness, offering direct
                  support, and encouraging individuals to lead balanced and
                  empowered lives through community-driven initiatives and
                  programs.
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-[20px] mb-3 text-white font-bold">
                  Geographic Presence
                </h3>
                <p className="text-white/70 text-[17px] leading-[1.7] font-medium">
                  Worldwide — active across Asia, Africa, and the Americas,
                  bringing hope and resources to those who need it most.
                </p>
              </div>
            </div>

            {/* View Annual Report button */}
            <div className="flex justify-center">
              <Link
                href={`/templates/template-6/annual-report/${CURRENT_YEAR}`}
              >
                <a className="inline-block bg-[var(--secondary)] text-[#211823] font-bold text-[17px] px-8 py-4 rounded-md transition-colors hover:bg-[#c4965d] no-underline">
                  View Annual Report {CURRENT_YEAR}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
