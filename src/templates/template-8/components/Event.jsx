"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const EVENTS = [
  {
    category: "Food & Transport",
    title: "Child Trouble & Care",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 row-span-1 h-[280px]",
    grayscale: false,
  },
  {
    category: "Health & Food",
    title: "Health Care Program",
    img: "https://images.unsplash.com/photo-1504159506876-f8338247a1ce?auto=format&fit=crop&w=800&q=80",
    gridClass: "col-span-1 row-span-1 h-[280px]",
    grayscale: true,
  },
  {
    category: "Education & Food",
    title: "Education & Safety Program",
    img: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80",
    gridClass:
      "col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 h-[280px] lg:h-full min-h-[280px]",
    grayscale: false,
  },
  {
    category: "Transport & Food",
    title: "Transport & Food Program",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1200&q=80",
    gridClass: "col-span-1 lg:col-span-2 row-span-1 h-[280px]",
    grayscale: false,
  },
];

export default function Event({ isAllEventsPage }) {
  return (
    <section className="py-[120px] bg-white relative overflow-hidden font-sans">
      {/* Background faint golden heart decoration */}
      <div className="absolute top-1/2 left-[-150px] -translate-y-1/2 opacity-30 pointer-events-none z-0">
        <svg
          width="400"
          height="400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--secondary)"
          strokeWidth="0.4"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
          <path d="M5 20 Q 12 24 19 18" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-bold text-[15px] mb-3 block">
            Join Us for Exciting Experiences
          </span>
          <h2 className="text-[#1a2b28] text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.2] mb-6">
            Upcoming Events And
            <br />
            Activities
          </h2>
          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[2px] bg-[var(--primary)] opacity-60"></div>
            <div className="text-[var(--primary)]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  strokeLinejoin="round"
                />
                <path d="M7 21h10" strokeLinecap="round" />
                <path d="M12 15v6" strokeLinecap="round" />
              </svg>
            </div>
            <div className="w-16 h-[2px] bg-[var(--primary)] opacity-60"></div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-auto">
          {EVENTS.map((event, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl overflow-hidden group shadow-lg ${event.gridClass}`}
            >
              <Image
                src={event.img}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className={`group-hover:scale-105 transition-transform duration-700 ease-out ${event.grayscale ? "grayscale" : ""}`}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Top Right Arrow Button */}
              <Link href="/templates/template-8/initiatives?tab=events">
                <a className="absolute top-6 right-6 w-[45px] h-[45px] rounded-full bg-[var(--secondary)] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                  <FiArrowUpRight className="text-black" size={22} />
                </a>
              </Link>

              {/* Bottom Content */}
              <div className="absolute bottom-8 left-8 pr-8">
                <span className="text-white text-[13px] font-medium mb-2 block tracking-wide">
                  {event.category}
                </span>
                <h3 className="text-[var(--secondary)] text-[22px] font-bold m-0 leading-tight">
                  {event.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Area: Awards & Explore All */}
        {!isAllEventsPage && (
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-white pt-8 border-t border-transparent">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-[#1a2b28] text-[32px] font-extrabold mb-3">
                400+ Winning Awards
              </h3>
              <p className="text-[#666] text-[17px] max-w-[450px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                cumque.
              </p>
            </div>

            <div>
              <Link href="/templates/template-8/initiatives?tab=events">
                <a className="inline-block px-10 py-[18px] bg-[var(--secondary)] text-black font-bold text-[17px] transition-colors hover:brightness-95 shadow-sm">
                  Explore All
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
