"use client"

import { useState, useRef, useEffect } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const blogs = [
  {
    id: 1,
    title: "Revolutionizing Event Payments: The Future of NFC Technology",
    excerpt:
      "Discover how NFC technology is transforming the event industry with seamless, contactless payment solutions that enhance attendee experience.",
    image: "/TapNex-payment-device.jpg",
    author: "Nirupam Thapa",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Technology",
    slug: "revolutionizing-event-payments-nfc-technology",
  },
  {
    id: 2,
    title: "The Psychology of Cashless Payments at Events",
    excerpt:
      "Understanding how cashless payments influence attendee behavior and spending patterns at events, leading to increased revenue and satisfaction.",
    image: "/TapNex-event-entry.jpg",
    author: "Tanya",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Research",
    slug: "psychology-cashless-payments-events",
  },
]

export function BlogSection() {
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
    <section ref={sectionRef} className="py-24 section-light pattern-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Side - Latest Insights */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                <span className="relative">
                  Latest Insights & Updates
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </span>
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl leading-relaxed font-medium">
                Stay updated with the latest trends, case studies, and insights from the{" "}
                <span className="relative text-indigo-600 font-semibold">
                  event technology world
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </span>
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-8">
              {blogs.map((blog, index) => (
                <Card
                  key={blog.id}
                  className={`group card-professional border-0 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm border-l-4 border-l-slate-900 scroll-reveal ${
                    isVisible ? "revealed" : ""
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {blog.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                          <span>{blog.author}</span>
                          <span>•</span>
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{blog.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{blog.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                          >
                            Read More
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All Blogs Button */}
            <div className="text-left mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link href="/blog">
                  View All Blog Posts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Google Calendar & Events */}
          <div className="lg:col-span-4">
            {/* Google Calendar */}
            <Card className="border-2 border-slate-900 shadow-lg mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  Book a Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <iframe
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ18bbt_azdPUekL8ZfqoyDZPLiFECTjxYyKJrsE6wPf18ibzDLV-phLuc3U9tlnKAqGw9FdF09F?gv=true"
                  style={{ border: 0 }}
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="rounded-lg border-2 border-slate-900"
                  title="Book a Demo Calendar"
                />
              </CardContent>
            </Card>

            {/* Upcoming Events - No Events */}
            <Card className="card-professional border-t-4 border-t-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Upcoming Events</h3>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-500 text-sm">No upcoming events scheduled</p>
                  <p className="text-slate-400 text-xs mt-2">Check back later for new events</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
