import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Williams',
    role: 'Regular Donor',
    location: 'New York, USA',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80',
    text: 'Charifund has transformed how I give. Every rupee I donate is tracked transparently, and seeing the real impact on communities keeps me motivated to give more.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Volunteer',
    location: 'Mumbai, India',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    text: 'I volunteered for the clean water campaign and the experience was life-changing. The Charifund team is incredibly organized and deeply passionate about the cause.',
    rating: 5,
  },
  {
    name: 'Priya Kapoor',
    role: 'Corporate Partner',
    location: 'Bengaluru, India',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    text: 'Our company has partnered with Charifund for two years. Their impact reports are detailed and honest. It\'s rare to find an NGO this transparent and effective.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Monthly Donor',
    location: 'Singapore',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    text: 'The education campaign I supported helped build two schools in rural villages. I received photos and updates from the field — that personal connection means everything.',
    rating: 5,
  },
  {
    name: 'Ananya Iyer',
    role: 'Campaign Organizer',
    location: 'Chennai, India',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    text: 'Organizing a fundraiser through Charifund was seamless. Their platform is intuitive and the support team guided me every step of the way. We exceeded our goal by 140%!',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Philanthropist',
    location: 'London, UK',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
    text: 'I have donated to dozens of charities globally. Charifund stands out for their accountability and grassroots approach. My contributions here create real, measurable change.',
    rating: 5,
  },
];

const VISIBLE   = 3;
const GAP       = 24;
const AUTO_MS   = 4500;
const TOTAL     = testimonials.length;
const MAX_INDEX = TOTAL - VISIBLE; // = 3

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index,     setIndex]     = useState(0);
  const [isPaused,  setIsPaused]  = useState(false);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        const w = trackRef.current.offsetWidth;
        setCardWidth((w - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const goNext = useCallback(() => setIndex(i => (i >= MAX_INDEX ? 0 : i + 1)), []);
  const goPrev = useCallback(() => setIndex(i => (i <= 0 ? MAX_INDEX : i - 1)), []);

  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(goNext, AUTO_MS);
    return () => clearInterval(t);
  }, [goNext, isPaused]);

  const translateX = cardWidth ? -(index * (cardWidth + GAP)) : 0;

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-brand-dark relative overflow-hidden">

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-teal/10 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-yellow/8 blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
            What People <span className="text-brand-yellow">Say About Us</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real stories from donors, volunteers, and partners who have experienced the Charifund difference.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex"
            style={{
              gap: `${GAP}px`,
              transform: `translateX(${translateX}px)`,
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              willChange: 'transform',
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 bg-white/5 border border-white/10 hover:border-brand-yellow/30
                           rounded-2xl p-7 flex flex-col transition-all duration-300 hover:bg-white/8 group"
                style={{
                  width: cardWidth
                    ? `${cardWidth}px`
                    : `calc(${100 / VISIBLE}% - ${(GAP * (VISIBLE - 1)) / VISIBLE}px)`,
                }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={32} className="text-brand-yellow opacity-60" fill="currentColor" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="text-brand-yellow" fill="currentColor" />
                  ))}
                </div>

                {/* Feedback text */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-yellow/40"
                  />
                  <div>
                    <h4 className="text-white font-extrabold text-sm group-hover:text-brand-yellow transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-gray-400 text-xs">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {Array.from({ length: MAX_INDEX + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? '28px' : '10px',
                  height: '10px',
                  background: i === index ? '#FFCA08' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={goPrev} aria-label="Previous"
              className="w-11 h-11 rounded-full border-2 border-white/20 hover:border-brand-yellow flex items-center justify-center text-white hover:text-brand-yellow transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={goNext} aria-label="Next"
              className="w-11 h-11 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark hover:brightness-110 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
