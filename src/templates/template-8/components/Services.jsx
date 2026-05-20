"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiCheck,
  FiAlertTriangle,
  FiHeart,
  FiBookOpen,
  FiGlobe,
  FiShoppingBag,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

const SERVICES = [
  {
    title: "Emergency Relief",
    text: "Providing immediate support, food packages, and emergency shelter during natural disasters and critical crises.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    icon: <FiAlertTriangle size={24} />,
    tag: "Urgent",
    list: [
      "Crisis intervention & response",
      "Food & medical supply packs",
      "Temporary shelter construction",
    ],
    stat: { label: "Response", percent: 95 },
  },
  {
    title: "Medical Outreach",
    text: "Delivering primary healthcare services, essential immunizations, and clinical aid directly to remote villages.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
    icon: <FiHeart size={24} />,
    tag: "Healthcare",
    list: [
      "Mobile clinic operations",
      "Free medical checkups",
      "Vital medicine distribution",
    ],
    stat: { label: "Cured", percent: 88 },
  },
  {
    title: "Educational Support",
    text: "Empowering children and youth through access to quality education, books, and scholarship funds.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
    icon: <FiBookOpen size={24} />,
    tag: "Education",
    list: [
      "Scholarships & school fees",
      "School kit distribution",
      "Volunteer school programs",
    ],
    stat: { label: "Impact", percent: 92 },
  },
  {
    title: "Community Development",
    text: "Creating self-reliant communities with sustainable clean water systems and vocational training.",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600&q=80",
    icon: <FiGlobe size={24} />,
    tag: "Sustainability",
    list: [
      "Water well installations",
      "Job-skills development",
      "Sustainable agriculture",
    ],
    stat: { label: "Success", percent: 90 },
  },
  {
    title: "Food Security",
    text: "Ensuring nutritious hot meals and vital grocery kits reach families struggling with hunger and poverty.",
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=600&q=80",
    icon: <FiShoppingBag size={24} />,
    tag: "Nutrition",
    list: [
      "Hot meal distribution",
      "Monthly grocery bags",
      "School lunch programs",
    ],
    stat: { label: "Relief", percent: 96 },
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="services"
      className="py-[120px] bg-white font-sans overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Column: Text & Navigation Controls */}
        <div className="w-full lg:w-[35%] flex flex-col justify-between self-stretch">
          <div>
            <span className="text-[var(--primary)] font-bold text-[15px] mb-4 block uppercase tracking-wider">
              Start Donating Poor People
            </span>
            <h2 className="text-[#1a2b28] text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.2] mb-6">
              Donate Support To Make Difference Way
            </h2>
            <p className="text-[#666] text-[17px] leading-[1.8] mb-8">
              Charity is the voluntary act of giving help, typically in the form
              of money, time, or resources, to those in need. Charitable
              organizations aim to solve social, environmental, and economic
              challenges.
            </p>
          </div>

          <div>
            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handlePrev}
                className="w-[48px] h-[48px] rounded-full bg-[#122f2a] hover:bg-[var(--primary)] flex items-center justify-center text-white transition-colors duration-300 shadow-md active:scale-95"
                aria-label="Previous slide"
              >
                <FiChevronLeft size={20} className="mr-0.5" />
              </button>
              <button
                onClick={handleNext}
                className="w-[48px] h-[48px] rounded-full bg-[var(--secondary)] hover:brightness-95 flex items-center justify-center text-black transition-colors duration-300 shadow-md active:scale-95"
                aria-label="Next slide"
              >
                <FiChevronRight size={20} className="ml-0.5" />
              </button>
            </div>

            {/* Compact Floating Stats Card */}
            <div className="border border-gray-150 rounded-2xl p-6 flex flex-row items-center justify-between gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] bg-[#fafafa]">
              {/* Stat 1 */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[var(--secondary)]/15 flex items-center justify-center text-[var(--secondary)] shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M4 14H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V14Z"
                      strokeLinejoin="round"
                    />
                    <path d="M12 14V8" strokeLinecap="round" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M4 14H20" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-wider leading-none mb-1">
                    Donate Now
                  </span>
                  <span className="text-[#1a2b28] font-extrabold text-[16px] leading-none">
                    $40,456
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] h-10 bg-gray-200"></div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M8 21H16A4 4 0 0 0 20 17V12A6 6 0 0 0 8 12V17A4 4 0 0 0 8 21Z"
                      strokeLinejoin="round"
                    />
                    <path d="M10 5H14" strokeLinecap="round" />
                    <path d="M12 5V2" strokeLinecap="round" />
                    <path d="M12 11V16M10 13.5H14" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <span className="text-gray-500 text-[11px] font-bold block uppercase tracking-wider leading-none mb-1">
                    Total Raised
                  </span>
                  <span className="text-[var(--primary)] font-extrabold text-[16px] leading-none">
                    $1,540,456
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Carousel viewport */}
        <div
          className="w-full lg:w-[65%] overflow-hidden relative py-4 px-2 select-none self-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Track */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {/* Service Card */}
                <div className="bg-white rounded-[24px] border border-gray-200 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-2 flex flex-col h-full group hover:border-[var(--primary)]/30">
                  {/* Card Image Block */}
                  <div className="h-[200px] w-full relative overflow-hidden bg-gray-100">
                    <Image
                      src={service.img}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-[var(--secondary)] text-black text-[12px] font-bold px-3 py-1 rounded-full shadow-sm">
                      {service.tag}
                    </span>
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-[var(--secondary)] group-hover:text-black transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 pt-8 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-[#1a2b28] text-[20px] font-extrabold mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#666] text-[14.5px] leading-[1.6] mb-5">
                        {service.text}
                      </p>

                      {/* Checklist items */}
                      <ul className="space-y-2 mb-6">
                        {service.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[#555] text-[14px] font-medium"
                          >
                            <FiCheck
                              size={16}
                              className="text-[var(--secondary)] mt-0.5 flex-shrink-0"
                              strokeWidth={3}
                            />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom row: Circular progress + Action Button */}
                    <div className="flex items-center justify-between gap-4 pt-4 border-t border-gray-100">
                      {/* Stat indicator */}
                      <div className="flex items-center gap-3">
                        <div className="relative w-[48px] h-[48px] rounded-full border-[4px] border-gray-100 flex items-center justify-center shadow-sm bg-white shrink-0">
                          <svg
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 100 100"
                          >
                            <circle
                              cx="50"
                              cy="50"
                              r="46"
                              fill="transparent"
                              stroke="var(--primary)"
                              strokeWidth="8"
                              strokeDasharray="289"
                              strokeDashoffset={
                                289 - (289 * service.stat.percent) / 100
                              }
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="text-[#1a2b28] font-bold text-[12px]">
                            {service.stat.percent}%
                          </span>
                        </div>
                        <span className="text-[12px] font-bold text-[#1a2b28] leading-tight max-w-[60px]">
                          {service.stat.label}
                        </span>
                      </div>

                      {/* Action CTA */}
                      <button className="bg-[var(--secondary)] hover:brightness-95 text-black font-bold text-[13px] px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95 whitespace-nowrap">
                        Donate Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex justify-start items-center gap-2 mt-6 px-3">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-[var(--primary)]"
                    : "w-2 bg-gray-200 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
