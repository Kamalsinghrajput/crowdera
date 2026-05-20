import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Globe, Users, Heart, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Globe, label: "Countries Reached", value: 42, suffix: "+" },
  { icon: Users, label: "People Impacted", value: 10000, suffix: "+" },
  { icon: Heart, label: "Campaigns Funded", value: 350, suffix: "+" },
  { icon: TrendingUp, label: "Funds Raised", value: 12, suffix: "M" },
];

export default function ImpactSection() {
  const primaryColor = "var(--primary)";
  const secondaryColor = "#9b59b6";

  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const counterRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters
          STATS.forEach((stat, idx) => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: stat.value,
              duration: 2.4,
              ease: "power2.out",
              delay: idx * 0.15,
              onUpdate() {
                const el = counterRefs.current[idx];
                if (el) el.textContent = Math.round(obj.val).toLocaleString();
              },
            });
          });
        }
      },
      { threshold: 0.25 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);


  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-20 md:py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fdf4f6 0%,#ffffff 50%,#f8f0ff 100%)",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`,
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-[var(--primary)]" />
            <span className="text-[var(--primary)] font-extrabold text-xs uppercase tracking-[3px]">
              Our Impact
            </span>
            <span className="block w-10 h-0.5 bg-[var(--primary)]" />
          </div>
          <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] leading-tight mb-4">
            Creating a World Where{" "}
            <span className="text-[var(--primary)]">Every Life Matters</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            To promote well-being and opportunity by creating awareness,
            providing support, and building positive, resilient communities
            worldwide.
          </p>
        </div>

        {/* Impact card */}
        <div
          ref={cardRef}
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-out ${
            hasAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            background:
              "linear-gradient(135deg, #7C3682 0%, #9b59b6 40%, var(--primary) 100%)",
          }}
        >
          {/* World map watermark */}
          <img
            src="/assets/map.svg"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          <div className="relative z-10 px-6 sm:px-10 md:px-16 py-12 md:py-16 text-white">
            {/* Counters grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-14">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center group">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/15 mb-4 group-hover:bg-white/25 transition-colors duration-300">
                      <Icon size={24} className="text-white" />
                    </div>

                    {/* Counter */}
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black leading-none mb-2">
                      <span
                        ref={(el) => {
                          counterRefs.current[idx] = el;
                        }}
                      >
                        0
                      </span>
                      <span className="text-xl sm:text-2xl md:text-3xl">
                        {stat.suffix}
                      </span>
                    </div>

                    {/* Label */}
                    <p className="text-white/70 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-14">
              <div>
                <h3 className="text-lg font-extrabold mb-2">
                  Community Development
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our foundation focuses on spreading awareness, offering direct
                  support, and encouraging individuals to lead balanced and
                  empowered lives through community-driven initiatives and
                  programs.
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-lg font-extrabold mb-2">
                  Geographic Presence
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Active across Asia, Africa, and the Americas — building
                  networks of hope and empowerment in underserved regions
                  worldwide.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center mt-10">
              <button
                className="inline-flex items-center gap-2 bg-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
                style={{ color: "#7C3682" }}
              >
                View Annual Report <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
