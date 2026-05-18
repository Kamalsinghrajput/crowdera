"use client";
import Image from "next/image";
import { useState } from "react";

export default function HelpUs() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");

  const amounts = [30, 40, 50, 60];

  return (
    <section className="relative py-[120px] bg-[#121D18] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Image & Title */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative overflow-hidden group h-[500px] lg:h-[650px] rounded-[20px]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=700&q=80"
                alt="Help Us Do More"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121d18]/90 via-[#121d18]/20 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 flex flex-col gap-2">
                <div className="mb-2">
                  <h1 className="text-[#FFA415]">CHIOARY</h1>
                </div>
                <h2 className="text-[40px] md:text-[50px] font-bold text-white leading-tight">
                  Help Us Do More
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="w-full lg:w-1/2 lg:pl-10">
            <div className="w-full max-w-[600px]">
              <h3 className="text-[28px] font-bold text-white mb-6">
                Select Gift Frequency
              </h3>

              {/* Tabs */}
              <div className="inline-flex bg-black/20 rounded-full p-2 mb-10">
                <button
                  className={`px-8 py-3 rounded-full text-[17px] font-semibold transition-colors ${
                    activeTab === "monthly"
                      ? "bg-[var(--secondary)] text-white"
                      : "text-white hover:text-[var(--secondary)]"
                  }`}
                  onClick={() => setActiveTab("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`px-8 py-3 rounded-full text-[17px] font-semibold transition-colors ${
                    activeTab === "onetime"
                      ? "bg-[var(--secondary)] text-white"
                      : "text-white hover:text-[var(--secondary)]"
                  }`}
                  onClick={() => setActiveTab("onetime")}
                >
                  One Time
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-10">
                <h3 className="text-[22px] text-white font-bold mb-6">
                  Select Amount{" "}
                  <span className="text-[var(--secondary)] text-[18px] font-normal">
                    ( In Us Dollar )
                  </span>
                </h3>

                {/* Selected Amount Display */}
                <div className="flex items-center gap-4 bg-transparent border border-[#2b3831] rounded-full p-2 mb-6 w-max min-w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center font-bold text-lg">
                    $
                  </div>
                  <span className="text-white font-bold text-xl pr-6">
                    {customAmount || selectedAmount}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="h-[50px] px-6 rounded-full border border-[#2b3831] bg-transparent text-white placeholder-[#9ca3af] focus:outline-none focus:border-[var(--secondary)] w-[180px] text-[17px]"
                  />
                  {amounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`h-[50px] px-6 rounded-full border transition-all duration-300 font-medium text-[17px] ${
                        selectedAmount === amt && !customAmount
                          ? "border-[var(--secondary)] bg-transparent text-white"
                          : "border-[#2b3831] bg-transparent text-white hover:border-[var(--secondary)]"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="flex items-start gap-3 mb-10">
                  <input
                    type="checkbox"
                    id="coverFees"
                    className="mt-1 w-5 h-5 rounded bg-transparent border-[#2b3831] text-[var(--secondary)] focus:ring-[var(--secondary)] focus:ring-offset-[#121d18]"
                    defaultChecked
                  />
                  <label
                    htmlFor="coverFees"
                    className="text-[17px] text-[#9ca3af] leading-relaxed cursor-pointer"
                  >
                    Well, I&apos;ll Generously Add $20.00 Per Month To Cover
                    Transaction Fees.
                  </label>
                </div>

                {/* Form */}
                <form className="mb-6">
                  <div className="mb-4">
                    <label className="block text-[22px] font-bold text-white mb-4">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full h-[60px] px-6 rounded-full border border-[#2b3831] bg-transparent text-white placeholder-[#9ca3af] focus:outline-none focus:border-[var(--secondary)]"
                    />
                  </div>
                </form>

                <p className="text-[var(--secondary)] text-[17px] mb-8 cursor-pointer hover:underline">
                  Click To Give In Honor Of Other Person
                </p>

                <button className="t2-btn t2-btn-secondary">
                  <span>Donation Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
