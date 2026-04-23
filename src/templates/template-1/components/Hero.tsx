import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight, ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import SponsorCarousel from './SponsorCarousel';


const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
    subtitle: "Start Donating Poor People",
    title: "Giving Help\nTo Those\nWho Need It.",
  },
  {
    img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2670&auto=format&fit=crop",
    subtitle: "Together We Can Make A Change",
    title: "Be The Reason\nSomeone\nSmiles Today.",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2670&auto=format&fit=crop",
    subtitle: "Every Child Deserves A Chance",
    title: "Empowering\nCommunities\nWorldwide.",
  },
  {
    img: "https://images.unsplash.com/photo-1497375638960-ca368c7231e4?q=80&w=2670&auto=format&fit=crop",
    subtitle: "Education Changes Everything",
    title: "Building A\nBrighter\nFuture.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sponsorsRef = useRef<HTMLDivElement>(null);
  const doodlesRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const animateText = useCallback(() => {
    if (!textRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(textRef.current.querySelector('.hero-subtitle'),
      { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
      .fromTo(textRef.current.querySelector('.hero-title'),
        { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(textRef.current.querySelector('.hero-btns'),
        { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.3");
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(goNext, 5000);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [goNext]);

  // Animate on slide change
  useEffect(() => {
    animateText();
  }, [current, animateText]);

  // Initial entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .fromTo(sponsorsRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.1");

    // Float all doodle graphics
    if (doodlesRef.current) {
      const els = doodlesRef.current.children;
      gsap.to(els, {
        y: "random(-18, 18)",
        x: "random(-12, 12)",
        rotation: "random(-8, 8)",
        scale: "random(0.95, 1.08)",
        duration: "random(2.5, 4.5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.6
      });
    }
  }, []);

  const slide = heroSlides[current];

  return (
    <div id="hero" className="flex flex-col relative w-full overflow-hidden font-sans">

      {/* ===== HERO SECTION ===== */}
      <div ref={heroRef} className="relative w-full min-h-[90vh] flex items-center bg-brand-dark">

        {/* Background Images - All stacked, only active one visible */}
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full transition-opacity duration-1000"
            style={{ opacity: idx === current ? 1 : 0 }}
          >
            <img
              src={s.img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
              style={{ filter: 'grayscale(100%) brightness(0.7)' }}
            />
          </div>
        ))}

        {/* Dark Teal Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-[5]">
          <div className="absolute top-0 left-0 w-full lg:w-[65%] h-full"
            style={{
              background: 'linear-gradient(to right, #091F1Bcc 0%, #091F1B99 45%, #091F1B55 75%, transparent 100%)'
            }}
          ></div>
        </div>


        {/* Slider Arrows */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-3">
          <button
            onClick={() => { goPrev(); if (autoplayRef.current) clearInterval(autoplayRef.current); }}
            className="w-12 h-12 rounded-full bg-brand-dark/80 hover:bg-brand-dark text-white flex items-center justify-center shadow-lg transition-all hover:scale-105"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => { goNext(); if (autoplayRef.current) clearInterval(autoplayRef.current); }}
            className="w-12 h-12 rounded-full bg-brand-yellow hover:brightness-110 text-brand-dark flex items-center justify-center shadow-lg transition-all hover:scale-105"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-6 md:px-12 relative z-[15] flex items-center min-h-[92vh]">
          <div ref={textRef} className="max-w-xl ml-0 lg:ml-16 py-32">

            <div className="hero-subtitle flex items-center text-brand-yellow text-lg lg:text-xl mb-5">
              <Heart size={16} fill="currentColor" className="mr-2 flex-shrink-0" />
              <span className="italic" style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}>
                {slide.subtitle}
              </span>
            </div>

            <h1 className="hero-title text-white font-extrabold text-5xl lg:text-[72px] leading-[1.08] mb-10 tracking-tight">
              {slide.title.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>

            <div className="hero-btns flex flex-wrap gap-4 items-center">
              <Link href="#">
                <a className="border-2 border-white text-white font-bold text-sm py-4 px-8 rounded-full hover:bg-white hover:text-brand-dark transition-all flex items-center group shadow-xl">
                  Discover More
                  <ArrowUpRight size={15} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Link>
              <Link href="#">
                <a className="bg-brand-yellow text-brand-dark font-bold text-sm py-4 px-8 rounded-full hover:brightness-95 transition-all flex items-center group shadow-xl">
                  Get A Quote
                  <ArrowUpRight size={15} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(idx); if (autoplayRef.current) clearInterval(autoplayRef.current); }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-brand-yellow scale-125 w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>

        {/* Bottom Torn Paper Edge */}
        <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
          <svg className="w-full h-10 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="white">
            <path d="M1200,120H0V73.71c47.79-22.2,103.59-32.17,158-28.01,49.61,3.8,98.63,22.18,148,18.73,50-3.53,99.23-28.69,149-30.34,51.13-1.7,102.58,18,154,15.65,51.81-2.39,103.11-26.42,155-27.1,51.13-.68,102.16,20.25,153,21.75,51.52,1.5,102.48-15.67,154-16.5,51.62-.83,103,16.14,154,13.88,51.1-2.26,102.55-19.32,154-15.71C1123.63,29.51,1162.29,48,1200"></path>
          </svg>
        </div>
      </div>

      {/* ===== SPONSOR LOGOS CAROUSEL ===== */}
      <SponsorCarousel />


    </div>
  );
};

export default Hero;
