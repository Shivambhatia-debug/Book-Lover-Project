import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Book Lover Publishing House - India's Premier Publishing Platform",
  description: "Transform your manuscript into a bestseller with India's leading publishing house. Professional editing, book fairs, global distribution. Join 300+ successful authors.",
  keywords: "book publishing, publishing house india, author services, book fairs, ISBN registration, book marketing, self publishing",
  authors: [{ name: "Book Lover Publishing House" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Book Lover Publishing House - India's Premier Publishing Platform",
    description: "Transform your manuscript into a bestseller with India's leading publishing house.",
    type: "website",
    locale: "en_IN",
    siteName: "Book Lover Publishing House"
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Lover Publishing House - India's Premier Publishing Platform",
    description: "Transform your manuscript into a bestseller with India's leading publishing house."
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-cream-50`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
