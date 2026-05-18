"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FiBookOpen, FiDroplet, FiPlus } from "react-icons/fi";

const TABS = [
  { key: "Education", icon: FiBookOpen },
  { key: "Water", icon: FiDroplet },
  { key: "Medical", icon: FiPlus },
];

const ROTATING_TEXT = "YEARS OF EXPERIENCE • YEARS OF EXPERIENCE • ";

export default function About() {
  const rotatingRef = useRef(null);

  useEffect(() => {
    gsap.to(rotatingRef.current, {
      rotation: 360,
      duration: 12,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <section className="py-[110px] bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Outer row — left col + right col */}
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          {/* ============ LEFT COLUMN ============ */}
          <div className="w-full lg:w-[55%] flex flex-col">
            {/* Header */}
            <div className="mb-10 pt-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[var(--secondary)] rounded-full" />
                <span className="italic text-sm text-[var(--bg-color)] font-semibold">
                  Our About
                </span>
              </div>
              <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.1] text-[var(--bg-color)] m-0">
                Empowering Lives Through Compassion.
              </h2>
            </div>

            {/* Body — vertical image + text side by side */}
            <div className="flex flex-col sm:flex-row gap-8 flex-1">
              {/* Left vertical image */}
              <div className="w-full sm:w-[260px] relative shrink-0 overflow-hidden rounded-[30px] rounded-tr-[10px] min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
                  alt="Volunteer"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-between flex-1 py-2">
                <p className="text-[#6c6e76] text-[17px] leading-[1.8] m-0 mb-6">
                  &ldquo;Empowering Lives Through Compassion&rdquo; Is A
                  Powerful And Inspiring Heading That Perfectly Captures The
                  Essence Of Your Charity&apos;s Mission. It&apos;s A Great
                  Choice
                </p>

                {/* Tabs */}
                <div className="flex gap-8 mb-8">
                  {TABS.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <div
                        key={tab.key}
                        className="text-center group cursor-pointer flex flex-col items-center"
                      >
                        <div className="w-[60px] h-[65px] bg-[#f9f9f9] rounded-b-[30px] rounded-t-[10px] flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-[var(--secondary)] group-hover:scale-110">
                          <Icon
                            size={24}
                            strokeWidth={1.5}
                            className="text-[var(--bg-color)] group-hover:text-white transition-colors duration-300"
                          />
                        </div>
                        <span className="text-[14px] font-bold text-[var(--bg-color)]">
                          {tab.key}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Read More button */}
                <div>
                  <a href="#" className="t2-btn t2-btn-secondary inline-flex">
                    <span>Read More</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ============ RIGHT COLUMN — bigger image ============ */}
          <div className="w-full lg:w-[45%] relative min-h-[500px]">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: "20px 20px 120px 20px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=800&q=80"
                alt="About"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* 25+ rotating badge */}
            <div className="absolute -left-[65px] top-[15%] w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center z-20 shadow-lg">
              <svg
                ref={rotatingRef}
                viewBox="0 0 130 130"
                className="absolute w-full h-full"
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 65,65 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                  />
                </defs>
                <text
                  fill="#121d18"
                  fontSize="9"
                  letterSpacing="2"
                  fontWeight="bold"
                >
                  <textPath href="#circlePath">{ROTATING_TEXT}</textPath>
                </text>
              </svg>
              <div className="w-[80px] h-[80px] bg-[var(--bg-color)] rounded-full flex items-center justify-center z-10">
                <span className="text-white text-[22px] font-bold">25+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
