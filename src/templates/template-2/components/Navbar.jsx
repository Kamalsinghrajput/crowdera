'use client';
import { useState, useEffect } from "react";

const NAV_ITEMS = [
{ label: "Home", href: "#" },
{ label: "About", href: "#about" },
{
  label: "Pages", href: "#",
  children: ["Team", "Team Details", "Project", "Project Details", "Courses", "Courses Details", "Events", "Model", "FAQs", "404 Error"]
},
{
  label: "Services", href: "#",
  children: ["Services", "Service Details"]
},
{
  label: "Blog", href: "#",
  children: ["Blog", "Blog Details"]
},
{ label: "Contact", href: "#contact" }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Sticky placeholder when scrolled */}
      <div style={{ height: scrolled ? "120px" : 0 }} />

      <header
        className={`${scrolled ? "fixed top-0 left-0 right-0 z-[999]" : "absolute top-0 left-0 right-0 z-[999]"}`}>
        
        {/* Top Bar */}
        {!scrolled &&
        <div style={{ background: "#121D18" }}>
            <div className="max-w-[1320px] mx-auto px-3 flex items-center justify-center gap-6 py-[10px]">
              <p style={{ color: "#fff", fontFamily: "Sora, sans-serif", fontSize: 15, margin: 0 }}>
                Welcome to Chioary, a crowdfunding &amp; Charity agency
              </p>
              <a
              href="#"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                background: "#FFA415", color: "#fff",
                padding: "7px 20px", fontSize: 15, fontWeight: 600,
                fontFamily: "Inter, sans-serif", textDecoration: "none", transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = "#fff";e.currentTarget.style.color = "#121D18";}}
              onMouseLeave={(e) => {e.currentTarget.style.background = "#FFA415";e.currentTarget.style.color = "#fff";}}>
              
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                Signup Now
              </a>
            </div>
          </div>
        }

        {/* Main Nav */}
        <nav
          style={{
            background: scrolled ? "#121D18" : "rgba(255,255,255,0.05)",
            backdropFilter: scrolled ? "none" : "blur(2px)",
            boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
            transition: "all 0.4s ease"
          }}>
          
          <div className="max-w-[1320px] mx-auto px-3 flex items-center justify-between" style={{ gap: 20 }}>
            {/* Left: Logo + Links */}
            <div style={{ display: "flex", alignItems: "center", gap: 80 }}>
              {/* Logo */}
              <a href="#" style={{ padding: "14px 0", display: "block", textDecoration: "none" }}>
                <span style={{
                  color: "#FFA415", fontFamily: "Sora, sans-serif", fontWeight: 800,
                  fontSize: 28, letterSpacing: "0.02em"
                }}>
                  CHIOARY
                </span>
              </a>

              {/* Desktop Links */}
              <ul className="hidden lg:flex" style={{ listStyle: "none", margin: 0, padding: 0, gap: 0 }}>
                {NAV_ITEMS.map((item) =>
                <li
                  key={item.label}
                  style={{ position: "relative", padding: "35px 0" }}
                  onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}>
                  
                    <a
                    href={item.href}
                    style={{
                      display: "flex", alignItems: "center", gap: 4,
                      color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 600,
                      fontSize: 16, textDecoration: "none", paddingRight: item.children ? 14 : 0,
                      position: "relative", transition: "color 0.3s",
                      marginLeft: NAV_ITEMS.indexOf(item) > 0 ? 40 : 0
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#FFA415"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#fff"}>
                    
                      {item.label}
                      {item.children &&
                    <svg style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                    }
                    </a>

                    {/* Dropdown */}
                    {item.children && openDropdown === item.label &&
                  <ul style={{
                    position: "absolute", top: "100%", left: 0,
                    background: "#fff", minWidth: 200, padding: "10px 0",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                    listStyle: "none", margin: 0, borderRadius: 4, zIndex: 100,
                    animation: "fadeDown 0.2s ease"
                  }}>
                        {item.children.map((child) =>
                    <li key={child}>
                            <a href="#" style={{
                        display: "block", padding: "8px 20px",
                        color: "#121D18", fontFamily: "Inter, sans-serif",
                        fontSize: 15, fontWeight: 500, textDecoration: "none",
                        transition: "all 0.2s"
                      }}
                      onMouseEnter={(e) => {e.currentTarget.style.color = "#FFA415";e.currentTarget.style.paddingLeft = "26px";}}
                      onMouseLeave={(e) => {e.currentTarget.style.color = "#121D18";e.currentTarget.style.paddingLeft = "20px";}}>
                        
                              {child}
                            </a>
                          </li>
                    )}
                      </ul>
                  }
                  </li>
                )}
              </ul>
            </div>

            {/* Right: Icons + CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* Search */}
              <button className="hidden md:flex" style={{
                width: 50, height: 50, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
                background: "transparent", color: "#fff", cursor: "pointer",
                alignItems: "center", justifyContent: "center", fontSize: 20, transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = "#fff";e.currentTarget.style.color = "#121D18";}}
              onMouseLeave={(e) => {e.currentTarget.style.background = "transparent";e.currentTarget.style.color = "#fff";}}>
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
              </button>

              {/* User */}
              <button className="hidden md:flex" style={{
                width: 50, height: 50, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
                background: "transparent", color: "#fff", cursor: "pointer",
                alignItems: "center", justifyContent: "center", fontSize: 20, transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {e.currentTarget.style.background = "#fff";e.currentTarget.style.color = "#121D18";}}
              onMouseLeave={(e) => {e.currentTarget.style.background = "transparent";e.currentTarget.style.color = "#fff";}}>
                
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              </button>

              {/* Donation CTA */}
              <a href="#" className="hidden sm:flex" style={{
                display: "flex", alignItems: "center", borderRadius: 30, overflow: "hidden",
                textDecoration: "none", background: "#FFA415", transition: "all 0.3s"
              }}>
                <span style={{
                  padding: "13px 20px", color: "#fff", fontFamily: "Inter, sans-serif",
                  fontWeight: 600, fontSize: 16, background: "#FFA415", transition: "all 0.3s"
                }}>Donation Now</span>
                <span style={{
                  width: 50, height: 50, background: "#121D18", display: "flex",
                  alignItems: "center", justifyContent: "center", borderRadius: "50%", transition: "all 0.3s"
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                </span>
              </a>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden"
                onClick={() => setMobileOpen(true)}
                style={{
                  background: "transparent", border: "none", color: "#fff",
                  cursor: "pointer", padding: 4
                }}>
                
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen &&
      <div style={{ position: "fixed", inset: 0, zIndex: 9999 }}>
          {/* Overlay */}
          <div
          style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }}
          onClick={() => setMobileOpen(false)} />
        
          {/* Drawer */}
          <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: "300px",
          background: "#121D18", overflow: "auto", padding: "30px 0",
          boxShadow: "4px 0 30px rgba(0,0,0,0.4)"
        }}>
            {/* Close */}
            <div style={{ padding: "0 25px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#FFA415", fontFamily: "Sora, sans-serif", fontWeight: 800, fontSize: 22 }}>CHIOARY</span>
              <button
              onClick={() => setMobileOpen(false)}
              style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontSize: 22 }}>
              
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>

            {/* Links */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_ITEMS.map((item) =>
            <li key={item.label} style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <a href={item.href} style={{
                display: "block", padding: "14px 25px",
                color: "#fff", fontFamily: "Inter, sans-serif",
                fontWeight: 600, fontSize: 16, textDecoration: "none"
              }}
              onClick={() => setMobileOpen(false)}>
                
                    {item.label}
                  </a>
                </li>
            )}
            </ul>

            {/* Contact info */}
            <div style={{ padding: "25px 25px 0" }}>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "Inter, sans-serif", marginBottom: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6, verticalAlign: "middle" }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                needhelp@chioary.com
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, fontFamily: "Inter, sans-serif" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 6, verticalAlign: "middle" }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                666 888 0000
              </p>
            </div>

            {/* Social links */}
            <div style={{ padding: "20px 25px 0", display: "flex", gap: 12 }}>
              {["Fb", "Tw", "In", "Yt"].map((s) =>
            <a key={s} href="#" style={{
              width: 36, height: 36, border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontSize: 12, fontFamily: "Inter, sans-serif", fontWeight: 700,
              textDecoration: "none"
            }}>{s}</a>
            )}
            </div>
          </div>
        </div>
      }

      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>);

}