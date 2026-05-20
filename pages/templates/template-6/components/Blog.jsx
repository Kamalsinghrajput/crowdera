"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ButtonLetterRoll from "./ButtonLetterRoll";

const POSTS = [
  {
    tag: "NONPROFIT TRENDS",
    date: "10 MAR, 2026",
    title: "Donating Money vs Volunteering: Which Helps More?",
    desc: "We analyze the unique benefits of financial contributions versus active volunteering to help you choose the best way to make a difference.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    large: true,
  },
  {
    tag: "STORIES",
    date: "10 MAR, 2026",
    title: "Bringing Hope to Victims of the LA Fires",
    desc: "A first-hand look at the relief efforts, community resilience, and volunteer forces bringing hope and support to LA fire victims.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "FUNDRAISING",
    date: "10 MAR, 2026",
    title: "Volunteering 101: How to Start Helping Today",
    desc: "Everything you need to know about getting started with volunteering, finding the right causes, and making a lasting personal impact.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "NONPROFIT INNOVATION",
    date: "10 MAR, 2026",
    title: "Blending Social Innovation with Charity Work",
    desc: "How modern social innovators are combining technology, sustainable business models, and heart to redefine traditional charity systems.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "FUNDRAISING",
    date: "12 MAR, 2026",
    title: "5 Ways to Make Your Next Donation Count",
    desc: "Maximize the value of your charitable contributions. Learn how to research nonprofits, track impact, and distribute funds effectively.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "EDUCATION",
    date: "14 MAR, 2026",
    title: "Empowering Kids Through Local Education Hubs",
    desc: "Local education hubs are providing underserved children with safe spaces, digital access, and personalized mentorship for a brighter future.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "ENVIRONMENT",
    date: "18 MAR, 2026",
    title: "Clean Water Initiatives: A Global Lifeline",
    desc: "Access to clean water is a fundamental right. We cover the global initiatives deploying sustainable water systems in remote communities.",
    img: "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "COMMUNITY",
    date: "20 MAR, 2026",
    title: "Behind the Scenes of a Local Food Bank",
    desc: "An inside look at how food banks manage resources, distribute nutrition, and build community hubs to fight hunger in local neighborhoods.",
    img: "https://images.unsplash.com/photo-1599059813005-11265ba4b2e9?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
  {
    tag: "INNOVATION",
    date: "22 MAR, 2026",
    title: "How Modern Tech is Transforming Charity Projects",
    desc: "From blockchain donation tracking to AI-driven volunteer matching, discover how technology is optimizing modern humanitarian workflows.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    large: false,
  },
];

export default function Blog({ isAllBlogsPage }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (isAllBlogsPage) {
        // Grid items stagger animation
        gsap.fromTo(
          ".blog-grid-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          },
        );
      } else {
        // Header slides up
        gsap.fromTo(
          ".blog-header",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
          },
        );

        // Left large card
        gsap.fromTo(
          ".blog-card-main",
          { y: 70, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          },
        );

        // Right stack items stagger
        gsap.fromTo(
          ".blog-stack-item",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.2,
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isAllBlogsPage]);

  return (
    <section
      ref={sectionRef}
      className={`bg-[#F9F5EC] ${isAllBlogsPage ? "py-[80px]" : "py-[120px]"} font-sans relative overflow-hidden z-20 border-t border-black/5`}
    >
      {/* Ghost Watermark */}
      <div className="absolute top-[60px] left-0 right-0 text-center pointer-events-none select-none z-0">
        <span className="text-[11vw] font-black text-[#2b1f18]/[0.025] tracking-[1.5rem] uppercase block leading-none">
          STORIES
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header Block */}
        {!isAllBlogsPage && (
          <div className="blog-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span
                className="text-[var(--secondary)] text-3xl font-normal block mb-4"
                style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
              >
                Our blog
              </span>
              <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0">
                INSIGHTS &amp; STORIES
              </h2>
            </div>

            <div className="hidden lg:block">
              <ButtonLetterRoll
                text="View All Posts"
                href="/templates/template-9/blog"
              />
            </div>
          </div>
        )}

        {/* Layout Grid */}
        {isAllBlogsPage ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, index) => (
              <div
                key={index}
                className="blog-grid-item bg-white rounded-[2.5rem] overflow-hidden flex flex-col group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
              >
                <Link href="/templates/template-9/blog">
                  <a className="flex flex-col h-full">
                    {/* Thumbnail */}
                    <div className="relative w-full h-[240px] overflow-hidden">
                      {post.img ? (
                        <Image
                          src={post.img}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-black text-2xl">
                          {post.tag}
                        </div>
                      )}
                      {/* Subtle gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content Container */}
                    <div className="p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="bg-[var(--secondary)] text-[#2b1f18] text-[12px] font-black px-4 py-2 rounded-full uppercase tracking-wider">
                            {post.tag}
                          </span>
                          <span className="text-[13px] font-bold text-gray-600 uppercase tracking-widest">
                            {post.date}
                          </span>
                        </div>

                        <h3 className="text-2xl lg:text-[25px] font-black text-[#2b1f18] leading-[1.25] tracking-tight uppercase m-0 group-hover:text-[var(--primary)] transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-[#2b1f18]/80 text-[15px] font-normal leading-[1.65] font-sans mt-3 line-clamp-3">
                          {post.desc}
                        </p>
                      </div>

                      {/* Read More button style */}
                      <div className="mt-8 flex items-center gap-2 text-[14px] font-black uppercase text-[#2b1f18] group-hover:text-[var(--primary)] transition-colors duration-300">
                        <span>Read Story</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column (7/12) - Giant Highlight Card */}
            <div className="blog-card-main lg:col-span-7 flex flex-col group cursor-pointer">
              <Link href="/templates/template-9/blog">
                <a>
                  <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden mb-6 shadow-md">
                    <Image
                      src={POSTS[0].img}
                      alt={POSTS[0].title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    {/* Subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className="bg-[var(--secondary)] text-[#2b1f18] text-[13px] font-black rounded-full uppercase tracking-wider"
                      style={{ padding: "10px" }}
                    >
                      {POSTS[0].tag}
                    </span>
                    <span className="text-[14px] font-bold text-gray-600 uppercase tracking-widest">
                      {POSTS[0].date} • BY ADMIN
                    </span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-black text-[#2b1f18] leading-[1.1] tracking-tight uppercase m-0 group-hover:text-[var(--primary)] transition-colors duration-300">
                    {POSTS[0].title}
                  </h3>

                  <p className="text-[#2b1f18]/80 text-[16px] font-normal leading-[1.65] font-sans mt-4 max-w-[620px]">
                    {POSTS[0].desc}
                  </p>
                </a>
              </Link>
            </div>

            {/* Right Column (5/12) - Secondary Stacked List */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Item with image */}
              <div className="blog-stack-item flex flex-col group cursor-pointer">
                <Link href="/templates/template-9/blog">
                  <a>
                    <div className="relative w-full h-[190px] rounded-[1.8rem] overflow-hidden mb-4 shadow-sm">
                      <Image
                        src={POSTS[1].img}
                        alt={POSTS[1].title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="bg-[var(--secondary)] text-[#2b1f18] text-[12px] font-black px-4 py-2 rounded-full uppercase tracking-wider">
                        {POSTS[1].tag}
                      </span>
                      <span className="text-[13px] font-bold text-gray-600 uppercase tracking-wider">
                        {POSTS[1].date} • BY ADMIN
                      </span>
                    </div>
                    <h4 className="text-2xl font-black text-[#2b1f18] leading-[1.2] uppercase m-0 group-hover:text-[var(--primary)] transition-colors duration-300">
                      {POSTS[1].title}
                    </h4>
                  </a>
                </Link>
              </div>

              <div className="w-full h-[1px] bg-black/[0.08]" />

              {/* Text-only items */}
              {POSTS.slice(2, 4).map((post, i) => (
                <React.Fragment key={i}>
                  <div className="blog-stack-item flex flex-col group cursor-pointer">
                    <Link href="/templates/template-9/blog">
                      <a>
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="bg-[var(--secondary)] text-[#2b1f18] text-[12px] font-black px-4 py-2 rounded-full uppercase tracking-wider">
                            {post.tag}
                          </span>
                          <span className="text-[13px] font-bold text-gray-600 uppercase tracking-wider">
                            {post.date} • BY ADMIN
                          </span>
                        </div>
                        <h4 className="text-2xl font-black text-[#2b1f18] leading-[1.2] uppercase m-0 group-hover:text-[var(--primary)] transition-colors duration-300">
                          {post.title}
                        </h4>
                      </a>
                    </Link>
                  </div>
                  {i < 1 && <div className="w-full h-[1px] bg-black/[0.08]" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Mobile View All */}
        {!isAllBlogsPage && (
          <div className="mt-12 text-center lg:hidden">
            <ButtonLetterRoll
              text="View All Posts"
              href="/templates/template-9/blog"
            />
          </div>
        )}
      </div>
    </section>
  );
}
