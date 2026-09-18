import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-[#DDB56A]/30 selection:text-[#0A2049] scroll-smooth">
      
      {/* NAVBAR */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <header className="relative bg-[#0A2049] pt-16 pb-20 lg:pt-28 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#DDB56A]/40 via-[#0A2049] to-[#0A2049]"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          
          {/* CREATIVE LOGO DISPLAY (LEFT SIDE) */}
          <div className="w-full md:w-5/12 lg:w-2/5 flex justify-center md:justify-end animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="relative group cursor-default">
              {/* Elegant Gold Glow Backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#DDB56A] to-[#f4dca6] rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
              
              {/* The Logo */}
              <img 
                src="/logo.jpeg" 
                alt="Tax Health Check Logo" 
                className="relative w-48 md:w-72 lg:w-[22rem] h-auto object-contain rounded-2xl border border-white/10 shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
              />
            </div>
          </div>

          {/* TEXT CONTENT (RIGHT SIDE) */}
          <div className="w-full md:w-7/12 lg:w-3/5 text-center md:text-left">
            <p className="text-[#DDB56A] font-bold tracking-widest uppercase text-xs mb-4 md:mb-6 flex items-center justify-center md:justify-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <span className="w-8 h-[1px] bg-[#DDB56A]/50 hidden md:block"></span>
              For business owners & professionals
              <span className="w-8 h-[1px] bg-[#DDB56A]/50 hidden sm:block md:hidden"></span>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
              Know every tax you owe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB56A] to-[#f4dca6]">
                Be compliant and penalty free in 30 days.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 max-w-2xl mx-auto md:mx-0">
              One short call with a tax specialist. Clear answers, plain language, no judgement.
            </p>
            
            {/* BUTTONS UPDATED TO INCLUDE FREE TOOL */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <Link href="/quiz" className="w-full sm:w-auto text-center border-2 border-[#DDB56A] text-[#DDB56A] hover:bg-[#DDB56A]/10 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300">
                Free Risk Check
              </Link>
              <a href="#book" className="group inline-flex items-center justify-center gap-3 bg-[#DDB56A] text-[#0A2049] font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#c9a358] hover:shadow-[0_8px_30px_rgba(221,181,106,0.3)] hover:-translate-y-1 w-full sm:w-auto">
                Book a Call
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
            <div className="text-center sm:text-left mt-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
              <p className="text-slate-400 text-sm font-medium">
                A <b className="text-white">30 minute call</b> for <b className="text-white">UGX 300,000</b>.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* 1.5 HOW IT WORKS */}
      <section className="py-20 bg-white relative z-20 max-w-[1440px] mx-auto rounded-2xl shadow-[0_10px_40px_-10px_rgba(10,32,73,0.1)] px-6 md:px-12 lg:px-16 mx-4 md:mx-12 lg:mx-auto -mt-16 border border-slate-100">
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
      <section className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-6xl mx-auto">
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

      {/* 3. FAQ SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
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

      {/* 5. BOOKING FORM */}
      <section id="book" className="py-24 px-6 md:px-12 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#DDB56A] font-bold text-xs uppercase tracking-wider block mb-2">Take Action</span>
            <h2 className="text-4xl font-bold text-[#0A2049] mb-4">One call, and the guessing ends.</h2>
            <p className="text-lg text-slate-600">Enter your details to proceed to secure payment. After payment, you will select your consultation slot on our calendar.</p>
          </div>
          <div className="bg-white text-slate-800 p-8 md:p-14 rounded-2xl shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(10,32,73,0.1)] transition-shadow duration-500 border border-slate-100">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0A2049] text-slate-300 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
          <div className="text-center mb-16 pb-16 border-b border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
              Understand Tax, Maximise Wealth.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <img src="/logo.jpeg" alt="Tax Health Check Logo" className="w-10 h-10 object-cover rounded group-hover:scale-105 transition-transform" />
                <span className="text-2xl font-bold text-white tracking-tight">
                  Tax Health <span className="text-[#DDB56A]">Check</span>
                </span>
              </Link>
              <p className="text-sm text-slate-400 mb-6">A product of Mukiibi, Namanya Advocates.</p>
            </div>

            <div className="md:text-right space-y-2 text-sm leading-relaxed">
              <p>WhatsApp: <a href="https://wa.me/256761109667" className="text-white hover:text-[#DDB56A] transition-colors">+256 761 109 667</a></p>
              <p>Email: <a href="mailto:taxhealthcheckug@gmail.com" className="text-white hover:text-[#DDB56A] transition-colors">taxhealthcheckug@gmail.com</a></p>
              <p className="pt-4">House No.1 Katongole Road, Froebel-Bukoto, Kampala</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}