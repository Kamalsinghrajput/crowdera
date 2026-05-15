"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import BlogCard from "./BlogCard";

const BLOGS = [
  {
    date: "10 Aug 2024",
    by: "Cane Anderson",
    comments: "02",
    category: "Food",
    title: "The Impact Of Our Community Doesn't Stop At Food.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
  },
  {
    date: "10 Aug 2024",
    by: "Cane Anderson",
    comments: "02",
    category: "Food",
    title: "One Such Example Is Our Recent Food Distribution.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
  {
    date: "10 Aug 2024",
    by: "Cane Anderson",
    comments: "02",
    category: "Food",
    title: "We Believe That Knowledge Is A Catalyst For Change.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
  },
  {
    date: "10 Aug 2024",
    by: "Cane Anderson",
    comments: "02",
    category: "Food",
    title: "Helping Communities Grow Together.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
  },
];

const CARD_WIDTH = 382; // 350px + 32px gap

export default function Blog({ isAllBlogsPage }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const carouselData = [...BLOGS, ...BLOGS];
  const gridData = [...BLOGS, ...BLOGS];

  useEffect(() => {
    if (!isAllBlogsPage) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isAllBlogsPage]);

  useEffect(() => {
    if (!isAllBlogsPage && trackRef.current) {
      gsap.to(trackRef.current, {
        x: -index * CARD_WIDTH,
        duration: 0.8,
        ease: "power3.inOut",
      });

      if (index >= BLOGS.length) {
        setTimeout(() => {
          gsap.set(trackRef.current, { x: 0 });
          setIndex(0);
        }, 850);
      }
    }
  }, [index, isAllBlogsPage]);

  return (
    <section className="bg-[#f9f9f9] py-[120px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* HEADER - Only on Homepage */}
        {!isAllBlogsPage && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#FFA415]" />
              <span className="text-[16px] text-[#121d18] italic font-semibold">
                Our Latest Blog
              </span>
            </div>
            <h2 className="text-[clamp(32px,4vw,48px)] font-bold text-[#121d18] leading-tight">
              How Collective Efforts<br />Change Lives
            </h2>
          </div>
        )}

        {isAllBlogsPage ? (
          /* GRID MODE */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridData.map((blog, i) => (
              <BlogCard key={i} blog={blog} isCarousel={false} />
            ))}
          </div>
        ) : (
          /* CAROUSEL MODE */
          <>
            <div className="overflow-hidden" style={{ paddingBottom: "20px" }}>
              <div ref={trackRef} className="flex gap-8">
                {carouselData.map((blog, i) => (
                  <BlogCard key={i} blog={blog} isCarousel={true} />
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="flex justify-center mt-8 gap-3">
              {BLOGS.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-1 rounded-full transition-all duration-300 ${
                    i === index % BLOGS.length ? "bg-[#FFA415] w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* View All Blogs CTA */}
            <div className="flex justify-center mt-16 relative z-10">
              <Link href="/templates/template-4/blog">
                <a className="t2-btn t2-btn-secondary">
                  <span>View All Blogs</span>
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
