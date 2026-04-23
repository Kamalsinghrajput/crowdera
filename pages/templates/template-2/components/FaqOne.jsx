"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "Can I organize a fundraiser for your charity?",
    a: "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited.",
  },
  {
    q: "How can I stay updated on your activities?",
    a: "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited.",
    defaultOpen: true,
  },
  {
    q: "Do you collaborate with other organizations?",
    a: "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited.",
  },
  {
    q: "What kind of services do you provide?",
    a: "We are committed to maintaining the highest standards of transparency. Our financial statements, annual reports, and impact assessments are publicly available, and we are regularly audited.",
  },
];

export default function FaqOne() {
  const [open, setOpen] = useState(1);

  return (
    <section
      style={{
        background: "#F9F9F9",
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-3">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
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
                Our Faq
              </span>
            </div>
            <h2
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 1.2,
                color: "#121D18",
                marginBottom: 40,
              }}
            >
              Frequently Asking
              <br /> Questions.
            </h2>
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
                More Questions
              </span>
              <span
                style={{
                  width: 52,
                  height: 52,
                  background: "#007B39",
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

          {/* Right — accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  border:
                    open === i ? "1px solid #007B39" : "1px solid #E2E2E2",
                  background: "#fff",
                  transition: "border-color 0.3s",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <h4
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: 17,
                      color: open === i ? "#007B39" : "#121D18",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </h4>
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "50%",
                      background: open === i ? "#007B39" : "#F5F5F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginLeft: 16,
                      transition: "background 0.3s",
                    }}
                  >
                    <span
                      style={{
                        color: open === i ? "#fff" : "#121D18",
                        fontSize: 18,
                        lineHeight: 1,
                        fontWeight: 300,
                      }}
                    >
                      {open === i ? "−" : "+"}
                    </span>
                  </div>
                </button>
                {open === i && (
                  <div style={{ padding: "0 24px 22px" }}>
                    <p
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: 15,
                        color: "#6C6E76",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
