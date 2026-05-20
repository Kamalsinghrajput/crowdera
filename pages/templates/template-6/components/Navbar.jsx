"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  {
    label: "About",
    href: "#about",
    subItems: [
      { label: "Our Story", href: "#about" },
      { label: "Impact Profile", href: "#impact" },
      { label: "Global Reach", href: "#counter" },
      { label: "Watch Video", href: "#video" },
    ],
  },
  {
    label: "Causes",
    href: "#causes",
    subItems: [
      { label: "Active Causes", href: "#causes" },
      { label: "Top Donors", href: "#top-donors" },
    ],
  },
  {
    label: "Events",
    href: "#events",
    subItems: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Volunteer", href: "#join-us-volunteer" },
      { label: "Newsletter", href: "#newsletter" },
    ],
  },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const MAIN_LIMIT = 5;

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const overflowRef = useRef(null);

  const mainLinks = NAV_ITEMS.slice(0, MAIN_LIMIT);
  const overflowLinks = NAV_ITEMS.slice(MAIN_LIMIT);
  const hasOverflow = overflowLinks.length > 0;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSubpage = router.pathname !== "/templates/template-9";

  useEffect(() => {
    const fn = (e) => {
      if (overflowRef.current && !overflowRef.current.contains(e.target)) {
        setOverflowOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    setOverflowOpen(false);

    if (href.startsWith("#")) {
      if (isSubpage) {
        router.push(`/templates/template-9${href}`);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const top = el.offsetTop - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      {/* ONLY animations live here */}
      <style>
        {`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .animate-fadeDown {
          animation: fadeDown 0.2s ease;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.3s cubic-bezier(0.4,0,0.2,1);
        }
      `}
      </style>

      <header className="absolute top-0 left-0 right-0 z-[999]">
        {/* TOP BAR */}
        <div
          className={`bg-[var(--bg-color)] overflow-hidden transition-all duration-300 ${
            scrolled ? "h-0" : "h-[45px]"
          }`}
        >
          <div className="hidden md:flex justify-between items-center h-full mx-auto max-w-[1200px] px-4 text-white text-sm">
            <div>
              <span className="text-gray-300">Join our movement — </span>
              <a
                href="#volunteer"
                className="text-[var(--primary)] font-bold hover:underline"
              >
                Sign up
              </a>
              <span className="text-gray-300"> to volunteer this weekend!</span>
            </div>
            <div>
              <span className="font-bold text-gray-200">
                Call: (888) 123 4567
              </span>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div
          className={`left-0 right-0 z-[1000] transition-all duration-300 ${
            scrolled ? "fixed top-0 shadow-lg" : "absolute top-[45px]"
          }`}
        >
          <nav className="w-full bg-[var(--text-color)]">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4 lg:py-5">
              {/* LOGO */}
              <Link href="/templates/template-9">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div className="text-[var(--primary)] text-3xl">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                    </svg>
                  </div>
                  <span className="text-2xl font-black tracking-tight text-gray-900 uppercase">
                    GIVICO
                  </span>
                </div>
              </Link>

              {/* DESKTOP */}
              <ul className="hidden lg:flex gap-8">
                {mainLinks.map((item) => (
                  <li key={item.label} className="group relative">
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="relative text-[14px] font-black uppercase py-2 flex items-center gap-1.5 text-[var(--primary)] hover:opacity-80 transition-opacity"
                    >
                      <span className="text-sm">+</span> {item.label}
                    </a>

                    {item.subItems && (
                      <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-3 group-hover:translate-y-0 bg-white shadow-xl border-t-4 border-[var(--primary)] rounded-b-lg min-w-[240px]">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => scrollTo(e, sub.href)}
                            className="block px-5 py-3 text-sm hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] hover:pl-7 transition-all"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                <a
                  href="#donate"
                  onClick={(e) => scrollTo(e, "#donate")}
                  className="hidden lg:flex items-center gap-2 bg-[var(--primary)] px-7 py-3 rounded-full text-sm font-bold text-white transition hover:opacity-90 uppercase tracking-wide"
                >
                  Donate <span>→</span>
                </a>

                {/* OVERFLOW */}
                {hasOverflow && (
                  <div ref={overflowRef} className="relative hidden lg:block">
                    <button
                      onClick={() => setOverflowOpen(!overflowOpen)}
                      className="w-12 h-12 border rounded-full flex items-center justify-center"
                    >
                      {overflowOpen ? <FiX /> : <FiMenu />}
                    </button>

                    {overflowOpen && (
                      <div className="absolute right-0 top-[calc(100%+10px)] bg-white shadow-xl border-t-4 border-[var(--primary)] rounded-b-lg animate-fadeDown">
                        {overflowLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="block px-5 py-3 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* MOBILE BTN */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden bg-[var(--primary)] text-white p-2 rounded"
                >
                  <FiMenu size={24} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] bg-black text-white p-6 animate-slideInLeft">
            <button onClick={() => setMobileOpen(false)}>
              <FiX size={24} />
            </button>

            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                className="block py-3 border-b border-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
