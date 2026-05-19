"use client";
import React from "react";
import Image from "next/image";
import { FiAlertTriangle } from "react-icons/fi";
import ButtonLetterRoll from "./ButtonLetterRoll";

export default function JoinUsVolunteer() {
  return (
    <section
      id="join-us-volunteer"
      className="relative py-[120px] bg-[#2b1f18] font-sans overflow-hidden z-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span
            className="text-[var(--secondary)] text-3xl font-normal block mb-4"
            style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
          >
            Start donating poor people
          </span>
          <h2 className="text-white text-5xl lg:text-7xl font-black tracking-tighter leading-[1.05] uppercase m-0 max-w-[700px]">
            Join The Community To Give Education For Children
          </h2>
        </div>

        {/* The Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full border border-black/[0.03]">
          
          {/* Left Form Side */}
          <div className="w-full lg:w-[55%] p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-[#2b1f18] text-3xl font-black uppercase tracking-tight mb-6">
              Support Where It Counts
            </h3>

            {/* Notice Box */}
            <div className="bg-[#fff9eb] border border-[#f5e3b5] rounded-2xl p-4 flex items-start gap-4 mb-8">
              <div className="text-[var(--secondary)] mt-0.5">
                <FiAlertTriangle size={20} />
              </div>
              <p className="text-[#2b1f18]/80 text-sm leading-[1.6] m-0 font-serif">
                <strong>Notice:</strong> Test mode is enabled. While in test
                mode no live donations are processed.
              </p>
            </div>

            {/* Your Donation */}
            <div className="mb-8">
              <h4 className="text-[#2b1f18] text-base font-black uppercase tracking-wider mb-4">
                Your Donation:
              </h4>

              {/* Input */}
              <div className="flex items-center bg-[#f7f5f0] rounded-full p-2 mb-4 w-full max-w-[400px] border border-black/[0.04]">
                <div className="w-10 h-10 rounded-full bg-[#2b1f18] text-white flex items-center justify-center font-bold">
                  $
                </div>
                <input
                  type="text"
                  defaultValue="100"
                  className="bg-transparent border-none outline-none text-lg font-black text-[#2b1f18] px-4 w-full"
                />
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-2.5">
                {["20", "50", "100", "200", "Custom"].map((val, i) => (
                  <button
                    key={i}
                    className={`px-6 py-2.5 rounded-full border text-sm font-black transition-colors uppercase tracking-wider
                      ${
                        val === "100"
                          ? "bg-[var(--primary)] border-[var(--primary)] text-white"
                          : "bg-white border-black/[0.08] text-[#2b1f18] hover:border-[var(--primary)]"
                      }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Payment Method */}
            <div className="mb-8">
              <h4 className="text-[#2b1f18] text-base font-black uppercase tracking-wider mb-4">
                Select Payment Method:
              </h4>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { id: "test", label: "Test Donation", checked: false },
                  { id: "offline", label: "Offline Donation", checked: false },
                  { id: "credit", label: "Credit Card", checked: true },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center gap-2 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors
                      ${method.checked ? "border-[var(--primary)]" : "border-[#ccc] group-hover:border-[var(--primary)]"}`}
                    >
                      {method.checked && (
                        <div className="w-2 h-2 rounded-full bg-[var(--primary)]"></div>
                      )}
                    </div>
                    <span className="text-[#2b1f18]/85 text-sm font-black uppercase tracking-wider">
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <div>
              <ButtonLetterRoll
                text="Donate Now"
                type="submit"
                bgColor="var(--primary)"
                textColor="#ffffff"
                borderColor="var(--primary)"
                hoverBgColor="#2b1f18"
                hoverTextColor="#ffffff"
                hoverBorderColor="#2b1f18"
              />
            </div>
          </div>

          {/* Right Image Side */}
          <div className="w-full lg:w-[45%] min-h-[300px] lg:min-h-full relative bg-[#2b1f18]">
            <Image
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80"
              alt="Children looking out"
              layout="fill"
              objectFit="cover"
              className="opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
