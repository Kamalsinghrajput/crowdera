"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AccordionItem from "./AccordionItem";
import ButtonLetterRoll from "./ButtonLetterRoll";

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
    <section className="bg-[#F9F5EC] py-[120px] font-sans relative overflow-hidden z-20 border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-20 items-start">
          {/* Left Side */}
          <div className="flex flex-col">
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-4"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Our FAQ
            </span>

            <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0 mb-6">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <p className="text-[#2b1f18]/80 text-[16px] leading-[1.8] font-serif mb-10">
              Have questions? We've got answers. Browse through our frequently
              asked questions to find the information you need.
            </p>

            <div>
              <ButtonLetterRoll
                text="More Questions"
                href="/templates/template-9/contact"
                bgColor="var(--primary)"
                textColor="#ffffff"
                borderColor="var(--primary)"
                hoverBgColor="#2b1f18"
                hoverTextColor="#ffffff"
                hoverBorderColor="#2b1f18"
              />
            </div>

            {/* Decorative Image Card */}
            <div className="mt-12 rounded-[2.5rem] overflow-hidden h-[240px] relative shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=700&q=80"
                alt="FAQ support image"
                layout="fill"
                objectFit="cover"
                className="brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl text-[var(--secondary)] font-black leading-none uppercase">
                  24/7
                </span>
                <span className="text-xs text-white/90 mt-2 tracking-widest font-black uppercase">
                  Support Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4">
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
