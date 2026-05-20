"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import {
  FiDroplet,
  FiShoppingBag,
  FiHeart,
  FiUserCheck,
  FiBookOpen,
  FiAlertTriangle,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const SERVICES = [
  {
    title: "Clean Water Access",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiDroplet size={38} strokeWidth={1.3} />,
  },
  {
    title: "Food Security",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiShoppingBag size={38} strokeWidth={1.3} />,
  },
  {
    title: "Healthcare Outreach",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiHeart size={38} strokeWidth={1.3} />,
  },
  {
    title: "Elderly Care",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiUserCheck size={38} strokeWidth={1.3} />,
  },
  {
    title: "Educational Support",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiBookOpen size={38} strokeWidth={1.3} />,
  },
  {
    title: "Emergency Relief",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiAlertTriangle size={38} strokeWidth={1.3} />,
  },
  {
    title: "Child Protection",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiShield size={38} strokeWidth={1.3} />,
  },
  {
    title: "Community Development",
    text: "Ensuring Nutritious Meals And Food Supplies Reach Those.",
    icon: <FiUsers size={38} strokeWidth={1.3} />,
  },
];

const TOTAL = SERVICES.length;
const GAP = 24; // gap between cards
const AUTO_MS = 4000;
const CARD_HOVER = "var(--primary)";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCardsCount, setVisibleCardsCount] = useState(4);
  const [dotCount, setDotCount] = useState(Math.max(1, TOTAL - 4 + 1));
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const overlayRefs = useRef([]);
  const isPausedRef = useRef(false);
  const activeRef = useRef(0);

  const measure = useCallback(() => {
    if (!viewportRef.current) return;
    const viewportWidth = viewportRef.current.offsetWidth;
    const currentViewsCount = viewportWidth < 640 ? 1 : viewportWidth < 850 ? 2 : viewportWidth < 1024 ? 3 : 4;
    setVisibleCardsCount(currentViewsCount);
    setDotCount(Math.max(1, TOTAL - currentViewsCount + 1));
    setCardWidth((viewportWidth - (currentViewsCount - 1) * GAP) / currentViewsCount);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const slideAmt = cardWidth + GAP;

  const moveTo = useCallback(
    (rawIndex) => {
      const targetIndex = Math.max(0, Math.min(rawIndex, dotCount - 1));
      activeRef.current = targetIndex;
      setActiveIndex(targetIndex);
      if (trackRef.current && slideAmt > 0) {
        gsap.to(trackRef.current, {
          x: -(targetIndex * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    },
    [slideAmt, dotCount],
  );

  useEffect(() => {
    const id = setInterval(() => {
      if (isPausedRef.current || slideAmt === 0) return;
      const next = activeRef.current >= dotCount - 1 ? 0 : activeRef.current + 1;
      activeRef.current = next;
      setActiveIndex(next);
      if (trackRef.current) {
        gsap.to(trackRef.current, {
          x: -(next * slideAmt),
          duration: 0.6,
          ease: "power3.inOut",
        });
      }
    }, AUTO_MS);
    return () => clearInterval(id);
  }, [slideAmt, dotCount]);

  const handleEnter = (index) => {
    isPausedRef.current = true;
    setHoveredIndex(index);
    if (overlayRefs.current[index])
      gsap.to(overlayRefs.current[index], {
        scaleY: 1,
        duration: 0.38,
        ease: "power3.out",
      });
  };
  
  const handleLeave = (index) => {
    isPausedRef.current = false;
    setHoveredIndex(null);
    if (overlayRefs.current[index])
      gsap.to(overlayRefs.current[index], {
        scaleY: 0,
        duration: 0.32,
        ease: "power3.inOut",
      });
  };

  return (
    <section id="services" className="py-[120px] bg-[#fafafa] font-sans overflow-hidden relative">
      {/* Centered Heading */}
      <div className="max-w-[1200px] mx-auto px-4 text-center mb-16 relative z-10">
        <span className="text-[var(--primary)] font-bold text-[15px] mb-4 block uppercase tracking-wider">
          Start Donating Poor People
        </span>
        <h2 className="text-[#1a2b28] text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.2] mb-6">
          Donate Support To Make Difference Way
        </h2>
        <p className="text-[#666] text-[17px] leading-[1.8] max-w-[700px] mx-auto">
          Charity is the voluntary act of giving help, typically in the form
          of money, time, or resources, to those in need. Charitable
          organizations aim to solve social, environmental, and economic
          challenges.
        </p>
      </div>

      {/* GSAP Slider Viewport */}
      <div className="max-w-[1320px] mx-auto px-4">
        <div
          ref={viewportRef}
          style={{ overflow: "hidden" }}
          className="pb-8 pt-4 px-2"
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${GAP}px`,
              width: cardWidth > 0 ? `${TOTAL * cardWidth + (TOTAL - 1) * GAP}px` : "100%",
            }}
          >
            {SERVICES.map((srv, index) => {
              const isHov = hoveredIndex === index;
              return (
                <div
                  key={index}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                  className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 relative text-center px-7 py-12 cursor-pointer flex-shrink-0 flex flex-col group hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:border-[var(--primary)]/30"
                  style={{
                    width: cardWidth > 0 ? `${cardWidth}px` : `${100 / visibleCardsCount}%`,
                  }}
                >
                  {/* Hover fill animation overlay */}
                  <div
                    ref={(el) => {
                      overlayRefs.current[index] = el;
                    }}
                    className="absolute inset-0 z-0 origin-bottom"
                    style={{
                      background: CARD_HOVER,
                      transform: "scaleY(0)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className="flex justify-center mb-6 transition-colors duration-300"
                      style={{ color: isHov ? "#fff" : "var(--primary)" }}
                    >
                      {srv.icon}
                    </div>
                    
                    <div
                      className="w-10 h-[2px] mx-auto mb-6 transition-colors duration-300 rounded-full"
                      style={{ background: isHov ? "rgba(255,255,255,0.4)" : "var(--secondary)" }}
                    />
                    
                    <h3
                      className="text-[20px] font-extrabold mb-4 leading-[1.3] transition-colors duration-300"
                      style={{ color: isHov ? "#fff" : "#1a2b28" }}
                    >
                      {srv.title}
                    </h3>
                    
                    <p
                      className="text-[14.5px] leading-[1.6] mb-8 transition-colors duration-300"
                      style={{ color: isHov ? "rgba(255,255,255,0.8)" : "#666" }}
                    >
                      {srv.text}
                    </p>
                    
                    <div
                      className="inline-flex items-center gap-2 font-bold text-[14px] transition-colors duration-300 uppercase tracking-wide"
                      style={{ color: isHov ? "#fff" : "var(--primary)" }}
                    >
                      <span className="w-5 h-[2px] bg-current rounded-full"></span>
                      Read More
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {Array.from({ length: dotCount }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => moveTo(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? "w-8 bg-[var(--primary)]"
                  : "w-3 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
