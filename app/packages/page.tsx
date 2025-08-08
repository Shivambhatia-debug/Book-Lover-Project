import { X, BookOpen, Award, Gem, Shield, Heart, Sparkles, Clock, Check, Star, Zap, Crown, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Booklover Platinum",
    price: "₹1,51,000",
    originalPrice: "₹1,65,000",
    icon: Star,
    popular: false,
    featured: true,
    color: "platinum",
    description: "Ultimate publishing experience with luxury features.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Luxury), Formatting: Premium, Illustration: Unlimited, Editing: Professional" },
      { text: "Paperback Printing", included: "conditional", note: "50 Author Copies, Luxury Print Quality, Premium Lamination, Luxury Paper, Hardcover included" },
    ],
    additionalFeatures: 12,
    timeline: "8-10 weeks",
    support: "Dedicated Account Manager + 24/7 Priority Support",
    copies: "50 Author Copies",
    freeBenefit: "₹14,000",
  },
  {
    name: "Booklover Display Gold",
    price: "₹91,000",
    originalPrice: "₹1,05,000",
    icon: Gem,
    popular: false,
    featured: true,
    color: "yellow",
    description: "Premium display and marketing package.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Premium), Formatting: Premium, Illustration: Included, Editing: Professional" },
      { text: "Paperback Printing", included: "conditional", note: "15 Author Copies, Premium Print Quality, Premium Lamination, Premium Paper" },
    ],
    additionalFeatures: 7,
    timeline: "5-6 weeks",
    support: "Dedicated Manager",
    copies: "15 Author Copies",
    freeBenefit: "₹14,000",
  },
  {
    name: "Booklover Silver",
    price: "₹51,999",
    originalPrice: "₹65,000",
    icon: Shield,
    popular: false,
    featured: false,
    color: "gray",
    description: "Reliable package for serious authors.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Standard), Formatting: Regular, Illustration: Extra Charge, Editing: Standard" },
      { text: "Paperback Printing", included: "conditional", note: "10 Author Copies, Standard Print Quality, Standard Lamination, Standard Paper" },
    ],
    additionalFeatures: 5,
    timeline: "4-5 weeks",
    support: "Email & Phone Support",
    copies: "10 Author Copies",
  },
  {
    name: "Elite++",
    price: "₹33,999",
    originalPrice: "₹45,000",
    icon: Sparkles,
    popular: false,
    featured: true,
    color: "indigo",
    description: "Advanced package with premium features.",
    features: [
      { text: "Copyright / ISBN / Barcode", included: true },
      { text: "Publishing Consultant", included: true },
      { text: "Publishing Manager", included: true },
      { text: "Marketing Assistance", included: true },
      { text: "Add-on Services", included: "conditional", note: "Book Cover Design (Premium), Formatting: Premium, Illustration: Included, Editing: Professional" },
      { text: "Paperback Printing", included: "conditional", note: "30 Author Copies, Premium Print Quality, Premium Lamination, Premium Paper, Hardcover option available" },
    ],
    additionalFeatures: 10,
    timeline: "6-8 weeks",
    support: "Dedicated Account Manager + Priority Support",
    copies: "30 Author Copies",
    freeBenefit: "₹11,001",
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
]

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: { bg: string; text: string; border: string; icon: string } } = {
    blue: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    green: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    purple: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    orange: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    indigo: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    gray: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    yellow: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
    platinum: { bg: "bg-gradient-to-br from-red-600 to-red-800", text: "text-red-600", border: "border-red-200", icon: "bg-red-100 text-red-600" },
  }
  return colorMap[color] || colorMap.blue
}

export default function PackageComparisonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Publishing Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect publishing package that fits your needs and budget. From basic assistance to comprehensive publishing solutions.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            const colors = getColorClasses(pkg.color)
            
            return (
              <Card
                key={pkg.name}
                className={`relative h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  pkg.popular ? "ring-2 ring-orange-500 shadow-xl" : "shadow-lg"
                } ${pkg.featured ? "border-2 border-gray-300" : "border border-gray-200"}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-red-600 text-white px-4 py-1 text-sm font-semibold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}

                {/* Featured Badge */}
                {pkg.featured && !pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-red-600 text-white px-4 py-1 text-sm font-semibold">
                      FEATURED
                    </Badge>
                  </div>
                )}

                {/* Free Benefit Badge */}
                {pkg.freeBenefit && (
                  <div className="absolute -top-3 right-4 z-10">
                    <Badge className="bg-green-500 text-white px-3 py-1 text-xs font-semibold">
                      FREE BENEFIT
                    </Badge>
                  </div>
                )}

                {/* Card Header */}
                <CardHeader className={`text-center pb-4 ${colors.bg} text-white rounded-t-lg`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.icon} rounded-full mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{pkg.name}</CardTitle>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg line-through opacity-75">{pkg.originalPrice}</span>
                    )}
                    <span className="text-sm">+ GST</span>
                  </div>

                  {pkg.freeBenefit && (
                    <div className="text-sm opacity-90">
                      Free Benefit Worth: ₹{pkg.freeBenefit}/-
                    </div>
                  )}

                  {pkg.freeBenefit && (
                    <div className="text-xs opacity-80 mt-2 flex items-center gap-1 justify-center">
                      <RefreshCw className="h-3 w-3" />
                      Free benefits from your publishing package can be redeemed against Book Fair Packages (₹6000 / ₹8000 / ₹10000).
                    </div>
                  )}
                </CardHeader>

                {/* Card Content */}
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {feature.included === true ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : feature.included === false ? (
                            <X className="h-4 w-4 text-red-400" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-gray-400 mt-1.5" />
                          )}
                        </div>
                        <div className="flex-1">
                          <span className={`text-sm ${feature.included === false ? 'text-gray-400' : 'text-gray-700'}`}>
                            {feature.text}
                          </span>
                          {feature.note && (
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                              {feature.note}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {pkg.additionalFeatures > 0 && (
                      <div className="pt-2">
                        <button className="text-sm text-red-600 hover:text-red-800 font-medium">
                          +{pkg.additionalFeatures} more features
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Package Details */}
                  <div className="space-y-2 mb-6 text-sm text-gray-600">
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

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white' 
                        : pkg.featured 
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : `${colors.bg} hover:opacity-90 text-white`
                    }`}
                  >
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Zap className="h-5 w-5 text-red-600" />
                Payment Options
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Full payment upfront
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  50% advance, 50% on completion
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  EMI options available
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Corporate packages available
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-600" />
                Timeline Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Timeline starts after content approval
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Rush delivery available (+20% cost)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Regular updates provided
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Milestone-based delivery
                </li>
              </ul>
                </CardContent>
              </Card>

          <Card className="border-gray-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-600" />
                Support Included
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  6 months post-launch support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Technical assistance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Marketing guidance
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-red-600" />
                  Sales reporting
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Publishing Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Our publishing experts are here to help you choose the perfect package for your book.
            Get personalized guidance and start your journey to becoming a published author.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
