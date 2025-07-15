"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources with priority
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: "/tapnex-logo.png", as: "image", type: "image/png", priority: "high" },
        { href: "/nextgen-logo.png", as: "image", type: "image/png", priority: "high" },
        { href: "/TapNex-payment-device.jpg", as: "image", type: "image/jpeg", priority: "low" },
        { href: "/TapNex-event-entry.jpg", as: "image", type: "image/jpeg", priority: "low" },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          as: "style",
          priority: "high",
        },
      ]

      criticalResources.forEach((resource) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.href = resource.href
        link.as = resource.as
        if (resource.type) link.type = resource.type
        if (resource.priority) link.setAttribute("fetchpriority", resource.priority)
        if (resource.href.includes("font")) {
          link.crossOrigin = "anonymous"
        }
        document.head.appendChild(link)
      })
    }

    // Enhanced lazy loading with better intersection observer
    const implementAdvancedLazyLoading = () => {
      if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement
                if (img.dataset.src) {
                  img.src = img.dataset.src
                  img.classList.remove("lazy")
                  img.classList.add("loaded")
                  imageObserver.unobserve(img)
                }
              }
            })
          },
          {
            rootMargin: "50px",
            threshold: 0.1,
          },
        )

        const lazyImages = document.querySelectorAll("img[data-src]")
        lazyImages.forEach((img) => imageObserver.observe(img))
      }
    }

    // Optimize third-party scripts with better loading strategy
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtag"]')
      scripts.forEach((script) => {
        script.setAttribute("defer", "true")
        script.setAttribute("async", "true")
      })

      // Optimize Font Awesome loading
      const fontAwesome = document.querySelector('link[href*="font-awesome"]')
      if (fontAwesome) {
        fontAwesome.setAttribute("media", "print")
        fontAwesome.setAttribute("onload", "this.media='all'")
      }
    }

    // Enhanced Service Worker registration with better caching
    const registerAdvancedServiceWorker = async () => {
      if ("serviceWorker" in navigator && "caches" in window) {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js", {
            scope: "/",
            updateViaCache: "imports",
          })

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  console.log("New content available, please refresh.")
                }
              })
            }
          })
        } catch (error) {
          console.log("Service Worker registration failed:", error)
        }
      }
    }

    // Optimize images for better Core Web Vitals
    const optimizeImagesForCWV = () => {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        // Add loading="lazy" if not already present and not above fold
        if (!img.hasAttribute("loading") && !img.closest('[data-priority="high"]')) {
          img.setAttribute("loading", "lazy")
        }

        // Add decoding="async" for better performance
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async")
        }

        // Set proper aspect ratio to prevent layout shift
        if (!img.style.aspectRatio && !img.width && !img.height) {
          const rect = img.getBoundingClientRect()
          if (rect.width && rect.height) {
            img.style.aspectRatio = `${rect.width}/${rect.height}`
          }
        }
      })
    }

    // Reduce main thread blocking
    const reduceMainThreadBlocking = () => {
      // Use requestIdleCallback for non-critical tasks
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          // Defer non-critical animations
          const animations = document.querySelectorAll('[class*="animate-"]')
          animations.forEach((el) => {
            if (!el.closest('[data-priority="high"]')) {
              el.style.animationDelay = "100ms"
            }
          })
        })
      }
    }

    // Optimize CSS delivery
    const optimizeCSSDelivery = () => {
      // Load non-critical CSS asynchronously
      const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])')
      nonCriticalCSS.forEach((link) => {
        const href = link.getAttribute("href")
        if (href && !href.includes("font")) {
          link.setAttribute("media", "print")
          link.setAttribute("onload", "this.media='all'")
        }
      })
    }

    // Initialize all optimizations
    preloadCriticalResources()
    implementAdvancedLazyLoading()
    optimizeThirdPartyScripts()
    registerAdvancedServiceWorker()
    optimizeImagesForCWV()
    reduceMainThreadBlocking()
    optimizeCSSDelivery()

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    }
  }, [])

  return null
}
