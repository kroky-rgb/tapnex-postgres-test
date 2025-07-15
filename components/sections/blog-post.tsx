"use client";

import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    content: string;
    excerpt: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    url: string;
  };
}

export function BlogPost({ post }: BlogPostProps) {
  console.log("Rendering BlogPost with post:", post); // Debug log
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: post.url,
      }).catch((error) => console.log("Error sharing:", error));
    } else {
      alert(`Sharing not supported on this device. Copy the URL: ${post.url}`);
    }
  };

  const getImageSrc = () => {
    try {
      return post.image || "/default-square-image.jpg";
    } catch (e) {
      console.error("Image load error:", e);
      return "/default-square-image.jpg";
    }
  };

  return (
    <article className="pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-50 to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-6">
            <Badge className="bg-indigo-600 hover:bg-indigo-700 mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          src={getImageSrc()}
          alt={`${post.title} featured image`}
          width={400}
          height={400}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-slate-700 leading-relaxed" />
        </div>
      </div>
    </article>
  );
}
