import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const donationCategories = [
  {
    id: 1,
    title: "Volunteers",
    illustration: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#grad1)"/>
        <circle cx="100" cy="40" r="20" fill="#FFA500"/>
        <path d="M70 60 L60 80 M100 60 L100 85 M130 60 L140 80" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Worldwide Support",
    illustration: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#grad2)"/>
        <circle cx="100" cy="50" r="30" fill="#3b82f6" opacity="0.8"/>
        <circle cx="100" cy="50" r="25" fill="none" stroke="white" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Charity Donation",
    illustration: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#eab308', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#grad3)"/>
        <circle cx="100" cy="50" r="25" fill="#FBBF24"/>
        <rect x="95" y="40" width="10" height="30" fill="#16A34A"/>
        <rect x="85" y="50" width="30" height="10" fill="#16A34A"/>
      </svg>
    )
  },
  {
    id: 4,
    title: "Healthcare",
    illustration: (
      <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect width="200" height="120" fill="url(#grad4)"/>
        <circle cx="100" cy="50" r="22" fill="#FF69B4"/>
        <path d="M100 35 L100 65 M85 50 L115 50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    )
  },
];

const stats = [
  { value: "35", label: "YEARS OF\nFOUNDATION" },
  { value: "60+", label: "MONTHLY\nDONORS" },
  { value: "1.5k", label: "INCREDIBLE\nVOLUNTEERS" },
  { value: "785", label: "SUCCESSFUL\nCAMPAINS" },
];

export default function DonationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="donations"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/template-10-donation-bg.svg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d1330]/85 via-[#1a0a1e]/80 to-[#2d1330]/85 z-[1]" />

      {/* Main content area */}
      <div ref={contentRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Text content */}
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="block w-10 h-0.5 bg-t10-rose" />
              <span className="text-t10-rose font-extrabold tracking-widest uppercase text-xs">
                Easy Fund Donations
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black mb-6 leading-tight ">
              The Mission and Goals for Our Charity Program
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Ultricies lacus turpis tincidunt aliquet. Eget nunc lobortis mattis aliquam faucibus purus in. Bibendum est ultricies integer quis actor elit sed. Ultrices tincidunt arcu non sodales neque.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button className="border-2 border-black font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-white hover:text-gray-900 transition-colors ">
                <Heart className="inline mr-2" size={18} fill="currentColor" />
                DONATE NOW
              </button>
              <p className="text-white/60 font-script text-2xl italic">With Love</p>
            </div>
          </div>

          {/* Right side - Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {donationCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                {/* Card header illustration */}
                <div className="h-32 overflow-hidden">
                  {category.illustration}
                </div>
                {/* Card footer */}
                <div className="p-4 text-center">
                  <h3 className="font-bold text-gray-800 text-base">
                    {category.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section - Still dark themed */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-t10-rose mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-xs md:text-sm font-semibold uppercase whitespace-pre-line leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
