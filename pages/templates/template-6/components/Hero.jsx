import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowUpRight, ArrowLeft, ArrowRight, Heart } from "lucide-react";
import ButtonLetterRoll from "./ButtonLetterRoll";

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2670&auto=format&fit=crop",
    title1: "BRINGING HOPE",
    title2: "AND",
    titleScript: "support",
    title3: "TO COMMUNITIES",
    subtitle:
      "Building a world where all children\nare safe, strong, and valued.",
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
        <div className="absolute inset-0 pointer-events-none z-[5]">
          <div
            className="absolute top-0 left-0 w-full lg:w-[70%] h-full"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
            }}
          ></div>
        </div>

        {/* Slider Arrows (Hidden for this design) */}

        {/* Text Content */}
        <div className="w-full relative z-[15] flex items-center min-h-[92vh]">
          <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-4">
            <div ref={textRef} className="max-w-[800px] py-32 mt-10">
              <h1 className="hero-title text-white font-black text-[clamp(40px,6vw,85px)] leading-[1.0] mb-8 tracking-tighter">
                <span className="block">{slide.title1}</span>
                <span className="flex items-center gap-4">
                  <span>{slide.title2}</span>
                  <span
                    className="text-[var(--secondary)] font-normal tracking-normal lowercase -mt-4"
                    style={{
                      fontFamily: "'Caveat', 'Segoe Script', cursive",
                      fontSize: "1.2em",
                    }}
                  >
                    {slide.titleScript}
                  </span>
                </span>
                <span className="block">{slide.title3}</span>
              </h1>

              <p className="hero-subtitle text-white/90 text-lg lg:text-xl max-w-[320px] mb-10 leading-relaxed font-serif">
                {slide.subtitle.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <div className="hero-btns">
                <ButtonLetterRoll
                  text="Learn More"
                  href="/templates/template-9/about"
                  bgColor="#ffffff"
                  textColor="var(--primary)"
                  borderColor="#ffffff"
                  hoverBgColor="#2b1f18"
                  hoverTextColor="#ffffff"
                  hoverBorderColor="#2b1f18"
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
