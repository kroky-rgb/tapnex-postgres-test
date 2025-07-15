"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Zap, TrendingUp, Users, DollarSign, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: Users,
    text: "Perfect for College Fests",
    color: "from-blue-500 to-indigo-600",
    hoverColor: "hover:from-blue-600 hover:to-indigo-700",
  },
  {
    icon: Zap,
    text: "Instant Transactions",
    color: "from-indigo-500 to-purple-600",
    hoverColor: "hover:from-indigo-600 hover:to-purple-700",
  },
  {
    icon: TrendingUp,
    text: "Real-time Dashboards",
    color: "from-purple-500 to-violet-600",
    hoverColor: "hover:from-purple-600 hover:to-violet-700",
  },
  {
    icon: DollarSign,
    text: "Vendor Settlements Made Easy",
    color: "from-violet-500 to-blue-600",
    hoverColor: "hover:from-violet-600 hover:to-blue-700",
  },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-modern">
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Professional pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <Badge
            variant="secondary"
            className="mb-6 px-6 py-3 text-sm font-medium bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/30 transition-colors"
          >
            <Star className="w-4 h-4 mr-2 text-black" />
            <span className="font-semibold text-black">Revolutionizing Event Technology</span>
          </Badge>

          <div className="flex justify-center mb-8">
            <Image
              src="/tapnex-logo.png"
              alt="TapNex Logo"
              width={200}
              height={200}
              className="sm:w-56 sm:h-56 md:w-64 md:h-64 shadow-2xl hover:scale-105 transition-transform duration-300 pulse-elegant"
            />
          </div>

          <h1 className="text-[1.75rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 max-w-[90vw] mx-auto drop-shadow-lg">
            Tap into Simplicity with{" "}
            <span className="relative gradient-text-elegant">
              TapNex
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-full"></div>
            </span>
          </h1>

          <p className="text-sm leading-relaxed sm:text-xl md:text-2xl text-slate-700 max-w-4xl mx-auto mb-8 px-4 drop-shadow-md">
            Smart NFC-based cashless payment system for college fests, tech expos, and events. We don't just offer
            payments; <span className="relative text-black font-bold">we offer an experience</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group card-professional"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-105 transition-transform duration-200`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <p className="text-sm font-semibold text-slate-900 drop-shadow-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto btn-professional text-white px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-2xl"
            >
              <Link href="/contact">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 hover:border-white/50 px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 text-base sm:text-lg font-semibold glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-105 rounded-2xl bg-transparent text-black"
            >
              <Link href="/solutions">
                <Play className="mr-2 h-5 w-5" />
                Explore Solutions
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
