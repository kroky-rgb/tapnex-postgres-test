import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AuthProvider } from "@/components/auth/auth-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@/components/seo/analytics"
import { PerformanceMonitor } from "@/components/seo/performance-monitor"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TapNex - Smart NFC Payment System for Events",
    template: "%s | TapNex",
  },
  description:
    "Revolutionary NFC-based cashless payment system for college fests, tech expos, and events. Instant transactions, real-time dashboards, and seamless vendor settlements.",
  keywords: [
    "NFC payments",
    "cashless events",
    "college fest payments",
    "event management",
    "digital payments",
    "QR code payments",
  ],
  authors: [{ name: "TapNex Team" }],
  creator: "TapNex",
  publisher: "TapNex",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tapnex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tapnex.com",
    title: "TapNex - Smart NFC Payment System for Events",
    description: "Revolutionary NFC-based cashless payment system for college fests, tech expos, and events.",
    siteName: "TapNex",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TapNex - Smart NFC Payment System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TapNex - Smart NFC Payment System for Events",
    description: "Revolutionary NFC-based cashless payment system for college fests, tech expos, and events.",
    images: ["/og-image.jpg"],
    creator: "@tapnex",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
            <Analytics />
            <PerformanceMonitor />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}
