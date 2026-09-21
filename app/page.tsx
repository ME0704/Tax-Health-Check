"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  // Custom slower smooth scroll (1 second duration with smooth easing)
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    const executeScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 90; // Offset for sticky navbar
        const duration = 1000; // 1000ms = 1 second
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
      setTimeout(executeScroll, 300);
    } else {
      executeScroll();
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      
      {/* NAVBAR */}
      <Navbar />

      {/* 1. 3-COLUMN HERO SECTION (REDUCED LOGO SIZE & ANIMATED CTAs) */}
      <header className="relative bg-[#0A2049] pt-20 pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
        {/* Luxury Ambient Lighting */}
        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DDB56A]/40 via-[#0A2049] to-[#0A2049] pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Problem & Hook */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full text-[#DDB56A] font-semibold text-xs tracking-wide uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#DDB56A] animate-pulse"></span>
              Backed by Mukiibi, Namanya Advocates
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
              Know every tax you owe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB56A] via-[#f4dca6] to-[#DDB56A]">
               Be Compliant and Penalty-free in 30 days.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
              One strategic session with top tax advocates. Clear answers under Ugandan law, plain language, and absolute legal confidentiality.
            </p>
          </div>

          {/* Center Column: The Logo (Optimized & Balanced Size) */}
          <div className="lg:col-span-4 flex justify-center py-4 lg:py-0">
            <div className="relative group cursor-default w-48 sm:w-56 lg:w-64">
              {/* Elegant Gold Glow Backdrop */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#DDB56A] to-[#f4dca6] rounded-3xl blur-2xl opacity-25 group-hover:opacity-45 transition duration-700"></div>
              
              {/* The Logo Image */}
              <img 
                src="/logo.jfif" 
                alt="Tax Health Check Logo" 
                className="relative w-full h-auto object-contain rounded-2xl border border-white/15 shadow-2xl transform group-hover:-translate-y-2 transition duration-500 bg-[#0A2049]/60 backdrop-blur-md p-2 mx-auto"
              />
            </div>
          </div>

          {/* Right Column: CTAs & Trust Metrics */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <p className="text-xs font-bold tracking-widest uppercase text-[#DDB56A]">
              For Business Owners & Professionals
            </p>
            
            <p className="text-sm text-slate-300 leading-relaxed">
              Stop guessing your URA obligations. Get an independent compliance audit and a crystal-clear action plan.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <Link 
                href="/quiz" 
                className="w-full text-center bg-[#DDB56A] hover:bg-[#c9a358] text-[#0A2049] font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                Start Free Risk Check
              </Link>
              <a 
                href="#book" 
                onClick={(e) => handleSmoothScroll(e, "book")}
                className="w-full text-center border border-white/20 hover:border-[#DDB56A] text-white hover:text-[#DDB56A] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl transition-all duration-300 backdrop-blur-sm cursor-pointer"
              >
                Book Strategy Call At UGX 300,000
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-lg font-bold text-white">30 Min</p>
                <p className="text-[10px] text-slate-400">Focused Audit</p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#DDB56A]">100%</p>
                <p className="text-[10px] text-slate-400">Privilege</p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">30 Days</p>
                <p className="text-[10px] text-slate-400">Guarantee</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 1.5 HOW IT WORKS */}
      <section id="how-it-works" className="py-20 bg-white relative z-20 max-w-[1600px] mx-auto rounded-2xl shadow-[0_10px_40px_-10px_rgba(10,32,73,0.1)] px-6 md:px-12 lg:px-16 mx-4 md:mx-12 lg:mx-auto -mt-16 border border-slate-100 scroll-mt-28">
        <div className="text-center mb-12">
          <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">The Process</span>
          <h2 className="text-3xl font-bold text-[#0A2049]">How the Health Check Works</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-slate-100 z-0"></div>
          {[
            { step: "01", title: "Take the Free Test", desc: "Use our 2-minute diagnostic tool to calculate your current tax risk and savings potential." },
            { step: "02", title: "Book a Strategy Call", desc: "Schedule a 30-minute one-on-one session with our URA-aware tax specialists." },
            { step: "03", title: "Get Your Blueprint", desc: "Receive a personalized, step-by-step action plan to become fully compliant." }
          ].map((item, i) => (
            <div key={i} className="relative z-10 bg-white text-center group">
              <div className="w-16 h-16 mx-auto bg-slate-50 border-2 border-slate-200 rounded-full flex items-center justify-center text-xl font-extrabold text-[#0A2049] mb-6 group-hover:border-[#DDB56A] group-hover:bg-[#DDB56A]/10 transition-all duration-500">
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-[#0A2049] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed px-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE PAIN */}
      <section className="py-24 px-6 lg:px-16 bg-slate-50">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">If this sounds familiar</span>
          <h2 className="text-4xl font-bold text-[#0A2049] mb-6 leading-tight">You did not go into business to become a tax expert.</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed">
            You built something that works. The tax part just never came with a map.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-12">
            {[
              "You are not sure which taxes actually apply to you.",
              "You file when you remember, and hope the dates were right.",
              "A message from URA makes your stomach drop before you open it.",
              "Penalties have crept in, and no one has explained how to stop them.",
              "You suspect you are paying the wrong amount, too much or too little."
            ].map((pain, i) => (
              <div key={i} className="flex gap-5 items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded bg-white shadow-sm border border-slate-200 flex items-center justify-center mt-1 group-hover:border-[#DDB56A] group-hover:bg-[#DDB56A]/10 transition-colors duration-300">
                  <span className="text-[#0A2049] font-bold">!</span>
                </div>
                <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#0A2049] transition-colors">{pain}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border-l-4 border-[#0A2049] p-8 rounded-r-lg shadow-sm hover:shadow-md transition-shadow">
            <p className="text-[#0A2049] font-medium text-lg">
              None of this means you did anything wrong. It means you have been carrying a question alone that one clear call can answer.
            </p>
          </div>
        </div>
      </section>

            {/* 4. THE GUARANTEE */}
      <section className="py-24 px-6 md:px-12 bg-[#0A2049] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 mx-auto mb-8 border-2 border-[#DDB56A] rounded-full flex items-center justify-center text-[#DDB56A] shadow-[0_0_30px_rgba(221,181,106,0.2)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5l7.5 3v6c0 4.6-3.2 8.4-7.5 9.8C7.7 19.9 4.5 16.1 4.5 11.5v-6z"/><path d="M8.8 12.2l2.2 2.2 4.4-4.6"/></svg>
          </div>
          <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-3">The guarantee</span>
          <h2 className="text-4xl font-bold mb-6">The risk sits with us.</h2>
          <p className="text-2xl font-bold text-white mb-8 leading-tight">
            A tax compliant business that is seamless to run within 30 days.
          </p>
          <div className="text-slate-300 text-lg space-y-4 leading-relaxed max-w-4xl mx-auto">
            <p>Follow the plan we agree on, and within 30 days your filings are in order and the tax side of your business feels routine. If 30 days pass and you are not there, we keep working with you for thirty more days at no extra cost.</p>
          </div>
        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section id="faq" className="py-24 px-6 lg:px-16 bg-white border-t border-slate-100 scroll-mt-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A2049]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do I need this if I already have an accountant?", a: "Yes. Many accountants handle basic filing but miss strategic tax planning. We provide an independent audit of your current setup to ensure you aren't overpaying or risking hidden penalties." },
              { q: "Is my business information kept confidential?", a: "Absolutely. As a product of Mukiibi, Namanya Advocates, all consultations are protected under strict professional confidentiality agreements." },
              { q: "What happens if I already have a pending URA assessment?", a: "Bring it to the call. We will review the assessment notice and guide you on the exact steps for objecting, negotiating, or settling the amount." }
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-lg open:bg-white open:ring-2 open:ring-[#DDB56A]/50 transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[#0A2049] text-lg">
                  {faq.q}
                  <span className="transition group-open:rotate-180 flex-shrink-0 ml-4">
                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 lg:px-16 bg-slate-50 border-t border-slate-100 scroll-mt-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0A2049]">Trusted by Ugandan Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Namara Chris-Warren", role: "Administrator, Jorowa Distillers Ltd", quote: "The Tax Health Check team sorted out our filing backlog, resolved our URA assessments, and fixed our bookkeeping for good. Exactly the tax clarity we needed." },
              { name: "Precious Kukunda", role: "Finance Manager, Popular Lab Supplies Ltd", quote: "The Tax Health Check team untangled our stock reorganisation and left us with a filing system that finally makes sense. Sharp, reliable tax expertise, highly recommended." },
              { name: "Grace Nankya", role: "Consultant", quote: "Clear, professional, and no complicated legal jargon. I finally understand my tax obligations without feeling judged." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[#DDB56A] mb-4 text-lg">★★★★★</div>
                  <p className="text-slate-700 font-medium italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-bold text-[#0A2049]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 5. BOOKING FORM */}
      <section id="book" className="py-24 px-6 lg:px-16 bg-white border-t border-slate-100 scroll-mt-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Take Action</span>
            <h2 className="text-4xl font-bold text-[#0A2049] mb-4">One call, and the guessing ends.</h2>
            <p className="text-lg text-slate-600">Enter your details to proceed to secure payment. After payment, you will select your consultation slot on our calendar.</p>
          </div>
          <div className="bg-slate-50 text-slate-800 p-8 md:p-14 rounded-2xl shadow-xl border border-slate-200">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}