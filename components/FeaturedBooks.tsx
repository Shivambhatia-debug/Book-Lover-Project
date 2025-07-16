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
    title: "Frankenstein",
    author: "Mary Wollstonecraft Shelley",
    price: 599,
    image: "/images/frankenstein.png",
    genre: "Classic Horror",
  },
  {
    id: 2,
    title: "The Modern Prometheus",
    author: "Mary Shelley",
    price: 449,
    image: "/images/modernprometheus.png",
    genre: "Gothic Fiction",
  },
  {
    id: 3,
    title: "Classic Literature Collection",
    author: "Various Authors",
    price: 529,
    image: "/images/classicliterature.png",
    genre: "Classics",
  },
  {
    id: 4,
    title: "Horror Masterpieces",
    author: "Classic Authors",
    price: 649,
    image: "/images/horror.png",
    genre: "Horror",
  },
  {
    id: 5,
    title: "Gothic Tales",
    author: "Victorian Authors",
    price: 499,
    image: "/images/gothictales.png",
    genre: "Gothic",
  },
  {
    id: 6,
    title: "Literary Classics",
    author: "Renowned Writers",
    price: 579,
    image: "/images/literacyclassic.png",
    genre: "Literature",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black-800 mb-4">Featured Books</h2>
          <p className="text-lg text-black-600 max-w-2xl mx-auto">
            Discover our handpicked selection of outstanding books from talented authors
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
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
                    width={200}
                    height={300}
                    className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {book.genre}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-black-600 mb-3">by {book.author}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-black-800">₹{book.price}</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => handleAddToCart(book)}>
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
                <div key={book.id} className="w-full flex-shrink-0 px-4">
                  <Card className="group hover:shadow-xl transition-shadow duration-300 border-red-200 max-w-sm mx-auto bg-white">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Image
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          width={200}
                          height={300}
                          className="w-full h-64 object-contain bg-white group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            {book.genre}
                          </span>
                        </div>
                      </div>

                      <div className="p-4 bg-white">
                        <h3 className="font-bold text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                          {book.title}
                        </h3>
                        <p className="text-black-600 mb-3">by {book.author}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-black-800">₹{book.price}</span>
                          <Button
                            size="sm"
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => handleAddToCart(book)}
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
          >
            <ChevronLeft className="h-6 w-6 text-black-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="h-6 w-6 text-black-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/books">
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-white"
            >
              View All Books
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
