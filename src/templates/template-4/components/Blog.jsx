"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { FiUser, FiMessageCircle, FiArrowRight } from "react-icons/fi";

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

// Card width (350px) + gap between cards (32px) = 382px stride per slide
const CARD_WIDTH = 382;

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-[350px] flex-shrink-0">
      {/* IMAGE */}
      <div className="w-full h-[220px] overflow-hidden rounded-t-2xl">
        <Image
          src={`${blog.img}?auto=format&fit=crop&crop=center&w=700&h=440&q=80`}
          alt={blog.title}
          width={350}
          height={220}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* BADGES */}
      <div className="flex justify-center gap-3 -mt-[18px] relative z-10 whitespace-nowrap">
        <span className="bg-[#0f2e2c] text-white text-xs px-5 py-2 rounded-full shadow-md">
          {blog.category}
        </span>
        <span className="bg-[#0f2e2c] text-white text-xs px-5 py-2 rounded-full shadow-md">
          {blog.date}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 pt-4 flex flex-col gap-4">
        <div className="flex gap-5 text-sm text-gray-500 items-center">
          <span className="flex items-center gap-1">
            <FiUser /> By {blog.by}
          </span>
          <span className="flex items-center gap-1">
            <FiMessageCircle /> {blog.comments} Comment
          </span>
        </div>

        <h3 className="text-[20px] font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h3>

        <span className="text-sm font-medium mt-2 flex items-center gap-2 cursor-pointer">
          Read More <FiArrowRight />
        </span>
      </div>
    </div>
  );
}

export default function BlogCarousel({ isAllBlogsPage }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const data = [...BLOGS, ...BLOGS];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(trackRef.current, {
      x: -index * CARD_WIDTH,
      duration: 0.6,
      ease: "power3.inOut",
    });

    if (index >= BLOGS.length) {
      setTimeout(() => {
        gsap.set(trackRef.current, { x: 0 });
        setIndex(0);
      }, 700);
    }
  }, [index]);

  return (
    <section className="bg-[#f5f7f6] py-[100px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-500 flex justify-center items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            Our Latest Blog
          </p>
          <h2 className="text-[40px] font-semibold">How Collective Efforts</h2>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" style={{ paddingBottom: "20px" }}>
          <div ref={trackRef} className="flex gap-8">
            {data.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {BLOGS.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm transition-colors duration-300 ${
                i === index % BLOGS.length ? "bg-orange-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* View All Blogs CTA */}
        {!isAllBlogsPage && (
          <div className="flex justify-center mt-16 relative z-10">
            <Link href="/templates/template-4/blog">
              <a className="t2-btn t2-btn-secondary">
                <span>View All Blogs</span>
                <i>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </i>
              </a>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
