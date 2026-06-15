import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      id="video-section"
      className="relative overflow-hidden"
      style={{
        padding: "100px 0",
        background: "linear-gradient(to bottom, #f7edf7, #f3e6f5)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute hidden md:block"
        style={{
          top: 40,
          right: 60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          border: "2px solid rgba(124,54,130,0.08)",
          pointerEvents: "none",
        }}
      />
      <div
        className="absolute hidden md:block"
        style={{
          bottom: 30,
          left: 40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "2px solid rgba(124,54,130,0.06)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container mx-auto px-4"
        style={{ maxWidth: 1200, position: "relative", zIndex: 1 }}
      >
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: 50 }}>
          <p
            className="uppercase tracking-[4px] font-semibold"
            style={{
              fontSize: 11,
              color: "rgba(124,54,130,0.6)",
              marginBottom: 14,
            }}
          >
            Watch Our Story
          </p>
          <h2
            className="font-black"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#2D0A31",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Changing Lives,
            <br />
            <span style={{ color: "#7C3682" }}>One Story at a Time</span>
          </h2>
        </div>

        {/* Video Container */}
        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            borderRadius: 24,
            overflow: "hidden",
            aspectRatio: "16/9",
            boxShadow:
              "0 25px 60px rgba(124,54,130,0.2), 0 0 0 1px rgba(124,54,130,0.08)",
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
                    "linear-gradient(135deg, rgba(124,54,130,0.45), rgba(45,10,49,0.3))",
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
                    width: 88,
                    height: 88,
                    borderRadius: "50%",
                    background: btnHovered
                      ? "#7C3682"
                      : "rgba(255,255,255,0.95)",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    position: "relative",
                    boxShadow: "0 8px 40px rgba(124,54,130,0.35)",
                    transition: "all 0.35s ease",
                    transform: btnHovered ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      inset: -14,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,255,255,0.3)",
                      animation: "t10VideoRipple 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      inset: -28,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.15)",
                      animation: "t10VideoRipple 2s 0.5s infinite",
                    }}
                  />
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill={btnHovered ? "#fff" : "#7C3682"}
                    style={{ transition: "fill 0.3s ease" }}
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </button>
                <span
                  className="font-bold uppercase tracking-wider"
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                  }}
                >
                  Play Video
                </span>
              </div>
            </>
          )}
        </div>

        {/* Bottom text */}
        <p
          className="text-center"
          style={{
            fontSize: 15,
            color: "rgba(45,10,49,0.45)",
            lineHeight: 1.7,
            maxWidth: 500,
            margin: "30px auto 0",
          }}
        >
          BigHearts connects nonprofits, donors, and companies to create
          meaningful change across the world.
        </p>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t10VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
