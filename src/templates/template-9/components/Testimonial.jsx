"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { gsap } from "gsap";

const TESTIMONIALS = [
  {
    text: "“Your organization has always had a pleasant feel to it. Each gift helps us make a difference in the lives of people in need. We even received a major gift through your services. Thank you!”",
    name: "Janie Hamilton",
    role: "CEO - Helping Hands",
    rating: "4.8/5",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
  },
  {
    text: "“The level of commitment here is nothing short of extraordinary. I've had the privilege of volunteering with them and I'm continually inspired by their direct actions.”",
    name: "Leslie Alexander",
    role: "Community Director",
    rating: "4.9/5",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    text: "“Their dedication to the community and transparent communication made the entire process so easy and trustworthy. Absolutely fantastic work!”",
    name: "Johnathan Doe",
    role: "Charity Partner",
    rating: "5.0/5",
    img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const contentRef = useRef(null);

  const changeSlide = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    gsap.to(contentRef.current, {
      opacity: 0,
      x: direction === 1 ? -40 : 40,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex((prev) => {
          let next = prev + direction;
          if (next < 0) next = TESTIMONIALS.length - 1;
          if (next >= TESTIMONIALS.length) next = 0;
          return next;
        });

        gsap.fromTo(
          contentRef.current,
          { opacity: 0, x: direction === 1 ? 40 : -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false),
          }
        );
      },
    });
  };

  useEffect(() => {
    if (isAnimating) return;
    const timer = setInterval(() => {
      changeSlide(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAnimating, currentIndex]);

  const t = TESTIMONIALS[currentIndex];

  return (
    <section className="bg-[#543F33] w-full h-auto lg:h-[650px] py-24 lg:py-0 font-sans relative overflow-hidden z-20 flex items-center">
      {/* Fixed single background photo — does not change with slides */}
      <div className="absolute left-0 top-0 bottom-0 w-[40%] opacity-20 pointer-events-none select-none z-0">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="grayscale brightness-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#543F33]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-4"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Testimonials
            </span>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] uppercase m-0 max-w-[400px]">
              WHAT PEOPLE ARE SAYING
            </h2>
          </div>

          {/* Right Column (7/12) */}
          <div className="lg:col-span-7 flex flex-col justify-center relative pl-0 lg:pl-10">
            {/* Slider Content Wrapper */}
            <div ref={contentRef} style={{ willChange: "transform, opacity" }}>
              {/* Quote Text */}
              <p className="text-white font-black text-3xl lg:text-4xl leading-[1.3] tracking-tight mb-10 min-h-[160px] lg:min-h-[180px]">
                {t.text}
              </p>

              {/* Author Row */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6">
                <div>
                  <h4 className="text-white text-xl font-black uppercase m-0 tracking-wide">
                    {t.name}
                  </h4>
                  <span className="text-white/60 text-sm font-medium mt-1 block">
                    {t.role}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[var(--secondary)]" size={14} />
                    ))}
                  </div>
                  <span className="text-white font-black text-sm">{t.rating}</span>
                </div>
              </div>
            </div>

            {/* Navigation buttons row inside right column */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={() => changeSlide(-1)}
                className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-[#543F33] flex items-center justify-center text-white transition-all shadow-md font-bold text-lg"
              >
                ←
              </button>
              <span className="text-white/60 font-black text-xs tracking-wider">
                {currentIndex + 1} / {TESTIMONIALS.length}
              </span>
              <button
                onClick={() => changeSlide(1)}
                className="w-12 h-12 rounded-full border border-white/20 hover:bg-white hover:text-[#543F33] flex items-center justify-center text-white transition-all shadow-md font-bold text-lg"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
