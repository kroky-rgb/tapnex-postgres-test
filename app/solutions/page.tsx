import { PageHeader } from "@/components/ui/page-header"
import { UseCasesGrid } from "@/components/sections/use-cases-grid" // Updated import
import { Cta } from "@/components/sections/cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions | TapNex",
  description:
    "Discover how TapNex provides comprehensive solutions for various event types, from college fests to corporate gatherings.",
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        title="Our Solutions"
        description="TapNex offers tailored solutions to streamline operations and enhance experiences for every type of event."
      />
      <UseCasesGrid /> {/* Replaced SolutionsGrid with UseCasesGrid */}
      <Cta />
    </main>
  )
}
