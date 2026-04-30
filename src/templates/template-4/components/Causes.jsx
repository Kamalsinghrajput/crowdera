"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    title: "Well Construction And Purification Projects.",
    tag: "Education",
    text: "Education is a powerful tool for change.",
    raised: "$50,00",
    goal: "$50,00",
    percent: 75,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Education"],
  },
  {
    id: 2,
    title: "Digital Learning for Rural Students.",
    tag: "Education",
    text: "Providing online education resources.",
    raised: "$30,00",
    goal: "$40,00",
    percent: 70,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Education"],
  },
  {
    id: 3,
    title: "Medical Support for Communities.",
    tag: "Medical",
    text: "Emergency healthcare services.",
    raised: "$38,00",
    goal: "$60,00",
    percent: 60,
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Treatment", "Health & Food"],
  },
  {
    id: 4,
    title: "Healthcare Camps & Awareness.",
    tag: "Health",
    text: "Health awareness programs.",
    raised: "$20,00",
    goal: "$35,00",
    percent: 55,
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Health & Food"],
  },
  {
    id: 5,
    title: "Clean Water for Communities.",
    tag: "Health",
    text: "Safe drinking water projects.",
    raised: "$29,00",
    goal: "$45,00",
    percent: 66,
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Health & Food"],
  },
  {
    id: 6,
    title: "Ending Hunger One Meal at a Time.",
    tag: "Nutrition",
    text: "Daily meals for children.",
    raised: "$41,00",
    goal: "$60,00",
    percent: 69,
    img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Hunger & Nutrition"],
  },
  {
    id: 7,
    title: "Food Distribution Drives.",
    tag: "Nutrition",
    text: "Providing food supplies globally.",
    raised: "$22,00",
    goal: "$40,00",
    percent: 50,
    img: "https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=800&q=80",
    tabs: ["View All", "Hunger & Nutrition"],
  },
];

export default function Causes() {
  const [activeTab, setActiveTab] = useState("View All");
  const [index, setIndex] = useState(0);

  const filtered =
    activeTab === "View All"
      ? COURSES
      : COURSES.filter((c) => c.tabs.includes(activeTab));

  const maxIndex = Math.max(0, filtered.length - 1);

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    setIndex(0);
  }, [activeTab]);

  return (
    <section className="bg-[#f6f6f6] py-[120px]">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm italic text-[#121d18] mb-2 flex justify-center items-center gap-2">
            Recent Courses
            <span className="w-1.5 h-1.5 bg-[#FFA415] rounded-full" />
          </div>

          <h2 className="text-[clamp(32px,4vw,52px)] font-bold text-[#121d18]">
            Expanding Horizons Through Learning
          </h2>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* LEFT TABS */}
          <div>
            <ul className="space-y-4">
              {TABS.map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`w-full px-6 py-4 flex justify-between items-center transition-all rounded-md ${
                      activeTab === tab
                        ? "bg-[#FFA415] text-white"
                        : "bg-[#eaeaea] text-[#121d18] hover:bg-[#ddd]"
                    }`}
                  >
                    {tab}
                    <span>→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT CAROUSEL */}
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 100}%)`,
              }}
            >
              {filtered.map((course) => (
                <div
                  key={course.id}
                  className="w-full shrink-0 bg-[#121D18] text-white flex flex-col lg:flex-row"
                >
                  {/* IMAGE */}
                  <div className="relative w-full lg:w-[50%] min-h-[300px] overflow-hidden">
                    <Image
                      src={course.img}
                      alt={course.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-cover"
                    />
                    {/* ARROWS */}
                    {filtered.length > 1 && (
                      <>
                        <button
                          onClick={prev}
                          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
                        >
                          ←
                        </button>

                        <button
                          onClick={next}
                          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition"
                        >
                          →
                        </button>
                      </>
                    )}
                    {/* TAG */}
                    <div className="absolute bottom-6 left-4 bg-black/60 px-4 py-1 text-sm rounded z-20">
                      {course.tag}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="lg:w-[50%] p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {course.title}
                    </h3>

                    <p className="text-white/70 mb-6">{course.text}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <span className="text-xl font-semibold">
                          {course.raised}
                        </span>{" "}
                        <span className="text-sm text-white/60">Raised</span>
                      </div>

                      <div className="w-12 h-12 rounded-full border-2 border-[#FFA415] flex items-center justify-center text-sm">
                        {course.percent}%
                      </div>

                      <div>
                        <span className="text-xl font-semibold">
                          {course.goal}
                        </span>{" "}
                        <span className="text-sm text-white/60">Goal</span>
                      </div>
                    </div>

                    <div className="w-full h-1.5 bg-white/20 mb-6 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FFA415]"
                        style={{ width: `${course.percent}%` }}
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <button className="t2-btn t2-btn-secondary">
                        <span>Donate Now</span>
                        <i>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            className="-rotate-45"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </i>
                      </button>

                      <button className="underline">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
