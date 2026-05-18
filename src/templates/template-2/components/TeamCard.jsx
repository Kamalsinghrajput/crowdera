"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FiPlus, FiX } from "react-icons/fi";

export default function TeamCard({ member }) {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const openModal = () => {
    setShowModal(true);
    // Tiny delay lets the DOM render before the animation class kicks in
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimateIn(true)),
    );
  };

  const closeModal = () => {
    setAnimateIn(false);
    setTimeout(() => setShowModal(false), 350);
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (showModal) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showModal]);

  return (
    <>
      <div className="group flex flex-col gap-6">
        {/* Circular photo */}
        <div
          className="w-[240px] h-[240px] rounded-full overflow-hidden mx-auto bg-white p-2 transition-all duration-300 cursor-pointer"
          onClick={openModal}
        >
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image
              src={member.img}
              alt={member.name}
              layout="fill"
              className="object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
            />
            {/* tint overlay */}
            <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-multiply" />
          </div>
        </div>

        {/* Info Row */}
        <div className="flex items-center gap-4 px-2">
          {/* Plus button with Socials */}
          <div className="relative group/social">
            {/* Social Icons Container */}
            <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 pb-3 flex flex-col gap-3 opacity-0 invisible translate-y-4 group-hover/social:opacity-100 group-hover/social:visible group-hover/social:translate-y-0 transition-all duration-300 z-20 pointer-events-none group-hover/social:pointer-events-auto">
              <Link
                href={member.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white text-[#1DA1F2] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#1DA1F2] hover:text-white"
                style={{ transitionDelay: "80ms" }}
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white text-[#0A66C2] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#0A66C2] hover:text-white"
                style={{ transitionDelay: "40ms" }}
              >
                <FaLinkedinIn size={20} />
              </Link>
            </div>

            <div className="w-[50px] h-[50px] rounded-full bg-[var(--bg-color)] flex items-center justify-center shrink-0 cursor-pointer text-white transition-all duration-300 group-hover/social:bg-[var(--secondary)] relative z-10">
              <FiPlus
                size={22}
                className="transition-transform duration-300 group-hover/social:rotate-45"
              />
            </div>
          </div>

          <div className="flex flex-col text-left">
            <h3 className="text-[20px] text-[var(--bg-color)] transition-colors duration-300 group-hover:text-[var(--secondary)] leading-tight mb-1">
              <button onClick={openModal} className="hover:underline">
                {member.name}
              </button>
            </h3>
            <p className="text-[14px] text-[#6c6e76] m-0">{member.role}</p>
          </div>
        </div>
      </div>

      {/* Modal */}
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
            className="w-full max-w-[900px] bg-[#333333] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
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
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 transition-colors"
            >
              <FiX size={24} />
            </button>

            {/* Left Image */}
            <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
              <Image
                src={member.img}
                alt={member.name}
                layout="fill"
                className="object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col text-left font-['Inter']">
              <div className="mb-4">
                <span className="bg-[var(--secondary)] text-[#111] text-[11px] font-black py-1.5 px-3 rounded-md uppercase tracking-widest inline-block">
                  Board Member
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-['Sora']">
                {member.name}
              </h2>
              <p className="text-[#cccccc] text-[17px] leading-relaxed mb-8">
                {member.bio}
              </p>

              <div className="flex flex-col gap-5 border-t border-[#444] pt-6 mb-8">
                <div className="flex justify-between items-center text-[13px] border-b border-[#444] pb-4">
                  <span className="text-[#999] font-bold tracking-wider uppercase text-[10px]">
                    Designation
                  </span>
                  <span className="text-white font-bold">{member.role}</span>
                </div>
                <div className="flex justify-between items-center text-[13px] border-b border-[#444] pb-4">
                  <span className="text-[#999] font-bold tracking-wider uppercase text-[10px]">
                    Organization
                  </span>
                  <span className="text-white font-bold">
                    {member.organization}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] border-b border-[#444] pb-4">
                  <span className="text-[#999] font-bold tracking-wider uppercase text-[10px]">
                    Joined At
                  </span>
                  <span className="text-white font-bold">
                    {member.joinedAt}
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] border-b border-[#444] pb-4">
                  <span className="text-[#999] font-bold tracking-wider uppercase text-[10px]">
                    Status
                  </span>
                  <span className="text-white font-bold">{member.status}</span>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-4 mt-auto">
                <Link
                  href={member.socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--secondary)] text-[#111] flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <FaTwitter size={16} />
                </Link>
                <Link
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-[var(--secondary)] text-[#111] flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <FaLinkedinIn size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
