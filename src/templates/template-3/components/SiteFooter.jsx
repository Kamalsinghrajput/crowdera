"use client";

import Image from "next/image";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

export default function SiteFooter() {
  const headingRef = useHeadingAnimation();
  const quickLinks = [
    "About Us",
    "Our Services",
    "Our Team",
    "Our Blog",
    "Contact Us",
  ];

  const services = [
    "Emergency Relief",
    "Medical Outreach",
    "Educational Support",
    "Mental Health",
    "Community Development",
  ];

  return (
    <footer className="relative bg-[#121D18] pt-[120px]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundSize: "400px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        {/* MAIN FOOTER */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-[80px]">
          {/* Col 1: Logo + About + Form */}
          <div>
            <h2 ref={headingRef} className="text-[32px] font-bold mb-6 tracking-wide">
              <span className="text-[#FFA415]">Chio</span>
              <span className="text-white">ary</span>
            </h2>

            <p className="text-white/70 leading-relaxed mb-8 text-[15px]">
              Charity and donation is category that
              <br /> involves giving.
            </p>

            <form className="relative max-w-[280px]">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border-none rounded-[5px] h-[50px] px-5 text-white placeholder-white/50 outline-none focus:ring-1 focus:ring-[#FFA415] transition-all"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 bottom-0 px-4 bg-[#007B39] text-white rounded-r-[5px] hover:bg-[#FFA415] transition-colors flex items-center justify-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="rotate-45"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-[22px] font-bold mb-6 text-white">
              Quick links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a className="text-white/70 hover:text-[#FFA415] transition cursor-pointer text-[15px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-[22px] font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-4">
              {services.map((link) => (
                <li key={link}>
                  <a className="text-white/70 hover:text-[#FFA415] transition cursor-pointer text-[15px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div>
            <h3 className="text-[22px] font-bold mb-6 text-white">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFA415] transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="text-white/70 text-[15px] leading-[1.6]">
                  4140 Parker Rd. Allentown, New Mexico 31134
                </div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFA415] transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className="text-white/70 text-[15px]">(219) 555-0114</div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFA415] transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="text-white/70 text-[15px]">
                  Chioary@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-[15px]">
            © 1995–2024 All Rights For{" "}
            <span className="text-[#FFA415] font-semibold">Chioary</span>{" "}
            Exclusive
          </p>

          <div className="flex gap-8 text-[15px] text-white/70">
            <a className="hover:text-[#FFA415] transition cursor-pointer">
              Terms Of Service
            </a>
            <a className="hover:text-[#FFA415] transition cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
