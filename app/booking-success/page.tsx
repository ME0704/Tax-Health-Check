"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function BookingSuccessPage() {
  // Load the Calendly / Cal.com external widget script
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.setAttribute("src", "https://assets.calendly.com/assets/external/widget.js");
    head?.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      
      {/* NAVBAR */}
      <nav className="w-full bg-[#0A2049]/95 border-b border-white/10 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Tax Health Check Logo" className="w-12 h-12 object-cover rounded" />
            <span className="text-xl font-bold text-white tracking-tight">
              Tax Health <span className="text-[#DDB56A]">Check</span>
            </span>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-24 h-24 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-md">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2049] mb-4">Payment Confirmed</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your details have been securely received. Please select a date and time below for your 30-minute strategic consultation.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            {/* 
              CALENDAR EMBED
              Once your friend sends you her Cal.com link (e.g. "cal.com/tax-health-consultation"), 
              replace the data-url below with it.
            */}
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/YOUR_USERNAME?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: "320px", height: "700px" }}
            ></div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0A2049] text-slate-300 border-t border-white/10 mt-auto">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 text-center text-sm">
          <p>Need immediate help? WhatsApp us at <a href="https://wa.me/256761109667" className="text-white hover:text-[#DDB56A]">+256 761 109 667</a></p>
        </div>
      </footer>
    </div>
  );
}