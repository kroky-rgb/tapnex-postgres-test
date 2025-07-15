"use client"

import { TrendingUp, Users, Zap, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Events Powered",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    value: "10K+",
    label: "Transactions Processed",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "System Uptime",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Award,
    value: "24/7",
    label: "Customer Support",
    color: "from-orange-500 to-red-500",
  },
]

export function CompanyStats() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Impact</h2>
          <p className="text-xl text-slate-700">Numbers that showcase our commitment to excellence.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4`}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-slate-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
