import React from "react";
import Image from "next/image";
import { FiAlertTriangle, FiHeart } from "react-icons/fi";

export default function JoinUsVolunteer() {
  return (
    <section
      id="join-us-volunteer"
      className="relative py-[120px] bg-[#091f1b] font-sans overflow-hidden"
    >
      {/* Decorative large background heart outline */}
      <div className="absolute right-[5%] top-10 opacity-30 z-0">
        <FiHeart size={400} className="text-[var(--secondary)]" strokeWidth={0.5} />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-white text-[15px] font-bold block mb-2">
            Start donating poor people
          </span>
          <h2 className="text-white text-[clamp(32px,4vw,46px)] font-extrabold leading-[1.2] max-w-[600px] m-0">
            Join The Community To Give Education For Children
          </h2>
        </div>

        {/* The Card */}
        <div className="bg-white rounded-[24px] shadow-2xl flex flex-col lg:flex-row overflow-hidden w-full">
          {/* Left Form Side */}
          <div className="w-full lg:w-[55%] p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-[#091f1b] text-[28px] font-bold mb-6">
              Support Where It Counts.
            </h3>

            {/* Notice Box */}
            <div className="bg-[#fff9eb] border border-[#f5e3b5] rounded-xl p-4 flex items-start gap-4 mb-8">
              <div className="text-[var(--secondary)] mt-0.5">
                <FiAlertTriangle size={20} />
              </div>
              <p className="text-[#666] text-[15px] leading-[1.6] m-0">
                <strong>Notice:</strong> Test mode is enabled. While in test
                mode no live donations are processed.
              </p>
            </div>

            {/* Your Donation */}
            <div className="mb-8">
              <h4 className="text-[#091f1b] text-[18px] font-bold mb-4">
                Your Donation:
              </h4>

              {/* Input */}
              <div className="flex items-center bg-[#f4f4f4] rounded-full p-2 mb-4 w-full max-w-[400px]">
                <div className="w-10 h-10 rounded-full bg-[#091f1b] text-white flex items-center justify-center font-bold">
                  $
                </div>
                <input
                  type="text"
                  defaultValue="100"
                  className="bg-transparent border-none outline-none text-[17px] font-bold text-[#333] px-4 w-full"
                />
              </div>

              {/* Preset Buttons */}
              <div className="flex flex-wrap gap-3">
                {["20", "50", "100", "200", "Custom"].map((val, i) => (
                  <button
                    key={i}
                    className={`px-6 py-2.5 rounded-full border text-[15px] font-bold transition-colors
                      ${
                        val === "100"
                          ? "bg-[#091f1b] border-[#091f1b] text-white"
                          : "bg-white border-[#e0e0e0] text-[#333] hover:border-[#091f1b]"
                      }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Payment Method */}
            <div className="mb-8">
              <h4 className="text-[#091f1b] text-[18px] font-bold mb-4">
                Select Payment Method
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
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                      ${method.checked ? "border-[#007b5e]" : "border-[#ccc] group-hover:border-[#007b5e]"}`}
                    >
                      {method.checked && (
                        <div className="w-2 h-2 rounded-full bg-[#007b5e]"></div>
                      )}
                    </div>
                    <span className="text-[#555] text-[15px] font-medium">
                      {method.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <div>
              <button className="bg-[var(--secondary)] hover:bg-[#c4965d] text-black font-bold text-[17px] px-10 py-4 rounded-md transition-colors">
                Donate Now
              </button>
            </div>
          </div>

          {/* Right Image Side (Simulated Brush edge with standard clip or image) */}
          <div className="w-full lg:w-[45%] min-h-[300px] lg:min-h-full relative bg-black">
            {/* The actual image would have a mask, but a straight edge fits fine without custom SVG assets */}
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
