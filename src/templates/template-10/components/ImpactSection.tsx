import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowRight, Globe, Users, Heart, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ── Minimal world-map watermark ── */
function WorldMapBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* North America */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M60 80 C80 60 120 55 150 70 L200 65 C220 60 240 70 250 90 L260 120 C255 140 240 160 220 170 L200 190 C180 210 160 250 140 270 L120 300 C100 320 80 310 70 290 L55 260 C40 230 45 200 50 170 Z" />
      {/* South America */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M190 300 C210 290 240 295 255 315 L265 345 C270 375 260 410 245 440 L230 460 C210 475 190 465 180 445 L165 415 C150 380 155 340 170 315 Z" />
      {/* Europe */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M430 60 C450 50 480 55 495 75 L500 100 C495 120 475 130 455 125 L435 115 C415 105 410 85 430 60 Z" />
      {/* Africa */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M440 145 C465 135 495 140 510 165 L520 200 C530 240 525 290 510 330 L490 370 C470 400 445 405 425 385 L410 350 C395 310 395 265 405 225 L420 185 Z" />
      {/* Asia */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M510 55 C560 40 630 45 680 60 L740 70 C790 80 830 95 850 120 L865 150 C870 175 855 200 825 210 L780 220 C740 225 700 215 665 200 L620 185 C575 170 535 145 515 120 L505 90 Z" />
      {/* Australia */}
      <path opacity="0.12" fill="none" stroke="white" strokeWidth="1.2"
        d="M720 310 C750 295 800 300 830 325 L845 355 C850 385 835 415 810 425 L775 430 C745 432 720 415 710 390 L700 360 C698 335 710 318 720 310 Z" />
      {/* Latitude lines */}
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="0" y1="120" x2="1000" y2="120" />
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="0" y1="250" x2="1000" y2="250" />
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="0" y1="380" x2="1000" y2="380" />
      {/* Longitude lines */}
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="250" y1="0" x2="250" y2="500" />
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="500" y1="0" x2="500" y2="500" />
      <line opacity="0.06" stroke="white" strokeWidth="0.8" x1="750" y1="0" x2="750" y2="500" />
    </svg>
  );
}

const STATS = [
  { icon: Globe,       label: "Countries Reached",    value: 42,    suffix: "+" },
  { icon: Users,       label: "People Impacted",      value: 10000, suffix: "+" },
  { icon: Heart,       label: "Campaigns Funded",     value: 350,   suffix: "+" },
  { icon: TrendingUp,  label: "Funds Raised",         value: 12,    suffix: "M" },
];

export default function ImpactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
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
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-20 md:py-28 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#fdf4f6 0%,#ffffff 50%,#f8f0ff 100%)" }}
    >
      {/* Decorative rings */}
      <svg className="absolute top-8 right-8 w-28 opacity-10 animate-float-slow pointer-events-none" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="55" stroke="#e8547a" strokeWidth="3" fill="none" />
        <circle cx="60" cy="60" r="35" stroke="#e8547a" strokeWidth="1.5" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-t10-rose" />
            <span className="text-t10-rose font-extrabold text-xs uppercase tracking-[3px]">
              Our Impact
            </span>
            <span className="block w-10 h-0.5 bg-t10-rose" />
          </div>
          <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] leading-tight mb-4">
            Creating a World Where{" "}
            <span className="text-t10-rose">Every Life Matters</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            To promote well-being and opportunity by creating awareness, providing support,
            and building positive, resilient communities worldwide.
          </p>
        </div>

        {/* Impact card */}
        <div
          ref={cardRef}
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-out ${
            hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "linear-gradient(135deg, #7C3682 0%, #9b59b6 40%, #e8547a 100%)",
          }}
        >
          <WorldMapBg />

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
                      <span ref={(el) => { counterRefs.current[idx] = el; }}>0</span>
                      <span className="text-xl sm:text-2xl md:text-3xl">{stat.suffix}</span>
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
                <h3 className="text-lg font-extrabold mb-2">Community Development</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Our foundation focuses on spreading awareness, offering direct support,
                  and encouraging individuals to lead balanced and empowered lives through
                  community-driven initiatives and programs.
                </p>
              </div>
              <div className="md:text-right">
                <h3 className="text-lg font-extrabold mb-2">Geographic Presence</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Active across Asia, Africa, and the Americas — building networks of hope
                  and empowerment in underserved regions worldwide.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button className="inline-flex items-center gap-2 bg-white font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300"
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
