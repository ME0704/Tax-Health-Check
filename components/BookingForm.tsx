"use client";

import { useRouter } from "next/navigation";

export default function BookingForm() {
  const router = useRouter();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this pushes to Selar payment link
    router.push("/booking-success");
  };

  // Alphabetical list of main Ugandan districts and major cities
  const ugandanDistricts = [
    "Arua", "Bugiri", "Buikwe", "Bushenyi", "Busia", "Fort Portal", 
    "Gulu", "Hoima", "Ibanda", "Iganga", "Jinja", "Kabale", "Kabarole", 
    "Kalangala", "Kamuli", "Kapchorwa", "Kasese", "Kayunga", "Kisoro", 
    "Kitgum", "Kumi", "Lira", "Luweero", "Masaka", "Masindi", "Mbale", 
    "Mbarara", "Mityana", "Mpigi", "Mubende", "Nebbi", "Ntungamo", 
    "Rukungiri", "Soroti", "Tororo", "Yumbe", "Other District"
  ];

  return (
    <form className="space-y-6" onSubmit={handleBooking}>
      
      {/* CLIENT DETAILS */}
      <div className="grid md:grid-cols-2 gap-5 pt-2">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-[#0A2049] mb-1.5">Full name</label>
          <input type="text" id="name" className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DDB56A] focus:ring-1 focus:ring-[#DDB56A]" placeholder="e.g. Sarah Namugga" required />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-[#0A2049] mb-1.5">Phone number</label>
          <input type="tel" id="phone" className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DDB56A] focus:ring-1 focus:ring-[#DDB56A]" placeholder="+256 7XX XXX XXX" required />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-[#0A2049] mb-1.5">Email address</label>
          <input type="email" id="email" className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DDB56A] focus:ring-1 focus:ring-[#DDB56A]" placeholder="you@example.com" required />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-bold text-[#0A2049] mb-1.5">District or City</label>
          <select id="city" className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DDB56A] focus:ring-1 focus:ring-[#DDB56A]" required defaultValue="">
            <option value="" disabled>Select your location...</option>
            
            {/* Pinned top locations for quick access */}
            <option value="Kampala">Kampala</option>
            <option value="Wakiso">Wakiso</option>
            <option value="Mukono">Mukono</option>
            <option value="Entebbe">Entebbe</option>
            
            <option disabled>──────────</option>
            
            {/* Alphabetical mapping of remaining districts */}
            {ugandanDistricts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="about" className="block text-sm font-bold text-[#0A2049] mb-1">
          Briefly describe your business or tax issue
        </label>
        <p className="text-xs text-slate-500 mb-2">Helps our tax advocates prepare statutory references prior to your session.</p>
        <textarea id="about" rows={3} className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#DDB56A] focus:ring-1 focus:ring-[#DDB56A]" placeholder="e.g. We have pending withholding tax assessments or need clarification on VAT thresholds..." required></textarea>
      </div>

      <button type="submit" className="w-full flex items-center justify-center gap-2 bg-[#0A2049] hover:bg-[#132c5e] text-white font-bold text-base px-8 py-4 rounded-xl transition-all shadow-md cursor-pointer mt-4">
        Proceed to Secure Payment (UGX 300,000)
        <svg className="w-5 h-5 text-[#DDB56A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </button>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
        <svg className="w-4 h-4 text-[#0A2049]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
        Secure mobile money and card processing via Selar.
      </div>
    </form>
  );
}