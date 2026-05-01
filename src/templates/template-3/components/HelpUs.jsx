"use client";
import { useState } from "react";

const GREEN  = "#007B39";
const ORANGE = "#FFA415";
const DARK   = "#121d18";

function VolunteerCard({ title, type }) {
  const [hovered, setHovered] = useState(false);
  const isVolunteer = type === "volunteer";

  const bgImage = isVolunteer
    ? "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80"
    : "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80";

  const accentColor = isVolunteer ? GREEN : ORANGE;

  return (
    <div
      style={{
        flex: 1,
        minHeight: "520px",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "rgba(0,0,0,0.6)"
            : "rgba(0,0,0,0.5)",
          transition: "background 0.4s ease",
        }}
      />

      {/* Accent color strip at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: accentColor,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 48px",
          gap: "28px",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            backgroundColor: accentColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          }}
        >
          {isVolunteer ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          )}
        </div>

        {/* Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: accentColor, display: "inline-block" }} />
          <span style={{ fontSize: "15px", fontStyle: "italic", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.02em" }}>
            {isVolunteer ? "Join Our Team" : "Support Us"}
          </span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(28px, 3vw, 42px)",
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.2,
            margin: 0,
            transition: "transform 0.3s ease",
            transform: hovered ? "translateY(-4px)" : "translateY(0)",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.7,
            maxWidth: "380px",
            margin: 0,
          }}
        >
          {isVolunteer
            ? "Join our passionate team of volunteers and make a real difference in communities around the world. Together we create lasting change."
            : "Your generosity can transform lives. Every contribution, big or small, helps us reach those who need it most."}
        </p>

        {/* CTA Button */}
        <div style={{ marginTop: "8px" }}>
          <a
            href="#"
            className="t2-btn"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                "--primary": accentColor,
                backgroundColor: accentColor,
                color: isVolunteer ? "#fff" : DARK,
              }}
            >
              {isVolunteer ? "Become a Volunteer" : "Make a Donation"}
            </span>
            <i style={{ backgroundColor: accentColor, color: isVolunteer ? "#fff" : DARK }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HelpUs() {
  return (
    <section style={{ display: "flex", minHeight: "520px" }}>
      <VolunteerCard title="Become A Volunteer" type="volunteer" />
      <VolunteerCard title="Make A Donation" type="donation" />
    </section>
  );
}
