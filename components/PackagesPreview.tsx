import Link from "next/link"
import { Check, Star, Zap, Crown, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Basic Package",
    price: "₹1.5 Lakh",
    originalPrice: "₹2 Lakh",
    icon: Star,
    popular: false,
    features: [
      "Professional editing service",
      "Custom cover design",
      "ISBN & barcode registration",
      "Print-on-demand setup",
      "Basic marketing support",
      "10 author copies included",
    ],
  },
  {
    name: "Professional Package",
    price: "₹2 Lakh",
    originalPrice: "₹2.5 Lakh",
    icon: Zap,
    popular: true,
    features: [
      "Comprehensive editing",
      "Premium cover design",
      "ISBN & barcode included",
      "Multi-platform publishing",
      "3-month marketing campaign",
      "Author website creation",
      "Social media marketing kit",
      "25 author copies included",
    ],
  },
  {
    name: "Premium Package",
    price: "₹3 Lakh",
    originalPrice: "₹4 Lakh",
    icon: Crown,
    popular: false,
    features: [
      "Complete editing & proofreading",
      "Premium cover with market research",
      "Multi-format publishing",
      "6-month marketing campaign",
      "Professional book trailer",
      "PR campaign & media outreach",
      "Bookstore placement assistance",
      "50 author copies included",
    ],
  },
]

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
            Professional publishing packages starting from ₹1.5 Lakh. Complete support from manuscript to bestseller with up to 25% savings!
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {packages.map((pkg) => {
              const IconComponent = pkg.icon
              return (
                <Card
                  key={pkg.name}
                  className={`relative border-2 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 bg-white ${pkg.popular ? "border-red-500 shadow-xl" : "border-red-200 hover:border-red-300"}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-red-500 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm font-bold shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-2 sm:pb-4">
                    <div className={`inline-flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 rounded-full mb-4 sm:mb-6 ${pkg.popular ? "bg-red-100" : "bg-black-100"}`}>
                      <IconComponent className={`h-8 sm:h-10 w-8 sm:w-10 ${pkg.popular ? "text-red-600" : "text-black-600"}`} />
                    </div>
                    <h3 className="text-xl sm:text-3xl font-bold text-black-800 mb-1 sm:mb-2">{pkg.name}</h3>

                    <div className="text-center mb-2 sm:mb-4">
                      <div className="text-2xl sm:text-4xl font-bold text-black-800">{pkg.price}</div>
                      {pkg.originalPrice && (
                        <div className="text-base sm:text-lg text-red-500 line-through">{pkg.originalPrice}</div>
                      )}
                      <div className="text-xs sm:text-sm text-green-600 font-semibold mt-1">Save up to 25%</div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-4 sm:px-6 pb-6 sm:pb-8">
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 sm:h-5 w-4 sm:w-5 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-black-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-2 sm:py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${pkg.popular ? "bg-red-600 hover:bg-red-700" : "bg-black-800 hover:bg-black-700"}`}
                    >
                      Get Started
                      <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5 ml-1 sm:ml-2" />
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
