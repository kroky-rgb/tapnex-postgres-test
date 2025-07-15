import type { Metadata } from "next"
import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Users, Zap, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Careers - Join the TapNex Team",
  description:
    "Join the TapNex team and help us revolutionize the event-tech industry. Explore career opportunities and be part of our innovative journey.",
  alternates: {
    canonical: "https://tapnex.tech/careers",
  },
}

const benefits = [
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work with passionate individuals who share your vision for innovation.",
  },
  {
    icon: Zap,
    title: "Cutting-edge Technology",
    description: "Work on the latest NFC and event technology solutions.",
  },
  {
    icon: Heart,
    title: "Impact-driven Work",
    description: "Make a real difference in how events are experienced worldwide.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Join Our Team"
        description="Help us revolutionize event technology and create amazing experiences for millions of people."
      />

      <div className="section-neutral pattern-grid py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-slate-50 to-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Open Positions</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We are always looking for passionate and talented individuals to join our team. If you are excited about
                changing the future of events and have the skills to make it happen, we would love to hear from you.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <a href="mailto:hr@tapnex.tech" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Your Resume
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
