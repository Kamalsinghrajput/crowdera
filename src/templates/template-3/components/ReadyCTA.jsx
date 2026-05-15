"use client";
import React from "react";
import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "#EBD3AF",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#007B39",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "#121d18",
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            Get Involved
          </span>
        </div>

        <h2
          style={{
            fontSize: "clamp(32px,4vw,48px)",
            lineHeight: 1.2,
            color: "#121d18",
            marginBottom: "20px",
            fontWeight: 800,
          }}
        >
          Ready to Make a Difference?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(18,29,24,0.72)",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Join us in our mission to bring joy and support to those in need.
          Every contribution counts towards building a better future.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Link href="/templates/template-3/initiatives">
            <a className="t2-btn">
              <span>Start a Campaign</span>
            </a>
          </Link>
          <Link href="#team">
            <a
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#121d18",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#007B39")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#121d18")}
            >
              Meet Our Team
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
