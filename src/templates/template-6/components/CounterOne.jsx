import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const STATS = [
  {
    num: "100",
    suffix: "%",
    label: "Donation Transparency",
    color: "var(--secondary)",
    subtext: "Directly reaching community projects and beneficiaries",
  },
  {
    num: "18.2",
    suffix: "K+",
    label: "Lives Touched",
    color: "var(--primary)",
    subtext: "Through education, nutrition, healthcare, and shelter programs.",
  },
  {
    num: "315",
    suffix: "+",
    label: "Health Camps Organized",
    color: "#70b4a4",
    subtext: "Medical camps delivered in remote and underserved regions.",
  },
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
            const isDecimal = stat.num.includes(".");
            const obj = { val: 0 };

            gsap.to(obj, {
              val: targetVal,
              duration: 2.5,
              ease: "power2.out",
              onUpdate() {
                if (countRefs.current[i]) {
                  const currentVal = isDecimal
                    ? obj.val.toFixed(1)
                    : Math.round(obj.val).toString();
                  countRefs.current[i].textContent = currentVal;
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
      className="bg-[#F9F5EC] py-[100px] border-t border-black/5"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header Block */}
        <div className="text-center mb-16">
          <span
            className="text-[var(--secondary)] text-3xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Purpose with impact
          </span>
          <h2 className="text-5xl lg:text-7xl font-black text-[#2b1f18] tracking-tighter leading-[1.05] uppercase m-0">
            OUR GOALS IS HELPING PEOPLE
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Colored Top Bar */}
              <div
                className="w-[280px] h-[6px] rounded-full mb-10 transition-transform duration-300 group-hover:scale-x-105"
                style={{ backgroundColor: stat.color }}
              />

              {/* Number */}
              <div className="flex items-baseline justify-center gap-0.5 mb-3 text-[#bab5a9] font-black text-6xl lg:text-7xl tracking-tighter transition-colors duration-300 group-hover:text-[#2b1f18]">
                <span ref={(el) => (countRefs.current[i] = el)}>
                  {hasAnimated ? stat.num : "0"}
                </span>
                <span>{stat.suffix}</span>
              </div>

              {/* Label */}
              <h3 className="text-[20px] font-black text-[#2b1f18] uppercase tracking-tight mb-4">
                {stat.label}
              </h3>

              {/* Subtext */}
              <p className="text-[#5c4a3c] text-[16px] leading-[1.6] font-serif max-w-[320px] m-0">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
