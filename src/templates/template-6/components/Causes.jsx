"use client";
import React, { useState, useEffect } from "react";
import CauseCard from "./CauseCard";
import ButtonLetterRoll from "./ButtonLetterRoll";

const causes = [
  {
    id: 1,
    title: "Child Protection & Orphan Support",
    tag: "YOUTH DEVELOPMENT",
    raised: "$8,450.00",
    goal: "$60,000.00",
    percent: 14,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    duration: "4 years to go",
  },
  {
    id: 2,
    title: "Women Empowerment Initiative",
    tag: "FOOD & NUTRITION PROGRAMS",
    raised: "$12,600.00",
    goal: "$50,000.00",
    percent: 25,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    duration: "5 years to go",
  },
  {
    id: 3,
    title: "Community Development Program",
    tag: "COMMUNITY SUPPORT PROGRAMS",
    raised: "$710.00",
    goal: "$40,000.00",
    percent: 2,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    duration: "5 years to go",
  },
];

export default function Causes({ isAllCausesPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, causes.length - visibleCount);

  useEffect(() => {
    if (isAllCausesPage || causes.length <= visibleCount) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [maxIndex, isAllCausesPage, visibleCount]);

  return (
    <section id="causes" className="bg-[#F9F5EC] py-[120px] font-sans relative overflow-hidden">
      
      {/* Very Light Ghost Watermark Text */}
      <div className="absolute top-[80px] left-0 right-0 text-center pointer-events-none select-none z-0">
        <span className="text-[12vw] font-black text-[#2b1f18]/[0.03] tracking-[1.5rem] uppercase block leading-none">
          DONATIONS
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* ── Section Header ── */}
        <div className="text-center mb-16 relative">
          <span
            className="text-[var(--secondary)] text-3xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Take action now
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0">
            POPULAR CAMPAIGN
          </h2>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {causes.map((course, index) => (
            <CauseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* ── View All Causes Button ── */}
        {!isAllCausesPage && (
          <div className="text-center mt-16 animate-fade-in">
            <ButtonLetterRoll
              text="View All Campaigns"
              href="/templates/template-6/initiatives?tab=campaigns"
            />
          </div>
        )}
      </div>
    </section>
  );
}
