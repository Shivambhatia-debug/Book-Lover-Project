"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ShoppingCart, Grid, List, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCartStore } from "@/lib/cart-store"
import Link from "next/link"

const books = [
  {
    id: 1,
    title: "Mind Fly",
    author: "Capt Amit Singh",
    price: 599,
  
    image: "/images/book3.png",
    genre: "Fictional",
    description: "A captivating fictional tale that takes readers on an extraordinary journey of imagination and adventure.",
  },
  {
    id: 2,
    title: "Resilience Whisper",
    author: "Dr. Bhushan Kathuria",
    price: 449,
    image: "/images/book7.png",
    genre: "Self Help Book",
    description: "Discover the power of resilience and learn to overcome life's challenges with practical guidance.",
  },
  {
    id: 3,
    title: "Wizard of Biology",
    author: "Dr. Rittika A Dhankhar",
    price: 529,
    image: "/images/book5.png",
    genre: "Educational",
    description: "A comprehensive study guide for biology students covering all major topics and concepts.",
  },
  {
    id: 4,
    title: "Dil Ki Kalam Se",
    author: "Aswani Gupta",
    price: 649,
    image: "/images/book8.png",
    genre: "Poetry",
    description: "Beautiful poetry that speaks from the heart, capturing emotions and life's precious moments.",
  },
  {
    id: 5,
    title: "The Terrible Indian Wife",
    author: "Anonymous",
    price: 499,
    image: "/images/book6.png",
    genre: "Contemporary Fictional",
    description: "A modern take on relationships and cultural dynamics in contemporary Indian society.",
  },
  {
    id: 6,
    title: "Beyond Money",
    author: "Kriti Gupta",
    price: 579,
    image: "/images/book2.png",
    genre: "Self Help",
    description: "Explore life beyond material wealth and discover true happiness and fulfillment.",
  },
  {
    id: 7,
    title: "My Psycho Character",
    author: "Pranav Sood",
    price: 699,
    image: "/images/book4.png",
    genre: "Crime Thriller",
    description: "A gripping crime thriller that delves into the dark corners of the human psyche.",
  },
  {
    id: 8,
    title: "Story of Agent K",
    author: "Kash Tandon",
    price: 399,
    image: "/images/book1.png",
    genre: "Mystery",
    description: "An intriguing mystery following the adventures of Agent K in a world of secrets and deception.",
  },
]

export default function BooksPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [sortBy, setSortBy] = useState("title")
  const [currentPage, setCurrentPage] = useState(0)
  const { addItem } = useCartStore()

  const booksPerPage = 4
  const totalPages = Math.ceil(books.length / booksPerPage)

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === "all" || book.genre === selectedGenre
    return matchesSearch && matchesGenre
  })

  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "title":
      default:
        return a.title.localeCompare(b.title)
    }
  })

  const handleAddToCart = (book: (typeof books)[0]) => {
    addItem({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      image: book.image,
      genre: book.genre,
    })
  }

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentPageBooks = () => {
    const startIndex = currentPage * booksPerPage
    return sortedBooks.slice(startIndex, startIndex + booksPerPage)
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-black-800 mb-2 md:mb-0">Our Book Collection</h1>
            <p className="text-lg text-black-600">Discover amazing stories from talented authors</p>
          </div>
          <Link href="/list-book-free">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 mt-4 md:mt-0">
              + List a Book
            </Button>
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-red-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-black-700 mb-2">Search Books</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                <Input
                  type="text"
                  placeholder="Search by title or author..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-red-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-black-700 mb-2">Genre</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="border-red-200">
                  <SelectValue placeholder="All Genres" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genres</SelectItem>
                  <SelectItem value="Fictional">Fictional</SelectItem>
                  <SelectItem value="Self Help Book">Self Help Book</SelectItem>
                  <SelectItem value="Educational">Educational</SelectItem>
                  <SelectItem value="Poetry">Poetry</SelectItem>
                  <SelectItem value="Contemporary Fictional">Contemporary Fictional</SelectItem>
                  <SelectItem value="Self Help">Self Help</SelectItem>
                  <SelectItem value="Crime Thriller">Crime Thriller</SelectItem>
                  <SelectItem value="Mystery">Mystery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-black-700 mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-red-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title A-Z</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 border-t border-red-100">
            <p className="text-black-600">
              Showing {sortedBooks.length} of {books.length} books
            </p>
            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-red-600" : "border-red-300"}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-red-600" : "border-red-300"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {getCurrentPageBooks().map((book) => (
                <Card key={book.id} className="border-red-200 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={400}
                        height={500}
                        className="w-full h-56 object-cover bg-gray-100 hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {book.genre}
                        </span>
                      </div>
                    </div>

                    <div className="p-3">
                      <h3 className="font-bold text-sm text-black-800 mb-1 line-clamp-2">{book.title}</h3>
                      <p className="text-black-600 mb-2 text-xs">by {book.author}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-black-800">₹{book.price}</span>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700 text-xs px-2 py-1"
                          onClick={() => handleAddToCart(book)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation for mobile */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={prevPage}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronLeft className="h-5 w-5 text-black-800" />
                </button>
                <button
                  onClick={nextPage}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg z-10"
                >
                  <ChevronRight className="h-5 w-5 text-black-800" />
                </button>
              </>
            )}
          </div>

          {/* Page indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-4 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentPage ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Desktop Grid/List View */}
        <div className="hidden md:block">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedBooks.map((book) => (
                <Card
                  key={book.id}
                  className="group hover:shadow-xl transition-shadow duration-300 border-red-200 bg-white"
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={450}
                        height={550}
                        className="w-full h-56 md:h-72 object-cover bg-gray-100 group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          {book.genre}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-black-600 mb-2">by {book.author}</p>
                      <p className="text-sm text-black-600 mb-4 line-clamp-2">{book.description}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-black-800">₹{book.price}</span>
                        <Button size="sm" className="bg-red-600 hover:bg-red-700" onClick={() => handleAddToCart(book)} suppressHydrationWarning>
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedBooks.map((book) => (
                <Card key={book.id} className="border-red-200 hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-6">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={250}
                        height={320}
                        className="rounded-lg object-contain bg-white"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-black-800 mb-1">{book.title}</h3>
                            <p className="text-black-600 mb-2">by {book.author}</p>
                            <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                              {book.genre}
                            </span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-black-800 mb-2">₹{book.price}</div>
                            <Button className="bg-red-600 hover:bg-red-700" onClick={() => handleAddToCart(book)} suppressHydrationWarning>
                              <ShoppingCart className="h-4 w-4 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                        <p className="text-black-600 leading-relaxed">{book.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
