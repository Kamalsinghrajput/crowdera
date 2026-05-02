"use client";
import { useState } from "react";
import Image from "next/image";

const FAQS = [
  {
    question: "Can I organize a fundraiser for your charity?",
    answer:
      "Absolutely! We welcome community-organized fundraisers and events. Our team will provide guidance and resources to help make your fundraiser a success. Please reach out to us to get started and we'll connect you with our partnerships team.",
  },
  {
    question: "How can I stay updated on your activities?",
    answer:
      "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited by independent organizations to ensure accountability.",
    defaultOpen: true,
  },
  {
    question: "Do you collaborate with other organizations?",
    answer:
      "Yes! Collaboration is at the heart of our work. We partner with local nonprofits, international aid organizations, government agencies, and corporate sponsors to maximize our reach and impact across communities worldwide.",
  },
  {
    question: "What kind of services do you provide?",
    answer:
      "We offer a wide range of services including food assistance, health support, educational programs, emergency relief, and community development initiatives. Each program is designed to address the specific needs of underserved populations.",
  },
];

import AccordionItem from "./AccordionItem";

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
            {FAQS.map((faqData, index) => (
              <AccordionItem
                key={index}
                faqData={faqData}
                index={index}
                isOpen={open === index}
                onToggle={() => setOpen(open === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
