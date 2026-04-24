"use client";
import { useState, useEffect } from "react";
import FloatingBird from "./FloatingBird";


const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Always donate for children's",
    title: "Charity is an act\nof Tender heart",
    text: "Charity is an act of a tender heart, reflecting kindness, empathy,\nand the desire to make a positive impact.",
  },
  {
    bg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Always donate for children's",
    title: "Charity is an act\nof Tender heart",
    text: "Charity is an act of a tender heart, reflecting kindness, empathy,\nand the desire to make a positive impact.",
  },
  {
    bg: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Always donate for children's",
    title: "Charity is an act\nof Tender heart",
    text: "Charity is an act of a tender heart, reflecting kindness, empathy,\nand the desire to make a positive impact.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    setCurrent(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      style={{
        position: "relative",
        height: "clamp(600px, 80vh, 820px)",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <FloatingBird position="right" />
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: current === i ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        >
          {/* Dark overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.78) 40%, rgba(0,0,0,0.35))",
            }}
          />
          {/* Map texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.07,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ))}

      {/* Social links — vertical left */}
      <div
        style={{
          position: "absolute",
          left: 40,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        <div
          style={{
            width: 1,
            height: 80,
            background: "rgba(255,255,255,0.2)",
            marginBottom: 20,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {["Fb", "Ins", "X.COM", "YT"].map((s) => (
            <a
              key={s}
              href="#"
              style={{
                color: "rgba(255,255,255,0.5)",
                fontFamily: "Inter, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.15em",
                textDecoration: "none",
                padding: "10px 0",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFA415")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
              }
            >
              {s}
            </a>
          ))}
        </div>
      </div>

      {/* Slide Content */}
      <div
        className="max-w-[1320px] mx-auto px-3"
        style={{
          position: "relative",
          zIndex: 5,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ paddingLeft: "clamp(60px, 8vw, 120px)", maxWidth: 800 }}>
          <>
            {/* Subtitle */}
            <div
              key={`sub-${animKey}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
                animation: "slideInUp 0.7s ease forwards",
              }}
            >
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#FFA415",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: "#FFA415",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  textTransform: "capitalize",
                }}
              >
                {SLIDES[current].subtitle}
              </span>
            </div>

            {/* Title */}
            <h2
              key={`title-${animKey}`}
              style={{
                color: "#fff",
                fontFamily: "Sora, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 5.5vw, 76px)",
                lineHeight: 1.12,
                marginBottom: 24,
                whiteSpace: "pre-line",
                animation: "slideInUp 0.7s 0.1s ease both",
              }}
            >
              {SLIDES[current].title}
            </h2>

            {/* Text */}
            <p
              key={`text-${animKey}`}
              style={{
                color: "rgba(255,255,255,0.8)",
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.7,
                marginBottom: 44,
                whiteSpace: "pre-line",
                animation: "slideInUp 0.7s 0.2s ease both",
              }}
            >
              {SLIDES[current].text}
            </p>

            {/* CTA */}
            <div
              key={`btn-${animKey}`}
              style={{ animation: "slideInUp 0.7s 0.3s ease both" }}
            >
              <a
                href="#"
                className="hero-cta-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 30,
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    padding: "14px 28px",
                    background: "#FFA415",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    transition: "background 0.3s",
                  }}
                >
                  Join with Us
                </span>
                <span
                  style={{
                    width: 54,
                    height: 54,
                    background: "#121D18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    transition: "background 0.3s",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </a>
            </div>
          </>
        </div>
      </div>

      {/* Dot pagination */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 10,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: current === i ? 30 : 10,
              height: 10,
              borderRadius: current === i ? 5 : "50%",
              background: current === i ? "#FFA415" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.4s",
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-cta-btn:hover span:first-child {
          background: #e8940a !important;
        }
      `}</style>
    </section>
  );
}
