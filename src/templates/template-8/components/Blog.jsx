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
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#005e46] font-bold text-[17px] uppercase tracking-wider mb-3 block">
            OUR BLOG/NEWS
          </span>
          <h2 className="font-extrabold text-[clamp(32px,4vw,46px)] text-[#1A1A1A] leading-tight max-w-[800px] mx-auto m-0">
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
          <div className="text-center mt-12">
            <Link href="/templates/template-8/blog">
              <a className="inline-block bg-[#d9a96e] text-black font-bold text-[17px] px-10 py-5 rounded-md transition-all hover:bg-[#c4965d] hover:shadow-lg no-underline uppercase tracking-wider">
                READ MORE
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
