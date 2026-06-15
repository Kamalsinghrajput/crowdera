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
      {/* Subtle grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 50,
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
                padding: "6px 16px",
                borderRadius: 30,
                background: "rgba(0,184,107,0.12)",
                border: "1px solid rgba(0,184,107,0.2)",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--primary)",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "var(--primary)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Watch Video
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 46px)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Our Story in Action
            </h2>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.7,
              maxWidth: 380,
              margin: 0,
            }}
          >
            Witness the transformation happening in communities worldwide
            through our volunteers and programs.
          </p>
        </div>

        {/* Video Container — Full Width */}
        <div
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            aspectRatio: "21/9",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.06)",
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
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=80"
                alt="Watch our story"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                  inset: 0,
                }}
              />
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at center, rgba(17,17,17,0.35), rgba(17,17,17,0.65))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 16,
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
                      ? "var(--primary)"
                      : "var(--secondary)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    boxShadow: btnHovered
                      ? "0 0 50px rgba(0,184,107,0.5)"
                      : "0 8px 35px rgba(255,85,40,0.45)",
                    transition: "all 0.4s ease",
                    transform: btnHovered ? "scale(1.15)" : "scale(1)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: -14,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.25)",
                      animation: "t5VideoRipple 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: -28,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.12)",
                      animation: "t5VideoRipple 2s 0.6s infinite",
                    }}
                  />
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                <span
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                  }}
                >
                  Play Video
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t5VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
