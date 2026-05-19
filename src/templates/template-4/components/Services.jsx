"use client";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

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
  {
    title: "Medical Aid Support",
    text: "Providing essential healthcare services, clinical operations, and health kits to remote communities.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Eco Protection",
    text: "Preserving global habitats by organizing tree plantation drives and advocating green resources.",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Vocational Training",
    text: "Equipping women and youth with handcrafts and tech skills to secure stable livelihood options.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function Services() {
  const overlaysRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = SERVICES.length - visibleCards;

  // Auto Play sliding effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(interval);
  }, [visibleCards, maxIndex, isPaused]);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section 
      className="py-[110px] bg-[#f6f6f6] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

      {/* Cards Viewport Wrapper */}
      <div className="max-w-[1320px] mx-auto px-12 relative">
        <div className="overflow-hidden py-10 px-1">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {SERVICES.map((srv, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-3 select-none"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div
                  onMouseEnter={() => handleEnter(i)}
                  onMouseLeave={() => handleLeave(i)}
                  className="relative rounded-[30px] px-7 pt-16 pb-8 text-center bg-[#ececec] overflow-visible cursor-pointer group h-full shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
                >
                  {/* Animated Background */}
                  <div
                    ref={(el) => (overlaysRef.current[i] = el)}
                    className="absolute inset-0 bg-[#121D18] rounded-[30px] scale-y-0 z-[1]"
                  />

                  {/* Icon */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-[50px] bg-[#FFA415] flex items-center justify-center text-white z-[3] shadow-md transition-transform duration-500 group-hover:scale-105">
                    {srv.icon}
                  </div>

                  {/* Content wrapper */}
                  <div className="relative z-[2] text-[#121d18] transition-colors duration-300 group-hover:text-white flex-grow flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="mt-8 mb-4 text-[22px] font-bold transition-colors duration-300 group-hover:text-white">
                        {srv.title}
                      </h3>

                      {/* Text */}
                      <p className="text-[14px] leading-7 mb-6 opacity-80 group-hover:opacity-90 font-medium font-serif">
                        {srv.text}
                      </p>
                    </div>

                    <div>
                      {/* Dot */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFA415] mx-auto mb-5" />

                      <div className="h-[110px] rounded-full overflow-hidden shadow-inner">
                        <div className="h-[110px] rounded-full relative">
                          <div className="h-[110px] w-full overflow-hidden rounded-full">
                            <Image
                              src={srv.img}
                              alt={srv.title}
                              width={400}
                              height={110}
                              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                              style={{ borderRadius: "9999px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls - Floating on Sides */}
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#121d18] hover:bg-[#FFA415] hover:text-white transition-all shadow-md bg-white z-[10] active:scale-95"
          aria-label="Previous slide"
        >
          <FiChevronLeft size={22} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-[#121d18] hover:bg-[#FFA415] hover:text-white transition-all shadow-md bg-white z-[10] active:scale-95"
          aria-label="Next slide"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#FFA415]" : "w-2.5 bg-black/10 hover:bg-black/35"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Join With Us CTA */}
      <div className="flex justify-center mt-16">
        <a href="#" className="t2-btn t2-btn-secondary">
          <span>Join With Us</span>
        </a>
      </div>
    </section>
  );
}
