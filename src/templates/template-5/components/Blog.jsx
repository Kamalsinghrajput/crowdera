"use client";
import React from "react";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BLOGS = [
  {
    date: "10 Aug 2024",
    title: "We Believe That Knowledge Is A Catalyst For Change.",
    category: "Education",
    comments: "02 Comment",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=700&h=500",
  },
  {
    date: "22 Aug 2024",
    title: "We'll Is Explore The Broader Issues That Our Charity.",
    category: "Medical",
    comments: "02 Comment",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=700&h=500",
  },
  {
    date: "15 Mar 2024",
    title: "Example Is Our Recent Food Distribution Program.",
    category: "Food",
    comments: "02 Comment",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=700&h=500",
  },
];

export default function Blog({ isAllBlogsPage }) {
  return (
    <section className="py-24 bg-[var(--secondary-bg-color)]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[13px] uppercase tracking-[1px] px-5 py-2 rounded-full mb-5">
            OUR BLOG/NEWS
          </div>
          <h2 className="font-['Montserrat'] font-extrabold text-[clamp(32px,4vw,46px)] text-[var(--bg-color)] leading-tight max-w-[800px] mx-auto m-0">
            Latest News & Articles
          </h2>
        </div>

        {/* Blog Grid (1 card per row) */}
        <div className="flex flex-col gap-8 mb-16 max-w-[900px] mx-auto">
          {BLOGS.map((blogData, index) => (
            <BlogCard key={index} blogData={blogData} />
          ))}
        </div>

        {/* Section CTA */}
        {!isAllBlogsPage && (
          <div className="text-center">
            <Link href="/templates/template-5/blog">
              <a className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[15px] uppercase px-12 py-[20px] transition-colors duration-300 hover:bg-[var(--secondary)] no-underline shadow-lg rounded-full">
                READ MORE
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
