"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, BookOpen } from "lucide-react"

const aboutCards = [
  {
    icon: BookOpen,
    title: "Our Story",
    content:
      "TapNex is more than just a payment system — we empower organizers with a full suite of event tools like ticketing, volunteer management, and access control.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-blue-100",
    borderColor: "border-indigo-200",
    hoverBorder: "hover:border-indigo-300",
  },
  {
    icon: Target,
    title: "Mission",
    content: "To make every event cashless, seamless, and data-driven.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-violet-100",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-300",
  },
  {
    icon: Eye,
    title: "Vision",
    content: "To be India's most trusted event-tech partner for all event sizes.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-emerald-100 hover:to-teal-100",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-300",
  },
]

export function AboutContent() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xl text-slate-700 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
            TapNex, powered by NextGen FC, is an{" "}
            <span className="relative text-indigo-600 font-semibold">
              all-in-one event tech platform
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </span>{" "}
            revolutionizing the way events are managed and experienced.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <Card
              key={index}
              className={`border-2 ${card.borderColor} ${card.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${card.bgColor} ${card.hoverBg} backdrop-blur-sm group`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <card.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  <span className="relative">
                    {card.title}
                    <div
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r ${card.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </span>
                </h3>
                <p className="text-slate-700 leading-relaxed">{card.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
