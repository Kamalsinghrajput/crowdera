import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart, Menu, X } from "lucide-react";

// ─── Nav items matching actual section IDs on the page ───────────────────────
const NAV_ITEMS = [
  { label: "Home", sectionId: "hero" },
  { label: "About", sectionId: "about" },
  { label: "Impact", sectionId: "impact" },
  { label: "Donations", sectionId: "donations" },
  { label: "Causes", sectionId: "causes" },
  { label: "Events", sectionId: "events" },
  { label: "Top Donors", sectionId: "top-donors" },
  { label: "Testimonials", sectionId: "testimonials" },
  { label: "Newsletter", sectionId: "newsletter" },
];

const MAX_VISIBLE = 5;

// ─── Smooth scroll utility ──────────────────────────────────────────────────
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbarHeight = 72; // fixed navbar height
  const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const navRef = useRef<HTMLElement>(null);
  const overflowRef = useRef<HTMLDivElement>(null);

  // Split items: first 5 visible, rest overflow
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

  // Scroll handler — tracks active section + navbar bg
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section based on scroll position
      const navbarHeight = 72;
      const scrollPos = window.scrollY + navbarHeight + 100;

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
    const handleClick = (e: MouseEvent) => {
      if (overflowRef.current && !overflowRef.current.contains(e.target as Node)) {
        setOverflowOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
    setOverflowOpen(false);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? "bg-white shadow-md" : "bg-white border-b border-gray-100"}`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        {/* Logo */}
        <div
          className="flex-shrink-0 cursor-pointer"
          onClick={() => handleNavClick("hero")}
        >
          <img
            src="/assets/template-10-logo.svg"
            alt="BigHearts Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop nav links — first 5 */}
        <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0">
          {visibleItems.map((item) => (
            <li key={item.sectionId} className="cursor-pointer group">
              <button
                onClick={() => handleNavClick(item.sectionId)}
                className={`font-bold text-[13px] capitalize transition-colors duration-300
                  group-hover:text-t10-rose bg-transparent border-none cursor-pointer
                  ${activeSection === item.sectionId ? "text-t10-rose" : "text-t10-dark"}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side: Donate + Overflow hamburger + Mobile hamburger */}
        <div className="flex items-center gap-4">
          {/* Donate Now */}
          <button
            onClick={() => handleNavClick("donations")}
            className="hidden md:flex items-center gap-2 bg-transparent border border-gray-400
              text-[#333] font-bold text-[12px] px-6 py-2.5 rounded-full
              hover:bg-gray-100 hover:text-black transition-all duration-300 tracking-wide"
          >
            DONATE NOW <Heart size={14} className="text-t10-rose" fill="currentColor" />
          </button>

          {/* Overflow hamburger (desktop only, for items 6+) */}
          {overflowItems.length > 0 && (
            <div ref={overflowRef} className="relative hidden lg:block">
              <button
                aria-label="More navigation options"
                onClick={() => setOverflowOpen(!overflowOpen)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center
                  transition-all duration-300
                  ${overflowOpen
                    ? "border-t10-rose text-t10-rose bg-t10-rose/5"
                    : "border-gray-300 text-t10-dark hover:border-t10-rose hover:text-t10-rose"
                  }`}
              >
                {overflowOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {/* Overflow dropdown */}
              {overflowOpen && (
                <div className="absolute right-0 top-full mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 min-w-[200px] overflow-hidden animate-in fade-in slide-in-from-top-2">
                  {overflowItems.map((item) => (
                    <button
                      key={item.sectionId}
                      onClick={() => handleNavClick(item.sectionId)}
                      className={`w-full text-left px-5 py-3 text-[13px] font-bold transition-all duration-200 
                        hover:bg-t10-rose/5 hover:text-t10-rose hover:pl-6
                        ${activeSection === item.sectionId
                          ? "text-t10-rose bg-t10-rose/5"
                          : "text-t10-dark"
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-2xl transition-colors duration-300 text-t10-dark"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — all items */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/97 backdrop-blur-md border-t border-black/5 px-8 pb-6 max-h-[70vh] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.sectionId}
              onClick={() => handleNavClick(item.sectionId)}
              className={`block w-full text-left py-3 font-bold text-xs uppercase tracking-widest
                border-b border-black/5 transition-colors duration-200
                ${activeSection === item.sectionId ? "text-t10-rose" : "text-t10-dark hover:text-t10-rose"}`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("donations")}
            className="mt-4 flex items-center gap-2 bg-transparent border border-t10-dark text-t10-dark
              font-extrabold text-[11px] uppercase tracking-widest px-6 py-2.5 rounded-full
              hover:bg-t10-rose hover:text-white hover:border-t10-rose transition-all duration-300"
          >
            Donate Now <Heart size={14} className="text-t10-rose" fill="currentColor" />
          </button>
        </div>
      )}
    </header>
  );
}