"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ButtonLetterRoll from "./ButtonLetterRoll";

const POSTS = [
  {
    tag: "Blog & News",
    date: "05 SEP",
    title: "Talk About The Three Major Types Of Floor Tiles.",
    desc: "We explore the broader issues that affect our community and discuss how collective efforts can make a massive impact.",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "05"
  },
  {
    tag: "Blog & News",
    date: "09 DEC",
    title: "Big Data. Are There Any Leftovers In The Kitchen.",
    desc: "Understanding digital data and modern challenges while looking at resources and waste reduction in local communities.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "05"
  },
  {
    tag: "Blog & News",
    date: "02 NOV",
    title: "How To Improve Your Donor Conversion Rate.",
    desc: "Practical steps and marketing strategies to build donor trust, optimize landing pages, and boost fundraising campaign success.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "05"
  },
  {
    tag: "Blog & News",
    date: "10 NOV",
    title: "3 Steps To Start Your Monthly Giving Program.",
    desc: "Build a predictable revenue stream for your nonprofit with these three simple actions to retain monthly supporters.",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "05"
  },
  {
    tag: "Blog & News",
    date: "18 MAR",
    title: "Donating Money vs Volunteering: Which Helps More?",
    desc: "We analyze the unique benefits of financial contributions versus active volunteering to help you choose the best way to make a difference.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "03"
  },
  {
    tag: "Blog & News",
    date: "20 MAR",
    title: "Volunteering 101: How to Start Helping Today",
    desc: "Everything you need to know about getting started with volunteering, finding the right causes, and making a lasting personal impact.",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "02"
  },
  {
    tag: "Blog & News",
    date: "22 MAR",
    title: "Empowering Kids Through Local Education Hubs",
    desc: "Local education hubs are providing underserved children with safe spaces, digital access, and personalized mentorship for a brighter future.",
    img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "08"
  },
  {
    tag: "Blog & News",
    date: "25 MAR",
    title: "Clean Water Initiatives: A Global Lifeline",
    desc: "Access to clean water is a fundamental right. We cover the global initiatives deploying sustainable water systems in remote communities.",
    img: "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?auto=format&fit=crop&w=600&q=80",
    author: "Admin",
    comments: "04"
  }
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

        // Grid items stagger animation on home page
        gsap.fromTo(
          ".blog-grid-item",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
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

  const postsToShow = isAllBlogsPage ? POSTS : POSTS.slice(0, 4);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden z-20 ${
        isAllBlogsPage ? "py-[80px]" : "py-[120px]"
      } bg-gradient-to-tr from-[#FAF6FC] via-[#FFF9FA] to-[#F5F1FA] border-t border-[#8e6f9f]/5`}
    >
      {/* Topographical Contour Background lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-45">
        <svg
          className="absolute w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Nested wavy contour lines */}
          <path
            d="M-100,150 C200,100 400,250 600,180 C800,110 1000,220 1200,170 C1400,120 1500,200 1600,150"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.08"
          />
          <path
            d="M-100,220 C220,170 380,310 610,240 C840,170 980,290 1220,230 C1460,170 1520,260 1600,220"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.07"
          />
          <path
            d="M-100,290 C240,240 360,370 620,300 C880,230 960,360 1240,290 C1520,220 1540,320 1600,290"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.06"
          />
          <path
            d="M-100,360 C260,310 340,430 630,360 C920,290 940,430 1260,350 C1580,270 1560,380 1600,360"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.05"
          />
          <path
            d="M-100,430 C280,380 320,490 640,420 C960,350 920,500 1280,410 C1640,320 1580,440 1600,430"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.04"
          />
          
          {/* Topographic concentric circular ripples (like on the right & left of the image) */}
          <path
            d="M1200,100 C1250,50 1350,50 1400,100 C1450,150 1450,250 1400,300 C1350,350 1250,350 1200,300 C1150,250 1150,150 1200,100 Z"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.06"
          />
          <path
            d="M1170,80 C1230,20 1370,20 1430,80 C1490,140 1490,270 1430,330 C1370,390 1230,390 1170,330 C1110,270 1110,140 1170,80 Z"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.05"
          />
          <path
            d="M1140,60 C1210,-10 1390,-10 1460,60 C1530,130 1530,290 1460,360 C1390,430 1210,430 1140,360 C1070,290 1070,130 1140,60 Z"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.04"
          />
          
          <path
            d="M100,500 C150,450 250,450 300,500 C350,550 350,650 300,700 C250,750 150,750 100,700 C50,650 50,550 100,500 Z"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.06"
          />
          <path
            d="M70,470 C130,410 270,410 330,470 C390,530 390,660 330,720 C270,780 130,780 70,720 C10,660 10,530 70,470 Z"
            stroke="#8E6F9F"
            strokeWidth="1.2"
            strokeOpacity="0.05"
          />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header Block */}
        {!isAllBlogsPage && (
          <div className="blog-header flex flex-col items-center text-center mb-16">
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 border border-[#8E6F9F]/30 bg-[#8E6F9F]/5 px-5 py-2 rounded-full text-xs font-extrabold text-[#8E6F9F] uppercase tracking-wider shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H5v-2h4v2zm0-4H5v-2h4v2zm0-4H5V7h4v2zm10 8h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V7h8v2z" />
                </svg>
                <span>Blog & News</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[46px] font-black text-[#2b1f18] tracking-tight leading-[1.2] max-w-2xl mx-auto m-0">
              Find Out Our Insights & News
            </h2>
          </div>
        )}

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {postsToShow.map((post, index) => (
            <div
              key={index}
              className="blog-grid-item bg-white rounded-[24px] overflow-hidden flex flex-col group cursor-pointer shadow-[0_10px_30px_rgba(142,111,159,0.04)] hover:shadow-[0_15px_40px_rgba(142,111,159,0.12)] hover:-translate-y-1.5 transition-all duration-500 border border-[#8e6f9f]/10 relative"
            >
              <Link href="/templates/template-6/blog">
                <a className="flex flex-col h-full no-underline">
                  {/* Thumbnail */}
                  <div className="relative w-full h-[210px] overflow-hidden">
                    {post.img ? (
                      <Image
                        src={post.img}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-700 ease-in-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#8E6F9F] to-[#775a87] flex items-center justify-center text-white font-black text-2xl">
                        {post.tag}
                      </div>
                    )}
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-[#00D2FF] text-white font-extrabold text-[11px] uppercase px-3 py-1.5 rounded-[6px] tracking-wider shadow-sm select-none">
                      {post.date}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow relative z-10 bg-white">
                    {/* Meta Row: Author & Comments */}
                    <div className="flex items-center gap-4 mb-4 text-[#8E8595] text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#8E6F9F]/80 fill-current" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        Post By {post.author || "Admin"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-[#8E6F9F]/80 fill-current" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
                        </svg>
                        Comment ({post.comments || "05"})
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[17px] font-extrabold text-[#2b1f18] leading-[1.35] tracking-tight group-hover:text-[#8E6F9F] transition-colors duration-300 mb-6 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Action Row */}
                    <div className="mt-auto flex items-center justify-between relative">
                      <div className="inline-flex items-center justify-center bg-[var(--primary)] text-white text-[12px] font-bold px-5 py-2.5 rounded-full uppercase tracking-wider shadow-sm z-10 relative overflow-hidden group/btn">
                        <span className="absolute inset-0 w-full h-full bg-[#211823] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-left scale-x-0 group-hover/btn:scale-x-100" />
                        <span className="relative z-10">Read More</span>
                      </div>

                      {/* Faint Abstract Ornament SVG */}
                      <svg
                        className="absolute -bottom-4 -right-4 w-20 h-20 text-[#8E6F9F]/10 pointer-events-none z-0"
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      >
                        <path d="M50,10 L50,90 M10,50 L90,50" />
                        <path d="M30,30 L70,70 M30,70 L70,30" />
                        <path d="M50,25 L56,44 L75,50 L56,56 L50,75 L44,56 L25,50 L44,44 Z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        {!isAllBlogsPage && (
          <div className="mt-16 text-center">
            <ButtonLetterRoll
              text="View All Posts"
              href="/templates/template-6/blog"
              bgColor="transparent"
              textColor="var(--primary)"
              borderColor="var(--primary)"
              hoverBgColor="var(--primary)"
              hoverTextColor="#ffffff"
              hoverBorderColor="var(--primary)"
            />
          </div>
        )}
      </div>
    </section>
  );
}

