const EVENTS = [
  {
    date: "10 August",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600&q=80",
    title: "Annual Food & Nutrition Drive",
    by: "Brooklyn Simmons",
    time: "09:00 AM - 01:00 PM",
  },
  {
    date: "23 April",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
    title: "Community Health Awareness Day",
    by: "Courtney Henry",
    time: "10:00 AM - 03:00 PM",
  },
  {
    date: "03 June",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
    title: "Environmental Clean-Up & Green Walk",
    by: "Ronald Richards",
    time: "07:30 AM - 12:00 PM",
  },
  {
    date: "10 March",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    title: "Children's Education Fundraising Gala",
    by: "Wade Warren",
    time: "06:00 PM - 09:30 PM",
  },
];

export default function EventOne() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "120px 0 80px",
        position: "relative",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section title */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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
              Our Events
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "#121D18",
            }}
          >
            Events Schedule Upcoming
            <br /> Events.
          </h2>
        </div>

        {/* Events Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 30,
          }}
        >
          {EVENTS.map((ev, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: 0,
                background: "#F9F9F9",
                borderRadius: 12,
                overflow: "hidden",
                transition: "box-shadow 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 10px 40px rgba(0,0,0,0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              {/* Image + date badge */}
              <div
                style={{
                  position: "relative",
                  width: 220,
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={ev.img}
                  alt={ev.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.5s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />

                {/* Date badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    background: "#007B39",
                    color: "#fff",
                    padding: "8px 16px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  {ev.date}
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "28px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 12,
                }}
              >
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    color: "#121D18",
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  <a
                    href="#"
                    style={{ color: "inherit", textDecoration: "none" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFA415")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#121D18")
                    }
                  >
                    {ev.title}
                  </a>
                </h3>
                <p
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontSize: 14,
                    color: "#6C6E76",
                    margin: 0,
                  }}
                >
                  By {ev.by}{" "}
                  <span
                    style={{
                      marginLeft: 12,
                      color: "#FFA415",
                      fontWeight: 600,
                    }}
                  >
                    {ev.time}
                  </span>
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#007B39",
                    textDecoration: "none",
                    marginTop: 4,
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFA415")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#007B39")
                  }
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* See All button */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              borderRadius: 30,
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                padding: "13px 24px",
                background: "#121D18",
                color: "#fff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              See All
            </span>
            <span
              style={{
                width: 52,
                height: 52,
                background: "#121D18",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
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
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
