"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Shield, Zap, Puzzle } from "lucide-react"

const techSpecs = [
  {
    category: "Hardware",
    icon: Cpu,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    specs: [
      "NFC Type A/B/F support",
      "13.56 MHz frequency",
      "Range: 4cm proximity",
      "ISO 14443 compliant",
      "Waterproof cards/bands",
    ],
  },
  {
    category: "Security",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-red-100 hover:to-pink-100",
    borderColor: "border-red-200",
    hoverBorder: "hover:border-red-400",
    specs: [
      "AES-256 encryption",
      "TLS 1.3 communication",
      "PCI DSS compliant",
      "Fraud detection AI",
      "Offline transaction support",
    ],
  },
  {
    category: "Performance",
    icon: Zap,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-emerald-100 hover:to-teal-100",
    borderColor: "border-emerald-200",
    hoverBorder: "hover:border-emerald-400",
    specs: [
      "< 200ms transaction time",
      "99.9% uptime SLA",
      "10,000+ concurrent users",
      "Real-time synchronization",
      "Auto-failover systems",
    ],
  },
  {
    category: "Integration",
    icon: Puzzle,
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-violet-100",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    specs: [
      "REST API available",
      "Webhook notifications",
      "SDK for mobile apps",
      "Third-party integrations",
      "Custom branding options",
    ],
  },
]

export function TechSpecs() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            <span className="relative">
              Technical Specifications
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-700">
            Built with enterprise-grade technology for reliability and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techSpecs.map((category, index) => (
            <Card
              key={index}
              className={`border-2 ${category.borderColor} ${category.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${category.bgColor} ${category.hoverBg} backdrop-blur-sm group`}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-slate-900">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.specs.map((spec, specIndex) => (
                    <Badge
                      key={specIndex}
                      variant="secondary"
                      className="block w-full text-left justify-start hover:scale-105 transition-transform duration-200"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
