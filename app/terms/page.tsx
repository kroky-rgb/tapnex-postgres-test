import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - TapNex",
  description: "TapNex Terms of Service - Terms and conditions for using our event technology platform.",
  alternates: {
    canonical: "https://tapnex.tech/terms",
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Terms of Service"
        description="Terms and conditions for using TapNex event technology platform."
      />

      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8 prose prose-lg max-w-none">
              <p className="text-slate-600 mb-6">Last updated: January 26, 2025</p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h3>
              <p className="text-slate-600 mb-6">
                By accessing and using TapNex services, you accept and agree to be bound by the terms and provision of
                this agreement.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Use License</h3>
              <p className="text-slate-600 mb-6">
                Permission is granted to temporarily use TapNex services for personal, non-commercial transitory viewing
                only.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Service Availability</h3>
              <p className="text-slate-600 mb-6">
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance
                will be communicated in advance.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contact Information</h3>
              <p className="text-slate-600">
                For questions about these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@tapnex.tech" className="text-indigo-600 hover:underline">
                  legal@tapnex.tech
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
