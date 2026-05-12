"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";

const SOCIALS = [
  { key: "fb", Icon: FaFacebookF },
  { key: "tw", Icon: FaTwitter },
  { key: "in", Icon: FaLinkedinIn },
  { key: "ig", Icon: FaInstagram },
];

export default function TeamCard({ member }) {
  return (
    <div className="flex flex-col items-center group">
      {/* Image Wrapper with Halo */}
      <div className="relative mb-10 w-full max-w-[320px] aspect-square mx-auto">
        {/* Decorative Halo Background */}
        <div className="absolute inset-0 bg-[#E8E8E8] rounded-full scale-[1.05] pointer-events-none transition-transform duration-500 group-hover:scale-[1.08]">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white rounded-tr-full"></div>
        </div>

        {/* Circular Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-xl z-10">
          <Image
            src={member.img}
            alt={member.name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-110"
          />

          {/* Social Overlay on Hover */}
          <div className="absolute inset-0 bg-[#006755]/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {SOCIALS.map(({ key, Icon }) => (
              <Link href="#" key={key}>
                <a className="w-10 h-10 rounded-full bg-white text-[#006755] flex items-center justify-center transition-all duration-300 hover:bg-[#CAA166] hover:text-white transform translate-y-4 group-hover:translate-y-0">
                  <Icon size={16} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="text-center">
        <p className="text-[#006755] font-['Montserrat'] font-bold text-[14px] mb-2 uppercase tracking-[0.5px]">
          {member.role || "Volunteer"}
        </p>
        
        <h3 className="font-['Montserrat'] font-extrabold text-[24px] text-[#1A1A1A] mb-3 transition-colors duration-300 group-hover:text-[#006755]">
          <Link href="#">
            <a className="no-underline color-inherit">{member.name}</a>
          </Link>
        </h3>

        <div className="flex items-center justify-center gap-2 text-[#777777] font-['Montserrat'] font-medium text-[15px]">
          <PiPhoneCall size={18} className="text-[#CAA166]" />
          <span>Call: {member.phone || "+256 255 6579"}</span>
        </div>
      </div>
    </div>
  );
}

