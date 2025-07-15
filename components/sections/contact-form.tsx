"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Send } from "lucide-react"

const services = ["NFC Payments", "Access Control", "Volunteer Management", "Sponsor Branding", "Analytics Dashboard"]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect to thank you page
    router.push("/thank-you")
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-xl border-2 border-black bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
            <Mail className="mr-2 h-5 w-5 text-blue-600" />
            Send us a Message
          </CardTitle>
          <CardDescription className="text-gray-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  required
                  className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                Company/Organization
              </Label>
              <Input
                id="company"
                name="company"
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                placeholder="Your Company"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType" className="text-sm font-medium text-gray-700">
                Event Type
              </Label>
              <select
                id="eventType"
                name="eventType"
                className="w-full h-12 border border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg px-3 bg-white"
              >
                <option value="">Select event type</option>
                <option value="college-fest">College Fest</option>
                <option value="tech-expo">Tech Expo</option>
                <option value="corporate-event">Corporate Event</option>
                <option value="conference">Conference</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-700">What services are you interested in?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox id={service} name="services" value={service} />
                    <Label htmlFor={service} className="text-sm text-gray-600 cursor-pointer">
                      {service}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 rounded-lg resize-none"
                placeholder="Tell us about your event and how we can help..."
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
