"use client"

import Image from "next/image"
import { Phone, Mail, Calendar, MapPin, Globe, CheckCircle, Star, Trophy, Users, Plane, Camera, Video, BookOpen, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    id: 1,
    name: "Special Featured Display",
    price: "₹25,000",
    color: "blue",
    icon: BookOpen,
    subtitle: "Stand out from the shelf – highlight your voice among Indian authors",
    features: [
      "Shipping (to & fro) Included",
      "Books Displayed at Themed Shelf (Emerging Indian Authors)",
      "Author Card or Bookmarks with QR Code",
      "Instagram Story/Posts Pre-Fair",
      "Book Photo Taken at the Stall",
      "Inclusion in Our \"Books We Represent\" Digital Catalogue",
      "Personally Recommended by Team to Interested Visitors"
    ],
    perfectFor: "Authors looking to build international visibility, increase reader curiosity, and gain PR-ready content from Frankfurt."
  },
  {
    id: 2,
    name: "Premium Representation",
    price: "₹45,000",
    color: "red",
    icon: Trophy,
    subtitle: "Create a legacy. Get celebrated globally.",
    features: [
      "All benefits from ₹25K package",
      "Feature at our \"Representing Indian Literature\" Section",
      "Customised Author Card / Bookmarks for Visitors",
      "Highlight Posters showcasing reviews, recognitions, or awards",
      "Professional Book Photography & Stall Visuals",
      "Video Reactions from International Visitors (If they purchase the book)",
      "Social Media Posts (Before & After the Fair)",
      "Premium Shelf Placement at the Stall",
      "Book of the Day (only 5 slots)"
    ],
    perfectFor: "Authors & publishers aiming for serious global branding, distribution tie-ups, and lasting impressions in the international market."
  },
  {
    id: 3,
    name: "Global Rights ",
    price: "₹75,000",
    color: "amber",
    icon: Target,
    subtitle: "Beyond the Shelf: Take Your Book to the Next Level",
    features: [
      "Everything from the ₹45K Premium Package",
      "Active Outreach to Book Enthusiasts & Influencers visiting Frankfurt",
      "Pitching to Digital Publishers & Media Professionals in online & print",
      "Outreach to Film Producers & Content Studios exploring book-to-screen opportunities",
      "Contact with Literary Agents seeking books with global appeal",
      "Follow-up Email Reach-outs to interested parties post-fair"
    ],
    perfectFor: "Authors focused on selling rights, exploring adaptations, and getting their book on the global radar of creative industries.",
    limitedSlots: "Limited to Only 10 Titles"
  }
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        border: "border-blue-200",
        text: "text-blue-600",
        bgLight: "bg-blue-50"
      }
    case "red":
      return {
        bg: "bg-red-600",
        hover: "hover:bg-red-700",
        border: "border-red-200",
        text: "text-red-600",
        bgLight: "bg-red-50"
      }
    case "amber":
      return {
        bg: "bg-amber-600",
        hover: "hover:bg-amber-700",
        border: "border-amber-200",
        text: "text-amber-600",
        bgLight: "bg-amber-50"
      }
    default:
      return {
        bg: "bg-blue-600",
        hover: "hover:bg-blue-700",
        border: "border-blue-200",
        text: "text-blue-600",
        bgLight: "bg-blue-50"
      }
  }
}

export default function FrankfurtBookFair2025() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/bli1.jpg"
            alt="Frankfurt Book Fair 2025"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg mb-4">
              🌍 International Book Fair 2025
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Showcase Your Book at
            <span className="block text-yellow-300">Frankfurt Book Fair 2025</span>
            Germany
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Be part of the world's largest book event and let your story cross borders!
          </p>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto mb-8">
            Your book deserves a global platform. Let readers, publishers, agents, and distributors from around the world discover your work — proudly represented at the India National Stand by Booklover Publishing House.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">October 15-19, 2025</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">Frankfurt, Germany</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">India National Stand</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your International Publishing Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              📌 Limited Slots | Premium Display | Curated Representation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const colors = getColorClasses(pkg.color)
              const IconComponent = pkg.icon
              
              return (
                <Card key={pkg.id} className={`${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                  {pkg.limitedSlots && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 px-4">
                      <span className="font-bold text-sm">🔒 {pkg.limitedSlots}</span>
                    </div>
                  )}
                  
                  <CardHeader className={`${colors.bg} text-white text-center pb-6`}>
                    <div className="flex justify-center mb-4">
                      <div className="bg-white/20 p-4 rounded-full">
                        <IconComponent className="h-8 w-8" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                    <p className="text-sm opacity-90">{pkg.subtitle}</p>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4 mb-6">
                      {pkg.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 ${colors.text} mt-0.5 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`${colors.bgLight} p-4 rounded-lg mb-6`}>
                      <h4 className={`font-semibold ${colors.text} mb-2 flex items-center`}>
                        <Star className="h-4 w-4 mr-2" />
                        Perfect For:
                      </h4>
                      <p className="text-gray-700 text-sm">{pkg.perfectFor}</p>
                    </div>
                    
                    <Button className={`w-full ${colors.bg} ${colors.hover} text-white py-3 text-lg font-semibold`}>
                      Register for {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Frankfurt Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Frankfurt Book Fair?
            </h2>
            <p className="text-xl text-gray-600">
              FROM THE HEART OF INDIA TO THE SHELVES OF THE WORLD<br />
              — WE ARE BOOKLOVER PUBLISHING HOUSE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: "World's Largest Book Fair",
                description: "300,000+ visitors from 100+ countries"
              },
              {
                icon: Users,
                title: "Industry Networking",
                description: "Meet publishers, agents, and distributors"
              },
              {
                icon: Award,
                title: "Global Recognition",
                description: "Showcase at India National Stand"
              },
              {
                icon: Camera,
                title: "Professional Coverage",
                description: "Photos, videos, and social media content"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Book Global?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let your book speak for India on the world stage 🇮🇳📖✈
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">+91 9142994429</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">bookloverpublishinghouse@gmail.com</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3">
              Book Your Slot Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}