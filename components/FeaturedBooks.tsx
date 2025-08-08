"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/lib/cart-store"

const featuredBooks = [
  {
    id: 1,
    title: "Story of Agent K",
    author: "Kash Tandon",
    price: 399,
    image: "/images/book1.png",
    genre: "Mystery",
  },
  {
    id: 2,
    title: "Beyond Money",
    author: "Kriti Gupta",
    price: 579,
    image: "/images/book2.png",
    genre: "Self Help",
  },
  {
    id: 3,
    title: "The Terrible Indian Wife",
    author: "Anonymous",
    price: 499,
    image: "/images/book6.png",
    genre: "Contemporary Fictional",
  },
  {
    id: 4,
    title: "My Psycho Character",
    author: "Pranav Sood",
    price: 699,
    image: "/images/book4.png",
    genre: "Crime Thriller",
  },
  {
    id: 5,
    title: "Resilience Whisper",
    author: "Dr. Bhushan Kathuria",
    price: 449,
    image: "/images/book7.png",
    genre: "Self Help Book",
  },
  {
    id: 6,
    title: "Dil Ki Kalam Se",
    author: "Aswani Gupta",
    price: 649,
    image: "/images/book8.png",
    genre: "Poetry",
  },
]

export default function FeaturedBooks() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { addItem } = useCartStore()

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredBooks.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length)
  }

  const handleAddToCart = (book: (typeof featuredBooks)[0]) => {
    addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      genre: book.genre,
    })
  }

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-black-800 mb-2 sm:mb-4">Featured Books</h2>
          <p className="text-base sm:text-lg text-black-600 max-w-xl sm:max-w-2xl mx-auto">
            Discover our handpicked selection of outstanding books from talented authors
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 md:gap-8">
          {featuredBooks.map((book) => (
            <Card
              key={book.id}
              className="group hover:shadow-xl transition-shadow duration-300 border-red-200 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                                     <Image
                     src={book.image || "/placeholder.svg"}
                     alt={book.title}
                     width={300}
                     height={400}
                     className="w-full h-56 md:h-72 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                   />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {book.genre}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-bold text-base md:text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-black-600 text-xs md:text-base mb-2 md:mb-3">by {book.author}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-2xl font-bold text-black-800">₹{book.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-red-600 hover:bg-red-700" 
                      onClick={() => handleAddToCart(book)}
                      suppressHydrationWarning
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredBooks.map((book) => (
                <div key={book.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <Card className="group hover:shadow-xl transition-shadow duration-300 border-red-200 max-w-xs sm:max-w-sm mx-auto bg-white">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                                                 <Image
                           src={book.image || "/placeholder.svg"}
                           alt={book.title}
                           width={300}
                           height={400}
                           className="w-full h-56 sm:h-72 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                         />
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {book.genre}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 sm:p-4 bg-white">
                        <h3 className="font-bold text-base sm:text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-black-600 text-xs sm:text-base mb-2 sm:mb-3">by {book.author}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-lg sm:text-2xl font-bold text-black-800">₹{book.price}</span>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => handleAddToCart(book)}
                            suppressHydrationWarning
                          >
                            <ShoppingCart className="h-4 w-4 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
            suppressHydrationWarning
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-black-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
            suppressHydrationWarning
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-black-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-1 sm:space-x-2">
            {featuredBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${index === currentIndex ? "bg-red-600" : "bg-gray-300"}`}
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link href="/books">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-white"
              suppressHydrationWarning
            >
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
