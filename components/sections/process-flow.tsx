"use client"

import { useEffect, useRef, useState } from "react"
import { CreditCard, Wallet, Coins, BarChart3, Users, CheckCircle2 } from "lucide-react"

const workflowNodes = [
  {
    id: "entry",
    type: "start",
    icon: Users,
    title: "Event Entry",
    description: "Attendee arrives at event",
    position: { x: 250, y: 150 },
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: "nfc-issue",
    type: "process",
    icon: CreditCard,
    title: "NFC Card Issued",
    description: "Receive NFC card/band",
    position: { x: 500, y: 150 },
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: "recharge",
    type: "process",
    icon: Wallet,
    title: "Account Recharge",
    description: "Top up via cash/UPI",
    position: { x: 750, y: 150 },
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    id: "payment",
    type: "process",
    icon: Coins,
    title: "Tap to Pay",
    description: "Purchase at stalls",
    position: { x: 500, y: 450 },
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
  {
    id: "analytics",
    type: "end",
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Live insights dashboard",
    position: { x: 250, y: 450 },
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
]

const connections = [
  { from: "entry", to: "nfc-issue", path: "M 330 150 L 420 150" },
  { from: "nfc-issue", to: "recharge", path: "M 580 150 L 670 150" },
  { from: "recharge", to: "payment", path: "M 750 230 Q 625 340 500 370" },
  { from: "payment", to: "analytics", path: "M 420 450 L 330 450" },
  { from: "analytics", to: "entry", path: "M 250 370 L 250 230" },
]

export function ProcessFlow() {
  const [activeNode, setActiveNode] = useState<string>("entry")
  const [animationStep, setAnimationStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          startAnimation()
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)

    intervalRef.current = setInterval(() => {
      setAnimationStep((prev) => {
        const nextStep = (prev + 1) % workflowNodes.length
        setActiveNode(workflowNodes[nextStep].id)
        return nextStep
      })
    }, 2500)
  }

  const stopAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const toggleAnimation = () => {
    setIsPlaying((prev) => {
      if (!prev) {
        startAnimation()
      } else {
        stopAnimation()
      }
      return !prev
    })
  }

  const handleNodeClick = (nodeId: string) => {
    const nodeIndex = workflowNodes.findIndex((node) => node.id === nodeId)
    setAnimationStep(nodeIndex)
    setActiveNode(nodeId)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-100/40 to-pink-100/40 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Experience the seamless flow of our NFC payment ecosystem
          </p>
        </div>

        {/* Workflow Canvas - Desktop */}
        <div className="relative hidden lg:block">
          <div className="relative w-full h-[600px] mx-auto max-w-6xl">
            {/* SVG for Connections */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 1000 600"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                {/* Gradient for active connections */}
                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>

                {/* Arrow marker */}
                <marker
                  id="arrowhead"
                  markerWidth="12"
                  markerHeight="8"
                  refX="11"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,8 L12,4 z" fill="url(#activeGradient)" />
                </marker>
              </defs>

              {/* Connection Paths */}
              {connections.map((connection, index) => {
                const isActive =
                  activeNode === connection.from ||
                  (animationStep > 0 && workflowNodes[animationStep - 1]?.id === connection.from)

                return (
                  <g key={`${connection.from}-${connection.to}`}>
                    {/* Base path */}
                    <path
                      d={connection.path}
                      stroke="#e2e8f0"
                      strokeWidth="3"
                      fill="none"
                      className="transition-all duration-500"
                    />

                    {/* Active animated path */}
                    {isActive && (
                      <path
                        d={connection.path}
                        stroke="url(#activeGradient)"
                        strokeWidth="4"
                        fill="none"
                        markerEnd="url(#arrowhead)"
                        className="animate-pulse"
                        style={{
                          filter: "drop-shadow(0 0 8px rgba(99, 102, 241, 0.4))",
                        }}
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          values="0,1000;1000,0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </path>
                    )}
                  </g>
                )
              })}
            </svg>

            {/* Workflow Nodes */}
            {workflowNodes.map((node, index) => {
              const isActive = activeNode === node.id
              const isCompleted = animationStep > index

              return (
                <div
                  key={node.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 cursor-pointer z-20 ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                  style={{
                    left: `${(node.position.x / 1000) * 100}%`,
                    top: `${(node.position.y / 600) * 100}%`,
                    transitionDelay: `${index * 200}ms`,
                  }}
                  onClick={() => handleNodeClick(node.id)}
                >
                  {/* Node Container */}
                  <div className={`relative group ${isActive ? "z-30" : "z-20"}`}>
                    {/* Glow Effect for Active Node */}
                    {isActive && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${node.color} rounded-2xl blur-xl opacity-30 scale-110 animate-pulse`}
                      ></div>
                    )}

                    {/* Main Node */}
                    <div
                      className={`
                      relative w-24 h-24 rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 border-2
                      ${
                        isActive
                          ? `bg-gradient-to-br ${node.color} text-white shadow-2xl scale-110 ${node.borderColor}`
                          : `${node.bgColor} text-slate-700 hover:shadow-2xl ${node.borderColor}`
                      }
                      ${isCompleted && !isActive ? "ring-2 ring-green-400 ring-opacity-50" : ""}
                    `}
                    >
                      {/* Completion Check */}
                      {isCompleted && !isActive && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}

                      {/* Icon */}
                      <div className="flex items-center justify-center h-full">
                        <node.icon className={`w-8 h-8 ${isActive ? "animate-pulse" : ""}`} />
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/50 animate-ping"></div>
                      )}
                    </div>

                    {/* Node Label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 text-center min-w-max">
                      <h3
                        className={`text-sm font-bold mb-1 transition-colors duration-300 ${
                          isActive ? "text-indigo-600" : "text-slate-900"
                        }`}
                      >
                        {node.title}
                      </h3>
                      <p className="text-xs text-slate-600 max-w-24">{node.description}</p>
                    </div>

                    {/* Pulse Animation for Active Node */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-2xl border-4 border-indigo-400 animate-ping opacity-30"></div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Workflow */}
        <div className="lg:hidden relative mb-8">
          <div className="max-w-xs mx-auto px-2">
            {/* Row 1: First 3 nodes (Event Entry, NFC Card, Account Recharge) */}
            <div className="grid grid-cols-3 gap-1 mb-4">
              {[workflowNodes[0], workflowNodes[1], workflowNodes[2]].map((node, index) => {
                const isActive = activeNode === node.id
                const Icon = node.icon
                return (
                  <div key={node.id} className="text-center" onClick={() => handleNodeClick(node.id)}>
                    <div
                      className={`relative w-12 h-12 rounded-lg shadow-md transition-all duration-500 cursor-pointer mx-auto mb-2 border ${
                        isActive
                          ? `bg-gradient-to-br ${node.color} text-white shadow-lg scale-105 ${node.borderColor} ring-1 ring-blue-400`
                          : `${node.bgColor} text-slate-700 hover:shadow-lg ${node.borderColor}`
                      }`}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Icon className={`w-6 h-6 ${isActive ? "animate-pulse" : ""}`} />
                      </div>
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg border border-white/50 animate-ping"></div>
                      )}
                    </div>
                    <h3
                      className={`text-xs font-semibold mb-1 transition-colors duration-300 ${isActive ? "text-indigo-600" : "text-slate-900"}`}
                    >
                      {node.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-tight">{node.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Horizontal arrows between top 3 nodes */}
            <div className="relative -mt-2 mb-4">
              <div className="flex items-center justify-between px-6">
                {/* Arrow 1: Event Entry to NFC Card */}
                <div
                  className={`w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-500 ${
                    activeNode === workflowNodes[0].id || activeNode === workflowNodes[1].id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`absolute -right-0.5 -top-0.5 w-1 h-1 bg-blue-500 rounded-full transition-all duration-500 ${
                      activeNode === workflowNodes[0].id || activeNode === workflowNodes[1].id ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>

                {/* Arrow 2: NFC Card to Account Recharge */}
                <div
                  className={`w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 ${
                    activeNode === workflowNodes[1].id || activeNode === workflowNodes[2].id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`absolute -right-0.5 -top-0.5 w-1 h-1 bg-purple-500 rounded-full transition-all duration-500 ${
                      activeNode === workflowNodes[1].id || activeNode === workflowNodes[2].id ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Simple straight arrow from Account Recharge to Tap to Pay */}
            <div className="relative mb-4">
              <div className="flex justify-end pr-6">
                <div
                  className={`w-0.5 h-8 bg-gradient-to-b from-purple-400 to-orange-400 transition-all duration-500 ${
                    activeNode === workflowNodes[2].id || activeNode === workflowNodes[3].id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-orange-500 rounded-full transition-all duration-500 ${
                      activeNode === workflowNodes[2].id || activeNode === workflowNodes[3].id ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Row 2: Tap to Pay node positioned right */}
            <div className="flex justify-end pr-2 mb-4">
              <div className="text-center cursor-pointer" onClick={() => handleNodeClick(workflowNodes[3].id)}>
                <div
                  className={`relative w-12 h-12 rounded-lg shadow-md transition-all duration-500 mx-auto mb-2 border ${
                    activeNode === workflowNodes[3].id
                      ? `bg-gradient-to-br ${workflowNodes[3].color} text-white shadow-lg scale-105 ${workflowNodes[3].borderColor} ring-1 ring-blue-400`
                      : `${workflowNodes[3].bgColor} text-slate-700 hover:shadow-lg ${workflowNodes[3].borderColor}`
                  }`}
                >
                  <div className="flex items-center justify-center h-full">
                    <Coins className={`w-6 h-6 ${activeNode === workflowNodes[3].id ? "animate-pulse" : ""}`} />
                  </div>
                  {activeNode === workflowNodes[3].id && (
                    <div className="absolute inset-0 rounded-lg border border-white/50 animate-ping"></div>
                  )}
                </div>
                <h3
                  className={`text-xs font-semibold mb-1 transition-colors duration-300 ${activeNode === workflowNodes[3].id ? "text-indigo-600" : "text-slate-900"}`}
                >
                  {workflowNodes[3].title}
                </h3>
                <p className="text-xs text-slate-600 leading-tight">{workflowNodes[3].description}</p>
              </div>
            </div>

            {/* Horizontal arrow from Tap to Pay to Analytics */}
            <div className="relative mb-4">
              <div className="flex justify-center pr-4">
                <div
                  className={`w-16 h-0.5 bg-gradient-to-l from-orange-400 to-pink-400 transition-all duration-500 ${
                    activeNode === workflowNodes[3].id || activeNode === workflowNodes[4].id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`absolute -left-0.5 -top-0.5 w-1 h-1 bg-pink-500 rounded-full transition-all duration-500 ${
                      activeNode === workflowNodes[3].id || activeNode === workflowNodes[4].id ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            {/* Row 3: Analytics node positioned left */}
            <div className="flex justify-start pl-2 mb-4">
              <div className="text-center cursor-pointer" onClick={() => handleNodeClick(workflowNodes[4].id)}>
                <div
                  className={`relative w-14 h-14 rounded-lg shadow-md transition-all duration-500 mx-auto mb-2 border ${
                    activeNode === workflowNodes[4].id
                      ? `bg-gradient-to-br ${workflowNodes[4].color} text-white shadow-lg scale-105 ${workflowNodes[4].borderColor} ring-1 ring-blue-400`
                      : `${workflowNodes[4].bgColor} text-slate-700 hover:shadow-lg ${workflowNodes[4].borderColor}`
                  }`}
                >
                  <div className="flex items-center justify-center h-full">
                    <BarChart3 className={`w-7 h-7 ${activeNode === workflowNodes[4].id ? "animate-pulse" : ""}`} />
                  </div>
                  {activeNode === workflowNodes[4].id && (
                    <div className="absolute inset-0 rounded-lg border border-white/50 animate-ping"></div>
                  )}
                </div>
                <h3
                  className={`text-xs font-semibold mb-1 transition-colors duration-300 ${activeNode === workflowNodes[4].id ? "text-indigo-600" : "text-slate-900"}`}
                >
                  {workflowNodes[4].title}
                </h3>
                <p className="text-xs text-slate-600 leading-tight">{workflowNodes[4].description}</p>
              </div>
            </div>

            {/* Straight vertical arrow from Analytics back to Event Entry */}
            <div className="relative">
              <div className="flex justify-start pl-8">
                <div
                  className={`w-0.5 h-16 bg-gradient-to-t from-pink-400 to-green-400 transition-all duration-500 ${
                    activeNode === workflowNodes[4].id || activeNode === workflowNodes[0].id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                >
                  <div
                    className={`absolute -top-0.5 -left-0.5 w-1 h-1 bg-green-500 rounded-full transition-all duration-500 ${
                      activeNode === workflowNodes[4].id || activeNode === workflowNodes[0].id ? "animate-pulse" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mt-12 space-x-4">
          {workflowNodes.map((node, index) => (
            <button
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                activeNode === node.id
                  ? "bg-indigo-600 scale-125 shadow-lg"
                  : animationStep > index
                    ? "bg-green-400 scale-110"
                    : "bg-slate-300 hover:bg-slate-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap items-center justify-center space-x-2 sm:space-x-6 px-4 sm:px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 max-w-sm sm:max-w-none mx-auto">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Live System</span>
            </div>
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Real-time Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
              <span className="text-xs sm:text-sm font-medium text-slate-700">Secure Transactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
