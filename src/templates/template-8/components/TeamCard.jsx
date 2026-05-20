"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { PiBriefcase } from "react-icons/pi";

const SOCIALS = [
  { key: "fb", Icon: FaFacebookF, memberKey: "facebook" },
  { key: "tw", Icon: FaTwitter, memberKey: "x" },
  { key: "in", Icon: FaLinkedinIn, memberKey: "linkedin" },
  { key: "ig", Icon: FaInstagram, memberKey: "instagram" },
];

export default function TeamCard({ member }) {
  const [showModal, setShowModal] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div className="flex flex-col items-center group">
        {/* Image Wrapper with Halo */}
        <div className="relative mb-10 w-full max-w-[320px] aspect-square mx-auto">
          {/* Decorative Halo Background */}
          <div className="absolute inset-0 bg-[#E8E8E8] rounded-full scale-[1.05] pointer-events-none transition-transform duration-500 group-hover:scale-[1.08]">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-tr-full"></div>
          </div>

          {/* Circular Image Container */}
          <div
            className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl z-10 cursor-pointer"
            onClick={openModal}
          >
            <Image
              src={member.img}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 group-hover:scale-110"
            />

            {/* Social Overlay on Hover */}
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: "color-mix(in srgb, var(--primary) 40%, transparent)" }}
            >
              {SOCIALS.map(({ key, Icon, memberKey }) => {
                const url = member.socials?.[memberKey] || "#";
                return (
                  <a
                    href={url}
                    key={key}
                    onClick={(e) => {
                      if (url === "#") e.preventDefault();
                      e.stopPropagation();
                    }}
                    target={url !== "#" ? "_blank" : undefined}
                    rel={url !== "#" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full bg-white text-[var(--primary)] flex items-center justify-center transition-all duration-300 hover:bg-[var(--secondary)] hover:text-white transform translate-y-4 group-hover:translate-y-0"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Info Content */}
        <div className="text-center">
          <p className="text-[var(--primary)] font-['Montserrat'] font-bold text-[14px] mb-2 uppercase tracking-[0.5px]">
            {member.role || "Volunteer"}
          </p>

          <h3 className="font-['Montserrat'] font-extrabold text-[24px] text-[var(--bg-color)] mb-3 transition-colors duration-300 group-hover:text-[var(--primary)]">
            <button onClick={openModal} className="hover:underline">
              {member.name}
            </button>
          </h3>

          <div className="flex items-center justify-center gap-2 text-[var(--text-color)] font-['Montserrat'] font-medium text-[17px]">
            <PiBriefcase size={18} className="text-[var(--secondary)]" />
            <span>{member.designation || "Executive"}</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && mounted && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 transition-all duration-350"
          style={{
            backgroundColor: animateIn ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0)",
            backdropFilter: animateIn ? "blur(6px)" : "blur(0px)",
            transition:
              "background-color 350ms ease, backdrop-filter 350ms ease",
            "--primary": "#006755",
            "--secondary": "#CAA166",
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
                <span className="bg-[var(--secondary)] text-white text-[11px] font-black p-1.5 rounded-md uppercase tracking-widest inline-block">
                  Board Member
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-['Montserrat']">
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
                {SOCIALS.map(({ key, Icon, memberKey }) => {
                  const url = member.socials?.[memberKey] || "#";
                  return (
                    <a
                      href={url}
                      key={`modal-${key}`}
                      onClick={(e) => {
                        if (url === "#") e.preventDefault();
                      }}
                      target={url !== "#" ? "_blank" : undefined}
                      rel={url !== "#" ? "noopener noreferrer" : undefined}
                      className="w-10 h-10 rounded-lg bg-[var(--secondary)] text-[#111] flex items-center justify-center hover:opacity-90 transition-opacity"
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
