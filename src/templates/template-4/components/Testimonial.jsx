"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const TESTIMONIALS = [
  {
    text: "The educational programs offered by Chioary have changed my life. I was able to complete my education and now have the skills to support my family. I'm forever grateful.",
    name: "Courtney Henry",
    role: "General Manager",
  },
  {
    text: "These initiatives gave me a second chance at life. I now have a stable job and can support my loved ones.",
    name: "Mate Henry",
    role: "General Manager",
  },
  {
    text: "The support and guidance I received were life-changing. I will always be thankful.",
    name: "Henry Nichole",
    role: "General Manager",
  },
  {
    text: "Because of this program, I now have confidence and skills to build my future.",
    name: "Rob Nichole",
    role: "General Manager",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const rotatingRef = useRef(null);

  const next = () => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // 🔁 Auto slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🔄 Rotating badge
  useEffect(() => {
    if (!rotatingRef.current) return;

    gsap.to(rotatingRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <section className="bg-[var(--bg-color)] py-[140px] overflow-hidden">
      <div className="max-w-[900px] mx-auto px-4 text-center relative">
        {/* 🔵 Rotating Badge */}
        <div className="relative w-[130px] h-[130px] mx-auto mb-10">
          <svg
            ref={rotatingRef}
            viewBox="0 0 130 130"
            className="absolute inset-0"
          >
            <defs>
              <path
                id="circlePath"
                d="M65,65 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
              />
            </defs>
            <text fill="#ffffff" fontSize="10" letterSpacing="2">
              <textPath href="#circlePath">
                YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
              </textPath>
            </text>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[70px] h-[70px] rounded-full bg-white text-[var(--bg-color)] flex items-center justify-center text-xl font-bold">
              25+
            </div>
          </div>
        </div>

        {/* ⭐ Stars */}
        <div className="flex justify-center gap-1 text-[#FFA415] mb-6 text-xl">
          ★ ★ ★ ★ ★
        </div>

        {/* 💬 Testimonial Text */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${active * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full shrink-0 px-6">
                <p className="text-[22px] md:text-[26px] italic text-white leading-[1.6] mb-8">
                  “{t.text}”
                </p>

                <h4 className="text-[20px] font-bold text-white">
                  {t.name}
                </h4>
                <p className="text-white/70">{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔘 Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-4 h-4 flex items-center justify-center border ${
                active === i ? "border-[#FFA415]" : "border-gray-400"
              }`}
            >
              <span
                className={`w-2 h-2 ${
                  active === i ? "bg-[#FFA415]" : "bg-gray-400"
                }`}
              />
            </button>
          ))}
        </div>

        {/* 🔸 Decorative dot */}
        <div className="absolute left-0 top-[30%] w-4 h-4 border-2 border-[#FFA415] rounded-full"></div>
      </div>
    </section>
  );
}
