"use client";
import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ButtonLetterRoll({
  text,
  href,
  onClick,
  type = "button",
  bgColor = "transparent",
  textColor = "#E3692A",
  borderColor = "#E3692A",
  hoverBgColor = "#2b1f18",
  hoverTextColor = "#ffffff",
  hoverBorderColor = "#2b1f18",
  hoverSecondaryLetterColor = "#ffffff",
}) {
  const words = text.split(" ");
  // Generate a random class name to avoid style bleeding
  const uniqueClass = typeof window !== "undefined"
    ? `btn-roll-${Math.random().toString(36).substring(2, 9)}`
    : "btn-roll-static";

  const buttonClass = `inline-flex items-center gap-3 border px-8 py-4.5 rounded-full select-none transition-all duration-400 ease-out group uppercase tracking-widest font-black text-xs relative overflow-hidden shadow-sm hover:shadow-md ${uniqueClass}`;
  
  const innerContent = (
    <>
      {/* Styled Letter Roll Text wrapper */}
      <span className="flex items-center gap-1.5 z-10 relative">
        {words.map((word, wIdx) => (
          <span key={wIdx} className="flex overflow-hidden">
            {word.split("").map((char, cIdx) => {
              // Global character index for staggered delay
              const charIndex = wIdx * 10 + cIdx;
              return (
                <span
                  key={cIdx}
                  className="relative block overflow-hidden h-[1.3em] w-auto pointer-events-none"
                >
                  {/* Sliding character block */}
                  <span
                    className="block transition-transform duration-[280ms] cubic-bezier(0.76, 0, 0.24, 1) group-hover:-translate-y-full"
                    style={{
                      transitionDelay: `${charIndex * 0.014}s`,
                    }}
                  >
                    {/* Primary letter */}
                    <span className="block">{char}</span>
                    {/* Secondary letter sitting below */}
                    <span
                      className="absolute top-full left-0 block"
                      style={{ color: hoverSecondaryLetterColor }}
                    >
                      {char}
                    </span>
                  </span>
                </span>
              );
            })}
          </span>
        ))}
      </span>

      {/* Right Arrow Icon Circle */}
      <div
        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-400 ease-out z-10 relative"
        style={{ backgroundColor: "rgba(0,0,0,0.04)" }}
      >
        <FiArrowRight
          size={14}
          className="transition-transform duration-400 ease-out group-hover:translate-x-1"
        />
      </div>
    </>
  );

  return (
    <>
      {/* Dynamic Scoped Hover styling */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .${uniqueClass} {
              background-color: ${bgColor} !important;
              color: ${textColor} !important;
              border-color: ${borderColor} !important;
              outline: none;
              cursor: pointer;
            }
            .${uniqueClass}:hover {
              background-color: ${hoverBgColor} !important;
              color: ${hoverTextColor} !important;
              border-color: ${hoverBorderColor} !important;
            }
          `,
        }}
      />

      {href ? (
        <Link href={href}>
          <a className={buttonClass} style={{ height: "50px" }}>
            {innerContent}
          </a>
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={buttonClass}
          style={{ height: "50px", borderStyle: "solid" }}
        >
          {innerContent}
        </button>
      )}
    </>
  );
}
