"use client"

import { useState } from "react"
import Image from "next/image"
import { X, BookOpen, Award, Gem, Shield, Heart, Sparkles, Clock, Check, Star, Zap, Crown, RefreshCw, Users, Calendar, MapPin, Globe, CheckCircle, Trophy, Target, Camera, Video, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PaymentGateway from "@/components/PaymentGateway"

const delhiPackages = [
  {
    id: 1,
    name: "Basic Package",
    price: "₹4,990",
    originalPrice: null,
    icon: Heart,
    popular: false,
    featured: false,
    color: "blue",
    subtitle: "Essential package for Delhi book fair participation",
    description: "Essential package for Delhi book fair participation.",
    features: [
      "Book Featuring at Delhi Book Fair",
      "Book Signing Session",
      "Author Card with QR Code",
      "Instagram Story/Posts Pre-Fair",
      "Book Photo at the Stall",
      "Inclusion in Digital Catalogue",
      "Personal Recommendations to Visitors"
    ],
    perfectFor: "Authors looking to build local visibility and connect with Delhi's literary community.",
    timeline: "2-3 weeks",
    support: "Email Support",
    copies: "Not included",
  },
  {
    id: 2,
    name: "Standard Package",
    price: "₹7,990",
    originalPrice: null,
    icon: BookOpen,
    popular: false,
    featured: false,
    color: "green",
    subtitle: "Enhanced package with premium display benefits",
    description: "Enhanced package with premium display benefits.",
    features: [
      "All benefits from Basic Package",
      "Premium Display (Corner Slot)",
      "Customised Author Card / Bookmarks",
      "Highlight Posters showcasing reviews",
      "Professional Book Photography",
      "Social Media Posts (Before & After)",
      "Premium Shelf Placement",
      "Book of the Day (limited slots)"
    ],
    perfectFor: "Authors aiming for serious local branding and lasting impressions in Delhi's literary market.",
    timeline: "3-4 weeks",
    support: "Email & Phone Support",
    copies: "Not included",
  },
  {
    id: 3,
    name: "Advanced Package",
    price: "₹10,900",
    originalPrice: null,
    icon: Award,
    popular: false,
    featured: true,
    color: "purple",
    subtitle: "Advanced package with special shelf display",
    description: "Advanced package with special shelf display.",
    features: [
      "Everything from Standard Package",
      "Special Shelf Display",
      "Book Launch Event",
      "Video Reactions from Visitors",
      "Enhanced Social Media Coverage",
      "Dedicated Marketing Support",
      "Author Interview Session",
      "5 Author Copies Included"
    ],
    perfectFor: "Authors focused on comprehensive book promotion and establishing strong local presence.",
    timeline: "4-5 weeks",
    support: "Dedicated Manager",
    copies: "5 Author Copies",
  },
  {
    id: 4,
    name: "Premium Package",
    price: "₹14,999",
    originalPrice: null,
    icon: Crown,
    popular: true,
    featured: true,
    color: "orange",
    subtitle: "Premium package with book of the day and author interview",
    description: "Premium package with book of the day and author interview.",
    features: [
      "All Advanced Package benefits",
      "Book of the Day Feature",
      "Author Interview Session",
      "Enhanced Marketing Campaign",
      "Priority Booth Placement",
      "Professional Photography Session",
      "Social Media Influencer Collaboration",
      "10 Author Copies Included"
    ],
    perfectFor: "Authors seeking maximum exposure and premium positioning at Delhi Book Fair.",
    timeline: "5-6 weeks",
    support: "Dedicated Account Manager",
    copies: "10 Author Copies",
  },
  {
    id: 5,
    name: "Elite Package",
    price: "₹20,999",
    originalPrice: null,
    icon: Crown,
    popular: true,
    featured: true,
    color: "red",
    subtitle: "All-inclusive package with complete book fair benefits",
    description: "All-inclusive package with complete book fair benefits.",
    features: [
      "Complete Premium Package benefits",
      "Book Launch Event",
      "Exclusive Author Interview",
      "Comprehensive Marketing Campaign",
      "VIP Booth Placement",
      "Professional Video Production",
      "Media Coverage & Press Release",
      "20 Author Copies Included"
    ],
    perfectFor: "Authors focused on comprehensive book promotion and establishing strong local presence.",
    timeline: "6-8 weeks",
    support: "Dedicated Account Manager",
    copies: "20 Author Copies",
  },
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
    case "green":
      return {
        bg: "bg-green-600",
        hover: "hover:bg-green-700",
        border: "border-green-200",
        text: "text-green-600",
        bgLight: "bg-green-50"
      }
    case "purple":
      return {
        bg: "bg-purple-600",
        hover: "hover:bg-purple-700",
        border: "border-purple-200",
        text: "text-purple-600",
        bgLight: "bg-purple-50"
      }
    case "orange":
      return {
        bg: "bg-orange-600",
        hover: "hover:bg-orange-700",
        border: "border-orange-200",
        text: "text-orange-600",
        bgLight: "bg-orange-50"
      }
    case "red":
      return {
        bg: "bg-gradient-to-r from-red-600 to-black-800",
        hover: "hover:from-red-700 hover:to-black-900",
        border: "border-red-200",
        text: "text-red-600",
        bgLight: "bg-red-50"
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

export default function DelhiPackagePage() {
  const [paymentOpen, setPaymentOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<any>(null)

  const handleBuyNow = (pkg: any) => {
    const paymentPackage = {
      id: pkg.name.replace(/\s+/g, '-').toLowerCase(),
      name: pkg.name,
      price: pkg.price,
      originalPrice: pkg.originalPrice,
      description: `Delhi Book Fair - ${pkg.subtitle}`,
      features: pkg.features
    }
    setSelectedPackage(paymentPackage)
    setPaymentOpen(true)
  }

  const handlePaymentSuccess = () => {
    setPaymentOpen(false)
    setSelectedPackage(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-amber-900 via-orange-900 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/coimbatorebook.jpg"
            alt="Delhi Book Fair 2025"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge className="bg-white/20 text-white border-white/30 px-4 py-2 text-lg mb-4">
              📚 Delhi Book Fair 2025
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Showcase Your Book at
            <span className="block text-yellow-300">Delhi Book Fare Festival</span>
            India
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Be part of Delhi's largest literary event and connect with 2000+ book lovers!
          </p>
          <p className="text-lg text-amber-200 max-w-3xl mx-auto mb-8">
            Your book deserves a prominent platform. Let readers, publishers, and literary enthusiasts from Delhi and beyond discover your work — proudly represented by Booklover Publishing House.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">Upcoming Event</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">Delhi, India</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2 text-yellow-300" />
              <span className="font-semibold">2000+ Expected Attendees</span>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Delhi Book Fair Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              📌 Premium Display | Author Networking | Local Market Reach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {delhiPackages.slice(0, 3).map((pkg) => {
              const colors = getColorClasses(pkg.color)
              const IconComponent = pkg.icon
              
              return (
                <Card key={pkg.id} className={`${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 px-4">
                      <span className="font-bold text-sm">🔥 Most Popular</span>
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
                    
                    <Button 
                      onClick={() => handleBuyNow(pkg)}
                      className={`w-full ${colors.bg} ${colors.hover} text-white py-3 text-lg font-semibold`}
                    >
                      Buy Now - {pkg.price}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Second Row - 2 Packages Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {delhiPackages.slice(3, 5).map((pkg) => {
                const colors = getColorClasses(pkg.color)
                const IconComponent = pkg.icon
                
                return (
                  <Card key={pkg.id} className={`${colors.border} shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}>
                    {pkg.popular && (
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 px-4">
                        <span className="font-bold text-sm">🔥 Most Popular</span>
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
                      
                      <Button 
                        onClick={() => handleBuyNow(pkg)}
                        className={`w-full ${colors.bg} ${colors.hover} text-white py-3 text-lg font-semibold`}
                      >
                        Buy Now - {pkg.price}
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Delhi Book Fair Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Delhi Book Fair?
            </h2>
            <p className="text-xl text-gray-600">
              FROM THE HEART OF DELHI TO THE SHELVES OF INDIA<br />
              — WE ARE BOOKLOVER PUBLISHING HOUSE.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "2000+ Attendees",
                description: "Connect with Delhi's largest literary community"
              },
              {
                icon: Award,
                title: "Local Recognition",
                description: "Showcase at Delhi's premier book event"
              },
              {
                icon: Camera,
                title: "Professional Coverage",
                description: "Photos, videos, and social media content"
              },
              {
                icon: BookOpen,
                title: "Author Networking",
                description: "Meet publishers, agents, and fellow authors"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-amber-600" />
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
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Showcase Your Book?</h2>
          <p className="text-xl mb-8 text-amber-100">
            Join us at Delhi Book Fare Festival and let your story reach thousands of readers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-100 px-8">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-900 px-8">
              <Mail className="h-5 w-5 mr-2" />
              Get More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Payment Gateway */}
      <PaymentGateway
        isOpen={paymentOpen}
        onClose={() => setPaymentOpen(false)}
        selectedPackage={selectedPackage}
        onSuccess={handlePaymentSuccess}
      />
    </div>
  )
} 