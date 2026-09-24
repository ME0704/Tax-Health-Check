import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2049] text-slate-300 border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div>
            <Link href="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Tax Health Check Icon" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-white tracking-tight">
                Tax Health <span className="text-[#DDB56A]">Check</span>
              </span>
            </Link>
          </div>

          <div className="text-left md:text-right space-y-1.5 text-xs text-slate-400 flex flex-col md:items-end">
            <p>WhatsApp: <a href="https://wa.me/256761109667" className="text-white hover:text-[#DDB56A] transition-colors">+256 761 109 667</a></p>
            <p>Email: <a href="mailto:taxhealthcheckug@gmail.com" className="text-white hover:text-[#DDB56A] transition-colors">taxhealthcheckug@gmail.com</a></p>
            <div className="pt-2">
              <a 
                href="https://maps.app.goo.gl/6TV7Y7xCFjGJBwMWA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#DDB56A] transition-colors group"
              >
                <svg className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#DDB56A] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                House No.1 Katongole Road, Froebel-Bukoto, Kampala
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright Line */}
        <div className="mt-12 pt-6 border-t border-white/10 flex justify-center text-[10px] text-slate-500 uppercase tracking-widest text-center">
          <p>&copy; {currentYear} Tax Health Check. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}