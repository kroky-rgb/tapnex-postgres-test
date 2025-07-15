"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const relatedPosts = [
  {
    id: 1,
    title: "NFC Payments: Contactless Transactions Made Simple",
    excerpt: "Learn how NFC technology enables fast, secure, and contactless payments, transforming the event industry and beyond.",
    image: "/TapNex-payment-device.jpg",
    author: "Nirupam Thapa",
    date: "2024-02-01",
    readTime: "5 min read",
    category: "Technology",
    slug: "nfc-payments-contactless-transactions",
  },
  {
    id: 2,
    title: "Entry Management: Organizing Crowd Flow with Smart Access",
    excerpt: "Discover how smart entry management systems using QR codes, NFC, and facial recognition streamline crowd flow and enhance event security.",
    image: "/TapNex-event-entry.jpg",
    author: "Tanya Singh",
    date: "2024-02-05",
    readTime: "6 min read",
    category: "Event Management",
    slug: "entry-management-smart-access",
  },
]

interface RelatedPostsProps {
  currentPostId: number
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  const filteredPosts = relatedPosts.filter((post) => post.id !== currentPostId).slice(0, 1)

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Continue exploring insights and trends in event technology</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="group card-professional border-0 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <span>{post.author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
