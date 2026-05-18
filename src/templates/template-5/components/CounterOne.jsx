import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STATS = [
  { num: "20", suffix: " billion", label: "People Helped", color: "#427AB5" },
  { num: "200", suffix: "+", label: "Country Impacted", color: "#FFC85C" },
  { num: "50", suffix: "K+", label: "Volunteer", color: "#9A8678" },
  { num: "1000", suffix: "+", label: "Successful Project", color: "#72BAA9" },
];

export default function CounterOne() {
  const sectionRef = useRef(null);
  const countRefs = useRef([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          setHasAnimated(true);
          observer.disconnect();

          STATS.forEach((stat, i) => {
            const targetVal = parseFloat(stat.num);
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetVal,
              duration: 2.5,
              ease: "power2.out",
              onUpdate() {
                if (countRefs.current[i]) {
                  countRefs.current[i].textContent = Math.round(
                    obj.val,
                  ).toString();
                }
              },
            });
          });
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-[60px] pb-[80px] border-t border-[#F0F0F0]"
    >
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`text-center py-10 px-6 relative ${
                i < STATS.length - 1 ? "sm:border-r border-[#F0F0F0]" : ""
              }`}
            >
              {/* SVG Shape behind number */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 rotate-30 opacity-50"
                style={{
                  maskImage: "url(/assets/template-2-stats.svg)",
                  WebkitMaskImage: "url(/assets/template-2-stats.svg)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  backgroundColor: stat.color,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span
                    ref={(el) => (countRefs.current[i] = el)}
                    className="font-['Montserrat'] font-extrabold text-[clamp(40px,5vw,60px)] text-[var(--bg-color)] leading-none"
                  >
                    {hasAnimated ? stat.num : "0"}
                  </span>
                  <span
                    className={`font-['Montserrat'] font-extrabold ${
                      stat.suffix.includes("billion")
                        ? "text-lg text-[var(--secondary)] ml-1"
                        : "text-[clamp(24px,3vw,40px)] text-[var(--secondary)]"
                    }`}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p className="font-['Montserrat'] text-[17px] text-[#777777] tracking-[1px] m-0 uppercase font-bold">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
