export default function AboutOne() {
  return (
    <section
      style={{
        position: "relative",
        background: "#fff",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
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
                background: "#FFA415",
              }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: "#121D18",
                fontStyle: "italic",
              }}
            >
              Our About
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "#121D18",
              marginTop: 0,
            }}
          >
            Transforming Lives, One Act of
            <br /> Kindness at a Time
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: 16,
                lineHeight: 1.9,
                color: "#6C6E76",
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 30,
              }}
            >
              {/* Col 1: Two feature boxes */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 30 }}
              >
                {[
                  {
                    icon: "🌍",
                    title: "Driven Compassion",
                    text: "Every service we offer is rooted in deep compassion, designed to meet people where they are and create lasting positive change.",
                  },
                  {
                    icon: "💡",
                    title: "Sustainable Impact",
                    text: "We invest in long-term solutions — from education and job training to clean water and medical outreach — that empower communities to thrive.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderBottom: "1px solid #F0F0F0",
                      paddingBottom: 30,
                    }}
                  >
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "50%",
                        background: "#F5F5F5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 28,
                        marginBottom: 18,
                        transition: "background 0.3s",
                      }}
                    >
                      {item.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: 20,
                        color: "#121D18",
                        marginBottom: 10,
                      }}
                    >
                      <a
                        href="#"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <p
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: 15,
                        color: "#6C6E76",
                        lineHeight: 1.6,
                        marginBottom: 14,
                      }}
                    >
                      {item.text}
                    </p>
                    <a
                      href="#"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "#007B39",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      <span
                        style={{
                          width: 30,
                          height: 2,
                          background: "#007B39",
                          display: "inline-block",
                        }}
                      />
                      Read More
                    </a>
                  </div>
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
                    width: "100%",
                    aspectRatio: "1",
                    border: "1px dashed rgba(0,123,57,0.3)",
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
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 800,
                        fontSize: 52,
                        color: "#121D18",
                        lineHeight: 1,
                      }}
                    >
                      25
                    </span>
                    <span
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontWeight: 800,
                        fontSize: 28,
                        color: "#FFA415",
                      }}
                    >
                      +
                    </span>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12,
                        color: "#6C6E76",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        margin: "6px 0 0",
                      }}
                    >
                      Years of Experience
                    </p>
                  </div>
                  {/* Rotating text around circle */}
                  <div
                    style={{
                      position: "absolute",
                      inset: -8,
                      borderRadius: "50%",
                      border: "2px solid rgba(255,164,21,0.4)",
                      animation: "rotateSlow 10s linear infinite",
                    }}
                  />
                </div>

                {/* Holistic Support */}
                <div
                  style={{
                    borderBottom: "1px solid #F0F0F0",
                    paddingBottom: 30,
                  }}
                >
                  <div
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: "50%",
                      background: "#F5F5F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                      marginBottom: 18,
                    }}
                  >
                    👥
                  </div>
                  <h3
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: "#121D18",
                      marginBottom: 10,
                    }}
                  >
                    <a
                      href="#"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Holistic Support
                    </a>
                  </h3>
                  <p
                    style={{
                      fontFamily: "Sora, sans-serif",
                      fontSize: 15,
                      color: "#6C6E76",
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}
                  >
                    We provide wraparound support for individuals and families,
                    addressing health, housing, and emotional well-being under
                    one roof.
                  </p>
                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: "#007B39",
                      textDecoration: "none",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    <span
                      style={{
                        width: 30,
                        height: 2,
                        background: "#007B39",
                        display: "inline-block",
                      }}
                    />
                    Read More
                  </a>
                </div>

                {/* Client signature box */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    background: "#F9F9F9",
                    borderRadius: 10,
                    padding: "16px",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=100&q=80"
                    alt="Client"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <p
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: 13,
                        color: "#6C6E76",
                        margin: 0,
                      }}
                    >
                      UX/UI Specialist
                    </p>
                    <div style={{ marginTop: 6 }}>
                      <svg
                        width="80"
                        height="24"
                        viewBox="0 0 120 30"
                        fill="none"
                      >
                        <path
                          d="M5 20 Q20 5 35 18 Q50 31 65 15 Q80 -1 95 18 Q110 37 120 20"
                          stroke="#121D18"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
