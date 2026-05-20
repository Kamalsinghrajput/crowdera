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
      className={`rounded-[2rem] overflow-hidden bg-white transition-all duration-350 border ${
        isOpen
          ? "border-[var(--primary)] shadow-md"
          : "border-black/[0.06] shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 py-6 bg-transparent border-none cursor-pointer text-left gap-4"
      >
        <div className="flex items-center gap-4 flex-1">
          <span
            className={`text-sm shrink-0 transition-colors duration-300 font-black min-w-[28px] ${
              isOpen ? "text-[var(--primary)]" : "text-[#2b1f18]/30"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="text-lg text-[#2b1f18] m-0 leading-snug font-black uppercase tracking-tight">
            {faqData.question}
          </h4>
        </div>

        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-350 ${
            isOpen ? "bg-[var(--primary)] rotate-45" : "bg-black/[0.04] rotate-0"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#fff" : "#2b1f18"}
            strokeWidth="3"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </button>

      <div
        className="overflow-hidden transition-all duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ height }}
      >
        <div ref={contentRef} className="px-8 pb-6 pl-16">
          <p className="text-base text-[#2b1f18]/80 leading-[1.7] m-0 font-serif">
            {faqData.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
