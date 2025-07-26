import Image from "next/image"
import { Calendar, MapPin, Users, Ticket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const upcomingFairs = [
  {
    id: 1,
    name: "Literary Spring Festival",
    date: "March 15-17, 2024",
    location: "Central Convention Center, Downtown",
    address: "123 Convention Ave, City Center",
    attendees: "5000+",
    image: "/images/fair1.png",
    description:
      "Join us for three days of literary celebration with author readings, book signings, and workshops. This premier event brings together readers, writers, and industry professionals.",
    highlights: [
      "50+ Author presentations",
      "Interactive writing workshops",
      "Book signing sessions",
      "Literary awards ceremony",
      "Networking opportunities",
    ],
    ticketPrice: "Free",
    status: "upcoming",
  },
  {
    id: 2,
    name: "Indie Authors Showcase",
    date: "April 22-23, 2024",
    location: "Downtown Public Library",
    address: "456 Library St, Arts District",
    attendees: "2000+",
    image: "/images/fair2.png",
    description:
      "Discover emerging voices in literature and meet independent authors from around the region. A perfect venue for discovering your next favorite book.",
    highlights: [
      "30+ Indie author booths",
      "Poetry reading sessions",
      "Self-publishing workshops",
      "Book launch events",
      "Reader meet & greets",
    ],
    ticketPrice: "$15",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Summer Reading Expo",
    date: "June 8-10, 2024",
    location: "Riverside Park Pavilion",
    address: "789 Park Way, Riverside",
    attendees: "8000+",
    image: "/images/fair3.png",
    description:
      "The largest book fair of the year featuring bestselling authors and exclusive book launches. Don't miss this spectacular literary event.",
    highlights: [
      "100+ Author appearances",
      "Exclusive book launches",
      "Children's storytelling corner",
      "Food trucks and entertainment",
      "Special celebrity guest speakers",
    ],
    ticketPrice: "$25",
    status: "upcoming",
  },
]

const pastFairs = [
  {
    id: 4,
    name: "Winter Literary Gala",
    date: "December 10-12, 2023",
    location: "Grand Hotel Ballroom",
    attendees: "3000+",
    image: "/images/past1.png",
    description: "A successful winter celebration of literature with record attendance.",
    status: "completed",
  },
  {
    id: 5,
    name: "Fall Book Festival",
    date: "October 15-16, 2023",
    location: "University Campus",
    attendees: "4500+",
    image: "/images/past2.png",
    description: "Academic and literary communities came together for an inspiring event.",
    status: "completed",
  },
]

export default function BookFairsPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-burgundy-900 mb-6">Book Fairs & Literary Events</h1>
          <p className="text-xl text-burgundy-700 max-w-3xl mx-auto leading-relaxed">
            Join us at exciting literary events where books come alive, communities connect, and new stories are
            discovered. Meet your favorite authors and discover your next great read.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-burgundy-900">Upcoming Events</h2>
            <Badge variant="outline" className="border-amber-500 text-amber-700 bg-amber-50">
              {upcomingFairs.length} Events Scheduled
            </Badge>
          </div>

          <div className="space-y-8">
            {upcomingFairs.map((fair) => (
              <Card
                key={fair.id}
                className="border-burgundy-200 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={fair.image || "/placeholder.svg"} alt={fair.name} fill className="object-cover" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-amber-500 text-white">
                        {fair.status === "upcoming" ? "Upcoming" : "Past Event"}
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-2xl font-bold text-burgundy-900 mb-2">{fair.name}</CardTitle>
                          <p className="text-burgundy-700 leading-relaxed">{fair.description}</p>
                        </CardHeader>

                        <CardContent className="p-0">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="space-y-3">
                              <div className="flex items-center text-burgundy-700">
                                <Calendar className="h-5 w-5 mr-3 text-amber-600" />
                                <span className="font-medium">{fair.date}</span>
                              </div>
                              <div className="flex items-center text-burgundy-700">
                                <MapPin className="h-5 w-5 mr-3 text-amber-600" />
                                <div>
                                  <div className="font-medium">{fair.location}</div>
                                  <div className="text-sm text-burgundy-600">{fair.address}</div>
                                </div>
                              </div>
                              <div className="flex items-center text-burgundy-700">
                                <Users className="h-5 w-5 mr-3 text-amber-600" />
                                <span>{fair.attendees} Expected Attendees</span>
                              </div>
                              <div className="flex items-center text-burgundy-700">
                                <Ticket className="h-5 w-5 mr-3 text-amber-600" />
                                <span className="font-medium">
                                  {fair.ticketPrice === "Free" ? "Free Entry" : `Tickets: ${fair.ticketPrice}`}
                                </span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold text-burgundy-900 mb-3">Event Highlights:</h4>
                              <ul className="space-y-2">
                                {fair.highlights.map((highlight, index) => (
                                  <li key={index} className="flex items-center text-sm text-burgundy-700">
                                    <Star className="h-4 w-4 mr-2 text-amber-500" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-burgundy-100">
                        <Button className="bg-burgundy-600 hover:bg-burgundy-700 flex-1 w-full sm:w-auto" asChild>
                          <Link href="/publishing-packages">Register Now</Link>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-burgundy-300 text-burgundy-600 hover:bg-burgundy-600 hover:text-white flex-1 bg-transparent"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-burgundy-900 mb-8">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastFairs.map((fair) => (
              <Card key={fair.id} className="border-burgundy-200 hover:shadow-lg transition-shadow">
                <div className="relative h-72 bg-white flex items-center justify-center">
                  <Image
                    src={fair.image || "/placeholder.svg"}
                    alt={fair.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-gray-500 text-white">
                      Completed
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-burgundy-900 mb-2">{fair.name}</h3>
                  <p className="text-burgundy-700 mb-4">{fair.description}</p>
                  <div className="space-y-2 text-sm text-burgundy-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-amber-600" />
                      {fair.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                      {fair.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-amber-600" />
                      {fair.attendees} Attendees
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Book Fair Events</h2>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Be the first to know about upcoming book fairs, author appearances, and special literary events in your
            area.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-burgundy-900 border-0 focus:ring-2 focus:ring-amber-400"
            />
            <Button className="bg-amber-600 hover:bg-amber-700 px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
