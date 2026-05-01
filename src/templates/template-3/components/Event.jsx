"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

const GREEN = "#007B39";
const ORANGE = "#FFA415";
const BG = "#F9F9F9";
const ACTIVE_H = "600px";
const SIDE_H = "480px";
const OPACITY_SIDE = 0.65;

const EVENTS = [
  {
    date: "10 August",
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=900&q=80",
    title: "Connect, Contribute, And Celebrate",
    by: "Brooklyn Simmons",
    time: "09:05AM Ã¢â‚¬â€œ 01:05 AM",
  },
  {
    date: "23 April",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
    title: "Community Health Awareness Day",
    by: "Courtney Henry",
    time: "10:00AM Ã¢â‚¬â€œ 03:00 PM",
  },
  {
    date: "03 June",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    title: "Environmental Clean-Up & Green Walk",
    by: "Ronald Richards",
    time: "07:30AM Ã¢â‚¬â€œ 12:00 PM",
  },
  {
    date: "10 March",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    title: "Children's Education Fundraising Gala",
    by: "Wade Warren",
    time: "06:00PM Ã¢â‚¬â€œ 09:30 PM",
  },
  {
    date: "18 July",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    title: "Annual Food & Nutrition Drive",
    by: "Jenny Wilson",
    time: "08:00AM Ã¢â‚¬â€œ 02:00 PM",
  },
];

/* Brush-stroke date badge */
function BrushBadge({ date, color }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        viewBox="0 0 160 60"
        style={{ width: "126px", height: "48px", display: "block" }}
        preserveAspectRatio="none"
      >
        <path
          d="M8 10 Q20 2 40 5 Q80 0 120 4 Q148 2 158 10 Q165 22 158 35 Q148 50 120 52 Q80 56 40 52 Q18 54 6 44 Q-2 34 8 10Z"
          fill={color}
        />
      </svg>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: "14px",
        }}
      >
        {date}
      </span>
    </div>
  );
}

export default function Event({ isAllEventsPage }) {
  const total = EVENTS.length;
  const ITEMS = [EVENTS[total - 1], ...EVENTS, EVENTS[0]]; // extended array
  const EXT = ITEMS.length; // total + 2

  const [activeDot, setActiveDot] = useState(0); // logical 0..total-1 (dots)
  const [activeTrack, setActiveTrack] = useState(1); // index in ITEMS (rendering)

  const trackIdxRef = useRef(1); // mirrors activeTrack for closures
  const trackRef = useRef(null);
  const vpRef = useRef(null);
  const [cardW, setCardW] = useState(0);
  const isPaused = useRef(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const isAnimating = useRef(false);

  /* measure viewport width Ã¢â€ â€™ cardW = vpW / 3 */
  useEffect(() => {
    const measure = () => {
      if (vpRef.current) setCardW(vpRef.current.offsetWidth / 3);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* centre formula */
  const getX = useCallback(
    (ti) => (cardW > 0 ? -(ti * cardW) + cardW : 0),
    [cardW],
  );

  /* snap on resize */
  useEffect(() => {
    if (cardW > 0 && trackRef.current) {
      gsap.set(trackRef.current, { x: getX(trackIdxRef.current) });
    }
  }, [cardW, getX]);

  /* core slide function */
  const moveTo = useCallback(
    (ti) => {
      if (isAnimating.current || cardW === 0) return;
      isAnimating.current = true;

      trackIdxRef.current = ti;
      // logical dot index
      const dot = (((ti - 1) % total) + total) % total;
      setActiveDot(dot);
      setActiveTrack(ti);

      gsap.to(trackRef.current, {
        x: getX(ti),
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimating.current = false;
          // Silent jump: clone Ã¢â€ â€™ real twin
          if (ti === 0) {
            // jumped to clone-of-last Ã¢â€ â€™ silently go to real last (index = total)
            const real = total;
            trackIdxRef.current = real;
            setActiveTrack(real);
            gsap.set(trackRef.current, { x: getX(real) });
          } else if (ti === EXT - 1) {
            // jumped to clone-of-first Ã¢â€ â€™ silently go to real first (index = 1)
            const real = 1;
            trackIdxRef.current = real;
            setActiveTrack(real);
            gsap.set(trackRef.current, { x: getX(real) });
          }
        },
      });
    },
    [cardW, getX, total, EXT],
  );

  /* auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current && inView) moveTo(trackIdxRef.current + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [moveTo, inView]);

  return (
    <section
      style={{
        background: BG,
        paddingTop: "100px",
        paddingBottom: "0",
        overflow: "hidden",
      }}
      onMouseEnter={() => {
        isPaused.current = true;
      }}
      onMouseLeave={() => {
        isPaused.current = false;
      }}
    >
      {/* heading */}
      <div
        style={{ textAlign: "center", marginBottom: "60px", padding: "0 16px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "14px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: GREEN,
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "#121d18",
            }}
          >
            Our Events
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(30px,4vw,48px)",
            fontWeight: 800,
            color: "#121d18",
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Upcoming Events
        </h2>
      </div>

      {/* carousel viewport */}
      <div
        ref={vpRef}
        style={{ width: "100%", overflow: "hidden", position: "relative" }}
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: 0,
            alignItems: "center",
            willChange: "transform",
          }}
        >
          {ITEMS.map((ev, i) => {
            const isActive = i === activeTrack;
            const accent = isActive ? GREEN : ORANGE;
            return (
              <div
                key={i}
                onClick={() => {
                  // Map ITEMS index back to logical dot, then move
                  if (!isActive) moveTo(i);
                }}
                style={{
                  flexShrink: 0,
                  width: cardW > 0 ? `${cardW}px` : "33.333vw",
                  height: isActive ? ACTIVE_H : SIDE_H,
                  position: "relative",
                  overflow: "hidden",
                  cursor: isActive ? "default" : "pointer",
                  opacity: isActive ? 1 : OPACITY_SIDE,
                  transition:
                    "height 0.65s cubic-bezier(.77,0,.18,1), opacity 0.5s ease",
                }}
              >
                {/* Full-bleed photo */}
                <Image
                  src={ev.img}
                  alt={ev.title}
                  layout="fill"
                  objectFit="cover"
                  priority={i <= 2}
                />

                {/* gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
                    zIndex: 1,
                  }}
                />

                {/* date badge top-left */}
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "20px",
                    zIndex: 2,
                  }}
                >
                  <BrushBadge date={ev.date} color={accent} />
                </div>

                {/* bottom info */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "24px",
                    right: "76px",
                    zIndex: 2,
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: isActive ? "22px" : "16px",
                      lineHeight: 1.3,
                      marginBottom: "8px",
                      transition: "font-size 0.4s",
                    }}
                  >
                    {ev.title}
                  </h3>
                  {isActive && (
                    <p
                      style={{
                        color: "rgba(255,255,255,0.8)",
                        fontSize: "13px",
                        margin: 0,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                      }}
                    >
                      <span>By {ev.by}</span>
                      <span style={{ color: "rgba(255,255,255,0.55)" }}>
                        {ev.time}
                      </span>
                    </p>
                  )}
                </div>

                {/* circular arrow */}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    moveTo(i + 1);
                  }}
                  style={{
                    position: "absolute",
                    bottom: "18px",
                    right: "18px",
                    zIndex: 2,
                    width: isActive ? "46px" : "34px",
                    height: isActive ? "46px" : "34px",
                    borderRadius: "50%",
                    background: accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "width 0.4s, height 0.4s",
                  }}
                >
                  <svg
                    width={isActive ? 18 : 14}
                    height={isActive ? 18 : 14}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* square dot pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          padding: "36px 0 40px",
        }}
      >
        {EVENTS.map((_, i) => (
          <button
            key={i}
            onClick={() => moveTo(i + 1)}
            aria-label={`Event ${i + 1}`}
            style={{
              width: "11px",
              height: "11px",
              border: `1.5px solid ${i === activeDot ? GREEN : "#bbb"}`,
              background: i === activeDot ? GREEN : "transparent",
              cursor: "pointer",
              padding: 0,
              outline: "none",
              transition: "background 0.25s, border-color 0.25s",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* View All Events (preserved) */}
      {!isAllEventsPage && (
        <div className="flex justify-center pb-16 relative z-10">
          <Link href="/templates/template-4/events">
            <a className="t2-btn ">
              <span>View All Events</span>
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </i>
            </a>
          </Link>
        </div>
      )}
    </section>
  );
}

