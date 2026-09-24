"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsOpen(false);

    const executeScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 80;
        const duration = 600; // Sped up from 1000ms to 600ms
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          // easeOutCubic: Snappy instant start, smooth deceleration
          const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        // The new easing math formula
        const easeOutCubic = (t: number, b: number, c: number, d: number) => {
          t /= d;
          t--;
          return c * (t * t * t + 1) + b;
        };

        requestAnimationFrame(animation);
      }
    };

    if (pathname !== "/") {
      router.push("/");
      setTimeout(executeScroll, 300);
    } else {
      executeScroll();
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0A2049] border-b border-white/10 shadow-md transition-all duration-300">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Transparent Logo Integration */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <img 
            src="/logo.png" 
            alt="Tax Health Check Icon" 
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform group-hover:scale-105"
          />
          <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Tax Health <span className="text-[#DDB56A]">Check</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 font-semibold text-sm">
          <Link href="/quiz" className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300">
            Free Risk Check
          </Link>
          <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            How It Works
          </a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            Services
          </a>
          <a href="#faq" onClick={(e) => handleSmoothScroll(e, "faq")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            FAQ
          </a>
          <a href="#testimonials" onClick={(e) => handleSmoothScroll(e, "testimonials")} className="text-slate-300 hover:text-[#DDB56A] transition-colors duration-300 cursor-pointer">
            Testimonials
          </a>
          <a href="#book" onClick={(e) => handleSmoothScroll(e, "book")} className="bg-[#DDB56A] hover:bg-[#c9a358] text-[#0A2049] px-6 py-2.5 rounded-md transition-all duration-300 shadow-md cursor-pointer">
            Book a Call
          </a>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
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

      {isOpen && (
        <div className="md:hidden bg-[#0A2049] border-b border-white/10 px-6 py-6 space-y-4 shadow-xl">
          <Link href="/quiz" onClick={() => setIsOpen(false)} className="block text-[#DDB56A] font-bold py-2 border-b border-white/10">Free Tax Risk Check</Link>
          <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "how-it-works")} className="block text-slate-200 py-2 border-b border-white/10">How It Works</a>
          <a href="#services" onClick={(e) => handleSmoothScroll(e, "services")} className="block text-slate-200 py-2 border-b border-white/10">Services & Training</a>
          <a href="#faq" onClick={(e) => handleSmoothScroll(e, "faq")} className="block text-slate-200 py-2 border-b border-white/10">FAQ</a>
          <a href="#book" onClick={(e) => handleSmoothScroll(e, "book")} className="block text-center bg-[#DDB56A] text-[#0A2049] font-bold py-3 rounded-xl mt-4">Book a Call</a>
        </div>
      )}
    </nav>
  );
}