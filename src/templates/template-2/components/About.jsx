import React, { useState } from "react";
import FloatingBird from "./FloatingBird";
import { Globe, Lightbulb, Users } from "lucide-react";

function FeatureBox({ item }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #F0F0F0",
        paddingBottom: 30,
      }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 70,
          height: 70,
          borderRadius: "50%",
          background: hovered ? "var(--secondary)" : "#F5F5F5",
          color: hovered ? "#fff" : "var(--secondary)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          marginBottom: 18,
          transition: "background 0.3s, color 0.3s",
          cursor: "pointer",
        }}
      >
        {item.icon}
      </div>
      <h3
        style={{
          fontSize: 20,
          color: "var(--bg-color)",
          marginBottom: 10,
        }}
      >
        <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
          {item.title}
        </a>
      </h3>
      <p
        style={{
          fontSize: 15,
          color: "#6c6e76",
          lineHeight: 1.6,
          marginBottom: 14,
        }}
      >
        {item.text}
      </p>
      <a href="#" className="t2-text-btn">
        <span />
        Read More
      </a>
    </div>
  );
}

export default function About() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      <div className="hidden lg:block">
        <FloatingBird position="right" />
      </div>
      {/* Floating shape */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "20%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          border: "1px solid rgba(0,123,57,0.08)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section title — left aligned */}
        <div style={{ marginBottom: 50 }}>
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
                background: "var(--secondary)",
              }}
            />
            <span
              style={{
                fontSize: 16,
                color: "var(--bg-color)",
                fontStyle: "italic",
              }}
            >
              Our About
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "var(--bg-color)",
              marginTop: 0,
            }}
          >
            Transforming Lives, One Act of
            <br /> Kindness at a Time
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: "#6c6e76",
                marginBottom: 36,
              }}
            >
              At Chioary, we believe that every act of kindness — no matter how
              small — has the power to ripple outward and change the world. For
              over 25 years, we have been dedicated to uplifting communities
              through compassionate programs in nutrition, education,
              healthcare, and sustainable development.
            </p>
            {/* Main image */}
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80"
                alt="About"
                style={{
                  width: "100%",
                  height: 480,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
              {/* Col 1: Two feature boxes */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 30 }}
              >
                {[
                  {
                    icon: <Globe size={32} strokeWidth={1.5} />,
                    title: "Driven Compassion",
                    text: "Every service we offer is rooted in deep compassion, designed to meet people where they are and create lasting positive change.",
                  },
                  {
                    icon: <Lightbulb size={32} strokeWidth={1.5} />,
                    title: "Sustainable Impact",
                    text: "We invest in long-term solutions — from education and job training to clean water and medical outreach — that empower communities to thrive.",
                  },
                ].map((item, i) => (
                  <FeatureBox key={i} item={item} />
                ))}
              </div>

              {/* Col 2: Circular experience badge + feature box + client badge */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 30 }}
              >
                {/* Experience circle */}
                <div
                  style={{
                    position: "relative",
                    width: "50%",
                    maxWidth: 220,
                    margin: "0 auto",
                    aspectRatio: "1",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <span
                      style={{
                        fontSize: 52,
                        color: "var(--bg-color)",
                        lineHeight: 1,
                      }}
                    >
                      25
                    </span>
                    <span
                      style={{ fontSize: 28, color: "var(--secondary)" }}
                    >
                      +
                    </span>
                  </div>
                  {/* Circular Text */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      animation: "rotateSlow 10s linear infinite",
                    }}
                  >
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        fill="transparent"
                      />
                      <text
                        fontSize="11"
                        fill="#6c6e76"
                        letterSpacing="2.5"
                      >
                        <textPath href="#circlePath" startOffset="0%">
                          YEARS OF EXPERIENCE • YEARS OF EXPERIENCE •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Holistic Support */}
                <FeatureBox
                  item={{
                    icon: <Users size={32} strokeWidth={1.5} />,
                    title: "Holistic Support",
                    text: "We provide wraparound support for individuals and families, addressing health, housing, and emotional well-being under one roof.",
                  }}
                />

                {/* Client signature box */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "#f9f9f9",
                    borderRadius: 10,
                    padding: "16px",
                  }}
                >
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Client"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#6c6e76",
                        margin: 0,
                      }}
                    >
                      UX/UI Specialist
                    </p>
                    <div style={{ marginTop: "2px", marginBottom: "4px" }}>
                      <img
                        src="/assets/template-2-signature.png"
                        alt="Signature"
                        style={{ width: 130, height: "auto", display: "block" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `,
        }}
      />
    </section>
  );
}
