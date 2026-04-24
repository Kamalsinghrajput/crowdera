"use client";
import { useState, useEffect } from "react";


const TESTIMONIALS = [
  {
    text: "I've had the privilege of volunteering with Chioary and I'm continually inspired by the dedication and passion of the entire team. Their commitment to the community is truly remarkable.",
    name: "Ronald Richards",
    role: "General Manager",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    text: "Chioary has transformed the way I see charitable work. The impact they create in the lives of vulnerable people is immeasurable. I am proud to support such a meaningful cause.",
    name: "Courtney Henry",
    role: "Community Leader",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "Working alongside Chioary has been one of the most fulfilling experiences of my life. Every volunteer, every donor truly makes a difference that lasts for generations.",
    name: "Adam Smith",
    role: "Volunteer Coordinator",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    text: "The level of transparency and passion that Chioary brings to everything they do is incredible. I have seen real change happen because of the tireless efforts of this amazing organization.",
    name: "Robert Ken",
    role: "Charity Advocate",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export default function Testimonial() {
  const [active, setActive] = useState(0);

  const goTo = (i) => setActive(i);
  const next = () => setActive((p) => (p + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-[120px] overflow-hidden bg-t2-dark">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-40 grayscale"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-t2-dark/80" />

      <div className="max-w-[1000px] mx-auto px-4 relative z-10 text-center">
        {/* Quote Icon */}
        <div className="flex justify-center mb-10">
          <svg
            width="64"
            height="48"
            viewBox="0 0 48 36"
            fill="var(--t2-secondary)"
          >
            <path d="M0 36V22.8C0 10.2 7.2 3 21.6 0L24 4.8C16.8 6.6 12 11.4 11.4 18H20.4V36H0ZM27.6 36V22.8C27.6 10.2 34.8 3 49.2 0L51.6 4.8C44.4 6.6 39.6 11.4 39 18H48V36H27.6Z" />
          </svg>
        </div>

        {/* Testimonial Content */}
        <div
          className="min-h-[220px] flex flex-col items-center justify-center transition-opacity duration-500"
          key={active}
        >
          <p className="italic text-[clamp(22px,3vw,32px)] text-white leading-[1.5] mb-12">
            "{TESTIMONIALS[active].text}"
          </p>

          <div className="flex items-center justify-center gap-5">
            <img
              src={TESTIMONIALS[active].img}
              alt={TESTIMONIALS[active].name}
              className="w-[80px] h-[80px] rounded-full object-cover border-[4px] border-t2-secondary"
            />
            <div className="text-left">
              <h4 className="text-[22px] text-white leading-tight mb-1">
                {TESTIMONIALS[active].name}
              </h4>
              <span className="text-[15px] text-t2-secondary">
                {TESTIMONIALS[active].role}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-16 max-w-[280px] mx-auto relative z-20">
          <button
            onClick={prev}
            className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-t2-secondary hover:border-t2-secondary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${active === i ? "bg-t2-secondary scale-125" : "bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center text-white transition-all duration-300 hover:bg-t2-secondary hover:border-t2-secondary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
