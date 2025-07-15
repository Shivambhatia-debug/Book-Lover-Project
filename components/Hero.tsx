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
    <section className="relative h-screen overflow-hidden">
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
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
      >
        <ChevronLeft className="h-6 w-6 text-black-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 shadow-lg backdrop-blur-sm z-10"
      >
        <ChevronRight className="h-6 w-6 text-black-800" />
      </button>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-5xl mx-auto px-4">
          {/* Add a soft dark gradient only behind the text */}
          <div className="relative p-8 md:p-12">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" style={{zIndex:0}} />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
                {currentImage.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed">
                {currentImage.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/books">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Browse Books
                  </Button>
                </Link>
                <Link href="/author-dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start Publishing
                  </Button>
                </Link>
              </div>

              {/* Free Publishing CTA */}
              <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 backdrop-blur-sm rounded-xl p-6 border border-red-400/30 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-3">📚 List Your Book for FREE!</h3>
                <p className="text-red-100 mb-4 text-lg">
                  Join our community of successful authors and start your publishing journey
                </p>
                <Link href="/list-book-free">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  >
                    🚀 START PUBLISHING FOR FREE
                  </Button>
                </Link>
              </div>

              {/* Package Pricing for Package Slide */}
              {currentImage.isPackageSlide && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h4 className="text-xl font-bold text-red-300 mb-2">Basic Package</h4>
                    <p className="text-3xl font-bold text-white mb-2">₹1.5 Lakh</p>
                    <p className="text-gray-200 text-sm">Complete publishing solution</p>
                  </div>
                  <div className="bg-red-600/30 backdrop-blur-sm p-6 rounded-xl text-center border-2 border-red-400 hover:bg-red-600/40 transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-red-200 mb-2">Professional</h4>
                    <p className="text-3xl font-bold text-white mb-2">₹2 Lakh</p>
                    <p className="text-gray-200 text-sm">Most Popular Choice</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <h4 className="text-xl font-bold text-red-300 mb-2">Premium</h4>
                    <p className="text-3xl font-bold text-white mb-2">₹3 Lakh</p>
                    <p className="text-gray-200 text-sm">Complete marketing included</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-red-500 shadow-lg scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
