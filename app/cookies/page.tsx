import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Cookie Policy - TapNex",
  description: "TapNex Cookie Policy - Learn about how we use cookies and similar technologies.",
  alternates: {
    canonical: "https://tapnex.tech/cookies",
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Cookie Policy"
        description="Learn about how we use cookies and similar technologies to improve your experience."
      />

      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-slate-600 mb-6">Last updated: January 26, 2025</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">What Are Cookies</h3>
              <p className="text-slate-600 mb-6">
                Cookies are small text files that are stored on your computer or mobile device when you visit our
                website.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">How We Use Cookies</h3>
              <p className="text-slate-600 mb-6">
                We use cookies to improve your browsing experience, analyze site traffic, and personalize content.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Types of Cookies We Use</h3>
              <ul className="text-slate-600 mb-6 list-disc pl-6">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand how you use our site</li>
                <li>Preference cookies to remember your settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Managing Cookies</h3>
              <p className="text-slate-600">
                You can control and manage cookies through your browser settings. Note that disabling cookies may affect
                the functionality of our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
