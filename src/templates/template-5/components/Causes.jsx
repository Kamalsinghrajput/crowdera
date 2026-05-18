"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CauseCard from "./CauseCard";

const causes = [
  {
    id: 1,
    title: "Well Construction And Purification Projects.",
    tag: "Education",
    raised: "50,000",
    goal: "65,000",
    percent: 75,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Digital Learning for Rural Students.",
    tag: "Education",
    raised: "30,000",
    goal: "40,000",
    percent: 70,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Medical Support for Communities.",
    tag: "Treatment",
    raised: "38,000",
    goal: "60,000",
    percent: 60,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Healthcare Camps & Awareness.",
    tag: "Health",
    raised: "20,000",
    goal: "35,000",
    percent: 55,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Clean Water for Communities.",
    tag: "Health",
    raised: "29,000",
    goal: "45,000",
    percent: 66,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Ending Hunger One Meal at a Time.",
    tag: "Nutrition",
    raised: "41,000",
    goal: "60,000",
    percent: 69,
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Food Distribution Drives.",
    tag: "Nutrition",
    raised: "22,000",
    goal: "40,000",
    percent: 50,
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Causes({ isAllCausesPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, causes.length - visibleCount);

  useEffect(() => {
    if (isAllCausesPage) return; // No auto-slide on all causes page grid
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex, isAllCausesPage]);

  return (
    <section id="causes" className="bg-[var(--secondary-bg-color)] py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--secondary)] text-white font-['Montserrat'] font-bold text-[13px] uppercase tracking-[1px] px-6 py-2 rounded-full mb-5">
            OUR CAUSES
          </div>
          <h2 className="font-['Montserrat'] font-extrabold text-[clamp(32px,4vw,46px)] text-[var(--bg-color)] leading-tight max-w-[800px] mx-auto m-0">
            You can check out our work. Are you ready for a better, Our Active
            Campaigns.
          </h2>
        </div>

        {/* ── Conditional Render: Grid vs Carousel ── */}
        {isAllCausesPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((course) => (
              <CauseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="w-full overflow-hidden px-2 pb-4 pt-2">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {causes.map((course, idx) => (
                <div
                  key={idx}
                  style={{
                    width: `${100 / visibleCount}%`,
                    flexShrink: 0,
                    padding: "0 15px",
                  }}
                >
                  <CauseCard course={course} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── View All Causes Button ── */}
        {!isAllCausesPage && (
          <div className="text-center mt-12">
            <Link href="/templates/template-5/initiatives?tab=campaigns">
              <a className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[14px] uppercase px-10 py-[18px] transition-colors duration-300 hover:bg-[var(--secondary)] no-underline rounded-full shadow-lg">
                VIEW ALL CAUSES
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
