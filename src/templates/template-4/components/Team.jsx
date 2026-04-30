"use client";

import Image from "next/image";
import Link from "next/link";

const TEAM = [
  {
    name: "Leslie Alexander",
    role: "Junior Poster",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Dianne Russell",
    role: "Junior Poster",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Ralph Edwards",
    role: "Junior Poster",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Annette Black",
    role: "Junior Poster",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const SOCIALS = [
  {
    key: "fb",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    key: "tw",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
  },
  {
    key: "in",
    icon: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function TeamCard({ member }) {
  return (
    <div className="group flex flex-col gap-6">
      {/* Circular photo */}
      <div
        style={{
          width: 240,
          height: 240,
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
          background: "#fff",
          padding: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={member.img}
            alt={member.name}
            width={224}
            height={224}
            className="w-full h-full object-cover object-top transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />

          {/* Green overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,123,57,0.40)",
              opacity: 0,
              transition: "opacity 0.5s ease",
              mixBlendMode: "multiply",
            }}
            className="group-hover:opacity-100"
          />
        </div>
      </div>

      {/* Info Row */}
      <div className="flex items-center gap-4 px-2">
        {/* Socials */}
        <div className="relative group/social">
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 pb-3 flex flex-col gap-2 z-20 opacity-0 invisible translate-y-4 group-hover/social:opacity-100 group-hover/social:visible group-hover/social:translate-y-0 transition-all duration-300 pointer-events-none group-hover/social:pointer-events-auto">
            {SOCIALS.map((s, idx) => (
              <Link key={s.key} href="#">
                <a
                  className="w-9 h-9 rounded-full bg-white text-[#121d18] flex items-center justify-center shadow-md transition-all duration-300 hover:bg-[#FFA415] hover:text-white"
                  style={{ transitionDelay: `${(2 - idx) * 40}ms` }}
                >
                  {s.icon}
                </a>
              </Link>
            ))}
          </div>

          <div className="w-12 h-12 rounded-full bg-[#121d18] flex items-center justify-center cursor-pointer text-white transition group-hover/social:bg-[#FFA415]">
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

        {/* Name */}
        <div>
          <h3 className="text-[20px] text-[#121d18] mb-1 leading-[1.2] transition group-hover:text-[#FFA415]">
            <a href="#" className="no-underline text-inherit">
              {member.name}
            </a>
          </h3>
          <p className="text-[14px] text-[#6c6e76] m-0">{member.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team({ isAllTeamPage }) {
  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  const displayTeam = isAllTeamPage ? [...TEAM, ...TEAM] : TEAM;

  return (
    <section
      style={{
        background: secondaryBgColor,
        padding: "120px 0 100px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }`,
        }}
      />

      <div className="max-w-[1320px] mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-[#FFA415]" />
            <span className="text-[16px] text-[#121d18] italic">
              Our Team Member
            </span>
          </div>

          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-[#121d18]">
            Meet Our Dedicated
            <br /> Team Members.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {displayTeam.map((member, i) => (
            <TeamCard key={i} member={member} />
          ))}
        </div>

        {/* Button */}
        {!isAllTeamPage && (
          <div className="flex justify-center mt-16 relative z-10">
            <Link href="/templates/template-4/team">
              <a className="t2-btn t2-btn-secondary">
                <span>View All Team Members</span>
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
        )}
      </div>
    </section>
  );
}
