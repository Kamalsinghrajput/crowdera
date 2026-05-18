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
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimateIn(true)),
    );
  };
  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => setShowModal(false), 350);
  };
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <>
      <div className="group flex flex-col gap-6">
        {/* Circular photo */}
        <div
          onClick={openModal}
          style={{
            width: 240,
            height: 240,
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto",
            background: "#fff",
            padding: 8,
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Image
              src={member.img}
              alt={member.name}
              width={224}
              height={224}
              className="w-full h-full object-cover object-top transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,123,57,0.40)",
                opacity: 0,
                transition: "opacity 0.5s ease",
                mixBlendMode: "multiply",
              }}
              className="group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Info Row */}
        <div className="flex items-center gap-4 px-2">
          {/* Socials */}
          <div
            className="relative group/social w-12 h-12 shrink-0"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <div
              className="absolute bottom-full left-1/2 pb-3 flex flex-col items-center gap-2 z-20"
              style={{
                opacity: btnHovered ? 1 : 0,
                visibility: btnHovered ? "visible" : "hidden",
                transform: `translateX(-50%) translateY(${btnHovered ? "0" : "8px"})`,
                transition: "all 0.3s ease",
              }}
            >
              <a
                href={member.socials?.x || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-md text-white"
                style={{ background: "#1DA1F2" }}
              >
                <FaTwitter size={14} />
              </a>
              <a
                href={member.socials?.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-md text-white"
                style={{ background: "#0A66C2" }}
              >
                <FaLinkedinIn size={14} />
              </a>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#121d18] flex items-center justify-center cursor-pointer text-white transition group-hover/social:bg-[#FFA415]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover/social:rotate-45"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>

          {/* Name */}
          <div>
            <h3 className="text-[20px] text-[#121d18] mb-1 leading-[1.2] transition group-hover:text-[#FFA415]">
              <button
                onClick={openModal}
                className="bg-transparent border-none cursor-pointer text-inherit font-inherit text-left"
              >
                {member.name}
              </button>
            </h3>
            <p className="text-[14px] text-[#6c6e76] m-0">{member.role}</p>
          </div>
        </div>
      </div>

      {/* Animated Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            backgroundColor: animateIn ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
            backdropFilter: animateIn ? "blur(6px)" : "blur(0px)",
            transition:
              "background-color 350ms ease, backdrop-filter 350ms ease",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              background: "#333",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "row",
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              position: "relative",
              opacity: animateIn ? 1 : 0,
              transform: animateIn
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.95)",
              transition:
                "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
                zIndex: 10,
              }}
            >
              <FiX size={24} />
            </button>

            {/* Left image */}
            <div
              style={{
                width: "50%",
                minHeight: "400px",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Right content */}
            <div
              style={{
                flex: 1,
                padding: "40px",
                display: "flex",
                flexDirection: "column",
                fontFamily: "Inter, sans-serif",
                overflowY: "auto",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                <span
                  style={{
                    background: "#FFA415",
                    color: "#111",
                    fontSize: 11,
                    fontWeight: 900,
                    padding: "6px 12px",
                    borderRadius: 6,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Board Member
                </span>
              </div>
              <h2
                style={{
                  fontSize: "clamp(24px,3vw,36px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 12,
                  fontFamily: "Sora, sans-serif",
                }}
              >
                {member.name}
              </h2>
              <p
                style={{
                  color: "#ccc",
                  fontSize: 15,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                {member.bio ||
                  "A dedicated board member committed to driving our mission forward with expertise, passion, and leadership."}
              </p>
              <div
                style={{
                  borderTop: "1px solid #444",
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: 24,
                }}
              >
                {[
                  ["Designation", member.role],
                  ["Organization", member.organization || "Chioary Foundation"],
                  ["Joined At", member.joinedAt || "2020"],
                  ["Status", member.status || "Active"],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom: "1px solid #444",
                      paddingBottom: 10,
                      fontSize: 13,
                    }}
                  >
                    <span
                      style={{
                        color: "#999",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: 10,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {label}
                    </span>
                    <span style={{ color: "#fff", fontWeight: 700 }}>
                      {val}
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, marginTop: "auto" }}>
                <a
                  href={member.socials?.x || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "#FFA415",
                    color: "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <FaTwitter size={16} />
                </a>
                <a
                  href={member.socials?.linkedin || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "#FFA415",
                    color: "#111",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
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
