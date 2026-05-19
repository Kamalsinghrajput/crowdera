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
      { label: "Top Donors", href: "#top-donors" }
    ]
  },
  { 
    label: "Events", 
    href: "#events",
    subItems: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Volunteer", href: "#join-us-volunteer" },
      { label: "Newsletter", href: "#newsletter" }
    ]
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

  const isSubpage = router.pathname !== "/templates/template-8";

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
        router.push(`/templates/template-8${href}`);
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
          className={`bg-[var(--primary)] overflow-hidden transition-all duration-300 ${
            scrolled ? "h-0" : "h-[80px]"
          }`}
        >
          <div className="hidden md:flex justify-between pt-3 mx-auto max-w-[1200px] px-4 text-white text-sm">
            <div className="flex gap-6">
              <span className="flex items-center gap-2">
                <FiPhone /> +1 234 567 890
              </span>
              <span className="flex items-center gap-2">
                <FiMail /> info@charitia.org
              </span>
            </div>

            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-2 border-r pr-4">
                <FiMapPin /> New York, USA
              </span>
              <div className="flex gap-3">
                <FiFacebook />
                <FiTwitter />
                <FiInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div
          className={`left-0 right-0 z-[1000] transition-all duration-300 ${
            scrolled ? "fixed top-0" : "absolute top-[50px]"
          }`}
        >
          <nav className="max-w-[1200px] mx-auto bg-white shadow-xl border rounded-lg">
            <div className="flex justify-between items-center px-4 lg:px-8">
              {/* LOGO */}
              <Link href="/templates/template-8">
                <span className="text-2xl font-extrabold py-4">charitia</span>
              </Link>

              {/* DESKTOP */}
              <ul className="hidden lg:flex gap-10">
                {mainLinks.map((item) => (
                  <li key={item.label} className="group relative">
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="relative text-sm font-bold uppercase py-8 flex items-center gap-1 hover:text-[var(--secondary)]
                      after:absolute after:bottom-6 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--secondary)]
                      after:transition-all group-hover:after:w-full"
                    >
                      {item.label}
                      {item.subItems && <FiChevronDown size={12} />}
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
                  className="hidden lg:flex bg-[var(--secondary)]  px-6 py-3 rounded-full text-sm font-bold shadow-md hover:-translate-y-1 transition hover:bg-[var(--primary)] hover:text-white"
                >
                  Donate Now
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
