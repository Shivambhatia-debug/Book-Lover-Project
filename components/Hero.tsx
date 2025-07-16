"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroImages = [
  {
    src: "/images/open-book-golden.jpeg",
    alt: "Open book with golden lighting",
    title: "Publish Your Story",
    subtitle: "Turn your manuscript into a published book with our expert guidance",
    theme: "warm",
  },
  {
    src: "/images/book-candlelight.jpeg",
    alt: "Book illuminated by candlelight",
    title: "Choose Your Publishing Package",
    subtitle: "From ₹1.5 Lakh to ₹3 Lakh - Complete publishing solutions for every author",
    isPackageSlide: true,
    theme: "elegant",
  },
  {
    src: "/images/book-heart.jpeg",
    alt: "Book pages forming heart shape",
    title: "Discover Amazing Books",
    subtitle: "Explore our curated collection of books from talented authors",
    theme: "romantic",
  },
  {
    src: "/images/vintage-books-stack.jpeg",
    alt: "Stack of vintage books",
    title: "Join Our Book Fairs",
    subtitle: "Meet authors, discover new books, and be part of our literary community",
    theme: "vintage",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const currentImage = heroImages[currentSlide]

  return (
    <section className="relative h-[80vh] sm:h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="relative h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* Removed left and right arrow buttons for slide navigation */}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-2xl sm:max-w-5xl mx-auto px-2 sm:px-4">
          {/* Add a soft dark gradient only behind the text */}
          <div className="relative p-4 sm:p-8 md:p-12">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" style={{zIndex:0}} />
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight" style={{textShadow: '0 2px 8px #000, 0 1px 2px #000'}}>
                {currentImage.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-100 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed" style={{textShadow: '0 2px 8px #000, 0 1px 2px #000'}}>
                {currentImage.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
                <Link href="/books">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Browse Books
                  </Button>
                </Link>
                <Link href="/author-dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Publishing
                  </Button>
                </Link>
              </div>

              {/* Free Publishing CTA */}
              <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-red-400/30 shadow-xl">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                  📚 List Your Book for FREE!
                </h3>
                <p className="text-sm sm:text-lg text-red-100 mb-2 sm:mb-4">
                  Join our community of successful authors and start your publishing journey
                </p>
                <Link href="/list-book-free">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-red-600 hover:bg-red-50 px-6 sm:px-8 py-3 sm:py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    🚀 START PUBLISHING FOR FREE
                  </Button>
                </Link>
              </div>

              {/* Package Pricing for Package Slide */}
              {/* Removed package cards for isPackageSlide. All slides now have the same layout. */}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-500 shadow-lg scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
