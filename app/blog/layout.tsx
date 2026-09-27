import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Legal Advisories | Tax Health Check",
  description: "Expert statutory analysis, URA policy breakdowns, penalty defense blueprints, and practical bookkeeping guides for Ugandan businesses.",
  openGraph: {
    title: "Ugandan Tax Law & Compliance Insights | Tax Health Check",
    description: "Expert statutory analysis, URA policy breakdowns, and penalty defense blueprints for Ugandan businesses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Legal Advisories | Tax Health Check",
    description: "Expert statutory analysis and URA policy breakdowns for Ugandan businesses.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}