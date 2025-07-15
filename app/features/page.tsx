import { Features } from "@/components/sections/features"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - TapNex",
  description: "Explore the powerful features of TapNex for seamless event management, ticketing, and payments.",
}

export default function FeaturesPage() {
  return <Features />
}
