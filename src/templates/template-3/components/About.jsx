"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";
import {
  FiUsers,
  FiDollarSign,
  FiGlobe,
  FiPlay,
} from "react-icons/fi";

const STATS = [
  { icon: FiUsers, value: "50,000+", label: "Volunteers Engaged" },
  { icon: FiDollarSign, value: "20,000+", label: "Total Funds Raised" },
  { icon: FiGlobe, value: "30,000+", label: "Countries Reached" },
];

const TEAM_AVATARS = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
];

export default function About() {
  const badgeRef = useRef(null);
  const headingRef = useHeadingAnimation();

  useEffect(() => {
    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        rotation: 360,
        duration: 15,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
      });
    }
  }, []);

  return (
    <section id="about" className="py-[110px] bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        {/* â”€â”€ Main Two-Column Row â”€â”€ */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* ====== LEFT COLUMN â€” Text ====== */}
          <div className="w-full lg:w-1/2 flex flex-col gap-7">
            {/* Sub-label */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#007B39] rounded-full" />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "#007B39",
                }}
              >
                Our About
              </span>
            </div>

            {/* Heading */}
            <h2
              ref={headingRef}
              style={{
                fontFamily: "Sora, sans-serif",
                fontSize: "clamp(32px, 3.5vw, 50px)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#121D18",
                margin: 0,
              }}
            >
              Empowering Lives Through Compassion.
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 15,
                lineHeight: 1.85,
                color: "#6F767E",
                margin: 0,
              }}
            >
              &ldquo;Empowering Lives Through Compassion&rdquo; is a powerful
              and inspiring heading that perfectly captures the essence of your
              charity&apos;s mission. It&apos;s a great choice for connecting
              hearts and building a movement of positive change around the world.
            </p>

            {/* Read More Button */}
            <div>
              <Link href="#about">
                <a className="t2-btn  inline-flex">
                  <span>Read More</span>
                  <i>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="-rotate-45"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </i>
                </a>
              </Link>
            </div>

            {/* Stats Row */}
            <div
              style={{
                display: "flex",
                gap: 32,
                paddingTop: 24,
                borderTop: "1px solid #f0f0f0",
                flexWrap: "wrap",
              }}
            >
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <Icon size={22} color="#9ca3af" strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: "Sora, sans-serif",
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#121D18",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                        color: "#6F767E",
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ====== RIGHT COLUMN â€” Images ====== */}
          <div className="w-full lg:w-1/2 relative" style={{ minHeight: 520 }}>

            {/* Main large image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: 520,
                borderRadius: "20px 20px 20px 150px",
                overflow: "hidden",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=800&q=80"
                alt="About our mission"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Overlay video thumbnail â€” top-left */}
            <div
              style={{
                position: "absolute",
                top: 40,
                left: -60,
                width: 200,
                height: 150,
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80"
                alt="Video thumbnail"
                layout="fill"
                objectFit="cover"
              />
              {/* Play button overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#FFA415",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 20px rgba(255,164,21,0.5)",
                  }}
                >
                  <FiPlay size={18} color="#fff" fill="#fff" />
                </div>
              </div>
            </div>

            {/* 25 Years Experience badge */}
            <div
              style={{
                position: "absolute",
                bottom: 60,
                left: -50,
                background: "#007B39",
                borderRadius: 16,
                padding: "18px 22px",
                boxShadow: "0 10px 40px rgba(0,123,57,0.3)",
                minWidth: 160,
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontSize: 38,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                25
              </div>
              <div
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.85)",
                  marginTop: 4,
                }}
              >
                Years Experience
              </div>
            </div>

            {/* Decorative circle */}
            <svg
              ref={badgeRef}
              style={{ position: "absolute", top: -20, right: -20, opacity: 0.08 }}
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="55" stroke="#121D18" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
            </svg>
          </div>
        </div>

        {/* â”€â”€ Join Us Bar â”€â”€ */}
        <div
          style={{
            marginTop: 80,
            background: "#f8f8f5",
            borderRadius: 20,
            padding: "28px 36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            flexWrap: "wrap",
          }}
        >
          {/* Avatars + CTA text */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Overlapping avatars */}
            <div style={{ display: "flex" }}>
              {TEAM_AVATARS.map((src, i) => (
                <div
                  key={i}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    overflow: "hidden",
                    position: "relative",
                    marginLeft: i === 0 ? 0 : -14,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  }}
                >
                  <Image src={src} alt="Team member" layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                fontStyle: "italic",
                color: "#6F767E",
                margin: 0,
                maxWidth: 560,
              }}
            >
              At Chioary we believe that everyone has the power to create positive
              change. By joining our community you help us reach more lives.
            </p>
          </div>

          {/* Join Us Button */}
          <Link href="#contact">
            <a className="t2-btn  inline-flex" style={{ whiteSpace: "nowrap" }}>
              <span>Join Us</span>
              <i>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="-rotate-45">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </i>
            </a>
          </Link>
        </div>

      </div>
    </section>
  );
}


