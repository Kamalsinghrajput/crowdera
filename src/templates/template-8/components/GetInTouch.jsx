"use client";
import React, { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-[120px] bg-white relative">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[50px] items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h3 className="text-[clamp(32px,5vw,50px)] font-bold text-[#121d18] leading-[1.1] mb-6">
              Have Questions? <br />
              Get In Touch!
            </h3>
            <p className="text-[16px] text-[#4b5563] font-medium leading-[1.8] mb-8 max-w-[320px]">
              2118 Thornridge Cir. Syracuse, Connecticut <br />
              35624.
            </p>
            <a
              href="mailto:info@gmail.com"
              className="text-[20px] font-bold text-[#007B39] hover:text-[#FFA415] transition-colors"
            >
              info@gmail.com
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 bg-[#f9f9f9] p-[40px] md:p-[50px] rounded-[10px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-[60px] px-6 bg-white border border-[#e5e7eb] rounded-[5px] text-[15px] text-[#121d18] focus:outline-none focus:border-[#007B39] transition-colors placeholder:text-[#9ca3af]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail address*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-[60px] px-6 bg-white border border-[#e5e7eb] rounded-[5px] text-[15px] text-[#121d18] focus:outline-none focus:border-[#007B39] transition-colors placeholder:text-[#9ca3af]"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full h-[60px] px-6 bg-white border border-[#e5e7eb] rounded-[5px] text-[15px] text-[#121d18] focus:outline-none focus:border-[#007B39] transition-colors placeholder:text-[#9ca3af]"
              />

              <textarea
                name="message"
                placeholder="Message*"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full h-[150px] px-6 py-5 bg-white border border-[#e5e7eb] rounded-[5px] text-[15px] text-[#121d18] focus:outline-none focus:border-[#007B39] transition-colors resize-none placeholder:text-[#9ca3af]"
              ></textarea>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="w-[18px] h-[18px] accent-[#007B39] cursor-pointer"
                />
                <label
                  htmlFor="agree"
                  className="text-[15px] text-[#4b5563] cursor-pointer"
                >
                  I Agree that my data is collected and Stored.
                </label>
              </div>

              <div>
                <button type="submit" className="t2-btn border-none">
                  <span>Submit Now</span>
                  <i>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="-rotate-45"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

