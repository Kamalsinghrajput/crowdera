"use client";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      id="video-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "110px 0",
        background: "var(--bg-color)",
      }}
    >
      {/* Warm radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(227,105,42,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Section Header — Centered */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "'Caveat', cursive",
              fontSize: 22,
              color: "var(--secondary)",
              marginBottom: 10,
            }}
          >
            ★ Our Documentary
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 800,
              color: "var(--text-color)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Stories That
            <span style={{ color: "var(--primary)" }}> Inspire</span>
          </h2>
        </div>

        {/* Video Container with decorative border */}
        <div
          style={{
            position: "relative",
            maxWidth: 960,
            margin: "0 auto",
            padding: 4,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            boxShadow: "0 20px 60px rgba(227,105,42,0.2)",
          }}
        >
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16/9",
              background: "var(--bg-color)",
            }}
          >
            {isPlaying ? (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Get7rqXYrbQ?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <>
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1200&q=80"
                  alt="Watch our story"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at center, rgba(43,31,24,0.3), rgba(43,31,24,0.6))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 18,
                  }}
                >
                  <button
                    onClick={() => setIsPlaying(true)}
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background: btnHovered
                        ? "var(--secondary)"
                        : "var(--primary)",
                      border: "3px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: btnHovered
                        ? "0 0 50px rgba(242,183,64,0.5)"
                        : "0 8px 35px rgba(227,105,42,0.5)",
                      transition: "all 0.4s ease",
                      transform: btnHovered ? "scale(1.12)" : "scale(1)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: -16,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,255,255,0.2)",
                        animation: "t9VideoRipple 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        inset: -32,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.08)",
                        animation: "t9VideoRipple 2s 0.6s infinite",
                      }}
                    />
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </button>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    Watch Now
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom description */}
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            color: "rgba(249,245,236,0.45)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "32px auto 0",
          }}
        >
          Discover how our community of volunteers and donors are making
          lasting change — one story at a time.
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t9VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
