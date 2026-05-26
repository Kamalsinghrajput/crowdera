"use client";
import { useState } from "react";
import Image from "next/image";
import AccordionItem from "./AccordionItem";

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

export default function Faq() {
  const [open, setOpen] = useState(1);

  return (
    <section className="bg-[#EEF7FC] py-[120px] font-sans relative overflow-hidden z-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-center">
          {/* Left Side */}
          <div className="flex flex-col">
            <span
              className="text-[var(--primary)] text-lg font-bold block mb-4 uppercase tracking-wider"
            >
              Have Questions?
            </span>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#211823] tracking-tight leading-[1.15] m-0 mb-8">
              Help Make a Difference in the Life of a Child
            </h2>

            {/* Image Card with Play Button */}
            <div className="group relative rounded-[2rem] overflow-hidden aspect-[16/10] w-full shadow-[0_15px_35px_rgba(0,0,0,0.1)] cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Volunteers helping children"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {/* Outer waves */}
                  <div className="absolute w-20 h-20 bg-white/30 rounded-full animate-ping duration-1000" />
                  <div className="absolute w-16 h-16 bg-white/40 rounded-full animate-pulse" />
                  
                  {/* Inner Play Circle */}
                  <div className="w-16 h-16 bg-white text-[var(--primary)] rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 relative z-10">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Accordion FAQ items */}
          <div className="flex flex-col gap-5">
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

