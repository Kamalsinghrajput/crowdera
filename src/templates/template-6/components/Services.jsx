"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import ButtonLetterRoll from "./ButtonLetterRoll";

const SERVICES_DATA = [
  {
    id: 1,
    title: "Medical & Health",
    description:
      "Connect with others in a supportive environment and learn mindfulness techniques together.",
    extraText:
      "We only accept referrals from medical, healthcare, or social care professionals.",
    btnText: "Read More",
    cardBg: "linear-gradient(135deg, #F3E8FF 0%, #FCE7F3 100%)",
    extraPosition: "bottom",
  },
  {
    id: 2,
    title: "Poor Children",
    description:
      "Connect with others in a supportive environment and learn mindfulness techniques together.",
    extraText:
      "We're tackling the shame so many of us feel around our mental health.",
    btnText: "Read More",
    cardBg: "linear-gradient(135deg, #DBEAFE 0%, #E0F2FE 100%)",
    extraPosition: "top",
  },
  {
    id: 3,
    title: "Foster Care",
    description:
      "Connect with others in a supportive environment and learn mindfulness techniques together.",
    extraText:
      "Side by Side is a supportive online community where you can listen, share and be heard.",
    btnText: "Read More",
    cardBg: "linear-gradient(135deg, #F1F5F9 0%, #F8FAFC 100%)",
    extraPosition: "bottom",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Empowering communities through access to quality education and learning resources.",
    extraText:
      "Every child deserves the chance to learn, grow, and reach their full potential.",
    btnText: "Read More",
    cardBg: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
    extraPosition: "top",
  },
  {
    id: 5,
    title: "Clean Water",
    description:
      "Providing clean drinking water to communities in need through sustainable solutions.",
    extraText:
      "Access to clean water transforms lives and builds healthier communities.",
    btnText: "Read More",
    cardBg: "linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%)",
    extraPosition: "bottom",
  },
];

const CARD_GAP = 32; // px

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = SERVICES_DATA.length - visibleCards;

  // Measure card width dynamically based on responsive visibility rules
  const measure = useCallback(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      let visible = 3;
      if (window.innerWidth < 640) {
        visible = 1;
      } else if (window.innerWidth < 1024) {
        visible = 2;
      }
      setVisibleCards(visible);
      const totalGap = CARD_GAP * (visible - 1);
      setCardWidth((containerWidth - totalGap) / visible);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      const clamped = Math.max(0, Math.min(SERVICES_DATA.length - visibleCards, index));
      setIsTransitioning(true);
      setCurrentIndex(clamped);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning, visibleCards]
  );

  const goNext = useCallback(() => {
    if (currentIndex >= maxIndex) {
      goTo(0); // loop back
    } else {
      goTo(currentIndex + 1);
    }
  }, [currentIndex, maxIndex, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndex <= 0) {
      goTo(maxIndex); // loop to end
    } else {
      goTo(currentIndex - 1);
    }
  }, [currentIndex, maxIndex, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    autoPlayRef.current = setInterval(() => {
      goNext();
    }, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [isPaused, goNext]);

  // Touch / drag support for mobile sliding
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) goNext();
      else goPrev();
    }
  };

  const translateX = currentIndex * (cardWidth + CARD_GAP);

  return (
    <section
      className="services-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="services-carousel-header">
        <div className="services-carousel-label">
          <span className="services-label-accent" />
          <span className="services-label-text">Our Services</span>
        </div>
        <h2 className="services-carousel-title">
          We Are In A Mission To Help The Helpless
        </h2>
        <div className="services-carousel-nav">
          <button
            className="services-nav-btn services-nav-prev"
            onClick={goPrev}
            aria-label="Previous service"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="services-nav-btn services-nav-next"
            onClick={goNext}
            aria-label="Next service"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel track */}
      <div
        className="services-carousel-viewport"
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="services-carousel-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${translateX}px)`,
            gap: `${CARD_GAP}px`,
          }}
        >
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.id}
              className="services-carousel-slide"
              style={{ width: cardWidth > 0 ? `${cardWidth}px` : "calc(33.333% - 22px)" }}
            >
              {/* Extra text above card */}
              {service.extraPosition === "top" && (
                <p className="services-extra-text services-extra-top">
                  {service.extraText}
                </p>
              )}

              {/* Card */}
              <div
                className="services-card"
                style={{ background: service.cardBg }}
              >
                <h3 className="services-card-title">{service.title}</h3>
                <p className="services-card-desc">{service.description}</p>
                <ButtonLetterRoll
                  text={service.btnText}
                  bgColor="transparent"
                  textColor="#1a1220"
                  borderColor="#1a1220"
                  hoverBgColor="#1a1220"
                  hoverTextColor="#ffffff"
                  hoverBorderColor="#1a1220"
                  className="mt-auto self-start"
                  showArrow={false}
                />
              </div>

              {/* Extra text below card */}
              {service.extraPosition === "bottom" && (
                <p className="services-extra-text services-extra-bottom">
                  {service.extraText}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="services-carousel-dots">
        {SERVICES_DATA.map((_, idx) => (
          <button
            key={idx}
            className={`services-dot ${
              idx >= currentIndex && idx < currentIndex + visibleCards
                ? "services-dot-active"
                : ""
            }`}
            onClick={() => goTo(idx > maxIndex ? maxIndex : idx)}
            aria-label={`Go to service ${idx + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .services-carousel-section {
          padding: 80px 0 60px;
          background: #ffffff;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .services-carousel-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 48px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .services-carousel-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .services-label-accent {
          width: 32px;
          height: 3px;
          background: var(--primary, #8E6F9F);
          border-radius: 2px;
        }

        .services-label-text {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--primary, #8E6F9F);
          font-family: 'Manrope', 'Inter', sans-serif;
        }

        .services-carousel-title {
          font-size: 36px;
          font-weight: 800;
          color: #1a1220;
          line-height: 1.2;
          margin: 0;
          max-width: 500px;
          font-family: 'Manrope', 'Inter', sans-serif;
        }

        .services-carousel-nav {
          display: flex;
          gap: 8px;
        }

        .services-nav-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid #e2d5ee;
          background: transparent;
          color: #8E6F9F;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .services-nav-btn:hover {
          background: var(--primary, #8E6F9F);
          border-color: var(--primary, #8E6F9F);
          color: #fff;
          transform: scale(1.08);
        }

        .services-carousel-viewport {
          overflow: hidden;
          width: 100%;
          cursor: grab;
        }

        .services-carousel-viewport:active {
          cursor: grabbing;
        }

        .services-carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          will-change: transform;
        }

        .services-carousel-slide {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
        }

        .services-card {
          border-radius: 20px;
          padding: 36px 30px 32px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-height: 220px;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .services-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(142, 111, 159, 0.12);
        }

        .services-card-title {
          font-size: 24px;
          font-weight: 800;
          color: #1a1220;
          margin: 0;
          line-height: 1.3;
          font-family: 'Manrope', 'Inter', sans-serif;
        }

        .services-card-desc {
          font-size: 14px;
          color: #6b6b7b;
          line-height: 1.75;
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .services-card-btn {
          align-self: flex-start;
          padding: 10px 24px;
          border-radius: 8px;
          border: 1.5px solid #1a1220;
          background: transparent;
          color: #1a1220;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Manrope', 'Inter', sans-serif;
          letter-spacing: 0.02em;
          margin-top: auto;
        }

        .services-card-btn:hover {
          background: #1a1220;
          color: #fff;
        }

        .services-extra-text {
          font-size: 14px;
          color: #7a7a8a;
          line-height: 1.7;
          margin: 0;
          padding: 0 4px;
          font-family: 'Inter', sans-serif;
        }

        .services-extra-top {
          margin-bottom: 20px;
          min-height: 48px;
        }

        .services-extra-bottom {
          margin-top: 20px;
          min-height: 48px;
        }

        .services-carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 40px;
        }

        .services-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: #e2d5ee;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .services-dot-active {
          background: var(--primary, #8E6F9F);
          transform: scale(1.25);
        }

        .services-dot:hover {
          background: var(--primary, #8E6F9F);
          opacity: 0.7;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .services-carousel-section {
            padding: 60px 24px 40px;
          }
          .services-carousel-title {
            font-size: 28px;
          }
        }

        @media (max-width: 768px) {
          .services-carousel-section {
            padding: 48px 16px 32px;
            padding-left: 20px;
            padding-right: 20px;
          }
          .services-carousel-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 28px;
          }
          .services-carousel-title {
            font-size: 24px;
          }
          .services-carousel-nav {
            align-self: flex-end;
          }
          .services-card {
            padding: 28px 22px 24px;
            min-height: 180px;
          }
          .services-card-title {
            font-size: 20px;
          }
          .services-extra-top {
            margin-bottom: 12px;
            min-height: auto;
          }
          .services-extra-bottom {
            margin-top: 12px;
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
