"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";

const TESTIMONIALS = [
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Adam Smith",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Leslie Alexander",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    text: "Working alongside such driven individuals has been an eye-opening experience. The impact we make together is truly rewarding.",
    name: "Courtney Henry",
    role: "Project Lead",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Every project feels like a step towards a better future. The level of commitment here is nothing short of extraordinary.",
    name: "Mate Henry",
    role: "Volunteer",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const TOTAL = TESTIMONIALS.length;
// For a smooth infinite loop when showing 2 items, we need a few clones
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

import TestimonialCard from "./TestimonialCard";

export default function Testimonial() {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);
  const gapBetweenCards = 40; // from the original gap: "40px"
  
  // We start at the second set of testimonials (index = TOTAL) to allow reverse sliding
  const trackIndexRef = useRef(TOTAL); 
  const isAnimating = useRef(false);
  const isPaused = useRef(false);

  /* Measure single-card width */
  useEffect(() => {
    const measureViewport = () => {
      if (viewportRef.current) {
        const viewportWidth = viewportRef.current.offsetWidth;
        // Basic responsive logic: if width < 768, show 1 item, else show 2 items
        const views = viewportWidth < 768 ? 1 : 2;
        setItemsPerView(views);
        // Card width is (Viewport Width - (views - 1) * gap) / views
        const calculatedWidth = (viewportWidth - (views - 1) * gapBetweenCards) / views;
        setCardWidth(calculatedWidth);
      }
    };
    measureViewport();
    window.addEventListener("resize", measureViewport);
    return () => window.removeEventListener("resize", measureViewport);
  }, [gapBetweenCards]);

  /* Snap to initial position without animation */
  useEffect(() => {
    if (cardWidth > 0 && trackRef.current) {
      gsap.set(trackRef.current, { x: -(trackIndexRef.current * (cardWidth + gapBetweenCards)) });
    }
  }, [cardWidth, gapBetweenCards]);

  const slideToNextIndex = useCallback(
    (targetIndex) => {
      if (isAnimating.current || cardWidth === 0) return;
      isAnimating.current = true;
      trackIndexRef.current = targetIndex;

      gsap.to(trackRef.current, {
        x: -(targetIndex * (cardWidth + gapBetweenCards)),
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          isAnimating.current = false;
          // Silent jump for infinite loop
          // If we reached the end of the second set, jump back to the first set
          if (targetIndex >= TOTAL * 2) {
            trackIndexRef.current = targetIndex - TOTAL;
            gsap.set(trackRef.current, { x: -(trackIndexRef.current * (cardWidth + gapBetweenCards)) });
          } 
          // If we reached the start of the first set, jump forward to the second set
          else if (targetIndex <= 0) {
            trackIndexRef.current = targetIndex + TOTAL;
            gsap.set(trackRef.current, { x: -(trackIndexRef.current * (cardWidth + gapBetweenCards)) });
          }
        },
      });
    },
    [cardWidth, gapBetweenCards]
  );

  /* Auto-advance every 4s */
  useEffect(() => {
    const autoplayIntervalId = setInterval(() => {
      if (!isPaused.current) {
        // Slide by itemsPerView so it completely replaces the visible cards like the original
        slideToNextIndex(trackIndexRef.current + itemsPerView);
      }
    }, 4000);
    return () => clearInterval(autoplayIntervalId);
  }, [slideToNextIndex, itemsPerView]);

  return (
    <section
      style={{ backgroundColor: "#F9F9F9", padding: "120px 0" }}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 16px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
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
                background: "#007B39",
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
              Our Testimonial
            </span>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 800,
              color: "#121d18",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Our Impact in Their Words
          </h2>
        </div>

        {/* Carousel Viewport (Replaces original CSS Grid) */}
        <div
          ref={viewportRef}
          style={{ width: "100%", overflow: "hidden", marginBottom: "50px" }}
        >
          {/* Track */}
          <div
            ref={trackRef}
            style={{
              display: "flex",
              gap: `${gapBetweenCards}px`,
              willChange: "transform",
            }}
          >
            {ITEMS.map((testimonialData, idx) => (
              <TestimonialCard key={idx} testimonialData={testimonialData} cardWidth={cardWidth} />
            ))}
          </div>
        </div>

        {/* Navigation - Same design as original */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
          <button
            onClick={() => slideToNextIndex(trackIndexRef.current - itemsPerView)}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#121d18",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
              fontSize: "20px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFA415")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#121d18")
            }
            aria-label="Previous Testimonial"
          >
            <HiArrowLeft />
          </button>
          <button
            onClick={() => slideToNextIndex(trackIndexRef.current + itemsPerView)}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundColor: "#121d18",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s",
              fontSize: "20px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#FFA415")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#121d18")
            }
            aria-label="Next Testimonial"
          >
            <HiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
