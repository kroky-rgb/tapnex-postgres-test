"use client"

import { useEffect, useRef, useState } from "react"
import {
  CreditCard,
  DoorOpen,
  Ticket,
  Users,
  Megaphone,
  RefreshCw,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Globe,
  Clock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: CreditCard,
    title: "NFC Payments",
    description: "Contactless, secure, and instant payments for any event size with military-grade encryption.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    category: "Payments",
  },
  {
    icon: DoorOpen,
    title: "Entry Management",
    description: "Automated access control for attendees, staff, and VIPs with real-time tracking.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    category: "Access Control",
  },
  {
    icon: Ticket,
    title: "Digital Ticketing",
    description: "QR/NFC-based ticketing with instant validation and fraud prevention.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-green-100 hover:to-emerald-100",
    borderColor: "border-green-200",
    hoverBorder: "hover:border-green-400",
    category: "Ticketing",
  },
  {
    icon: Users,
    title: "Volunteer System",
    description: "Comprehensive volunteer management with role assignment and performance tracking.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-orange-100 hover:to-red-100",
    borderColor: "border-orange-200",
    hoverBorder: "hover:border-orange-400",
    category: "Management",
  },
  {
    icon: Megaphone,
    title: "Sponsor Branding",
    description: "Custom-branded cards, booths, and digital touchpoints for maximum sponsor visibility.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-purple-100",
    borderColor: "border-indigo-200",
    hoverBorder: "hover:border-indigo-400",
    category: "Branding",
  },
  {
    icon: RefreshCw,
    title: "Refund Handling",
    description: "Automated refund processing with transparent tracking and instant settlements.",
    color: "from-teal-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-teal-50 to-blue-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-teal-100 hover:to-blue-100",
    borderColor: "border-teal-200",
    hoverBorder: "hover:border-teal-400",
    category: "Finance",
  },
  {
    icon: Shield,
    title: "Security",
    description: "End-to-end encryption with offline capability and fraud detection.",
    color: "from-red-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-red-100 hover:to-pink-100",
    borderColor: "border-red-200",
    hoverBorder: "hover:border-red-400",
    category: "Security",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    description: "Real-time data synchronization across all devices and platforms.",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-yellow-100 hover:to-orange-100",
    borderColor: "border-yellow-200",
    hoverBorder: "hover:border-yellow-400",
    category: "Technology",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Comprehensive dashboards with real-time insights and detailed reporting.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    category: "Analytics",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Native mobile apps for organizers and attendees with offline support.",
    color: "from-green-500 to-teal-500",
    bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-green-100 hover:to-teal-100",
    borderColor: "border-green-200",
    hoverBorder: "hover:border-green-400",
    category: "Mobile",
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "Support for multiple languages and currencies for international events.",
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-100",
    borderColor: "border-blue-200",
    hoverBorder: "hover:border-blue-400",
    category: "Localization",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring for your events.",
    color: "from-pink-500 to-red-500",
    bgColor: "bg-gradient-to-br from-pink-50 to-red-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-pink-100 hover:to-red-100",
    borderColor: "border-pink-200",
    hoverBorder: "hover:border-pink-400",
    category: "Support",
  },
]

export function FeatureGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`border-2 ${feature.borderColor} ${feature.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${feature.bgColor} ${feature.hoverBg} backdrop-blur-sm group overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        {feature.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
