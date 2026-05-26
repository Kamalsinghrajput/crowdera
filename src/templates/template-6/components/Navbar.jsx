"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiSearch,
} from "react-icons/fi";

// Main nav items (visible in the top bar)
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
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

// Items that live ONLY inside the hamburger drawer
const HAMBURGER_ONLY_ITEMS = [
  { label: "Team", href: "#team" },
];

// Show up to 6 items on the main navbar; the rest go into the hamburger drawer
const MAIN_LIMIT = 6;

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mainLinks = NAV_ITEMS.slice(0, MAIN_LIMIT);
  const overflowLinks = NAV_ITEMS.slice(MAIN_LIMIT);
  // All items that go in the hamburger drawer: overflow nav items + hamburger-only items (Team)
  const drawerLinks = [...overflowLinks, ...HAMBURGER_ONLY_ITEMS];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSubpage = router.pathname !== "/templates/template-6";

  // Close drawer when clicking outside
  useEffect(() => {
    if (!drawerOpen) return;
    const fn = (e) => {
      const drawer = document.getElementById("t6-nav-drawer");
      if (drawer && !drawer.contains(e.target)) {
        setDrawerOpen(false);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, [drawerOpen]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setDrawerOpen(false);

    if (href.startsWith("#")) {
      if (isSubpage) {
        router.push(`/templates/template-6${href}`);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const top = el.offsetTop - 90;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fadeDown {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes slideInRight {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            @keyframes overlayFadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            .animate-fadeDown {
              animation: fadeDown 0.2s ease;
            }
            .animate-slideInRight {
              animation: slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1);
            }
            .animate-overlayFadeIn {
              animation: overlayFadeIn 0.3s ease;
            }
            .font-sora {
              font-family: 'Sora', sans-serif;
            }
            .font-inter {
              font-family: 'Inter', sans-serif;
            }
            .font-manrope {
              font-family: 'Manrope', sans-serif;
            }
            /* TrueHelp scoped typography */
            .t6-wrapper h1,
            .t6-wrapper h2,
            .t6-wrapper h3,
            .t6-wrapper h4,
            .t6-wrapper h5,
            .t6-wrapper h6 {
              font-family: 'Manrope', 'Sora', sans-serif;
            }
            .t6-wrapper p,
            .t6-wrapper span,
            .t6-wrapper div,
            .t6-wrapper a,
            .t6-wrapper li,
            .t6-wrapper button {
              font-family: 'Inter', 'Manrope', sans-serif;
            }
          `,
        }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled || isSubpage
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="max-w-[1280px] mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/templates/template-6">
            <div className="flex items-center gap-2.5 cursor-pointer">
              <div className="relative flex items-center justify-center">
                {/* Hand holding heart SVG */}
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <defs>
                    <linearGradient id="hand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4cd2ff" />
                      <stop offset="100%" stopColor="#8c62aa" />
                    </linearGradient>
                  </defs>
                  {/* Heart shape */}
                  <path
                    d="M256 420c-8-0-16-3-22-9L114 291c-40-40-40-105-0-145c40-40-105-40-145 0l15 15l-15-15c40-40 105-40 145 0c40 40 40 105 0 145l-120 120c-6 6-14 9-22 9z"
                    fill="#8c62aa"
                  />
                  {/* Hand shape curving underneath */}
                  <path
                    d="M100 300c30-10 70 10 100 40s60 30 90 10c25-15 40-40 70-50"
                    stroke="url(#hand-grad)"
                    strokeWidth="32"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col leading-tight font-sora">
                <span className="text-2xl font-extrabold tracking-tight text-[#312340]">Truehelp</span>
                <span className="text-[10px] font-bold text-[#8c62aa] tracking-widest uppercase -mt-0.5">Charity Organization</span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-sora">
            {mainLinks.map((item) => (
              <li key={item.label} className="group relative">
                <a
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="text-[15px] font-semibold transition-colors py-2 flex items-center gap-1 text-[#312340] hover:text-[#8c62aa]"
                >
                  {item.label}
                  {item.subItems && (
                    <FiChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>

                {item.subItems && (
                  <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-white shadow-xl border-t-4 border-[#8c62aa] rounded-b-lg min-w-[200px] z-[1010] py-2">
                    {item.subItems.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => scrollTo(e, sub.href)}
                        className="block px-4 py-2 text-sm text-[#4a3e56] hover:bg-[#8c62aa]/10 hover:text-[#8c62aa] transition-colors font-inter"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}


          </ul>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4 xl:gap-6">
            {/* Search Icon */}
            <button className="text-[#312340] hover:text-[#8c62aa] transition-all p-1.5 hover:scale-110">
              <FiSearch size={20} strokeWidth={2.5} />
            </button>

            {/* Donation Button */}
            <a
              href="#donate"
              onClick={(e) => scrollTo(e, "#donate")}
              className="hidden sm:inline-block bg-[#8c62aa] hover:bg-[#774ba3] text-white font-sora font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              Donation
            </a>

            {/* Hamburger menu button — visible on ALL screen sizes */}
            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="text-[#312340] hover:text-[#8c62aa] p-1.5 transition-colors hover:scale-110"
              aria-label="Open menu"
            >
              {drawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* SLIDE-IN DRAWER (hamburger menu — works on all screen sizes) */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[9999]">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-overlayFadeIn"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <div
            id="t6-nav-drawer"
            className="absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl p-6 flex flex-col z-10 animate-slideInRight font-sora"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-extrabold text-[#312340]">Menu</span>
              <button
                onClick={() => setDrawerOpen(false)}
                className="text-[#312340] hover:text-[#8c62aa] p-1"
              >
                <FiX size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {/* On mobile: show ALL nav items. On desktop (lg+): show only overflow + hamburger-only items */}
              {/* Mobile: full nav */}
              <div className="lg:hidden space-y-4">
                {[...NAV_ITEMS, ...HAMBURGER_ONLY_ITEMS].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="block text-base font-semibold text-[#312340] hover:text-[#8c62aa] py-1 transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.subItems && (
                      <div className="pl-4 border-l-2 border-[#8c62aa]/20 space-y-2 mt-1">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => scrollTo(e, sub.href)}
                            className="block text-sm text-[#4a3e56] hover:text-[#8c62aa] py-0.5 transition-colors font-inter"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop: only overflow + hamburger-only items */}
              <div className="hidden lg:block space-y-4">
                {drawerLinks.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="block text-base font-semibold text-[#312340] hover:text-[#8c62aa] py-1 transition-colors"
                    >
                      {item.label}
                    </a>
                    {item.subItems && (
                      <div className="pl-4 border-l-2 border-[#8c62aa]/20 space-y-2 mt-1">
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => scrollTo(e, sub.href)}
                            className="block text-sm text-[#4a3e56] hover:text-[#8c62aa] py-0.5 transition-colors font-inter"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <a
                href="#donate"
                onClick={(e) => {
                  scrollTo(e, "#donate");
                  setDrawerOpen(false);
                }}
                className="block text-center bg-[#8c62aa] hover:bg-[#774ba3] text-white font-bold py-3 rounded-full transition-all duration-300"
              >
                Donation
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
