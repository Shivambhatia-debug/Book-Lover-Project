"use client"

import Image from "next/image"
import { Calendar, MapPin, Users, Ticket, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState, useEffect } from "react"

const upcomingFairs = [
  {
    id: 1,
    name: "Mumbai Book Fare Festival",
    date: "Upcoming",
    location: "Upcoming",
    address: "Upcoming",
    attendees: "5000+",
    image: "/images/mumbaibook.jpg",
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
    name: "Delhi Book Fare Festival",
    date: "Upcoming",
    location: "Upcoming",
    address: "Upcoming",
    attendees: "2000+",
    image: "/images/coimbatorebook.jpg",
    description:
      "Discover emerging voices in literature and meet independent authors from around the region. A perfect venue for discovering your next favorite book.",
    highlights: [
      "30+ Indie author booths",
      "Poetry reading sessions",
      "Self-publishing workshops",
      "Book launch events",
      "Reader meet & greets",
    ],
    ticketPrice: "updated soon",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Pune Book Fare Festival",
    date: "Upcoming",
    location: "Upcoming",
    address: "Upcoming",
    attendees: "8000+",
    image: "/images/punebook.jpg",
    description:
      "The largest book fair of the year featuring bestselling authors and exclusive book launches. Don't miss this spectacular literary event.",
    highlights: [
      "100+ Author appearances",
      "Exclusive book launches",
      "Children's storytelling corner",
      "Food trucks and entertainment",
      "Special celebrity guest speakers",
    ],
    ticketPrice: "updated soon",
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

        {/* Featured International Event */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-lg mb-4">
              🌍 Featured International Event
            </Badge>
            <h2 className="text-3xl font-bold text-burgundy-900 mb-4">Frankfurt Book Fair 2025</h2>
          </div>
          
          <Card className="border-blue-200 shadow-2xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image src="/images/bli11.jpg" alt="Frankfurt Book Fair 2025" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-burgundy-900 mb-4">
                  Showcase Your Book at Frankfurt Book Fair 2025 – Germany
                </h3>
                <p className="text-burgundy-700 mb-6 leading-relaxed">
                  Be part of the world's largest book event! Your book deserves a global platform at the India National Stand by Booklover Publishing House.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-white rounded-lg shadow">
                    <div className="text-blue-600 font-bold text-lg">₹25,000</div>
                    <div className="text-sm text-gray-600">Featured Display</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow">
                    <div className="text-red-600 font-bold text-lg">₹45,000</div>
                    <div className="text-sm text-gray-600">Premium Rep.</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg shadow">
                    <div className="text-amber-600 font-bold text-lg">₹75,000</div>
                    <div className="text-sm text-gray-600">Global Rights</div>
                  </div>
                </div>
                
                <div className="flex items-center text-burgundy-700 mb-4">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span className="font-medium">October 15-19, 2025 | Frankfurt, Germany</span>
                </div>
                
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                  <Link href="/book-fairs/frankfurt-2025">
                    View Frankfurt Packages 
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-burgundy-900">Domestic Events</h2>
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
                          <Link href={fair.name.includes("Mumbai") ? "/publishing-packages/mumbai" : fair.name.includes("Pune") ? "/publishing-packages/pune" : "/publishing-packages/coimbatore"}>
                            Register Now
                          </Link>
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
        {/* Replace past events grid with a slideshow */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-burgundy-900 mb-8 text-center">Glimpses of Past Events</h2>
          <PastEventsSlideshow />
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white rounded-lg p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated on Book Fair Events</h2>
          <p className="text-lg sm:text-xl text-cream-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Be the first to know about upcoming book fairs, author appearances, and special literary events in your
            area.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-burgundy-900 border-0 focus:ring-2 focus:ring-amber-400 w-full"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 px-6 sm:px-8 py-3 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const pastEventData = [
  {
    image: "/images/coimbatorebook.jpg",
    title: "International Book Expo 2023",
    message: "Global Literature and Cultural Diversity"
  },
  {
    image: "/images/past1.jpg",
    title: "Winter Literary Festival 2023",
    message: "Celebrating Classic Literature and Modern Voices"
  },
  {
    image: "/images/past2.jpg",
    title: "Spring Book Carnival 2023",
    message: "Where Stories Come Alive and Dreams Take Flight"
  },
  {
    image: "/images/past3.jpg",
    title: "Summer Reading Extravaganza 2023",
    message: "Discovering New Worlds Through the Power of Words"
  },
  {
    image: "/images/past4.jpg",
    title: "Autumn Literary Gathering 2023",
    message: "Bridging Cultures Through Shared Stories"
  },
  {
    image: "/images/past5.jpg",
    title: "Festival of Words 2023",
    message: "Uniting Readers and Writers in Literary Celebration"
  },
  {
    image: "/images/past6.jpg",
    title: "Book Lovers Convention 2023",
    message: "Creating Lasting Memories Through Literature"
  }
]

function PastEventsSlideshow() {
  const [current, setCurrent] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pastEventData.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="relative w-full max-w-3xl mx-auto h-80 sm:h-96 rounded-xl overflow-hidden shadow-lg">
        {pastEventData.map((event, idx) => (
          <div
            key={event.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover w-full h-full"
              priority={idx === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </div>
        ))}
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {pastEventData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? 'bg-amber-500 scale-110' : 'bg-white/60 hover:bg-white/80'}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      </div>
      
      {/* Title and message below the image */}
      <div className="text-center" suppressHydrationWarning>
        <h3 className="text-2xl font-bold text-burgundy-900 mb-2">{pastEventData[current].title}</h3>
        <p className="text-lg text-burgundy-700">{pastEventData[current].message}</p>
      </div>
    </div>
  )
}
