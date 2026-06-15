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
      {/* Decorative gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(142,111,159,0.15), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,210,255,0.1), transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <span
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 700,
              color: "var(--secondary)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 14,
              fontFamily: "'Caveat', cursive",
              fontSize: 20,
              letterSpacing: "0.05em",
            }}
          >
            ✦ Watch Our Story
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 50px)",
              fontWeight: 800,
              color: "var(--text-color)",
              lineHeight: 1.15,
              margin: 0,
              fontFamily: "'Manrope', sans-serif",
            }}
          >
            Creating Waves of
            <br />
            <span style={{ color: "var(--secondary)" }}>Positive Change</span>
          </h2>
        </div>

        {/* Video + Side Info Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {/* Video Container */}
          <div
            style={{
              position: "relative",
              borderRadius: 16,
              overflow: "hidden",
              aspectRatio: "16/9",
              border: "1px solid rgba(142,111,159,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
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
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80"
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
                      "linear-gradient(135deg, rgba(33,24,35,0.6), rgba(33,24,35,0.3))",
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
                      width: 88,
                      height: 88,
                      borderRadius: "50%",
                      background: btnHovered
                        ? "var(--secondary)"
                        : "rgba(142,111,159,0.85)",
                      backdropFilter: "blur(8px)",
                      border: "2px solid rgba(255,255,255,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: btnHovered
                        ? "0 0 50px rgba(0,210,255,0.4)"
                        : "0 8px 30px rgba(142,111,159,0.4)",
                      transition: "all 0.4s ease",
                      transform: btnHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: -14,
                        borderRadius: "50%",
                        border: "2px solid rgba(0,210,255,0.25)",
                        animation: "t6VideoRipple 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        inset: -28,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,210,255,0.1)",
                        animation: "t6VideoRipple 2s 0.5s infinite",
                      }}
                    />
                    <svg
                      width="28"
                      height="28"
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

          {/* Side Info Card */}
          <div
            style={{
              background: "rgba(142,111,159,0.1)",
              border: "1px solid rgba(142,111,159,0.15)",
              borderRadius: 16,
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 12,
                background: "rgba(0,210,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="2"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <h4
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "var(--text-color)",
                marginBottom: 12,
                lineHeight: 1.3,
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              Behind the Scenes
            </h4>
            <p
              style={{
                fontSize: 14,
                color: "rgba(250,246,252,0.5)",
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              Go behind the scenes of our latest community programs and see the
              real impact of every donation and volunteer hour.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--secondary)",
                  animation: "t6Pulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: 13,
                  color: "var(--secondary)",
                  fontWeight: 600,
                }}
              >
                Latest Documentary
              </span>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t6VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
          @keyframes t6Pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.3); }
          }
        `,
        }}
      />
    </section>
  );
}
