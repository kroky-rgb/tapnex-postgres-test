import type { Metadata } from "next"
import { ThankYouContent } from "@/components/sections/thank-you-content"

export const metadata: Metadata = {
  title: "Thank You - Demo Booked | TapNex",
  description: "Thank you for booking a demo with TapNex. We'll be in touch soon to discuss your event payment needs.",
}

export default function ThankYouPage() {
  return <ThankYouContent />
}
