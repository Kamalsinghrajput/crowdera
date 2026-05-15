"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiTag, FiMessageCircle } from "react-icons/fi";
import BrushDateBadge from "./BrushDateBadge";

export default function BlogCard({ blogData }) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#F9F9F9",
        border: "1px solid #EBEBEB",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
      }}
    >
      {/* Image Section */}
      <div
        style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden", cursor: "pointer" }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <Image
          src={blogData.img}
          alt={blogData.title}
          layout="fill"
          objectFit="cover"
          style={{
            transition: "transform 0.5s ease",
            transform: imgHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          <BrushDateBadge date={blogData.date} />
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
        {/* Meta Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
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
            <FiTag size={16} className="text-[#007B39]" />
            {blogData.category}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#6c6e76",
              fontSize: "14px",
            }}
          >
            <FiMessageCircle size={16} className="text-[#007B39]" />
            {blogData.comments}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#121d18",
            lineHeight: 1.4,
            marginBottom: "24px",
            flexGrow: 1
          }}
        >
          <Link href="/templates/template-3/blog">
            <a
              style={{ textDecoration: "none", color: "inherit", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007B39")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
            >
              {blogData.title}
            </a>
          </Link>
        </h3>

        {/* Read More button */}
        <div>
          <Link href="/templates/template-3/blog">
            <a className="t2-btn t2-btn-secondary" style={{ height: '44px' }}>
              <span style={{ height: '44px', padding: '0 25px', fontSize: '13px' }}>Read More</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
