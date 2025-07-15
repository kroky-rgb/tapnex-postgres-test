"use client"

import { useState, useEffect } from "react"
import {
  CreditCard,
  Wallet,
  Coins,
  BarChart3,
  Users,
  ArrowRight,
  ArrowDown,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    id: 1,
    icon: Users,
    title: "Event Entry",
    description: "Attendee arrives at event venue",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "NFC Card Issued",
    description: "Receive NFC card or wristband",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Account Recharge",
    description: "Top up via cash or UPI",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: 4,
    icon: Coins,
    title: "Tap to Pay",
    description: "Purchase at food stalls",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: 5,
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live insights dashboard",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
]

const features = [
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Track revenue in real-time",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: DollarSign,
    title: "Transaction Data",
    description: "Monitor payment flows",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Clock,
    title: "Peak Hours",
    description: "Identify busy periods",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "End-to-end encryption",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the seamless flow of our NFC payment ecosystem
          </p>

          {/* Auto-play Control */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={toggleAutoPlay}
              variant="outline"
              size="sm"
              className="flex items-center gap-2 bg-transparent"
            >
              {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAutoPlaying ? "Pause" : "Play"} Auto-rotation
            </Button>
          </div>
        </div>

        {/* Desktop Workflow */}
        <div className="hidden lg:block mb-16">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id
              const Icon = step.icon

              return (
                <div key={step.id} className="flex items-center">
                  <div className="text-center cursor-pointer group" onClick={() => setActiveStep(step.id)}>
                    <div
                      className={`relative w-20 h-20 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 border-2 mx-auto mb-4 ${
                        isActive
                          ? `bg-gradient-to-br ${step.color} text-white shadow-2xl scale-110 ${step.borderColor}`
                          : `${step.bgColor} text-slate-700 hover:shadow-2xl ${step.borderColor}`
                      }`}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Icon className={`w-8 h-8 ${isActive ? "animate-pulse" : ""}`} />
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping"></div>
                      )}
                    </div>
                    <h3
                      className={`text-sm font-bold mb-2 transition-colors duration-300 ${
                        isActive ? "text-indigo-600" : "text-slate-900"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 max-w-24">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && <ArrowRight className="w-6 h-6 text-slate-400 mx-4 flex-shrink-0" />}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="lg:hidden mb-16">
          <div className="max-w-xs mx-auto px-2">
            {/* Row 1: First 3 steps */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {steps.slice(0, 3).map((step) => {
                const isActive = activeStep === step.id
                const Icon = step.icon
                return (
                  <div key={step.id} className="text-center" onClick={() => setActiveStep(step.id)}>
                    <div
                      className={`relative w-12 h-12 rounded-xl shadow-lg transition-all duration-500 cursor-pointer mx-auto mb-2 border-2 ${
                        isActive
                          ? `bg-gradient-to-br ${step.color} text-white shadow-2xl scale-110 ${step.borderColor} ring-2 ring-blue-400`
                          : `${step.bgColor} text-slate-700 hover:shadow-xl ${step.borderColor}`
                      }`}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Icon className={`w-5 h-5 ${isActive ? "animate-pulse" : ""}`} />
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl border-2 border-white/50 animate-ping"></div>
                      )}
                    </div>
                    <h3
                      className={`text-xs font-bold mb-1 transition-colors duration-300 ${isActive ? "text-indigo-600" : "text-slate-900"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600">{step.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Arrow down from 3rd step */}
            <div className="flex justify-end mb-3 pr-6">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
                <ArrowDown className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Row 2: 4th step positioned under 3rd */}
            <div className="flex justify-end mb-4 pr-2">
              <div className="text-center cursor-pointer" onClick={() => setActiveStep(steps[3].id)}>
                <div
                  className={`relative w-12 h-12 rounded-xl shadow-lg transition-all duration-500 mx-auto mb-2 border-2 ${
                    activeStep === steps[3].id
                      ? `bg-gradient-to-br ${steps[3].color} text-white shadow-2xl scale-110 ${steps[3].borderColor} ring-2 ring-blue-400`
                      : `${steps[3].bgColor} text-slate-700 hover:shadow-xl ${steps[3].borderColor}`
                  }`}
                >
                  <div className="flex items-center justify-center h-full">
                    <Coins className={`w-5 h-5 ${activeStep === steps[3].id ? "animate-pulse" : ""}`} />
                  </div>
                  {activeStep === steps[3].id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-white/50 animate-ping"></div>
                  )}
                </div>
                <h3
                  className={`text-xs font-bold mb-1 transition-colors duration-300 ${activeStep === steps[3].id ? "text-indigo-600" : "text-slate-900"}`}
                >
                  {steps[3].title}
                </h3>
                <p className="text-xs text-slate-600">{steps[3].description}</p>
              </div>
            </div>

            {/* Arrow back to center */}
            <div className="flex justify-center mb-4">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
                <ArrowDown className="w-3 h-3 text-white transform rotate-180" />
              </div>
            </div>

            {/* Row 3: Analytics step centered and larger */}
            <div className="flex justify-center">
              <div className="text-center cursor-pointer" onClick={() => setActiveStep(steps[4].id)}>
                <div
                  className={`relative w-16 h-16 rounded-xl shadow-lg transition-all duration-500 mx-auto mb-2 border-2 ${
                    activeStep === steps[4].id
                      ? `bg-gradient-to-br ${steps[4].color} text-white shadow-2xl scale-110 ${steps[4].borderColor} ring-2 ring-blue-400`
                      : `${steps[4].bgColor} text-slate-700 hover:shadow-xl ${steps[4].borderColor}`
                  }`}
                >
                  <div className="flex items-center justify-center h-full">
                    <BarChart3 className={`w-8 h-8 ${activeStep === steps[4].id ? "animate-pulse" : ""}`} />
                  </div>
                  {activeStep === steps[4].id && (
                    <div className="absolute inset-0 rounded-xl border-2 border-white/50 animate-ping"></div>
                  )}
                </div>
                <h3
                  className={`text-sm font-bold mb-1 transition-colors duration-300 ${activeStep === steps[4].id ? "text-indigo-600" : "text-slate-900"}`}
                >
                  {steps[4].title}
                </h3>
                <p className="text-xs text-slate-600">{steps[4].description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Features Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Powerful Analytics Dashboard</h3>
            <p className="text-lg text-slate-600">Get real-time insights into your event performance</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-sm mx-auto lg:max-w-none">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={`${feature.bgColor} rounded-xl p-4 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-slate-200`}
                >
                  <div
                    className={`w-10 h-10 ${feature.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-sm`}
                  >
                    <Icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-xs text-slate-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeStep === step.id
                  ? "bg-indigo-600 scale-125 shadow-lg"
                  : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
