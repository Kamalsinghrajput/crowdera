import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Instagram,
  Twitter,
  Facebook,
  ArrowRight,
  Plus,
  Users,
} from "lucide-react";

const MEMBERS = [
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80",
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    name: "Priya Sharma",
    role: "Chief Operations Officer",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    name: "Arjun Mehta",
    role: "Head of Programs",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    name: "Ananya Iyer",
    role: "Director of Outreach",
    instagram: "#",
    twitter: "#",
    facebook: "#",
  },
];

export default function BoardMembersSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    // Entrance animation — trigger once when section enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cardsRef.current.children,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.7,
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
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="board-members"
      className="relative py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fff7f9 0%,#ffffff 50%,#f8f0ff 100%)",
      }}
    >
      {/* Decorative SVGs matching Template-10 style */}
      <svg
        className="absolute top-10 left-6 w-32 opacity-10 pointer-events-none"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r="55"
          stroke="#e8547a"
          strokeWidth="3"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r="35"
          stroke="#e8547a"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-8 w-24 opacity-10 pointer-events-none"
        viewBox="0 0 100 100"
      >
        <path
          d="M50 90S10 68 10 42C10 26 18 15 30 18C40 21 46 29 50 37C54 29 60 21 70 18C82 15 90 26 90 42C90 68 50 90 50 90Z"
          fill="#e8547a"
        />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header — matches T10 pattern */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="block w-10 h-0.5 bg-t10-rose" />
            <span className="inline-flex items-center gap-2 text-t10-rose font-extrabold text-xs uppercase tracking-[3px]">
              <Users size={14} /> Our Team
            </span>
            <span className="block w-10 h-0.5 bg-t10-rose" />
          </div>
          <h2 className="font-black text-gray-800 text-3xl md:text-4xl lg:text-[44px] leading-tight mb-3">
            Meet Our Board <span className="text-t10-rose">Members</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Our board provides strategic guidance and governance to ensure
            long-term impact and responsible stewardship of every donation we
            receive.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {MEMBERS.map((m, idx) => (
            <div key={idx} className="group opacity-0">
              {/* Photo card */}
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(35,7,17,0.92) 0%, rgba(232,84,122,0.55) 55%, transparent 100%)",
                  }}
                />

                {/* Social icons + plus button — bottom right */}
                <div className="absolute bottom-4 right-4 z-10 social-hover-wrapper">
                  {/* Social icons slide up from the + button */}
                  <div
                    className="social-icons-container absolute bottom-12 right-0 flex flex-col gap-2
                      opacity-0 translate-y-2 pointer-events-none transition-all duration-300"
                  >
                    <a
                      href={m.instagram}
                      aria-label="Instagram"
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
                      }}
                    >
                      <Instagram size={16} color="#fff" />
                    </a>
                    <a
                      href={m.twitter}
                      aria-label="Twitter"
                      className="w-9 h-9 rounded-full bg-[#1DA1F2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      <Twitter size={16} color="#fff" />
                    </a>
                    <a
                      href={m.facebook}
                      aria-label="Facebook"
                      className="w-9 h-9 rounded-full bg-[#4267B2] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                    >
                      <Facebook size={16} color="#fff" />
                    </a>
                  </div>

                  {/* Plus button */}
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg
                      hover:scale-110 transform transition-all duration-300 focus:outline-none"
                    style={{
                      background: "linear-gradient(135deg,#e8547a,#c0394e)",
                    }}
                  >
                    <Plus size={20} color="#fff" strokeWidth={3} />
                  </button>
                </div>
              </div>

              {/* Name & role */}
              <div className="mt-4 text-center">
                <h4 className="text-base font-extrabold text-gray-800 group-hover:text-t10-rose transition-colors duration-300">
                  {m.name}
                </h4>
                <p className="text-sm text-gray-400 font-medium mt-0.5">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="text-center mt-12">
          <button
            className="inline-flex items-center gap-2 font-extrabold text-sm py-4 px-10 rounded-full
              bg-gradient-to-r from-t10-rose to-t10-roseDark text-white
              hover:shadow-xl hover:shadow-t10-rose/30 hover:-translate-y-1
              transition-all duration-300 group focus:outline-none"
          >
            View All Members
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* CSS for the + hover reveal */}
      <style>{`
        .social-hover-wrapper:hover .social-icons-container {
          opacity: 1 !important;
          transform: translateY(0) !important;
          pointer-events: auto !important;
        }
      `}</style>
    </section>
  );
}
