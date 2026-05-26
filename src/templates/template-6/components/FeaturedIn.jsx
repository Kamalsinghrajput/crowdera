"use client";
import React from "react";
import Image from "next/image";

const FEATURED_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
];

export default function FeaturedIn() {
  return (
    <section className="py-20 bg-[#FAF6FC] border-t border-[#211823]/10 overflow-hidden relative w-full">
      
      {/* Inject custom infinite marquee CSS styles */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-featured {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
            .animate-marquee-featured {
              animation: marquee-featured 25s linear infinite;
            }
            .marquee-track-featured:hover .animate-marquee-featured {
              animation-play-state: paused;
            }
            .marquee-wrapper-featured {
              position: relative;
              width: 100%;
              overflow: hidden;
            }
            .marquee-wrapper-featured::before,
            .marquee-wrapper-featured::after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              width: 150px;
              z-index: 2;
              pointer-events: none;
            }
            .marquee-wrapper-featured::before {
              left: 0;
              background: linear-gradient(to right, #FAF6FC, transparent);
            }
            .marquee-wrapper-featured::after {
              right: 0;
              background: linear-gradient(to left, #FAF6FC, transparent);
            }
          `,
        }}
      />

      <div className="max-w-[1250px] mx-auto px-6 relative">
        
        {/* Header Block */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
            <span
              className="text-lg text-[#211823]/70 font-normal"
              style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
            >
              Recognized By
            </span>
          </div>
          <h2
            className="text-[clamp(32px,4.5vw,48px)] font-black text-[#211823] tracking-tighter leading-[1.1] uppercase m-0"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            As Featured In
          </h2>
        </div>

        {/* ── Seamless Infinite Marquee Carousel ───────────────────────── */}
        <div className="marquee-wrapper-featured py-6">
          <div className="flex w-max marquee-track-featured">
            
            {/* Set 1 */}
            <div className="flex items-center justify-around gap-16 px-8 animate-marquee-featured whitespace-nowrap">
              {FEATURED_LOGOS.map((logo, idx) => (
                <div
                  key={`set1-${idx}`}
                  className="logo-wrapper shrink-0 w-[140px] h-[40px] relative opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt="Featured Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Set 2 */}
            <div className="flex items-center justify-around gap-16 px-8 animate-marquee-featured whitespace-nowrap">
              {FEATURED_LOGOS.map((logo, idx) => (
                <div
                  key={`set2-${idx}`}
                  className="logo-wrapper shrink-0 w-[140px] h-[40px] relative opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt="Featured Logo"
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
