"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <div className="relative overflow-hidden">
      <div
        className={`transition-all duration-300 ease-out ${
          isTransitioning ? "opacity-0 transform translate-y-2" : "opacity-100 transform translate-y-0"
        }`}
        style={{ willChange: "transform, opacity" }}
      >
        {displayChildren}
      </div>
    </div>
  )
}
