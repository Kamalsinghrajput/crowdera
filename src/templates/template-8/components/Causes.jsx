"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiHeart } from "react-icons/fi";
import CauseCard from "./CauseCard";

const causes = [
  {
    id: 1,
    title: "Children we work with",
    tag: "Health",
    raised: "$8500",
    goal: "$1,0000",
    percent: 85,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Help For Education",
    tag: "Food",
    raised: "$8500",
    goal: "$1,0000",
    percent: 90,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Help For Food",
    tag: "Health",
    raised: "$8500",
    goal: "$1,0000",
    percent: 75,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Clean Water access",
    tag: "Water",
    raised: "$6200",
    goal: "$8,000",
    percent: 60,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Medical Support for Communities.",
    tag: "Treatment",
    raised: "$38000",
    goal: "$60,000",
    percent: 60,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Ending Hunger One Meal at a Time.",
    tag: "Nutrition",
    raised: "$41000",
    goal: "$60,000",
    percent: 69,
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "Food Distribution Drives.",
    tag: "Nutrition",
    raised: "$22000",
    goal: "$40,000",
    percent: 50,
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
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
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex, isAllCausesPage, visibleCount]);

  return (
    <section id="causes" className="bg-[#f4f6f5] py-[120px] font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <span className="text-[#007b5e] font-bold text-[17px] mb-3 block">
            Supporting Our Cause Together
          </span>
          <h2 className="font-extrabold text-[clamp(32px,4vw,46px)] text-black leading-[1.2] max-w-[700px] mx-auto m-0 mb-4">
            Support Our Mission And Make A Difference
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-[#007b5e] opacity-60"></div>
            <div className="text-[#007b5e] border border-[#007b5e] p-1.5 rounded-md opacity-80">
              <FiHeart size={20} />
            </div>
            <div className="w-12 h-[2px] bg-[#007b5e] opacity-60"></div>
          </div>
        </div>

        {/* ── Conditional Render: Grid vs Carousel ── */}
        {isAllCausesPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {causes.map((course) => (
              <CauseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="w-full overflow-hidden px-2 pb-10 pt-6 -mt-6">
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
          <div className="text-center mt-10">
            <Link href="/templates/template-8/causes">
              <a className="inline-block bg-[#d9a96e] text-black font-bold text-[17px] px-10 py-4 rounded-md transition-colors duration-300 hover:bg-[#c4965d] no-underline shadow-md">
                Explore All
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
