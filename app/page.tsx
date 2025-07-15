import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { BlogSection } from "@/components/sections/blog-section"
import { UseCasesGrid } from "@/components/sections/use-cases-grid" // Updated import path and component name
import { Cta } from "@/components/sections/cta" // Updated import name

export const metadata: Metadata = {
  title: "TapNex - NFC Payments for Events | Cashless Event Solutions",
  description:
    "Tap into Simplicity with TapNex. Smart NFC-based cashless payment system for college fests, tech expos, and events. Instant transactions, real-time analytics.",
  alternates: {
    canonical: "https://tapnex.tech",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <UseCasesGrid /> {/* Updated component name */}
      <BlogSection />
      <Cta /> {/* Updated component name */}
    </>
  )
}
