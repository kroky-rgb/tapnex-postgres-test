"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Calendar, Phone, Mail, ArrowRight, Home, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ThankYouContent() {
  const [mounted, setMounted] = useState(false)
  const [showElements, setShowElements] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    setTimeout(() => setShowElements(true), 300)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Interactive Gradient Orbs */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-600/15 to-indigo-600/15 rounded-full blur-3xl"
          style={{
            right: `${mousePosition.x * 0.008}px`,
            bottom: `${mousePosition.y * 0.008}px`,
          }}
        />

        {/* Subtle Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Success Icon */}
          <div className="relative mb-12 mt-8">
            <div
              className={`w-28 h-28 mx-auto bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-1000 ${
                showElements ? "scale-100 rotate-0" : "scale-0 rotate-180"
              }`}
            >
              <CheckCircle className="w-14 h-14 text-white" />
            </div>
            {/* Ripple Effects */}
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`absolute inset-0 w-28 h-28 mx-auto border-4 border-green-400/50 rounded-full animate-ping transition-opacity duration-1000 ${
                  showElements ? "opacity-30" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.7}s` }}
              />
            ))}
          </div>

          {/* Main Heading */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              showElements ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Thank You!
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Your request has been received!</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We're excited to help transform your events. Our team will get back to you within 24 hours.
            </p>
          </div>

          {/* Interactive Cards Grid */}
          <div
            className={`grid md:grid-cols-3 gap-6 my-16 transform transition-all duration-1000 delay-500 ${
              showElements ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            {/* What's Next */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Calendar className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">What's Next?</h3>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  Review your requirements
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  Schedule personalized demo
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                  Discuss implementation
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-3">Get In Touch</h3>
              <div className="text-gray-300 space-y-3 text-sm">
                <div className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+91 78985 75626</span>
                </div>
                <div className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>+91 80179 70125</span>
                </div>
                <div className="flex items-center justify-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>info@tapnex.tech</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Timeline</h3>
              <div className="text-gray-300 space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>24hrs - Initial contact</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <span>2-3 days - Demo session</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <span>1 week - Proposal ready</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-700 ${
              showElements ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 px-8 py-4 text-lg font-semibold rounded-2xl"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 shadow-2xl hover:shadow-white/10 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 px-8 py-4 text-lg font-semibold rounded-2xl backdrop-blur-md"
            >
              <Link href="/features">
                <Zap className="w-5 h-5 mr-2" />
                Explore Features
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      .animate-float {
        animation: float 8s ease-in-out infinite;
      }
    `}</style>
    </div>
  )
}
