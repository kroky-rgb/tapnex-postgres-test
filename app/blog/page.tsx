import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import BlogGrid from "@/components/sections/blog-grid"; // Updated to default import
import { BlogFilters } from "@/components/sections/blog-filters";

export const metadata: Metadata = {
  title: "Blog - TapNex Insights & Updates",
  description:
    "Stay updated with the latest trends, case studies, and insights from the event technology world. Expert articles on NFC payments, event management, and more.",
  alternates: {
    canonical: "https://tapnex.tech/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Blog & Insights"
        description="Stay ahead with expert insights, case studies, and the latest trends in event technology."
      />
      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogFilters />
          <BlogGrid />
        </div>
      </div>
    </div>
  );
}
