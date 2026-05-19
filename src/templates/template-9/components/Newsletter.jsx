"use client";
import { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3500);
      setEmail("");
    }
  };

  return (
    <section className="relative py-[100px] overflow-hidden bg-[#2b1f18] font-sans">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-[#2b1f18]/85" />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-[14vw] font-black text-white/[0.025] tracking-[1.5rem] uppercase leading-none">
          SUBSCRIBE
        </span>
      </div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        {/* Script subheading */}
        <span
          className="text-[var(--secondary)] text-3xl font-normal block mb-4"
          style={{ fontFamily: "'Caveat', 'Segoe Script', cursive" }}
        >
          Stay in the loop
        </span>

        {/* Main heading */}
        <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] uppercase m-0 mb-6">
          GET UPDATED BY SUBSCRIBING
        </h2>

        <p className="text-white/70 text-[16px] leading-[1.75] font-serif mb-12 max-w-[550px] mx-auto">
          Join our community of supporters. Get the latest updates on our
          projects, events, and impact stories delivered directly to your inbox.
        </p>

        {/* Email Form */}
        <form
          onSubmit={handleSubmit}
          className="relative max-w-[520px] mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-white/[0.06] border border-white/20 rounded-full px-8 py-[18px] text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--secondary)] transition-all duration-300 pr-[70px] font-sans"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[var(--secondary)] hover:bg-white flex items-center justify-center text-[#2b1f18] transition-all duration-300 hover:scale-105 shadow-md"
          >
            {submitted ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="rotate-45">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            )}
          </button>
        </form>

        {submitted && (
          <p className="mt-4 text-[var(--secondary)] font-black text-sm uppercase tracking-widest animate-pulse">
            ✓ Thank you! You&apos;re subscribed.
          </p>
        )}

        {/* Trust badges */}
        <div className="mt-10 flex items-center justify-center gap-8 text-white/50 text-[13px] font-black uppercase tracking-widest">
          <span>🔒 No Spam</span>
          <span className="w-[1px] h-4 bg-white/20" />
          <span>✦ Unsubscribe anytime</span>
          <span className="w-[1px] h-4 bg-white/20" />
          <span>💌 Weekly digest</span>
        </div>
      </div>
    </section>
  );
}
