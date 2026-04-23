export default function BecomeVolunteer() {
  return (
    <section style={{ background: "#F9F9F9", padding: "0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Panel 1 — Join Us Volunteer */}
        <div
          style={{ position: "relative", minHeight: 480, overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1593113565214-8cb303387870?auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 123, 57, 0.88)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "80px 60px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 38px)",
                color: "#fff",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Join Us Volunteer
              </a>
            </h3>
            <p
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              Becoming a volunteer with Chioary means joining a dedicated team
              <br />
              committed to making a difference. We welcome individuals from
              <br />
              all walks of life who are passionate
            </p>
            <div>
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
                    background: "#FFA415",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  See More
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
        </div>

        {/* Panel 2 — Become Volunteer */}
        <div
          style={{ position: "relative", minHeight: 480, overflow: "hidden" }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(18, 29, 24, 0.88)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "80px 60px",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <h3
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 38px)",
                color: "#fff",
                marginBottom: 20,
                lineHeight: 1.3,
              }}
            >
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Become Volunteer
              </a>
            </h3>
            <p
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: 15,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                marginBottom: 36,
              }}
            >
              Your time and skills can transform lives. Whether you can give an
              hour or a year, every contribution matters. Apply today and be the
              change someone is waiting for.
            </p>
            <div>
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
                    background: "#007B39",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                  }}
                >
                  See More
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
        </div>
      </div>
    </section>
  );
}
