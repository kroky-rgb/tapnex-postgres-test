"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import {
  ChevronLeft,
  ChevronRight,
  CreditCard,
  DoorOpen,
  Ticket,
  Users,
  Megaphone,
  RefreshCw,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: CreditCard,
    title: "NFC Payments",
    description:
      "Contactless, secure, and instant payments for any event size with military-grade encryption and real-time processing.",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 via-cyan-50 to-blue-100",
    artType: "payment",
  },
  {
    icon: Users,
    title: "Volunteer System",
    description:
      "Comprehensive volunteer management with role assignment, performance tracking, and real-time coordination tools.",
    color: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 via-purple-50 to-indigo-100",
    artType: "network",
  },
  {
    icon: DoorOpen,
    title: "Entry Management",
    description:
      "Automated access control for attendees, staff, and VIPs with facial recognition and real-time tracking.",
    color: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 via-violet-50 to-purple-100",
    artType: "security",
  },
  {
    icon: Megaphone,
    title: "Sponsor Branding",
    description:
      "Custom-branded cards, booths, digital displays, and interactive touchpoints for maximum sponsor visibility.",
    color: "from-violet-500 to-pink-500",
    bgGradient: "from-violet-50 via-pink-50 to-violet-100",
    artType: "broadcast",
  },
  {
    icon: Ticket,
    title: "Digital Ticketing",
    description: "QR/NFC-based ticketing with instant validation, fraud prevention, and seamless entry experience.",
    color: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 via-rose-50 to-pink-100",
    artType: "digital",
  },
  {
    icon: RefreshCw,
    title: "Refund Handling",
    description:
      "Automated refund processing with transparent tracking, instant settlements, and comprehensive audit trails.",
    color: "from-rose-500 to-orange-500",
    bgGradient: "from-rose-50 via-orange-50 to-rose-100",
    artType: "refund",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live event insights, sales tracking, attendance monitoring, and comprehensive reporting dashboards.",
    color: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 via-amber-50 to-orange-100",
    artType: "analytics",
  },
]

export function FeatureWheel3D() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Simplified card positioning for better performance
  const getCardClass = useCallback(
    (index: number) => {
      const diff = (index - currentIndex + features.length) % features.length
      if (diff === 0) return "active"
      if (diff === 1) return "next"
      if (diff === features.length - 1) return "prev"
      return "hidden"
    },
    [currentIndex],
  )

  // Auto-rotation with longer intervals for smoother performance
  useEffect(() => {
    if (isAutoRotating) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % features.length)
      }, 5000) // Increased to 5 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoRotating])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextFeature()
      } else if (e.key === "ArrowLeft") {
        prevFeature()
      } else if (e.key === " ") {
        e.preventDefault()
        toggleAutoRotation()
      }
    }

    document.addEventListener("keydown", handleKeyDown, { passive: false })
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const nextFeature = useCallback(() => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }, [])

  const prevFeature = useCallback(() => {
    setIsAutoRotating(false)
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }, [])

  const goToFeature = useCallback((index: number) => {
    setIsAutoRotating(false)
    setCurrentIndex(index)
  }, [])

  const toggleAutoRotation = useCallback(() => {
    setIsAutoRotating(!isAutoRotating)
  }, [isAutoRotating])

  // Simplified artistic design for better performance
  const SimpleArtisticDesign = ({ artType }: { artType: string }) => {
    const designs = {
      payment: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 right-8 w-16 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl shadow-lg transform rotate-3">
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center">
              <div className="text-xs font-bold text-yellow-800">NFC</div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 h-8">
            <div className="flex justify-between items-end h-full">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t-full"
                  style={{ height: `${40 + i * 15}%` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ),
      network: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 left-8 w-3 h-3 bg-indigo-400 rounded-full"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-3 h-3 bg-indigo-400 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-3 h-3 bg-indigo-400 rounded-full"></div>
          <svg className="absolute inset-0 w-full h-full">
            <line x1="15%" y1="15%" x2="85%" y2="15%" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
            <line x1="15%" y1="85%" x2="85%" y2="85%" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
            <line x1="15%" y1="15%" x2="15%" y2="85%" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
            <line x1="85%" y1="15%" x2="85%" y2="85%" stroke="#6366f1" strokeWidth="2" opacity="0.4" />
          </svg>
        </div>
      ),
      security: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 right-8 w-16 h-16 border-2 border-purple-400/50 rounded-full">
            <div className="absolute inset-2 border border-purple-300/40 rounded-full">
              <div className="absolute inset-2 bg-gradient-to-br from-purple-400/30 to-violet-500/30 rounded-full">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 w-12 h-8">
            <div className="grid grid-cols-4 grid-rows-3 gap-1 h-full w-full">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-purple-400/20 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      ),
      broadcast: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 left-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-violet-400/40 rounded-full"
                style={{
                  width: `${(i + 1) * 12}px`,
                  height: `${(i + 1) * 12}px`,
                }}
              ></div>
            ))}
          </div>
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex justify-center space-x-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-violet-400 to-pink-400 rounded-full"
                  style={{ height: `${15 + i * 3}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ),
      digital: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 right-8 w-16 h-16 bg-white rounded-xl p-2 shadow-lg">
            <div className="w-full h-full bg-black rounded grid grid-cols-6 grid-rows-6 gap-px">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`${Math.random() > 0.5 ? "bg-white" : "bg-black"} rounded-sm`}></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8 flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      ),
      refund: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 left-8 right-8">
            <div className="flex justify-between items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-gradient-to-br from-rose-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-rose-400 to-orange-400 rounded-full"
                  style={{ height: `${15 + i * 3}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      ),
      analytics: (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div className="absolute top-8 right-8 w-20 h-12">
            <div className="flex items-end justify-between h-full space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 bg-gradient-to-t from-orange-400 to-amber-400 rounded-t-full"
                  style={{ height: `${40 + i * 12}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 h-8">
            <svg className="w-full h-full">
              <polyline
                points="0,30 40,25 80,20 120,25 160,15"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2"
                opacity="0.7"
              />
              {[...Array(5)].map((_, i) => (
                <circle key={i} cx={i * 40 + 10} cy={25 - i * 2} r="2" fill="#f59e0b" />
              ))}
            </svg>
          </div>
        </div>
      ),
    }

    return designs[artType as keyof typeof designs] || null
  }

  return (
    <div className="min-h-screen gradient-modern relative overflow-hidden flex items-center justify-center">
      {/* Simplified background - only 2 shapes for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6">
            <span className="text-black font-bold">Powerful Features</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Experience the future of event technology with our comprehensive suite of{" "}
            <span className="text-black font-bold">intelligent solutions</span>
          </p>
        </div>

        {/* Mobile Navigation Above cards */}
        <div className="md:hidden flex justify-center items-center gap-4 mb-8">
          <Button
            onClick={prevFeature}
            size="lg"
            className="w-12 h-12 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label="Previous feature"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="text-slate-700 font-medium">
            <span className="text-indigo-600 font-bold">{currentIndex + 1}</span>
            <span className="mx-2">of</span>
            <span className="text-indigo-600 font-bold">{features.length}</span>
          </div>
          <Button
            onClick={nextFeature}
            size="lg"
            className="w-12 h-12 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-xl transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label="Next feature"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* 3D Feature Wheel */}
        <div className="relative max-w-7xl mx-auto">
          <div
            className="relative mx-auto"
            style={{
              perspective: "1000px",
              height: "500px", // Smaller height for mobile
            }}
          >
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card-3d absolute inset-0 transition-all duration-700 ease-out cursor-pointer ${getCardClass(index)}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                  onClick={() => goToFeature(index)}
                >
                  <div
                    className={`h-full w-full bg-gradient-to-br ${feature.bgGradient} rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm flex flex-col justify-center items-center p-8 md:p-16 text-center relative overflow-hidden group hover:shadow-3xl transition-all duration-300`}
                  >
                    {/* Simplified Artistic Design */}
                    <SimpleArtisticDesign artType={feature.artType} />

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-center max-w-2xl">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${feature.color} text-white mb-6 md:mb-8 shadow-xl group-hover:scale-105 transition-all duration-300 mx-auto`}
                      >
                        <feature.icon className="h-10 w-10 md:h-16 md:w-16" />
                      </div>

                      <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">{feature.title}</h3>

                      <p className="text-slate-700 text-base md:text-2xl leading-relaxed mx-auto">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Navigation Buttons - Side positioned */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-between items-center transform -translate-y-1/2 px-8 z-30 pointer-events-none">
              <Button
                onClick={prevFeature}
                size="lg"
                className="w-16 h-16 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 pointer-events-auto"
                aria-label="Previous feature"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                onClick={nextFeature}
                size="lg"
                className="w-16 h-16 rounded-full bg-slate-800/90 hover:bg-slate-700 text-white shadow-2xl transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/10 pointer-events-auto"
                aria-label="Next feature"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToFeature(index)}
                className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentIndex
                    ? "w-8 h-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full shadow-lg scale-110"
                    : "w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-125 rounded-full"
                }`}
                aria-label={`Go to ${features[index].title}`}
              />
            ))}
          </div>

          {/* Desktop Controls */}
          <div className="hidden md:block text-center mt-8 space-y-4">
            <div className="text-slate-700 font-medium text-lg">
              <span className="text-indigo-600 font-bold text-xl">{currentIndex + 1}</span>
              <span className="mx-2">of</span>
              <span className="text-indigo-600 font-bold text-xl">{features.length}</span>
            </div>
            <div className="flex justify-center items-center gap-4">
              <Button
                onClick={toggleAutoRotation}
                variant="outline"
                className="bg-black/90 border-black text-white hover:bg-black/80 hover:text-white backdrop-blur-sm transition-all duration-300"
              >
                {isAutoRotating ? "Pause" : "Play"} Auto-rotation
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card-3d {
          opacity: 0;
          transform: translateZ(-200px) scale(0.8);
        }
        
        .feature-card-3d.active {
          opacity: 1;
          transform: translateZ(0) scale(1);
        }
        
        .feature-card-3d.next {
          opacity: 0.6;
          transform: translateX(40%) translateZ(-100px) rotateY(-20deg) scale(0.85);
        }
        
        .feature-card-3d.prev {
          opacity: 0.6;
          transform: translateX(-40%) translateZ(-100px) rotateY(20deg) scale(0.85);
        }
        
        .feature-card-3d.hidden {
          opacity: 0;
          transform: translateZ(-300px) scale(0.5);
        }
        
        @media (max-width: 768px) {
          .feature-card-3d.next,
          .feature-card-3d.prev {
            opacity: 0;
            transform: translateZ(-200px) scale(0.7);
          }
        }
      `}</style>
    </div>
  )
}
