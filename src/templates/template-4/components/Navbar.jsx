"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
    href: "/templates/template-4/initiatives?tab=campaigns",
    subItems: [
      { label: "Active Causes", href: "/templates/template-4/initiatives?tab=campaigns" },
      { label: "Top Donors", href: "#top-donors" }
    ]
  },
  { 
    label: "Events", 
    href: "/templates/template-4/initiatives?tab=events",
    subItems: [
      { label: "Upcoming Events", href: "/templates/template-4/initiatives?tab=events" },
      { label: "Volunteer", href: "#volunteer" },
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
const mainLinks = NAV_ITEMS.slice(0, MAIN_LIMIT);
const overflowLinks = NAV_ITEMS.slice(MAIN_LIMIT);
const hasOverflow = overflowLinks.length > 0;

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const overflowRef = useRef(null);

  const primaryColor = "#007B39";
  const secondaryColor = "#FFA415";
  const bgColor = "#121d18";
  const secondaryBgColor = "#f9f9f9";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSubpage = router.pathname !== "/templates/template-4";

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
        router.push(`/templates/template-4${href}`);
      } else {
        const el = document.querySelector(href);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <div style={{ height: scrolled ? "120px" : 0 }} />

      <header
        className={`${scrolled ? "fixed top-0 left-0 right-0 z-[999]" : `absolute ${isSubpage ? "top-0" : "top-4"} left-0 right-0 z-[999]`}`}
      >
        {/* Main Nav */}
        <nav
          style={{
            // marginTop: scrolled ? "none" : "20px",
            background: (scrolled || isSubpage) ? "#121D18" : "none",
            backdropFilter: (scrolled || isSubpage) ? "none" : "blur(2px)",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
            transition: "all 0.4s ease",
          }}
        >
          <div
            className="max-w-[1320px] mx-auto px-8 flex items-center justify-between border border-gray-600 rounded-full"
            style={{ gap: 20 }}
          >
            {/* Left: Logo + Links */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(20px, 4vw, 80px)",
              }}
            >
              <a
                href="#"
                style={{
                  padding: "14px 0",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    color: "#FFA415",
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 5vw, 28px)",
                    letterSpacing: "0.02em",
                  }}
                >
                  CHIOARY
                </span>
              </a>

              {/* Desktop Main Links */}
              <ul
                className="hidden lg:flex"
                style={{ listStyle: "none", margin: 0, padding: 0, gap: 40 }}
              >
                {mainLinks.map((item) => (
                  <li
                    key={item.label}
                    className="group"
                    style={{ position: "relative", padding: "35px 0" }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href !== "#") scrollTo(e, item.href);
                        else e.preventDefault();
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#FFA415")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#fff")
                      }
                    >
                      {item.label}
                      {item.subItems && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          style={{ transition: "transform 0.3s" }}
                          className="group-hover:rotate-180"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      )}
                    </a>

                    {/* Submenu Dropdown */}
                    {item.subItems && (
                      <div
                        className="absolute top-[100%] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                        style={{
                          background: "#fff",
                          minWidth: 200,
                          padding: "10px 0",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                          borderRadius: 4,
                          zIndex: 100,
                        }}
                      >
                        {item.subItems.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={(e) => scrollTo(e, sub.href)}
                            style={{
                              display: "block",
                              padding: "10px 20px",
                              color: "#121D18",
                              fontFamily: "Inter, sans-serif",
                              fontSize: 15,
                              fontWeight: 500,
                              textDecoration: "none",
                              transition: "all 0.2s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "#FFA415";
                              e.currentTarget.style.paddingLeft = "26px";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "#121D18";
                              e.currentTarget.style.paddingLeft = "20px";
                            }}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Search, Donate, Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Donation CTA */}
              <div className="hidden lg:flex">
                <a href="#" className="t2-btn t2-btn-secondary">
                  <span>Donate Now</span>
                  <i>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </i>
                </a>
              </div>

              {/* Overflow Hamburger for Desktop */}
              {hasOverflow && (
                <div ref={overflowRef} className="hidden lg:block relative">
                  <button
                    onClick={() => setOverflowOpen((o) => !o)}
                    style={{
                      width: 50,
                      height: 50,
                      border: "1px solid rgba(255,255,255,0.2)",
                      borderRadius: "50%",
                      background: overflowOpen ? "#FFA415" : "transparent",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      if (!overflowOpen) {
                        e.currentTarget.style.background = "#FFA415";
                        e.currentTarget.style.borderColor = "#FFA415";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!overflowOpen) {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.2)";
                      }
                    }}
                  >
                    {overflowOpen ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 12h18M3 6h18M3 18h18" />
                      </svg>
                    )}
                  </button>

                  {/* Overflow Dropdown */}
                  {overflowOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "120%",
                        right: 0,
                        background: "#fff",
                        minWidth: 200,
                        padding: "10px 0",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        listStyle: "none",
                        margin: 0,
                        borderRadius: 4,
                        zIndex: 100,
                        animation: "fadeDown 0.2s ease",
                      }}
                    >
                      {overflowLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          onClick={(e) => scrollTo(e, link.href)}
                          style={{
                            display: "block",
                            padding: "10px 20px",
                            color: "#121D18",
                            fontFamily: "Inter, sans-serif",
                            fontSize: 15,
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#FFA415";
                            e.currentTarget.style.paddingLeft = "26px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#121D18";
                            e.currentTarget.style.paddingLeft = "20px";
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Mobile Hamburger */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setMobileOpen(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    padding: 8,
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
            }}
            onClick={() => setMobileOpen(false)}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "300px",
              background: "#121D18",
              overflow: "auto",
              padding: "30px 0",
              boxShadow: "4px 0 30px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                padding: "0 25px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: "#FFA415",
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                }}
              >
                CHIOARY
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  cursor: "pointer",
                  fontSize: 22,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <a
                    href={item.href}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 25px",
                      color: "#fff",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
                      textDecoration: "none",
                    }}
                    onClick={(e) => {
                      if (item.href === "#" && item.subItems) {
                        e.preventDefault();
                      } else {
                        scrollTo(e, item.href);
                      }
                    }}
                  >
                    <span>{item.label}</span>
                    {item.subItems && (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    )}
                  </a>
                  {item.subItems && (
                    <div
                      style={{
                        background: "rgba(0,0,0,0.2)",
                        padding: "10px 0",
                      }}
                    >
                      {item.subItems.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          style={{
                            display: "block",
                            padding: "10px 25px 10px 40px",
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "Inter, sans-serif",
                            fontSize: 14,
                            textDecoration: "none",
                          }}
                          onClick={(e) => scrollTo(e, sub.href)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div
              style={{
                padding: "20px 25px 0",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <a
                href="#"
                style={{
                  display: "block",
                  background: "#FFA415",
                  color: "#fff",
                  padding: "12px 20px",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: 4,
                }}
              >
                Signup Now
              </a>
              <a
                href="#"
                className="sm:hidden"
                style={{
                  display: "block",
                  border: "1px solid #FFA415",
                  color: "#FFA415",
                  padding: "12px 20px",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "Inter, sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: 4,
                }}
              >
                Donate Now
              </a>
            </div>

            <div style={{ padding: "25px 25px 0" }}>
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 13,
                  fontFamily: "Inter, sans-serif",
                  marginBottom: 8,
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ marginRight: 6, verticalAlign: "middle" }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                needhelp@chioary.com
              </p>
            </div>

            <div style={{ padding: "20px 25px 0", display: "flex", gap: 12 }}>
              {["Fb", "Tw", "In", "Yt"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `,
        }}
      />
    </>
  );
}
