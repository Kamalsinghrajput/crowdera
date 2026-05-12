"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FiStar,
  FiFilm,
  FiGrid,
  FiTriangle,
  FiFeather,
  FiGlobe,
  FiActivity,
  FiShare2,
  FiSun,
  FiShield,
} from "react-icons/fi";

const PARTNERS = [
  { name: "Global", icon: <FiStar size={36} strokeWidth={1.5} /> },
  { name: "Travel", icon: <FiFilm size={36} strokeWidth={1.5} /> },
  { name: "Brand", icon: <FiGrid size={36} strokeWidth={1.5} /> },
  { name: "Planet", icon: <FiTriangle size={36} strokeWidth={1.5} /> },
  { name: "Nature", icon: <FiFeather size={36} strokeWidth={1.5} /> },
  { name: "Horizon", icon: <FiGlobe size={36} strokeWidth={1.5} /> },
  { name: "Apex", icon: <FiActivity size={36} strokeWidth={1.5} /> },
  { name: "Unity", icon: <FiShare2 size={36} strokeWidth={1.5} /> },
  { name: "Solaris", icon: <FiSun size={36} strokeWidth={1.5} /> },
  { name: "Vantage", icon: <FiShield size={36} strokeWidth={1.5} /> },
];

export default function Partners() {
  const trackRef = useRef(null);

  const doubled = [...PARTNERS, ...PARTNERS];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".partner-item");

      if (!items.length) return;

      const itemWidth = items[0].offsetWidth + 32;
      const totalItems = PARTNERS.length; // only original count

      const timeLine = gsap.timeline({
        repeat: -1,
      });

      for (let i = 0; i < totalItems; i++) {
        timeLine
          .to(trackRef.current, {
            x: `-=${itemWidth}`,
            duration: 0.8,
            ease: "power2.inOut",
          })
          .to(
            {},
            {
              duration: 1.5, // 👈 pause
            },
          );
      }

      timeLine.set(trackRef.current, { x: 0 });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-20 -mt-16 sm:-mt-24 pb-12 sm:pb-20 bg-transparent px-4">
      <div
        className="max-w-[1200px] mx-auto overflow-hidden bg-white shadow-[0_10px_60px_rgba(0,0,0,0.08)] rounded-2xl py-6 sm:py-8 border border-gray-100"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        <div className="flex w-full">
          <div ref={trackRef} className="flex will-change-transform">
            {doubled.map((p, i) => (
              <div
                key={i}
                className="partner-item w-[220px] flex-shrink-0 flex items-center justify-center gap-3 px-6 py-6 mx-4 cursor-pointer opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group/partner rounded-lg relative"
              >
                <div className="text-[#333333] transition-colors duration-300 group-hover/partner:text-[#ff5528]">
                  {p.icon}
                </div>

                <span className="font-['Montserrat'] font-extrabold text-[20px] text-[#333333] tracking-wide uppercase transition-colors duration-300 group-hover/partner:text-[#00b86b]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
