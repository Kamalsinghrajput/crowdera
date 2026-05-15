"use client";
import React, { useState, useEffect } from "react";


export default function Partners() {
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
        if (prev >= logos.length - 5) return 0;
        return prev + 1;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [logos.length]);

  return (
    <section className="py-[100px] bg-[#121D18] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#FFA415]" />
            <span className="text-[16px] text-white italic">
              Global Reach
            </span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-white">
            Our Partners
          </h2>
          <p className="text-[rgba(255,255,255,0.7)] text-[16px] font-['Inter'] mt-4 max-w-[600px] mx-auto">
            We collaborate with incredible organizations to amplify our impact worldwide.
          </p>
        </div>

        <div className="overflow-hidden py-6">
          <div 
            className="flex items-center transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 260}px)` }}
          >
            {logos.map((logo, idx) => (
              <div key={idx} className="w-[200px] h-[50px] relative shrink-0 mx-[30px] transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                <img src={logo} alt="Partner Logo" className="w-full h-full object-contain invert" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
