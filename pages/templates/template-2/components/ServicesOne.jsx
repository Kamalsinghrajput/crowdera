const SERVICES = [
  {
    title: "Food Assistance Programs",
    text: "Providing nutritious meals and essential groceries to individuals and families facing food insecurity in our communities.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    icon: (
      <svg
        width="40"
        height="40"
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
        width="40"
        height="40"
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
        width="40"
        height="40"
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

export default function ServicesOne() {
  return (
    <section
      style={{
        position: "relative",
        background: "#F9F9F9",
        padding: "120px 0 80px",
        overflow: "hidden",
      }}
    >
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
            Our Services
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
            gap: 30,
          }}
        >
          {SERVICES.map((srv, i) => (
            <div
              key={i}
              className="service-card"
              style={{
                position: "relative",
                borderRadius: 12,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 30px rgba(0,0,0,0.06)",
              }}
            >
              {/* Image */}
              <div style={{ overflow: "hidden", height: 280 }}>
                <img
                  src={srv.img}
                  alt={srv.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    display: "block",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>
              {/* Content bar (overlaps image bottom) */}
              <div
                style={{
                  position: "relative",
                  background: "#fff",
                  margin: "-50px 20px 0",
                  borderRadius: 10,
                  padding: "30px 28px 28px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  textAlign: "center",
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#F5F5F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "#121D18",
                    transition: "all 0.3s",
                  }}
                  className="service-icon"
                >
                  {srv.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    color: "#121D18",
                    marginBottom: 14,
                    transition: "color 0.3s",
                  }}
                >
                  <a
                    href="#"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    {srv.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "#6C6E76",
                    marginBottom: 20,
                  }}
                >
                  {srv.text}
                </p>
                {/* Arrow button */}
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#007B39",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#121D18")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#007B39")
                  }
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Row */}
        <div
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 30,
            alignItems: "stretch",
          }}
        >
          {/* Video thumbnail */}
          <div
            style={{
              position: "relative",
              borderRadius: 12,
              overflow: "hidden",
              height: 400,
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
                background: "rgba(0,0,0,0.3)",
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
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  border: "2px solid rgba(255,255,255,0.4)",
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
                    inset: -15,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.2)",
                    animation: "ripple 1.5s infinite",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    inset: -30,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.1)",
                    animation: "ripple 1.5s 0.5s infinite",
                  }}
                />
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Audio player */}
          <div
            style={{
              background: "#121D18",
              borderRadius: 12,
              padding: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ marginBottom: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#FFA415",
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
                        background: "#FFA415",
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      color: "rgba(255,255,255,0.4)",
                      fontFamily: "Inter, sans-serif",
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
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
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
                fontFamily: "Sora, sans-serif",
                fontSize: 14,
                color: "rgba(255,255,255,0.5)",
                marginTop: 12,
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
        .service-card:hover .service-icon {
          background: #FFA415 !important;
          color: #fff !important;
        }
        .service-card:hover .service-icon svg {
          stroke: #fff;
        }
      `}</style>
    </section>
  );
}
