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
    title: "Frankenstein",
    author: "Mary Wollstonecraft Shelley",
    price: 599,
    image: "/images/frankenstein.png",
    genre: "Classic Horror",
    description: "A gripping tale of science, ambition, and the consequences of playing God.",
  },
  {
    id: 2,
    title: "The Modern Prometheus",
    author: "Mary Shelley",
    price: 449,
    image: "/images/modernprometheus.png",
    genre: "Gothic Fiction",
    description: "Explore the dark themes of creation and responsibility in this timeless classic.",
  },
  {
    id: 3,
    title: "Classic Literature Collection",
    author: "Various Authors",
    price: 529,
    image: "/images/classicliterature.png",
    genre: "Classics",
    description: "A curated collection of the world's greatest literary works.",
  },
  {
    id: 4,
    title: "Horror Masterpieces",
    author: "Classic Authors",
    price: 649,
    image: "/images/horror.png",
    genre: "Horror",
    description: "The finest collection of horror stories from renowned authors.",
  },
  {
    id: 5,
    title: "Gothic Tales",
    author: "Victorian Authors",
    price: 499,
    image: "/images/gothictales.png",
    genre: "Gothic",
    description: "Dark and mysterious tales from the Victorian era.",
  },
  {
    id: 6,
    title: "Literary Classics",
    author: "Renowned Writers",
    price: 579,
    image: "/images/literacyclassic.png",
    genre: "Literature",
    description: "Essential reading from the world's most celebrated authors.",
  },
  {
    id: 7,
    title: "Science Fiction Anthology",
    author: "Modern Authors",
    price: 699,
    image: "/images/scifi.png",
    genre: "Sci-Fi",
    description: "Mind-bending stories that explore the future of humanity.",
  },
  {
    id: 8,
    title: "Contemporary Fiction",
    author: "New Voices",
    price: 399,
    image: "/images/contemporary.png",
    genre: "Contemporary",
    description: "Fresh perspectives on modern life and relationships.",
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
                  <SelectItem value="Classic Horror">Classic Horror</SelectItem>
                  <SelectItem value="Gothic Fiction">Gothic Fiction</SelectItem>
                  <SelectItem value="Classics">Classics</SelectItem>
                  <SelectItem value="Horror">Horror</SelectItem>
                  <SelectItem value="Gothic">Gothic</SelectItem>
                  <SelectItem value="Literature">Literature</SelectItem>
                  <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
                  <SelectItem value="Contemporary">Contemporary</SelectItem>
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
                        width={200}
                        height={300}
                        className="w-full h-48 object-contain bg-white hover:scale-105 transition-transform duration-300"
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

                    <div className="p-4">
                      <h3 className="font-bold text-lg text-black-800 mb-1 group-hover:text-red-600 transition-colors">
                        {book.title}
                      </h3>
                      <p className="text-black-600 mb-2">by {book.author}</p>
                      <p className="text-sm text-black-600 mb-4 line-clamp-2">{book.description}</p>

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
          ) : (
            <div className="space-y-4">
              {sortedBooks.map((book) => (
                <Card key={book.id} className="border-red-200 hover:shadow-lg transition-shadow bg-white">
                  <CardContent className="p-6">
                    <div className="flex space-x-6">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={120}
                        height={180}
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
                            <Button className="bg-red-600 hover:bg-red-700" onClick={() => handleAddToCart(book)}>
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
