import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Heart } from "lucide-react";
import ButtonLetterRoll from "./ButtonLetterRoll";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
    subtitle: "HELP THE POOR IN NEED",
    title1: "Your Contribution Can",
    title2: "Change A Life",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const sponsorsRef = useRef(null);
  const doodlesRef = useRef(null);
  const autoplayRef = useRef(null);

  const animateText = useCallback(() => {
    if (!textRef.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      textRef.current.querySelector(".hero-subtitle"),
      { x: -40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    )
      .fromTo(
        textRef.current.querySelector(".hero-title"),
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
        "-=0.4",
      )
      .fromTo(
        textRef.current.querySelector(".hero-btns"),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3",
      );
  }, []);

  const goTo = useCallback((idx) => {
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
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [goNext]);

  // Animate on slide change
  useEffect(() => {
    animateText();
  }, [current, animateText]);

  // Initial entrance
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
    ).fromTo(
      sponsorsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.1",
    );

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
        stagger: 0.6,
      });
    }
  }, []);

  const slide = heroSlides[current];

  return (
    <div
      id="hero"
      className="flex flex-col relative w-full overflow-hidden font-sans"
    >
      {/* ===== HERO SECTION ===== */}
      <div
        ref={heroRef}
        className="relative w-full min-h-[90vh] flex items-center bg-[#091F1B]"
      >
        {/* Background Images - All stacked, only active one visible */}
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: idx === current ? 1 : 0 }}
          >
            <Image
              src={s.img}
              alt={`Slide ${idx + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none z-[5] bg-black/60"></div>

        {/* Slider Arrows (Hidden for this design) */}

        {/* Text Content */}
        <div className="w-full relative z-[15] flex items-center justify-center min-h-[92vh]">
          <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-4 flex flex-col items-center justify-center text-center">
            <div ref={textRef} className="max-w-[900px] py-32 mt-10 flex flex-col items-center">
              <span className="hero-subtitle text-[var(--secondary)] font-bold tracking-[3px] uppercase mb-4 block">
                {slide.subtitle}
              </span>
              <h1 className="hero-title text-white font-black text-[clamp(44px,6vw,85px)] leading-[1.1] mb-10 tracking-tight">
                <span className="block">{slide.title1}</span>
                <span className="text-white block">{slide.title2}</span>
              </h1>

              <div className="hero-btns flex items-center justify-center gap-4 flex-wrap mt-4">
                <ButtonLetterRoll
                  text="Discover More"
                  href="/templates/template-6/about"
                  bgColor="var(--primary)"
                  textColor="#ffffff"
                  borderColor="var(--primary)"
                  hoverBgColor="var(--secondary)"
                  hoverTextColor="#111"
                  hoverBorderColor="var(--secondary)"
                  hoverSecondaryLetterColor="#111"
                />
                <ButtonLetterRoll
                  text="Donate Now"
                  href="#donate"
                  bgColor="#ffffff"
                  textColor="var(--primary)"
                  borderColor="#ffffff"
                  hoverBgColor="var(--primary)"
                  hoverTextColor="#ffffff"
                  hoverBorderColor="var(--primary)"
                  hoverSecondaryLetterColor="#ffffff"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Torn Paper Bottom Edge */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]"></div>
      </div>
    </div>
  );
};

export default Hero;
