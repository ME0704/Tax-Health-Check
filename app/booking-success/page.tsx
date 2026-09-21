"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BookingSuccessPage() {
  const [isCalendarLoaded, setIsCalendarLoaded] = useState(false);

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

    // Dismiss loading overlay smoothly once the calendar initializes
    const timer = setTimeout(() => {
      setIsCalendarLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      
      {/* NAVBAR */}
      <Navbar />

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
          
          {/* CAL.COM INLINE EMBED CONTAINER WITH LOADING STATE */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden p-6 relative min-h-[700px] flex flex-col items-center justify-center mb-8">
            {!isCalendarLoaded && (
              <div className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center p-8 space-y-4">
                <div className="w-12 h-12 border-4 border-[#0A2049] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-lg font-bold text-[#0A2049]">Loading your scheduling calendar...</p>
                <p className="text-xs sm:text-sm text-slate-500 max-w-md leading-relaxed">
                  Please hold on for a moment while we load your secure consultation slot. You will be able to select your preferred date and time shortly.
                </p>
              </div>
            )}
            <div id="cal-inline-embed" style={{ width: "100%", height: "700px" }}></div>
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
      <Footer />
      
    </div>
  );
}