import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { CheckCircle2, Phone } from "lucide-react";

const AboutUs = () => {
  const containerRef = useRef(null);
  const shapesRef = useRef(null);
  const heartRef = useRef(null);
  const dotsRef = useRef(null);
  const mainImgRef = useRef(null);
  const overlapImgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".about-img",
              { scale: 0.8, opacity: 0 },
              { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (containerRef.current) observer.observe(containerRef.current);

    // Float all background shapes
    if (shapesRef.current) {
      gsap.to(shapesRef.current.children, {
        y: "random(-25, 25)",
        x: "random(-25, 25)",
        rotation: "random(-15, 15)",
        scale: "random(0.9, 1.1)",
        duration: "random(2, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });
    }

    // Float heart
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        y: -20,
        x: 12,
        rotation: 10,
        scale: 1.1,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Float dots
    if (dotsRef.current) {
      gsap.to(dotsRef.current.children, {
        y: "random(-14, 14)",
        x: "random(-10, 10)",
        scale: "random(0.8, 1.3)",
        duration: "random(1.5, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    }

    // Float the main image container
    if (mainImgRef.current) {
      gsap.to(mainImgRef.current, {
        y: -10,
        x: 5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Float the overlapping image container
    if (overlapImgRef.current) {
      gsap.to(overlapImgRef.current, {
        y: 12,
        x: -8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
      ref={containerRef}
    >
      {/* Floating Shapes */}
      <div ref={shapesRef} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-28 h-28 rounded-full border-4 border-brand-yellow/20"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-xl bg-brand-teal/5 rotate-45"></div>
        <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full bg-brand-yellow/10"></div>
        <div className="absolute bottom-1/4 right-16 w-24 h-24 rounded-full border-2 border-brand-teal/10"></div>
        <div className="absolute top-10 left-1/3 w-8 h-8 rounded-full bg-[rgba(0,113,93,0.10)]"></div>
        <div className="absolute top-2/3 left-1/4 w-16 h-16 rounded-full border-2 border-brand-yellow/15"></div>
        <div className="absolute bottom-10 right-1/3 w-6 h-6 rounded-lg bg-brand-yellow/20 rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full bg-brand-teal/15"></div>
      </div>

      {/* Floating Heart - Top Right */}
      <div
        ref={heartRef}
        className="absolute top-16 right-24 z-0 pointer-events-none hidden lg:block"
      >
        <img
          src="/assets/heart.svg"
          alt=""
          width={90}
          style={{
            opacity: 0.15,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      {/* Floating Dots Cluster - Bottom Left */}
      <div
        ref={dotsRef}
        className="absolute bottom-28 left-16 z-0 pointer-events-none hidden lg:block"
      >
        <div
          className="w-4 h-4 rounded-full bg-[var(--secondary)] absolute"
          style={{ top: 0, left: 0 }}
        ></div>
        <div
          className="w-2.5 h-2.5 rounded-full bg-[var(--primary)] absolute"
          style={{ top: 22, left: 28 }}
        ></div>
        <div
          className="w-3 h-3 rounded-full bg-brand-teal/50 absolute"
          style={{ top: -12, left: 40 }}
        ></div>
        <div
          className="w-2 h-2 rounded-full bg-brand-yellow/60 absolute"
          style={{ top: 35, left: 10 }}
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-full bg-brand-teal/70 absolute"
          style={{ top: 10, left: 55 }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Images Left */}
          <div className="w-full lg:w-1/2 relative about-img opacity-0">
            {/* Main large image */}
            <div
              ref={mainImgRef}
              className="relative rounded-3xl overflow-hidden shadow-2xl z-10 w-4/5"
            >
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80"
                alt="Volunteers helping community"
                className="w-full h-[280px] sm:h-[350px] lg:h-[420px] object-cover"
              />
            </div>

            {/* Overlapping smaller image */}
            <div
              ref={overlapImgRef}
              className="absolute top-1/4 right-0 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=500&auto=format&fit=crop&q=80"
                alt="Children learning together"
                className="w-full h-[180px] sm:h-[220px] lg:h-[260px] object-cover"
              />
            </div>

            {/* Experience Badge */}
            <div
              className="absolute -bottom-4 left-0 sm:-bottom-8 sm:-left-4 lg:-left-8 bg-[var(--primary)] text-[#091F1B] p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl z-30 font-bold max-w-[200px] sm:max-w-xs transition-transform transform hover:scale-105 duration-300"
              style={{ background: "#FEC908" }}
            >
              <div className="text-2xl sm:text-4xl mb-1 sm:mb-2">25+</div>
              <div className="text-xs sm:text-base ">
                Years of Experience in Charity &amp; Fundraising.
              </div>
            </div>
          </div>

          {/* Text Right */}
          <div className="w-full lg:w-1/2 about-text">
            <span
              className="font-bold tracking-wider uppercase text-md mb-2 block text-[var(--secondary)]"
              style={{
                fontFamily: "'Caveat', 'Segoe Script', cursive",
                fontWeight: "bolder",
              }}
            >
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#091F1B] mb-6 leading-tight">
              We Can Save More Lifes With Your Helping Hand.
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              Our foundation focuses on the holistic development of communities
              through sustainable initiatives. By providing education, health
              care, and basic survival necessities, we aim to eradicate poverty.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Highest standard of integrity",
                "Over 100+ active worldwide campaigns",
                "Direct impact on global communities",
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2
                    className="text-[var(--secondary)] mt-1 mr-3 min-w-[24px]"
                    size={24}
                  />
                  <span className="text-[#091F1B] font-bold text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA + phone number side-by-side */}
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#" passHref>
                <a
                  className="inline-block bg-[#091F1B] text-white font-bold py-4 px-10 rounded-full
                            hover:text-white hover:bg-[var(--secondary)] transition-all transform shadow-xl hover:shadow-2xl hover:shadow-[#091F1B]/30"
                >
                  Learn More About Us
                </a>
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(0,113,93,0.10)] flex items-center justify-center flex-shrink-0">
                  <Phone size={36} className="text-[var(--secondary)]" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Call Us Now
                  </span>
                  <span className="text-base font-extrabold text-[#091F1B]">
                    +2(305) 587-3407
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
