"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const FAQS = [
  {
    q: "Can I organize a fundraiser for your charity?",
    a: "Absolutely! We welcome community-organized fundraisers and events. Our team will provide guidance and resources to help make your fundraiser a success. Please reach out to us to get started and we'll connect you with our partnerships team.",
  },
  {
    q: "How can I stay updated on your activities?",
    a: "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited by independent organizations to ensure accountability.",
    defaultOpen: true,
  },
  {
    q: "Do you collaborate with other organizations?",
    a: "Yes! Collaboration is at the heart of our work. We partner with local nonprofits, international aid organizations, government agencies, and corporate sponsors to maximize our reach and impact across communities worldwide.",
  },
  {
    q: "What kind of services do you provide?",
    a: "We offer a wide range of services including food assistance, health support, educational programs, emergency relief, and community development initiatives. Each program is designed to address the specific needs of underserved populations.",
  },
];

function AccordionItem({ faq, isOpen, onToggle, index }) {
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
          ? "border-[#007B39] shadow-[0_8px_30px_rgba(0,123,57,0.12)]"
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
              isOpen ? "text-[#007B39]" : "text-[#121d18]/40"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 className="text-[17px] text-[#121d18] m-0 leading-[1.4] font-bold">
            {faq.q}
          </h4>
        </div>

        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-350 ${
            isOpen ? "bg-[#007B39] rotate-45" : "bg-[#f3f4f6] rotate-0"
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
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(1);

  return (
    <section className=" py-[120px] relative">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-20 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#007B39]" />
              <span className="text-[16px] text-[#121d18] italic font-bold">
                Our FAQ
              </span>
            </div>

            <h2 className="text-[clamp(28px,4vw,50px)] leading-[1.2] text-[#121d18] mb-5 font-bold">
              Frequently Asking
              <br /> Questions.
            </h2>

            <p className="text-[15px] text-[#121d18]/80 leading-[1.8] mb-10 font-semibold">
              Have questions? We've got answers. Browse through our frequently
              asked questions to find the information you need.
            </p>

            <a href="#" className="t2-btn">
              <span>More Questions</span>
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </i>
            </a>

            {/* Decorative image */}
            <div className="mt-12 rounded-[12px] overflow-hidden h-[220px] relative">
              <Image
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=700&q=80"
                alt="FAQ"
                width={700}
                height={220}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(18,29,24,0.55)] flex flex-col items-center justify-center">
                <div className="text-[48px] text-[var(--secondary)] leading-none">
                  24/7
                </div>
                <div className="text-[14px] text-white/80 mt-2 tracking-[0.05em]">
                  Support Available
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3.5">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                faq={faq}
                index={i}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
