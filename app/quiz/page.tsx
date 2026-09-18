"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

// Legal constants (FY2026/27)
const CURRENCY_POINT = 20000;
const VAT_THRESHOLD = 150000000;

function presumptiveTax(T: number) {
  if (T <= 10000000) return 0;
  if (T <= 30000000) return 0.004 * (T - 10000000);
  if (T <= 50000000) return 80000 + 0.005 * (T - 30000000);
  if (T <= 80000000) return 180000 + 0.006 * (T - 50000000);
  if (T <= 150000000) return 360000 + 0.007 * (T - 80000000);
  return null;
}

function corporateTax(P: number) { return P * 0.30; }

function individualTax(P: number) {
  if (P <= 4020000) return 0;
  if (P <= 4920000) return 0.20 * (P - 4020000);
  if (P <= 5820000) return 180000 + 0.25 * (P - 4920000);
  if (P <= 120000000) return 405000 + 0.30 * (P - 5820000);
  return 34659000 + 0.40 * (P - 120000000);
}

function lateFilingPenalty(annualTax: number, monthsLate: number) {
  const monthly = Math.max(annualTax * 0.02, 10 * CURRENCY_POINT);
  return monthly * Math.max(0, monthsLate);
}

function interestOnUnpaid(annualTax: number, monthsLate: number, penaltyAlreadyAccrued: number) {
  const raw = annualTax * 0.02 * Math.max(0, monthsLate);
  return Math.min(raw, annualTax + penaltyAlreadyAccrued);
}

function recordsPenalty(annualTax: number, years: number) { 
  return annualTax * 2 * Math.max(0, years); 
}

function unregisteredPenalty(annualTax: number, months: number) {
  const periodTax = annualTax * (Math.max(0, months) / 12);
  return Math.max(periodTax * 2, 50 * CURRENCY_POINT);
}

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [businessType, setBusinessType] = useState<"individual" | "company">("individual");
  const [turnover, setTurnover] = useState<string>("");
  const [isProfessional, setIsProfessional] = useState(false);
  const [profit, setProfit] = useState<string>("");
  const [isVatRegistered, setIsVatRegistered] = useState(false);

  // Risk Checklist State
  const [toggleLate, setToggleLate] = useState(false);
  const [monthsLate, setMonthsLate] = useState<string>("");

  const [toggleRecords, setToggleRecords] = useState(false);
  const [yearsRecords, setYearsRecords] = useState<string>("");

  const [toggleUnregistered, setToggleUnregistered] = useState(false);
  const [monthsUnregistered, setMonthsUnregistered] = useState<string>("");

  const [toggleFine, setToggleFine] = useState(false);
  const [fineAmount, setFineAmount] = useState<string>("");

  const [profile, setProfile] = useState<any>(null);
  const [results, setResults] = useState<any>(null);
  const [copyFeedback, setCopyFeedback] = useState("Copy number");

  const numTurnover = parseFloat(turnover) || 0;
  const numProfit = parseFloat(profit) || 0;
  const needsProfit = isProfessional || numTurnover > VAT_THRESHOLD;
  const isFormValid = numTurnover > 0 && (!needsProfit || numProfit > 0);
  const showVatRow = numTurnover >= 100000000;

  const computeProfile = () => {
    const T = numTurnover;
    const P = numProfit;
    let regime, annualTax, lawTag;
    const presumptiveEligible = !isProfessional && T <= VAT_THRESHOLD;

    if (presumptiveEligible) {
      regime = "Presumptive tax (small business)";
      annualTax = presumptiveTax(T) || 0;
      lawTag = "Income Tax Act, Second Schedule";
    } else if (businessType === "company") {
      regime = "Standard company assessment";
      annualTax = corporateTax(P);
      lawTag = "Income Tax Act — 30% corporate rate";
    } else {
      regime = "Standard individual assessment";
      annualTax = individualTax(P);
      lawTag = "Income Tax Act — graduated rates";
    }

    const vatRequired = T > VAT_THRESHOLD;
    const vatGap = vatRequired && !isVatRegistered;

    return { T, P, regime, annualTax, lawTag, vatRequired, vatGap };
  };

  const handleShowStep2 = () => {
    const computed = computeProfile();
    setProfile(computed);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCalculate = () => {
    const p = profile;
    const insights: any[] = [];
    let riskTotal = 0;
    let oldestFineFlag = false;

    if (toggleLate) {
      const months = parseFloat(monthsLate) || 0;
      const penalty = lateFilingPenalty(p.annualTax, months);
      const interest = interestOnUnpaid(p.annualTax, months, penalty);
      const sub = penalty + interest;
      riskTotal += sub;
      insights.push({
        problem: "Late filing",
        cost: sub,
        fix: `${months} month(s) overdue: penalty is the higher of 2% of tax due per month or UGX 200,000/month, plus 2%/month interest on the unpaid tax.`,
        cite: "Tax Procedures Code Act, s.56"
      });
    }

    if (toggleRecords) {
      const years = parseFloat(yearsRecords) || 0;
      const sub = recordsPenalty(p.annualTax, years);
      riskTotal += sub;
      insights.push({
        problem: "Poor records",
        cost: sub,
        fix: "Deliberately failing to keep proper records carries a penalty of double the tax payable for each affected year.",
        cite: "Tax Procedures Code Act, s.57"
      });
    }

    if (toggleUnregistered) {
      const months = parseFloat(monthsUnregistered) || 0;
      const sub = unregisteredPenalty(p.annualTax, months);
      riskTotal += sub;
      insights.push({
        problem: "Never registered",
        cost: sub,
        fix: "Operating unregistered carries a penalty of double the tax due for that period, or UGX 1,000,000, whichever is higher.",
        cite: "Tax Procedures Code Act, s.61"
      });
    }

    if (toggleFine) {
      const amount = parseFloat(fineAmount) || 0;
      riskTotal += amount;
      oldestFineFlag = amount > 0;
      insights.push({
        problem: "Existing fine or demand",
        cost: amount,
        fix: "This is already on record with URA and accruing interest until it's resolved.",
        cite: "—"
      });
    }

    if (p.vatGap) {
      const floor = 1000000;
      riskTotal += floor;
      insights.push({
        problem: "VAT registration gap",
        cost: floor,
        fix: "Turnover is above UGX 150,000,000 — VAT registration is required. Operating unregistered risks at least UGX 1,000,000, and possibly a full VAT assessment on past sales.",
        cite: "VAT Act; Tax Procedures Code Act, s.61"
      });
    }

    setResults({
      riskTotal,
      baseTax: p.annualTax,
      regime: p.regime,
      totalExposure: riskTotal + p.annualTax,
      insights,
      oldestFineFlag
    });

    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setTurnover("");
    setProfit("");
    setIsProfessional(false);
    setIsVatRegistered(false);
    setBusinessType("individual");
    setToggleLate(false);
    setMonthsLate("");
    setToggleRecords(false);
    setYearsRecords("");
    setToggleUnregistered(false);
    setMonthsUnregistered("");
    setToggleFine(false);
    setFineAmount("");
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fmt = (n: number) => "UGX " + Math.round(n).toLocaleString();

  const copyNumber = () => {
    navigator.clipboard?.writeText("+256 761 109 667").then(() => {
      setCopyFeedback("Copied ✓");
      setTimeout(() => setCopyFeedback("Copy number"), 1500);
    });
  };

  return (
    <div className="min-h-screen bg-[#FCF9F4] font-sans text-[#22303F] flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0D2A5C]">
      
      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-lg mx-auto px-4 py-10 flex-grow w-full">

        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-widest text-[#AE8340] font-bold mb-2">Free · 2 minutes</div>
          <h1 className="text-3xl font-serif text-[#0D2A5C] mb-2 font-semibold">Tax Risk Check</h1>
          <p className="text-sm text-[#5C6875]">Based on the Income Tax Act, VAT Act and Tax Procedures Code Act.</p>
        </div>

        {/* STEP 1: BUSINESS PROFILE */}
        {step === 1 && (
          <div className="bg-white border border-[#0D2A5C]/10 rounded-2xl p-6 shadow-xl mb-6">
            <div className="text-xs uppercase font-bold text-[#5C6875] tracking-wider mb-4">About your business</div>

            <div className="mb-5">
              <label className="block text-sm font-bold text-[#0D2A5C] mb-2">What kind of business is this?</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setBusinessType("individual")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                    businessType === "individual" ? "bg-[#0D2A5C] text-white border-[#0D2A5C]" : "bg-[#FCF9F4] text-[#5C6875] border-[#E4DCCD]"
                  }`}
                >
                  Sole trader
                </button>
                <button
                  type="button"
                  onClick={() => setBusinessType("company")}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm border transition-all cursor-pointer ${
                    businessType === "company" ? "bg-[#0D2A5C] text-white border-[#0D2A5C]" : "bg-[#FCF9F4] text-[#5C6875] border-[#E4DCCD]"
                  }`}
                >
                  Company
                </button>
              </div>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-bold text-[#0D2A5C] mb-2">Annual turnover — gross sales (UGX)</label>
              <input 
                type="number" 
                value={turnover}
                onChange={(e) => setTurnover(e.target.value)}
                placeholder="e.g. 60,000,000" 
                min="0"
                className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-xl px-4 py-3 text-base text-[#22303F] focus:outline-none focus:border-[#DDB56A] focus:ring-2 focus:ring-[#DDB56A]/20"
              />
              <p className="text-xs text-[#5C6875] mt-1.5">Total money in before any expenses.</p>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-[#F5EFE4]">
              <div>
                <div className="text-sm font-bold text-[#0D2A5C]">Professional / regulated service?</div>
                <div className="text-xs text-[#5C6875]">Law, medicine, engineering, accountancy, architecture, etc.</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer flex-none">
                <input type="checkbox" checked={isProfessional} onChange={(e) => setIsProfessional(e.target.checked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-[#E4DCCD] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D2A5C]"></div>
              </label>
            </div>

            {needsProfit && (
              <div className="mb-5 mt-3 animate-in fade-in">
                <label className="block text-sm font-bold text-[#0D2A5C] mb-2">Estimated annual net profit (UGX)</label>
                <input 
                  type="number" 
                  value={profit}
                  onChange={(e) => setProfit(e.target.value)}
                  placeholder="e.g. 40,000,000" 
                  min="0"
                  className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-xl px-4 py-3 text-base text-[#22303F] focus:outline-none focus:border-[#DDB56A] focus:ring-2 focus:ring-[#DDB56A]/20"
                />
                <p className="text-xs text-[#5C6875] mt-1.5">Turnover minus business expenses.</p>
              </div>
            )}

            {showVatRow && (
              <div className="flex items-center justify-between py-3 border-t border-[#F5EFE4]">
                <div>
                  <div className="text-sm font-bold text-[#0D2A5C]">Already VAT registered?</div>
                  <div className="text-xs text-[#5C6875]">Required once turnover passes UGX 150M</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-none">
                  <input type="checkbox" checked={isVatRegistered} onChange={(e) => setIsVatRegistered(e.target.checked)} className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#E4DCCD] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0D2A5C]"></div>
                </label>
              </div>
            )}

            <button 
              type="button" 
              onClick={handleShowStep2} 
              disabled={!isFormValid}
              className="w-full mt-6 bg-[#0D2A5C] text-white py-4 rounded-xl font-bold text-base hover:bg-[#0A2049] transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md"
            >
              See My Tax Profile
            </button>
          </div>
        )}

        {/* STEP 2: PROFILE SUMMARY + RISK CHECKLIST */}
        {step === 2 && profile && (
          <div className="bg-white border border-[#0D2A5C]/10 rounded-2xl p-6 shadow-xl mb-6 animate-in fade-in">
            <div className="text-xs uppercase font-bold text-[#5C6875] tracking-wider mb-3">Your tax profile</div>
            
            <div className="bg-[#F5EFE4] rounded-xl p-4 mb-6">
              <span className="inline-block bg-[#0D2A5C] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{profile.regime}</span>
              <div className="flex justify-between text-sm py-1 border-t border-[#0D2A5C]/10">
                <span className="text-[#5C6875]">Est. annual tax</span>
                <span className="font-bold text-[#0D2A5C]">{fmt(profile.annualTax)}</span>
              </div>
              <div className="flex justify-between text-sm py-1 border-t border-[#0D2A5C]/10">
                <span className="text-[#5C6875]">Basis</span>
                <span className="text-xs text-[#5C6875] font-semibold">{profile.lawTag}</span>
              </div>
              <div className="flex justify-between text-sm py-1 border-t border-[#0D2A5C]/10">
                <span className="text-[#5C6875]">VAT (18%)</span>
                <span className="font-bold text-[#0D2A5C]">{profile.vatRequired ? (profile.vatReg ? "Registered ✓" : "Required, not registered") : "Not required yet"}</span>
              </div>
            </div>

            <div className="text-xs uppercase font-bold text-[#5C6875] tracking-wider mb-4">Any of these also true?</div>

            {/* Late Filing */}
            <div className="border-b border-[#F5EFE4] pb-4 mb-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={toggleLate} onChange={(e) => setToggleLate(e.target.checked)} className="w-5 h-5 mt-1 accent-[#0D2A5C] cursor-pointer" id="chkLate" />
                <div className="flex-grow">
                  <label htmlFor="chkLate" className="font-bold text-sm text-[#0D2A5C] cursor-pointer">Behind on filing a return</label>
                  <p className="text-xs text-[#5C6875]">A return is overdue with URA right now.</p>
                </div>
              </div>
              {toggleLate && (
                <div className="mt-3 ml-8">
                  <label className="block text-xs text-[#5C6875] mb-1">How many months overdue?</label>
                  <input type="number" value={monthsLate} onChange={(e) => setMonthsLate(e.target.value)} placeholder="e.g. 6" min="0" max="120" className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-lg px-3 py-2 text-sm" />
                </div>
              )}
            </div>

            {/* Records */}
            <div className="border-b border-[#F5EFE4] pb-4 mb-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={toggleRecords} onChange={(e) => setToggleRecords(e.target.checked)} className="w-5 h-5 mt-1 accent-[#0D2A5C] cursor-pointer" id="chkRecords" />
                <div className="flex-grow">
                  <label htmlFor="chkRecords" className="font-bold text-sm text-[#0D2A5C] cursor-pointer">Records aren't properly kept</label>
                  <p className="text-xs text-[#5C6875]">No reliable books — sales, expenses, receipts.</p>
                </div>
              </div>
              {toggleRecords && (
                <div className="mt-3 ml-8">
                  <label className="block text-xs text-[#5C6875] mb-1">For how many years?</label>
                  <input type="number" value={yearsRecords} onChange={(e) => setYearsRecords(e.target.value)} placeholder="e.g. 2" min="0" max="10" className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-lg px-3 py-2 text-sm" />
                </div>
              )}
            </div>

            {/* Unregistered */}
            <div className="border-b border-[#F5EFE4] pb-4 mb-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={toggleUnregistered} onChange={(e) => setToggleUnregistered(e.target.checked)} className="w-5 h-5 mt-1 accent-[#0D2A5C] cursor-pointer" id="chkUnreg" />
                <div className="flex-grow">
                  <label htmlFor="chkUnreg" className="font-bold text-sm text-[#0D2A5C] cursor-pointer">Never registered with URA</label>
                  <p className="text-xs text-[#5C6875]">No TIN, or trading without registering as required.</p>
                </div>
              </div>
              {toggleUnregistered && (
                <div className="mt-3 ml-8">
                  <label className="block text-xs text-[#5C6875] mb-1">How many months operating like this?</label>
                  <input type="number" value={monthsUnregistered} onChange={(e) => setMonthsUnregistered(e.target.value)} placeholder="e.g. 12" min="0" max="240" className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-lg px-3 py-2 text-sm" />
                </div>
              )}
            </div>

            {/* Existing Fine */}
            <div className="pb-2 mb-4">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked={toggleFine} onChange={(e) => setToggleFine(e.target.checked)} className="w-5 h-5 mt-1 accent-[#0D2A5C] cursor-pointer" id="chkFine" />
                <div className="flex-grow">
                  <label htmlFor="chkFine" className="font-bold text-sm text-[#0D2A5C] cursor-pointer">Already have a URA fine or demand</label>
                  <p className="text-xs text-[#5C6875]">An assessment, penalty or demand notice.</p>
                </div>
              </div>
              {toggleFine && (
                <div className="mt-3 ml-8">
                  <label className="block text-xs text-[#5C6875] mb-1">Amount on the notice (UGX)</label>
                  <input type="number" value={fineAmount} onChange={(e) => setFineAmount(e.target.value)} placeholder="e.g. 3,000,000" min="0" className="w-full bg-[#FCF9F4] border border-[#E4DCCD] rounded-lg px-3 py-2 text-sm" />
                </div>
              )}
            </div>

            <button type="button" onClick={handleCalculate} className="w-full mt-6 bg-[#0D2A5C] text-white py-4 rounded-xl font-bold text-base hover:bg-[#0A2049] transition-all cursor-pointer shadow-md">
              Calculate My Full Risk
            </button>
            <button type="button" onClick={() => setStep(1)} className="w-full mt-3 bg-transparent border border-[#E4DCCD] text-[#5C6875] py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer">
              ← Back
            </button>
          </div>
        )}

        {/* STEP 3: RESULTS */}
        {step === 3 && results && (
          <div className="bg-white border border-[#0D2A5C]/10 rounded-2xl p-6 shadow-xl mb-6 animate-in fade-in">
            <div className="text-center pb-4">
              <div className="text-xs uppercase tracking-wider text-[#5C6875] font-bold mb-2">Extra risk from compliance gaps</div>
              <div className="text-4xl font-serif text-[#0D2A5C] font-bold mb-1">{fmt(results.riskTotal)}</div>
              <p className="text-xs text-[#5C6875]">on top of the tax you'd owe anyway</p>
            </div>

            <div className="flex bg-[#F5EFE4] rounded-xl overflow-hidden mb-6">
              <div className="flex-1 bg-white p-4 text-center border-r border-[#F5EFE4]">
                <div className="text-base font-bold text-[#0D2A5C]">{fmt(results.baseTax)}</div>
                <div className="text-[10px] text-[#5C6875] uppercase mt-1">Est. annual tax</div>
              </div>
              <div className="flex-1 bg-white p-4 text-center">
                <div className="text-base font-bold text-[#0D2A5C]">{fmt(results.totalExposure)}</div>
                <div className="text-[10px] text-[#5C6875] uppercase mt-1">Total if unresolved</div>
              </div>
            </div>

            <div className="bg-[#F5EFE4] border-l-4 border-[#DDB56A] p-3 rounded-r-lg text-xs text-[#22303F] mb-6 leading-relaxed">
              {results.insights.length === 0 ? (
                `Based on what you've told us, your main obligation is the ${fmt(results.baseTax)} annual tax. No red flags flagged.`
              ) : (
                `Left unresolved, these compliance gaps add roughly ${fmt(results.riskTotal)} on top of your normal ${fmt(results.baseTax)} annual tax.`
              )}
            </div>

            <div className="text-xs uppercase font-bold text-[#5C6875] tracking-wider mb-3">Where this comes from</div>
            <div className="space-y-3 mb-6">
              {results.insights.map((a: any, i: number) => (
                <div key={i} className="flex gap-3 pt-3 border-t border-[#F5EFE4] first:border-t-0 first:pt-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#AE8340] mt-2 flex-none"></div>
                  <div>
                    <strong className="text-sm text-[#0D2A5C] block">{a.problem}{a.cost > 0 ? ` — ~${fmt(a.cost)}` : ""}</strong>
                    <div className="text-xs text-[#22303F] mt-0.5">{a.fix}</div>
                    <div className="text-[10px] text-[#93A2B4] italic mt-1">{a.cite}</div>
                  </div>
                </div>
              ))}
            </div>

            {results.oldestFineFlag && (
              <div className="bg-[#F2E3C6] rounded-xl p-3 text-xs text-[#22303F] mb-6">
                <strong className="text-[#AE8340]">Worth knowing:</strong> Interest and penalties on tax debt outstanding as of 30 June 2025 are waived in full under the TPCA if you pay principal by 30 June 2027.
              </div>
            )}

            <p className="text-[11px] text-[#93A2B4] mb-6 leading-normal">
              Estimates only, based on the Income Tax Act, VAT Act and Tax Procedures Code Act (FY2026/27). Book a call below for a precise figure.
            </p>

            <button type="button" onClick={handleReset} className="w-full bg-transparent border border-[#E4DCCD] text-[#5C6875] py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all cursor-pointer mb-6">
              Start over
            </button>

            {/* CALL TO ACTION / BOOKING CARD */}
            <div className="bg-gradient-to-br from-[#0D2A5C] to-[#0A2049] text-[#E8EEF9] rounded-2xl p-6 border border-[#DDB56A] shadow-xl text-center">
              <h3 className="text-xl font-serif text-white mb-2 font-semibold">Fix this on a call</h3>
              <p className="text-xs text-[#B7C8E4] mb-6">30 minutes with a tax specialist. UGX 300,000, payable via mobile money or card.</p>
              
              <Link 
                href="/#book" 
                className="inline-flex items-center justify-center gap-2 bg-[#DDB56A] hover:bg-[#c9a358] text-[#0D2A5C] font-bold text-sm px-6 py-4 rounded-full w-full transition-all shadow-lg"
              >
                Book Your Consultation Session
              </Link>
            </div>
          </div>
        )}

      </div>

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