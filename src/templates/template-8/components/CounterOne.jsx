import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  PiHandshake,
  PiChatCenteredText,
  PiTrophy,
  PiFileText,
} from "react-icons/pi";

const STATS = [
  {
    num: "300",
    suffix: " +",
    label: "Team Members",
    icon: <PiHandshake size={55} />,
  },
  {
    num: "500",
    suffix: " +",
    label: "Client's Review",
    icon: <PiChatCenteredText size={55} />,
  },
  {
    num: "99",
    suffix: " +",
    label: "Winning Awards",
    icon: <PiTrophy size={55} />,
  },
  {
    num: "800",
    suffix: " +",
    label: "Happy Clients",
    icon: <PiFileText size={55} />,
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
    <section ref={sectionRef} className="bg-white py-16">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="bg-[var(--secondary)] rounded-[20px] px-8 py-16 lg:px-14 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex items-center justify-center lg:justify-start gap-5 group transition-transform duration-300 hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-[110px] h-[110px] bg-[var(--primary)] rounded-full text-white shadow-lg">
                  {/* Dashed Inner Circle */}
                  <div className="absolute inset-2 border border-dashed border-white/40 rounded-full"></div>
                  <div className="relative z-10">{stat.icon}</div>
                </div>

                {/* Text Content */}
                <div className="text-left">
                  <div className="flex items-baseline gap-1.5">
                    <span
                      ref={(el) => (countRefs.current[i] = el)}
                      className="font-['Montserrat'] font-extrabold text-[48px] text-[var(--bg-color)] leading-none"
                    >
                      {hasAnimated ? stat.num : "0"}
                    </span>
                    <span className="font-['Montserrat'] font-extrabold text-[40px] text-[var(--bg-color)]">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="font-['Montserrat'] text-[17px] text-[var(--bg-color)] font-semibold m-0 mt-1 whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
