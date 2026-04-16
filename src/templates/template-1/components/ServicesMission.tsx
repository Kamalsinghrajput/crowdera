import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Apple, Droplets, Stethoscope, GraduationCap, Home, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

const VISIBLE = 3;
const GAP = 24;
const AUTO_SLIDE_MS = 3500;

/**
 * CSS filter strings to convert a black SVG to a specific color.
 * Generated for each mission's secondary (border) color and lightBg (fill tint).
 * The SVG is rendered twice:
 *   1. Bottom layer: very low opacity to simulate the light inner fill
 *   2. Top layer: full opacity with the border color filter
 */
const missions = [
  {
    title: 'Healthy Food',
    Icon: Apple,
    description: 'Providing nutritious meals to families in need, ensuring no child goes to bed hungry.',
    // Border / outline color (secondary)
    borderColor: '#EF5350',
    // Icon circle color
    iconColor: '#EF5350',
    // Light inner fill (very pale tint)
    lightBg: '#f3f4f6',
    // CSS filter to convert black SVG to borderColor
    borderFilter: 'brightness(0) saturate(100%) invert(43%) sepia(99%) saturate(743%) hue-rotate(319deg) brightness(111%) contrast(90%)',
    dot: '#EF9A9A',
  },
  {
    title: 'Clean Water',
    Icon: Droplets,
    description: 'Building wells and purification systems to bring safe drinking water to every community.',
    borderColor: '#42A5F5',
    iconColor: '#42A5F5',
    lightBg: '#f3f4f6',
    borderFilter: 'brightness(0) saturate(100%) invert(60%) sepia(88%) saturate(539%) hue-rotate(186deg) brightness(105%) contrast(97%)',
    dot: '#90CAF9',
  },
  {
    title: 'Medical Care',
    Icon: Stethoscope,
    description: 'Delivering free healthcare and medicine to underserved regions across the globe.',
    borderColor: '#2E7D32',
    iconColor: '#2E7D32',
    lightBg: '#f3f4f6',
    borderFilter: 'brightness(0) saturate(100%) invert(30%) sepia(67%) saturate(620%) hue-rotate(99deg) brightness(93%) contrast(98%)',
    dot: '#A5D6A7',
  },
  {
    title: 'Education',
    Icon: GraduationCap,
    description: 'Building schools and funding scholarships so every child can access quality learning.',
    borderColor: '#AB47BC',
    iconColor: '#AB47BC',
    lightBg: '#f3f4f6',
    borderFilter: 'brightness(0) saturate(100%) invert(38%) sepia(51%) saturate(780%) hue-rotate(263deg) brightness(100%) contrast(93%)',
    dot: '#CE93D8',
  },
  {
    title: 'Safe Shelter',
    Icon: Home,
    description: 'Constructing safe homes and emergency shelters for displaced families worldwide.',
    borderColor: '#F4511E',
    iconColor: '#F4511E',
    lightBg: '#f3f4f6',
    borderFilter: 'brightness(0) saturate(100%) invert(40%) sepia(95%) saturate(570%) hue-rotate(345deg) brightness(103%) contrast(102%)',
    dot: '#FFAB91',
  },
  {
    title: 'Environment',
    Icon: Leaf,
    description: 'Planting trees and restoring ecosystems to protect our planet for future generations.',
    borderColor: '#00897B',
    iconColor: '#00897B',
    lightBg: '#f3f4f6',
    borderFilter: 'brightness(0) saturate(100%) invert(41%) sepia(75%) saturate(406%) hue-rotate(130deg) brightness(95%) contrast(101%)',
    dot: '#80CBC4',
  },
];

const TOTAL = missions.length;
const MAX_INDEX = TOTAL - VISIBLE;

/* ── Component ── */
export default function ServicesMission() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* measure card width */
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setCardWidth((w - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const goNext = useCallback(() => setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1)), []);
  const goPrev = useCallback(() => setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1)), []);

  /* auto slide */
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_SLIDE_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardWidth ? -(index * (cardWidth + GAP)) : 0;

  return (
    <section id="services" className="py-20 bg-brand-gray overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-brand-teal font-bold tracking-wider uppercase text-sm mb-2 block">
            Our Mission
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            We Believe That We Can Save More Lifes
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto rounded-full" />
        </div>
      </div>

      {/* Carousel */}
      <div
        className="container mx-auto px-4 md:px-12 lg:px-24 xl:px-52"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div ref={containerRef} className="overflow-hidden">
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.55s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {missions.map((m, i) => {
              const IconComp = m.Icon;
              return (
                <div
                  key={i}
                  className="relative flex-shrink-0"
                  style={{
                    width: cardWidth
                      ? `${cardWidth}px`
                      : `calc(${100 / VISIBLE}% - ${(GAP * (VISIBLE - 1)) / VISIBLE}px)`,
                  }}
                >
                  {/* ── Layer 1: Colored Border (base shape) ── */}
                  <img
                    src="/assets/our-mission.svg"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto block"
                    style={{
                      filter: m.borderFilter,
                      opacity: 0.9,
                    }}
                  />

                  {/* ── Layer 2: Grey inner fill (scaled down slightly) ── */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundColor: '#f3f4f6',
                        maskImage: `url(/assets/our-mission.svg)`,
                        WebkitMaskImage: `url(/assets/our-mission.svg)`,
                        maskSize: '95% 95%',
                        WebkitMaskSize: '95% 95%',
                        maskPosition: 'center',
                        WebkitMaskPosition: 'center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        transform: 'scale(0.96)',
                      }}
                    />
                  </div>

                  {/* ── Content: icon + title + description ── */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    style={{ padding: '8% 18%' }}
                  >
                    {/* Icon circle */}
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md flex-shrink-0"
                      style={{ backgroundColor: m.iconColor }}
                    >
                      <IconComp size={30} color="#ffffff" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-gray-800 mb-2 w-full">
                      {m.title}
                    </h3>

                    {/* Description — constrained to the inner blob area */}
                    <p className="text-gray-500 text-md leading-relaxed w-full">
                      {m.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '28px' : '10px',
                  height: '10px',
                  background: i === index ? missions[index].dot : '#d1d5db',
                }}
              />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border-2 border-brand-dark/20 hover:border-brand-dark
                         flex items-center justify-center text-brand-dark
                         hover:bg-brand-dark hover:text-white transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="w-11 h-11 rounded-full bg-brand-dark flex items-center justify-center
                         text-white hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
