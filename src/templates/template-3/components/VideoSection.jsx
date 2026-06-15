"use client";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video-section"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 0",
        background: "#EBD3AF",
      }}
    >
      {/* Faint map background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#E0CAAA",
          maskImage: "url(/assets/map.svg)",
          WebkitMaskImage: "url(/assets/map.svg)",
          maskSize: "60%",
          WebkitMaskSize: "60%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          opacity: 0.4,
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-4"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "var(--primary)",
              }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#121d18",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Watch Our Video
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 50px)",
              fontWeight: 700,
              color: "#121d18",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            See How We Create
            <br />
            Meaningful Impact
          </h2>
        </div>

        {/* Video Container */}
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 16,
            overflow: "hidden",
            aspectRatio: "16/9",
            boxShadow: "0 20px 60px rgba(18,29,24,0.2)",
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
                  filter: "grayscale(30%)",
                }}
              />
              {/* Warm overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(18,29,24,0.45), rgba(18,29,24,0.25))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={() => setIsPlaying(true)}
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: "50%",
                    background: "var(--primary)",
                    border: "4px solid rgba(255,255,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  {/* Ripple rings */}
                  <span
                    style={{
                      position: "absolute",
                      inset: -16,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.25)",
                      animation: "t3VideoRipple 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: -32,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.12)",
                      animation: "t3VideoRipple 2s 0.5s infinite",
                    }}
                  />
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="#121d18"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t3VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
