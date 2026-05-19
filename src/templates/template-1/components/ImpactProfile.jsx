import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CURRENT_YEAR = new Date().getFullYear();



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
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
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
          <img
            src="/assets/map.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
          />

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
            <div className="flex justify-center">
              <Link href={`/templates/template-1/annual-report/${CURRENT_YEAR}`}>
                <a className="inline-flex items-center gap-2 bg-white text-[#E8961A] font-bold text-[17px] px-8 py-4 rounded-md hover:opacity-90 transition-opacity">
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
