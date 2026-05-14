import React from "react";
import Link from "next/link";
import { Search, User, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 max-w-[1200px] h-20 flex items-center justify-between">
        <Link href="/" className="text-orange-500 font-black text-2xl tracking-tighter">
          CHARIFUND
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="#" className="text-white/60 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Campaigns</Link>
          <Link href="#" className="text-white/60 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">Events</Link>
          <Link href="#" className="text-white/60 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors">How it Works</Link>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white/60 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-orange-500 text-black px-6 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-orange-400 transition-all active:scale-95">
            <User size={14} />
            <span>Sign In</span>
          </button>
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
