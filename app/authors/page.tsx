import Image from "next/image"
import Link from "next/link"
import { BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const authors = [
  {
    id: "alice-munro",
    name: "Alice Munro",
    bio: "Nobel Prize-winning Canadian author known for her masterful short stories. Her work explores the complexities of human relationships with profound insight and literary excellence.",
    image: "/images/alice.png",
    books: 14,
    awards: 12,
    genres: ["Short Stories", "Literary Fiction"],
    featuredBook: {
      title: "Dear Life",
      price: 599,
      image: "/images/dearlife.png",
    },
  },
  {
    id: "literary-author-2",
    name: "Margaret Atwood",
    bio: "Acclaimed Canadian poet, novelist, and literary critic. Her dystopian fiction and speculative works have earned international recognition and numerous awards.",
    image: "/images/margaret.png",
    books: 18,
    awards: 8,
    genres: ["Dystopian Fiction", "Poetry"],
    featuredBook: {
      title: "The Handmaid's Tale",
      price: 649,
      image: "/images/handmaid.png",
    },
  },
  {
    id: "literary-author-3",
    name: "Toni Morrison",
    bio: "Nobel Prize-winning American novelist known for her powerful exploration of African American experience. Her works are celebrated for their lyrical prose and profound themes.",
    image: "/images/toni.png",
    books: 11,
    awards: 15,
    genres: ["Literary Fiction", "Historical Fiction"],
    featuredBook: {
      title: "Beloved",
      price: 729,
      image: "/images/beloved.png",
    },
  },
  {
    id: "literary-author-4",
    name: "Chimamanda Ngozi Adichie",
    bio: "Nigerian author whose works explore themes of identity, feminism, and post-colonialism. Her storytelling bridges cultures and speaks to universal human experiences.",
    image: "/images/ngozi.png",
    books: 6,
    awards: 9,
    genres: ["Contemporary Fiction", "Essays"],
    featuredBook: {
      title: "Americanah",
      price: 579,
      image: "/images/americanah.png",
    },
  },
  {
    id: "literary-author-5",
    name: "Haruki Murakami",
    bio: "Japanese author known for his surreal and magical realist works. His novels blend reality with fantasy, creating unique literary experiences that captivate readers worldwide.",
    image: "/images/haruki.png",
    books: 16,
    awards: 7,
    genres: ["Magical Realism", "Contemporary Fiction"],
    featuredBook: {
      title: "Norwegian Wood",
      price: 549,
      image: "/images/norwegian.png",
    },
  },
  {
    id: "literary-author-6",
    name: "Zadie Smith",
    bio: "British author celebrated for her witty and insightful novels about multicultural Britain. Her work explores themes of identity, race, and belonging with humor and depth.",
    image: "/images/zadie.png",
    books: 8,
    awards: 6,
    genres: ["Contemporary Fiction", "Social Commentary"],
    featuredBook: {
      title: "White Teeth",
      price: 629,
      image: "/images/whiteteeth.png",
    },
  },
]

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-black-800 mb-6">Our Talented Authors</h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto leading-relaxed">
            Meet the creative minds behind our outstanding books. Each author brings unique perspectives and captivating
            stories to our literary community.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {authors.map((author) => (
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
                    className="mx-auto mb-4 border-4 border-red-200 object-cover aspect-[3/4] rounded-full md:rounded-[60px] md:w-[120px] md:h-[160px] w-[90px] h-[120px]"
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
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Profile & Books</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-black-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Want to Join Our Author Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Become part of our growing family of successful authors. Start your publishing journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/author-dashboard">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                Join as Author
              </Button>
            </Link>
            <Link href="/list-book-free">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
              >
                List Book for FREE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
