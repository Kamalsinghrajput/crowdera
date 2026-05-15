"use client";
import Link from "next/link";
import { useState } from "react";
import FloatingBird from "./FloatingBird";

const BLOGS = [
  {
    date: "10 Aug 2024",
    day: "10",
    month: "Aug 2024",
    by: "Cane Anderson",
    comments: "02",
    category: "Charity",
    title: "One such example is our recent food distribution program.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "25 June 2024",
    day: "25",
    month: "June 2024",
    by: "Ronald Richards",
    comments: "05",
    category: "Volunteer",
    title: "The impact of our community doesn't stop at food distribution.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "15 March 2024",
    day: "15",
    month: "March 2024",
    by: "Courtney Henry",
    comments: "08",
    category: "Education",
    title:
      "These stories are just a few examples of how powerful change can be.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
  },
];

function BlogCard({ blog }) {
  return (
    <div className="group flex flex-col transition-all duration-350">
      {/* Image */}
      <div className="relative h-[280px] overflow-hidden w-full">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay to ensure date visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-0 pointer-events-none" />

        {/* Date badge with brush stroke style background */}
        <div className="absolute bottom-5 left-5 z-10">
          <div
            className="absolute inset-0 bg-[var(--bg-color)]"
            style={{
              maskImage: "url(/assets/template-2-stats.svg)",
              maskSize: "100% 100%",
              WebkitMaskImage: "url(/assets/template-2-stats.svg)",
              WebkitMaskSize: "100% 100%",
            }}
          />
          <div className="relative px-5 py-2.5 flex items-center justify-center">
            <span className="text-[18px] text-white tracking-wide font-extrabold">
              {blog.date}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-6 pb-2 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex gap-5 mb-4">
          <span className="flex items-center gap-2 text-[13px] text-[#6c6e76]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            By {blog.by}
          </span>
          <span className="flex items-center gap-2 text-[13px] text-[#6c6e76]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {blog.comments} Comment
          </span>
        </div>

        <h3 className="text-[22px] text-[var(--bg-color)] leading-[1.4] mb-6 pr-4">
          <Link href="#" passHref>
            <a className="transition-colors duration-300 group-hover:text-t2-secondary">
              {blog.title}
            </a>
          </Link>
        </h3>

        <div className="h-px w-full bg-[#E8E8E8] mb-6 mt-auto" />

        {/* Read more button */}
        <Link href="#" passHref>
          <a
            className="t2-btn"
            // style={{ transform: "scale(0.85)", transformOrigin: "left center" }}
          >
            <span>Read More</span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default function BLog() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  return (
    <section className="bg-white py-[120px] relative">
      <FloatingBird position="left" />
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Top row: title left, button right */}
        <div className="flex flex-wrap justify-between items-end gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
              <span className="text-[16px] text-[var(--bg-color)] italic">
                Our Blog
              </span>
            </div>
            <h2 className="text-[clamp(28px,4vw,52px)] leading-[1.2] text-[var(--bg-color)] m-0">
              Latest News &amp; Inspiring
              <br /> Stories.
            </h2>
          </div>

          <Link href="/templates/template-2/blog" passHref>
            <a className="t2-btn">
              <span>See All Blog</span>
            </a>
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {BLOGS.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}
