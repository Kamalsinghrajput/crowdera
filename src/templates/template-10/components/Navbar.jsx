import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────



// ─── Nav items with optional sub-menus ────────────────────────────────────────
const NAV_ITEMS = [
{ label: "Home", sectionId: "hero" },
{
  label: "About", sectionId: "about",
  sub: [
  { label: "Our Story", sectionId: "about" },
  { label: "Our Impact", sectionId: "impact" },
  { label: "Top Donors", sectionId: "top-donors" }]

},
{
  label: "Causes", sectionId: "causes",
  sub: [
  { label: "Active Causes", sectionId: "causes" },
  { label: "Donations", sectionId: "donations" },
  { label: "Top Donors", sectionId: "top-donors" }]

},
{
  label: "Events", sectionId: "events",
  sub: [
  { label: "Upcoming Events", sectionId: "events" },
  { label: "Newsletter", sectionId: "newsletter" }]

},
{ label: "Testimonials", sectionId: "testimonials" },
{ label: "Top Donors", sectionId: "top-donors" },
{ label: "Newsletter", sectionId: "newsletter" }];


const MAX_VISIBLE = 5;

// ─── Smooth scroll utility ────────────────────────────────────────────────────
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const primaryColor = "#e8547a";
  const secondaryColor = "#9b59b6";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mobileOpenIdx, setMobileOpenIdx] = useState(null);

  const navRef = useRef(null);
  const overflowRef = useRef(null);

  const visibleItems = NAV_ITEMS.slice(0, MAX_VISIBLE);
  const overflowItems = NAV_ITEMS.slice(MAX_VISIBLE);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Scroll — active section + navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollPos = window.scrollY + 72 + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].sectionId);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close overflow dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (overflowRef.current && !overflowRef.current.contains(e.target)) {
        setOverflowOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
    setOverflowOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"}`}>
      <style>{`:root { --primary: ${primaryColor}; --secondary: ${secondaryColor}; }`}</style>
      
      {/* Remove default focus outline from all focusable elements inside navbar */}
      <style>{`
        header button:focus,
        header a:focus {
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => handleNavClick("hero")}>
          
          <img
            src="/assets/template-10-logo.svg"
            alt="BigHearts Logo"
            className="h-10 w-auto" />
          
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
          {visibleItems.map((item, idx) =>
          <li
            key={item.sectionId}
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}>
            
              {/* Nav button with optional chevron */}
              <button
              onClick={() => handleNavClick(item.sectionId)}
              className={`flex items-center gap-1 font-bold text-[13px] capitalize
                  transition-colors duration-300 bg-transparent border-none cursor-pointer
                  focus:outline-none
                  ${activeSection === item.sectionId ?
              "text-[var(--primary)]" :
              "text-[#1a1a2e] group-hover:text-t10-rose"}`
              }>
              
                {item.label}
                {item.sub && item.sub.length > 0 &&
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${hoveredIdx === idx ? "rotate-180" : ""}`} />

              }
              </button>

              {/* Dropdown panel — shown on hover */}
              {item.sub && item.sub.length > 0 && hoveredIdx === idx &&
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[9999]">
                  {/* Bridge gap so mouse can move into dropdown without dismissing */}
                  <div className="absolute -top-4 left-0 right-0 h-4" />
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[200px]">
                    {item.sub.map((sub, si) =>
                <button
                  key={si}
                  onClick={() => handleNavClick(sub.sectionId)}
                  className="w-full text-left px-5 py-3 text-[13px] font-semibold
                          text-[#1a1a2e] hover:bg-t10-rose/5 hover:text-[var(--primary)]
                          border-b border-gray-50 last:border-0 transition-all duration-200
                          hover:pl-6 focus:outline-none">



                  
                        {sub.label}
                      </button>
                )}
                  </div>
                </div>
            }
            </li>
          )}
        </ul>

        {/* Right side: Donate + Overflow + Mobile toggle */}
        <div className="flex items-center gap-4">
          {/* Donate Now */}
          <button
            onClick={() => handleNavClick("donations")}
            className="hidden md:flex items-center gap-2 bg-transparent border border-gray-400
              text-[#333] font-bold text-[12px] px-6 py-2.5 rounded-full
              hover:bg-gray-100 hover:text-black transition-all duration-300 tracking-wide
              focus:outline-none">



            
            DONATE NOW <Heart size={14} className="text-[var(--primary)]" fill="currentColor" />
          </button>

          {/* Overflow hamburger (desktop, for items 6+) */}
          {overflowItems.length > 0 &&
          <div ref={overflowRef} className="relative hidden lg:block">
              <button
              aria-label="More navigation options"
              onClick={() => setOverflowOpen(!overflowOpen)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300 focus:outline-none
                  ${overflowOpen ?
              "border-[var(--primary)] text-[var(--primary)] bg-t10-rose/5" :
              "border-gray-300 text-[#1a1a2e] hover:border-[var(--primary)] hover:text-[var(--primary)]"}`
              }>
              
                {overflowOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {overflowOpen &&
            <div className="absolute right-0 top-full mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden">
                  {overflowItems.map((item) =>
              <button
                key={item.sectionId}
                onClick={() => handleNavClick(item.sectionId)}
                className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-all duration-200
                        hover:bg-t10-rose/5 hover:text-[var(--primary)] hover:pl-6 focus:outline-none
                        ${activeSection === item.sectionId ?
                "text-[var(--primary)] bg-t10-rose/5" :
                "text-[#1a1a2e]"}`
                }>
                
                      {item.label}
                    </button>
              )}
                </div>
            }
            </div>
          }

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl transition-colors duration-300 text-[#1a1a2e] focus:outline-none">
            
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — all items with expandable sub-menus */}
      {mobileOpen &&
      <div className="lg:hidden bg-white/97 backdrop-blur-md border-t border-black/5 px-8 pb-6 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((item, idx) =>
        <div key={item.sectionId} className="border-b border-black/5">
              <div className="flex items-center justify-between">
                <button
              onClick={() => handleNavClick(item.sectionId)}
              className={`flex-1 text-left py-3 font-bold text-xs uppercase tracking-widest
                    transition-colors duration-200 focus:outline-none
                    ${activeSection === item.sectionId ? "text-[var(--primary)]" : "text-[#1a1a2e] hover:text-[var(--primary)]"}`}>
              
                  {item.label}
                </button>
                {item.sub && item.sub.length > 0 &&
            <button
              onClick={() => setMobileOpenIdx(mobileOpenIdx === idx ? null : idx)}
              className="p-2 focus:outline-none text-[#1a1a2e] hover:text-[var(--primary)] transition-colors">
              
                    <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${mobileOpenIdx === idx ? "rotate-180" : ""}`} />
              
                  </button>
            }
              </div>

              {/* Mobile sub-items */}
              {item.sub && item.sub.length > 0 && mobileOpenIdx === idx &&
          <div className="pl-4 pb-3 flex flex-col gap-1">
                  {item.sub.map((sub, si) =>
            <button
              key={si}
              onClick={() => handleNavClick(sub.sectionId)}
              className="text-left py-2 text-xs font-semibold text-t10-dark/60
                        hover:text-[var(--primary)] transition-colors focus:outline-none">

              
                      {sub.label}
                    </button>
            )}
                </div>
          }
            </div>
        )}

          <button
          onClick={() => handleNavClick("donations")}
          className="mt-4 flex items-center gap-2 bg-transparent border border-t10-dark text-[#1a1a2e]
              font-extrabold text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-full
              hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300
              focus:outline-none">



          
            Donate Now <Heart size={14} className="text-[var(--primary)]" fill="currentColor" />
          </button>
        </div>
      }
    </header>);

}