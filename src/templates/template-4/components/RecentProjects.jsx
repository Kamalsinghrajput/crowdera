"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const PROJECTS = [
  {
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=700&q=80",
    title: "Food For Every Child",
    category: "Nutrition",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=700&q=80",
    title: "Clean Water For All",
    category: "Water",
  },
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80",
    title: "Education Without Borders",
    category: "Education",
  },
  {
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=80",
    title: "Community Health Drive",
    category: "Healthcare",
  },
  {
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=700&q=80",
    title: "Green Earth Initiative",
    category: "Environment",
  },
  {
    img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=700&q=80",
    title: "Hope For Tomorrow",
    category: "Youth",
  },
  {
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80",
    title: "Shelter & Safety",
    category: "Housing",
  },
];

// Double for seamless infinite loop
const TRACK = [...PROJECTS, ...PROJECTS];

const CARD_HEIGHT = 420;
const CARD_GAP = 30; // px gap between cards

function ProjectCard({ project, hovered, onEnter, onLeave }) {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (hovered) {
      // Top-Left corner starts growing to Right and Bottom
      gsap.to(topRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "left",
      });
      gsap.to(leftRef.current, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "top",
      });
      // Bottom-Right corner starts growing to Left and Top
      gsap.to(bottomRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "right",
      });
      gsap.to(rightRef.current, {
        scaleY: 1,
        duration: 0.4,
        ease: "power2.out",
        transformOrigin: "bottom",
      });
    } else {
      // Shrink back to 0
      gsap.to([topRef.current, bottomRef.current], {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.in",
      });
      gsap.to([leftRef.current, rightRef.current], {
        scaleY: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [hovered]);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        height: CARD_HEIGHT,
        borderRadius: 20,
        cursor: "pointer",
        overflow: "hidden", // Ensures everything stays within the image boundary
      }}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={600}
        height={CARD_HEIGHT}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* GSAP Animated Outline Box */}
      <div
        style={{
          position: "absolute",
          top: 15,
          left: 15,
          right: 15,
          bottom: 15,
          zIndex: 10,
          pointerEvents: "none",
        }}
      >
        {/* Top line (grows left to right) */}
        <div
          ref={topRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.85)",
            transform: "scaleX(0)",
          }}
        />
        {/* Left line (grows top to bottom) */}
        <div
          ref={leftRef}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: 2,
            background: "rgba(255,255,255,0.85)",
            transform: "scaleY(0)",
          }}
        />

        {/* Bottom line (grows right to left) */}
        <div
          ref={bottomRef}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 2,
            background: "rgba(255,255,255,0.85)",
            transform: "scaleX(0)",
          }}
        />
        {/* Right line (grows bottom to top) */}
        <div
          ref={rightRef}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            width: 2,
            background: "rgba(255,255,255,0.85)",
            transform: "scaleY(0)",
          }}
        />
      </div>

      {/* Hover: orange circular navigation button at bottom center */}
      <Link href="#">
        <a
          style={{
            position: "absolute",
            bottom: hovered ? 30 : 10,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 11,
            width: 58,
            height: 58,
            borderRadius: "50%",
            background: "#FFA415",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hovered ? 1 : 0,
            visibility: hovered ? "visible" : "hidden",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            boxShadow: "0 6px 24px rgba(255,164,21,0.55)",
          }}
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
        </a>
      </Link>
    </div>
  );
}

export default function RecentProjects() {
  const [current, setCurrent] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [hovered, setHovered] = useState(null);
  const intervalRef = useRef(null);

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setCurrent((p) => p + 1), 3500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  // Seamless reset when first copy ends
  useEffect(() => {
    if (current >= PROJECTS.length) {
      const t = setTimeout(() => {
        setAnimated(false);
        setCurrent(0);
        setTimeout(() => setAnimated(true), 50);
      }, 650);
      return () => clearTimeout(t);
    }
  }, [current]);

  const activeIdx = current % PROJECTS.length;

  const cardWidth = `calc((100vw - 240px) / 3)`;

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        paddingBottom: 80,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: `calc(110px + 160px + 56px + ${CARD_HEIGHT / 2}px)`,
          background: "#121d18",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: `calc(110px + 160px + 56px + ${CARD_HEIGHT / 2}px)`,
          left: 0,
          right: 0,
          bottom: 0,
          background: "#f6f6f6",
          zIndex: 0,
        }}
      />

      <div
        style={{
          textAlign: "center",
          paddingTop: 110,
          marginBottom: 56,
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#FFA415",
            }}
          />
          <span style={{ fontSize: 16, color: "#fff", fontStyle: "italic" }}>
            Our Recent Project
          </span>
        </div>
        <h2
          style={{
            color: "#fff",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.2,
            margin: 0,
          }}
        >
          One Project At A Time
        </h2>
      </div>

      <div
        style={{
          overflow: "hidden",
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: CARD_GAP,
            paddingLeft: 60,
            transform: `translateX(calc(-${current} * (${cardWidth} + ${CARD_GAP}px)))`,
            transition: animated
              ? "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
            willChange: "transform",
          }}
        >
          {TRACK.map((project, i) => (
            <div
              key={i}
              style={{
                // flex: `0 0 ${cardWidth}`,
                // width: cardWidth,
                flexShrink: 0,
              }}
            >
              <ProjectCard
                project={project}
                hovered={hovered === i}
                onEnter={() => setHovered(i)}
                onLeave={() => setHovered(null)}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginTop: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAnimated(true);
              setCurrent(i);
              startAuto();
            }}
            style={{
              width: 10,
              height: 10,
              borderRadius: 2,
              background: i === activeIdx ? "#FFA415" : "transparent",
              border: i === activeIdx ? "none" : "1.5px solid #bbb",
              cursor: "pointer",
              padding: 0,
              transition: "all 0.35s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}
