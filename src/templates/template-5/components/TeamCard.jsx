"use client";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SOCIALS = [
  { key: "fb", Icon: FaFacebookF },
  { key: "tw", Icon: FaTwitter },
  { key: "in", Icon: FaLinkedinIn },
];

export default function TeamCard({ member }) {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "24px",
      }}
    >
      {/* Image Container */}
      <div
        style={{
          width: "100%",
          position: "relative",
          backgroundColor: "#f0f0f0",
          aspectRatio: "4/5",
          overflow: "visible",
        }}
      >
        <Image
          src={member.img}
          alt={member.name}
          layout="fill"
          objectFit="cover"
          style={{ transition: "transform 0.5s ease" }}
        />

        {/* Floating Add/Social Button — hover lives HERE only */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "20px",
            zIndex: 10,
          }}
          onMouseEnter={() => setBtnHovered(true)}
          onMouseLeave={() => setBtnHovered(false)}
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
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
                pointerEvents: btnHovered ? "auto" : "none",
              }}
            >
              {SOCIALS.map(({ key, Icon }) => (
                <a
                  key={key}
                  href="#"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    color: "#121d18",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    textDecoration: "none",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                    transition: "background-color 0.25s, color 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFA415";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#121d18";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Main + Button */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#121d18",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background-color 0.3s, transform 0.3s",
                transform: btnHovered ? "rotate(45deg)" : "rotate(0deg)",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Info Row */}
      <div style={{ textAlign: "center" }}>
        <h3
          style={{
            fontSize: "22px",
            color: "#121d18",
            marginBottom: "6px",
            fontWeight: 700,
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: "inherit",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#007B39")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "inherit")}
          >
            {member.name}
          </a>
        </h3>
        <p style={{ fontSize: "15px", color: "#6c6e76", margin: 0 }}>
          {member.role}
        </p>
      </div>
    </div>
  );
}
