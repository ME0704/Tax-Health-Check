"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Custom slower smooth scroll (1 second duration with smooth easing)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    const executeScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 90; // Offset for sticky navbar
        const duration = 1000; // 1000ms = 1 second (slower, premium feel)
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
      }
    };

    if (pathname !== "/") {
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(executeScroll, 300);
    } else {
      executeScroll();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A2049]/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Strictly Tax Health Check */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-bold text-white tracking-tight">
            Tax Health <span className="text-[#DDB56A]">Check</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <Link href="/quiz" className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300">
            Free Risk Check
          </Link>
          <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            How It Works
          </a>
          <a href="#faq" onClick={(e) => handleSmoothScroll(e, "faq")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            FAQ
          </a>
          <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, "testimonials")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            Testimonials
          </a>
          <a href="#book" onClick={(e) => handleSmoothScroll(e, "book")} className="bg-[#DDB56A] hover:bg-[#c9a358] text-[#0A2049] px-6 py-2.5 rounded-md transition-all duration-300 shadow-[0_4px_14px_0_rgba(221,181,106,0.39)] hover:shadow-[0_6px_20px_rgba(221,181,106,0.23)] hover:-translate-y-0.5 cursor-pointer">
            Book a Call
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2049] border-b border-white/10 px-6 py-6 space-y-4 shadow-xl">
          <Link 
            href="/quiz" 
            onClick={() => setIsOpen(false)}
            className="block text-[#DDB56A] font-bold text-base py-2 border-b border-white/10"
          >
            Free Tax Risk Check
          </Link>
          <a 
            href="#how-it-works" 
            onClick={(e) => handleSmoothScroll(e, "how-it-works")}
            className="block text-slate-200 hover:text-[#DDB56A] font-medium text-base py-2 border-b border-white/10 cursor-pointer"
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleSmoothScroll(e, "faq")}
            className="block text-slate-200 hover:text-[#DDB56A] font-medium text-base py-2 border-b border-white/10 cursor-pointer"
          >
            FAQ
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleSmoothScroll(e, "testimonials")}
            className="block text-slate-200 hover:text-[#DDB56A] font-medium text-base py-2 border-b border-white/10 cursor-pointer"
          >
            Testimonials
          </a>
          <a 
            href="#book" 
            onClick={(e) => handleSmoothScroll(e, "book")}
            className="block text-center bg-[#DDB56A] text-[#0A2049] font-bold py-3 rounded-xl text-base shadow-md mt-4 cursor-pointer"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}