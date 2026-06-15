import React, { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="video-section"
      className="relative overflow-hidden"
      style={{ padding: "100px 0" }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #091F1Bee 0%, #091F1Bdd 50%, #091F1Bcc 100%)" }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Video Player */}
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{ borderRadius: 16, aspectRatio: "16/9" }}
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
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              />
            ) : (
              <>
                <img
                  src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
                  alt="Watch our story"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    inset: 0,
                  }}
                />
                {/* Dark overlay on thumbnail */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(135deg, rgba(9,31,27,0.6), rgba(9,31,27,0.3))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="group"
                    style={{
                      width: 90,
                      height: 90,
                      borderRadius: "50%",
                      background: "#FEC908",
                      border: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      position: "relative",
                      boxShadow: "0 8px 40px rgba(254,201,8,0.4)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.boxShadow = "0 12px 50px rgba(254,201,8,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0 8px 40px rgba(254,201,8,0.4)";
                    }}
                  >
                    {/* Ripple rings */}
                    <span
                      style={{
                        position: "absolute",
                        inset: -14,
                        borderRadius: "50%",
                        border: "2px solid rgba(254,201,8,0.35)",
                        animation: "t1VideoRipple 2s infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        inset: -28,
                        borderRadius: "50%",
                        border: "1px solid rgba(254,201,8,0.15)",
                        animation: "t1VideoRipple 2s 0.6s infinite",
                      }}
                    />
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#091F1B">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Right: Text Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: "#FEC908" }}
              />
              <span
                className="italic text-lg"
                style={{
                  color: "#FEC908",
                  fontFamily: "'Caveat', 'Segoe Script', cursive",
                }}
              >
                Watch Our Story
              </span>
            </div>
            <h2
              className="font-extrabold text-white mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15 }}
            >
              Making A Difference<br />
              One Community At A Time
            </h2>
            <p
              className="mb-8"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 480,
              }}
            >
              Watch how our volunteers and donors are transforming lives across the globe.
              Every contribution creates a ripple effect of positive change in communities
              that need it most.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-bold text-sm py-4 px-8 rounded-full transition-all shadow-xl"
              style={{
                background: "#FEC908",
                color: "#091F1B",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#00715D";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FEC908";
                e.currentTarget.style.color = "#091F1B";
              }}
            >
              Learn More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 8 }}>
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes t1VideoRipple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.4); opacity: 0; }
          }
        `,
        }}
      />
    </section>
  );
}
