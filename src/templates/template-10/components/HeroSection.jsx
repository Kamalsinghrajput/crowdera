import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4,
      });

      gsap.from(imgRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #f7edf7, #f3e6f5)",
        marginTop: "72px",
        height: "calc(100vh - 72px)",
        minHeight: "480px",
        maxHeight: "720px",
      }}
    >
      {/* MOBILE BG */}
      <div
        className="absolute inset-0 md:hidden z-0"
        style={{
          background:
            "linear-gradient(to bottom right, #7C3682, #8E3E94, #5E2A63)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-2">
        {/* LEFT TEXT */}
        <div
          ref={textRef}
          className="flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white"
          style={{
            backgroundColor: "#7A367F",
            borderBottomRightRadius: "200px 800px",
            borderTopRightRadius: "200px 800px",
          }}
        >
          <p className="text-white/60 uppercase tracking-[4px] text-[11px] font-semibold mb-5">
            WE HELP PEOPLE AROUND
          </p>

          <h1
            className="font-black leading-[1.08] mb-5 text-white"
            style={{ fontSize: "clamp(32px, 4.5vw, 62px)" }}
          >
            Your Donation
            <br />
            Can Change
            <br />
            the World
          </h1>

          <p className="text-white/65 text-[15px] leading-relaxed max-w-md mb-8">
            BigHearts is the largest global crowdfunding community connecting
            nonprofits, donors, and companies in nearly every country.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <button
              className="bg-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full
                        hover:scale-105 hover:shadow-xl transition-all duration-300"
              style={{ color: "#7C3682" }}
            >
              Learn More
            </button>

            <button
              className="bg-white/10 backdrop-blur-md border border-white/40 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full
                        hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Become a Volunteer
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex items-center justify-center h-full px-8">
          <img
            ref={imgRef}
            src="/assets/template-10-hero.svg"
            alt="Charity illustration"
            className="w-full max-h-full object-contain drop-shadow-2xl"
            style={{ maxWidth: "940px" }}
          />
        </div>
      </div>
    </section>
  );
}
