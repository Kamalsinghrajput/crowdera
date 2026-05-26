"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

/**
 * TestimonialCard
 * Renders a single testimonial in the new reference style:
 * - Reviewer avatar + name + role at top
 * - Quote body
 * - Star rating row at bottom
 *
 * Used by Testimonial.jsx for the left-panel slide content.
 */
export default function TestimonialCard({ testimonialData }) {
  if (!testimonialData) return null;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {/* Reviewer identity */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            border: "3px solid #C8EEFB",
          }}
        >
          <Image
            src={testimonialData.img}
            alt={testimonialData.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h4
            style={{
              fontSize: "15px",
              fontWeight: 800,
              color: "#1E1033",
              margin: 0,
            }}
          >
            {testimonialData.name}
          </h4>
          <p style={{ fontSize: "12px", color: "#8a7a9b", margin: 0, marginTop: "2px" }}>
            {testimonialData.role}
          </p>
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: "16px",
          color: "#3a3060",
          lineHeight: 1.75,
          fontWeight: 500,
          margin: 0,
        }}
      >
        {testimonialData.text}
      </p>

      {/* Stars */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "#EBF7FF",
          borderRadius: "12px",
          padding: "10px 18px",
          alignSelf: "flex-start",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="#FBBF24" size={16} />
        ))}
      </div>
    </div>
  );
}
