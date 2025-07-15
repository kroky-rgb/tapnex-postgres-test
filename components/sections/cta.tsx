"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    text: "Made for both small and large events",
    bgColor: "bg-gradient-to-br from-cyan-50 to-blue-100",
    iconColor: "text-cyan-500",
  },
  {
    text: "Advanced refund control system",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-100",
    iconColor: "text-purple-500",
  },
  {
    text: "Sponsor-branded cards and booths",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-100",
    iconColor: "text-emerald-500",
  },
  {
    text: "Real-time analytics dashboard",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
    iconColor: "text-orange-500",
  },
  {
    text: "Offline-ready encrypted system",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100",
    iconColor: "text-indigo-500",
  },
]

export function Cta() {
  // Changed export name from CTA to Cta
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Ready to Transform Your Events?</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Join the cashless revolution and make your next event seamless,
            <br />
            secure, and successful with TapNex.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`${feature.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-md mb-4 ${feature.iconColor}`}
                >
                  <Check className="h-5 w-5" />
                </div>
                <p className="text-slate-800 font-medium text-sm leading-relaxed">{feature.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Schedule Your Demo
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-white hover:bg-gray-50 text-slate-700 border-2 border-gray-200 hover:border-gray-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
