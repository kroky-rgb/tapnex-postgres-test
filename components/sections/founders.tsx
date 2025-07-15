"use client"

import Image from "next/image"
import { Linkedin, Instagram, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const founders = [
  {
    name: "Prabhav Jain",
    role: "Co-Founder",
    specialization: "Tech & Strategy",
    image: "/prabhav-photo.png",
    description:
      "Tech enthusiast, community builder, and event manager passionate about innovation, automation, and creating impactful real-world solutions.",
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-blue-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-indigo-100 hover:to-blue-100",
    borderColor: "border-indigo-200",
    hoverBorder: "hover:border-indigo-400",
    social: {
      linkedin: "https://www.linkedin.com/in/prabhavjain2004/",
      instagram: "https://www.instagram.com/prabhavjain2004/?hl=en",
      email: "prabhav@tapnex.tech",
    },
  },
  {
    name: "Moinak Mondal",
    role: "Co-Founder",
    specialization: "Product & Operations",
    image: "/moinak-photo.png",
    description:
      "A tech enthusiast with a foundation in AI, strong frontend development skills, and strengths in team management and problem solving skills.",
    color: "from-purple-500 to-violet-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    hoverBg: "hover:bg-gradient-to-br hover:from-purple-100 hover:to-violet-100",
    borderColor: "border-purple-200",
    hoverBorder: "hover:border-purple-400",
    social: {
      linkedin: "https://linkedin.com/in/moinakm",
      instagram: "https://www.instagram.com/moinak_m05/?hl=en",
      email: "moinak@tapnex.tech",
    },
  },
]

export function FoundersSection() {
  return (
    <section className="py-16 gradient-modern relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      {/* Professional pattern overlay */}
      <div className="absolute inset-0 pattern-grid opacity-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 drop-shadow-lg">
            <span className="relative">
              Meet Our Founders
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-slate-700 leading-relaxed drop-shadow-md">
            The visionaries behind TapNex's <span className="text-black font-bold">innovative event technology</span>{" "}
            solutions.
          </p>
        </div>

        <div className="space-y-8">
          {founders.map((founder, index) => (
            <Card
              key={index}
              className={`border-2 ${founder.borderColor} ${founder.hoverBorder} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${founder.bgColor} ${founder.hoverBg} backdrop-blur-sm group`}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  {/* Profile Image */}
                  <div className="md:col-span-3 flex justify-center md:justify-start">
                    <div className="relative">
                      <div
                        className={`w-32 h-32 rounded-full bg-gradient-to-br ${founder.color} p-1 shadow-xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Image
                          src={founder.image || "/placeholder.svg?height=128&width=128"}
                          alt={founder.name}
                          width={128}
                          height={128}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-6 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                    <div
                      className={`text-lg font-semibold bg-gradient-to-r ${founder.color} bg-clip-text text-transparent mb-1`}
                    >
                      {founder.role}
                    </div>
                    <div className="text-sm text-slate-500 mb-4 font-medium">{founder.specialization}</div>
                    <p className="text-slate-600 leading-relaxed">{founder.description}</p>
                  </div>

                  {/* Social Links */}
                  <div className="md:col-span-3 flex justify-center md:justify-end">
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:scale-110 transition-transform group/btn bg-transparent"
                      >
                        <a href={founder.social.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 group-hover/btn:text-blue-600 transition-colors mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:scale-110 transition-transform group/btn bg-transparent"
                      >
                        <a href={founder.social.instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram className="h-4 w-4 group-hover/btn:text-pink-600 transition-colors mr-2" />
                          Instagram
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:scale-110 transition-transform group/btn bg-transparent"
                      >
                        <a href={`mailto:${founder.social.email}`}>
                          <Mail className="h-4 w-4 group-hover/btn:text-green-600 transition-colors mr-2" />
                          Email
                        </a>
                      </Button>
                    </div>
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
