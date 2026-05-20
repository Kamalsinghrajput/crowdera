"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FiX, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

export default function TeamCard({ member }) {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const openModal = () => {
    setShowModal(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimateIn(true)),
    );
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => setShowModal(false), 350);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };

    if (showModal) {
      window.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = ""; // Reset scroll style on unmount
    };
  }, [showModal]);

  return (
    <>
      {/* ── Board Member Card with Hover expansion ──────────────────── */}
      <div
        onClick={openModal}
        className="relative bg-white rounded-[2.5rem] p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-[#2b1f18]/5 flex flex-col justify-between h-[480px] overflow-hidden cursor-pointer group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-2xl"
      >
        {/* Top Header Content */}
        <div className="flex flex-col relative z-20">
          <div className="flex justify-between items-center text-[12px] font-black tracking-wider uppercase mb-2">
            
            {/* Role transitions color on hover */}
            <span className="text-[var(--primary)] transition-colors duration-500 group-hover:text-[var(--secondary)]">
              {member.role}
            </span>

            {/* Socials transition color on hover */}
            <div className="text-gray-400 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition-colors duration-500 hover:text-[var(--primary)] group-hover:text-white/60 group-hover:hover:text-[var(--secondary)] flex items-center justify-center"
              >
                <FiFacebook size={14} />
              </a>
              <span className="transition-colors duration-500 group-hover:text-white/40">•</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition-colors duration-500 hover:text-[var(--primary)] group-hover:text-white/60 group-hover:hover:text-[var(--secondary)] flex items-center justify-center"
              >
                <FiTwitter size={14} />
              </a>
              <span className="transition-colors duration-500 group-hover:text-white/40">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="transition-colors duration-500 hover:text-[var(--primary)] group-hover:text-white/60 group-hover:hover:text-[var(--secondary)] flex items-center justify-center"
              >
                <FiInstagram size={14} />
              </a>
            </div>
          </div>

          {/* Name transitions color on hover */}
          <h3 className="text-3xl font-black text-[#2b1f18] m-0 tracking-tight leading-none transition-colors duration-500 group-hover:text-white">
            {member.name}
          </h3>
        </div>

        {/* 
         * Bottom Right Image Container:
         *   - Normal: aligned to bottom right, takes 70% width/height.
         *   - Hover: expands to cover 100% width/height, shifts origin to full fill.
         * */}
        <div
          className="absolute bottom-0 right-0 w-[72%] h-[72%] rounded-tl-[2.5rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:w-full group-hover:h-full group-hover:rounded-none z-10"
          style={{ backgroundColor: member.color }}
        >
          {/* Next.js optimized Image tag */}
          <Image
            src={member.img}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105"
            priority
          />
          
          {/* Dark gradient overlay — fades in on hover so overlapping text remains highly legible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2b1f18]/65 via-[#2b1f18]/20 to-[#2b1f18]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Hover Information: Fades & slides up cleanly over the expanded dark-overlay image background */}
        <div className="relative z-20 mt-auto pt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75 pointer-events-none">
          <p
            className="text-white/95 text-[15px] leading-[1.6] m-0 line-clamp-3"
            style={{ fontFamily: "'Nunito', 'Inter', sans-serif" }}
          >
            {member.bio}
          </p>
        </div>
      </div>

      {/* ── Lightbox Details Modal ─────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-350"
          style={{
            backgroundColor: animateIn ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
            backdropFilter: animateIn ? "blur(6px)" : "blur(0px)",
            transition:
              "background-color 350ms ease, backdrop-filter 350ms ease",
          }}
          onClick={closeModal}
        >
          <div
            className="w-full max-w-[900px] bg-[#3b2d24] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
            style={{
              opacity: animateIn ? 1 : 0,
              transform: animateIn
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.95)",
              transition:
                "opacity 350ms cubic-bezier(0.16,1,0.3,1), transform 350ms cubic-bezier(0.16,1,0.3,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[350px] md:h-auto relative" style={{ backgroundColor: member.color }}>
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                className="object-cover mix-blend-multiply opacity-95"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col text-left font-sans text-white">
              <div className="mb-4">
                <span className="bg-[var(--secondary)] text-[#2b1f18] text-[12px] font-black px-4 py-2 rounded-full uppercase tracking-wider inline-block">
                  Board Member
                </span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tight">
                {member.name}
              </h2>
              <p className="text-white/90 text-[16px] leading-[1.7] font-serif mb-8">
                {member.bio}
              </p>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 mb-8 text-sm">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/60 font-black tracking-wider uppercase text-[12px]">
                    Role
                  </span>
                  <span className="text-white font-extrabold">{member.role}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/60 font-black tracking-wider uppercase text-[12px]">
                    Organization
                  </span>
                  <span className="text-white font-extrabold">{member.organization}</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-white/60 font-black tracking-wider uppercase text-[12px]">
                    Joined At
                  </span>
                  <span className="text-white font-extrabold">{member.joinedAt}</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3 mt-auto">
                {["facebook", "x", "linkedin", "instagram"].map((sm) => (
                  <a
                    href={`https://${sm}.com`}
                    key={sm}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#2b1f18] transition-colors"
                  >
                    <span className="text-[12px] font-black uppercase">{sm.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
