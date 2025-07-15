import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Book Lover - Publishing Dreams, Creating Stories",
  description:
    "A premier bookstore specializing in publishing books from talented authors. Discover amazing stories and join our community of book lovers.",
    generator: 'v0.dev'
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
      </body>
    </html>
  )
}
