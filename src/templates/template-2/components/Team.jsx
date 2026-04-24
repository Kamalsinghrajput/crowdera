"use client";
import Link from "next/link";
import FloatingBird from "./FloatingBird";

const TEAM = [
  {
    name: "Leslie Alexander",
    role: "Program Director",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Annette Black",
    role: "Community Manager",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dianne Russell",
    role: "Volunteer Coordinator",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Marvin McKinney",
    role: "Outreach Specialist",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function TeamCard({ member }) {
  return (
    <div className="group flex flex-col gap-6">
      {/* Circular photo */}
      <div className="w-[240px] h-[240px] rounded-full overflow-hidden mx-auto bg-white p-2 transition-all duration-300">
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
          {/* Greenish tint overlay */}
          <div className="absolute inset-0 bg-t2-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-multiply" />
        </div>
      </div>

      {/* Info Row */}
      <div className="flex items-center gap-4 px-2">
        {/* Plus button with Socials */}
        <div className="relative group/social">
          {/* Social Icons Container */}
          <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 pb-3 flex flex-col gap-2 opacity-0 invisible translate-y-4 group-hover/social:opacity-100 group-hover/social:visible group-hover/social:translate-y-0 transition-all duration-300 z-20 pointer-events-none group-hover/social:pointer-events-auto">
            {["fb", "tw", "in"].map((s, idx) => (
              <a
                key={s}
                href="#"
                className="w-9 h-9 rounded-full bg-white text-t2-dark flex items-center justify-center text-[12px] uppercase shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-colors hover:bg-t2-secondary hover:text-white"
                style={{ transitionDelay: `${(2 - idx) * 40}ms` }}
              >
                {s}
              </a>
            ))}
          </div>

          <div className="w-[50px] h-[50px] rounded-full bg-t2-dark flex items-center justify-center shrink-0 cursor-pointer text-white transition-all duration-300 group-hover/social:bg-t2-secondary relative z-10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="transition-transform duration-300 group-hover/social:rotate-45"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </div>
        </div>

        {/* Text Stack */}
        <div className="flex flex-col text-left">
          <h3 className="text-[20px] text-t2-dark transition-colors duration-300 group-hover:text-t2-secondary leading-tight mb-1">
            <a href="#">{member.name}</a>
          </h3>
          <p className="text-[14px] text-t2-gray m-0">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="bg-t2-light py-[120px] pb-[100px] relative">
      <FloatingBird position="right" />
      <div className="max-w-[1320px] mx-auto px-3">
        {/* Section title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-t2-secondary" />
            <span className="text-[16px] text-t2-dark italic">
              Our Team Member
            </span>
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-t2-dark">
            Meet Our Dedicated
            <br /> Team Members.
          </h2>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* See All button */}
        <div className="text-center mt-[70px]">
          <Link href="/templates/template-2/team">
            <a className="t2-btn">
              <span>See All Members</span>
              <i>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
