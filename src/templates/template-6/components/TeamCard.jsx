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
      <div
        onClick={openModal}
        className="relative bg-white rounded-[2.5rem] p-6 shadow-[0_15px_40px_rgba(33,24,35,0.03)] border border-[#211823]/5 flex flex-col h-[500px] overflow-hidden cursor-pointer group transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_30px_60px_rgba(142,111,159,0.12)] hover:-translate-y-2 bg-gradient-to-b from-white to-[#FAF6FC]/30"
      >
        {/* Image Container Wrapper */}
        <div className="relative w-full h-[280px] rounded-[2rem] overflow-hidden mb-6 z-10 flex-shrink-0">
          {/* Accent Color Background block that rotates/scales slightly on card hover */}
          <div
            className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:rotate-1"
            style={{ backgroundColor: member.color }}
          />
          {/* The main Image */}
          <Image
            src={member.img}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="mix-blend-multiply opacity-90 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Social Icons floating on Image hover */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] delay-75">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/95 text-[#211823] flex items-center justify-center shadow-md hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiFacebook size={13} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/95 text-[#211823] flex items-center justify-center shadow-md hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiTwitter size={13} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-white/95 text-[#211823] flex items-center justify-center shadow-md hover:bg-[var(--primary)] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <FiInstagram size={13} />
            </a>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-col flex-grow justify-between">
          <div>
            {/* Role Badge */}
            <span 
              className="inline-block text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3.5"
              style={{ 
                color: member.color, 
                backgroundColor: `${member.color}15`
              }}
            >
              {member.role}
            </span>

            {/* Name */}
            <h3 className="text-2xl font-black text-[#211823] tracking-tight leading-tight mb-2.5 font-sora transition-colors duration-300 group-hover:text-[var(--primary)]">
              {member.name}
            </h3>

            {/* Bio Teaser */}
            <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 font-sans font-normal">
              {member.bio}
            </p>
          </div>

          {/* Action indicator at bottom */}
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#211823]/40 group-hover:text-[var(--primary)] transition-colors duration-300 mt-4">
            <span>Read Biography</span>
            <span className="w-5 h-[1.5px] bg-[#211823]/20 group-hover:bg-[var(--primary)] group-hover:w-8 transition-all duration-300" />
          </div>
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
            className="w-full max-w-[900px] bg-[#1a1220] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
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
                <span className="bg-[var(--secondary)] text-[#211823] text-[12px] font-black px-4 py-2 rounded-full uppercase tracking-wider inline-block">
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
                    className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#211823] transition-colors"
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
