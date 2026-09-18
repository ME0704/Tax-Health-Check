"use client";

import { useState } from "react";
import Link from "next/link";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  const [formData, setFormData] = useState({
    filingStatus: 2,
    records: 2,
    turnover: 50,
    penalties: 0,
    deductions: 2,
  });

  const totalQuestions = 5;

  const handleToggle = (field: keyof typeof formData, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setShowResults(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // --- LOGIC CALCULATIONS ---
  let score = 100;
  if (formData.filingStatus === 0) score -= 35;
  else if (formData.filingStatus === 1) score -= 20;
  if (formData.records === 0) score -= 30;
  else if (formData.records === 1) score -= 15;
  if (formData.penalties === 1) score -= 15;
  else if (formData.penalties === 2) score -= 25;
  if (formData.deductions === 0) score -= 20;
  else if (formData.deductions === 1) score -= 10;
  score = Math.max(0, score);

  let opportunity = formData.turnover * 0.15;
  if (formData.deductions === 0) opportunity += formData.turnover * 0.12;
  else if (formData.deductions === 1) opportunity += formData.turnover * 0.06;
  if (formData.records === 0) opportunity += formData.turnover * 0.08;
  else if (formData.records === 1) opportunity += formData.turnover * 0.04;

  let riskLevel = "Healthy";
  let insight = "";
  if (score >= 75) {
    riskLevel = "Healthy";
    insight = "Your business is in good tax health. Focus on maintaining compliance and exploring optimization opportunities.";
  } else if (score >= 50) {
    riskLevel = "At Risk";
    insight = "There are gaps in your tax setup. Addressing these could save you significantly and reduce penalty risk.";
  } else if (score >= 25) {
    riskLevel = "High Risk";
    insight = "Your tax position needs urgent attention. Quick action now prevents costly penalties later.";
  } else {
    riskLevel = "Critical";
    insight = "Critical issues found. Professional restructuring is essential to protect your business.";
  }

  const generateResultText = () => {
    const statusText = ["Not filing", "Filing late", "Filing on time"][formData.filingStatus];
    const recordsText = ["Messy or missing", "Partially organized", "Well maintained"][formData.records];
    const penaltiesText = ["Never", "Once or twice", "Multiple times"][formData.penalties];
    const deductionsText = ["Never reviewed", "Partially claimed", "Fully optimized"][formData.deductions];

    let text = `TAX HEALTH CHECK REPORT\n====================================\n\n`;
    text += `YOUR TAX HEALTH SCORE: ${score}%\nRisk Level: ${riskLevel}\nTax Savings Potential: UGX ${Math.round(opportunity)}m\n\n`;
    text += `====================================\nYOUR DIAGNOSIS\n====================================\n\n`;
    text += `Filing Status: ${statusText}\nRecord Keeping: ${recordsText}\nAnnual Turnover: UGX ${formData.turnover}m\nTax Penalties: ${penaltiesText}\nDeduction Optimization: ${deductionsText}\n\n`;
    text += `====================================\nKEY INSIGHTS\n====================================\n\n${insight}\n\n`;
    text += `====================================\nYOUR ACTION PLAN\n====================================\n\n`;

    if (formData.filingStatus < 2) text += `1. PRIORITY: Get Current with URA\n   ACTION THIS WEEK: Contact a tax professional to review what you owe.\n\n`;
    if (formData.records < 2) text += `2. PRIORITY: Organize Your Books\n   ACTION THIS WEEK: Start collecting all receipts and bank statements.\n\n`;
    if (formData.penalties > 0) text += `3. PRIORITY: Review Past Penalties\n   ACTION THIS WEEK: Request a penalty review meeting with URA.\n\n`;
    if (formData.deductions < 2) text += `4. PRIORITY: Claim All Allowable Deductions\n   ACTION THIS WEEK: Audit your expenses with a tax specialist.\n\n`;
    text += `5. NEXT STEP: Get Your Personal Tax Blueprint\n   Book a strategy session to move from confusion to compliance.\n\n`;
    text += `====================================\nGenerated: ${new Date().toLocaleDateString()}\n====================================`;
    return text;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateResultText()).then(() => {
      setCopyFeedback("✓ Copied to clipboard!");
      setTimeout(() => setCopyFeedback(""), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-[#0A2049]/95 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.jpeg" alt="Tax Health Check Logo" className="w-12 h-12 object-cover rounded shadow-sm group-hover:scale-105 transition-transform" />
            <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
              Tax Health <span className="text-[#DDB56A]">Check</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-semibold text-sm">
            <Link href="/quiz" className="text-[#DDB56A] transition-colors duration-300">
              Free Tax Risk Check
            </Link>
            <Link 
              href="/#book" 
              className="bg-[#DDB56A] hover:bg-[#c9a358] text-[#0A2049] px-6 py-2.5 rounded-md transition-all duration-300 shadow-[0_4px_14px_0_rgba(221,181,106,0.39)]"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN QUIZ CONTENT */}
      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-block bg-[#DDB56A]/20 text-[#0A2049] border border-[#DDB56A]/50 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-4">
              DIAGNOSTIC TOOL
            </div>
            <h1 className="text-4xl font-extrabold text-[#0A2049] mb-3">Your Tax Diagnosis</h1>
            <p className="text-base text-slate-500">Answer 5 quick questions and get your personalized report.</p>
          </div>

          {!showResults ? (
            /* QUIZ SECTION */
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
              {/* Progress Bar */}
              <div className="mb-10">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                  <div 
                    className="h-full bg-[#0A2049] transition-all duration-500 ease-out" 
                    style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                  />
                </div>
                <div className="text-xs text-slate-400 text-center font-bold tracking-widest uppercase">
                  Question {currentQuestion} of {totalQuestions}
                </div>
              </div>

              {/* Question 1 */}
              {currentQuestion === 1 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                  <label className="block text-2xl font-bold text-[#0A2049] mb-2">1. Filing Status</label>
                  <p className="text-base text-slate-500 mb-8">Are you currently filing with URA?</p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Not filing", val: 0 },
                      { label: "Filing late", val: 1 },
                      { label: "Filing on time", val: 2 }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleToggle("filingStatus", opt.val)}
                        className={`p-5 text-left font-bold rounded-2xl border-2 transition-all duration-300 text-lg ${
                          formData.filingStatus === opt.val 
                            ? "border-[#0A2049] bg-[#0A2049] text-white shadow-md scale-[1.01]" 
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#DDB56A] hover:bg-[#DDB56A]/5"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 2 */}
              {currentQuestion === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                  <label className="block text-2xl font-bold text-[#0A2049] mb-2">2. Record Keeping</label>
                  <p className="text-base text-slate-500 mb-8">How confident are your books and receipts?</p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Messy or missing", val: 0 },
                      { label: "Partially organized", val: 1 },
                      { label: "Well maintained", val: 2 }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleToggle("records", opt.val)}
                        className={`p-5 text-left font-bold rounded-2xl border-2 transition-all duration-300 text-lg ${
                          formData.records === opt.val 
                            ? "border-[#0A2049] bg-[#0A2049] text-white shadow-md scale-[1.01]" 
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#DDB56A] hover:bg-[#DDB56A]/5"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 3 */}
              {currentQuestion === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                  <label className="block text-2xl font-bold text-[#0A2049] mb-2">3. Annual Turnover</label>
                  <p className="text-base text-slate-500 mb-10">Estimate your yearly business revenue in UGX.</p>
                  <input 
                    type="range" 
                    min="0" max="500" step="10" 
                    value={formData.turnover}
                    onChange={(e) => handleToggle("turnover", parseInt(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#DDB56A] mb-8"
                  />
                  <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <span className="text-4xl font-extrabold text-[#0A2049]">{formData.turnover}</span>
                    <span className="text-lg font-bold text-slate-500 ml-2">million UGX/year</span>
                  </div>
                </div>
              )}

              {/* Question 4 */}
              {currentQuestion === 4 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                  <label className="block text-2xl font-bold text-[#0A2049] mb-2">4. Tax Penalties</label>
                  <p className="text-base text-slate-500 mb-8">Have you been fined or penalized by URA?</p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Never", val: 0 },
                      { label: "Once or twice", val: 1 },
                      { label: "Multiple times", val: 2 }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleToggle("penalties", opt.val)}
                        className={`p-5 text-left font-bold rounded-2xl border-2 transition-all duration-300 text-lg ${
                          formData.penalties === opt.val 
                            ? "border-[#0A2049] bg-[#0A2049] text-white shadow-md scale-[1.01]" 
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#DDB56A] hover:bg-[#DDB56A]/5"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Question 5 */}
              {currentQuestion === 5 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-300">
                  <label className="block text-2xl font-bold text-[#0A2049] mb-2">5. Deduction Optimization</label>
                  <p className="text-base text-slate-500 mb-8">Do you claim all allowable business deductions?</p>
                  <div className="flex flex-col gap-4">
                    {[
                      { label: "Never reviewed", val: 0 },
                      { label: "Partially claimed", val: 1 },
                      { label: "Fully optimized", val: 2 }
                    ].map((opt) => (
                      <button
                        key={opt.val}
                        onClick={() => handleToggle("deductions", opt.val)}
                        className={`p-5 text-left font-bold rounded-2xl border-2 transition-all duration-300 text-lg ${
                          formData.deductions === opt.val 
                            ? "border-[#0A2049] bg-[#0A2049] text-white shadow-md scale-[1.01]" 
                            : "border-slate-200 bg-white text-slate-700 hover:border-[#DDB56A] hover:bg-[#DDB56A]/5"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Controls */}
              <div className="flex gap-4 mt-12">
                {currentQuestion > 1 && (
                  <button onClick={handlePrev} className="flex-1 py-5 px-6 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-colors text-lg">
                    Back
                  </button>
                )}
                <button onClick={handleNext} className="flex-1 py-5 px-6 bg-[#DDB56A] text-[#0A2049] font-bold rounded-2xl hover:bg-[#c9a358] transition-colors shadow-lg shadow-[#DDB56A]/20 text-lg">
                  {currentQuestion === totalQuestions ? "Get Your Diagnosis" : "Next Question"}
                </button>
              </div>
            </div>
          ) : (
            /* RESULTS SECTION */
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              {/* Score Card */}
              <div className="bg-[#0A2049] text-white p-10 rounded-3xl shadow-2xl text-center mb-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
                <div className="text-sm font-bold uppercase tracking-widest text-[#DDB56A] mb-4">Your Tax Health Score</div>
                <div className="text-7xl font-extrabold mb-6">{score}%</div>
                <div className="text-base text-slate-300 leading-relaxed max-w-lg mx-auto">{insight}</div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-b-8 border-b-[#0A2049]">
                  <div className="text-3xl font-extrabold text-[#0A2049]">{riskLevel}</div>
                  <div className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">Current Risk</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-b-8 border-b-[#DDB56A]">
                  <div className="text-3xl font-extrabold text-[#0A2049]">UGX {Math.round(opportunity)}m</div>
                  <div className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wider">Savings Potential</div>
                </div>
              </div>

              {/* Action Plan */}
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200 mb-8">
                <h3 className="text-2xl font-bold text-[#0A2049] mb-8 flex items-center gap-3">
                  <svg className="w-6 h-6 text-[#DDB56A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Personalized Action Plan
                </h3>
                <div className="space-y-6">
                  {formData.filingStatus < 2 && (
                    <div className="border-b border-slate-100 pb-5">
                      <h4 className="text-base font-bold text-[#0A2049] mb-1">Priority 1: Get Current with URA</h4>
                      <p className="text-base text-slate-600">Filing late or not at all compounds penalties monthly. Contact a tax professional this week to review what you owe.</p>
                    </div>
                  )}
                  {formData.records < 2 && (
                    <div className="border-b border-slate-100 pb-5">
                      <h4 className="text-base font-bold text-[#0A2049] mb-1">Priority 2: Organize Your Books</h4>
                      <p className="text-base text-slate-600">Messy records trigger audits and penalties. Start collecting all 2024 receipts and bank statements this week.</p>
                    </div>
                  )}
                  {formData.penalties > 0 && (
                    <div className="border-b border-slate-100 pb-5">
                      <h4 className="text-base font-bold text-[#0A2049] mb-1">Priority 3: Review Past Penalties</h4>
                      <p className="text-base text-slate-600">Penalties are often negotiable if addressed early. Request a penalty review meeting with URA within the next 10 days.</p>
                    </div>
                  )}
                  {formData.deductions < 2 && (
                    <div className="border-b border-slate-100 pb-5">
                      <h4 className="text-base font-bold text-[#0A2049] mb-1">Priority 4: Claim All Allowable Deductions</h4>
                      <p className="text-base text-slate-600">Most businesses miss 10–20% in deductible expenses. Audit your expenses this week with a tax specialist.</p>
                    </div>
                  )}
                  <div>
                    <h4 className="text-base font-bold text-[#DDB56A] mb-1">Next Step: Your Personal Tax Blueprint</h4>
                    <p className="text-base text-slate-600">A strategy session identifies exactly what to fix first and saves you months of confusion.</p>
                  </div>
                </div>
              </div>

              {/* Copy Button */}
              <button 
                onClick={copyToClipboard}
                className="w-full bg-slate-100 hover:bg-slate-200 text-[#0A2049] font-bold py-5 px-6 rounded-2xl transition-colors mb-3 flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                Copy Full Report
              </button>
              <div className="text-center text-base text-emerald-600 font-bold h-6 mb-6">{copyFeedback}</div>

              {/* CTA */}
              <div className="bg-white border border-[#DDB56A]/30 p-10 rounded-3xl text-center mb-8 shadow-xl shadow-[#DDB56A]/5">
                <h4 className="font-extrabold text-[#0A2049] text-2xl mb-3">Ready for Professional Support?</h4>
                <p className="text-base text-slate-600 mb-8">Get a detailed tax strategy built specifically for your business situation.</p>
                <Link href="/#book" className="inline-block bg-[#DDB56A] text-[#0A2049] font-bold py-5 px-10 rounded-2xl hover:bg-[#c9a358] transition-colors shadow-lg shadow-[#DDB56A]/20 text-lg">
                  Book Consultation Now
                </Link>
              </div>

              <button onClick={restartQuiz} className="w-full py-5 px-6 text-slate-500 font-bold rounded-2xl hover:bg-slate-100 transition-colors text-lg">
                Retake Assessment
              </button>
            </div>
          )}
        </div>
      </main>

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

    </div>
  );
}