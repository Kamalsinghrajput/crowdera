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
      {/* Decorative top border line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(202,161,102,0.3), transparent)",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
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
                gap: 8,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: "var(--secondary)",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--secondary)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Watch Video
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.25,
                marginBottom: 20,
              }}
            >
              See the Impact
              <br />
              <span style={{ color: "var(--secondary)" }}>We Create Together</span>
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-color)",
                lineHeight: 1.8,
                marginBottom: 30,
                maxWidth: 380,
              }}
            >
              Our latest documentary captures the transformative power of
              community-driven change. Watch how lives are being touched
              every day.
            </p>

            {/* Elegant divider */}
            <div
              style={{
                width: 50,
                height: 2,
                background: "linear-gradient(90deg, var(--secondary), transparent)",
                marginBottom: 24,
              }}
            />

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(202,161,102,0.12)",
                  border: "1px solid rgba(202,161,102,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#fff",
                  }}
                >
                  $2.5M+ Raised
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-color)",
                  }}
                >
                  Through Community Support
                </div>
              </div>
            </div>
          </div>

          {/* Right: Video Player */}
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              aspectRatio: "16/9",
              boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              border: "1px solid rgba(202,161,102,0.15)",
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
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80"
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
                      "linear-gradient(to right, rgba(26,26,26,0.6), rgba(26,26,26,0.25))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => setIsPlaying(true)}
                    onMouseEnter={() => setBtnHovered(true)}
                    onMouseLeave={() => setBtnHovered(false)}
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: "50%",
                      background: btnHovered
                        ? "var(--primary)"
                        : "rgba(202,161,102,0.9)",
                      border: "2px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: "0 8px 35px rgba(202,161,102,0.35)",
                      transition: "all 0.4s ease",
                      transform: btnHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: -14,
                        borderRadius: "50%",
                        border: "2px solid rgba(202,161,102,0.25)",
                        animation: "t8VideoRipple 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        inset: -28,
                        borderRadius: "50%",
                        border: "1px solid rgba(202,161,102,0.12)",
                        animation: "t8VideoRipple 2s 0.5s infinite",
                      }}
                    />
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="#fff"
                    >
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
          @keyframes t8VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
