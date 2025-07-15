"use client"

import { useState } from "react"
import Image from "next/image"
import { Share2, Star, ShoppingCart, BookOpen, Award, Users, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in real app, this would come from API based on authorId
const authorData = {
  id: "kumar-nikhil",
  name: "Kumar Nikhil",
  bio: "Award-winning author specializing in contemporary fiction and motivational literature. Published 10+ bestselling books with over 50,000 copies sold worldwide.",
  profileImage: "/placeholder.svg?height=200&width=200",
  joinedDate: "January 2022",
  totalBooks: 10,
  totalSales: 52000,
  averageRating: 4.8,
  awards: 3,
  socialLinks: {
    website: "https://kumarnikhil.com",
    instagram: "@kumarnikhil_author",
    twitter: "@kumarnikhil",
  },
  books: [
    {
      id: 1,
      title: "The Journey Within",
      genre: "Self-Help",
      price: 299,
      rating: 4.9,
      reviews: 245,
      sales: 8500,
      image: "/placeholder.svg?height=300&width=200",
      description: "A transformative guide to self-discovery and personal growth.",
      publishedDate: "March 2024",
      status: "Published",
    },
    {
      id: 2,
      title: "Digital Dreams",
      genre: "Fiction",
      price: 399,
      rating: 4.7,
      reviews: 189,
      sales: 6200,
      image: "/placeholder.svg?height=300&width=200",
      description: "A thrilling tale of technology and human connection.",
      publishedDate: "January 2024",
      status: "Published",
    },
    {
      id: 3,
      title: "Mindful Living",
      genre: "Lifestyle",
      price: 249,
      rating: 4.8,
      reviews: 156,
      sales: 4800,
      image: "/placeholder.svg?height=300&width=200",
      description: "Practical tips for living a more mindful and balanced life.",
      publishedDate: "November 2023",
      status: "Published",
    },
  ],
}

export default function AuthorProfilePage({ params }: { params: { authorId: string } }) {
  const [shareUrl] = useState(typeof window !== "undefined" ? window.location.href : "")

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${authorData.name} - Author Profile`,
          text: `Check out ${authorData.name}'s books on Book Lover`,
          url: shareUrl,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl)
      alert("Profile link copied to clipboard!")
    }
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Author Header */}
        <Card className="border-red-200 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <Image
                  src={authorData.profileImage || "/placeholder.svg"}
                  alt={authorData.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-red-200"
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h1 className="text-4xl font-bold text-black-800 mb-2 lg:mb-0">{authorData.name}</h1>
                  <Button
                    onClick={handleShare}
                    variant="outline"
                    className="border-red-300 text-red-600 bg-transparent"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
                <p className="text-lg text-black-600 mb-6 leading-relaxed">{authorData.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <BookOpen className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-black-800">{authorData.totalBooks}</div>
                    <div className="text-sm text-black-600">Books Published</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Users className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-black-800">{authorData.totalSales.toLocaleString()}</div>
                    <div className="text-sm text-black-600">Copies Sold</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Star className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-black-800">{authorData.averageRating}</div>
                    <div className="text-sm text-black-600">Average Rating</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Award className="h-6 w-6 text-red-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-black-800">{authorData.awards}</div>
                    <div className="text-sm text-black-600">Awards Won</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {authorData.socialLinks.website && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-600 bg-transparent"
                      onClick={() => window.open(authorData.socialLinks.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Website
                    </Button>
                  )}
                  {authorData.socialLinks.instagram && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-600 bg-transparent"
                      onClick={() =>
                        window.open(
                          `https://instagram.com/${authorData.socialLinks.instagram.replace("@", "")}`,
                          "_blank",
                        )
                      }
                    >
                      Instagram
                    </Button>
                  )}
                  {authorData.socialLinks.twitter && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-600 bg-transparent"
                      onClick={() =>
                        window.open(`https://twitter.com/${authorData.socialLinks.twitter.replace("@", "")}`, "_blank")
                      }
                    >
                      Twitter
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Books Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-black-800">Published Books</h2>
            <Badge variant="outline" className="border-red-500 text-red-700 bg-red-50">
              {authorData.books.length} Books Available
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorData.books.map((book) => (
              <Card key={book.id} className="border-red-200 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      width={200}
                      height={300}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-red-500 text-white">{book.genre}</Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-white/90 text-green-700 border-green-300">
                        {book.sales.toLocaleString()} sold
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-black-800 mb-2">{book.title}</h3>
                    <p className="text-black-600 mb-3 text-sm leading-relaxed">{book.description}</p>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(book.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-black-600 ml-2">
                        {book.rating} ({book.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-black-800">₹{book.price}</div>
                        <div className="text-sm text-black-500 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {book.publishedDate}
                        </div>
                      </div>
                      <Badge
                        className={`${
                          book.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {book.status}
                      </Badge>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Author Section */}
        <Card className="border-red-200 bg-gradient-to-r from-red-600 to-black-800 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Connect with {authorData.name}</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Interested in collaborating or have questions about the books? Get in touch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                Follow Author
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
