"use client";

import Link from "next/link";
import { useEffect } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function BookingSuccessPage() {
  useEffect(() => {
    // Load Cal.com embed script dynamically
    (function (C, A, L) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      // @ts-ignore
      C.Cal = C.Cal || function () {
        // @ts-ignore
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = [];
          let js = d.createElement("script");
          js.async = true;
          js.src = A;
          d.head.appendChild(js);
          cal.loaded = true;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    window.Cal("init", { origin: "https://cal.com" });

    // @ts-ignore
    window.Cal("inline", {
      elementOrSelector: "#cal-inline-embed",
      calLink: "princeemmatest2557/30min", 
      layout: "month_view"
    });

    // @ts-ignore
    window.Cal("ui", {
      styles: { branding: { brandColor: "#0A2049" } },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-[#0A2049]/95 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Tax Health <span className="text-[#DDB56A]">Check</span>
          </Link>
          <Link href="/" className="bg-[#DDB56A] text-[#0A2049] px-4 py-2 rounded-md font-semibold text-xs">
            Home
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-md">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2049] mb-2">Payment Confirmed</h1>
          <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-xl mx-auto">
            Your details have been received. Please select your 30-minute consultation slot below.
          </p>
          
          {/* CAL.COM INLINE EMBED CONTAINER */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden p-4 mb-8">
            <div id="cal-inline-embed" style={{ width: "100%", height: "700px", overflow: "scroll" }}></div>
          </div>

          {/* RETURN HOME BUTTON AFTER MEETING SETUP */}
          <div className="pb-12">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-3 bg-[#0A2049] text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-[#132c5e] transition-all shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Return to Home Screen
            </Link>
          </div>
        </div>
      </main>

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

      {/* FOOTER */}
      <footer className="bg-[#0A2049] text-slate-300 border-t border-white/10 mt-auto py-8 text-center text-xs">
        <p>Tax Health Check — Mukiibi, Namanya Advocates.</p>
      </footer>
    </div>
  );
}