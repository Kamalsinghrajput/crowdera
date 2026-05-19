"use client";
import React from "react";

// Icon 1: Sunburst Heart (Top Left)
const SunburstHeart = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-20 h-20 lg:w-28 lg:h-28 text-[#E3692A] fill-none stroke-current stroke-[3.5] stroke-linecap-round stroke-linejoin-round"
  >
    <path d="M 50 37 C 40 22, 20 27, 20 47 C 20 67, 50 82, 50 87 C 50 82, 80 67, 80 47 C 80 27, 60 22, 50 37 Z" />
    <line x1="50" y1="12" x2="50" y2="20" />
    <line x1="26" y1="20" x2="32" y2="26" />
    <line x1="12" y1="40" x2="20" y2="41" />
    <line x1="14" y1="64" x2="22" y2="60" />
    <line x1="30" y1="82" x2="36" y2="74" />
    <line x1="70" y1="82" x2="64" y2="74" />
    <line x1="86" y1="64" x2="78" y2="60" />
    <line x1="88" y1="40" x2="80" y2="41" />
    <line x1="74" y1="20" x2="68" y2="26" />
  </svg>
);

// Icon 2: Minty Teal Stars (Top Right)
const TealStars = () => (
  <svg viewBox="0 0 80 100" className="w-16 h-20 lg:w-24 lg:h-28 text-[#71B2A1] fill-current">
    <path
      d="M 20 15 L 23 23 L 31 23 L 25 28 L 27 36 L 20 31 L 13 36 L 15 28 L 9 23 L 17 23 Z"
      transform="rotate(-15 20 25)"
    />
    <path
      d="M 55 35 L 57.5 41 L 64 41 L 59 45 L 61 51.5 L 55 47.5 L 49 51.5 L 51 45 L 46 41 L 52.5 41 Z"
      transform="rotate(10 55 43)"
    />
    <path
      d="M 35 65 L 37 70 L 42 70 L 38 73.5 L 39.5 78.5 L 35 75.5 L 30.5 78.5 L 32 73.5 L 28 70 L 33 70 Z"
      transform="rotate(-5 35 71)"
    />
  </svg>
);

// Customized Stylized Reaching Hand SVG Component
const ReachingHand = ({ fill, className, style }) => (
  <svg
    viewBox="0 0 100 150"
    fill={fill}
    className={`w-full h-full object-contain select-none pointer-events-none transition-transform duration-500 hover:translate-y-[-10px] ${className}`}
    style={style}
  >
    <path d="M 50 150 C 48 125 38 112 28 102 C 18 92 12 84 12 72 C 12 66 16 60 21 60 C 25 60 27 65 29 71 C 29 51 25 31 29 20 C 31 15 37 15 39 20 C 41 30 41 60 41 60 C 43 45 41 25 45 15 C 47 10 53 10 55 15 C 57 25 55 60 55 60 C 57 45 57 25 61 18 C 63 13 69 13 71 18 C 73 25 71 60 71 60 C 73 50 75 30 79 25 C 81 20 87 20 89 25 C 91 35 87 80 83 95 C 79 110 68 130 63 150 Z" />
  </svg>
);

// High-fidelity Custom SVG Grayscale Logos matching the image
const LogoNicef = () => (
  <svg viewBox="0 0 120 40" className="h-9 text-[#555] fill-current">
    <text x="5" y="29" fontFamily="'Sora', sans-serif" fontWeight="900" fontSize="25" letterSpacing="-1">
      nicef
    </text>
    <circle cx="95" cy="20" r="9" fill="none" stroke="#555" strokeWidth="2.5" />
    <path d="M 90 20 C 90 16, 100 16, 100 20 C 100 24, 90 24, 90 20" fill="none" stroke="#555" strokeWidth="2" />
    <circle cx="95" cy="13" r="2.5" />
  </svg>
);

const LogoFosteringHope = () => (
  <svg viewBox="0 0 150 45" className="h-10 text-[#555] fill-current">
    <text x="0" y="14" fontFamily="'Inter', sans-serif" fontWeight="800" fontSize="9" letterSpacing="3">
      FOSTERING
    </text>
    <text x="0" y="37" fontFamily="'Sora', sans-serif" fontWeight="900" fontSize="24" letterSpacing="1.5">
      H
    </text>
    <path
      d="M 33 26 C 30 18, 19 18, 19 26 C 19 34, 33 42, 33 42 C 33 42, 47 34, 47 26 C 47 18, 36 18, 33 26 Z"
      fill="none"
      stroke="#555"
      strokeWidth="3.5"
    />
    <path d="M 31 35 C 29 32, 29 29, 32 29 C 34 29, 34 32, 36 32 C 37 30, 38 29, 39 30 C 40 31, 39 34, 37 36 Z" />
    <text x="51" y="37" fontFamily="'Sora', sans-serif" fontWeight="900" fontSize="24" letterSpacing="1.5">
      PE
    </text>
  </svg>
);

const LogoHometownHealth = () => (
  <svg viewBox="0 0 170 40" className="h-10 text-[#555] fill-current">
    <text x="0" y="27" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="600" fontSize="23">
      Hometown
    </text>
    <text x="100" y="27" fontFamily="'Inter', sans-serif" fontWeight="300" fontSize="16" letterSpacing="0.5">
      Health
    </text>
    <path
      d="M 152 18 C 150.5 16.5, 149 16.5, 148 18 C 147 16.5, 145.5 16.5, 144 18 C 142.5 20, 142.5 22.5, 148 26 C 153.5 22.5, 153.5 20, 152 18 Z"
      fill="none"
      stroke="#555"
      strokeWidth="1.5"
    />
    <path
      d="M 157 22 C 155.5 20.5, 154 20.5, 153 22 C 152 20.5, 150.5 20.5, 149 22 C 147.5 24, 147.5 26.5, 153 30 C 158.5 26.5, 158.5 24, 157 22 Z"
      fill="none"
      stroke="#555"
      strokeWidth="1.5"
    />
  </svg>
);

const LogoFoodSafety = () => (
  <svg viewBox="0 0 160 40" className="h-9 text-[#555] fill-current">
    <text x="0" y="28" fontFamily="Georgia, serif" fontWeight="700" fontSize="23" letterSpacing="-0.5">
      FoodSafety
    </text>
    <text x="111" y="34" fontFamily="'Inter', sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="0.5" opacity="0.8">
      magazine
    </text>
  </svg>
);

const LogoChildrenNow = () => (
  <svg viewBox="0 0 140 40" className="h-9 text-[#555] fill-current">
    <rect x="0" y="2" width="105" height="20" fill="#555" rx="2" />
    <text x="52.5" y="16" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="10.5" fill="#F9F5EC" textAnchor="middle" letterSpacing="0.8">
      CHILDREN
    </text>
    <text x="52.5" y="36" fontFamily="'Sora', sans-serif" fontWeight="900" fontSize="13.5" letterSpacing="1.2" textAnchor="middle">
      NOW
    </text>
    <circle cx="15" cy="39" r="1.2" />
    <circle cx="27" cy="39" r="1.2" />
    <circle cx="39" cy="39" r="1.2" />
    <circle cx="51" cy="39" r="1.2" />
    <circle cx="63" cy="39" r="1.2" />
    <circle cx="75" cy="39" r="1.2" />
    <circle cx="87" cy="39" r="1.2" />
    <circle cx="99" cy="39" r="1.2" />
  </svg>
);

const LOGO_COMPONENTS = [
  LogoNicef,
  LogoFosteringHope,
  LogoHometownHealth,
  LogoFoodSafety,
  LogoChildrenNow,
];

export default function Partners() {
  return (
    <section className="py-20 lg:py-24 bg-[#F9F5EC] overflow-hidden relative w-full">
      
      {/* Inject custom infinite marquee CSS styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
            .marquee-track:hover .animate-marquee {
              animation-play-state: paused;
            }
            .marquee-wrapper {
              position: relative;
              width: 100%;
              overflow: hidden;
            }
            .marquee-wrapper::before,
            .marquee-wrapper::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              width: 150px;
              z-index: 2;
              pointer-events: none;
            }
            .marquee-wrapper::before {
              left: 0;
              background: linear-gradient(to right, #F9F5EC, transparent);
            }
            .marquee-wrapper::after {
              right: 0;
              background: linear-gradient(to left, #F9F5EC, transparent);
            }
          `,
        }}
      />

      <div className="max-w-[1250px] mx-auto px-6 relative">
        
        {/* ── Top Header Section ──────────────────────────────────────── */}
        <div className="text-center relative max-w-[800px] mx-auto mb-12">
          
          {/* Cursive Subheading */}
          <span
            className="text-[#F2B740] text-3xl lg:text-4xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Our partners
          </span>

          {/* Main Huge All-caps Title */}
          <h2
            className="text-[clamp(32px,5.5vw,60px)] font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0 max-w-[700px] mx-auto"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            YOUR SUPPORT DRIVES OUR GLOBAL IMPACT
          </h2>

          {/* Decorator Left: Orange Sunburst Heart */}
          <div className="absolute left-[-20px] top-[-30px] hidden md:block select-none pointer-events-none transform -rotate-12 animate-pulse" style={{ animationDuration: '4s' }}>
            <SunburstHeart />
          </div>

          {/* Decorator Right: Teal Stars */}
          <div className="absolute right-[-20px] top-[-10px] hidden md:block select-none pointer-events-none transform rotate-6">
            <TealStars />
          </div>
        </div>

        {/* ── Row of Colorful Reaching Hands ─────────────────────────── */}
        <div className="relative w-full h-[120px] lg:h-[160px] flex items-end justify-center overflow-hidden mb-0">
          <div className="flex items-end justify-center w-full max-w-[800px] h-full gap-2 px-4 translate-y-1">
            
            <ReachingHand
              fill="#FCDCD4"
              className="h-[60%] lg:h-[70%] transform -rotate-12 translate-x-3 origin-bottom"
            />
            
            <ReachingHand
              fill="#F2B740"
              className="h-[80%] lg:h-[90%] transform -rotate-6 translate-x-1 origin-bottom"
            />
            
            <ReachingHand
              fill="#A77A55"
              className="h-[65%] lg:h-[75%] transform rotate-3 origin-bottom"
            />
            
            <ReachingHand
              fill="#FFA896"
              className="h-[90%] lg:h-[100%] transform -rotate-2 origin-bottom"
            />
            
            <ReachingHand
              fill="#E8D9C5"
              className="h-[55%] lg:h-[65%] transform rotate-6 origin-bottom"
            />
            
            <ReachingHand
              fill="#E3692A"
              className="h-[85%] lg:h-[95%] transform rotate-12 -translate-x-2 origin-bottom"
            />
            
            <ReachingHand
              fill="#DFD0BC"
              className="h-[68%] lg:h-[78%] transform rotate-6 origin-bottom"
            />
            
            <ReachingHand
              fill="#FCE3D8"
              className="h-[58%] lg:h-[68%] transform rotate-12 -translate-x-3 origin-bottom"
            />
          </div>
        </div>

        {/* Thin Elegant Baseline Divider */}
        <hr className="border-t border-[#2b1f18]/15 w-full my-0 p-0" />

        {/* ── Seamless Infinite Marquee Carousel (Bottom) ──────────────── */}
        <div className="marquee-wrapper py-12">
          <div className="flex w-max marquee-track">
            
            {/* Set 1 */}
            <div className="flex items-center justify-around gap-16 px-8 animate-marquee whitespace-nowrap">
              {LOGO_COMPONENTS.map((Logo, idx) => (
                <div
                  key={`set1-${idx}`}
                  className="logo-wrapper shrink-0 opacity-65 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <Logo />
                </div>
              ))}
            </div>

            {/* Set 2 */}
            <div className="flex items-center justify-around gap-16 px-8 animate-marquee whitespace-nowrap">
              {LOGO_COMPONENTS.map((Logo, idx) => (
                <div
                  key={`set2-${idx}`}
                  className="logo-wrapper shrink-0 opacity-65 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <Logo />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
