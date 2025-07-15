"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { generateFAQSchema } from "@/components/seo/schema-generator"

const faqs = [
  {
    question: "Is TapNex suitable for small events?",
    answer:
      "TapNex is designed for both small college fests and large-scale events. Our scalable solution adapts to your event size and requirements.",
  },
  {
    question: "How secure are NFC payments?",
    answer:
      "All transactions are encrypted with military-grade AES-256 encryption. The system supports offline sync for reliability and includes fraud detection mechanisms.",
  },
  {
    question: "Can I get branded NFC cards?",
    answer:
      "Yes, we offer custom-branded NFC cards and bands for your event. This includes sponsor branding opportunities and custom designs.",
  },
  {
    question: "How do I get a demo?",
    answer:
      "Use the Google Calendar widget above to book a personalized demo with our team, or contact us directly via email or phone.",
  },
  {
    question: "How do I contact support?",
    answer:
      "For any issues, you can drop an email at support@tapnex.tech. We provide 24/7 technical support during events.",
  },
  {
    question: "What's the setup time for an event?",
    answer:
      "Setup typically takes 2-4 hours depending on event size. We provide on-site technical support for smooth deployment.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQ structured data
  const faqSchema = generateFAQSchema(faqs)

  return (
    <section className="py-16 gradient-modern relative overflow-hidden">
      {/* Add FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Professional pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 drop-shadow-lg">Frequently Asked Questions</h2>
          <p className="text-xl text-slate-700 drop-shadow-md">Get answers to common questions about TapNex.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/95 backdrop-blur-sm">
              <CardContent className="p-0">
                <div itemScope itemType="https://schema.org/Question">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="font-semibold text-gray-900 pr-4" itemProp="name">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="px-6 pb-6"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <p className="text-gray-600 leading-relaxed" itemProp="text">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
