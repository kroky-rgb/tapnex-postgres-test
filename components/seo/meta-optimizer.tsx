"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface MetaOptimizerProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
}

export function MetaOptimizer({ title, description, keywords, image }: MetaOptimizerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Update meta tags dynamically
    const updateMetaTags = () => {
      // Update title
      if (title) {
        document.title = title
      }

      // Update meta description
      if (description) {
        let metaDesc = document.querySelector('meta[name="description"]')
        if (!metaDesc) {
          metaDesc = document.createElement("meta")
          metaDesc.setAttribute("name", "description")
          document.head.appendChild(metaDesc)
        }
        metaDesc.setAttribute("content", description)
      }

      // Update keywords
      if (keywords && keywords.length > 0) {
        let metaKeywords = document.querySelector('meta[name="keywords"]')
        if (!metaKeywords) {
          metaKeywords = document.createElement("meta")
          metaKeywords.setAttribute("name", "keywords")
          document.head.appendChild(metaKeywords)
        }
        metaKeywords.setAttribute("content", keywords.join(", "))
      }

      // Update Open Graph tags
      updateOpenGraphTags()

      // Update Twitter Card tags
      updateTwitterCardTags()
    }

    const updateOpenGraphTags = () => {
      const ogTags = [
        { property: "og:url", content: `https://tapnex.tech${pathname}` },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title || document.title },
        { property: "og:description", content: description || "" },
        { property: "og:image", content: image || "https://tapnex.tech/og-image.jpg" },
        { property: "og:site_name", content: "TapNex" },
        { property: "og:locale", content: "en_IN" },
      ]

      ogTags.forEach(({ property, content }) => {
        if (content) {
          let metaTag = document.querySelector(`meta[property="${property}"]`)
          if (!metaTag) {
            metaTag = document.createElement("meta")
            metaTag.setAttribute("property", property)
            document.head.appendChild(metaTag)
          }
          metaTag.setAttribute("content", content)
        }
      })
    }

    const updateTwitterCardTags = () => {
      const twitterTags = [
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@tapnex" },
        { name: "twitter:title", content: title || document.title },
        { name: "twitter:description", content: description || "" },
        { name: "twitter:image", content: image || "https://tapnex.tech/og-image.jpg" },
      ]

      twitterTags.forEach(({ name, content }) => {
        if (content) {
          let metaTag = document.querySelector(`meta[name="${name}"]`)
          if (!metaTag) {
            metaTag = document.createElement("meta")
            metaTag.setAttribute("name", name)
            document.head.appendChild(metaTag)
          }
          metaTag.setAttribute("content", content)
        }
      })
    }

    updateMetaTags()
  }, [pathname, title, description, keywords, image])

  return null
}
