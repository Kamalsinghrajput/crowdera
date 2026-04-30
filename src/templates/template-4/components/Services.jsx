"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const SERVICES = [
  {
    title: "Clean Water Initiatives",
    text: "Providing access to safe drinking water through well construction and purification projects.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 2C12 2 4 9.5 4 14a8 8 0 0 0 16 0c0-4.5-8-12-8-12z" />
      </svg>
    ),
  },
  {
    title: "Educational Programs",
    text: "Providing access to quality education through scholarships and digital learning.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Food Distribution",
    text: "Providing nutritious meals and groceries to families in need.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21M3 3c0 0 3 0 6 3s6 3 6 3M9 9v12M9 9H6a3 3 0 0 1 0-6h3" />
      </svg>
    ),
  },
];

export default function Services() {
  const overlaysRef = useRef([]);

  const handleEnter = (i) => {
    gsap.fromTo(
      overlaysRef.current[i],
      { scaleY: 0, transformOrigin: "center" },
      { scaleY: 1, duration: 0.4, ease: "power3.out" },
    );
  };

  const handleLeave = (i) => {
    gsap.to(overlaysRef.current[i], {
      scaleY: 0,
      duration: 0.35,
      ease: "power3.inOut",
    });
  };

  return (
    <section className="py-[110px] bg-[#f6f6f6]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="mb-2">
          <span className="text-[#FFA415]">•</span>{" "}
          <span className="italic text-[#121d18]">Best Of Service</span>
        </div>

        <h2 className="text-[clamp(32px,4vw,52px)] text-[#121d18]">
          The Best Service
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-20 lg:gap-8 mt-12 lg:mt-0">
        {SERVICES.map((srv, i) => (
          <div
            key={i}
            onMouseEnter={() => handleEnter(i)}
            onMouseLeave={() => handleLeave(i)}
            className="relative rounded-[30px] px-7 pt-16 pb-8 text-center bg-[#ececec] overflow-visible cursor-pointer group"
          >
            {/* Animated Background */}
            <div
              ref={(el) => (overlaysRef.current[i] = el)}
              className="absolute inset-0 bg-[#121D18] rounded-[30px] scale-y-0 z-[1]"
            />

            {/* Icon */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-[50px] bg-[#FFA415] flex items-center justify-center text-white z-[3]">
              {srv.icon}
            </div>

            {/* Content */}
            <div className="relative z-[2] text-[#121d18] transition-colors duration-300 group-hover:text-white">
              {/* Title */}
              <h3 className="mt-8 mb-3 text-[22px] font-semibold transition-colors duration-300 group-hover:text-white">
                {srv.title}
              </h3>

              {/* Text */}
              <p className="text-sm leading-7 mb-6 transition-colors duration-300">
                {srv.text}
              </p>

              {/* Dot */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFA415] mx-auto mb-5" />

              <div className="h-[110px] rounded-full overflow-hidden">
                <div className="h-[110px] rounded-full relative">
                  <div className="h-[110px] w-full overflow-hidden rounded-full">
                    <Image
                      src={srv.img}
                      alt={srv.title}
                      width={400}
                      height={110}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "9999px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Join With Us CTA */}
      <div className="flex justify-center mt-16">
        <a href="#" className="t2-btn t2-btn-secondary">
          <span>Join With Us</span>
          <i>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </i>
        </a>
      </div>
    </section>
  );
}
