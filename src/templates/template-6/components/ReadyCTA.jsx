"use client";
import React from "react";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";

// Decorative Hand-drawn Sunburst Star (matching template-9 premium hand-drawn vibe)
const MiniSparkle = ({ className }) => (
  <svg
    viewBox="0 0 100 100"
    className={`w-8 h-8 fill-current ${className}`}
  >
    <path d="M 50 0 C 50 35, 65 50, 100 50 C 65 50, 50 65, 50 100 C 50 65, 35 50, 0 50 C 35 50, 50 35, 50 0 Z" />
  </svg>
);

export default function ReadyCTA() {
  return (
    <section
      className="py-28 relative overflow-hidden text-center"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Decorative Floating Sparkles */}
      <div className="absolute top-12 left-10 md:left-24 text-[var(--secondary)] opacity-40 animate-pulse pointer-events-none select-none" style={{ animationDuration: '3s' }}>
        <MiniSparkle />
      </div>
      <div className="absolute bottom-16 right-10 md:right-28 text-[var(--secondary)] opacity-40 animate-pulse pointer-events-none select-none" style={{ animationDuration: '4s' }}>
        <MiniSparkle className="scale-125" />
      </div>

      <div className="max-w-[850px] mx-auto px-6 relative z-10">
        
        {/* Subheading Block */}
        <div className="inline-flex items-center justify-center gap-3 mb-6 w-full">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--secondary)]" />
          <span
            className="text-3xl font-normal text-white"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Get Involved
          </span>
        </div>

        {/* Main Header */}
        <h2
          className="text-[clamp(36px,5.5vw,56px)] leading-[1.05] text-white font-black uppercase mb-6 tracking-tighter"
          style={{ fontFamily: "'Sora', sans-serif" }}
        >
          Ready to Make a Difference?
        </h2>

        {/* Description Paragraph */}
        <p
          className="text-lg md:text-[20px] text-white/90 mb-10 max-w-[650px] mx-auto leading-relaxed"
          style={{ fontFamily: "'Nunito', 'Inter', sans-serif" }}
        >
          Join us in our mission to bring joy and support to those in need.
          Every contribution counts towards building a better future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <ButtonLetterRoll
            text="Start a Campaign"
            href="/templates/template-6/initiatives"
            bgColor="#FAF6FC"
            textColor="var(--primary)"
            borderColor="#FAF6FC"
            hoverBgColor="#211823"
            hoverTextColor="#ffffff"
            hoverBorderColor="#211823"
            hoverSecondaryLetterColor="#ffffff"
          />
        </div>
      </div>
    </section>
  );
}
