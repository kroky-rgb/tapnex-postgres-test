"use client"

import { useState } from "react"
import { Calendar, Tag, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "Technology", count: 1, color: "from-blue-500 to-cyan-500" },
  { name: "Event Management", count: 1, color: "from-teal-500 to-cyan-500" },
]

const popularTags = [
  "NFC",
  "Payments",
  "Technology",
  "Events",
  "Entry Management",
  "Smart Access",
]

const recentPosts = [
  {
    title: "NFC Payments: Contactless Transactions Made Simple",
    date: "2024-02-01",
    slug: "nfc-payments-contactless-transactions",
  },
  {
    title: "Entry Management: Organizing Crowd Flow with Smart Access",
    date: "2024-02-05",
    slug: "entry-management-smart-access",
  },
]

export function BlogFilters() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="mb-12">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Categories */}
        <Card className="card-professional border-t-4 border-t-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Categories</h3>
            </div>
            <div className="space-y-2">
              <Button
                variant={selectedCategory === "All" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => setSelectedCategory("All")}
              >
                All Posts ({categories.reduce((sum, cat) => sum + cat.count, 0)})
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "ghost"}
                  className="w-full justify-between"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <span>{category.name}</span>
                  <span className="text-xs bg-slate-200 text-slate-600 px-2 py-1 rounded-full">{category.count}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Popular Tags */}
        <Card className="card-professional border-t-4 border-t-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Popular Tags</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-indigo-50 hover:border-indigo-300 bg-transparent"
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Posts */}
        <Card className="card-professional border-t-4 border-t-slate-900 shadow-xl overflow-hidden bg-white/95 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-indigo-600" />
              <h3 className="font-semibold text-slate-900">Recent Posts</h3>
            </div>
            <div className="space-y-3">
              {recentPosts.map((post, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-3 py-2">
                  <h4 className="font-medium text-slate-900 text-sm line-clamp-2 mb-1">{post.title}</h4>
                  <p className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
