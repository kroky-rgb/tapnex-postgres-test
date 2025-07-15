import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { AboutContent } from "@/components/sections/about-content"
import { FoundersSection } from "@/components/sections/founders"

export const metadata: Metadata = {
  title: "About TapNex - Revolutionizing Event Technology",
  description:
    "Learn about TapNex, our mission to make events cashless and seamless, our founders, and our journey as an event-tech innovator.",
  alternates: {
    canonical: "https://tapnex.tech/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="About TapNex" description="Revolutionizing event technology with innovative NFC solutions." />
      <div className="section-neutral pattern-grid py-16">
        <AboutContent />
      </div>
      <FoundersSection />
    </div>
  )
}
