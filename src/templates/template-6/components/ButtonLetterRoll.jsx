"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ButtonLetterRoll({
  text,
  href,
  onClick,
  type = "button",
  bgColor = "transparent",
  textColor = "var(--primary)",
  borderColor = "var(--primary)",
  hoverBgColor = "#2b1f18",
  hoverTextColor = "#ffffff",
  hoverBorderColor = "#2b1f18",
  className = "",
  fullWidth = false,
  showArrow = true,
  leftIcon = null,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClass = `inline-flex items-center justify-center gap-3 border px-8 py-4 rounded-full select-none transition-all duration-500 ease-out group uppercase tracking-widest font-black text-xs relative overflow-hidden shadow-sm hover:shadow-md z-0 ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const buttonStyle = {
    height: "50px",
    backgroundColor: bgColor,
    color: isHovered ? hoverTextColor : textColor,
    borderColor: isHovered ? hoverBorderColor : borderColor,
    borderStyle: "solid",
    outline: "none",
    cursor: "pointer",
  };

  const innerContent = (
    <>
      {/* Slide-in Background Overlay */}
      <span
        className="absolute inset-0 w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left scale-x-0 group-hover:scale-x-100 -z-10"
        style={{ backgroundColor: hoverBgColor }}
      />
      
      {leftIcon && <span className="z-10 relative flex items-center">{leftIcon}</span>}

      {/* Button Text */}
      <span className="z-10 relative font-sora transition-transform duration-300 group-hover:-translate-y-[1px]">
        {text}
      </span>

      {/* Right Arrow Icon Circle */}
      {showArrow && (
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-400 ease-out z-10 relative"
          style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
        >
          <FiArrowRight
            size={14}
            className="transition-transform duration-400 ease-out group-hover:translate-x-1.5"
          />
        </div>
      )}
    </>
  );

  return href ? (
    <Link href={href}>
      <a
        className={buttonClass}
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {innerContent}
      </a>
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {innerContent}
    </button>
  );
}



