"use client";
import { useState } from "react";

export default function NewsletterOne() {
  const [email, setEmail] = useState("");

  return (
    <section
      style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 123, 57, 0.92)",
        }}
      />

      <div
        className="max-w-[1320px] mx-auto px-3"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              color: "#fff",
              marginBottom: 20,
            }}
          >
            Get updated by subscribing to
            <br /> our newsletter
          </h2>
          <p
            style={{
              fontFamily: "Sora, sans-serif",
              fontSize: 16,
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.8,
              marginBottom: 44,
            }}
          >
            Join our community of supporters by subscribing to our newsletter!
            <br />
            Get the latest updates on our projects, events, and stories of
            impact.
          </p>

          {/* Form */}
          <form
            style={{
              display: "flex",
              alignItems: "stretch",
              maxWidth: 540,
              margin: "0 auto",
              background: "#fff",
              borderRadius: 40,
              overflow: "hidden",
              padding: "6px 6px 6px 24px",
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontFamily: "Sora, sans-serif",
                fontSize: 15,
                color: "#121D18",
                background: "transparent",
                padding: "6px 0",
              }}
            />

            <button
              type="submit"
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "#121D18",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#FFA415")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#121D18")
              }
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
