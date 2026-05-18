"use client";
import React from "react";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* ====== LEFT COLUMN — Visuals ====== */}
          <div className="w-full lg:w-1/2 relative">
            {/* Green Abstract Blob Shape (Background) */}
            <div
              className="absolute -bottom-10 -left-10 w-[80%] h-[80%] bg-[var(--primary)] z-0"
              style={{
                borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                transform: "rotate(-15deg)",
              }}
            />

            {/* Main Image with thick white border */}
            <div className="relative z-10 border-[15px] border-white shadow-xl rounded-lg overflow-hidden h-[550px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80"
                alt="About our charity"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>

            {/* Overlapping Orange Icon Box */}
            <div className="absolute top-12 -right-8 z-20 w-[110px] h-[110px] bg-[var(--secondary)] flex items-center justify-center rounded-2xl shadow-lg">
              <FiHeart size={44} className="text-white" strokeWidth={1.5} />
            </div>
          </div>

          {/* ====== RIGHT COLUMN — Content ====== */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-block self-start bg-[var(--secondary)] text-white font-['Montserrat'] font-bold text-[13px] uppercase px-5 py-2 rounded-full tracking-[1px]">
              DONATION ABOUT
            </div>

            {/* Main Heading */}
            <h2 className="font-['Montserrat'] font-extrabold text-[clamp(36px,4vw,50px)] text-[var(--bg-color)] leading-[1.1] m-0">
              The Great Journey Of End Poverty And Helping Others.
            </h2>

            {/* Paragraph Text */}
            <p className="font-['Inter'] text-[17px] text-[#777777] leading-[1.8] m-0">
              We are committed to making a difference in the lives of those who
              need it most. Our journey began with a simple belief: that every
              human deserves access to basic needs like clean water, healthy
              food, and reliable education. Together, we can build a stronger,
              more supportive global community.
            </p>

            {/* Circular Counters */}
            <div className="flex flex-wrap gap-12 mt-6">
              {/* Counter 1: Charity (Orange) */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[130px] h-[130px] flex items-center justify-center">
                  <svg
                    width="130"
                    height="130"
                    className="-rotate-90 absolute inset-0"
                  >
                    {/* Background Ring */}
                    <circle
                      cx="65"
                      cy="65"
                      r="58"
                      stroke="#f2f2f2"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Ring (85%) */}
                    {/* Circumference = 2 * pi * 58 = 364.4 */}
                    {/* Dashoffset = 364.4 * (1 - 0.85) = 54.6 */}
                    <circle
                      cx="65"
                      cy="65"
                      r="58"
                      stroke="var(--secondary)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="364.4"
                      strokeDashoffset="54.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-['Montserrat'] font-extrabold text-[28px] text-[var(--bg-color)]">
                    85%
                  </span>
                </div>
                {/* Pill Label */}
                <div className="absolute -bottom-4 bg-white border border-[#eeeeee] px-6 py-2 rounded-full shadow-sm z-10">
                  <span className="font-['Montserrat'] font-bold text-[14px] text-[var(--bg-color)] uppercase">
                    Charity
                  </span>
                </div>
              </div>

              {/* Counter 2: Donations (Green) */}
              <div className="relative flex flex-col items-center">
                <div className="relative w-[130px] h-[130px] flex items-center justify-center">
                  <svg
                    width="130"
                    height="130"
                    className="-rotate-90 absolute inset-0"
                  >
                    <circle
                      cx="65"
                      cy="65"
                      r="58"
                      stroke="#f2f2f2"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Progress Ring (100% full look but with a gap, let's say 92%) */}
                    {/* Dashoffset = 364.4 * (1 - 0.92) = 29.1 */}
                    <circle
                      cx="65"
                      cy="65"
                      r="58"
                      stroke="var(--primary)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray="364.4"
                      strokeDashoffset="29.1"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-['Montserrat'] font-extrabold text-[28px] text-[var(--bg-color)]">
                    2235+
                  </span>
                </div>
                {/* Pill Label */}
                <div className="absolute -bottom-4 bg-white border border-[#eeeeee] px-6 py-2 rounded-full shadow-sm z-10">
                  <span className="font-['Montserrat'] font-bold text-[14px] text-[var(--bg-color)] uppercase">
                    Donations
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
