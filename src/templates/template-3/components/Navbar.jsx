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

  const isSubpage = router.pathname !== "/templates/template-3";

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
        router.push(`/templates/template-3${href}`);
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

  const buttonStyles = `
    :root {
      --primary: #007B39;
      --secondary: #FFA415;
      --bg-color: #121d18;
      --secondary-bg-color: #f9f9f9;
      --t2-primary: #007B39;
      --t2-secondary: #FFA415;
      --t2-dark: #121d18;
      --t2-gray: #6c6e76;
      --t2-light: #f9f9f9;
    }
    .t2-btn { display: inline-flex; align-items: center; gap: 0; text-decoration: none; border: none; background: none; cursor: pointer; padding: 0; }
    .t2-btn span { position: relative; display: inline-flex; align-items: center; justify-content: center; height: 50px; padding: 0 35px; background-color: var(--primary, #007B39); color: white; border-radius: 25px; font-size: 14px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; z-index: 1; overflow: hidden; transition: all 500ms ease; white-space: nowrap; }
    .t2-btn span::before { content: ""; position: absolute; inset: 0; background-color: var(--bg-color, #121d18); transform-origin: left; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
    .t2-btn:hover span::before { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
    .t2-btn:hover span { color: white; }
    .t2-btn i { position: relative; display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; background-color: var(--primary, #007B39); border-radius: 50%; font-size: 18px; color: white; overflow: hidden; transition: all 500ms ease; z-index: 2; margin-left: -10px; }
    .t2-btn i::after { content: ""; position: absolute; inset: 0; background-color: var(--bg-color, #121d18); transform-origin: right; transform: scaleX(0); transition: transform 0.8s cubic-bezier(0, 0.96, 0.58, 1.1); z-index: -1; }
    .t2-btn:hover i::after { transform: scaleX(1); transition: transform 1.2s cubic-bezier(0, 0.96, 0.58, 1.1); }
    .t2-btn:hover i { color: white; }
    .t2-btn i { display: none; }
    .t2-btn.t2-btn-black span { background-color: var(--bg-color, #121d18); }
    .t2-btn.t2-btn-black span::before { background-color: var(--secondary, #FFA415); }
    .t2-btn.t2-btn-primary span { background-color: var(--primary, #007B39); }
    .t2-btn.t2-btn-secondary span { background-color: var(--secondary, #FFA415); color: var(--bg-color, #121d18); }
    .t2-btn.t2-btn-secondary span::before { background-color: var(--bg-color, #121d18); }
    .t2-btn.t2-btn-secondary:hover span { color: white; }
    .t2-text-btn { display: inline-flex; align-items: center; font-size: 13px; color: var(--primary, #007B39); text-decoration: none; text-transform: uppercase; font-weight: 500; letter-spacing: 0.1em; transition: color 0.3s; }
    .t2-text-btn:hover { color: var(--secondary, #FFA415); }
    .t2-text-btn svg { transition: transform 0.3s; }
    .t2-text-btn:hover svg { transform: translateX(5px); }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: buttonStyles }} />
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
            background: scrolled || isSubpage ? "#EBD3AF" : "transparent",
            boxShadow:
              scrolled || isSubpage ? "0 4px 30px rgba(0,0,0,0.08)" : "none",
            transition: "background 0.4s ease, box-shadow 0.4s ease",
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
              <Link href="/templates/template-3">
                <a
                  style={{
                    padding: "14px 0",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  <span
                    style={{
                      color: "#121D18",
                      fontFamily: "Sora, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(24px, 5vw, 32px)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    CHIOARY
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
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        color: "#121D18",
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                        textDecoration: "none",
                      }}
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
                        className="absolute top-[calc(100%+8px)] left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0"
                        style={{
                          background: "#fff",
                          minWidth: 240,
                          padding: "8px 0",
                          boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                          borderRadius: 10,
                          zIndex: 100,
                          display: "flex",
                          flexDirection: "column",
                          gap: "10px",
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
                                color: "#121D18",
                                fontFamily: "Inter, sans-serif",
                                fontSize: 15,
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
                  className="t2-btn inline-flex"
                  style={{ textDecoration: "none" }}
                >
                  <span>Donate Now</span>
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
                      border: "1px solid rgba(18,29,24,0.1)",
                      borderRadius: "50%",
                      background: overflowOpen ? "#0e7c3b" : "transparent",
                      color: overflowOpen ? "#fff" : "#121D18",
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
                        top: "calc(100% + 8px)",
                        right: 0,
                        background: "#fff",
                        minWidth: 240,
                        padding: "8px 0",
                        boxShadow: "0px 10px 60px 0px rgba(0,0,0,0.07)",
                        margin: 0,
                        borderRadius: 10,
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
                              color: "#121D18",
                              fontFamily: "Inter, sans-serif",
                              fontSize: 15,
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
                    background: "transparent",
                    border: "none",
                    color: "#121D18",
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
              <Link href="/templates/template-3">
                <a
                  style={{ textDecoration: "none" }}
                  onClick={() => setMobileOpen(false)}
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
                </a>
              </Link>
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
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 16,
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
                            fontFamily: "Inter, sans-serif",
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
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .t3-navlink { transition: color 0.3s; }
        .t3-navlink:hover { color: #007B39 !important; }
        .t3-submenu-item:hover { background: rgba(0,123,57,0.06); }
        .t3-submenu-item:hover a { color: #007B39 !important; }
      `,
        }}
      />
    </>
  );
}
