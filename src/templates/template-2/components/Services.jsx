"use client";
import { useState } from "react";
import FloatingBird from "./FloatingBird";


const SERVICES = [
  {
    title: "Food Assistance Programs",
    text: "Providing nutritious meals and essential groceries to individuals and families facing food insecurity in our communities.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 8C8 10 5.9 16.17 3.82 21M3 3c0 0 3 0 6 3s6 3 6 3M9 9v12M9 9H6a3 3 0 0 1 0-6h3" />
      </svg>
    ),
  },
  {
    title: "Holistic Support Programs",
    text: "Offering comprehensive care services that address the mental, physical, and emotional well-being of every individual we serve.",
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Driven Compassion Programs",
    text: "Mobilizing volunteers and donors to champion meaningful change across underserved communities around the world.",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
];

function ServiceCard({ srv }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="srv-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {/* Image — greyscale default, color on hover */}
      <div style={{ position: "relative", overflow: "hidden", height: 340 }}>
        <img
          src={srv.img}
          alt={srv.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
            transition: "filter 0.5s ease, transform 0.5s ease",
            display: "block",
          }}
        />

        {/* Dark teal overlay on hover */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(18, 57, 38, 0.82)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.45s ease",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px 32px",
          }}
        >
          {/* White icon in center */}
          <div style={{ color: "#fff", marginBottom: 20 }}>{srv.icon}</div>
          <h3
            style={{
              fontSize: 22,
              color: "#fff",
              textAlign: "center",
              marginBottom: 14,
              lineHeight: 1.3,
            }}
          >
            {srv.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.82)",
              textAlign: "center",
              lineHeight: 1.7,
              marginBottom: 0,
            }}
          >
            {srv.text}
          </p>
        </div>

        {/* Orange arrow button — bottom right, always visible */}
        <a
          href="#"
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "var(--t2-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "none",
            zIndex: 5,
            transition: "background 0.3s ease, transform 0.3s ease",
            transform: hovered ? "scale(1.12)" : "scale(1)",
            boxShadow: "0 4px 20px rgba(255,164,21,0.45)",
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
        </a>
      </div>

      {/* Default content shown below image (not hovered) */}
    </div>
  );
}

export default function Services() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--t2-darkTeal)",
        padding: "110px 0 80px",
        overflow: "hidden",
      }}
    >
      <FloatingBird position="left" />
      {/* Section Title */}
      <div
        className="max-w-[1320px] mx-auto px-3"
        style={{ textAlign: "center", marginBottom: 60 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "var(--t2-secondary)",
            }}
          />
          <span
            style={{
              fontSize: 16,
              color: "var(--t2-secondary)",
              fontStyle: "italic",
            }}
          >
            Our Services
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(30px, 4vw, 52px)",
            lineHeight: 1.2,
            color: "#fff",
            marginTop: 0,
          }}
        >
          Empowering Communities Through
          <br /> Compassionate Action
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {SERVICES.map((srv, i) => (
            <ServiceCard key={i} srv={srv} />
          ))}
        </div>

        {/* Video Row */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
            alignItems: "stretch",
          }}
        >
          {/* Video thumbnail */}
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              height: 380,
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80"
              alt="Video"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=Get7rqXYrbQ"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.45)",
                  backdropFilter: "blur(4px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    inset: -16,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    animation: "ripple 1.5s infinite",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: -32,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    animation: "ripple 1.5s 0.5s infinite",
                  }}
                />
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Audio player */}
          <div
            style={{
              background: "var(--t2-dark)",
              borderRadius: 12,
              padding: "44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: 28 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 18,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "var(--t2-secondary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      height: 4,
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "35%",
                        height: "100%",
                        background: "var(--t2-secondary)",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 8,
                      color: "rgba(255,255,255,0.4)",

                      fontSize: 12,
                    }}
                  >
                    00:00
                  </div>
                </div>
              </div>
            </div>
            <h4
              style={{
                fontSize: 22,
                color: "#fff",
                margin: 0,
                lineHeight: 1.4,
              }}
            >
              Youth Mentorship and Development
            </h4>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginTop: 14,
              }}
            >
              Listen to our latest podcast on community development and youth
              empowerment.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
