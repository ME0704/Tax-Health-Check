"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Section: Fixed size box with zoomed-in image */}
        <Link href="/" className="flex items-center gap-2.5 md:gap-3 group">
          <div className="bg-[#0A2049] w-9 h-9 md:w-11 md:h-11 rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 border border-[#0A2049] overflow-hidden flex items-center justify-center">
            <img 
              src="/logo.png" 
              alt="Tax Health Check" 
              className="w-full h-full object-cover scale-[0.9] group-hover:scale-[0.95] transition-transform duration-300" 
            />
          </div>
          <span className="text-[1.1rem] sm:text-xl md:text-2xl font-black text-[#0A2049] tracking-tight">
            Tax Health <span className="text-[#DDB56A]">Check</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
        <Link href="/quiz" className="text-sm font-bold text-slate-600 hover:text-[#DDB56A] transition-colors">Free Risk Check</Link>
        <a href="/#how-it-works" className="text-sm font-bold text-slate-600 hover:text-[#DDB56A] transition-colors">How It Works</a>
        <a href="/#services" className="text-sm font-bold text-slate-600 hover:text-[#DDB56A] transition-colors">Services</a>
        <Link href="/blog" className="text-sm font-bold text-[#0A2049] hover:text-[#DDB56A] transition-colors">Blog</Link>
        <a href="/#faq" className="text-sm font-bold text-slate-600 hover:text-[#DDB56A] transition-colors">FAQ</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <a 
            href="#book" 
            className="bg-[#DDB56A] text-[#0A2049] hover:bg-[#cba45a] hover:shadow-lg px-6 py-2.5 rounded-xl text-sm font-extrabold transition-all shadow-md hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden p-2.5 bg-[#0A2049] text-[#DDB56A] rounded-lg shadow-sm active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-5 flex flex-col gap-4">
          <Link href="/quiz" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 py-2 border-b border-slate-50">Free Risk Check</Link>
          <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 py-2 border-b border-slate-50">How It Works</a>
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 py-2 border-b border-slate-50">Services</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 py-2 border-b border-slate-50">FAQ</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-slate-700 py-2 border-b border-slate-50">Testimonials</a>
          <a 
            href="#book" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="bg-[#0A2049] text-[#DDB56A] text-center py-3.5 rounded-xl text-sm font-extrabold mt-2 shadow-md"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}