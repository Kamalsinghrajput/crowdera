"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CauseCard({ course, index }) {
  // Tilted image values matching the screenshot, straightens out beautifully on hover!
  const tilts = ["rotate-[2.5deg]", "rotate-[-2.2deg]", "rotate-[1.8deg]"];
  const currentTilt = tilts[index % tilts.length] || "rotate-[2deg]";

  return (
    <div className="bg-white rounded-[2.5rem] pt-6 px-6 pb-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-black/[0.03] flex flex-col h-full group relative overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300">
      
      {/* Inset Tilted Image Wrapper */}
      <div className="relative w-full h-[220px] rounded-[2rem] overflow-hidden mb-6 bg-black/5">
        <div className={`relative w-full h-full transform transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 ${currentTilt}`}>
          <Image
            src={course.img}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="brightness-95"
          />
        </div>
      </div>

      {/* Category Tag Badge */}
      <div className="inline-block self-start bg-[var(--primary)] text-white font-black text-[9px] px-4 py-2 rounded-full mb-4 tracking-wider uppercase">
        {course.tag}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        <Link href={`/templates/template-6/initiatives?tab=campaigns`}>
          <h3 className="font-black text-2xl text-[#2b1f18] leading-[1.2] tracking-tight mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
            {course.title}
          </h3>
        </Link>
        
        <p className="text-[#5c4a3c]/80 text-[15px] leading-[1.65] font-serif mb-6 flex-grow">
          Each charity program is designed to create meaningful impact in communities through targeted aid, local empowerment, and sustainable support.
        </p>

        {/* Flush beige Progress Strip at bottom */}
        <div className="bg-[#fbf7ee] -mx-6 mt-auto px-6 py-5 rounded-b-[2.5rem] border-t border-black/[0.03] flex flex-col gap-3">
          
          {/* Text Values */}
          <div className="flex justify-between items-baseline text-xs font-black uppercase text-gray-500 tracking-wider">
            <div>
              <span className="text-base text-[#2b1f18] font-black">{course.raised}</span> of {course.goal}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-black/[0.06] h-[6px] rounded-full overflow-hidden">
            <div
              className="bg-[var(--primary)] h-full rounded-full transition-all duration-1000"
              style={{ width: `${Math.min(100, course.percent)}%` }}
            />
          </div>

          {/* Duration info */}
          <div className="flex justify-end text-[10px] font-black uppercase text-gray-400 tracking-widest">
            <span>{course.duration}</span>
          </div>

        </div>

      </div>

    </div>
  );
}
