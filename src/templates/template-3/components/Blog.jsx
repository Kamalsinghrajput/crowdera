"use client";
import BlogCard from "./BlogCard";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

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

export default function Blog({ isAllBlogsPage }) {
  const headingRef = useHeadingAnimation();
  return (
    <section style={{ backgroundColor: "#fff", padding: "120px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Section Header */}
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
                background: "#007B39",
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

        {/* Blog Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {BLOGS.map((blogData, index) => (
            <BlogCard key={index} blogData={blogData} />
          ))}
        </div>
      </div>
    </section>
  );
}
