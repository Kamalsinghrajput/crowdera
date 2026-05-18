"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function TestimonialCard({ testimonialData, cardWidth }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: cardWidth > 0 ? `${cardWidth}px` : "calc(50% - 20px)",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <FaQuoteLeft size={40} color="var(--bg-color)" />
      </div>
      <p
        style={{
          fontSize: "22px",
          color: "#6c6e76",
          lineHeight: 1.6,
          marginBottom: "30px",
          fontWeight: 400,
        }}
      >
        {testimonialData.text}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image src={testimonialData.img} alt={testimonialData.name} layout="fill" objectFit="cover" />
        </div>
        <div>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--bg-color)",
              marginBottom: "4px",
            }}
          >
            {testimonialData.name}
          </h4>
          <p style={{ fontSize: "14px", color: "#6c6e76", margin: 0 }}>
            {testimonialData.role}
          </p>
        </div>
      </div>
    </div>
  );
}
