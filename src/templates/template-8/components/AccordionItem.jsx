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
      className={`rounded-[10px] overflow-hidden bg-white transition-all duration-350 border-[1.5px] ${
          isOpen
            ? "border-[#005e46] shadow-[0_8px_30px_rgba(0,94,70,0.12)]"
            : "border-[#e5e7eb] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between px-6 py-5 bg-transparent border-none cursor-pointer text-left gap-4"
        >
          <div className="flex items-center gap-4 flex-1">
            <span
              className={`text-[14px] shrink-0 transition-colors duration-300 min-w-[28px] ${
                isOpen ? "text-[#005e46]" : "text-[#1A1A1A]/40"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-[17px] text-[#1A1A1A] m-0 leading-[1.4] font-bold">
              {faqData.question}
            </h4>
          </div>

          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-350 ${
              isOpen ? "bg-[#005e46] rotate-45" : "bg-[#f3f4f6] rotate-0"
            }`}
          >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#fff" : "#9ca3af"}
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
        <div ref={contentRef} className="px-6 pb-6 pl-[70px]">
          <p className="text-[15px] text-[#4b5563] leading-[1.85] m-0 font-medium">
            {faqData.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
