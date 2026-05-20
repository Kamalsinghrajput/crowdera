"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const EVENTS = [
  {
    category: "Food & Transport",
    title: "Child Trouble & Care",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Health & Food",
    title: "Health Care Program",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Education & Food",
    title: "Education & Safety Program",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
  },
];

// Slight tilt on each card — alternates so they look natural when flying in
const CARD_TILTS = [-4, 3, -2.5];

export default function Event({ isAllEventsPage }) {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Set initial positions: all cards far off-screen to the left, tilted
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        gsap.set(card, {
          x: 800 + idx * 120,
          rotation: CARD_TILTS[idx],
          opacity: 0,
        });
      });

      // Pin the entire container while cards fly in one by one
      const totalScrollTrack = EVENTS.length * 400; // 400px of scroll per card

      const triggerInstance = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalScrollTrack}`,
        pin: true,
        scrub: 0.8,
        onUpdate: (self) => {
          const progress = self.progress;
          const segmentSize = 1 / EVENTS.length;

          cardsRef.current.forEach((card, idx) => {
            if (!card) return;
            const cardStart = idx * segmentSize;
            const cardEnd = cardStart + segmentSize;

            // Local progress within each card's window (0 -> 1)
            const localProgress = Math.max(
              0,
              Math.min(1, (progress - cardStart) / segmentSize)
            );

            // Fly in: x from right (+800) to 0, rotation from tilt to 0, opacity 0 to 1
            gsap.set(card, {
              x: gsap.utils.interpolate(800 + idx * 120, 0, localProgress),
              rotation: gsap.utils.interpolate(CARD_TILTS[idx], 0, localProgress),
              opacity: localProgress,
            });
          });
        },
      });

      // Style the spacer background to prevent white gap
      if (triggerInstance.spacer) {
        triggerInstance.spacer.style.backgroundColor = "#F9F5EC";
      }
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#F9F5EC]"
    >
      <section className="w-full h-auto lg:h-[820px] flex flex-col font-sans relative z-20">
        
        {/* Ghost Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="text-[14vw] font-black text-[#2b1f18]/[0.03] tracking-[1.5rem] uppercase leading-none">
            EVENTS
          </span>
        </div>

        <div className="max-w-[1300px] w-full mx-auto px-8 lg:px-16 relative z-10 flex flex-col h-full py-16 lg:py-20">

          {/* Section Header */}
          <div className="mb-14">
            <span
              className="text-[var(--secondary)] text-3xl font-normal block mb-4"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Get Involved
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0 max-w-[700px]">
                UPCOMING EVENTS & ACTIVITIES
              </h2>
              {!isAllEventsPage && (
                <div className="hidden lg:block shrink-0">
                  <ButtonLetterRoll
                    text="View All Events"
                    href="/templates/template-6/initiatives?tab=events"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Cards Row — cards fly in from left on scroll */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 flex-grow items-stretch">
            {EVENTS.map((event, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative rounded-[2.5rem] overflow-hidden group shadow-lg flex-1 h-[280px] lg:h-auto min-h-[280px] will-change-transform cursor-pointer"
                style={{
                  // On mobile, show normally without tilt animation
                }}
              >
                <Image
                  src={event.img}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Top Right Arrow Button */}
                <Link href="/templates/template-6/initiatives?tab=events">
                  <a className="absolute top-6 right-6 w-[45px] h-[45px] rounded-full bg-[var(--secondary)] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md z-10">
                    <FiArrowUpRight className="text-black" size={22} />
                  </a>
                </Link>

                {/* Bottom Content */}
                <div className="absolute bottom-8 left-8 pr-8 z-10">
                  <span className="text-white/70 text-[11px] font-black mb-2 block tracking-widest uppercase">
                    {event.category}
                  </span>
                  <h3 className="text-white text-[22px] font-black m-0 leading-tight group-hover:text-[var(--secondary)] transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                {/* Card index number */}
                <div className="absolute top-6 left-8 text-white/20 font-black text-6xl leading-none pointer-events-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View All Button */}
          {!isAllEventsPage && (
            <div className="mt-10 lg:hidden text-center">
              <ButtonLetterRoll
                text="View All Events"
                href="/templates/template-6/initiatives?tab=events"
              />
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
