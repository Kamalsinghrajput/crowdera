"use client";

import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function SiteFooter() {
  const quickLinks = [
    { label: "Home", href: "/templates/template-9" },
    { label: "About Us", href: "/templates/template-9/about" },
    { label: "Campaigns", href: "/templates/template-9/initiatives" },
    { label: "Volunteers", href: "/templates/template-9/team" },
    { label: "Contact Us", href: "/templates/template-9/contact" },
  ];

  const services = [
    "Emergency Relief",
    "Medical Outreach",
    "Educational Support",
    "Food Distribution",
    "Clean Water Projects",
  ];

  return (
    <footer className="relative bg-[#1e1611] pt-16 font-sans overflow-hidden z-20">
      {/* Massive Background Watermark Text "CROWDERA" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[12vw] font-black text-white/[0.02] tracking-[1.5rem] uppercase">
          CROWDERA
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16 border-b border-white/5">
          {/* Col 1 (4/12) - Logo & Newsletter */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter m-0">
              CROWD<span className="text-[var(--primary)]">ERA</span>
            </h2>
            <p className="text-white/60 leading-relaxed font-serif text-[15px]">
              Empowering communities, feeding families, and providing critical
              medical support worldwide through unified compassionate action.
            </p>
            <form className="relative max-w-sm mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full h-14 px-6 text-white placeholder-white/30 outline-none focus:border-[var(--primary)] transition-all text-sm"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-6 bg-[var(--primary)] hover:bg-[var(--secondary)] text-[#2b1f18] hover:text-[#2b1f18] rounded-full transition-all flex items-center justify-center font-black text-[13px] uppercase tracking-wider"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Col 2 (2/12) - Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col gap-6">
            <h4 className="text-white font-black text-[14px] uppercase tracking-widest m-0">
              Quick Links
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <a className="text-white/60 hover:text-[var(--primary)] text-sm transition-colors duration-300 font-medium">
                      + {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 (2/12) - Services */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white font-black text-[14px] uppercase tracking-widest m-0">
              Our Focus
            </h4>
            <ul className="list-none p-0 m-0 space-y-3">
              {services.map((svc) => (
                <li key={svc} className="text-white/60 text-sm font-medium">
                  • {svc}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 (3/12) - Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white font-black text-[14px] uppercase tracking-widest m-0">
              Supporter Care
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/60 font-serif">
              <div>
                <span className="block text-[12px] font-black uppercase tracking-wider text-white/50 mb-1">
                  Address
                </span>
                <span className="not-italic block font-sans text-white/80">
                  2972 Westheimer Rd. Santa Ana, New Mexico 85406
                </span>
              </div>
              <div>
                <span className="block text-[12px] font-black uppercase tracking-wider text-white/50 mb-1">
                  Email
                </span>
                <a
                  href="mailto:support@crowdera.org"
                  className="block text-white hover:text-[var(--primary)] transition-colors font-sans"
                >
                  support@crowdera.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] font-black tracking-wider uppercase text-white/50">
          <p className="m-0">
            © {new Date().getFullYear()} CROWDERA. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </a>
            <span>•</span>
            <a className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
