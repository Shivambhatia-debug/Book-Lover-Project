import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const upcomingFairs = [
  {
    id: 1,
    name: "Literary Spring Festival",
    date: "March 15-17, 2024",
    location: "Central Convention Center",
    attendees: "5000+",
    image: "/images/fair1.png",
    description: "Join us for three days of literary celebration with author readings, book signings, and workshops.",
  },
  {
    id: 2,
    name: "Indie Authors Showcase",
    date: "April 22-23, 2024",
    location: "Downtown Library",
    attendees: "2000+",
    image: "/images/fair2.png",
    description: "Discover emerging voices in literature and meet independent authors from around the region.",
  },
  {
    id: 3,
    name: "Summer Reading Expo",
    date: "June 8-10, 2024",
    location: "Riverside Park Pavilion",
    attendees: "8000+",
    image: "/images/fair3.png",
    description: "The largest book fair of the year featuring bestselling authors and exclusive book launches.",
  },
]

export default function BookFairSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-burgundy-900 to-burgundy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Upcoming Book Fairs</h2>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Meet us at these exciting literary events where books come alive and communities connect
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingFairs.map((fair) => (
            <Card
              key={fair.id}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={fair.image || "/placeholder.svg"}
                    alt={fair.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Upcoming
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{fair.name}</h3>
                  <p className="text-cream-200 mb-4 text-sm leading-relaxed">{fair.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-cream-200">
                      <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-sm">{fair.date}</span>
                    </div>
                    <div className="flex items-center text-cream-200">
                      <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-sm">{fair.location}</span>
                    </div>
                    <div className="flex items-center text-cream-200">
                      <Users className="h-4 w-4 mr-2 text-amber-400" />
                      <span className="text-sm">{fair.attendees} Expected</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-burgundy-900 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/book-fairs">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              View All Book Fairs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
