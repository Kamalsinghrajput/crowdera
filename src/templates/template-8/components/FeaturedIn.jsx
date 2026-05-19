"use client";
import React, { useState, useEffect } from "react";

export default function FeaturedIn() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        // Assuming we show ~4-5 items at once, reset index before running out
        if (prev >= logos.length - 5) return 0;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <section className="py-[80px] bg-[#f9f9f9] border-t border-[#e5e5e5] overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .logo-item {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 0 0px rgba(0,0,0,0));
        }
        .logo-item:hover {
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.1));
          transform: translateY(-5px) scale(1.05);
          opacity: 1 !important;
        }
      `,
        }}
      />
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span className="text-[17px] text-[var(--bg-color)] italic">
              Recognized By
            </span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-[var(--bg-color)]">
            As Featured In
          </h2>
        </div>

        <div className="overflow-hidden py-12 px-4 ">
          <div
            className="flex items-center transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 260}px)` }}
          >
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="logo-item w-[200px] h-[50px] relative shrink-0 mx-[30px] opacity-80 cursor-pointer"
              >
                <img
                  src={logo}
                  alt="Featured Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
