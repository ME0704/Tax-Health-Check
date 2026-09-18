import Link from "next/link";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import WhatsAppButton from "@/components/WhatsAppButton";

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
            { step: "03", title: "Get Your Blueprint", desc: "Receive a personalized, step-by-step action plan to become fully compliant with a written up plan sent to you within 24 hours." }
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

      {/* 3. THE OFFER STACK */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">What you get</span>
            <h2 className="text-4xl font-bold text-blue-950 mt-3">The Tax Health Check</h2>
            <p className="text-lg text-slate-600 mt-4">One call. One diagnosis. A clear picture of where you stand.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left: Stack */}
            <div className="lg:col-span-3 space-y-6">
              {[
                { title: "A focused 30 minute call", desc: "with a tax specialist, online, wherever you are." },
                { title: "A quick diagnosis of your business.", desc: "What you owe depends on the nature of your business, or on what you earn as an individual." },
                { title: "Every tax you are liable for, named.", desc: "Income tax, VAT, PAYE, withholding tax, local service tax, rental tax, whichever apply to you." },
                { title: "Straight answers to your questions.", desc: "Nothing is too basic to ask." },
                { title: "A one page action plan.", desc: "Written up and sent to you within 24 hours of the call." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 text-amber-500 mt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-950 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
              {/* Right: Pricing Card */}
            <div className="lg:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Everything above, one payment</div>
              <div className="text-5xl font-extrabold text-blue-950 mb-2">UGX 300,000</div>
              <p className="text-slate-600 mb-8 pb-8 border-b border-slate-200">The consultation call fee.</p>

              {/* <div className="mb-8">
                <h4 className="font-bold text-blue-950 mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                  Pay by Mobile Money
                </h4>
              </div>

              <a href="#book" className="block text-center bg-blue-950 text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition-colors">
                Book Your Slot
              </a> */}
            </div>
            
          </div>
        </div>
      </section>

      {/* 4. THE GUARANTEE */}
      <section className="py-24 px-6 bg-blue-950 text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.5l7.5 3v6c0 4.6-3.2 8.4-7.5 9.8C7.7 19.9 4.5 16.1 4.5 11.5v-6z"/><path d="M8.8 12.2l2.2 2.2 4.4-4.6"/></svg>
          </div>
          <span className="text-amber-500 font-bold text-sm uppercase tracking-wider">The guarantee</span>
          <h2 className="text-4xl font-bold mt-3 mb-6">The risk sits with us.</h2>
          <p className="text-2xl font-bold text-blue-100 mb-6">
            A tax compliant business that is seamless to run within 30 days.
          </p>
          <div className="text-blue-200 text-lg space-y-4 leading-relaxed max-w-2xl mx-auto">
            <p>Follow the plan we agree on, and within 30 days your filings are in order and the tax side of your business feels routine.</p>
            <p>If 30 days pass and you are not there, we keep working with you for thirty more days at no extra cost.</p>
          </div>
        </div>
      </section>

      {/* 5. SCARCITY & BONUSES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Capacity */}
          <div>
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Our capacity</span>
            <h2 className="text-3xl font-bold text-blue-950 mt-3 mb-6">We take 20 clients a month.</h2>
            <div className="text-slate-600 space-y-4 leading-relaxed">
              <p>Every health check is done personally by our team of experts. Accessing your business and writing your plan takes real hours, and those hours are finite.</p>
              <p>When a month is full we say so and book you into the next one. No countdown clocks, ever. If a place is open, you can have it today.</p>
            </div>
          </div>

          {/* Bonuses */}
          <div>
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Included as well</span>
            <h2 className="text-3xl font-bold text-blue-950 mt-3 mb-6">Two things for the week after.</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-blue-950 mb-2">The Uganda Tax Filing Calendar</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Every filing date that applies to a business like yours, on one page, so the deadlines live on your wall instead of in your head.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-700 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-blue-950 mb-2">The URA Letter First Response Guide</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">What to do in the first 48 hours when a URA letter or audit notice arrives. Most of the damage happens in the silence before people reply.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. PROOF (TESTIMONIALS) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">In their words</span>
            <h2 className="text-4xl font-bold text-blue-950 mt-3">What clients say.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="text-amber-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                "The Tax Health Check team sorted out our filing backlog, resolved our URA assessments, and fixed our bookkeeping for good. Exactly the tax clarity we needed."
              </p>
              <div className="font-bold text-blue-950">Namara Chris-Warren</div>
              <div className="text-sm text-slate-500">Administrator, Jorowa Distillers Ltd</div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <div className="text-amber-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p className="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                "They untangled our stock reorganisation and left us with a filing system that finally makes sense. Sharp, reliable tax expertise, highly recommended."
              </p>
              <div className="font-bold text-blue-950">Precious Kukunda</div>
              <div className="text-sm text-slate-500">Finance Manager, Popular Lab Supplies Ltd</div>
            </div>
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
              <p>P.O. Box 214, Ntinda, Kampala</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-blue-900/50 text-xs text-blue-400/60 text-center max-w-3xl mx-auto leading-relaxed">
            This page describes our consultation service and tax advice for your specific situation. Advice given during your call is based on your specific circumstances under Ugandan law.
          </div>
        </div>
      </footer>
      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}