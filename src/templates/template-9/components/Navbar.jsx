import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 max-w-[1400px] h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="text-black font-black text-3xl md:text-4xl tracking-tighter uppercase leading-none border-4 border-black px-4 py-1 hover:bg-black hover:text-white transition-all">
          CRA
        </Link>

        <div className="hidden lg:flex items-center gap-12">
            <Link href="#" className="text-black text-xs font-black uppercase tracking-[0.4em] hover:text-red-600 transition-colors">Emergency</Link>
            <Link href="#" className="text-black text-xs font-black uppercase tracking-[0.4em] hover:text-red-600 transition-colors">Impact</Link>
            <Link href="#" className="text-black text-xs font-black uppercase tracking-[0.4em] hover:text-red-600 transition-colors">Network</Link>
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden sm:block text-black font-black text-xs uppercase tracking-[0.4em] hover:text-red-600 transition-colors">
            Account
          </button>
          <button className="bg-black text-white px-8 py-3 md:py-4 font-black text-xs uppercase tracking-[0.4em] hover:bg-red-600 transition-all active:scale-95">
            Donate
          </button>
          <button className="lg:hidden text-black">
            <Menu size={32} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
