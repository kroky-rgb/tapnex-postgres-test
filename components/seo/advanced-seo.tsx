"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function AdvancedSEO() {
  const pathname = usePathname()

  useEffect(() => {
    // Enhanced preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        { href: "/tapnex-logo.png", as: "image", type: "image/png", priority: "high" },
        { href: "/nextgen-logo.png", as: "image", type: "image/png", priority: "high" },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
          as: "style",
          priority: "high",
        },
        { href: "/og-image.jpg", as: "image", type: "image/jpeg", priority: "low" },
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

    // Enhanced lazy loading with Intersection Observer v2
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

    // Enhanced breadcrumb navigation with JSON-LD
    const addEnhancedBreadcrumbs = () => {
      const breadcrumbContainer = document.getElementById("breadcrumb-container")
      if (breadcrumbContainer && pathname !== "/") {
        const pathSegments = pathname.split("/").filter(Boolean)
        const breadcrumbs = [
          { name: "Home", href: "/" },
          ...pathSegments.map((segment, index) => ({
            name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
            href: "/" + pathSegments.slice(0, index + 1).join("/"),
          })),
        ]

        // HTML breadcrumbs
        const breadcrumbHTML = breadcrumbs
          .map(
            (crumb, index) => `
          <span itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            ${
              index === breadcrumbs.length - 1
                ? `<span itemProp="name">${crumb.name}</span>`
                : `<a href="${crumb.href}" itemProp="item"><span itemProp="name">${crumb.name}</span></a>`
            }
            <meta itemProp="position" content="${index + 1}" />
          </span>
          ${index < breadcrumbs.length - 1 ? '<span class="mx-2 text-gray-400">/</span>' : ""}
        `,
          )
          .join("")

        breadcrumbContainer.innerHTML = `
          <nav aria-label="Breadcrumb" itemScope itemType="https://schema.org/BreadcrumbList" class="text-sm text-gray-600 mb-4">
            ${breadcrumbHTML}
          </nav>
        `

        // JSON-LD breadcrumbs
        const breadcrumbJsonLd = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `https://tapnex.tech${crumb.href}`,
          })),
        }

        const script = document.createElement("script")
        script.type = "application/ld+json"
        script.textContent = JSON.stringify(breadcrumbJsonLd)
        document.head.appendChild(script)
      }
    }

    // Enhanced Core Web Vitals optimization
    const optimizeAdvancedCoreWebVitals = () => {
      // Optimize Largest Contentful Paint (LCP)
      const images = document.querySelectorAll("img:not([width]):not([height])")
      images.forEach((img) => {
        const imgElement = img as HTMLImageElement
        imgElement.style.aspectRatio = "16/9"
        imgElement.style.objectFit = "cover"
        imgElement.loading = "lazy"
        imgElement.decoding = "async"
      })

      // Optimize Cumulative Layout Shift (CLS)
      const videos = document.querySelectorAll("video")
      videos.forEach((video) => {
        video.style.aspectRatio = "16/9"
        video.style.objectFit = "cover"
      })

      // Optimize First Input Delay (FID)
      const deferredScripts = document.querySelectorAll("script[data-defer]")
      deferredScripts.forEach((script) => {
        script.setAttribute("defer", "true")
      })

      // Font optimization
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
      fontLinks.forEach((link) => {
        link.setAttribute("rel", "preload")
        link.setAttribute("as", "style")
        link.setAttribute("onload", "this.onload=null;this.rel='stylesheet'")
      })
    }

    // Enhanced structured data for current page
    const addEnhancedPageStructuredData = () => {
      const pageData = getEnhancedPageStructuredData(pathname)
      if (pageData) {
        const script = document.createElement("script")
        script.type = "application/ld+json"
        script.textContent = JSON.stringify(pageData)
        document.head.appendChild(script)
      }
    }

    // Service Worker registration for advanced caching
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
                  // New content available
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

    // Performance monitoring
    const monitorPerformance = () => {
      if ("PerformanceObserver" in window) {
        // Monitor LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          console.log("LCP:", lastEntry.startTime)
        })
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

        // Monitor FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry) => {
            console.log("FID:", entry.processingStart - entry.startTime)
          })
        })
        fidObserver.observe({ entryTypes: ["first-input"] })

        // Monitor CLS
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0
          const entries = list.getEntries()
          entries.forEach((entry) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value
            }
          })
          console.log("CLS:", clsValue)
        })
        clsObserver.observe({ entryTypes: ["layout-shift"] })
      }
    }

    preloadCriticalResources()
    implementAdvancedLazyLoading()
    addEnhancedBreadcrumbs()
    optimizeAdvancedCoreWebVitals()
    addEnhancedPageStructuredData()
    registerAdvancedServiceWorker()
    monitorPerformance()

    // Cleanup function
    return () => {
      // Remove any event listeners if needed
    }
  }, [pathname])

  return null
}

function getEnhancedPageStructuredData(pathname: string) {
  const baseUrl = "https://tapnex.tech"
  const organization = {
    "@type": "Organization",
    name: "TapNex",
    url: baseUrl,
    logo: `${baseUrl}/tapnex-logo.png`,
    sameAs: ["https://twitter.com/tapnex", "https://linkedin.com/company/tapnex", "https://facebook.com/tapnex"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-TAPNEX",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  }

  switch (pathname) {
    case "/":
      return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "TapNex",
        url: baseUrl,
        description: "Transform your events with TapNex's cutting-edge NFC payment technology",
        publisher: organization,
        potentialAction: {
          "@type": "SearchAction",
          target: `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }

    case "/features":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "TapNex Features - NFC Payment Solutions",
        description: "Explore TapNex's comprehensive features for event management",
        url: `${baseUrl}/features`,
        mainEntity: {
          "@type": "SoftwareApplication",
          name: "TapNex",
          applicationCategory: "Event Management Software",
          operatingSystem: "Web-based",
          offers: {
            "@type": "Offer",
            price: "Contact for pricing",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          },
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Features",
              item: `${baseUrl}/features`,
            },
          ],
        },
      }

    case "/solutions":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "TapNex Solutions - Complete Event Platform",
        description: "End-to-end event technology solutions",
        url: `${baseUrl}/solutions`,
        mainEntity: {
          "@type": "Service",
          name: "Event Technology Solutions",
          provider: organization,
          serviceType: "Event Management",
          areaServed: "Worldwide",
        },
      }

    case "/about":
      return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About TapNex - Event Technology Innovators",
        description: "Learn about TapNex and our mission to revolutionize event technology",
        url: `${baseUrl}/about`,
        mainEntity: organization,
      }

    case "/contact":
      return {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact TapNex - Get Started Today",
        description: "Contact TapNex for event solutions and demos",
        url: `${baseUrl}/contact`,
        mainEntity: {
          "@type": "ContactPoint",
          telephone: "+1-555-TAPNEX",
          contactType: "sales",
          email: "contact@tapnex.tech",
          availableLanguage: ["English"],
          areaServed: "Worldwide",
        },
      }

    case "/blog":
      return {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "TapNex Blog - Event Technology Insights",
        description: "Latest insights and trends in event technology",
        url: `${baseUrl}/blog`,
        publisher: organization,
        inLanguage: "en-US",
      }

    default:
      return null
  }
}
