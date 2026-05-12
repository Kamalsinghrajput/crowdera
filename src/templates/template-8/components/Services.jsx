"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiCheck, FiPlay } from "react-icons/fi";

const TAB_DATA = {
  "Our Mission": {
    list: [
      "We help companies develop powerful corporate social",
      "Helped fund 3,265 Project powerful corporate poor",
      "Dedicated Tech Services",
    ],
    stats: [
      { label: "Treatment\nHelping", percent: 75 },
      { label: "Highest\nFund Raised", percent: 90 },
    ],
  },
  "Our Vision": {
    list: [
      "Empowering communities with sustainable resources",
      "Building a global network of dedicated volunteers",
      "Fostering education and technology accessibility",
    ],
    stats: [
      { label: "Education\nGrowth", percent: 85 },
      { label: "Community\nReach", percent: 95 },
    ],
  },
  Excellence: {
    list: [
      "Award-winning transparent donation tracking",
      "Industry-leading operational efficiency",
      "Transforming lives through direct interventions",
    ],
    stats: [
      { label: "Efficiency\nRating", percent: 98 },
      { label: "Direct\nImpact", percent: 92 },
    ],
  },
};

export default function Services() {
  const [activeTab, setActiveTab] = useState("Our Mission");

  return (
    <section
      id="services"
      className="py-[120px] bg-white font-sans overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
        {/* Left Side: Images */}
        <div className="w-full lg:w-[45%] relative">
          {/* Dotted pattern top-left */}
          <div className="absolute -top-8 -left-8 w-[140px] h-[140px] bg-[radial-gradient(#d9a96e_2.5px,transparent_2.5px)] [background-size:20px_20px] opacity-60 z-0"></div>

          {/* Main Large Image */}
          <div className="relative z-10 rounded-[30px] overflow-hidden w-[90%] h-[550px]">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="Smiling child"
              layout="fill"
              objectFit="cover"
            />
            {/* Dark overlay for play button area */}
            <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] bg-black/40 rounded-full flex items-center justify-center z-10 pointer-events-none"></div>

            {/* Play button */}
            <button className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 z-20 group">
              <div className="w-[65px] h-[65px] bg-[#d9a96e] rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform shadow-lg">
                <FiPlay size={24} className="text-black" />
              </div>
            </button>
          </div>

          {/* Overlapping smaller image */}
          <div className="absolute -bottom-10 right-0 w-[55%] h-[300px] rounded-[30px] overflow-hidden border-[12px] border-white shadow-xl z-20">
            <Image
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
              alt="Children playing"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-[55%] lg:pl-10 mt-20 lg:mt-0">
          <span className="text-[#007b5e] font-bold text-[14px] mb-4 block">
            Start Donating Poor People
          </span>
          <h2 className="text-[#1a2b28] text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.2] mb-6 max-w-[500px]">
            Donate Support To Make Difference Way
          </h2>
          <p className="text-[#666] text-[15px] leading-[1.8] mb-10 max-w-[600px]">
            Charity is the voluntary act of giving help, typically in the form
            of money, time, or resources, to those in need. Charitable
            organizations aim to solve social, environmental, and economic
            challenges by addressing issues like poverty.
          </p>

          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-200 pb-5 mb-10">
            {["Our Mission", "Our Vision", "Excellence"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-bold text-[14.5px] transition-colors ${
                  activeTab === tab
                    ? "bg-[#007b5e] text-white"
                    : "text-[#1a2b28] hover:text-[#007b5e]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-6 xl:gap-10">
            {/* Left Column: List + Charts */}
            <div className="flex-1">
              {/* List */}
              <ul className="space-y-4 mb-12">
                {TAB_DATA[activeTab].list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[#666] text-[15px] font-medium"
                  >
                    <FiCheck
                      size={20}
                      className="text-[#d9a96e] mt-1 flex-shrink-0"
                      strokeWidth={3}
                    />
                    <span className="leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Circular Progress Charts */}
              <div className="flex items-center gap-8">
                {TAB_DATA[activeTab].stats.map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="relative w-[75px] h-[75px] rounded-full border-[6px] border-gray-100 flex items-center justify-center shadow-sm bg-white">
                      <svg
                        className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-sm"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          cx="50"
                          cy="50"
                          r="46"
                          fill="transparent"
                          stroke="#007b5e"
                          strokeWidth="8"
                          strokeDasharray="289"
                          strokeDashoffset={289 - (289 * stat.percent) / 100}
                          strokeLinecap="round"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <span className="text-[#1a2b28] font-bold text-[15px]">
                        {stat.percent}%
                      </span>
                    </div>
                    <div className="text-[14px] font-bold text-[#1a2b28] leading-[1.4] whitespace-pre-line">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Floating Stats Card */}
            <div className="w-full md:w-[240px] flex-shrink-0">
              <div className="border border-gray-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm bg-white">
                {/* Top Stat: Donate Now */}
                <div className="mb-6 flex flex-col items-center w-full">
                  {/* Donation Box SVG */}
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d9a96e"
                    strokeWidth="1.5"
                    className="mb-4"
                  >
                    <path
                      d="M4 14H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V14Z"
                      strokeLinejoin="round"
                    />
                    <path d="M12 14V8" strokeLinecap="round" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M4 14H20" strokeLinecap="round" />
                  </svg>
                  <span className="text-[#1a2b28] font-bold text-[17px] mb-1">
                    Donate Now
                  </span>
                  <span className="text-[#d9a96e] font-bold text-[20px]">
                    $40,456
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-200 mb-6"></div>

                {/* Bottom Stat: Total Fundraised */}
                <div className="flex flex-col items-center w-full">
                  {/* Money Bag SVG */}
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#007b5e"
                    strokeWidth="1.5"
                    className="mb-4"
                  >
                    <path
                      d="M8 21H16A4 4 0 0 0 20 17V12A6 6 0 0 0 8 12V17A4 4 0 0 0 8 21Z"
                      strokeLinejoin="round"
                    />
                    <path d="M10 5H14" strokeLinecap="round" />
                    <path d="M12 5V2" strokeLinecap="round" />
                    <path d="M12 11V16M10 13.5H14" strokeLinecap="round" />
                  </svg>
                  <span className="text-[#1a2b28] font-bold text-[17px] mb-1">
                    Total Fundraised
                  </span>
                  <span className="text-[#007b5e] font-bold text-[20px]">
                    $1,540,456
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
