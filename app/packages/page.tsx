import { Check, Star, Zap, Crown, ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const packages = [
  {
    name: "Starter",
    price: 299,
    icon: Star,
    popular: false,
    description: "Perfect for first-time authors looking to get their book published",
    features: [
      "Basic editing service (up to 50,000 words)",
      "Standard cover design with 3 concepts",
      "ISBN assignment and registration",
      "Print-on-demand setup on major platforms",
      "Basic marketing support and guidance",
      "Author copies (5 paperback books)",
      "Digital distribution to major retailers",
    ],
    timeline: "4-6 weeks",
    support: "Email support",
  },
  {
    name: "Professional",
    price: 599,
    icon: Zap,
    popular: true,
    description: "Comprehensive publishing solution for serious authors",
    features: [
      "Professional editing (up to 80,000 words)",
      "Custom cover design with unlimited revisions",
      "ISBN & barcode included",
      "Print & digital publishing on all platforms",
      "3-month marketing campaign",
      "Author website setup and hosting (1 year)",
      "Social media marketing kit",
      "Author copies (15 paperback books)",
      "Book trailer creation (30 seconds)",
      "Press release writing and distribution",
    ],
    timeline: "6-8 weeks",
    support: "Priority email & phone support",
  },
  {
    name: "Premium",
    price: 999,
    icon: Crown,
    popular: false,
    description: "Complete publishing and marketing solution for maximum impact",
    features: [
      "Comprehensive editing (unlimited word count)",
      "Premium cover design with market research",
      "Multiple format publishing (hardcover, paperback, ebook, audiobook)",
      "6-month advanced marketing campaign",
      "Professional book trailer (60 seconds)",
      "PR campaign with media outreach",
      "Bookstore placement assistance",
      "Author website with e-commerce integration",
      "Author copies (25 books in mixed formats)",
      "Dedicated publishing consultant",
      "Book fair representation",
      "Award submission assistance",
    ],
    timeline: "8-12 weeks",
    support: "Dedicated account manager",
  },
]

const addOns = [
  {
    name: "Additional Editing",
    price: 150,
    description: "Extra editing rounds for perfection",
  },
  {
    name: "Audiobook Production",
    price: 800,
    description: "Professional narration and production",
  },
  {
    name: "Extended Marketing",
    price: 300,
    description: "Additional 3 months of marketing support",
  },
  {
    name: "Book Fair Booth",
    price: 500,
    description: "Dedicated booth space at major book fairs",
  },
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-burgundy-900 mb-6">Publishing Packages</h1>
          <p className="text-xl text-burgundy-700 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package to bring your book to life. From basic publishing to comprehensive marketing
            campaigns, we have everything you need to succeed as an author.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={pkg.name}
                className={`relative border-2 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular
                    ? "border-amber-500 shadow-xl scale-105 bg-gradient-to-b from-white to-amber-50"
                    : "border-burgundy-200 hover:border-burgundy-300 bg-white"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                      pkg.popular ? "bg-amber-100" : "bg-burgundy-100"
                    }`}
                  >
                    <IconComponent className={`h-10 w-10 ${pkg.popular ? "text-amber-600" : "text-burgundy-600"}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-burgundy-900 mb-2">{pkg.name}</h3>
                  <p className="text-burgundy-600 mb-4">{pkg.description}</p>
                  <div className="text-5xl font-bold text-burgundy-900 mb-2">
                    ₹{pkg.price}
                    <span className="text-lg font-normal text-burgundy-600">/book</span>
                  </div>
                  <div className="text-sm text-burgundy-600">Timeline: {pkg.timeline}</div>
                </CardHeader>

                <CardContent className="px-6 pb-8">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-burgundy-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-burgundy-50 p-4 rounded-lg mb-6">
                    <p className="text-sm text-burgundy-700">
                      <strong>Support:</strong> {pkg.support}
                    </p>
                  </div>

                  <Button
                    className={`w-full py-3 text-lg font-semibold ${
                      pkg.popular
                        ? "bg-amber-600 hover:bg-amber-700 shadow-lg"
                        : "bg-burgundy-600 hover:bg-burgundy-700"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-burgundy-900 mb-4">Optional Add-ons</h2>
            <p className="text-lg text-burgundy-700">
              Enhance your publishing experience with these additional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <Card key={addon.name} className="border-burgundy-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-burgundy-900 mb-2">{addon.name}</h3>
                  <p className="text-burgundy-600 text-sm mb-4">{addon.description}</p>
                  <div className="text-2xl font-bold text-burgundy-900 mb-4">+₹{addon.price}</div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-burgundy-300 text-burgundy-600 hover:bg-burgundy-600 hover:text-white bg-transparent"
                  >
                    Add to Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm border border-burgundy-200 p-8 mb-16">
          <h2 className="text-3xl font-bold text-burgundy-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-burgundy-900 mb-2">What's included in the editing service?</h3>
              <p className="text-burgundy-700 mb-4">
                Our editing includes developmental editing, copy editing, and proofreading to ensure your book is
                polished and professional.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-burgundy-900 mb-2">
                How long does the publishing process take?
              </h3>
              <p className="text-burgundy-700 mb-4">
                Timeline varies by package, ranging from 4-12 weeks depending on the services included and the
                complexity of your project.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-burgundy-900 mb-2">Do I retain rights to my book?</h3>
              <p className="text-burgundy-700 mb-4">
                Yes, you retain full rights to your work. We simply provide publishing and marketing services to help
                you succeed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-burgundy-900 mb-2">Can I upgrade my package later?</h3>
              <p className="text-burgundy-700 mb-4">
                You can add services or upgrade to a higher package at any time during the publishing process.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-burgundy-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Publishing Journey?</h2>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Have questions about our packages? Our publishing experts are here to help you choose the perfect solution
            for your book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-burgundy-900 bg-transparent"
            >
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
