"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Zap, BarChart3, Link, Clock, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    id: 1,
    title: "Lightning Fast Transactions",
    description: "Process payments 10x faster than traditional methods with our advanced NFC technology",
    subText: "Average transaction time: 0.3 seconds",
    color: "from-blue-500 to-cyan-500",
    particleColor: "bg-blue-400",
    icon: Zap,
    animationType: "electric",
  },
  {
    id: 2,
    title: "Real-Time Analytics",
    description: "Get instant insights into sales patterns, popular items, and customer behavior",
    subText: "Live dashboards with 99.9% accuracy",
    color: "from-purple-500 to-pink-500",
    particleColor: "bg-purple-400",
    icon: BarChart3,
    animationType: "dataFlow",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description: "Easy setup with existing POS systems and event management platforms",
    subText: "Setup completed in under 2 hours",
    color: "from-orange-500 to-red-500",
    particleColor: "bg-orange-400",
    icon: Link,
    animationType: "network",
  },
  {
    id: 4,
    title: "24/7 Support",
    description: "Round-the-clock technical support and customer service for uninterrupted operations",
    subText: "Average response time: 2 minutes",
    color: "from-indigo-500 to-blue-500",
    particleColor: "bg-indigo-400",
    icon: Clock,
    animationType: "heartbeat",
  },
]

export function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [particleAnimation, setParticleAnimation] = useState(0)

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setAnimationProgress((prev) => (prev >= 100 ? 0 : prev + 1))
        setParticleAnimation((prev) => (prev + 1) % 360)
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % benefits.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Reset animation when card changes
  useEffect(() => {
    setAnimationProgress(0)
  }, [currentIndex])

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const nextBenefit = () => {
    setCurrentIndex((prev) => (prev + 1) % benefits.length)
  }

  const prevBenefit = () => {
    setCurrentIndex((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const currentBenefit = benefits[currentIndex]

  const renderAnimation = () => {
    switch (currentBenefit.animationType) {
      case "electric":
        return (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {/* Electric bolts */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-blue-400 to-cyan-400 opacity-60"
                style={{
                  left: `${15 + i * 10}%`,
                  top: `${20 + (i % 3) * 20}%`,
                  height: `${30 + Math.sin(animationProgress / 10 + i) * 20}px`,
                  transform: `rotate(${Math.sin(animationProgress / 15 + i) * 15}deg)`,
                  animationDelay: `${i * 0.1}s`,
                  transition: "all 0.1s ease-out",
                }}
              />
            ))}
            {/* Electric rings */}
            {[...Array(3)].map((_, i) => (
              <div
                key={`ring-${i}`}
                className="absolute border-2 border-blue-400/30 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${100 + i * 50}px`,
                  height: `${100 + i * 50}px`,
                  transform: `translate(-50%, -50%) scale(${1 + Math.sin(animationProgress / 20 + i) * 0.2})`,
                  opacity: Math.sin(animationProgress / 15 + i) * 0.5 + 0.3,
                  transition: "all 0.1s ease-out",
                }}
              />
            ))}
          </div>
        )

      case "dataFlow":
        return (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {/* Data bars */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-gradient-to-t from-purple-400 to-pink-400 rounded-t-full"
                  style={{
                    height: `${20 + Math.sin(animationProgress / 10 + i * 0.5) * 30}px`,
                    opacity: 0.6 + Math.sin(animationProgress / 15 + i) * 0.3,
                    transition: "all 0.1s ease-out",
                  }}
                />
              ))}
            </div>
            {/* Floating data points */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`data-${i}`}
                className="absolute w-2 h-2 bg-purple-400 rounded-full"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${30 + Math.sin(animationProgress / 20 + i) * 20}%`,
                  opacity: Math.sin(animationProgress / 10 + i) * 0.8 + 0.2,
                  transform: `translateY(${Math.sin(animationProgress / 25 + i) * 10}px)`,
                  transition: "all 0.1s ease-out",
                }}
              />
            ))}
          </div>
        )

      case "network":
        return (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {/* Network nodes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`node-${i}`}
                className="absolute w-4 h-4 bg-gradient-to-br from-orange-400 to-red-400 rounded-full"
                style={{
                  left: `${20 + (i % 3) * 30}%`,
                  top: `${25 + Math.floor(i / 3) * 40}%`,
                  transform: `scale(${1 + Math.sin(animationProgress / 15 + i) * 0.3})`,
                  opacity: 0.7 + Math.sin(animationProgress / 20 + i) * 0.3,
                  transition: "all 0.1s ease-out",
                }}
              />
            ))}
            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#dc2626" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {[...Array(4)].map((_, i) => (
                <line
                  key={i}
                  x1={`${25 + (i % 2) * 30}%`}
                  y1={`${30 + Math.floor(i / 2) * 40}%`}
                  x2={`${45 + (i % 2) * 30}%`}
                  y2={`${50 + Math.floor(i / 2) * 40}%`}
                  stroke="url(#networkGradient)"
                  strokeWidth="2"
                  opacity={Math.sin(animationProgress / 20 + i) * 0.5 + 0.3}
                />
              ))}
            </svg>
          </div>
        )

      case "heartbeat":
        return (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {/* Heartbeat pulse */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={`pulse-${i}`}
                  className="absolute border-2 border-indigo-400/40 rounded-full"
                  style={{
                    width: `${80 + i * 40}px`,
                    height: `${80 + i * 40}px`,
                    left: "50%",
                    top: "50%",
                    transform: `translate(-50%, -50%) scale(${1 + Math.sin(animationProgress / 10 + i * 2) * 0.3})`,
                    opacity: Math.sin(animationProgress / 15 + i) * 0.4 + 0.2,
                    transition: "all 0.1s ease-out",
                  }}
                />
              ))}
            </div>
            {/* Status indicators */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`status-${i}`}
                className="absolute w-3 h-3 bg-indigo-400 rounded-full"
                style={{
                  left: `${30 + Math.cos((i * Math.PI) / 4) * 25}%`,
                  top: `${50 + Math.sin((i * Math.PI) / 4) * 25}%`,
                  opacity: Math.sin(animationProgress / 12 + i) * 0.6 + 0.4,
                  transform: `scale(${0.8 + Math.sin(animationProgress / 18 + i) * 0.4})`,
                  transition: "all 0.1s ease-out",
                }}
              />
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <section ref={sectionRef} className="py-24 section-light pattern-grid overflow-hidden relative">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${currentBenefit.particleColor} rounded-full opacity-30 animate-pulse`}
            style={{
              left: `${10 + ((i * 4.5) % 80)}%`,
              top: `${10 + ((i * 7) % 80)}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + (i % 3)}s`,
              transform: `rotate(${particleAnimation + i * 18}deg) translateX(${Math.sin(particleAnimation / 10 + i) * 20}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="relative">
              Why Choose TapNex?
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Experience the perfect blend of{" "}
            <span className="relative text-indigo-600 font-semibold">
              innovation and reliability
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
            </span>
          </p>
        </div>

        {/* Enhanced Navigation Buttons */}
        <div className="flex justify-center gap-6 mb-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevBenefit}
            className="rounded-full p-4 bg-slate-900 hover:bg-slate-800 border-slate-900 text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextBenefit}
            className="rounded-full p-4 bg-slate-900 hover:bg-slate-800 border-slate-900 text-white hover:text-white transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={toggleAutoPlay}
            variant="outline"
            size="sm"
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoPlaying ? "Pause" : "Play"} Auto-rotation
          </Button>
        </div>

        {/* Animation Container */}
        <div className="relative">
          {/* Main Benefit Display */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mx-auto max-w-4xl border border-white/20">
            {/* Unique Animation for Each Card */}
            {renderAnimation()}

            {/* Content */}
            <div className="relative z-10 text-center">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r ${currentBenefit.color} mb-8 shadow-2xl relative overflow-hidden`}
                style={{
                  transform: `scale(${1 + Math.sin(animationProgress / 20) * 0.1})`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* Rotating inner ring */}
                <div
                  className="absolute inset-2 border-2 border-white/30 rounded-full"
                  style={{
                    transform: `rotate(${animationProgress * 3}deg)`,
                  }}
                />
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative z-10">
                  <currentBenefit.icon
                    className={`w-6 h-6 bg-gradient-to-r ${currentBenefit.color} bg-clip-text text-transparent`}
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-6">{currentBenefit.title}</h3>

              <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto mb-6">
                {currentBenefit.description}
              </p>

              {/* Floating Sub-text Card */}
              <div className="relative inline-block">
                <div
                  className={`bg-gradient-to-r ${currentBenefit.color} text-white px-6 py-3 rounded-full shadow-lg font-medium text-sm backdrop-blur-sm border border-white/20`}
                  style={{
                    transform: `translateY(${Math.sin(animationProgress / 15) * 5}px)`,
                    transition: "transform 0.1s ease-out",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1), 0 0 20px rgba(99, 102, 241, 0.3)",
                  }}
                >
                  {currentBenefit.subText}
                </div>
                {/* Floating sparkles around sub-text */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${-10 + i * 120}%`,
                      top: `${-20 + (i % 2) * 140}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: "2s",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Progress Indicators */}
            <div className="flex justify-center gap-3 mt-8">
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 group ${
                    index === currentIndex
                      ? "w-12 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-blue-400/50 scale-110"
                      : "w-4 h-4 bg-slate-300 hover:bg-slate-400 hover:scale-125 rounded-full backdrop-blur-sm"
                  }`}
                  aria-label={`Go to ${benefits[index].title}`}
                >
                  {index === currentIndex && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping opacity-30"></div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
