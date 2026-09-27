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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const executeScroll = () => {
      const element = document.getElementById(targetId);
      if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition - 80; 
        const duration = 600; 
        let startTime: number | null = null;

        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeOutCubic(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

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
    <div className="min-h-screen bg-[#FCF9F4] font-sans text-slate-800 selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      <Navbar />

      {/* 1. PREMIUM FINTECH HERO SECTION */}
      <header className="relative bg-white pt-8 pb-12 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-200">
        
        {/* Architectural Background Grid for Precision/Finance Vibe */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Ambient Glowing Orbs for Depth */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#DDB56A]/15 via-[#DDB56A]/5 to-transparent rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A2049]/10 via-[#0A2049]/5 to-transparent rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-5 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-4">
          
          {/* Left Column: Structured Typography & Calls to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* High-End Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-[0_2px_10px_-3px_rgba(10,32,73,0.1)] animate-hero-badge relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#DDB56A]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDB56A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DDB56A]"></span>
              </span>
              <span className="text-[#0A2049] font-bold text-[10px] sm:text-xs tracking-widest uppercase relative z-10">
                Tax Health Check · Expert URA Advisory in Uganda
              </span>
            </div>

            {/* Headline with Clean Draw-Line */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A2049] leading-[1.12] tracking-tight animate-hero-title drop-shadow-sm">
              Stop guessing your <br className="hidden sm:block" />
              <span className="relative inline-block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB56A] to-[#b89047]">
                  URA tax exposure.
                </span>
                <span className="absolute bottom-1 left-0 w-full h-1.5 md:h-2 bg-[#DDB56A]/20 origin-left animate-draw-line rounded-full"></span>
              </span>
            </h1>

            {/* Subtitle with Glassmorphic Accent Panel */}
            <div className="relative animate-hero-desc">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DDB56A] to-[#DDB56A]/20 rounded-full hidden lg:block"></div>
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-light max-w-xl mx-auto lg:mx-0 lg:pl-6 bg-white/40 lg:bg-transparent p-4 lg:p-0 rounded-xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none border border-white/50 lg:border-none shadow-sm lg:shadow-none">
                Calculate your exact statutory risk in two minutes. Get a custom, step-by-step legal blueprint based on <strong className="font-bold text-[#0A2049]">Ugandan tax laws</strong> to protect your business and stay <strong className="font-bold text-[#0A2049]">penalty-free</strong>.
              </p>
            </div>

            {/* Launch Concession Ribbon */}
            <div className="flex justify-center lg:justify-start pt-2 animate-hero-offer">
              <div className="inline-flex items-center gap-2 bg-[#FCF9F4] border border-[#DDB56A]/40 text-[#0A2049] text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest px-4 py-2 rounded-lg shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDB56A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DDB56A]"></span>
              </span>
                Special Launch Offer: Save UGX 100,000
              </div>
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start animate-hero-buttons">
              <Link 
                href="/quiz" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A2049] hover:bg-[#132c5e] text-white font-bold text-sm px-7 py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(10,32,73,0.25)] hover:shadow-[0_10px_25px_rgba(10,32,73,0.35)] hover:-translate-y-1"
              >
                Start Free Risk Check
                <svg className="w-4 h-4 text-[#DDB56A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <a 
                href="#book" 
                onClick={(e) => handleSmoothScroll(e, "book")}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white border-2 border-[#0A2049]/10 hover:border-[#0A2049] text-[#0A2049] font-bold text-sm px-6 py-3.5 rounded-xl transition-all shadow-sm cursor-pointer group"
              >
                <span>Book Strategy Call</span>
                <span className="flex flex-col items-start border-l border-slate-200 group-hover:border-[#0A2049]/20 pl-3 transition-colors">
                  <span className="text-[10px] line-through text-slate-400 font-medium leading-none mb-0.5">UGX 400k</span>
                  <span className="text-xs text-[#DDB56A] font-extrabold leading-none">UGX 300k</span>
                </span>
              </a>
            </div>

            {/* Static Trust Checkmarks */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DDB56A]/10 text-[#DDB56A]">✓</span> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DDB56A]/10 text-[#DDB56A]">✓</span> Ugandan Tax Law</span>
              <span className="flex items-center gap-1.5"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#DDB56A]/10 text-[#DDB56A]">✓</span> 30-Day Resolution</span>
            </div>
          </div>

          {/* Right Column: High-End 3D Visual with Glassmorphic Floating Metrics */}
          <div className="lg:col-span-5 relative flex justify-center py-6 md:py-2">
            
            {/* Abstract Decorative Circles Behind Image */}
            <div className="absolute top-10 right-4 w-24 h-24 border border-[#DDB56A]/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute bottom-10 left-0 w-16 h-16 bg-[#0A2049]/5 rounded-full animate-pulse"></div>

            {/* 3D Illustration Container */}
            <div 
              className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(10,32,73,0.2)] border-8 border-white bg-white/50 backdrop-blur-sm"
              style={{ animation: 'float 6s ease-in-out infinite' }}
            >
              <img 
                src="/hero-3d-tax.png" 
                alt="Tax Expert and Client" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Metric 1: URA Compliance Badge (Frosted Glass Style) */}
            <div 
              className="absolute top-2 md:top-8 -right-4 md:-right-12 z-20 bg-white/80 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white flex items-center gap-3"
              style={{ animation: 'floatMetric 5s ease-in-out infinite' }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm shadow-inner">
                ✓
              </div>
              <div className="text-left">
                <p className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Status</p>
                <p className="text-sm md:text-base font-extrabold text-[#0A2049] leading-tight">100% Compliant</p>
              </div>
            </div>

            {/* Floating Metric 2: Resolution Guarantee Badge (Navy Premium Style) */}
            <div 
              className="absolute bottom-4 md:bottom-12 -left-4 md:-left-12 z-20 bg-[#0A2049]/95 backdrop-blur-md p-3 md:p-4 rounded-2xl shadow-[0_15px_40px_rgb(10,32,73,0.3)] border border-[#DDB56A]/30 flex items-center gap-3"
              style={{ animation: 'floatMetricReverse 6s ease-in-out infinite' }}
            >
              <div className="flex flex-col justify-center items-center">
                <span className="text-xl md:text-2xl font-black text-[#DDB56A] leading-none">0%</span>
              </div>
              <div className="text-left border-l border-white/10 pl-3 ml-1">
                <p className="text-[9px] md:text-[10px] text-slate-300 font-bold uppercase tracking-wider mb-0.5">Penalties</p>
                <p className="text-xs md:text-sm font-bold text-white leading-tight">Exposure Cleared</p>
              </div>
            </div>

          </div>

        </div>

        {/* Global Embedded Styles for Fluid Keyframe Animations */}
        <style jsx global>{`
          @keyframes drawLine {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(16px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
          }
          @keyframes floatMetric {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          @keyframes floatMetricReverse {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(8px); }
          }

          .animate-draw-line {
            animation: drawLine 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s both;
          }
          .animate-hero-badge {
            animation: fadeInUp 0.5s ease-out forwards;
          }
          .animate-hero-title {
            animation: fadeInUp 0.7s ease-out 0.1s both;
          }
          .animate-hero-desc {
            animation: fadeInUp 0.7s ease-out 0.2s both;
          }
          .animate-hero-offer {
            animation: fadeInUp 0.7s ease-out 0.3s both;
          }
          .animate-hero-buttons {
            animation: fadeInUp 0.7s ease-out 0.4s both;
          }
        `}</style>
      </header>

      {/* 2. THE PAIN */}
      <section className="py-10 md:py-20 px-5 lg:px-12 bg-[#FCF9F4] border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest block mb-1.5">If this sounds familiar</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-[#0A2049] mb-3 md:mb-4 leading-tight">You did not go into business to become a tax expert.</h2>
          <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-10 max-w-3xl leading-relaxed">
            You built something that works. The tax part just never came with a map.
          </p>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 mb-8 md:mb-10">
            {[
              "You are not sure which taxes actually apply to you.",
              "You file when you remember, and hope the dates were right.",
              "A message from URA makes your stomach drop before you open it.",
              "Penalties have crept in, and no one has explained how to stop them.",
              "You suspect you are paying the wrong amount, too much or too little."
            ].map((pain, i) => (
              <div key={i} className="flex gap-3 md:gap-4 items-start group">
                <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center mt-0.5 group-hover:bg-[#DDB56A] group-hover:border-[#DDB56A] transition-colors shadow-sm">
                  <span className="text-[#0A2049] font-bold text-xs md:text-sm group-hover:text-white">!</span>
                </div>
                <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#0A2049] text-sm md:text-base">{pain}</p>
              </div>
            ))}
          </div>
          <div className="bg-white border-l-4 border-[#0A2049] p-4 md:p-6 rounded-r-xl shadow-sm">
            <p className="text-[#0A2049] font-bold text-sm md:text-base leading-relaxed">
              None of this means you did anything wrong. It means you have been carrying a question alone that one clear call can answer.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-12 md:py-20 bg-white relative z-20 scroll-mt-16">
        <div className="max-w-[1300px] mx-auto px-5 lg:px-12">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest block mb-1.5">The Process</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2049]">How the Health Check Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 lg:gap-10 relative">
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-[2px] bg-slate-100 z-0"></div>
            {[
              { step: "01", title: "Take the Free Test", desc: "Use our diagnostic tool to calculate your current tax risk based on Ugandan laws." },
              { step: "02", title: "Book a Strategy Call", desc: "Our system routes you to Selar for payment, then to schedule your preferred meeting format." },
              { step: "03", title: "Get Your Blueprint", desc: "Receive a personalized, step-by-step action plan from our tax experts to become fully compliant." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-[#FCF9F4] p-6 md:p-8 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto bg-white border-2 border-[#DDB56A] rounded-full flex items-center justify-center text-base md:text-lg font-extrabold text-[#0A2049] mb-4 md:mb-5 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#0A2049] mb-1.5 md:mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR ENGAGEMENT MODEL */}
      <section id="services" className="py-12 md:py-20 px-5 lg:px-12 bg-[#FCF9F4] scroll-mt-16 border-y border-slate-200">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest block mb-1.5">Service Architecture</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2049] mb-2 md:mb-3">Strategic Advisory vs. Execution</h2>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
              We provide pure strategic advisory to empower your internal team, or full hands-on legal and accounting retainers for continuous management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
            
            {/* Model 1: Strategy Blueprint */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="bg-[#0A2049] text-white font-bold text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block shadow-sm">
                  Option 1 · Self-Execution
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0A2049] mb-2 md:mb-3">The Tax Strategy Blueprint</h3>
                <p className="text-xs md:text-sm text-slate-600 mb-5 md:mb-6 leading-relaxed">
                  Included with your 30-minute consultation. We diagnose exact tax exposures, calculate potential penalties under Ugandan law, and outline legal steps to clear assessments.
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> Direct assessment of your books and filings.</li>
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> Clear objection or waiver roadmap.</li>
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> You execute the steps yourself.</li>
                </ul>
              </div>
              <div className="pt-4 md:pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Consultation Fee</p>
                  <p className="text-lg md:text-xl font-extrabold text-[#0A2049]">UGX 300,000</p>
                </div>
                <a href="#book" onClick={(e) => handleSmoothScroll(e, "book")} className="bg-[#0A2049] text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-[#132c5e] transition-all shadow-md">
                  Book Session
                </a>
              </div>
            </div>

            {/* Model 2: Retainer */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="bg-[#0A2049] text-white font-bold text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 inline-block shadow-sm">
                  Option 2 · Dedicated Hand-Holding
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0A2049] mb-2 md:mb-3">Ongoing Tax & Bookkeeping</h3>
                <p className="text-xs md:text-sm text-slate-600 mb-5 md:mb-6 leading-relaxed">
                  For businesses that want our advocates to take full responsibility. We step in, balance ledgers, clean up documentation, negotiate assessments, and file monthly returns.
                </p>
                <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-slate-700 mb-6 font-medium">
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> Complete balancing of ledgers.</li>
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> Direct representation before URA.</li>
                  <li className="flex items-center gap-2"><span className="text-[#DDB56A] font-bold">✓</span> Monthly compliance guarantees.</li>
                </ul>
              </div>
              <div className="pt-4 md:pt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-0.5">Structure</p>
                  <p className="text-base md:text-lg font-extrabold text-[#0A2049]">Custom Retainer</p>
                </div>
                <a href="https://wa.me/256761109667" target="_blank" rel="noopener noreferrer" className="bg-[#DDB56A] text-[#0A2049] text-xs font-bold px-5 py-2.5 rounded-lg transition-all shadow-sm">
                  Discuss Retainer
                </a>
              </div>
            </div>

          </div>

          {/* Training Card */}
          <div className="bg-[#0A2049] p-6 md:p-8 rounded-2xl border border-[#0A2049] shadow-lg flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DDB56A]/20 to-transparent pointer-events-none"></div>
            <div className="space-y-2 md:space-y-3 relative z-10">
              <span className="bg-white/10 text-[#DDB56A] font-bold text-[8px] md:text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full inline-block">
                For Directors & HR
              </span>
              <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-white">Corporate Tax Training</h3>
              <p className="text-xs md:text-sm text-slate-300 max-w-xl leading-relaxed">
                Empower your finance team. We run customized training covering statutory withholding taxes, PAYE, VAT invoicing, and avoiding compliance traps.
              </p>
            </div>
            <a href="https://wa.me/256761109667" target="_blank" rel="noopener noreferrer" className="flex-none bg-[#DDB56A] text-[#0A2049] text-xs md:text-sm font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-lg transition-all relative z-10 shadow-md w-full md:w-auto text-center">
              Inquire Now
            </a>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION (Expanded to 7 Questions) */}
      <section id="faq" className="py-12 md:py-20 px-5 lg:px-12 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2049]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3 md:space-y-4">
            {[
              { q: "Do I need this if I already have an accountant?", a: "Yes. Many accountants handle basic filing but miss strategic tax planning. We provide an independent audit to ensure you aren't overpaying or risking hidden penalties." },
              { q: "Is my business information kept confidential?", a: "Absolutely. All consultations are protected under strict professional confidentiality agreements." },
              { q: "What happens if I already have a pending URA assessment?", a: "Bring it to the call. We will review the assessment notice and guide you on the exact steps for objecting, negotiating, or settling the amount." },
              { q: "What happens if you miss your URA filing deadline?", a: "Missing a filing deadline automatically accrues penalties. However, we can help assess the damage and guide you on potential waiver applications." },
              { q: "Are you affiliated with the Uganda Revenue Authority (URA)?", a: "No. We are a fully independent legal and tax advisory firm. Our primary duty is to protect your business interests and ensure you comply with the law without overpaying." },
              { q: "Can you help my business register for taxes if we are just starting?", a: "Yes. We guide new businesses through TIN registration, VAT threshold assessments, and setting up proper compliance structures from day one." },
            ].map((faq, i) => (
              <details key={i} className="group bg-[#FCF9F4] border border-slate-200 rounded-xl open:bg-white open:border-[#DDB56A]/50 transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-4 md:p-5 font-bold text-[#0A2049] text-sm md:text-base">
                  {faq.q}
                  <span className="transition group-open:rotate-180 flex-shrink-0 ml-4 text-[#DDB56A]">
                    <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5 text-slate-600 leading-relaxed text-xs md:text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-12 md:py-20 px-5 lg:px-12 bg-[#FCF9F4] border-y border-slate-200 scroll-mt-16">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest block mb-1.5">Success Stories</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2049]">Trusted by Ugandan Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Namara Chris-Warren", role: "Administrator, Jorowa Distillers Ltd", quote: "The Tax Health Check team sorted out our filing backlog, resolved our URA assessments, and fixed our bookkeeping for good." },
              { name: "Precious Kukunda", role: "Finance Manager, Popular Lab Supplies Ltd", quote: "They untangled our stock reorganisation and left us with a filing system that makes sense. Sharp, reliable tax expertise." },
              { name: "Grace Nankya", role: "Consultant", quote: "Clear, professional, and no complicated legal jargon. I finally understand my tax obligations without feeling judged." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[#DDB56A] mb-3 md:mb-4 text-base md:text-lg tracking-widest">★★★★★</div>
                  <p className="text-slate-700 font-medium italic mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-extrabold text-[#0A2049] text-sm">{testimonial.name}</p>
                  <p className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-widest mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM */}
      <section id="book" className="py-12 md:py-24 px-5 lg:px-12 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <span className="text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest block mb-1.5">Take Action</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0A2049] mb-2 md:mb-3">One call, and the guessing ends.</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto">Enter your details to proceed to secure Selar payment. After payment, our system routes you to schedule your preferred meeting format.</p>
          </div>
          <div className="bg-[#FCF9F4] text-slate-800 p-5 md:p-10 rounded-2xl shadow-sm border border-slate-200">
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}