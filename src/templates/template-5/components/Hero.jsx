"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SLIDES = [
  {
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Tamun",
    title:
      "Find out more about our 30 year history and life changing work in South Africa",
  },
  {
    img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Donate",
    title:
      "Together we can make a difference and change the lives of children globally",
  },
  {
    img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80",
    subtitle: "Charity",
    title:
      "Bring clean water to every child and secure a better future for communities",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const primaryGreen = "var(--primary)";
  const primaryOrange = "var(--secondary)";

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % SLIDES.length);
      setAnimKey((k) => k + 1);
    }, 7000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[current];

  const goNext = () => {
    setCurrent((p) => (p + 1) % SLIDES.length);
    setAnimKey((k) => k + 1);
  };

  const goPrev = () => {
    setCurrent((p) => (p === 0 ? SLIDES.length - 1 : p - 1));
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="relative w-full h-[80vh] min-h-[700px] overflow-hidden flex items-center justify-center bg-[var(--bg-color)]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;700;800&display=swap');

        .tamun-slide-bg {
          animation: zoomIn 10s ease infinite alternate;
        }

        @keyframes zoomIn {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }

        .tamun-fade-up {
          animation: fadeUp 1s ease forwards;
          opacity: 0;
          transform: translateY(40px);
        }

        .tamun-fade-up-delay-1 { animation-delay: 0.2s; }
        .tamun-fade-up-delay-2 { animation-delay: 0.4s; }
        .tamun-fade-up-delay-3 { animation-delay: 0.6s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .tamun-btn-outline {
          display: inline-flex;
          align-items: center;
          background-color: ${primaryGreen};
          color: white;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-transform: uppercase;
          padding: 18px 45px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .tamun-btn-outline:hover {
          background-color: #ffffff;
          color: ${primaryGreen};
        }

        .tamun-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border: 1px solid rgba(255,255,255,0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 50;
        }

        .tamun-nav-arrow:hover {
          background-color: ${primaryGreen};
          border-color: ${primaryGreen};
        }
      `,
        }}
      />

      {/* Background Images */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === i ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          <Image
            src={s.img}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className={current === i ? "tamun-slide-bg" : ""}
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Bottom Left Decorative Circle */}
      <div
        className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-tr-full z-20 opacity-90"
        style={{
          backgroundColor: primaryOrange,
          transform: "translate(-50%, 50%)",
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 max-w-[1000px] mx-auto px-4 text-center mt-[80px]">
        <h3
          key={`sub-${animKey}`}
          className="tamun-fade-up tamun-fade-up-delay-1"
          style={{
            color: primaryOrange,
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(40px, 6vw, 70px)",
            marginBottom: "10px",
          }}
        >
          {slide.subtitle}
        </h3>

        <h1
          key={`title-${animKey}`}
          className="tamun-fade-up tamun-fade-up-delay-2"
          style={{
            color: "#ffffff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.2,
            marginBottom: "40px",
          }}
        >
          {slide.title}
        </h1>

        <div
          key={`btn-${animKey}`}
          className="tamun-fade-up tamun-fade-up-delay-3"
        >
          <a href="#about" className="tamun-btn-outline">
            READ MORE
            <FiChevronRight size={20} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="hidden md:block">
        <button
          onClick={goPrev}
          className="tamun-nav-arrow"
          style={{ left: "40px" }}
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={goNext}
          className="tamun-nav-arrow"
          style={{ right: "40px" }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}
