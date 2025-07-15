"use client"

import { useState, useEffect, useRef } from "react"
import { CreditCard, DoorOpen, Ticket, Users, Megaphone, RefreshCw } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion" // Import AnimatePresence for exit animations

const featuresData = [
  {
    id: "nfc-payments",
    icon: CreditCard,
    title: "NFC Payment Processing",
    description: "Seamless contactless payments with advanced NFC technology.",
    details: [
      "Instant payment processing at scale.",
      "Supports multiple payment methods.",
      "Real-time transaction tracking and reporting.",
      "Secure encryption protocols for every transaction.",
    ],
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    iconColor: "text-blue-500", // Specific color for icon when not active
  },
  {
    id: "entry-management",
    icon: DoorOpen, // Changed from QrCode to DoorOpen for better representation of entry
    title: "Smart Entry Management",
    description: "Automated and efficient access control for all attendees.",
    details: [
      "Rapid QR code scanning for quick entry.",
      "Real-time validation against attendee lists.",
      "Reduces queues and improves guest experience.",
      "Prevents unauthorized access and ticket fraud.",
    ],
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    iconColor: "text-indigo-500",
  },
  {
    id: "digital-ticketing", // New feature
    icon: Ticket,
    title: "Advanced Digital Ticketing",
    description: "Modern ticketing solutions with real-time validation.",
    details: [
      "Generate unique digital tickets for each booking.",
      "Easy distribution via email and mobile wallets.",
      "Real-time ticket validation at entry points.",
      "Supports various ticket types (VIP, standard, etc.).",
    ],
    color: "bg-gradient-to-br from-purple-500 to-violet-600",
    iconColor: "text-purple-500",
  },
  {
    id: "volunteer-system", // Renamed from user-roles to be more specific
    icon: Users,
    title: "Integrated Volunteer System",
    description: "Streamline volunteer management and coordination.",
    details: [
      "Assign, track, and manage volunteer shifts.",
      "Communication tools for team coordination.",
      "Performance tracking and reporting.",
      "Simplifies event staffing and operations.",
    ],
    color: "bg-gradient-to-br from-violet-500 to-blue-600",
    iconColor: "text-violet-500",
  },
  {
    id: "sponsor-branding", // New feature
    icon: Megaphone, // Changed from Shield to Megaphone for branding
    title: "Dynamic Sponsor Branding",
    description: "Maximize sponsor visibility with integrated branding opportunities.",
    details: [
      "Branded NFC cards and digital touchpoints.",
      "Customizable sponsor booths and signage.",
      "Real-time analytics on sponsor engagement.",
      "Enhances partnership value and ROI.",
    ],
    color: "bg-gradient-to-br from-blue-500 to-cyan-600",
    iconColor: "text-blue-500",
  },
  {
    id: "refund-handling", // New feature
    icon: RefreshCw, // Changed from Globe to RefreshCw for refunds
    title: "Effortless Refund Handling",
    description: "Transparent and easy refund process for all stakeholders.",
    details: [
      "Automated refund processing.",
      "Clear refund policies and tracking.",
      "Reduces administrative burden.",
      "Ensures customer satisfaction and trust.",
    ],
    color: "bg-gradient-to-br from-cyan-500 to-teal-600",
    iconColor: "text-cyan-500",
  },
]

export function Features() {
  const [activeFeatureId, setActiveFeatureId] = useState(featuresData[0].id)
  const activeFeature = featuresData.find((f) => f.id === activeFeatureId)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      setActiveFeatureId((prevId) => {
        const currentIndex = featuresData.findIndex((f) => f.id === prevId)
        const nextIndex = (currentIndex + 1) % featuresData.length
        return featuresData[nextIndex].id
      })
    }, 2000) // Change feature every 2 seconds
  }

  useEffect(() => {
    startAutoCycle()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  const handleFeatureClick = (id: string) => {
    setActiveFeatureId(id)
    startAutoCycle() // Reset auto-cycle on manual click
  }

  if (!activeFeature) return null

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            Revolutionize Your Events with TapNex
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the core capabilities that make TapNex the ultimate solution for modern event management.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Feature Selector (Left/Top) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8 w-full lg:w-1/3 max-w-md lg:max-w-none">
            {featuresData.map((feature) => (
              <motion.div
                key={feature.id}
                className={`relative p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ease-in-out
                  ${activeFeatureId === feature.id ? `${feature.color} text-white scale-105` : "bg-white text-slate-800 hover:bg-slate-50 hover:shadow-xl"}`}
                onClick={() => handleFeatureClick(feature.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                    ${activeFeatureId === feature.id ? "opacity-100" : ""}`}
                  style={{
                    background: `linear-gradient(45deg, ${feature.color.split("from-")[1].split(" ")[0]}, ${feature.color.split("to-")[1]})`,
                    zIndex: -1,
                  }}
                ></div>
                <div className="relative z-10 flex items-center space-x-4">
                  <feature.icon
                    className={`w-8 h-8 transition-colors duration-300
                      ${activeFeatureId === feature.id ? "text-white" : feature.iconColor}`}
                  />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p
                  className={`mt-3 text-sm transition-colors duration-300 ${activeFeatureId === feature.id ? "text-white/90" : "text-slate-500"}`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Feature Details (Right/Bottom) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature.id}
              className="relative bg-white p-8 md:p-12 rounded-3xl shadow-2xl w-full lg:w-2/3 max-w-2xl border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-4 rounded-full ${activeFeature.color} mr-4 shadow-md`}>
                  <activeFeature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900">{activeFeature.title}</h3>
              </div>
              <p className="text-xl text-slate-700 mb-8 leading-relaxed">{activeFeature.description}</p>
              <ul className="space-y-4 text-lg text-slate-600">
                {activeFeature.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${activeFeature.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
