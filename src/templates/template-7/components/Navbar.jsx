import React from "react";
import Link from "next/link";
import { Search, Globe, LogIn } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-[1200px] h-24 flex items-center justify-between">
        <div className="flex items-center gap-12">
            <Link href="/" className="text-slate-900 font-black text-3xl tracking-tighter flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white rotate-12 shadow-lg shadow-indigo-200">
                    <span className="rotate-[-12deg]">C</span>
                </div>
                <span>Charifund</span>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
                <Link href="#" className="text-slate-500 hover:text-indigo-600 text-[12px] font-bold uppercase tracking-widest transition-colors">Causes</Link>
                <Link href="#" className="text-slate-500 hover:text-indigo-600 text-[12px] font-bold uppercase tracking-widest transition-colors">Volunteers</Link>
                <Link href="#" className="text-slate-500 hover:text-indigo-600 text-[12px] font-bold uppercase tracking-widest transition-colors">About</Link>
            </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-slate-400 hover:text-indigo-600 transition-colors">
            <Search size={22} />
          </button>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <button className="flex items-center gap-2 text-slate-900 font-black text-[12px] uppercase tracking-widest hover:text-indigo-600 transition-colors">
            <LogIn size={18} className="text-indigo-600" />
            <span>Login</span>
          </button>
          <button className="hidden sm:block bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-[12px] uppercase tracking-widest shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
            Donate Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
