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
    <section className="py-20 bg-[#f7f7f7] border-t border-[#eeeeee]">
      <div
        className="max-w-[1200px] mx-auto overflow-hidden"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        <div className="flex w-full">
          <div ref={trackRef} className="flex will-change-transform">
            {doubled.map((p, i) => (
              <div
                key={i}
                className="partner-item w-[220px] flex-shrink-0 flex items-center justify-center gap-3 px-6 py-6 mx-4 cursor-pointer opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group/partner overflow-hidden rounded-lg relative"
              >
                {/* Background Hover Fill */}
                <div className="absolute inset-0 bg-[#00b86b] origin-bottom scale-y-0 group-hover/partner:scale-y-100 transition-transform duration-500 ease-in-out -z-10" />

                <div className="text-[#121d18] transition-colors duration-500 group-hover/partner:text-white z-10">
                  {p.icon}
                </div>

                <span className="font-['Montserrat'] font-extrabold text-[20px] text-[#121d18] tracking-wide uppercase transition-colors duration-500 group-hover/partner:text-white z-10">
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
