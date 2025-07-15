"use client"

import { useState } from "react"
import { Calendar, Clock, ArrowRight, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const blogs = [
  {
    id: 1,
    title: "NFC Payments: Contactless Transactions Made Simple",
    excerpt:
      "Learn how NFC technology enables fast, secure, and contactless payments, transforming the event industry and beyond.",
    author: "Nirupam Thapa",
    date: "2024-02-01",
    readTime: "5 min read",
    category: "Technology",
    slug: "nfc-payments-contactless-transactions",
    image: "/TapNex-payment-device.jpg",
  },
  {
    id: 2,
    title: "Entry Management: Organizing Crowd Flow with Smart Access",
    excerpt:
      "Discover how smart entry management systems using QR codes, NFC, and facial recognition streamline crowd flow and enhance event security.",
    author: "Tanya Singh",
    date: "2024-02-05",
    readTime: "6 min read",
    category: "Event Management",
    slug: "entry-management-smart-access",
    image: "/TapNex-event-entry.jpg",
  },
]

export default function BlogGrid() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBlogs = (blogs || []).filter((blog) =>
    blog && (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <Card className="card-professional border-l-4 border-l-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-12 text-lg border-2 border-slate-200 focus:border-indigo-500"
            />
          </div>
        </CardContent>
      </Card>

      {/* Blog Posts Grid */}
      <div className="grid gap-8">
        {filteredBlogs.map((blog) => (
          blog && blog.slug ? (
            <Card
              key={blog.id}
              className="group card-professional border-l-4 border-l-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-full">
                    <Image src={blog.image} alt={`${blog.title} image`} width={400} height={300} className="object-cover" />
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
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6">{blog.excerpt}</p>
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : null
        ))}
      </div>

      {/* No More Posts Message */}
      <Card className="card-professional border-b-4 border-b-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <Calendar className="h-12 w-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-slate-900 mb-2">That's all for now!</h3>
          <p className="text-slate-600 mb-4">
            You've reached the end of our blog posts. Check back soon for more insights.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
