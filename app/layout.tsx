import type { Metadata } from "next";
import { Nunito_Sans, Lora } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  // CRITICAL: Replace with your actual live deployed domain
  metadataBase: new URL("https://your-deployed-domain.com"), 
  
  title: "Tax Health Check | Expert URA Tax Advisory in Uganda",
  description: "Stop guessing your URA obligations. Get an independent compliance audit and a crystal-clear action plan.",
  keywords: "URA tax penalties, tax compliance Uganda, tax lawyer Kampala, VAT advisory Uganda, income tax health check",
  openGraph: {
    title: "Tax Health Check | Uganda Revenue Authority Advisory",
    description: "Clear your tax exposure and stay penalty-free in 30 days with expert legal advisory.",
    url: "/",
    siteName: "Tax Health Check",
    images: [
      {
        url: "/og-image.jpg", // Make sure this exact file is in your public/ folder
        width: 1200,
        height: 630,
        alt: "Tax Health Check Advisory",
      },
    ],
    locale: "en_UG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Health Check | Expert URA Tax Advisory",
    description: "Clear your tax exposure and stay penalty-free in 30 days.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${lora.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}