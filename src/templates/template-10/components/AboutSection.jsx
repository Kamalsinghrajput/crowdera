import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });

      gsap.from(rightRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 65%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fdf4f6 0%,#ffffff 50%,#f8f0ff 100%)",
      }}
    >


      {/* Decorative SVG rings */}
      <svg
        className="absolute top-8 left-4 w-28 opacity-10 animate-float-slow pointer-events-none"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r="55"
          stroke="var(--primary)"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r="35"
          stroke="var(--primary)"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-6 w-24 opacity-10 animate-float-delay pointer-events-none"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 90S10 68 10 42C10 26 18 15 30 18C40 21 46 29 50 37C54 29 60 21 70 18C82 15 90 26 90 42C90 68 50 90 50 90Z"
          fill="#9b59b6"
        />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── LEFT: Illustration ── */}
        <div
          ref={leftRef}
          className="relative flex justify-center items-center"
        >
          <img
            src="/assets/template-10-about-us.svg"
            alt="About Us"
            className="w-full max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

        {/* ── RIGHT: Text content ── */}
        <div ref={rightRef} className="flex flex-col gap-0">
          {/* Label */}
          <div className="inline-flex items-center gap-3 self-start mb-4">
            <span className="block w-10 h-0.5 bg-[var(--primary)]" />
            <span className="text-[var(--primary)] font-extrabold text-xs uppercase tracking-[3px]">
              About Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-black text-gray-800 leading-tight text-3xl md:text-4xl lg:text-[44px] mb-6">
            You Can Help a Lot by Donating{" "}
            <span className="text-[var(--primary)]">Little for Charity</span>
          </h2>

          {/* Body text */}
          <p className="text-gray-500 text-[17px] leading-relaxed mb-4">
            Facilisi cras fermentum odio eu. Volutpat lacus laoreet curabitur.
            Cursus turpis in eu mi bibendum neque egestas purus congue.
            Scelerisque purus semper eget duis at tellus.
          </p>
          <p className="text-gray-500 text-[17px] leading-relaxed mb-8">
            Ultricies lacus turpis tincidunt aliquet. Eget nunc lobortis mattis
            aliquam faucibus purus in.
          </p>
        </div>
      </div>
    </section>
  );
}
