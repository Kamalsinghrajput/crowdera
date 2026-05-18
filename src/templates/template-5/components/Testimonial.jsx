"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    text: "I've Had The Privilege Of Volunteering With Tamun And I'm Continually Inspired By The Dedication And Passion Of The Team. Working alongside such driven individuals has been an eye-opening experience.",
    name: "Adam Smith",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Every project feels like a step towards a better future. The level of commitment here is nothing short of extraordinary. I've Had The Privilege Of Volunteering With Tamun And I'm Continually Inspired.",
    name: "Leslie Alexander",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Working alongside such driven individuals has been an eye-opening experience. The impact we make together is truly rewarding. The level of commitment here is nothing short of extraordinary.",
    name: "Courtney Henry",
    role: "Project Lead",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "I've Had The Privilege Of Volunteering With Tamun And I'm Continually Inspired By The Dedication And Passion Of The Team. The impact we make together is truly rewarding.",
    name: "Mate Henry",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export default function Testimonial() {
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

  const maxIndex = Math.max(0, TESTIMONIALS.length - visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section className="py-24 bg-[var(--secondary-bg-color)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--secondary)] text-white font-['Montserrat'] font-bold text-[13px] uppercase tracking-[1px] px-5 py-2 rounded-full mb-5">
            TESTIMONIALS
          </div>
          <h2 className="font-['Montserrat'] font-extrabold text-[clamp(32px,4vw,46px)] text-[var(--bg-color)] leading-tight max-w-[800px] mx-auto m-0">
            What They Say About Our Great Journey
          </h2>
        </div>

        {/* Carousel */}
        <div className="w-full overflow-hidden px-2 pb-8">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  width: `${100 / visibleCount}%`,
                  flexShrink: 0,
                  padding: "0 15px",
                }}
              >
                <div className="bg-white rounded-lg p-10 h-full flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg relative">
                  {/* Quote Text */}
                  <p className="font-['Inter'] text-[17px] text-[#777777] leading-[1.8] italic mb-10 z-10 relative">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-5 relative z-10">
                    <div className="w-[60px] h-[60px] rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                      <FaQuoteLeft size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-['Montserrat'] font-bold text-[18px] text-[var(--bg-color)] m-0">
                        {testimonial.name}
                      </h4>
                      <span className="font-['Inter'] text-[14px] text-[#777777]">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                  {/* Faded Quote Icon Circle in background */}
                  <div className="absolute bottom-10 right-10 w-[65px] h-[65px] bg-[var(--primary)] rounded-full flex items-center justify-center opacity-10">
                    <FaQuoteLeft size={28} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
