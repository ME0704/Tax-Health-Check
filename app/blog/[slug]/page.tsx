import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. DYNAMIC SEO METADATA GENERATOR
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Tax Health Check",
      description: "The requested tax advisory could not be found.",
    };
  }

  return {
    title: `${post.title} | Tax Health Check`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: [post.tag, "Uganda Tax", "URA"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// 2. STATIC PATH GENERATOR FOR FAST LOADING
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// 3. MAIN PAGE COMPONENT
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col selection:bg-[#DDB56A]/30 selection:text-[#0A2049]">
      <Navbar />

      <main className="flex-grow">
        {/* CLEAN EDITORIAL HEADER */}
        <section className="bg-[#FCF9F4] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-5%] w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,#DDB56A10,transparent_70%)] blur-[80px] pointer-events-none"></div>
          
          <div className="max-w-[800px] mx-auto px-5 lg:px-0 relative z-10 text-center">
            {/* Breadcrumbs & Meta */}
            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-semibold mb-6">
              <Link href="/" className="hover:text-[#0A2049] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#0A2049] transition-colors">Insights</Link>
              <span>/</span>
              <span className="text-[#0A2049] truncate max-w-[120px] sm:max-w-none">{post.title}</span>
            </div>

            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="bg-white border border-slate-200 text-[#0A2049] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                {post.tag}
              </span>
              <span className="text-xs text-slate-500 font-medium">{post.readTime}</span>
            </div>

            {/* Title & Excerpt */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0A2049] leading-[1.15] mb-6 tracking-tight">
              {post.title}
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-2xl mx-auto mb-8">
              {post.excerpt}
            </p>

            {/* Author Block */}
            <div className="flex items-center justify-center gap-3 pt-6 border-t border-slate-200/60 max-w-sm mx-auto">
              <div className="w-10 h-10 rounded-full bg-[#0A2049] text-[#DDB56A] font-bold text-xs flex items-center justify-center shadow-sm">
                THC
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0A2049]">{post.author.name}</p>
                <p className="text-[11px] text-slate-500 font-medium">{post.date}</p>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN READING EXPERIENCE */}
        <section className="py-12 md:py-20 px-5 lg:px-0">
          <div className="max-w-[720px] mx-auto space-y-12">
            
            {/* Executive Takeaways Box */}
            <div className="bg-[#FCF9F4] p-8 md:p-10 rounded-2xl border-l-[6px] border-[#DDB56A] shadow-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-[#0A2049] mb-4 flex items-center gap-2">
                Executive Summary
              </h3>
              <ul className="space-y-3">
                {post.keyTakeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                    <span className="text-[#DDB56A] font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Paragraphs */}
            <article className="space-y-10">
              {post.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-black text-[#0A2049] leading-snug mb-2">
                    {sec.subheading}
                  </h2>
                  
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-base md:text-[1.1rem] text-slate-700 leading-[1.8] font-light">
                      {p}
                    </p>
                  ))}

                  {/* Context Callout */}
                  {sec.callout && (
                    <div className="my-8 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm relative overflow-hidden">
                      <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                        sec.callout.type === "warning" ? "bg-red-500" :
                        sec.callout.type === "statute" ? "bg-[#0A2049]" : "bg-[#DDB56A]"
                      }`}></div>
                      
                      <strong className={`font-black uppercase tracking-widest text-[10px] block mb-2 ${
                        sec.callout.type === "warning" ? "text-red-600" :
                        sec.callout.type === "statute" ? "text-[#0A2049]" : "text-[#DDB56A]"
                      }`}>
                        {sec.callout.type === "warning" && "Compliance Warning"}
                        {sec.callout.type === "statute" && "Statutory Reference"}
                        {sec.callout.type === "tip" && "Advisory Tip"}
                      </strong>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </article>

            <hr className="border-slate-200 my-12" />

            {/* In-Article Conversion CTA */}
            <div className="bg-[#0A2049] text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,#DDB56A30,transparent)] pointer-events-none"></div>
              
              <span className="text-[10px] font-black uppercase tracking-widest text-[#DDB56A] mb-3 relative z-10">
                Stop Guessing Your Tax Position
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">
                Does this apply to your business?
              </h3>
              <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-lg mb-8 relative z-10 font-light">
                Do not wait for a URA audit to find out. Book a one-on-one Strategy Session with our legal tax experts to clear your exposure today.
              </p>
              
              <Link
                href="/#book"
                className="bg-[#DDB56A] hover:bg-[#cfa658] text-[#0A2049] font-black text-sm md:text-base px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 relative z-10 w-full sm:w-auto"
              >
                Book Strategy Call
              </Link>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="pt-8">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0A2049] mb-6 text-center">
                  Continue Reading
                </h3>
                <div className="grid sm:grid-cols-2 gap-5">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="bg-[#FCF9F4] p-6 rounded-2xl border border-slate-200 hover:border-[#DDB56A] transition-colors block group"
                    >
                      <span className="text-[9px] font-black text-[#DDB56A] uppercase tracking-wider block mb-2">
                        {rel.tag}
                      </span>
                      <h4 className="text-sm md:text-base font-bold text-[#0A2049] group-hover:text-[#DDB56A] transition-colors leading-snug">
                        {rel.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}