import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiX } from "react-icons/fi";
import ButtonLetterRoll from "./ButtonLetterRoll";
import { gsap } from "gsap";

const slides = [
  {
    id: 1,
    title: (
      <>
        Every Small Act Of<br />
        Kindness Adds Up To<br />
        <span className="text-[#312340]">Big Change.</span>
      </>
    ),
    buttonText: "Join Campaign",
    href: "/templates/template-6/initiatives",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    donorsCount: "4k Active Donors",
    donorsSub: "Already registered",
    statValue: "148.1K",
    statLabel: "Nonprofits",
    videoUrl: "https://www.youtube.com/embed/HXY8Vz1F2sQ?autoplay=1"
  },
  {
    id: 2,
    title: (
      <>
        Together We Can<br />
        Build A Brighter<br />
        <span className="text-[#312340]">Future For All.</span>
      </>
    ),
    buttonText: "Join Campaign",
    href: "/templates/template-6/initiatives?tab=campaigns",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
    donorsCount: "12k Volunteers",
    donorsSub: "Ready to support",
    statValue: "92.4K",
    statLabel: "Families Helped",
    videoUrl: "https://www.youtube.com/embed/HXY8Vz1F2sQ?autoplay=1"
  },
  {
    id: 3,
    title: (
      <>
        Support Health &<br />
        Education In Rural<br />
        <span className="text-[#312340]">Communities.</span>
      </>
    ),
    buttonText: "Join Campaign",
    href: "/templates/template-6/initiatives?tab=donate",
    image: "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?q=80&w=800&auto=format&fit=crop",
    donorsCount: "50+ Villages",
    donorsSub: "Transformed fully",
    statValue: "98%",
    statLabel: "Success Rate",
    videoUrl: "https://www.youtube.com/embed/HXY8Vz1F2sQ?autoplay=1"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const imageWrapperRef = useRef(null);

  // Entrance and slide transition animations
  useEffect(() => {
    // 1. Entrance animation on mount
    gsap.fromTo(
      leftColRef.current,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      rightColRef.current,
      { x: 150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }
    );
  }, []);

  // Slide transition animation
  useEffect(() => {
    // Animate content change inside slide
    if (contentWrapperRef.current) {
      gsap.fromTo(
        contentWrapperRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );
    }

    if (imageWrapperRef.current) {
      gsap.fromTo(
        imageWrapperRef.current,
        { scale: 0.9, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <>
      {/* Custom styles and keyframes for animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes spin-slow-reverse {
              0% { transform: rotate(360deg); }
              100% { transform: rotate(0deg); }
            }
            @keyframes float-bob {
              0%, 100% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-12px) scale(1.03); }
            }
            @keyframes wave-move {
              0%, 100% { transform: translateY(0) scaleY(1); }
              50% { transform: translateY(8px) scaleY(1.03); }
            }
            @keyframes dot-pulse {
              0%, 100% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.35); opacity: 1; }
            }
            .animate-spin-slow {
              animation: spin-slow 18s linear infinite;
            }
            .animate-spin-slow-reverse {
              animation: spin-slow-reverse 15s linear infinite;
            }
            .animate-float-bob {
              animation: float-bob 4s ease-in-out infinite;
            }
            .animate-wave-move {
              animation: wave-move 8s ease-in-out infinite;
            }
            .font-sora {
              font-family: 'Sora', sans-serif;
            }
            .font-inter {
              font-family: 'Inter', sans-serif;
            }
          `,
        }}
      />

      <div
        id="hero"
        className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 lg:pt-32 pb-20 z-10"
        style={{
          background: "radial-gradient(circle at 10% 20%, rgba(246, 249, 252, 1) 0%, rgba(235, 244, 245, 1) 90%)",
        }}
      >
        {/* ============================================================
           ANIMATED GRAPHICS & DECORATIONS (Responsive: hidden on mobile)
           ============================================================ */}

        {/* Top-Left Starburst */}
        <div className="absolute top-[12%] left-[8%] lg:left-[12%] xl:left-[15%] w-16 h-16 pointer-events-none z-10 animate-spin-slow text-[#312340] hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 5 L54 35 L78 20 L65 45 L95 50 L65 55 L78 80 L54 65 L50 95 L46 65 L22 80 L35 55 L5 50 L35 45 L22 20 L46 35 Z" />
          </svg>
        </div>

        {/* Bottom-Left Starburst */}
        <div className="absolute bottom-[8%] left-[6%] lg:left-[10%] w-14 h-14 pointer-events-none z-10 animate-spin-slow-reverse text-[#4a3e56]/70 hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 5 L54 35 L78 20 L65 45 L95 50 L65 55 L78 80 L54 65 L50 95 L46 65 L22 80 L35 55 L5 50 L35 45 L22 20 L46 35 Z" />
          </svg>
        </div>

        {/* Middle-Left Interactive Carousel Pagination Dots */}
        <div className="absolute top-[45%] left-[4%] flex flex-col gap-4 z-20">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(idx)}
              className={`w-4 h-4 rounded-full transition-all duration-300 relative focus:outline-none ${
                currentSlide === idx ? "bg-[#312340] scale-125" : "bg-[#4cd2ff]/60 hover:bg-[#4cd2ff]"
              }`}
              title={`Go to slide ${idx + 1}`}
            >
              {currentSlide === idx && (
                <span className="absolute inset-0 rounded-full bg-[#312340] animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>

        {/* Cyan Background Wave */}
        <div className="absolute bottom-0 left-0 w-full h-[220px] sm:h-[320px] pointer-events-none z-0 overflow-hidden hidden lg:block">
          <svg
            viewBox="0 0 1440 320"
            className="absolute bottom-0 left-0 w-full h-full animate-wave-move"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(76, 210, 255, 0.35)" />
                <stop offset="60%" stopColor="rgba(76, 210, 255, 0.15)" />
                <stop offset="100%" stopColor="rgba(140, 98, 170, 0.0)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#wave-grad)"
              d="M0,160 C320,240 640,180 960,200 C1280,220 1380,120 1440,80 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        {/* ============================================================
           MAIN HERO CONTENT CONTAINER (Aligned to the right end)
           ============================================================ */}
        <div className="max-w-[1440px] ml-auto mr-0 pl-6 lg:pl-16 pr-6 lg:pr-0 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: Texts, Button, Social Proof */}
            <div ref={leftColRef} className="lg:col-span-7 flex flex-col items-start text-left pr-4">
              <div ref={contentWrapperRef} className="w-full flex flex-col items-start">
                <h1 className="text-[#312340] font-extrabold text-[clamp(38px,5.4vw,64px)] leading-[1.08] tracking-tight font-sora mb-10 min-h-[3.24em] flex items-center">
                  <div>{slide.title}</div>
                </h1>

                <div className="mb-10">
                  <ButtonLetterRoll
                    text={slide.buttonText}
                    href={slide.href}
                    bgColor="var(--secondary)"
                    textColor="#211823"
                    borderColor="transparent"
                    hoverBgColor="var(--primary)"
                    hoverTextColor="#ffffff"
                    hoverBorderColor="transparent"
                  />
                </div>

                {/* Social Proof (Donors) & Stats Badge Row */}
                <div className="flex flex-wrap items-center gap-6 mt-6 sm:gap-10">
                  {/* Donors Group */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-3.5">
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                        alt="Donor 1"
                      />
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                        alt="Donor 2"
                      />
                      <img
                        className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                        alt="Donor 3"
                      />
                    </div>
                    <div className="font-sora">
                      <div className="text-base font-extrabold text-[#312340]">{slide.donorsCount}</div>
                      <div className="text-xs font-semibold text-[#80758c] font-inter">{slide.donorsSub}</div>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="relative bg-[#8c62aa] hover:bg-[#7a5499] text-white rounded-lg flex flex-col justify-center min-w-[160px] shadow-lg font-sora transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{padding:"10px"}}>
                    {/* Tiny Cyan offset indicator dot */}
                    <div className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#4cd2ff] rounded-full border-2 border-white shadow-sm animate-pulse" />
                    <span className="text-2xl font-black tracking-tight leading-none">{slide.statValue}</span>
                    <span className="text-xs font-semibold text-purple-100 mt-1.5 uppercase tracking-wider font-inter">{slide.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Curved Image & Floating Badges (At very right end of screen and enlarged) */}
            <div ref={rightColRef} className="lg:col-span-5 relative flex justify-end w-full">
              <div className="relative w-full max-w-[520px] aspect-[4/5] sm:h-[580px] lg:h-[620px] ml-auto">
                {/* Floating Gift Box Outline (Top Right of curve - responsive: hidden on mobile) */}
                <div className="absolute -top-10 left-12 w-16 h-16 pointer-events-none z-20 animate-float-bob text-[#8c62aa] hidden lg:block">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="14" y="26" width="36" height="8" rx="1" />
                    <path d="M18 34v16a2 2 0 002 2h24a2 2 0 002-2V34" />
                    <path d="M32 26v26M28 26h8" />
                    <path d="M32 18c-1.5-2.5-4.5-2.5-6 0-1.5 2.5 0 5.5 3 8l3 2.5 3-2.5c3-2.5 4.5-5.5 3-8-1.5-2.5-4.5-2.5-6 0z" fill="currentColor" fillOpacity="0.15" />
                  </svg>
                </div>

                {/* Main Curved Image Container */}
                <div ref={imageWrapperRef} className="w-full h-full border-l-[8px] border-t-[8px] border-[#8c62aa] rounded-tl-[160px] sm:rounded-tl-[220px] overflow-hidden shadow-2xl relative z-10 bg-gray-100">
                  <Image
                    src={slide.image}
                    alt="Charity & Kindness"
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-700 pointer-events-none"
                    priority
                  />
                </div>

                {/* Rotating Video Badge (Bottom Left, overlapping curve, styled with A7C3DF bg color) */}
                <div className="absolute bottom-16 -left-12 w-28 h-28 z-20 bg-[#A7C3DF] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  {/* Rotating Circular Text SVG */}
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full animate-[spin-slow_12s_linear_infinite]"
                  >
                    <path
                      id="textCirclePath"
                      d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                      fill="none"
                    />
                    <text fill="#312340" className="text-[9.5px] font-bold font-sora tracking-[2.2px] uppercase">
                      <textPath href="#textCirclePath" startOffset="0%">{"Charity Video Digital • Charity Video Digital •"}</textPath>
                    </text>
                  </svg>

                  {/* Centered Static Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setVideoOpen(true)}
                      className="w-13 h-13 bg-[#312340] hover:bg-[#211823] text-white rounded-full flex items-center justify-center shadow-md transition-transform hover:scale-110 duration-300"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1 text-white">
                        <polygon points="6 3 20 12 6 21 6 3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
         PREMIUM YOUTUBE VIDEO POPUP MODAL
         ============================================================ */}
      {videoOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4">
          <div className="absolute inset-0" onClick={() => setVideoOpen(false)} />
          <div className="relative w-full max-w-[800px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl z-10 border border-white/10 animate-fadeDown">
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all hover:scale-110 z-20"
            >
              <FiX size={20} />
            </button>
            <iframe
              className="w-full h-full"
              src={slide.videoUrl}
              title="Charity video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
