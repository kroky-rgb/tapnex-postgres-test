import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import { FAQ } from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "Contact & Demo - Get Started with TapNex",
  description:
    "Contact TapNex for event solutions, schedule a demo, or get support. Transform your events with our NFC payment technology.",
  alternates: {
    canonical: "https://tapnex.tech/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Get In Touch"
        description="Ready to transform your events? Let's discuss how TapNex can help."
      />
      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <FAQ />
    </div>
  )
}
