"use client";
import React from "react";
import Link from "next/link";

export default function ReadyCTA() {
  return (
    <section className="py-[120px] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed" />
      <div className="absolute inset-0 bg-[#121d18]/90" />

      <div className="max-w-[800px] mx-auto px-3 relative z-10">
        <div className="inline-flex items-center justify-center gap-3 mb-6 w-full">
          <div className="w-2 h-2 rounded-full bg-[#FFA415]" />
          <span className="text-[16px] text-white italic">Get Involved</span>
        </div>
        <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.2] text-white mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="text-[18px] md:text-[20px] text-[rgba(255,255,255,0.9)] font-['Inter'] mb-10 max-w-[600px] mx-auto leading-relaxed">
          Join us in our mission to bring joy and support to those in need.
          Every contribution counts towards building a better future.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link href="/templates/template-2/initiatives" passHref>
            <a className="t2-btn t2-btn-secondary shadow-2xl hover:-translate-y-1 transition-transform">
              <span>Start a Campaign</span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
