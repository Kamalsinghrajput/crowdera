"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function BlogCard({ blogData }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-xl transition-all duration-300 group relative z-0">
      {/* Animated Green Background Overlay */}
      <div className="absolute inset-0 bg-[var(--primary)] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out -z-10" />

      {/* Thumbnail */}
      <div className="w-full md:w-[40%] relative min-h-[250px] overflow-hidden flex-shrink-0 z-10">
        <Image
          src={blogData.img}
          alt={blogData.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Date badge on image */}
        <div className="absolute top-4 left-4 bg-[var(--secondary)] text-black font-bold text-[12px] uppercase px-3 py-1 rounded">
          {blogData.date}
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-center z-10">
        {/* Meta */}
        <p className="font-['Inter'] text-[12px] text-[#999999] group-hover:text-[rgba(255,255,255,0.7)] transition-colors duration-500 uppercase font-bold tracking-widest mb-3">
          USER BY: ADMIN
        </p>

        {/* Title */}
        <Link href="/templates/template-6/blog">
          <a className="font-['Montserrat'] font-extrabold text-[24px] leading-[1.3] text-black group-hover:text-white transition-colors duration-500 line-clamp-2 mb-4 no-underline">
            {blogData.title}
          </a>
        </Link>

        {/* Excerpt/Category as placeholder */}
        <p className="font-['Inter'] text-[var(--text-color)] group-hover:text-white transition-colors duration-500 text-[17px] leading-[1.8] line-clamp-2 mb-8">
          We explore the broader issues that affect our community and discuss
          how collective efforts can make a massive impact in areas like{" "}
          {blogData.category}.
        </p>

        {/* CTA */}
        <Link href="/templates/template-6/blog">
          <a className="inline-flex items-center gap-2 font-extrabold text-[15px] text-[var(--bg-color)] group-hover:text-white transition-colors duration-500 uppercase tracking-[1px] no-underline mt-auto">
            <span>READ MORE</span>
            <FiArrowRight
              size={18}
              strokeWidth={3}
              className="text-[var(--primary)] group-hover:text-white transition-colors"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
