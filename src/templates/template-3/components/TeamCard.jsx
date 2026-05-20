"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export default function TeamCard({ member }) {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const openModal = () => {
    setShowModal(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimateIn(true)));
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => setShowModal(false), 350);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
        {/* Image Container — clickable */}
        <div
          onClick={openModal}
          style={{
            width: "100%",
            position: "relative",
            backgroundColor: "#f0f0f0",
            aspectRatio: "4/5",
            overflow: "visible",
            cursor: "pointer",
          }}
        >
          <Image
            src={member.img}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            style={{ transition: "transform 0.5s ease" }}
          />

          {/* Floating Add/Social Button */}
          <div
            style={{ position: "absolute", bottom: "-20px", left: "20px", zIndex: 10 }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: "relative" }}>
              {/* Social Links Popup */}
              <div
                style={{
                  position: "absolute",
                  bottom: "100%",
                  left: "50%",
                  transform: `translateX(-50%) translateY(${btnHovered ? "0px" : "8px"})`,
                  paddingBottom: "10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  opacity: btnHovered ? 1 : 0,
                  visibility: btnHovered ? "visible" : "hidden",
                  transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
                  pointerEvents: btnHovered ? "auto" : "none",
                }}
              >
                <a
                  href={member.socials?.x || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: "#1DA1F2", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  <FaTwitter />
                </a>
                <a
                  href={member.socials?.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: "#0A66C2", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  }}
                >
                  <FaLinkedinIn />
                </a>
              </div>

              {/* Main + Button */}
              <div
                style={{
                  width: "48px", height: "48px", borderRadius: "50%",
                  backgroundColor: "#121d18", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                  transform: btnHovered ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Info Row */}
        <div style={{ textAlign: "center" }}>
          <h3 style={{ fontSize: "22px", color: "#121d18", marginBottom: "6px", fontWeight: 700 }}>
            <button
              onClick={openModal}
              style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: "inherit", fontWeight: "inherit", fontFamily: "inherit" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#121d18")}
            >
              {member.name}
            </button>
          </h3>
          <p style={{ fontSize: "15px", color: "#6c6e76", margin: 0 }}>{member.role}</p>
        </div>
      </div>

      {/* Animated Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "16px",
            backgroundColor: animateIn ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
            backdropFilter: animateIn ? "blur(6px)" : "blur(0px)",
            transition: "background-color 350ms ease, backdrop-filter 350ms ease",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%", maxWidth: "900px",
              background: "#333333", borderRadius: "16px",
              overflow: "hidden", display: "flex",
              flexDirection: "row", boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              position: "relative",
              opacity: animateIn ? 1 : 0,
              transform: animateIn ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
              transition: "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "transparent", border: "none",
                color: "#aaa", cursor: "pointer", zIndex: 10,
              }}
            >
              <FiX size={24} />
            </button>

            {/* Left Image */}
            <div style={{ width: "50%", minHeight: "400px", position: "relative", flexShrink: 0 }}>
              <Image src={member.img} alt={member.name} layout="fill" objectFit="cover" />
            </div>

            {/* Right Content */}
            <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", fontFamily: "Inter, sans-serif", overflowY: "auto" }}>
              <div style={{ marginBottom: "16px" }}>
                <span style={{ background: "var(--secondary)", color: "#111", fontSize: "11px", fontWeight: 900, padding: "6px 12px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Board Member
                </span>
              </div>
              <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 800, color: "#fff", marginBottom: "12px", fontFamily: "Sora, sans-serif" }}>
                {member.name}
              </h2>
              <p style={{ color: "#ccc", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>
                {member.bio || "A dedicated board member committed to driving our mission forward with expertise, passion, and leadership."}
              </p>

              <div style={{ borderTop: "1px solid #444", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                {[
                  ["Designation", member.role],
                  ["Organization", member.organization || "Chioary Foundation"],
                  ["Joined At", member.joinedAt || "2020"],
                  ["Status", member.status || "Active"],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #444", paddingBottom: "10px", fontSize: "13px" }}>
                    <span style={{ color: "#999", fontWeight: 700, textTransform: "uppercase", fontSize: "10px", letterSpacing: "0.1em" }}>{label}</span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>{val}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
                <a href={member.socials?.x || "#"} target="_blank" rel="noopener noreferrer"
                  style={{ width: "40px", height: "40px", borderRadius: "8px", background: "var(--secondary)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                  <FaTwitter size={16} />
                </a>
                <a href={member.socials?.linkedin || "#"} target="_blank" rel="noopener noreferrer"
                  style={{ width: "40px", height: "40px", borderRadius: "8px", background: "var(--secondary)", color: "#111", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
