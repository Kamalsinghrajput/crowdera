"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import FloatingBird from "./FloatingBird";

const TABS = [
  "View All",
  "Education",
  "Health & Food",
  "Hunger & Nutrition",
  "Treatment",
];

const COURSES = [
  {
    id: 1,
    title: "Providing Lifesaving Medical Support and Care.",
    tag: "Medical",
    text: "Emergency field clinics and free consultations for rural populations who lack access to basic healthcare.",
    raised: "$38,500",
    goal: "$50,000",
    percent: 77,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Treatment"],
  },
  {
    id: 2,
    title: "Transforming Futures Through Education.",
    tag: "Education",
    text: "Scholarship programs and digital classrooms bridging the learning gap for thousands of underprivileged children.",
    raised: "$52,200",
    goal: "$75,000",
    percent: 70,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Education"],
  },
  {
    id: 3,
    title: "Clean Water for Underserved Communities.",
    tag: "Health",
    text: "Installing water purification systems and sanitation facilities in villages facing clean water scarcity.",
    raised: "$29,800",
    goal: "$45,000",
    percent: 66,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Health & Food"],
  },
  {
    id: 4,
    title: "Ending Child Hunger One Meal at a Time.",
    tag: "Nutrition",
    text: "Daily feeding programs delivering balanced meals to children in food-insecure households across three continents.",
    raised: "$41,600",
    goal: "$60,000",
    percent: 69,
    img: "https://images.unsplash.com/photo-1593113565214-8cb303387870?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Hunger & Nutrition"],
  },
  {
    id: 5,
    title: "Mental Health Outreach and Counseling.",
    tag: "Medical",
    text: "Free therapy sessions and community wellness workshops addressing trauma and mental health in vulnerable populations.",
    raised: "$18,900",
    goal: "$30,000",
    percent: 63,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    tabs: ["View All", "Health & Food"],
  },
];

function CourseCard({ course }) {
  return (
    <div className="bg-transparent group h-full flex flex-col">
      {/* Image container */}
      <div className="relative w-full h-[260px] overflow-hidden mb-6 bg-gray-200">
        <img
          src={course.img}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Tag */}
        <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md px-5 py-1.5 text-white text-[13px] tracking-wide">
          {course.tag}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[22px] text-[var(--bg-color)] leading-[1.4] mb-3">
          <a
            href="#"
            className="hover:text-[var(--secondary)] transition-colors"
          >
            {course.title}
          </a>
        </h3>
        <p className="text-[17px] text-[#6c6e76] leading-relaxed mb-8 flex-grow">
          {course.text}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 relative z-10">
          <div className="text-[17px] text-[var(--bg-color)]">
            {course.raised}{" "}
            <span className="text-[14px] text-[#6c6e76]">Raised</span>
          </div>

          {/* Percentage Circle */}
          <div className="w-11 h-11 rounded-full bg-[var(--bg-color)] text-white flex items-center justify-center text-[13px] shadow-[0_0_0_3px_#F9F9F9,0_0_0_4px_#121D18] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {course.percent}%
          </div>

          <div className="text-[17px] text-[var(--bg-color)]">
            {course.goal}{" "}
            <span className="text-[14px] text-[#6c6e76]">Goal</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-[#E5E5E5] rounded-full mb-8 relative">
          <div
            className="h-full bg-[var(--primary)] rounded-full"
            style={{ width: `${course.percent}%` }}
          ></div>
        </div>

        {/* Donate Button */}
        <div className="flex items-center gap-2 pb-2">
          <a
            href="#"
            className="t2-btn"
            style={{ transform: "scale(0.85)", transformOrigin: "left center" }}
          >
            <span>Donate Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Causes() {
  // Colors handled by global CSS variables in index.jsx

  const [activeTab, setActiveTab] = useState("View All");
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    activeTab === "View All"
      ? COURSES
      : COURSES.filter((c) => c.tabs.includes(activeTab));

  const maxIndex = Math.max(0, filtered.length - 1);

  // Auto slide
  useEffect(() => {
    if (filtered.length <= 2) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [filtered.length, maxIndex]);

  // Reset index on tab change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section
      id="causes"
      className="relative bg-[var(--secondary-bg-color)] py-[120px] overflow-hidden"
    >
      <div className="hidden lg:block">
        <FloatingBird position="left" />
      </div>
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Title + Tabs */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
              <span className="text-[17px] italic text-[var(--bg-color)]">
                Recent Causes
              </span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.1] text-[var(--bg-color)] text-left mb-10">
              Strengthening
              <br /> Communities
            </h2>

            {/* Tab buttons */}
            <ul className="flex flex-col mb-10">
              {TABS.map((tab, idx) => (
                <li
                  key={tab}
                  className={`border-b border-[#F0F0F0] ${idx === 0 ? "border-t" : ""}`}
                >
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full flex items-center justify-start gap-3 py-4 text-left text-[17px] transition-colors ${
                      activeTab === tab
                        ? "text-[var(--secondary)]"
                        : "text-[var(--bg-color)] hover:text-[var(--secondary)]"
                    }`}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    <span>{tab}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Carousel Navigation */}
            <div className="flex items-center justify-start gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[var(--bg-color)] transition-colors hover:bg-[var(--bg-color)] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--bg-color)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className="w-12 h-12 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[var(--bg-color)] transition-colors hover:bg-[var(--bg-color)] hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--bg-color)]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Explore More Button */}
            <div className="mt-10">
              <Link href="/templates/template-2/initiatives">
                <a className="t2-btn">
                  <span>Explore More</span>
                </a>
              </Link>
            </div>
          </div>

          {/* Right: Course cards Carousel */}
          <div className="overflow-hidden w-full relative">
            <div className="flex gap-8 w-full">
              {filtered.map((c) => (
                <div
                  key={c.id}
                  className="w-full sm:w-[calc(50%-16px)] shrink-0 transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 32}px))`,
                  }}
                >
                  <CourseCard course={c} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
