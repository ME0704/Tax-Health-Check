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
        const distance = targetPosition - startPosition - 100; 
        const duration = 1000; 
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
    <div className="min-h-screen bg-[#FCF9F4] font-sans text-slate-800 selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      <Navbar />

{/* 1. BESPOKE SENIOR-LEVEL HERO SECTION */}
      <header className="relative bg-white pt-16 pb-24 lg:pt-28 lg:pb-32 overflow-hidden border-b border-slate-200 shadow-sm">
        
        {/* Architectural Background Elements (Navy & Gold) */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-bl from-[#DDB56A]/10 to-transparent rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#0A2049]/5 to-transparent rounded-full blur-[80px]"></div>
        </div>

        <div className="max-w-[1500px] mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Authoritative Legal Copy & Offers */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-7">
            <div className="inline-flex items-center gap-2.5 bg-[#FCF9F4] border border-slate-200 px-4 py-2 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#DDB56A] animate-pulse"></span>
              <span className="text-[#0A2049] font-bold text-xs tracking-widest uppercase">Expert Legal Tax Advisory</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-[#0A2049] leading-[1.12] tracking-tight">
              Stop guessing your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB56A] to-[#b89047]">
                URA tax exposure.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
              Take our interactive tax risk calculator based on Ugandan tax laws to instantly calculate your risk. Get a step-by-step legal blueprint to stay penalty-free.
            </p>

            {/* Clear, Professional Offer Tag */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-1.5 bg-[#DDB56A]/10 border border-[#DDB56A]/30 text-[#0A2049] text-[11px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
                <svg className="w-3.5 h-3.5 text-[#DDB56A]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                Special Launch Offer: Save UGX 100,000
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
              <Link 
                href="/quiz" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0A2049] hover:bg-[#132c5e] text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-xl hover:-translate-y-1"
              >
                Start Free Risk Check
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Link>
              <a 
                href="#book" 
                onClick={(e) => handleSmoothScroll(e, "book")}
                className="w-full sm:w-auto flex items-center justify-center gap-4 border-2 border-[#0A2049] text-[#0A2049] hover:bg-[#0A2049] hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-sm cursor-pointer group"
              >
                <span>Book Strategy Call</span>
                <span className="flex flex-col items-start border-l-2 border-[#0A2049]/20 group-hover:border-white/20 pl-4">
                  <span className="text-[10px] line-through text-slate-400 font-medium leading-none mb-1">UGX 400k</span>
                  <span className="text-xs text-[#DDB56A] font-extrabold leading-none">UGX 300k</span>
                </span>
              </a>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><span className="text-[#DDB56A] text-lg">✓</span> 100% Confidential</span>
              <span className="flex items-center gap-1.5"><span className="text-[#DDB56A] text-lg">✓</span> Ugandan Law</span>
              <span className="flex items-center gap-1.5"><span className="text-[#DDB56A] text-lg">✓</span> Clear Action Plan</span>
            </div>
          </div>

          {/* Right Column: Animated Premium Seal Presentation */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end py-12 lg:py-0">
            <div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center h-[400px]">
              
              {/* Animated Concentric Rings (Premium Legal Seal Effect) */}
              <div className="absolute w-[90%] pb-[90%] rounded-full border-2 border-[#DDB56A]/30 border-dashed animate-[spin_25s_linear_infinite]"></div>
              <div className="absolute w-[75%] pb-[75%] rounded-full border border-[#0A2049]/15 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Soft Gold Under-glow */}
              <div className="absolute w-64 h-64 bg-gradient-to-tr from-[#DDB56A] to-[#f4dca6] rounded-full blur-3xl opacity-40 animate-pulse"></div>
              
              {/* Main Logo Container (Floating) */}
              <div 
                className="relative z-10 bg-white p-3 sm:p-4 rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(10,32,73,0.3)] border border-slate-100 w-[75%] max-w-[320px] transform transition-transform hover:scale-105 duration-500"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              >
                <img 
                  src="/logo.jpeg" 
                  alt="Tax Health Check Logo" 
                  className="w-full h-auto object-contain rounded-[1.8rem]"
                />
              </div>

              {/* Inline Style for Floating Animation */}
              <style jsx>{`
                @keyframes float {
                  0% { transform: translateY(0px); }
                  50% { transform: translateY(-20px); }
                  100% { transform: translateY(0px); }
                }
              `}</style>
            </div>
          </div>

        </div>
      </header>

      {/* 2. THE PAIN */}
      <section className="py-24 px-6 lg:px-16 bg-white border-y border-slate-100">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">If this sounds familiar</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0A2049] mb-6 leading-tight">You did not go into business to become a tax expert.</h2>
          <p className="text-xl text-slate-600 mb-14 max-w-3xl leading-relaxed">
            You built something that works. The tax part just never came with a map.
          </p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mb-12">
            {[
              "You are not sure which taxes actually apply to you.",
              "You file when you remember, and hope the dates were right.",
              "A message from URA makes your stomach drop before you open it.",
              "Penalties have crept in, and no one has explained how to stop them.",
              "You suspect you are paying the wrong amount, too much or too little."
            ].map((pain, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FCF9F4] border border-slate-200 flex items-center justify-center mt-1 group-hover:bg-[#DDB56A] group-hover:border-[#DDB56A] transition-colors duration-300 shadow-sm">
                  <span className="text-[#0A2049] font-bold text-lg group-hover:text-white transition-colors">!</span>
                </div>
                <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#0A2049] transition-colors text-lg">{pain}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#FCF9F4] border-l-4 border-[#0A2049] p-8 rounded-r-2xl shadow-sm">
            <p className="text-[#0A2049] font-bold text-lg md:text-xl leading-relaxed">
              None of this means you did anything wrong. It means you have been carrying a question alone that one clear call can answer.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#FCF9F4] relative z-20 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">The Process</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2049]">How the Health Check Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-[2px] bg-slate-200 z-0"></div>
            {[
              { step: "01", title: "Take the Free Test", desc: "Use our 2-minute diagnostic tool to calculate your current tax risk and savings potential based on Ugandan tax laws." },
              { step: "02", title: "Book a Strategy Call", desc: "Our system routes you to Selar for payment, then to Cal.com to schedule your Zoom, Phone, or Physical meeting." },
              { step: "03", title: "Get Your Blueprint", desc: "Receive a personalized, step-by-step action plan from our tax experts to become fully compliant." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-sm hover:shadow-lg hover:border-[#DDB56A]/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-[#FCF9F4] border-2 border-[#DDB56A] rounded-full flex items-center justify-center text-xl font-extrabold text-[#0A2049] mb-6 shadow-md">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#0A2049] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

     {/* 4. OUR ENGAGEMENT MODEL */}
      <section id="services" className="py-24 px-6 lg:px-16 bg-[#FCF9F4] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Service Architecture</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2049] mb-4">Strategic Advisory vs. Execution</h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We provide pure strategic advisory to empower your internal team, or full hands-on legal and accounting retainers for businesses that require continuous management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Model 1: Strategy Blueprint */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <span className="bg-[#0A2049] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block shadow-sm">
                  Option 1 · Self-Execution
                </span>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A2049] mb-4">The Tax Strategy Blueprint</h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  Included with your 30-minute consultation. We diagnose your exact tax exposures, calculate potential penalties under Ugandan law, and outline the exact legal steps your business must take.
                </p>
                <ul className="space-y-4 text-sm text-slate-700 mb-10 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> Direct assessment of your books and URA filings.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> Clear objection or waiver roadmap.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> You execute the steps yourself or hand it to your accountant.
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Consultation Fee</p>
                  <p className="text-2xl font-extrabold text-[#0A2049]">UGX 300,000</p>
                </div>
                <a 
                  href="#book" 
                  onClick={(e) => handleSmoothScroll(e, "book")}
                  className="bg-[#0A2049] text-white text-xs font-bold px-8 py-4 rounded-xl hover:bg-[#132c5e] transition-all shadow-md"
                >
                  Book Session
                </a>
              </div>
            </div>

            {/* Model 2: Ongoing Hand-Holding Retainer */}
            <div className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <span className="bg-[#0A2049] text-white font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full mb-6 inline-block shadow-sm">
                  Option 2 · Dedicated Hand-Holding
                </span>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#0A2049] mb-4">Ongoing Tax & Bookkeeping</h3>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed">
                  For businesses that want our advocates to take full responsibility. We step in, balance your ledgers, clean up missing historical documentation, negotiate assessments, and file your monthly returns.
                </p>
                <ul className="space-y-4 text-sm text-slate-700 mb-10 font-medium">
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> Complete balancing of ledgers and VAT schedules.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> Direct representation before Uganda Revenue Authority.
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#DDB56A] font-bold text-lg">✓</span> Monthly compliance guarantees & zero unexpected fines.
                  </li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Structure</p>
                  <p className="text-xl font-extrabold text-[#0A2049]">Custom Monthly Retainer</p>
                </div>
                <a 
                  href="https://wa.me/256761109667?text=Hi%2C%20I%20am%20interested%20in%20discussing%20an%20Ongoing%20Tax%20and%20Bookkeeping%20Retainer%20for%20my%20business." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#DDB56A] text-[#0A2049] hover:bg-[#c9a358] text-xs font-bold px-8 py-4 rounded-xl transition-all shadow-md"
                >
                  Discuss Retainer
                </a>
              </div>
            </div>

          </div>

          {/* Dedicated Corporate & Executive Training Card (Navy Blue) */}
          <div className="bg-[#0A2049] p-8 md:p-12 rounded-[2rem] border border-[#0A2049] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DDB56A]/20 to-transparent pointer-events-none"></div>
            <div className="space-y-4 relative z-10">
              <span className="bg-white/10 border border-white/10 text-[#DDB56A] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full inline-block shadow-sm">
                For Company Directors & HR Executives
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white">Corporate & Executive Tax Training</h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Empower your finance managers, payroll officers, and executive team. We run customized on-site or virtual training covering statutory withholding taxes, PAYE obligations, VAT invoicing, and avoiding compliance traps.
              </p>
            </div>
            <a 
              href="https://wa.me/256761109667?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20Corporate%20Tax%20Training."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none bg-[#DDB56A] hover:bg-[#c9a358] text-[#0A2049] text-sm font-bold px-8 py-4 rounded-xl transition-all text-center relative z-10 shadow-lg"
            >
              Inquire on WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section id="faq" className="py-24 px-6 lg:px-16 bg-white border-y border-slate-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2049]">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-5">
            {[
              { q: "Do I need this if I already have an accountant?", a: "Yes. Many accountants handle basic filing but miss strategic tax planning. We provide an independent audit of your current setup to ensure you aren't overpaying or risking hidden penalties." },
              { q: "Is my business information kept confidential?", a: "Absolutely. All consultations are protected under strict professional confidentiality agreements." },
              { q: "What happens if I already have a pending URA assessment?", a: "Bring it to the call. We will review the assessment notice and guide you on the exact steps for objecting, negotiating, or settling the amount." },
              { q: "What happens if you miss your URA filing deadline?", a: "Missing a filing deadline automatically accrues penalties under the Tax Procedures Code Act. However, we can help assess the damage and guide you on potential waiver applications." },
              { q: "How long does it take to get my tax strategy blueprint?", a: "You receive your actionable tax strategy blueprint immediately during our 30-minute consultation. We outline the exact next steps before the call ends." },
              { q: "Can you handle the actual tax filing and bookkeeping for me?", a: "Yes. While the initial strategy call provides the blueprint, we offer a dedicated hand-holding retainer for businesses that want us to take full monthly responsibility for ledger balancing and URA filings." }
            ].map((faq, i) => (
              <details key={i} className="group bg-[#FCF9F4] border border-slate-200 rounded-2xl open:bg-white open:border-[#DDB56A]/50 open:shadow-sm transition-all duration-300">
                <summary className="flex items-center justify-between cursor-pointer p-6 lg:p-8 font-bold text-[#0A2049] text-lg">
                  {faq.q}
                  <span className="transition group-open:rotate-180 flex-shrink-0 ml-4 text-[#DDB56A]">
                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-slate-600 leading-relaxed text-sm lg:text-base">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 px-6 lg:px-16 bg-[#FCF9F4] scroll-mt-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0A2049]">Trusted by Ugandan Businesses</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Namara Chris-Warren", role: "Administrator, Jorowa Distillers Ltd", quote: "The Tax Health Check team sorted out our filing backlog, resolved our URA assessments, and fixed our bookkeeping for good. Exactly the tax clarity we needed." },
              { name: "Precious Kukunda", role: "Finance Manager, Popular Lab Supplies Ltd", quote: "The Tax Health Check team untangled our stock reorganisation and left us with a filing system that finally makes sense. Sharp, reliable tax expertise, highly recommended." },
              { name: "Grace Nankya", role: "Consultant", quote: "Clear, professional, and no complicated legal jargon. I finally understand my tax obligations without feeling judged." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[#DDB56A] mb-6 text-xl tracking-widest">★★★★★</div>
                  <p className="text-slate-700 font-medium italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="border-t border-slate-100 pt-6">
                  <p className="font-extrabold text-[#0A2049]">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOOKING FORM */}
      <section id="book" className="py-24 px-6 lg:px-16 bg-white border-t border-slate-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Take Action</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#0A2049] mb-4">One call, and the guessing ends.</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Enter your details to proceed to secure Selar payment. After payment, our system routes you to our automated calendar to schedule your preferred meeting format.</p>
          </div>
          <div className="bg-[#FCF9F4] text-slate-800 p-8 md:p-14 rounded-[2rem] shadow-sm border border-slate-200">
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}