import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonLetterRoll from "./ButtonLetterRoll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiUsers, FiHeart } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const mainImgRef = useRef(null);
  const overlapImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll entry animations
      gsap.from(".about-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });
      gsap.from(".about-image", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      gsap.from(".about-copy", {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-[120px] bg-[#FAF6FC] overflow-hidden font-sans"
    >
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
          {/* Images Left (Template-1 style layout with Next.js Image components) */}
          <div className="about-image w-full relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[560px] min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
              {/* Main large image */}
              <div
                ref={mainImgRef}
                className="relative rounded-3xl overflow-hidden shadow-2xl z-10 w-4/5 h-[280px] sm:h-[350px] lg:h-[420px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80"
                  alt="Volunteers helping community"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>

              {/* Overlapping smaller image */}
              <div
                ref={overlapImgRef}
                className="absolute top-1/4 right-0 w-3/5 h-[180px] sm:h-[220px] lg:h-[260px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white z-20"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497375638960-ca368c7231e4?w=500&auto=format&fit=crop&q=80"
                  alt="Children learning together"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Experience Badge matching UI theme (var(--primary)) */}
              <div
                className="absolute -bottom-4 left-0 sm:-bottom-8 sm:-left-4 lg:-left-8 bg-[var(--primary)] text-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl z-30 font-bold max-w-[200px] sm:max-w-xs transition-transform transform hover:scale-105 duration-300"
              >
                <div className="text-2xl sm:text-4xl mb-1 sm:mb-2 font-black leading-none text-white">25+</div>
                <div className="text-xs sm:text-base leading-tight text-purple-100">
                  Years of Experience in Charity &amp; Fundraising.
                </div>
              </div>
            </div>
          </div>

          <div className="about-copy relative space-y-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-[#7B5D86]">
              <span className="block h-2.5 w-2.5 rounded-full bg-[#D9B6E3]" />
              About Truehelp
            </span>

            <div className="space-y-6">
              <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-[#211823] sm:text-5xl xl:text-[4.8rem]">
                Support When You Need It Most
              </h2>
              <p className="max-w-[660px] text-base leading-8 text-[#625362]">
                Nobody should face a mental health problem alone. We need your help so we can be there – on the other end of the phone.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ButtonLetterRoll
                text="Helping Someone"
                href="/templates/template-6/initiatives?tab=campaigns"
                bgColor="#ffffff"
                textColor="#392C40"
                borderColor="#E7DCE9"
                hoverBgColor="var(--primary)"
                hoverTextColor="#ffffff"
                hoverBorderColor="var(--primary)"
                leftIcon={<FiUsers size={16} />}
                showArrow={false}
              />

              <ButtonLetterRoll
                text="Donate Now"
                href="/templates/template-6/initiatives?tab=donate"
                bgColor="var(--primary)"
                textColor="#ffffff"
                borderColor="var(--primary)"
                hoverBgColor="#211823"
                hoverTextColor="#ffffff"
                hoverBorderColor="#211823"
                leftIcon={<FiHeart size={16} />}
                showArrow={false}
              />
            </div>

            <p className="max-w-[660px] text-base leading-8 text-[#625362]">
              Every child has the right to dream, no matter who they are or where they live. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charity varius enim in eros elementum tristique duis cursus.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLetterRoll
                text="About Us"
                href="/templates/template-6/about"
                bgColor="var(--primary)"
                textColor="#ffffff"
                borderColor="var(--primary)"
                hoverBgColor="#211823"
                hoverTextColor="#ffffff"
                hoverBorderColor="#211823"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
