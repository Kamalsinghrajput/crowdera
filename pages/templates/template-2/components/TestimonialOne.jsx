"use client";
import { useState } from "react";

const TESTIMONIALS = [
  {
    text: "I've had the privilege of volunteering with Chioary and I'm continually inspired by the dedication and passion of the team.",
    name: "Ronald Richards",
    role: "General manager",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    text: "I've had the privilege of volunteering with Chioary and I'm continually inspired by the dedication and passion of the team.",
    name: "Courtney Henry",
    role: "General manager",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "I've had the privilege of volunteering with Chioary and I'm continually inspired by the dedication and passion of the team.",
    name: "Adam Smith",
    role: "General manager",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: "I've had the privilege of volunteering with Chioary and I'm continually inspired by the dedication and passion of the team.",
    name: "Robert Ken",
    role: "General manager",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export default function TestimonialOne() {
  const [active, setActive] = useState(0);

  return (
    <section
      style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}
    >
      {/* Parallax bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(18, 29, 24, 0.92)",
        }}
      />

      {/* Large quote icon */}
      <div
        style={{
          position: "absolute",
          top: 60,
          right: "10%",
          opacity: 0.06,
          zIndex: 1,
          fontSize: 200,
          fontFamily: "Georgia, serif",
          color: "#FFA415",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        &ldquo;
      </div>

      <div
        className="max-w-[1320px] mx-auto px-3"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                background: "#FFA415",
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#FFA415",
                fontStyle: "italic",
              }}
            >
              Our Testimonial
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "#fff",
            }}
          >
            Our Impact in Their Words
          </h2>
        </div>

        {/* Active testimonial */}
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.9,
              marginBottom: 48,
              fontStyle: "italic",
            }}
          >
            &ldquo;{TESTIMONIALS[active].text}&rdquo;
          </p>

          {/* Client info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <img
              src={TESTIMONIALS[active].img}
              alt={TESTIMONIALS[active].name}
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid #FFA415",
              }}
            />
            <div style={{ textAlign: "left" }}>
              <h3
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                  color: "#fff",
                  margin: "0 0 4px",
                }}
              >
                {TESTIMONIALS[active].name}
              </h3>
              <p
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.5)",
                  margin: 0,
                }}
              >
                {TESTIMONIALS[active].role}
              </p>
            </div>
          </div>
        </div>

        {/* Dot navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 48,
          }}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 30 : 10,
                height: 10,
                borderRadius: active === i ? 5 : "50%",
                background: active === i ? "#FFA415" : "rgba(255,255,255,0.3)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
