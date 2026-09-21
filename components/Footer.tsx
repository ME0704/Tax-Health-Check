"use client";

import Link from "next/link";

export default function Footer() {
	return (
      <footer className="bg-[#0A2049] text-slate-300 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-16">
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
	)
}
