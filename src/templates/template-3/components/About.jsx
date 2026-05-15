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

          {/* ====== RIGHT COLUMN — Images ====== */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[520px] mt-12 lg:mt-0 px-4 sm:px-8 lg:px-0">

            {/* Main large image */}
            <div
              className="relative w-full h-[400px] lg:h-[520px] overflow-hidden"
              style={{
                borderRadius: "20px 20px 20px 150px",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=800&q=80"
                alt="About our mission"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Overlay video thumbnail — top-left */}
            <div
              className="absolute top-10 left-0 lg:-left-16 w-[160px] h-[120px] lg:w-[200px] lg:h-[150px] rounded-2xl overflow-hidden shadow-2xl translate-x-4 lg:translate-x-0"
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
              className="absolute bottom-10 left-0 lg:-left-12 bg-[#007B39] rounded-2xl p-4 lg:p-[18px_22px] shadow-lg min-w-[140px] lg:min-w-[160px] translate-x-4 lg:translate-x-0"
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
              className="absolute -top-5 right-0 lg:-right-5 opacity-[0.08] -translate-x-4 lg:translate-x-0"
              width="120"
              height="120"
              viewBox="0 0 120 120"
            >
              <circle cx="60" cy="60" r="55" stroke="#121D18" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
            </svg>
          </div>
        </div>

        {/* —— Join Us Bar —— */}
        <div
          className="mt-12 lg:mt-20 bg-[#f8f8f5] rounded-[20px] p-6 lg:p-[28px_36px] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Avatars + CTA text */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            {/* Overlapping avatars */}
            <div className="flex shrink-0">
              {TEAM_AVATARS.map((src, i) => (
                <div
                  key={i}
                  className="w-11 h-11 rounded-full border-2 border-white overflow-hidden relative shadow-md"
                  style={{
                    marginLeft: i === 0 ? 0 : -14,
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
            <a className="t2-btn inline-flex whitespace-nowrap">
              <span>Join Us</span>
            </a>
          </Link>
        </div>

      </div>
    </section>
  );
}


