"use client";
import { useState } from "react";
import { useHeadingAnimation } from "../hooks/useHeadingAnimation";

export default function NewsLetter() {
  const headingRef = useHeadingAnimation();
  const primaryColor = "var(--primary)";
  const secondaryColor = "var(--secondary)";
  const bgColor = "var(--bg-color)";
  const secondaryBgColor = "#f9f9f9";

  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <section className="relative pt-[120px] pb-[80px] overflow-hidden bg-[var(--bg-color)]">
      <style
        dangerouslySetInnerHTML={{
          __html: `:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; --bg-color: ${bgColor}; --secondary-bg-color: ${secondaryBgColor}; }`,
        }}
      />
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
        }}
      />

      {/* Gradient overlay to blend with footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-color)]/40 via-[var(--bg-color)]/80 to-[var(--bg-color)]" />

      <div className="max-w-[800px] mx-auto px-4 relative z-10 text-center">
        <h2
          ref={headingRef}
          className="text-[clamp(32px,5vw,56px)] font-['Montserrat'] font-extrabold leading-[1.2] text-white mb-6"
        >
          Get Updated By Subscribing To
          <br /> Our Newsletter
        </h2>

        <p className="text-[17px] font-['Inter'] text-white/80 leading-[1.7] mb-12 max-w-[650px] mx-auto">
          Join Our Community Of Supporters By Subscribing To Our Newsletter!
          <br />
          Get The Latest Updates On Our Projects,
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative max-w-[550px] mx-auto"
        >
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border border-white/20 rounded-full px-8 py-[18px] text-[17px] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--secondary)] transition-colors pr-[70px]"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[46px] h-[46px] rounded-full bg-[var(--secondary)] flex items-center justify-center text-black transition-transform duration-300 hover:scale-105"
          >
            {submitted ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="rotate-45"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
