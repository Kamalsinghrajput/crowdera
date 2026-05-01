"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    date: "15 March 2024",
    title: "Example Is Our Recent Food Distribution Program.",
    category: "Food",
    comments: "02 Comment",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=700&h=500",
  },
];

function BrushDateBadge({ date }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        viewBox="0 0 160 60"
        style={{ width: "140px", height: "48px", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          d="M8 10 Q20 2 40 5 Q80 0 120 4 Q148 2 158 10 Q165 22 158 35 Q148 50 120 52 Q80 56 40 52 Q18 54 6 44 Q-2 34 8 10Z"
          fill="#121D18"
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "15px",
        }}
      >
        {date}
      </span>
    </div>
  );
}

function BlogCard({ blog }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        border: "1px solid #EBEBEB",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "260px",
          overflow: "hidden",
        }}
      >
        <Image
          src={blog.img}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          style={{
            transition: "transform 0.5s ease",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <BrushDateBadge date={blog.date} />
        </div>
      </div>

      {/* Content Section */}
      <div
        style={{
          padding: "30px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#6c6e76",
            fontSize: "14px",
            marginBottom: "16px",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
            <line x1="7" y1="7" x2="7.01" y2="7" />
          </svg>
          {blog.category}
        </div>

        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#121d18",
            lineHeight: 1.4,
            marginBottom: "30px",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#007B39")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            {blog.title}
          </a>
        </h3>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#6c6e76",
              fontSize: "14px",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            {blog.comments}
          </div>

          <a
            href="#"
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: isHovered ? "#007B39" : "#121d18",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              transition: "background-color 0.3s",
              textDecoration: "none",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog({ isAllBlogsPage }) {
  return (
    <section style={{ backgroundColor: "#F9F9F9", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header - Not present in the provided screenshot section but useful if not standalone */}
        {/* We can hide or show based on preference, but we'll include a simple header or skip if it's not requested. The screenshot shows only the grid and pagination. We will just show the grid. */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "40px",
          }}
        >
          {BLOGS.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          {[0, 1, 2, 3].map((dot, i) => (
            <div
              key={i}
              style={{
                width: "24px",
                height: "24px",
                border: "1px solid #ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: i === 0 ? "#007B39" : "#ccc",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
