import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      gsap.from(".about-col-1", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
      gsap.from(".about-col-2", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
      gsap.from(".about-col-3", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-[120px] bg-[#F9F5EC] overflow-hidden font-sans relative"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Block */}
        <div className="about-header mb-16 max-w-[800px]">
          <span
            className="text-[var(--secondary)] text-3xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Our mission
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0">
            BRINGING HOPE AND<br />SUPPORT TO COMMUNITIES
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Column 1 */}
          <div className="about-col-1 flex flex-col gap-8">
            <div className="relative w-full h-[280px] rounded-[2rem] overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="Children laughing"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-[#5c4a3c] text-[17px] leading-[1.7] font-serif m-0 pr-4">
              Since 1994, we have supported more than 1,000 local partners to
              reach more than 15 million children, and we're working with new
              organizations all the time.
            </p>
            <div>
              <ButtonLetterRoll
                text="Learn More"
                href="/templates/template-9/about"
                bgColor="var(--primary)"
                textColor="#ffffff"
                borderColor="var(--primary)"
                hoverBgColor="#2b1f18"
                hoverTextColor="#ffffff"
                hoverBorderColor="#2b1f18"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="about-col-2 flex flex-col gap-6">
            {/* Card 1 */}
            <div className="relative w-full h-[320px] rounded-[2rem] overflow-hidden shadow-md group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
                alt="Sharing"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-white text-2xl font-black uppercase tracking-tight">
                  Sharing
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full h-[240px] rounded-[2rem] overflow-hidden shadow-md group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                alt="Donation"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-white text-2xl font-black uppercase tracking-tight">
                  Donation
                </span>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="about-col-3 flex flex-col gap-8 items-center lg:items-start">
            {/* Floating Heart Icon Area */}
            <div className="w-[140px] h-[140px] relative flex items-center justify-center -mt-6">
              {/* Hand-drawn outline heart with orange sun rays */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[var(--primary)] fill-none stroke-current"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Rays */}
                <path d="M50,15 L50,5" />
                <path d="M72,25 L79,18" />
                <path d="M85,50 L95,50" />
                <path d="M72,75 L79,82" />
                <path d="M50,85 L50,95" />
                <path d="M28,75 L21,82" />
                <path d="M15,50 L5,50" />
                <path d="M28,25 L21,18" />
                {/* Heart */}
                <path
                  d="M50,37 C50,37 42,25 32,25 C22,25 18,34 18,44 C18,60 50,75 50,75 C50,75 82,60 82,44 C82,34 78,25 68,25 C58,25 50,37 50,37 Z"
                  fill="none"
                />
              </svg>
            </div>

            {/* Card 3 */}
            <div className="relative w-full h-[360px] rounded-[2rem] overflow-hidden shadow-md group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
                alt="Community"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 z-10">
                <span className="text-white text-2xl font-black uppercase tracking-tight">
                  Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
