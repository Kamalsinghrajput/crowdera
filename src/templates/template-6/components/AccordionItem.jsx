"use client";
import { useState, useRef, useEffect } from "react";

export default function AccordionItem({ faqData, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className={`rounded-[1.5rem] overflow-hidden bg-white transition-all duration-300 border ${
        isOpen
          ? "border-black/[0.04] shadow-[0_10px_30px_rgba(33,24,35,0.06)]"
          : "border-black/[0.04] shadow-sm hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 sm:px-8 sm:py-6 bg-transparent border-none cursor-pointer text-left gap-4"
      >
        <div className="flex items-center gap-4 flex-1">
          <span
            className={`text-sm shrink-0 transition-colors duration-300 font-bold min-w-[24px] ${
              isOpen ? "text-[var(--primary)]" : "text-[#211823]/30"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="text-base sm:text-lg text-[#211823] m-0 leading-snug font-bold">
            {faqData.question}
          </h4>
        </div>

        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
            isOpen ? "bg-[var(--primary)] text-white" : "bg-[#211823]/5 text-[#211823]"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height }}
      >
        <div ref={contentRef} className="px-6 pb-5 pl-14 sm:px-8 sm:pb-6 sm:pl-16">
          <p className="text-sm sm:text-base text-[#211823]/70 leading-relaxed m-0 font-sans">
            {faqData.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

