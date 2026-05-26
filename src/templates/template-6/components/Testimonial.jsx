"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const TESTIMONIALS = [
  {
    text: "I realized she was just office pretty the right info at the right time to the right people prioritize these line items. Bob called an all-hands this afternoon. Turn the crank strategic fit, for locked and loaded. But what's the real problem we're trying to solve here.",
    name: "Kevin Martin",
    role: "Manager, Employee Giving Group Of Companies",
  },
  {
    text: "Your organization has always had a pleasant feel to it. Each gift helps us make a difference in the lives of people in need. We even received a major gift through your services. Thank you!",
    name: "Janie Hamilton",
    role: "CEO - Helping Hands",
  },
  {
    text: "The level of commitment here is nothing short of extraordinary. I've had the privilege of volunteering with them and I'm continually inspired by their direct actions and passion.",
    name: "Leslie Alexander",
    role: "Community Director",
  },
  {
    text: "Their dedication to the community and transparent communication made the entire process so easy and trustworthy. Absolutely fantastic work and a team worth supporting!",
    name: "Jonathan Doe",
    role: "Charity Partner",
  },
];

const AUTO_MS = 6000;

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const t = TESTIMONIALS[currentIndex];

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setVisible(false);

    setTimeout(() => {
      setCurrentIndex((idx + TESTIMONIALS.length) % TESTIMONIALS.length);
      setVisible(true);
      setTimeout(() => setAnimating(false), 400);
    }, 300);

    resetTimer();
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        setVisible(true);
      }, 300);
    }, AUTO_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section
      className="w-full font-sans py-24 px-6 overflow-hidden flex flex-col items-center justify-center relative border-t border-gray-100"
      style={{
        background: "linear-gradient(180deg, #FAF6FC 0%, #FFFFFF 100%)",
        minHeight: "520px",
      }}
    >
      <div className="max-w-[860px] mx-auto flex flex-col items-center text-center z-10">
        {/* Centered Pill Badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 mb-6"
          style={{
            borderColor: "#E7DCE9",
            color: "var(--primary)",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            background: "#ffffff",
          }}
        >
          <FiStar size={12} className="text-[var(--primary)]" />
          Testimonials
        </div>

        {/* Centered Header */}
        <h2
          className="font-black leading-tight tracking-tight mb-12 text-[#211823]"
          style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontFamily: "'Sora', sans-serif",
          }}
        >
          Reviews From Our Happy Supporters
        </h2>

        {/* Testimonial Quote Card Container */}
        <div
          className="w-full bg-white rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(123,93,134,0.06)] border border-[#E7DCE9]/50 relative"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(15px)",
            transition: "opacity 0.35s cubic-bezier(0.25, 1, 0.5, 1), transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
          }}
        >
          {/* Quote Icon Background decoration */}
          <div className="absolute top-6 left-8 text-[120px] font-serif leading-none text-[#7B5D86]/5 select-none pointer-events-none">
            “
          </div>

          {/* Centered Stars */}
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} color="#FBBF24" size={20} />
            ))}
          </div>

          {/* Testimonial Quote Text */}
          <p
            className="text-gray-600 font-medium mb-8 leading-relaxed text-center"
            style={{
              fontSize: "clamp(16px, 1.8vw, 20px)",
              fontFamily: "'Sora', sans-serif",
              color: "#4A3F4C",
            }}
          >
            {t.text}
          </p>

          {/* Reviewer Details */}
          <div className="flex flex-col items-center">
            <h4 className="font-extrabold text-lg text-[#211823] tracking-tight mb-1">
              {t.name}
            </h4>
            <span className="text-[13px] font-bold text-[#7B5D86] tracking-wider uppercase">
              {t.role}
            </span>
          </div>
        </div>

        {/* Centered Dot navigation */}
        <div className="flex gap-3 mt-12 justify-center">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="focus:outline-none transition-all duration-300"
              style={{
                height: 10,
                width: i === currentIndex ? 32 : 10,
                borderRadius: "5px",
                background: i === currentIndex ? "var(--primary)" : "#E7DCE9",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
