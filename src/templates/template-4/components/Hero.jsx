"use client";
import { useState, useEffect } from "react";

const SLIDES = [
  {
    bg: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Charity foundation non profit",
    title: "Your Compassion\nTheir Hope",
    text: "Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.",
  },
  {
    bg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Charity foundation non profit",
    title: "Your Compassion\nTheir Hope",
    text: "Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.",
  },
  {
    bg: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Charity foundation non profit",
    title: "Your Compassion\nTheir Hope",
    text: "Your Compassion Their Hope is a powerful and inspiring choice for your charity website. It effectively captures the essence of your mission and the impact of support.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

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

  const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);
  const goNext = () => goTo((current + 1) % SLIDES.length);

  const arrowStyle = (side) => ({
    position: "absolute",
    [side]: 30,
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 10,
    width: 52,
    height: 52,
    borderRadius: "50%",
    border: "2px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    backdropFilter: "blur(4px)",
  });

  const handleArrowEnter = (e) => {
    e.currentTarget.style.background = "#FFA415";
    e.currentTarget.style.borderColor = "#FFA415";
  };
  const handleArrowLeave = (e) => {
    e.currentTarget.style.background = "rgba(255,255,255,0.08)";
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
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
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }`,
        }}
      />

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
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.3))",
            }}
          />
        </div>
      ))}

      {/* Slide Content */}
      <div
        className="max-w-[1320px] mx-auto px-3"
        style={{
          position: "relative",
          zIndex: 5,
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: "clamp(80px, 12vh, 140px)",
        }}
      >
        <div style={{ paddingLeft: "clamp(30px, 8vw, 120px)", maxWidth: 800 }}>
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

          {/* Body text */}
          <p
            key={`text-${animKey}`}
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(15px, 1.4vw, 18px)",
              lineHeight: 1.7,
              marginBottom: 44,
              maxWidth: 560,
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
            <a href="#" className="t2-btn t2-btn-secondary">
              <span>Donate Now</span>
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>

      {/* Prev Arrow */}
      <button
        onClick={goPrev}
        style={arrowStyle("left")}
        onMouseEnter={handleArrowEnter}
        onMouseLeave={handleArrowLeave}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Next Arrow */}
      <button
        onClick={goNext}
        style={arrowStyle("right")}
        onMouseEnter={handleArrowEnter}
        onMouseLeave={handleArrowLeave}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

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

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes slideInUp {
              from { opacity: 0; transform: translateY(40px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `,
        }}
      />
    </section>
  );
}
