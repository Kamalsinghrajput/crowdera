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
    href: "/templates/template-5/initiatives?tab=campaigns",
    subItems: [
      { label: "Active Causes", href: "/templates/template-5/initiatives?tab=campaigns" },
      { label: "Top Donors", href: "#top-donors" }
    ]
  },
  { 
    label: "Events", 
    href: "/templates/template-5/initiatives?tab=events",
    subItems: [
      { label: "Upcoming Events", href: "/templates/template-5/initiatives?tab=events" },
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

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSubpage = router.pathname !== "/templates/template-5";

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
        router.push(`/templates/template-5${href}`);
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

  const primaryGreen = "#00b86b";

  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap');
    
    .t3-nav-item {
      position: relative;
    }

    .t3-navlink {
      position: relative;
      color: #ffffff !important;
      font-family: 'Montserrat', sans-serif !important;
      font-weight: 700 !important;
      font-size: 14px !important;
      text-transform: uppercase;
      text-decoration: none;
      padding: 30px 0;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: color 0.3s ease;
    }
    
    .t3-navlink::after {
      content: '';
      position: absolute;
      bottom: 25px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${primaryGreen};
      transition: width 0.3s ease;
    }

    .t3-navlink:hover {
      color: ${primaryGreen} !important;
    }

    .group:hover .t3-navlink::after {
      width: 100%;
    }

    .tamun-donate-btn {
      position: relative;
      background-color: ${primaryGreen};
      color: white;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 15px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 20px 30px 20px 40px;
      clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%);
      transition: background-color 0.3s ease;
      text-decoration: none;
    }

    .tamun-donate-btn:hover {
      background-color: #009e5c;
    }

    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInLeft {
      from { transform: translateX(-100%); }
      to { transform: translateX(0); }
    }
    
    .t3-submenu-item:hover { background: rgba(0,184,107,0.06); }
    .t3-submenu-item:hover a { color: ${primaryGreen} !important; padding-left: 25px; }
    .t3-submenu-item a { transition: all 0.3s ease; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          willChange: "transform",
        }}
      >
        {/* Main Nav */}
        <nav
          style={{
            background: scrolled || isSubpage ? "rgba(20, 20, 20, 0.95)" : "transparent",
            boxShadow:
              scrolled || isSubpage ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
            transition: "background 0.4s ease, box-shadow 0.4s ease",
            borderBottom: scrolled || isSubpage ? "none" : "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            className="max-w-[1320px] mx-auto px-4 lg:px-8 flex items-center justify-between"
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
              <Link href="/templates/template-5">
                <a
                  style={{
                    padding: "14px 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={primaryGreen} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    <path d="M15 9l-3 3-1.5-1.5" stroke="white" />
                  </svg>
                  <span
                    style={{
                      color: "#ffffff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "clamp(24px, 5vw, 32px)",
                      letterSpacing: "-0.5px",
                    }}
                  >
                    Tamun
                  </span>
                </a>
              </Link>

              {/* Desktop Main Links */}
              <ul
                className="hidden lg:flex"
                style={{ listStyle: "none", margin: 0, padding: 0, gap: 40 }}
              >
                {mainLinks.map((item) => (
                  <li
                    key={item.label}
                    className="group t3-nav-item"
                    style={{ position: "relative", cursor: "pointer" }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => scrollTo(e, item.href)}
                      className="t3-navlink"
                    >
                      <span
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                        }}
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
                            className="group-hover:rotate-180"
                            style={{ transition: "transform 0.3s" }}
                          >
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        )}
                      </span>
                    </a>

                    {/* Submenu Dropdown */}
                    {item.subItems && (
                      <div
                        className="absolute top-[calc(100%)] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0"
                        style={{
                          background: "#fff",
                          minWidth: 240,
                          padding: "8px 0",
                          boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                          borderRadius: "0 0 10px 10px",
                          zIndex: 100,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
                          borderTop: `3px solid ${primaryGreen}`,
                        }}
                      >
                        {item.subItems.map((sub) => (
                          <div
                            key={sub.label}
                            className="t3-submenu-item"
                            style={{ margin: "2px 8px", borderRadius: 6 }}
                          >
                            <a
                              href={sub.href}
                              onClick={(e) => scrollTo(e, sub.href)}
                              style={{
                                display: "block",
                                padding: "12px 18px",
                                color: "#333333",
                                fontFamily: "'Montserrat', sans-serif",
                                fontSize: 14,
                                fontWeight: 500,
                                textDecoration: "none",
                              }}
                            >
                              {sub.label}
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Donate, Overflow, Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Donation CTA */}
              <div className="hidden lg:flex">
                <a
                  href="#donate"
                  onClick={(e) => scrollTo(e, "#donate")}
                  className="tamun-donate-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  Donate Now
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
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "50%",
                      background: overflowOpen ? primaryGreen : "transparent",
                      color: overflowOpen ? "#fff" : "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s",
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
                        top: "calc(100% + 20px)",
                        right: 0,
                        background: "#fff",
                        minWidth: 240,
                        padding: "8px 0",
                        boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                        margin: 0,
                        borderRadius: "0 0 10px 10px",
                        borderTop: `3px solid ${primaryGreen}`,
                        zIndex: 100,
                        animation: "fadeDown 0.2s ease",
                      }}
                    >
                      {overflowLinks.map((link) => (
                        <div
                          key={link.label}
                          className="t3-submenu-item"
                          style={{ margin: "2px 8px", borderRadius: 6 }}
                        >
                          <a
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            style={{
                              display: "block",
                              padding: "12px 18px",
                              color: "#333333",
                              fontFamily: "'Montserrat', sans-serif",
                              fontSize: 14,
                              fontWeight: 500,
                              textDecoration: "none",
                            }}
                          >
                            {link.label}
                          </a>
                        </div>
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
                    background: primaryGreen,
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    padding: 8,
                    borderRadius: "4px",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="28"
                    height="28"
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
              background: "#111",
              overflow: "auto",
              padding: "30px 0",
              boxShadow: "4px 0 30px rgba(0,0,0,0.4)",
              animation:
                "slideInLeft 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards",
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
                  color: "#fff",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                }}
              >
                Tamun
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
                    onClick={(e) => scrollTo(e, item.href)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 25px",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      textTransform: "uppercase",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
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
                    </span>
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
                          onClick={(e) => scrollTo(e, sub.href)}
                          style={{
                            display: "block",
                            padding: "10px 25px 10px 40px",
                            color: "rgba(255,255,255,0.7)",
                            fontFamily: "'Montserrat', sans-serif",
                            fontSize: 14,
                            textDecoration: "none",
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
                className="sm:hidden"
                style={{
                  display: "block",
                  background: primaryGreen,
                  color: "#fff",
                  padding: "12px 20px",
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "'Montserrat', sans-serif",
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: 4,
                  textTransform: "uppercase",
                }}
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
