import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import gsap from "gsap";
import { Heart, Menu, X, ChevronDown } from "lucide-react";

// ─── Nav items with optional sub-menus ────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", sectionId: "hero", href: "/templates/template-10" },
  {
    label: "About",
    sectionId: "about",
    href: "/templates/template-10#about",
    sub: [
      { label: "Our Story", sectionId: "about", href: "/templates/template-10#about" },
      { label: "Our Impact", sectionId: "impact", href: "/templates/template-10#impact" },
      { label: "Top Donors", sectionId: "top-donors", href: "/templates/template-10#top-donors" },
    ],
  },
  {
    label: "Causes",
    sectionId: "causes",
    href: "/templates/template-10/initiatives?tab=campaigns",
    sub: [
      { label: "Active Causes", sectionId: "causes", href: "/templates/template-10/initiatives?tab=campaigns" },
      { label: "Donations", sectionId: "donations", href: "/templates/template-10/initiatives?tab=campaigns" },
      { label: "Top Donors", sectionId: "top-donors", href: "/templates/template-10#top-donors" },
    ],
  },
  {
    label: "Events",
    sectionId: "events",
    href: "/templates/template-10/initiatives?tab=events",
    sub: [
      { label: "Upcoming Events", sectionId: "events", href: "/templates/template-10/initiatives?tab=events" },
      { label: "Newsletter", sectionId: "newsletter", href: "/templates/template-10#newsletter" },
    ],
  },
  { label: "Testimonials", sectionId: "testimonials", href: "/templates/template-10#testimonials" },
  { label: "Top Donors", sectionId: "top-donors", href: "/templates/template-10#top-donors" },
  { label: "Newsletter", sectionId: "newsletter", href: "/templates/template-10#newsletter" },
];

const MAX_VISIBLE_ITEMS = 5;

// ─── Smooth scroll utility ────────────────────────────────────────────────────
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (!element) return;
  const offsetTop = element.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
}

export default function Navbar() {
  const router = useRouter();
  const primaryColor = "#e8547a";
  const secondaryColor = "#9b59b6";

  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOverflowMenuOpen, setIsOverflowMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredNavItemIndex, setHoveredNavItemIndex] = useState(null);
  const [activeMobileSubMenuIndex, setActiveMobileSubMenuIndex] = useState(null);

  const navbarRef = useRef(null);
  const overflowMenuRef = useRef(null);

  const visibleNavItems = NAV_ITEMS.slice(0, MAX_VISIBLE_ITEMS);
  const overflowNavItems = NAV_ITEMS.slice(MAX_VISIBLE_ITEMS);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  // Scroll — active section + navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 60);
      const scrollPosition = window.scrollY + 72 + 100;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(NAV_ITEMS[i].sectionId);
        if (sectionElement && sectionElement.offsetTop <= scrollPosition) {
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
    const handleClickOutside = (event) => {
      if (overflowMenuRef.current && !overflowMenuRef.current.contains(event.target)) {
        setIsOverflowMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (navItem) => {
    const { sectionId, href } = navItem;
    const isMainTemplatePage = router.pathname === "/templates/template-10";

    if (href && !href.startsWith("/templates/template-10#")) {
      router.push(href);
    } else if (isMainTemplatePage && sectionId) {
      scrollToSection(sectionId);
    } else if (href) {
      router.push(href);
    }

    setIsMobileMenuOpen(false);
    setIsOverflowMenuOpen(false);
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${hasScrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"}`}>
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
          onClick={() => handleNavClick({ sectionId: "hero", href: "/templates/template-10" })}>
          
          <img
            src="/assets/template-10-logo.svg"
            alt="BigHearts Logo"
            className="h-10 w-auto" />
          
        </div>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
          {visibleNavItems.map((navItem, index) =>
          <li
            key={navItem.sectionId}
            className="relative cursor-pointer group"
            onMouseEnter={() => setHoveredNavItemIndex(index)}
            onMouseLeave={() => setHoveredNavItemIndex(null)}>
            
              {/* Nav button with optional chevron */}
              <button
              onClick={() => handleNavClick(navItem)}
              className={`flex items-center gap-1 font-bold text-[13px] capitalize
                   transition-colors duration-300 bg-transparent border-none cursor-pointer
                   focus:outline-none
                   ${activeSection === navItem.sectionId ?
              "text-[var(--primary)]" :
              "text-[#1a1a2e] group-hover:text-t10-rose"}`
              }>
              
                {navItem.label}
                {navItem.sub && navItem.sub.length > 0 &&
              <ChevronDown
                size={13}
                className={`transition-transform duration-200 ${hoveredNavItemIndex === index ? "rotate-180" : ""}`} />

              }
              </button>

              {/* Dropdown panel — shown on hover */}
              {navItem.sub && navItem.sub.length > 0 && hoveredNavItemIndex === index &&
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[9999]">
                  {/* Bridge gap so mouse can move into dropdown without dismissing */}
                  <div className="absolute -top-4 left-0 right-0 h-4" />
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[200px]">
                    {navItem.sub.map((subNavItem, subIndex) =>
                <button
                  key={subIndex}
                  onClick={() => handleNavClick(subNavItem)}
                  className="w-full text-left px-5 py-3 text-[13px] font-semibold
                           text-[#1a1a2e] hover:bg-t10-rose/5 hover:text-[var(--primary)]
                           border-b border-gray-50 last:border-0 transition-all duration-200
                           hover:pl-6 focus:outline-none">

                        {subNavItem.label}
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
            onClick={() => handleNavClick({ sectionId: "donations", href: "/templates/template-10/initiatives?tab=campaigns" })}
            className="hidden md:flex items-center gap-2 bg-transparent border border-gray-400
              text-[#333] font-bold text-[12px] px-6 py-2.5 rounded-full
              hover:bg-gray-100 hover:text-black transition-all duration-300 tracking-wide
              focus:outline-none">

            DONATE NOW <Heart size={14} className="text-[var(--primary)]" fill="currentColor" />
          </button>

          {/* Overflow hamburger (desktop, for items 6+) */}
          {overflowNavItems.length > 0 &&
          <div ref={overflowMenuRef} className="relative hidden lg:block">
              <button
              aria-label="More navigation options"
              onClick={() => setIsOverflowMenuOpen(!isOverflowMenuOpen)}
              className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300 focus:outline-none
                  ${isOverflowMenuOpen ?
              "border-[var(--primary)] text-[var(--primary)] bg-t10-rose/5" :
              "border-gray-300 text-[#1a1a2e] hover:border-[var(--primary)] hover:text-[var(--primary)]"}`
              }>
              
                {isOverflowMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {isOverflowMenuOpen &&
            <div className="absolute right-0 top-full mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden">
                  {overflowNavItems.map((navItem) =>
              <button
                key={navItem.sectionId}
                onClick={() => handleNavClick(navItem)}
                className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-all duration-200
                        hover:bg-t10-rose/5 hover:text-[var(--primary)] hover:pl-6 focus:outline-none
                        ${activeSection === navItem.sectionId ?
                "text-[var(--primary)] bg-t10-rose/5" :
                "text-[#1a1a2e]"}`
                }>
                
                      {navItem.label}
                    </button>
              )}
                </div>
            }
            </div>
          }

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-2xl transition-colors duration-300 text-[#1a1a2e] focus:outline-none">
            
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — all items with expandable sub-menus */}
      {isMobileMenuOpen &&
      <div className="lg:hidden bg-white/97 backdrop-blur-md border-t border-black/5 px-8 pb-6 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((navItem, index) =>
        <div key={navItem.sectionId} className="border-b border-black/5">
              <div className="flex items-center justify-between">
                <button
              onClick={() => handleNavClick(navItem)}
              className={`flex-1 text-left py-3 font-bold text-xs uppercase tracking-widest
                    transition-colors duration-200 focus:outline-none
                    ${activeSection === navItem.sectionId ? "text-[var(--primary)]" : "text-[#1a1a2e] hover:text-[var(--primary)]"}`}>
              
                  {navItem.label}
                </button>
                {navItem.sub && navItem.sub.length > 0 &&
            <button
              onClick={() => setActiveMobileSubMenuIndex(activeMobileSubMenuIndex === index ? null : index)}
              className="p-2 focus:outline-none text-[#1a1a2e] hover:text-[var(--primary)] transition-colors">
              
                    <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${activeMobileSubMenuIndex === index ? "rotate-180" : ""}`} />
              
                  </button>
            }
              </div>

              {/* Mobile sub-items */}
              {navItem.sub && navItem.sub.length > 0 && activeMobileSubMenuIndex === index &&
          <div className="pl-4 pb-3 flex flex-col gap-1">
                  {navItem.sub.map((subNavItem, subIndex) =>
            <button
              key={subIndex}
              onClick={() => handleNavClick(subNavItem)}
              className="text-left py-2 text-xs font-semibold text-t10-dark/60
                        hover:text-[var(--primary)] transition-colors focus:outline-none">

                      {subNavItem.label}
                    </button>
            )}
                </div>
          }
            </div>
        )}

          <button
          onClick={() => handleNavClick({ sectionId: "donations", href: "/templates/template-10/initiatives?tab=campaigns" })}
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