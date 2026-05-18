"use client";
import React, { useState, useEffect } from "react";
import {
  FiDroplet,
  FiShoppingBag,
  FiHeart,
  FiUserCheck,
  FiBookOpen,
  FiAlertTriangle,
} from "react-icons/fi";

const SERVICES = [
  {
    title: "CLEAN WATER ACCESS",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiDroplet size={56} strokeWidth={1} />,
  },
  {
    title: "FOOD SECURITY",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiShoppingBag size={56} strokeWidth={1} />,
  },
  {
    title: "HEALTHCARE OUTREACH",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiHeart size={56} strokeWidth={1} />,
  },
  {
    title: "ELDERLY CARE",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiUserCheck size={56} strokeWidth={1} />,
  },
  {
    title: "EDUCATIONAL SUPPORT",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiBookOpen size={56} strokeWidth={1} />,
  },
  {
    title: "EMERGENCY RELIEF",
    text: "Ensuring nutritious meals and food supplies reach those in need to build healthier communities.",
    icon: <FiAlertTriangle size={56} strokeWidth={1} />,
  },
];

export default function Services() {
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
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section id="services" className="bg-[var(--secondary-bg-color)] py-24">
      <div className="max-w-[1200px] mx-auto px-4 text-center overflow-hidden">
        {/* Section Header */}
        <div className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[13px] uppercase tracking-[1px] px-6 py-2 rounded-full mb-5">
          DO WHAT I LOVE
        </div>

        <h2 className="font-['Montserrat'] font-extrabold text-[clamp(32px,4vw,46px)] text-[var(--bg-color)] leading-tight mb-[60px] max-w-[800px] mx-auto">
          You can check out our work. Are you ready for a better, more
          productive Progress?
        </h2>

        {/* Carousel Slider */}
        <div className="w-full overflow-hidden px-2 pb-4 pt-2">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                style={{
                  width: `${100 / visibleCount}%`,
                  flexShrink: 0,
                  padding: "0 15px",
                }}
              >
                <div className="bg-white px-10 py-12 flex flex-col items-center text-center transition-all duration-300 border border-[#eeeeee] h-full group hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[5px]">
                  <div className="text-[var(--bg-color)] mb-[30px] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[var(--primary)] group-hover:[transform:rotateY(180deg)] [transform-style:preserve-3d]">
                    {service.icon}
                  </div>

                  <h3 className="font-['Montserrat'] font-extrabold text-[20px] text-[var(--bg-color)] uppercase mb-5 transition-colors duration-300 group-hover:text-[var(--primary)]">
                    {service.title}
                  </h3>

                  <p className="font-['Inter'] text-[17px] text-[#666666] leading-[1.8] m-0">
                    {service.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Single Global Read More Button */}
        <a
          href="#services"
          className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[14px] uppercase px-10 py-[18px] transition-colors duration-300 mt-[50px] hover:bg-[var(--secondary)]"
        >
          READ MORE
        </a>
      </div>
    </section>
  );
}
