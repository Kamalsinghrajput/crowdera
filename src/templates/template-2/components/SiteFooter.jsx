export default function SiteFooter() {
  // Colors handled by global CSS variables in index.jsx

  const quickLinks = [
    "About Us",
    "Our Services",
    "Our Team",
    "Our Blog",
    "Contact Us",
  ];
  const services = [
    "Emergency Relief",
    "Medical Outreach",
    "Educational Support",
    "Mental Health",
    "Community Development",
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#000",
      }}
    >

      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 200,
          height: 200,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.04)",
          pointerEvents: "none",
        }}
      />

      {/* Top section */}
      <div
        style={{
          padding: "80px 0 60px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[4fr_2fr_3fr_3fr] gap-10 lg:gap-[50px]">
            {/* About widget */}
            <div>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 28, color: "var(--secondary)" }}>
                  CHIOARY
                </span>
              </div>
              <p
                style={{
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                Charity and donation is category that
                <br /> involves giving.
              </p>
              {/* Social links */}
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  <>
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </>,
                  <>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </>,
                  <>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </>,
                  <>
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </>,
                ].map((path, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--secondary)";
                      e.currentTarget.style.borderColor = "var(--secondary)";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.15)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {path}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                style={{
                  fontSize: 18,
                  color: "#fff",
                  marginBottom: 28,
                  position: "relative",
                  paddingBottom: 16,
                }}
              >
                Quick links
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 40,
                    height: 2,
                    background: "var(--secondary)",
                    borderRadius: 1,
                  }}
                />
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        fontSize: 15,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "all 0.3s",
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--secondary)";
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3
                style={{
                  fontSize: 18,
                  color: "#fff",
                  marginBottom: 28,
                  position: "relative",
                  paddingBottom: 16,
                }}
              >
                Contact Us
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 40,
                    height: 2,
                    background: "var(--secondary)",
                    borderRadius: 1,
                  }}
                />
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <li style={{ display: "flex", gap: 12 }}>
                  <div
                    style={{
                      width: 20,
                      height: 20,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--secondary)"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--secondary)"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a
                    href="tel:2195550114"
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                    }}
                  >
                    (219) 555-0114
                  </a>
                </li>
                <li style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--secondary)"
                    strokeWidth="2"
                    style={{ flexShrink: 0 }}
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a
                    href="mailto:Chioary@gmail.com"
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                    }}
                  >
                    Chioary@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontSize: 18,
                  color: "#fff",
                  marginBottom: 28,
                  position: "relative",
                  paddingBottom: 16,
                }}
              >
                Services
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 40,
                    height: 2,
                    background: "var(--secondary)",
                    borderRadius: 1,
                  }}
                />
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                }}
              >
                {services.map((svc) => (
                  <li key={svc}>
                    <a
                      href="#"
                      style={{
                        fontSize: 15,
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "all 0.3s",
                        display: "block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "var(--secondary)";
                        e.currentTarget.style.paddingLeft = "6px";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        e.currentTarget.style.paddingLeft = "0";
                      }}
                    >
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ padding: "22px 0" }}>
        <div
          className="max-w-[1320px] mx-auto px-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", margin: 0 }}
          >
            © 2024{" "}
            <a
              href="#"
              style={{ color: "var(--secondary)", textDecoration: "none" }}
            >
              Chioary
            </a>
            . All rights reserved.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              gap: 24,
            }}
          >
            {["Terms of Service", "Privacy policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.4)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--secondary)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
