"use client";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="video-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
      }}
    >
      {/* Background image with parallax */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, var(--bg-color) 0%, rgba(18,29,24,0.92) 100%)",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 50,
            alignItems: "center",
          }}
        >
          {/* Left: Text Content */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--secondary)",
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--secondary)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Watch Our Video
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              Discover Our Journey
              <br />
              of Making Change
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: 32,
                maxWidth: 440,
              }}
            >
              See firsthand how our dedicated volunteers and generous donors are
              creating lasting impact in communities worldwide through education,
              healthcare, and sustainable development.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 40 }}>
              {[
                { num: "150+", label: "Videos Shared" },
                { num: "50K+", label: "Views Worldwide" },
              ].map((stat, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "var(--secondary)",
                      lineHeight: 1,
                      marginBottom: 6,
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Video Player */}
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16/9",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
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
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80"
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
                    background: "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.15))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => setIsPlaying(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      background: hovered ? "var(--primary)" : "var(--secondary)",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: "0 8px 30px rgba(255,164,21,0.4)",
                      transition: "all 0.35s ease",
                      transform: hovered ? "scale(1.12)" : "scale(1)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: -14,
                        borderRadius: "50%",
                        border: "2px solid rgba(255,164,21,0.3)",
                        animation: "t4VideoRipple 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        inset: -28,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,164,21,0.15)",
                        animation: "t4VideoRipple 2s 0.6s infinite",
                      }}
                    />
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t4VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
