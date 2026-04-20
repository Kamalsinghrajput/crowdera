import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail, Phone, Heart, ChevronDown, Search, ArrowUpRight, Menu, X, Headphones } from 'lucide-react';

/* ── Types ── */
interface SubPage { title: string; href: string; }
interface NavLink { title: string; href: string; sub: SubPage[]; isExternal?: boolean; }

/* ── Nav data — first 5 shown in pill, rest go to overflow hamburger ── */
const navLinks: NavLink[] = [
  { title: 'Home', href: '#hero', sub: [] },
  {
    title: 'About Us', href: '#about',
    sub: [
      { title: 'Our Story', href: '#about' },
      { title: 'Our Team', href: '#board' },
      { title: 'Our Mission', href: '#services' },
    ],
  },
  {
    title: 'Services', href: '#services',
    sub: [
      { title: 'Healthcare', href: '#services' },
      { title: 'Education', href: '#services' },
      { title: 'Food Aid', href: '#services' },
    ],
  },
  {
    title: 'Campaigns', href: '#campaigns',
    sub: [
      { title: 'Active Campaigns', href: '#campaigns' },
      { title: 'Past Campaigns', href: '#campaigns' },
      { title: 'Start a Campaign', href: '#campaigns' },
    ],
  },
  { title: 'News', href: '/templates/template-1/news', sub: [], isExternal: true },
  { title: 'Contact Us', href: '#contact', sub: [] },
];

const MAIN_LIMIT = 5;
const mainLinks = navLinks.slice(0, MAIN_LIMIT);
const overflowLinks = navLinks.slice(MAIN_LIMIT);
const hasOverflow = overflowLinks.length > 0;

const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AUD'];
const languages = [
  { label: 'English', flag: '🇬🇧' },
  { label: 'Spanish', flag: '🇪🇸' },
  { label: 'French', flag: '🇫🇷' },
  { label: 'German', flag: '🇩🇪' },
  { label: 'Hindi', flag: '🇮🇳' },
];

/* ── Component ── */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoveredNav, setHoveredNav] = useState<number | null>(null);
  const [overflowOpen, setOverflowOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState(languages[0]);

  const navRef = useRef<HTMLElement>(null);
  const overflowRef = useRef<HTMLDivElement>(null);

  /* scroll detection */
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* click-outside — close all dropdowns */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
        setOverflowOpen(false);
        setCurrencyOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  /* smooth-scroll helper */
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) return; // let Next.js navigate normally
    e.preventDefault();
    setIsMobileOpen(false);
    setOpenDropdown(null);
    if (href === '#hero') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header ref={navRef} className="fixed w-full top-0 z-50">

      {/* ══════════ TOP BAR ══════════ */}
      {!isScrolled && (
        <div className="bg-brand-dark text-white text-xs py-2.5 px-4">
          <div className="container mx-auto flex justify-between items-center max-w-7xl">

            {/* Left — email only (phone moved to About section) */}
            <div className="flex space-x-5 items-center">
              <a href="mailto:support@example.com" className="flex items-center hover:text-brand-yellow transition-colors text-sm font-medium">
                <Mail size={18} className="mr-1.5 text-brand-yellow" />
                support@example.com
              </a>
            </div>

            {/* Center pill */}
            <div className="hidden lg:flex items-center bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-5 py-1 text-brand-yellow font-semibold text-xs">
              <Heart size={12} className="mr-1.5" fill="currentColor" />
              Are You Ready To Help Them? Let&apos;s Become A Volunteer!
            </div>

            {/* Right — currency, language, socials */}
            <div className="flex items-center space-x-5">
              <div className="hidden md:flex items-center space-x-4 text-white/70">

                {/* Currency dropdown */}
                <div className="relative">
                  <button
                    onClick={() => { setCurrencyOpen(o => !o); setLangOpen(false); }}
                    className="flex items-center hover:text-white transition-colors text-xs gap-1"
                  >
                    {currency}
                    <ChevronDown size={10} className={`transition-transform ${currencyOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {currencyOpen && (
                    <div className="absolute top-full left-0 mt-2 w-24 bg-brand-dark border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                      {currencies.map(c => (
                        <button
                          key={c}
                          onClick={() => { setCurrency(c); setCurrencyOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-xs hover:bg-brand-yellow hover:text-brand-dark transition-colors ${currency === c ? 'text-brand-yellow font-bold' : 'text-white'}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Language dropdown */}
                <div className="relative">
                  <button
                    onClick={() => { setLangOpen(o => !o); setCurrencyOpen(false); }}
                    className="flex items-center hover:text-white transition-colors text-xs gap-1"
                  >
                    <span className="mr-1">{language.flag}</span>
                    {language.label}
                    <ChevronDown size={10} className={`transition-transform ${langOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {langOpen && (
                    <div className="absolute top-full right-0 mt-2 w-32 bg-brand-dark border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                      {languages.map(l => (
                        <button
                          key={l.label}
                          onClick={() => { setLanguage(l); setLangOpen(false); }}
                          className={`w-full text-left px-4 py-2 text-xs hover:bg-brand-yellow hover:text-brand-dark transition-colors flex items-center gap-2 ${language.label === l.label ? 'text-brand-yellow font-bold' : 'text-white'}`}
                        >
                          <span>{l.flag}</span> {l.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Socials */}
              <div className="flex items-center space-x-3 text-white/60 text-xs font-bold">
                <a href="#" className="hover:text-brand-yellow transition-colors">f</a>
                <a href="#" className="hover:text-brand-yellow transition-colors">v</a>
                <a href="#" className="hover:text-brand-yellow transition-colors">y</a>
                <a href="#" className="hover:text-brand-yellow transition-colors">in</a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ══════════ MAIN NAVBAR ══════════ */}
      <nav className="w-full bg-white shadow-md py-2.5">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <a className="flex items-center text-2xl font-extrabold text-brand-dark">
              <div className="w-9 h-9 rounded-full bg-brand-yellow mr-2 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-brand-teal">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
                </svg>
              </div>
              Charifund
            </a>
          </Link>

          {/* Center — Yellow Pill Nav (max 5 links) */}
          <div className="hidden lg:flex items-center">
            <div className="bg-brand-yellow rounded-full flex items-center shadow-sm">

              {/* Main nav links */}
              <div className="flex items-center pl-4 pr-2 py-1">
                {mainLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setHoveredNav(idx)}
                    onMouseLeave={() => setHoveredNav(null)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href, link.isExternal)}
                      className="flex items-center gap-1 text-brand-dark font-bold text-sm px-3 py-2.5
                                 hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
                    >
                      {link.title}
                      {link.sub.length > 0 && (
                        <ChevronDown
                          size={13}
                          className={`transition-transform duration-200 ${hoveredNav === idx ? 'rotate-180' : ''}`}
                        />
                      )}
                    </a>

                    {/* Dropdown — shown on hover via JS state */}
                    {link.sub.length > 0 && hoveredNav === idx && (
                      <div className="absolute top-full left-0 pt-2 z-[9999]">
                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-w-[190px]">
                          {link.sub.map((s, si) => (
                            <a
                              key={si}
                              href={s.href}
                              onClick={(e) => scrollTo(e, s.href)}
                              className="block px-5 py-3 text-sm text-brand-dark font-semibold
                                         hover:bg-brand-yellow transition-colors
                                         border-b border-gray-50 last:border-0 cursor-pointer"
                            >
                              {s.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Search + Donate + Overflow Hamburger */}
          <div className="flex items-center space-x-3">
            <button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full text-brand-dark hover:bg-gray-100 transition-colors">
              <Search size={19} strokeWidth={2.5} />
            </button>

            {/* Donate Now — animated color change on hover */}
            <Link href="#">
              <a className="hidden lg:flex items-center font-bold text-sm py-3 px-7 rounded-full
                             bg-brand-yellow text-brand-dark
                             hover:bg-brand-dark hover:text-white
                             transition-all duration-300 ease-in-out group shadow-sm">
                Donate Now
                <ArrowUpRight size={15} className="ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </Link>

            {/* Overflow hamburger — only if there are more than 5 links */}
            {hasOverflow && (
              <div ref={overflowRef} className="hidden lg:block relative">
                <button
                  onClick={() => setOverflowOpen(o => !o)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-brand-yellow flex items-center justify-center text-brand-dark transition-all"
                  aria-label="More pages"
                >
                  {overflowOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
                {overflowOpen && (
                  <div className="absolute top-full right-0 mt-3 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-w-[160px] z-50">
                    {overflowLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.href}
                        onClick={(e) => { scrollTo(e, link.href); setOverflowOpen(false); }}
                        className="block px-5 py-3 text-sm text-brand-dark font-semibold
                                   hover:bg-brand-yellow transition-colors border-b border-gray-50 last:border-0 cursor-pointer"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Mobile toggle */}
            <button
              className="lg:hidden text-brand-dark p-2"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="lg:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-gray-100">
            <div className="flex flex-col py-4 px-6">
              {navLinks.map((link, idx) => (
                <div key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href, link.isExternal)}
                    className="text-brand-dark font-bold py-3 border-b border-gray-100 flex justify-between items-center cursor-pointer hover:text-brand-teal transition-colors"
                  >
                    {link.title}
                    {link.sub.length > 0 && (
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpenDropdown(openDropdown === idx ? null : idx); }}
                        className="ml-2"
                      >
                        <ChevronDown size={16} className={`transition-transform ${openDropdown === idx ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </a>
                  {link.sub.length > 0 && openDropdown === idx && (
                    <div className="pl-4 pb-2 border-b border-gray-100">
                      {link.sub.map((s, si) => (
                        <a
                          key={si}
                          href={s.href}
                          onClick={(e) => scrollTo(e, s.href)}
                          className="block py-2 text-sm text-gray-500 hover:text-brand-teal transition-colors cursor-pointer"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center py-4 mt-2">
                <Headphones size={22} className="text-brand-teal mr-3" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-dark/60 uppercase">Call Us Now</span>
                  <span className="text-lg font-extrabold text-brand-dark">(+01)-793-7938</span>
                </div>
              </div>
              <Link href="#">
                <a className="bg-brand-dark text-white text-center font-bold py-3.5 rounded-full mt-2 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300">
                  Donate Now <ArrowUpRight size={16} className="ml-2" />
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};

export default Navbar;
