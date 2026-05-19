"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";

export default function CauseCard({ course }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2); // -1 to 1
    const y = (e.clientY - top - height / 2) / (height / 2); // -1 to 1

    gsap.to(cardRef.current, {
      rotateX: -y * 10,
      rotateY: x * 10,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center center",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white rounded-2xl shadow-sm flex flex-col h-full border border-gray-100 group relative"
      style={{ willChange: "transform" }}
    >
      {/* Image container */}
      <div className="relative w-full h-[240px] rounded-t-2xl overflow-hidden">
        <Image
          src={course.img}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Category Badge */}
      <div className="absolute top-[220px] right-6 bg-[#007b5e] group-hover:bg-[var(--secondary)] transition-colors duration-300 text-white font-bold text-[15px] px-6 py-2 rounded-md shadow-md z-10 pointer-events-none">
        {course.tag}
      </div>

      {/* Body */}
      <div className="p-8 pt-10 flex flex-col flex-grow">
        <h3 className="font-extrabold text-[20px] text-black mb-3">
          {course.title}
        </h3>
        <p className="text-[#666666] text-[17px] leading-[1.6] mb-6 flex-grow">
          Lorem ipsum dolor sit amet, consete sadipscing elitr, sed diam nonum
        </p>

        {/* Progress Area */}
        <div className="bg-[#f8f9fa] rounded-lg p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#333333] font-bold text-[15px]">
              Donation
            </span>
            <span className="text-[#333333] font-bold text-[15px]">
              {course.percent}%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#e5e5e5] h-[8px] rounded-full mb-3">
            <div
              className="bg-black h-full rounded-full"
              style={{ width: `${course.percent}%` }}
            />
          </div>

          <div className="flex justify-between items-center text-[13px] font-medium">
            <span className="text-[#666]">Raised: {course.raised}</span>
            <span className="text-[#666]">
              Goal:{" "}
              <span className="text-[var(--secondary)] font-bold">{course.goal}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <Link href={`/causes/${course.id}`}>
        <a className="w-full bg-[#007b5e] hover:bg-[var(--secondary)] transition-colors duration-300 text-white font-bold text-[17px] px-8 py-5 rounded-b-2xl flex items-center justify-between mt-auto">
          Donate Now
          <FiArrowUpRight size={20} />
        </a>
      </Link>
    </div>
  );
}
