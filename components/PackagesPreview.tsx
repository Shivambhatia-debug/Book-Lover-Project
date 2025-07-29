import Link from "next/link"
import { Check, X, Heart, BookOpen, Award, Crown, Sparkles, Shield, Gem, Star, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Help Booklover",
    price: "₹5,000",
    originalPrice: null,
    icon: Heart,
    popular: false,
    featured: false,
    color: "blue",
    description: "This package is for additional help authors are looking for.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: false },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: "conditional", note: "If required" },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: false },
      { text: "Paperback Printing", included: false },
    ],
    additionalFeatures: 3,
    timeline: "2-3 weeks",
    support: "Email Support",
    copies: "Not included",
  },
  {
    name: "Welcome Booklover",
    price: "₹8,999",
    originalPrice: null,
    icon: BookOpen,
    popular: false,
    featured: false,
    color: "green",
    description: "Perfect starting package for new authors.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design, Formatting: Regular, Illustration: Extra Charge, Editing: Basic" },
      { text: "Paperback Printing", included: false },
    ],
    additionalFeatures: 4,
    timeline: "3-4 weeks",
    support: "Email & Phone Support",
    copies: "Not included",
  },
  {
    name: "Booklover Elite",
    price: "₹14,999",
    originalPrice: "₹20,899",
    icon: Award,
    popular: false,
    featured: true,
    color: "purple",
    description: "Premium package with exclusive benefits.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Premium), Formatting: Regular, Illustration: Extra Charge, Editing: Basic" },
      { text: "Paperback Printing", included: "conditional", note: "5 Author Copies, Regular Print Quality, Good Lamination, A1 Grade Paper, Paperback format, Amazon Kindle ebook" },
    ],
    additionalFeatures: 6,
    timeline: "4-5 weeks",
    support: "Dedicated Manager",
    copies: "5 Author Copies",
    freeBenefit: "₹5,900",
  },
  {
    name: "Booklover Big Book Box",
    price: "₹20,999",
    originalPrice: "₹30,439",
    icon: Crown,
    popular: true,
    featured: true,
    color: "orange",
    description: "Our most comprehensive publishing solution.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Premium), Formatting: Best, Illustration: Extra Charge, Editing: Essential" },
      { text: "Paperback Printing", included: "conditional", note: "20 Author Copies, Regular/Custom Print Quality, Best Lamination, Best Quality Paper, Paperback, ebook" },
    ],
    additionalFeatures: 8,
    timeline: "5-6 weeks",
    support: "Dedicated Account Manager",
    copies: "20 Author Copies",
    freeBenefit: "₹9,440",
  },
]

const getColorClasses = (color: string) => {
  const colorMap: Record<string, { bg: string; text: string; border: string; icon: string }> = {
    blue: { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-200", icon: "bg-blue-100 text-blue-600" },
    green: { bg: "bg-green-500", text: "text-green-500", border: "border-green-200", icon: "bg-green-100 text-green-600" },
    purple: { bg: "bg-purple-500", text: "text-purple-500", border: "border-purple-200", icon: "bg-purple-100 text-purple-600" },
    orange: { bg: "bg-orange-500", text: "text-orange-500", border: "border-orange-200", icon: "bg-orange-100 text-orange-600" },
    indigo: { bg: "bg-indigo-500", text: "text-indigo-500", border: "border-indigo-200", icon: "bg-indigo-100 text-indigo-600" },
    gray: { bg: "bg-gray-500", text: "text-gray-500", border: "border-gray-200", icon: "bg-gray-100 text-gray-600" },
    yellow: { bg: "bg-yellow-500", text: "text-yellow-500", border: "border-yellow-200", icon: "bg-yellow-100 text-yellow-600" },
    platinum: { bg: "bg-gradient-to-r from-gray-400 to-gray-600", text: "text-gray-600", border: "border-gray-200", icon: "bg-gray-100 text-gray-600" },
  }
  return colorMap[color] || colorMap.blue
}

export default function PackagesPreview() {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        {/* Header CTA */}
        <div className="text-center mb-10 md:mb-16 bg-gradient-to-r from-red-600 to-black-800 text-white rounded-2xl p-6 md:p-12 shadow-2xl">
          <div className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Limited Time Offer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">🚀 Launch Your Book Today!</h2>
          <p className="text-base sm:text-xl mb-4 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto opacity-90 leading-relaxed">
            Professional publishing packages starting from ₹5,000. Complete support from manuscript to bestseller!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
            <Link href="/packages/comparison">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-red-600 hover:bg-red-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Detailed Comparison
              </Button>
            </Link>
            <Link href="/list-book-free">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-red-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start for FREE
              </Button>
            </Link>
          </div>
        </div>

        {/* Packages Section */}
        <div className="mb-8 md:mb-12">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-4xl font-bold text-black-800 mb-2 sm:mb-4">Choose Your Publishing Package</h3>
            <p className="text-base sm:text-lg text-black-600 max-w-xl sm:max-w-2xl mx-auto">
              From basic publishing to comprehensive marketing campaigns - we have the perfect solution for every author.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon
              const colors = getColorClasses(pkg.color)
              return (
                <Card
                  key={pkg.name}
                  className={`relative border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 bg-white ${pkg.popular ? "ring-2 ring-orange-500 shadow-xl" : "shadow-lg"} ${pkg.featured ? "border-2 border-gray-300" : "border border-gray-200"}`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-orange-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  {/* Featured Badge */}
                  {pkg.featured && !pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-purple-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                        Featured
                      </Badge>
                    </div>
                  )}
                  {/* Free Benefit Badge */}
                  {pkg.freeBenefit && (
                    <div className="absolute -top-4 right-4 z-10">
                      <Badge className="bg-green-500 text-white px-3 py-1 text-xs font-semibold">
                        FREE BENEFIT
                      </Badge>
                    </div>
                  )}
                  <CardHeader className={`text-center pb-2 sm:pb-4 ${colors.bg} text-white rounded-t-lg`}>
                    <div className={`inline-flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 rounded-full mb-4 sm:mb-6 ${colors.icon}`}>
                      <IconComponent className="h-8 sm:h-10 w-8 sm:w-10" />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl sm:text-4xl font-bold">{pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-base sm:text-lg line-through opacity-75">{pkg.originalPrice}</span>
                      )}
                      <span className="text-xs sm:text-sm">+ GST</span>
                    </div>
                    {pkg.freeBenefit && (
                      <div className="text-xs opacity-90">
                        Free Benefit Worth: ₹{pkg.freeBenefit}/-
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          {feature.included === true ? (
                            <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          ) : feature.included === false ? (
                            <X className="h-4 sm:h-5 w-4 sm:w-5 text-red-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-gray-400 mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          )}
                          <span className="text-black-700 text-xs sm:text-sm leading-relaxed">
                            {feature.text}
                            {feature.note && (
                              <span className="block text-xs text-gray-200 mt-1">{feature.note}</span>
                            )}
                          </span>
                        </li>
                      ))}
                      {pkg.additionalFeatures > 0 && (
                        <li className="pt-2">
                          <span className="text-xs text-blue-600 font-medium">+{pkg.additionalFeatures} more features</span>
                        </li>
                      )}
                    </ul>
                    <div className="space-y-1 mb-4 text-xs sm:text-sm text-gray-700">
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-medium">{pkg.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Support:</span>
                        <span className="font-medium">{pkg.support}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Copies:</span>
                        <span className="font-medium">{pkg.copies}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      className={`w-full py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? "bg-orange-500 hover:bg-orange-600 text-white" : pkg.featured ? "bg-purple-500 hover:bg-purple-600 text-white" : `${colors.bg} hover:opacity-90 text-white`}`}
                    >
                      <Link href="/publishing-packages">
                        Get Started
                        <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 ml-1 sm:ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/packages">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-red-600 text-red-600 hover:bg-red-600 hover:text-white bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Compare All Packages
              <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 ml-1 sm:ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
