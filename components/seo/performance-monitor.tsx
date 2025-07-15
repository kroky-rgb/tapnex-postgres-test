"use client"

import { useEffect } from "react"

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const observeLCP = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log("LCP:", lastEntry.startTime)

          // Send to analytics if needed
          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "web_vitals", {
              name: "LCP",
              value: Math.round(lastEntry.startTime),
              event_category: "Performance",
            })
          }
        }).observe({ entryTypes: ["largest-contentful-paint"] })
      }

      // First Input Delay (FID)
      const observeFID = () => {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          entries.forEach((entry) => {
            console.log("FID:", entry.processingStart - entry.startTime)

            if (typeof window !== "undefined" && window.gtag) {
              window.gtag("event", "web_vitals", {
                name: "FID",
                value: Math.round(entry.processingStart - entry.startTime),
                event_category: "Performance",
              })
            }
          })
        }).observe({ entryTypes: ["first-input"] })
      }

      // Cumulative Layout Shift (CLS)
      const observeCLS = () => {
        let clsValue = 0
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries()
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log("CLS:", clsValue)

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "web_vitals", {
              name: "CLS",
              value: Math.round(clsValue * 1000),
              event_category: "Performance",
            })
          }
        }).observe({ entryTypes: ["layout-shift"] })
      }

      observeLCP()
      observeFID()
      observeCLS()
    }

    // Optimize images for better performance
    const optimizeImages = () => {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        // Add loading="lazy" if not already present
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy")
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async")
        }

        // Set proper aspect ratio to prevent layout shift
        if (!img.style.aspectRatio && !img.width && !img.height) {
          img.style.aspectRatio = "16/9"
          img.style.objectFit = "cover"
        }
      })
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: "/tapnex-logo.png", as: "image" },
        { href: "/nextgen-logo.png", as: "image" },
      ]

      criticalResources.forEach((resource) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.href = resource.href
        link.as = resource.as
        document.head.appendChild(link)
      })
    }

    // Monitor and optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      const scripts = document.querySelectorAll("script[src]")
      scripts.forEach((script) => {
        const src = script.getAttribute("src")
        if (src && (src.includes("analytics") || src.includes("gtag"))) {
          script.setAttribute("defer", "true")
        }
      })
    }

    observeWebVitals()
    optimizeImages()
    preloadCriticalResources()
    optimizeThirdPartyScripts()
  }, [])

  return null
}
