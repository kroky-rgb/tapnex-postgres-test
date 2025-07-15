import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - TapNex",
  description: "TapNex Privacy Policy - Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://tapnex.tech/privacy",
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us. Learn how we collect, use, and protect your information."
      />

      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-slate-600 mb-6">Last updated: January 26, 2025</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Information We Collect</h3>
              <p className="text-slate-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, use our services,
                or contact us for support.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">How We Use Your Information</h3>
              <p className="text-slate-600 mb-6">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                and communicate with you.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Information Sharing</h3>
              <p className="text-slate-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Us</h3>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@tapnex.tech" className="text-indigo-600 hover:underline">
                  privacy@tapnex.tech
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
