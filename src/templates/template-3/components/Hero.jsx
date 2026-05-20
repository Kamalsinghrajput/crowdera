"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    subtitle: "ALWAYS DONATE FOR CHILDREN'S",
    title: "A Little Help A Big\nChange for Children",
    grayscale: true,
  },
  {
    img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=1920&q=80",
    subtitle: "SUPPORT OUR MISSION",
    title: "Together We Can\nMake a Difference",
    grayscale: false,
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80",
    subtitle: "CLEAN WATER INITIATIVE",
    title: "Bring Clean Water\nTo Every Child",
    grayscale: true,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const rotatingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (rotatingRef.current) {
      gsap.to(rotatingRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#EBD3AF] min-h-[80vh] flex flex-col justify-between pt-[180px] mb-[200px] lg:mb-[300px] z-10"
    >
      {/* Background Wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Faint Pattern Overlay */}
        <div
          className="absolute inset-0 animate-floatMap"
          style={{
            backgroundColor: "#E0CAAA",
            maskImage: "url(/assets/map.svg)",
            WebkitMaskImage: "url(/assets/map.svg)",
            maskSize: "50%",
            WebkitMaskSize: "80%",
            maskPosition: "center 15%",
            WebkitMaskPosition: "center 15%",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="max-w-[1320px] mx-auto px-4 relative z-30 w-full flex-1 flex flex-col pb-[420px] lg:pb-[640px]">
        {/* Top Text & Badge Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative">
          {/* Left Text */}
          <div className="max-w-[850px]">
            {/* Tagline */}
            <div
              key={`sub-${animKey}`}
              className="flex items-center gap-3 mb-6 animate-[slideInUp_0.7s_ease_forwards]"
            >
              <div className="w-3 h-3 rounded-full bg-[var(--primary)]" />
              <span className="text-[15px] md:text-[17px] font-bold text-[#121d18] tracking-[0.1em] uppercase font-sans">
                {slide.subtitle}
              </span>
            </div>

            {/* Heading */}
            <h1
              key={`title-${animKey}`}
              className="text-[clamp(46px,6vw,84px)] font-bold text-[#121d18] leading-[1.05] mb-12 whitespace-pre-line"
              style={{ animation: "slideInUp 0.7s 0.1s ease both" }}
            >
              {slide.title}
            </h1>

            {/* Button */}
            <div
              key={`btn-${animKey}`}
              style={{ animation: "slideInUp 0.7s 0.2s ease both" }}
            >
              <a href="#" className="t2-btn  inline-flex">
                <span>Join With Us</span>
              </a>
            </div>
          </div>

          {/* Right Circular Badge */}
          <div className="hidden lg:block relative w-[180px] h-[180px] shrink-0 mt-10 lg:mt-0 lg:mr-10 border-[1.5px] border-[#121d18] rounded-full">
            <svg
              ref={rotatingRef}
              viewBox="0 0 150 150"
              className="absolute inset-0 w-full h-full text-[#121d18]"
            >
              <defs>
                <path
                  id="badgePath"
                  d="M 75,75 m -55,0 a 55,55 0 1,1 110,0 a 55,55 0 1,1 -110,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="11.5"
                letterSpacing="3.5"
                fontWeight="600"
              >
                <textPath href="#badgePath">
                  NON PROFIT CHARITY FOUNDATION Ã¢â‚¬Â¢
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Icons */}
      <div className="absolute top-[20%] right-[10%] opacity-[0.15] hidden lg:block pointer-events-none z-10">
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#121d18"
          strokeWidth="1"
        >
          <path d="M20 12v10H4V12M22 7H2v5h20V7zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
        </svg>
      </div>
      <div className="absolute top-[40%] left-[5%] opacity-[0.1] hidden lg:block pointer-events-none z-10">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#121d18"
          strokeWidth="1.5"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      {/* Slider Image Container (Bottom Overlap) */}
      <div className="absolute -bottom-[200px] lg:-bottom-[300px] left-1/2 -translate-x-1/2 w-full max-w-[1735px] h-[400px] lg:h-[600px] z-20 overflow-hidden shadow-2xl">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === i ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={s.img}
              alt="Hero"
              layout="fill"
              objectFit="cover"
              objectPosition="center top"
              className={`transition-all duration-[6000ms] ease-out ${current === i ? "scale-100" : "scale-110"} ${s.grayscale ? "grayscale" : ""}`}
            />
          </div>
        ))}
      </div>

      {/* Slider Dots (Over Image) */}
      <div className="absolute -bottom-[150px] lg:-bottom-[250px] left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrent(i);
              setAnimKey((k) => k + 1);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${current === i ? "w-10 bg-[var(--primary)]" : "w-2.5 bg-white/50 hover:bg-white"}`}
          />
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatMap {
          0% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.05) translate(-25px, 15px); }
          66% { transform: scale(1.02) translate(15px, -25px); }
          100% { transform: scale(1) translate(0, 0); }
        }
        .animate-floatMap {
          animation: floatMap 30s ease-in-out infinite;
          transform-origin: center center;
        }
      `,
        }}
      />
    </section>
  );
}
