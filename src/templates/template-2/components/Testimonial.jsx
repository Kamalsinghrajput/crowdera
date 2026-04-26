"use client";
import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Adam Smith",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: "I've Had The Privilege Of Volunteering With Chioary And I'm Continually Inspired By The Dedication And Passion Of The Team.",
    name: "Robert Ken",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    text: "Chioary has transformed the way I see charitable work. The impact they create in the lives of vulnerable people is immeasurable.",
    name: "Courtney Henry",
    role: "Community Leader",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Working alongside Chioary has been one of the most fulfilling experiences of my life. Every volunteer, every donor truly makes a difference.",
    name: "Ronald Richards",
    role: "Volunteer Coordinator",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

export default function Testimonial() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  const originalLength = TESTIMONIALS.length;
  // Duplicate items at the end to allow smooth sliding and looping back
  const items = [...TESTIMONIALS, TESTIMONIALS[0], TESTIMONIALS[1]];

  const [active, setActive] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const next = () => {
    if (active >= originalLength) return; // Prevent double clicks during jump
    setTransitionEnabled(true);
    setActive((p) => p + 1);
  };

  const prev = () => {
    if (active === 0) {
      // To go backward from 0, jump to the clone seamlessly, then slide to length-1
      setTransitionEnabled(false);
      setActive(originalLength);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setActive(originalLength - 1);
        });
      });
    } else {
      setTransitionEnabled(true);
      setActive((p) => p - 1);
    }
  };

  // Jump back to start seamlessly when we reach the end clone
  useEffect(() => {
    if (active === originalLength) {
      const timer = setTimeout(() => {
        setTransitionEnabled(false);
        setActive(0);
      }, 500); // Wait for sliding animation to complete
      return () => clearTimeout(timer);
    }
  }, [active, originalLength]);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className="relative py-[140px] overflow-hidden bg-[var(--bg-color)]">
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }`,
        }}
      />
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
            <span className="text-[14px] text-white font-bold tracking-wider italic">
              Our Testimonial
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] leading-[1.2] text-white font-bold">
            Our Impact in Their Words
          </h2>
        </div>

        {/* Testimonials area */}
        <div className="relative mx-auto overflow-hidden">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-[0px] bottom-[0px] w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2 z-10" />

          {/* Center Navigation Button */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="bg-[var(--secondary)] rounded-full flex items-center cursor-pointer overflow-hidden shadow-lg shadow-black/20">
              <button
                onClick={prev}
                className="px-3 py-2.5 text-white hover:bg-black/10 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <div className="w-[1px] h-4 bg-white/40" />
              <button
                onClick={next}
                className="px-3 py-2.5 text-white hover:bg-black/10 transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <style
            dangerouslySetInnerHTML={{
              __html: `
            .carousel-track {
              --items-per-view: 1;
              transform: translateX(calc(${active} * -100% / var(--items-per-view)));
            }
            @media (min-width: 768px) {
              .carousel-track {
                --items-per-view: 2;
              }
            }
          `,
            }}
          />

          {/* Content track */}
          <div
            className="carousel-track flex w-full pb-20"
            style={{
              transition: transitionEnabled
                ? "transform 500ms ease-in-out"
                : "none",
            }}
          >
            {items.map((testimonial, idx) => (
              <div
                key={idx}
                className="w-full md:w-1/2 flex-shrink-0 px-4 md:px-12 flex flex-col items-center text-center"
              >
                <p className="text-[18px] md:text-[20px] text-white leading-[1.6] mb-10 font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-[64px] h-[64px] rounded-full object-cover grayscale"
                  />
                  <div className="text-left">
                    <h4 className="text-[18px] text-white font-bold leading-tight mb-1">
                      {testimonial.name}
                    </h4>
                    <span className="text-[14px] text-white/80 font-medium">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote Icon */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 z-20 flex justify-center pointer-events-none">
            <svg width="56" height="42" viewBox="0 0 48 36" fill="white">
              <path d="M0 36V22.8C0 10.2 7.2 3 21.6 0L24 4.8C16.8 6.6 12 11.4 11.4 18H20.4V36H0ZM27.6 36V22.8C27.6 10.2 34.8 3 49.2 0L51.6 4.8C44.4 6.6 39.6 11.4 39 18H48V36H27.6Z" />
            </svg>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex justify-center gap-4 mt-8 relative z-20">
            <button
              onClick={prev}
              className="w-[45px] h-[45px] flex items-center justify-center bg-[var(--secondary)] rounded-full text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-[45px] h-[45px] flex items-center justify-center bg-[var(--secondary)] rounded-full text-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
