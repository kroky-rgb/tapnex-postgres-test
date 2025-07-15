"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { GraduationCap, Utensils, Music, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const useCases = [
  {
    icon: GraduationCap,
    title: "College Fests",
    description: "Cashless, secure, and fun for students and organizers alike.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500",
    color: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-indigo-100",
    hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-700",
  },
  {
    icon: Utensils,
    title: "Food Festivals",
    description: "Fast payments, no queues, and real-time sales tracking for vendors.",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=500",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-blue-100 hover:to-cyan-100",
    hoverColor: "group-hover:from-blue-600 group-hover:to-cyan-700",
  },
  {
    icon: Music,
    title: "Music Concerts",
    description: "Seamless entry, cashless bars, and sponsor branding everywhere.",
    image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=500",
    color: "from-orange-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-orange-50 to-pink-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-orange-100 hover:to-pink-100",
    hoverColor: "group-hover:from-orange-600 group-hover:to-pink-700",
  },
  {
    icon: Building,
    title: "Corporate Events",
    description: "Professional, secure, and data-driven for all business needs.",
    image: "/corporate-events.jpeg",
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-emerald-100 hover:to-teal-100",
    hoverColor: "group-hover:from-emerald-600 group-hover:to-teal-700",
  },
]

export function UseCasesGrid() {
  // Changed export name from UseCases to UseCasesGrid
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
    <section ref={sectionRef} className="py-24 section-accent pattern-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text-elegant mb-6">
            <span className="relative">
              Perfect for Every Event
              <div className="section-divider"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            From intimate{" "}
            <span className="relative text-blue-600 font-semibold">
              college gatherings
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
            </span>{" "}
            to large-scale{" "}
            <span className="relative text-indigo-600 font-semibold">
              corporate events
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </span>
            , TapNex adapts to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 shadow-xl card-professional ${useCase.bgColor} ${useCase.hoverBg} backdrop-blur-sm scroll-reveal ${
                isVisible ? "revealed" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={useCase.image || "/placeholder.svg?height=200&width=400"}
                  alt={useCase.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${useCase.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>
              <CardContent className="p-6 text-center">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} ${useCase.hoverColor} text-white mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg pulse-elegant`}
                >
                  <useCase.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-700 leading-relaxed">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
