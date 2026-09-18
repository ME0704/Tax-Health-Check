"use client";

import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // BYPASS PAYMENT FOR TESTING: Redirects straight to the calendar
    router.push("/booking-success");
  };

  return (
    <form className="space-y-6 relative z-20" onSubmit={handleBooking}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#0A2049] mb-2">Full name</label>
          <input type="text" id="name" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2049] focus:ring-1 focus:ring-[#0A2049] transition-all" placeholder="John Doe" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-[#0A2049] mb-2">Phone number</label>
          <input type="tel" id="phone" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2049] focus:ring-1 focus:ring-[#0A2049] transition-all" placeholder="+256 7XX XXX XXX" required />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-[#0A2049] mb-2">Email address</label>
        <input type="email" id="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2049] focus:ring-1 focus:ring-[#0A2049] transition-all" placeholder="you@example.com" required />
      </div>

      <div>
        <label htmlFor="city" className="block text-sm font-bold text-[#0A2049] mb-2">City or district</label>
        <select id="city" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2049] focus:ring-1 focus:ring-[#0A2049] transition-all" required defaultValue="">
          <option value="" disabled>Select your location...</option>
          <option value="Kampala">Kampala</option>
          <option value="Wakiso">Wakiso</option>
          <option value="Entebbe">Entebbe</option>
          <option value="Other">Other District</option>
        </select>
      </div>

      <div>
        <label htmlFor="about" className="block text-sm font-bold text-[#0A2049] mb-1">What does your business do? <span className="text-slate-400 font-normal">(optional)</span></label>
        <p className="text-xs text-slate-500 mb-2">A line or two helps us come to the call knowing where to look.</p>
        <textarea id="about" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#0A2049] focus:ring-1 focus:ring-[#0A2049] transition-all" placeholder="e.g. I run a hardware store and have a pending assessment..."></textarea>
      </div>

      <button type="submit" className="group w-full flex items-center justify-center gap-3 bg-[#DDB56A] text-[#0A2049] font-bold text-lg px-8 py-4 rounded-lg hover:bg-[#c9a358] transition-all duration-300 shadow-[0_4px_14px_0_rgba(221,181,106,0.39)] hover:shadow-[0_6px_20px_rgba(221,181,106,0.23)] hover:-translate-y-1 cursor-pointer">
        Proceed to Secure Payment
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </button>
      
      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium mt-4">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        Payments securely processed via Selar. Mobile Money and Cards accepted.
      </div>
    </form>
  );
}