import Image from "next/image"
import Link from "next/link"
import { BookOpen, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredAuthors = [
  {
    id: "alice-munro",
    name: "Alice Munro",
    bio: "Nobel Prize-winning Canadian author known for her masterful short stories that explore the complexities of human relationships.",
    image: "/images/author-alice-munro.jpeg",
    books: 14,
    awards: 12,
    genres: ["Short Stories", "Literary Fiction"],
    featuredBook: {
      title: "Dear Life",
      price: 599,
      image: "/images/book-frankenstein.jpeg",
    },
  },
  {
    id: "margaret-atwood",
    name: "Margaret Atwood",
    bio: "Acclaimed Canadian poet, novelist, and literary critic whose dystopian fiction has earned international recognition.",
    image: "/images/author-alice-munro.jpeg",
    books: 18,
    awards: 8,
    genres: ["Dystopian Fiction", "Poetry"],
    featuredBook: {
      title: "The Handmaid's Tale",
      price: 649,
      image: "/images/book-frankenstein.jpeg",
    },
  },
  {
    id: "toni-morrison",
    name: "Toni Morrison",
    bio: "Nobel Prize-winning American novelist celebrated for her powerful exploration of African American experience.",
    image: "/images/author-alice-munro.jpeg",
    books: 11,
    awards: 15,
    genres: ["Literary Fiction", "Historical Fiction"],
    featuredBook: {
      title: "Beloved",
      price: 729,
      image: "/images/book-frankenstein.jpeg",
    },
  },
]

export default function AuthorSpotlight() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black-800 mb-4">Featured Authors</h2>
          <p className="text-lg text-black-600 max-w-2xl mx-auto">
            Meet the talented writers who bring extraordinary stories to life through our publishing platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredAuthors.map((author) => (
            <Card
              key={author.id}
              className="border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Image
                    src={author.image || "/placeholder.svg"}
                    alt={author.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto mb-4 border-4 border-red-200 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-black-800 mb-2">{author.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {author.genres.map((genre) => (
                      <Badge key={genre} variant="outline" className="border-red-300 text-red-700 bg-red-50">
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-black-600 text-sm leading-relaxed mb-6 text-center">{author.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-red-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-black-800">{author.books}</div>
                    <div className="text-xs text-black-600">Books</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <Award className="h-5 w-5 text-red-600 mx-auto mb-1" />
                    <div className="text-lg font-bold text-black-800">{author.awards}</div>
                    <div className="text-xs text-black-600">Awards</div>
                  </div>
                </div>

                {/* Featured Book */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-black-800 mb-2 text-center">Latest Book</h4>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={author.featuredBook.image || "/placeholder.svg"}
                      alt={author.featuredBook.title}
                      width={50}
                      height={70}
                      className="rounded object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-black-800 text-sm">{author.featuredBook.title}</p>
                      <p className="text-red-600 font-bold">₹{author.featuredBook.price}</p>
                    </div>
                  </div>
                </div>

                <Link href={`/author/${author.id}`}>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    View Profile & Books
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/authors">
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-white px-8 py-4"
            >
              View All Authors
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
