"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiTag, FiMessageCircle } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import BrushDateBadge from "./BrushDateBadge";

export default function BlogCard({ blogData }) {
  const [imgHovered, setImgHovered] = useState(false);
  const [footerHovered, setFooterHovered] = useState(false);

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
        {/* Category */}
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
          <FiTag size={16} />
          {blogData.category}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#121d18",
            lineHeight: 1.4,
            marginBottom: "30px",
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

        {/* Footer row — full hover turns green */}
        <Link href="/templates/template-3/blog">
          <a
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid #EBEBEB",
              margin: "auto -30px -30px",
              padding: "16px 30px",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={() => setFooterHovered(true)}
            onMouseLeave={() => setFooterHovered(false)}
          >
            {/* Animated Green Background */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: footerHovered ? "100%" : "0%",
                backgroundColor: "#007B39",
                transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                zIndex: 0,
              }}
            />

            {/* Comments */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: footerHovered ? "#fff" : "#6c6e76",
                fontSize: "14px",
                transition: "color 0.4s ease",
              }}
            >
              <FiMessageCircle size={16} />
              {blogData.comments}
            </div>

            {/* Arrow button */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: footerHovered ? "#fff" : "#121d18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: footerHovered ? "#007B39" : "#fff",
                transition: "background-color 0.4s ease, color 0.4s ease",
                flexShrink: 0,
              }}
            >
              <HiArrowRight size={18} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
