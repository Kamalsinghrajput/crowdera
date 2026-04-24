import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Plus, Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

const members = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    name: "Priya Sharma",
    role: "Chief Operations Officer",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    name: "Arjun Mehta",
    role: "Head of Programs",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    name: "Ananya Iyer",
    role: "Director of Outreach",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    facebook: "https://facebook.com",
  },
];

const BoardMembers = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              ".member-card",
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out",
              },
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="board"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#091F1B] leading-tight mb-3">
            Our Board <span className="text-[var(--secondary)]">Members</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our Board Members provide strategic guidance, governance, and
            oversight to ensure the organization&apos;s growth and long-term
            impact.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {members.map((m, idx) => (
            <div key={idx} className="member-card opacity-0 group">
              {/* Card image + hover effects */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg bg-gray-100">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* change 12: dark green gradient overlay on card hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(to top, #0a2918ee 0%, #145a3288 55%, transparent 100%)",
                  }}
                />

                {/* change 11: Plus button — reveals socials on hover */}
                <div className="absolute bottom-4 right-4 z-10 social-hover-wrapper">
                  {/* Social icons — slide up from button on + hover */}
                  <div
                    className="social-icons-container absolute bottom-10 right-0 pb-2 flex flex-col gap-2
                    opacity-0 translate-y-2 pointer-events-none
                    transition-all duration-300"
                  >
                    <a
                      href={m.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg
                                 hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                      }}
                    >
                      <Instagram size={16} color="#fff" />
                    </a>
                    <a
                      href={m.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center shadow-lg
                                 hover:scale-110 transition-transform"
                    >
                      <Twitter size={16} color="#fff" />
                    </a>
                    <a
                      href={m.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-[#4267B2] flex items-center justify-center shadow-lg
                                 hover:scale-110 transition-transform"
                    >
                      <Facebook size={16} color="#fff" />
                    </a>
                  </div>

                  {/* The + button itself */}
                  <button
                    className="w-10 h-10 rounded-full bg-[var(--primary)] text-[#091F1B] flex items-center justify-center
                               shadow-lg hover:bg-[var(--secondary)] hover:text-white transition-colors hover:scale-110 transform"
                  >
                    <Plus size={20} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Name & Role */}
              <div className="mt-4 text-center">
                <h4 className="text-lg font-extrabold text-[#091F1B] group-hover:text-brand-teal transition-colors">
                  {m.name}
                </h4>
                <p className="text-sm text-gray-400 font-medium">{m.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/templates/template-1/board">
            <a
              className="inline-flex items-center gap-2 bg-[#091F1B] text-white font-bold py-4 px-10 rounded-full
                          hover:bg-[var(--primary)] hover:text-[#091F1B] transition-all duration-300 transform hover:-translate-y-1 shadow-xl group"
            >
              View All Board Members
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .social-hover-wrapper:hover .social-icons-container {
          opacity: 1 !important;
          transform: translateY(0) !important;
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  );
};

export default BoardMembers;
