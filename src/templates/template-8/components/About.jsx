import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiPlay, FiCheck } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      gsap.from(".about-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-[120px] bg-white overflow-hidden font-sans"
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* ====== LEFT COLUMN — Visuals ====== */}
          <div className="w-full lg:w-1/2 relative about-img pl-6 pb-12">
            {/* Tan background block */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[100px] h-[70%] bg-[var(--secondary)] z-0" />

            {/* Main Image */}
            <div className="relative z-10 w-[85%] h-[550px] rounded-2xl overflow-hidden ml-6 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
                alt="About our charity"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Play Button Badge */}
            <div className="absolute top-6 right-[5%] z-20 w-[120px] h-[120px] bg-[var(--primary)] rounded-full flex items-center justify-center shadow-xl">
              <button className="w-[60px] h-[60px] bg-[var(--secondary)] rounded-full flex items-center justify-center transition-transform hover:scale-110">
                <FiPlay size={24} className="text-[var(--primary)] ml-1" />
              </button>
            </div>

            {/* Small Overlapping Image (B&W) */}
            <div className="absolute top-1/2 right-0 z-20 w-[240px] h-[240px] rounded-2xl overflow-hidden border-[8px] border-white shadow-2xl grayscale">
              <Image
                src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80"
                alt="Children smiling"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* 15+ Years Experience Card */}
            <div className="absolute bottom-0 left-[15%] z-30 bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center min-w-[160px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--primary)] text-[42px] font-bold leading-none">
                  15+
                </span>
                <FaTrophy size={32} className="text-blue-600" />
              </div>
              <span className="text-[var(--text-color)] text-[13px] font-medium uppercase tracking-wider">
                Years Experience
              </span>
            </div>
          </div>

          {/* ====== RIGHT COLUMN — Content ====== */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 about-content">
            <div className="flex flex-col">
              <span className="text-[#007b5e] font-bold text-[17px] mb-3">
                Supporting Our Cause Together
              </span>
              <h2 className="font-extrabold text-[clamp(32px,4vw,46px)] text-black leading-[1.15] m-0">
                Support Our Mission And Make A Difference
              </h2>
            </div>

            <p className="text-[#666666] text-[17px] leading-[1.8] m-0">
              Business tailored it design, management & support services
              business agency elit, sed do eiusmod tempor.
            </p>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2 py-4 border-b border-gray-100 mb-2">
              {[
                "Giving Hope, Changing Lives",
                "Empower Through Charity",
                "Together We Can",
                "Healing Communities",
                "Every Act Counts",
                "Compassion in Action",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full border border-[#007b5e] flex items-center justify-center flex-shrink-0">
                    <FiCheck size={12} className="text-[#007b5e]" />
                  </div>
                  <span className="text-[#333333] text-[17px] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Reviews & Button Area */}
            <div className="flex flex-wrap items-center justify-between gap-8 mt-4">
              <div className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-black text-[36px] font-bold leading-none mb-1">
                    999+
                  </span>
                  <span className="text-[var(--text-color)] text-[15px]">
                    Active Reviews
                  </span>
                </div>

                {/* Avatar Group */}
                <div className="flex -space-x-3">
                  {["men/32", "men/46", "women/44", "women/68"].map(
                    (img, i) => (
                      <div
                        key={i}
                        className="w-[45px] h-[45px] rounded-full border-2 border-white overflow-hidden shadow-sm relative z-[1]"
                      >
                        <Image
                          src={`https://randomuser.me/api/portraits/${img}.jpg`}
                          alt="Reviewer"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Link href="/about">
                <a className="inline-block bg-[var(--secondary)] text-black font-bold text-[17px] px-8 py-4 rounded-md transition-colors hover:bg-[#c4965d]">
                  More About Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
