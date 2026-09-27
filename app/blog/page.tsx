"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";

const CATEGORIES = ["All", "Tax Strategy", "URA & Compliance", "SME Growth", "Case Study"] as const;

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.tag === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  const getTagBadgeStyle = (tag: BlogPost["tag"]) => {
    switch (tag) {
      case "Tax Strategy":
        return "bg-[#DDB56A]/15 text-[#916b1e] border-[#DDB56A]/30";
      case "URA & Compliance":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "Case Study":
        return "bg-[#0A2049]/10 text-[#0A2049] border-[#0A2049]/20";
      case "SME Growth":
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F4] font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      <Navbar />

      <main className="flex-grow">
        {/* 1. EDITORIAL HEADER SECTION (Light Theme) */}
        <header className="relative bg-white pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden border-b border-slate-200">
          {/* Subtle Ambient Gold Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,#DDB56A15,transparent_70%)] blur-[90px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,#0A204908,transparent_70%)] blur-[80px] pointer-events-none"></div>

          <div className="max-w-[1320px] mx-auto px-5 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-[#FCF9F4] border border-[#DDB56A]/40 px-3.5 py-1.5 rounded-full mb-5 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#DDB56A] animate-pulse"></span>
                <span className="text-[#0A2049] font-bold text-[10px] sm:text-xs tracking-widest uppercase">
                  Tax Health Check Journal
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2049] tracking-tight leading-[1.15] mb-4">
                Ugandan Tax Law, Audits & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB56A] to-[#b89047]">
                  Strategic Compliance Intelligence.
                </span>
              </h1>

              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light max-w-2xl">
                Statutory analysis, URA policy breakdowns, penalty defense blueprints, and practical bookkeeping guides prepared by licensed tax legal specialists in Kampala.
              </p>
            </div>
          </div>
        </header>

        {/* 2. DOCKED UTILITY & FILTER BAR */}
        <section className="relative z-20 -mt-8 max-w-[1320px] mx-auto px-5 lg:px-12">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_10px_30px_-10px_rgba(10,32,73,0.08)] p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                const count = category === "All" 
                  ? BLOG_POSTS.length 
                  : BLOG_POSTS.filter((p) => p.tag === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#0A2049] text-white shadow-sm"
                        : "bg-[#FCF9F4] text-slate-600 hover:text-[#0A2049] hover:bg-slate-100 border border-slate-200/70"
                    }`}
                  >
                    <span>{category}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                      isActive ? "bg-white/20 text-[#DDB56A]" : "bg-slate-200/60 text-slate-500"
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search advisories or keywords..."
                className="w-full bg-[#FCF9F4] border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0A2049] focus:bg-white transition-all"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* 3. CONTENT AREA */}
        <section className="max-w-[1320px] mx-auto px-5 lg:px-12 py-10 md:py-16">
          {filteredPosts.length === 0 ? (
            /* Empty State */
            <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto shadow-sm">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#FCF9F4] border border-[#DDB56A]/40 flex items-center justify-center text-[#DDB56A] text-2xl font-bold mb-4">
                !
              </div>
              <h3 className="text-lg font-bold text-[#0A2049] mb-1">No matching articles found</h3>
              <p className="text-xs md:text-sm text-slate-500 mb-6">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try another search term or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="bg-[#0A2049] text-white hover:bg-[#132c5e] text-xs font-bold px-5 py-2.5 rounded-xl transition-all"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="space-y-10 md:space-y-14">
              {/* FEATURED ARTICLE SPOTLIGHT (Shown when no active keyword search) */}
              {!searchQuery && featuredPost && (
                <article className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-[0_20px_45px_-15px_rgba(10,32,73,0.1)] transition-all duration-300 overflow-hidden group">
                  <div className="grid lg:grid-cols-12 gap-6 p-6 sm:p-8 lg:p-10 items-center">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="bg-[#0A2049] text-[#DDB56A] text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md">
                          Featured Insight
                        </span>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getTagBadgeStyle(featuredPost.tag)}`}>
                          {featuredPost.tag}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {featuredPost.readTime}
                        </span>
                      </div>

                      <Link href={`/blog/${featuredPost.slug}`} className="block group">
                        <h2 className="text-2xl sm:text-3xl font-black text-[#0A2049] group-hover:text-[#DDB56A] transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>
                      </Link>

                      <p className="text-sm md:text-base text-slate-600 leading-relaxed font-light">
                        {featuredPost.excerpt}
                      </p>

                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#0A2049] text-[#DDB56A] font-bold text-xs flex items-center justify-center">
                            TH
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#0A2049]">{featuredPost.author.name}</p>
                            <p className="text-[10px] text-slate-400">{featuredPost.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#FCF9F4] rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between h-full space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#0A2049] mb-3">
                          Executive Takeaways
                        </p>
                        <ul className="space-y-2.5">
                          {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                              <span className="text-[#DDB56A] font-bold mt-0.5">✓</span>
                              <span>{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 bg-[#0A2049] hover:bg-[#132c5e] text-white text-xs font-bold py-3 rounded-xl transition-all shadow-sm"
                      >
                        Read Full Advisory
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* ARTICLE GRID */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#0A2049]">
                    {searchQuery ? "Search Results" : "Recent Legal Advisories"}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    Showing {(searchQuery ? filteredPosts : regularPosts).length} Articles
                  </span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {(searchQuery ? filteredPosts : regularPosts).map((post) => (
                    <article
                      key={post.slug}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-[0_16px_36px_-12px_rgba(10,32,73,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group overflow-hidden"
                    >
                      {/* Top Accent Strip */}
                      <div className="h-1.5 w-full bg-gradient-to-r from-[#0A2049] via-[#DDB56A] to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                      <div className="p-6 md:p-7 flex flex-col h-full">
                        {/* Meta Tags */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getTagBadgeStyle(post.tag)}`}>
                            {post.tag}
                          </span>
                          <span className="text-[11px] text-slate-400 font-medium">
                            {post.readTime}
                          </span>
                        </div>

                        {/* Article Title */}
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-base md:text-lg font-bold text-[#0A2049] leading-snug mb-3 group-hover:text-[#DDB56A] transition-colors">
                            {post.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 flex-grow font-light line-clamp-3">
                          {post.excerpt}
                        </p>

                        {/* Card Footer */}
                        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                          <span className="text-[11px] text-slate-400 font-medium">
                            {post.date}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#0A2049] group-hover:text-[#DDB56A] transition-colors"
                          >
                            Read Article
                            <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 4. CONVERSION STRIP */}
        <section className="pb-16 px-5 lg:px-12">
          <div className="max-w-[1320px] mx-auto bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="bg-[#DDB56A]/10 text-[#0A2049] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block">
                  Confidential Advisory Service
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A2049]">
                  Have a specific tax assessment or URA issue?
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl font-light">
                  Reading articles is good for context, but tax law turns on specific facts. Request an independent review of your books, objections, or EFRIS status with our Kampala advisory advocates.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  href="/quiz"
                  className="w-full text-center bg-[#0A2049] hover:bg-[#132c5e] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all shadow-md"
                >
                  Run 2-Min Risk Check
                </Link>
                <Link
                  href="/#book"
                  className="w-full text-center bg-[#FCF9F4] border border-slate-200 hover:border-[#0A2049] text-[#0A2049] text-xs font-bold py-3.5 px-6 rounded-xl transition-all"
                >
                  Book Strategy Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}