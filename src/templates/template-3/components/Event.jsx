"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

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
    time: "09:05AM , 01:05 AM",
  },
  {
    date: "23 April",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
    title: "Community Health Awareness Day",
    by: "Courtney Henry",
    time: "10:00AM , 03:00 PM",
  },
  {
    date: "03 June",
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    title: "Environmental Clean-Up & Green Walk",
    by: "Ronald Richards",
    time: "07:30AM , 12:00 PM",
  },
  {
    date: "10 March",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=900&q=80",
    title: "Children's Education Fundraising Gala",
    by: "Wade Warren",
    time: "06:00PM ‚ 09:30 PM",
  },
  {
    date: "18 July",
    img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
    title: "Annual Food & Nutrition Drive",
    by: "Jenny Wilson",
    time: "08:00AM ‚ 02:00 PM",
  },
];

import BrushBadge from "./BrushBadge";

export default function Event({ isAllEventsPage }) {
  const headingRef = useHeadingAnimation();
  const totalEvents = EVENTS.length;
  const ITEMS = [EVENTS[totalEvents - 1], ...EVENTS, EVENTS[0]]; // extended array
  const extendedTotal = ITEMS.length; // total + 2

  const [activeDot, setActiveDot] = useState(0); // logical 0..total-1 (dots)
  const [activeTrackIndex, setActiveTrackIndex] = useState(1); // index in ITEMS (rendering)

  const trackIndexRef = useRef(1); // mirrors activeTrack for closures
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [views, setViews] = useState(3); // default to desktop view
  const isPaused = useRef(false);
  const [inView, setInView] = useState(true);
  const sectionRef = useRef(null);
  const isAnimating = useRef(false);

  /* measure viewport width Ã¢â€ â€™ calculate cardWidth based on views */
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const vpW = viewportRef.current.offsetWidth;
        const currentViews = vpW < 768 ? 1 : vpW < 1024 ? 2 : 3;
        setViews(currentViews);
        setCardWidth(vpW / currentViews);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* centre formula: offset the active card so it stays in the visible window */
  const getTranslateX = useCallback(
    (targetIndex) => {
      if (cardWidth === 0) return 0;
      const offset = ((views - 1) / 2) * cardWidth;
      return -(targetIndex * cardWidth) + offset;
    },
    [cardWidth, views],
  );

  /* snap on resize */
  useEffect(() => {
    if (cardWidth > 0 && trackRef.current) {
      gsap.set(trackRef.current, { x: getTranslateX(trackIndexRef.current) });
    }
  }, [cardWidth, getTranslateX]);

  /* core slide function */
  const slideToIndex = useCallback(
    (targetIndex) => {
      if (isAnimating.current || cardWidth === 0) return;
      isAnimating.current = true;

      trackIndexRef.current = targetIndex;
      // logical dot index
      const dot =
        (((targetIndex - 1) % totalEvents) + totalEvents) % totalEvents;
      setActiveDot(dot);
      setActiveTrackIndex(targetIndex);

      gsap.to(trackRef.current, {
        x: getTranslateX(targetIndex),
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimating.current = false;
          // Silent jump: clone Ã¢â€ â€™ real twin
          if (targetIndex === 0) {
            // jumped to clone-of-last Ã¢â€ â€™ silently go to real last (index = total)
            const real = totalEvents;
            trackIndexRef.current = real;
            setActiveTrackIndex(real);
            gsap.set(trackRef.current, { x: getTranslateX(real) });
          } else if (targetIndex === extendedTotal - 1) {
            // jumped to clone-of-first Ã¢â€ â€™ silently go to real first (index = 1)
            const real = 1;
            trackIndexRef.current = real;
            setActiveTrackIndex(real);
            gsap.set(trackRef.current, { x: getTranslateX(real) });
          }
        },
      });
    },
    [cardWidth, getTranslateX, totalEvents, extendedTotal],
  );

  /* auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current && inView) slideToIndex(trackIndexRef.current + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [slideToIndex, inView]);

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
          ref={headingRef}
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

      {/* Conditional Render: Grid vs Carousel */}
      {isAllEventsPage ? (
        <div className="max-w-[1320px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {EVENTS.map((eventData, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                overflow: "hidden",
                borderRadius: "16px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {/* Full-bleed photo */}
              <Image
                src={eventData.img}
                alt={eventData.title}
                layout="fill"
                objectFit="cover"
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
                <BrushBadge date={eventData.date} color={GREEN} />
              </div>

              {/* bottom info */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "24px",
                  right: "24px",
                  zIndex: 2,
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "22px",
                    lineHeight: 1.3,
                    marginBottom: "8px",
                  }}
                >
                  {eventData.title}
                </h3>
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
                  <span>By {eventData.by}</span>
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>
                    {eventData.time}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* carousel viewport – fixed height so card height transitions never shift siblings */}
          <div
            ref={viewportRef}
            style={{
              width: "100%",
              height: ACTIVE_H,
              overflow: "hidden",
              position: "relative",
            }}
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
              {ITEMS.map((eventData, index) => {
                const isActive = index === activeTrackIndex;
                const accent = isActive ? GREEN : ORANGE;
                return (
                  <div
                    key={index}
                    onClick={() => {
                      // Map ITEMS index back to logical dot, then move
                      if (!isActive) slideToIndex(index);
                    }}
                    style={{
                      flexShrink: 0,
                      width:
                        cardWidth > 0 ? `${cardWidth}px` : `${100 / views}vw`,
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
                      src={eventData.img}
                      alt={eventData.title}
                      layout="fill"
                      objectFit="cover"
                      priority={index <= 2}
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
                      <BrushBadge date={eventData.date} color={accent} />
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
                        {eventData.title}
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
                          <span>By {eventData.by}</span>
                          <span style={{ color: "rgba(255,255,255,0.55)" }}>
                            {eventData.time}
                          </span>
                        </p>
                      )}
                    </div>

                    {/* circular arrow */}
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        slideToIndex(index + 1);
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
            {EVENTS.map((_, index) => (
              <button
                key={index}
                onClick={() => slideToIndex(index + 1)}
                aria-label={`Event ${index + 1}`}
                style={{
                  width: "11px",
                  height: "11px",
                  border: `1.5px solid ${index === activeDot ? GREEN : "#bbb"}`,
                  background: index === activeDot ? GREEN : "transparent",
                  cursor: "pointer",
                  padding: 0,
                  outline: "none",
                  transition: "background 0.25s, border-color 0.25s",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* View All Events */}
          <div className="flex justify-center pb-16 relative z-10">
            <Link href="/templates/template-3/initiatives?tab=events">
              <a className="t2-btn inline-flex">
                <span>View All Events</span>
              </a>
            </Link>
          </div>
        </>
      )}
    </section>
  );
}
