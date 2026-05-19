"use client";
import React from "react";
import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section
      style={{
        padding: "120px 0",
        background: "var(--bg-color)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px" }}>
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
              background: "var(--primary)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              color: "var(--primary)",
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
            color: "#ffffff",
            marginBottom: "20px",
            fontWeight: 800,
          }}
        >
          Ready to Make a Difference?
        </h2>

        <p
          style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.72)",
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
          <Link href="/templates/template-5/initiatives">
            <a className="inline-block bg-[var(--primary)] text-white font-['Montserrat'] font-bold text-[15px] uppercase px-10 py-[18px] transition-colors duration-300 hover:bg-[var(--secondary)] no-underline rounded-full shadow-lg">
              Start a Campaign
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
