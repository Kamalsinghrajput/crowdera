"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CauseCard({ course }) {
  return (
    <div className="group flex flex-col bg-transparent rounded-lg overflow-hidden h-full">
      {/* Top: White Content Box */}
      <div className="bg-white px-8 pt-8 pb-10 flex-1 flex flex-col rounded-t-lg transition-shadow duration-300 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] relative z-10">
        {/* Category Tag */}
        <div className="inline-block self-start bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[12px] uppercase px-4 py-[6px] rounded-full mb-4">
          {course.tag}
        </div>

        {/* Title */}
        <Link href={`/templates/template-5/causes`}>
          <a className="font-['Montserrat'] font-extrabold text-[22px] text-[var(--bg-color)] leading-[1.3] mb-2 no-underline hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
            {course.title}
          </a>
        </Link>

        {/* Meta */}
        <p className="font-['Inter'] text-[#999999] text-[15px] mb-6">
          By : admin
        </p>

        {/* Progress Bar Container */}
        <div className="mt-auto">
          <div className="relative w-full h-[4px] bg-[#eeeeee] rounded-full mb-4 mt-8">
            <div
              className="absolute top-0 left-0 h-full bg-[var(--secondary)] rounded-full"
              style={{ width: `${course.percent}%` }}
            >
              {/* The Knob */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[12px] h-[12px] bg-[var(--secondary)] rounded-full" />
              {/* Percentage Label */}
              <div className="absolute right-0 bottom-full mb-2 translate-x-1/2 font-['Montserrat'] font-bold text-[15px] text-[var(--bg-color)]">
                {course.percent}%
              </div>
            </div>
          </div>

          {/* Donation Labels */}
          <div className="flex items-center gap-1 font-['Inter'] text-[17px] mb-8">
            <span className="text-[var(--secondary)] font-bold">
              ${course.raised}
            </span>
            <span className="text-[#666666]">donated of</span>
            <span className="text-[var(--bg-color)] font-bold">
              ${course.goal}
            </span>
            <span className="text-[var(--bg-color)] font-bold">goal</span>
          </div>

          {/* CTA Link */}
          <Link href="/templates/template-5/causes">
            <a className="inline-flex items-center gap-2 font-['Montserrat'] font-extrabold text-[15px] text-[var(--bg-color)] uppercase tracking-[1px] no-underline group/cta">
              <span className="transition-colors duration-300 group-hover/cta:text-[var(--primary)]">
                READ MORE
              </span>
              <FiArrowRight
                className="transition-colors duration-300 group-hover/cta:text-[var(--primary)]"
                size={18}
                strokeWidth={3}
              />
            </a>
          </Link>
        </div>
      </div>

      {/* Bottom: Thumbnail Image */}
      <div className="relative w-full h-[240px] overflow-hidden rounded-b-lg flex-shrink-0 z-0 -mt-[1px]">
        <Image
          src={course.img}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
