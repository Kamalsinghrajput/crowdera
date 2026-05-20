"use client";
import React from "react";
import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section
      className="py-[120px] relative overflow-hidden text-center font-sans"
      style={{ background: "var(--primary)" }}
    >
      <div className="max-w-[800px] mx-auto px-3 relative z-10">
        <div className="inline-flex items-center justify-center gap-3 mb-6 w-full">
          <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />
          <span className="text-[17px] text-white italic">Get Involved</span>
        </div>
        <h2 className="font-extrabold text-[clamp(32px,4vw,46px)] leading-[1.15] text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-[18px] md:text-[20px] text-[rgba(255,255,255,0.9)] font-['Inter'] mb-10 max-w-[600px] mx-auto leading-relaxed">
          Join us in our mission to bring joy and support to those in need.
          Every contribution counts towards building a better future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/templates/template-2/initiatives" passHref>
            <a className="px-8 py-4 rounded-full bg-[var(--secondary)] text-[#111] font-bold shadow-2xl hover:-translate-y-1 hover:brightness-110 transition-all inline-block">
              <span>Start a Campaign</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
