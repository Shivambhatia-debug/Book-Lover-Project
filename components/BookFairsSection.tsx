"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, MapPin, Users, ArrowRight, Globe, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const nationalFairs = [
  {
    id: 1,
    city: "Pune",
    date: "March 15-18, 2025",
    venue: "Pune Exhibition Center",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "50,000+",
    status: "upcoming",
  },
  {
    id: 2,
    city: "Mumbai",
    date: "April 22-25, 2025",
    venue: "Bombay Exhibition Centre",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "75,000+",
    status: "upcoming",
  },
  {
    id: 3,
    city: "Coimbatore",
    date: "May 10-13, 2025",
    venue: "CODISSIA Trade Fair Complex",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "30,000+",
    status: "upcoming",
  },
]

const internationalFairs = [
  {
    id: 1,
    city: "Moscow, Russia",
    date: "February 20-24, 2026",
    venue: "Moscow International Book Fair",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "100,000+",
    status: "upcoming",
  },
  {
    id: 2,
    city: "Frankfurt, Germany",
    date: "October 15-19, 2026",
    venue: "Frankfurt Book Fair",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "300,000+",
    status: "upcoming",
  },
  {
    id: 3,
    city: "Sydney, Australia",
    date: "August 12-16, 2026",
    venue: "Sydney Writers' Festival",
    image: "/placeholder.svg?height=200&width=300",
    attendees: "80,000+",
    status: "upcoming",
  },
]

export default function BookFairsSection() {
  const [showPackages, setShowPackages] = useState(false)
  const [selectedType, setSelectedType] = useState<"national" | "international">("national")

  const openPackagesModal = (type: "national" | "international") => {
    setSelectedType(type)
    setShowPackages(true)
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-black-800 to-red-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🌍 Book Lover India Tour 2025-2026</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Join us at prestigious book fairs across India and around the world. Showcase your book to thousands of
              readers!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* National Book Fairs */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <Flag className="h-8 w-8 text-orange-400" />
                  <h3 className="text-3xl font-bold text-white">National Book Fairs</h3>
                </div>
              </div>

              <div className="space-y-6">
                {nationalFairs.map((fair) => (
                  <Card
                    key={fair.id}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={fair.image || "/placeholder.svg"}
                          alt={fair.city}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-1">{fair.city}</h4>
                          <div className="space-y-1 text-red-100">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="font-semibold">{fair.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{fair.venue}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{fair.attendees} Expected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={() => openPackagesModal("national")}
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-bold"
                >
                  Register Now - National
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* International Book Fairs */}
            <div>
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-blue-400" />
                  <h3 className="text-3xl font-bold text-white">International Book Fairs</h3>
                </div>
              </div>

              <div className="space-y-6">
                {internationalFairs.map((fair) => (
                  <Card
                    key={fair.id}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={fair.image || "/placeholder.svg"}
                          alt={fair.city}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-white mb-1">{fair.city}</h4>
                          <div className="space-y-1 text-red-100">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="font-semibold">{fair.date}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{fair.venue}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              <span>{fair.attendees} Expected</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={() => openPackagesModal("international")}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold"
                >
                  Register Now - International
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Modal */}
      {showPackages && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border-red-500 border-2">
            <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl">
                  {selectedType === "national" ? "National" : "International"} Book Fair Packages
                </CardTitle>
                <Button
                  onClick={() => setShowPackages(false)}
                  variant="ghost"
                  className="text-white hover:text-red-200"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-red-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-black-800">Basic Package</CardTitle>
                    <div className="text-3xl font-bold text-red-600">
                      {selectedType === "national" ? "₹1.5 Lakh" : "₹3 Lakh"}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black-600">
                      <li>• Exhibition stall (3x3 meters)</li>
                      <li>• Book display setup</li>
                      <li>• Basic promotional materials</li>
                      <li>• Author registration</li>
                      <li>• 2 days participation</li>
                    </ul>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Select Package</Button>
                  </CardContent>
                </Card>

                <Card className="border-red-500 border-2 bg-red-50">
                  <CardHeader className="text-center">
                    <Badge className="bg-red-500 text-white mb-2">Most Popular</Badge>
                    <CardTitle className="text-xl text-black-800">Professional Package</CardTitle>
                    <div className="text-3xl font-bold text-red-600">
                      {selectedType === "national" ? "₹2 Lakh" : "₹4 Lakh"}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black-600">
                      <li>• Premium exhibition stall (4x4 meters)</li>
                      <li>• Professional book display</li>
                      <li>• Marketing materials & banners</li>
                      <li>• Author meet & greet sessions</li>
                      <li>• Full event participation</li>
                      <li>• Media coverage</li>
                    </ul>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Select Package</Button>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-black-800">Premium Package</CardTitle>
                    <div className="text-3xl font-bold text-red-600">
                      {selectedType === "national" ? "₹3 Lakh" : "₹5 Lakh"}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black-600">
                      <li>• VIP exhibition stall (5x5 meters)</li>
                      <li>• Premium setup & decoration</li>
                      <li>• Complete marketing package</li>
                      <li>• Author speaking sessions</li>
                      <li>• VIP networking events</li>
                      <li>• Dedicated support team</li>
                      <li>• Post-event marketing</li>
                    </ul>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">Select Package</Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
