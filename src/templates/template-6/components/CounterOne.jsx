import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FiFolder, FiDollarSign, FiSmile, FiUsers } from "react-icons/fi";

const STATS = [
  {
    num: "240",
    suffix: "+",
    label: "Total Campaigns",
    color: "#8E6F9F",
    subtext: "High impact crowdfunding campaigns active worldwide.",
    icon: FiFolder,
  },
  {
    num: "48.7",
    suffix: "K+",
    label: "Raised Funds",
    color: "#00D2FF",
    subtext: "Generous contributions supporting essential causes.",
    icon: FiDollarSign,
  },
  {
    num: "12",
    suffix: "K+",
    label: "Satisfied Donors",
    color: "#70b4a4",
    subtext: "Individual donors building a transparent community.",
    icon: FiSmile,
  },
  {
    num: "4.8",
    suffix: "K+",
    label: "Happy Volunteers",
    color: "#d6a678",
    subtext: "Dedicated supporters working tirelessly on-ground.",
    icon: FiUsers,
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
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FAF6FC] py-[120px] relative overflow-hidden border-t border-black/5"
    >
      {/* Decorative background gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#00D2FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#8E6F9F]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="text-center mb-20">
          <span
            className="text-[var(--secondary)] text-3xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Purpose with impact
          </span>
          <h2 
            className="text-5xl lg:text-[54px] font-black text-[#211823] tracking-tight uppercase m-0 leading-tight font-sora"
          >
            OUR GOAL IS HELPING PEOPLE
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center p-6 bg-white border border-[#211823]/5 rounded-[2.5rem] shadow-[0_15px_40px_rgba(33,24,35,0.02)] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_25px_50px_rgba(142,111,159,0.08)] hover:-translate-y-2 group cursor-pointer"
              >
                {/* Icon Circle */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ 
                    backgroundColor: `${stat.color}12`,
                    color: stat.color 
                  }}
                >
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                {/* Number */}
                <div className="flex items-baseline justify-center gap-0.5 mb-3 text-[#211823] font-black text-5xl lg:text-6xl tracking-tight font-sora">
                  <span ref={(el) => (countRefs.current[i] = el)}>
                    {hasAnimated ? stat.num : "0"}
                  </span>
                  <span className="text-[var(--primary)]">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-black text-[#211823] uppercase tracking-wider mb-3 font-sora">
                  {stat.label}
                </h3>

                {/* Subtext */}
                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[280px] m-0 font-sans">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


