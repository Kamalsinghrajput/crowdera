"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

const BLOGS = [
  {
    date: "10 Aug 2024",
    title: "We Believe That Knowledge Is A Catalyst For Change.",
    category: "Education",
    comments: "02 Comments",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=700&h=500",
  },
  {
    date: "22 Aug 2024",
    title: "We'll Is Explore The Broader Issues That Our Charity.",
    category: "Medical",
    comments: "02 Comments",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=700&h=500",
  },
  {
    date: "15 March 2024",
    title: "Example Is Our Recent Food Distribution Program.",
    category: "Food",
    comments: "02 Comments",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=700&h=500",
  },
  {
    date: "05 June 2024",
    title: "Empowering Children with Quality Education for All.",
    category: "Education",
    comments: "05 Comments",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=700&h=500",
  },
];

const CARD_WIDTH = 430; // approx width for t3 cards in carousel

export default function Blog({ isAllBlogsPage }) {
  const headingRef = useHeadingAnimation();
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);

  const carouselData = [...BLOGS, ...BLOGS];
  const gridData = [...BLOGS, ...BLOGS];

  useEffect(() => {
    if (!isAllBlogsPage) {
      const interval = setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 4000);
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
    <section style={{ backgroundColor: "#fff", padding: "120px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 16px" }}>
        {/* Section Header */}
        {!isAllBlogsPage && (
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "var(--primary)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "16px",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "#121d18",
                }}
              >
                Our Latest Blog
              </span>
            </div>
            <h2
              ref={headingRef}
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "#121d18",
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              How Collective Efforts
            </h2>
          </div>
        )}

        {isAllBlogsPage ? (
          /* GRID MODE */
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {gridData.map((blogData, idx) => (
              <BlogCard key={idx} blogData={blogData} />
            ))}
          </div>
        ) : (
          /* CAROUSEL MODE */
          <>
            <div className="overflow-hidden" style={{ paddingBottom: "20px" }}>
              <div ref={trackRef} style={{ display: 'flex', gap: '30px' }}>
                {carouselData.map((blogData, idx) => (
                  <div key={idx} style={{ width: '400px', flexShrink: 0 }}>
                    <BlogCard blogData={blogData} />
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px', gap: '12px' }}>
              {BLOGS.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  style={{
                    width: i === index % BLOGS.length ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: i === index % BLOGS.length ? 'var(--primary)' : '#D1D1D1',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            {/* View All Blogs CTA */}
            <div className="flex justify-center mt-16 relative z-10">
              <Link href="/templates/template-3/blog">
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
