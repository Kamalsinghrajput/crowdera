import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STATS = [
  { num: "20", suffix: " billion", label: "People Helped", color: "#FBD9D7" },
  { num: "200", suffix: "+", label: "Country Impacted", color: "#C6F3EE" },
  { num: "50", suffix: "K+", label: "Volunteer", color: "#FCE9C6" },
  { num: "1000", suffix: "+", label: "Successful Project", color: "#E3D7F6" },
];

export default function CounterOne() {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#007B39";
  const secondaryBgColor = "#f9f9f9";

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
                  countRefs.current[i].textContent = Math.round(obj.val).toString();
                }
              },
            });
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-[60px] pb-[80px] border-t border-[#F0F0F0]">
      <style dangerouslySetInnerHTML={{ __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }` }} />
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
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-60 rotate-30"
                style={{
                  maskImage: "url(/assets/template-2-stats.svg)",
                  WebkitMaskImage: "url(/assets/template-2-stats.svg)",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  backgroundColor: "#EBD3AF",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-baseline justify-center gap-0.5 mb-2">
                  <span 
                    ref={(el) => (countRefs.current[i] = el)}
                    className="font-['Sora',sans-serif] text-[clamp(40px,5vw,60px)] text-[var(--bg-color)] leading-none"
                  >
                    0
                  </span>
                  <span
                    className={`font-['Sora',sans-serif]  ${
                      stat.suffix.includes("billion")
                        ? "text-lg text-[#007B39] ml-1"
                        : "text-[clamp(24px,3vw,40px)] text-[#007B39]"
                    }`}
                  >
                    {stat.suffix}
                  </span>
                </div>
                <p className="font-['Inter',sans-serif] text-base text-[#007B39] m-0 capitalize font-medium">
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
