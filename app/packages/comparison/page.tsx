import { Check, X, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const packages = [
  {
    name: "Basic Package",
    price: "₹1.5 Lakh",
    icon: Star,
    popular: false,
    color: "red",
    features: {
      "Editing Services": true,
      "Professional Cover Design": true,
      "ISBN Registration": true,
      "Print Setup": true,
      "Digital Distribution": true,
      "Basic Marketing": true,
      "Author Website": false,
      "Social Media Kit": false,
      "Book Trailer": false,
      "PR Campaign": false,
      "Bookstore Placement": false,
      "Award Submissions": false,
      "Dedicated Manager": false,
      "Book Fair Representation": false,
      "Advanced Analytics": false,
    },
    timeline: "4-6 weeks",
    support: "Email Support",
    copies: "10 Author Copies",
  },
  {
    name: "Professional Package",
    price: "₹2 Lakh",
    icon: Zap,
    popular: true,
    color: "red",
    features: {
      "Editing Services": true,
      "Professional Cover Design": true,
      "ISBN Registration": true,
      "Print Setup": true,
      "Digital Distribution": true,
      "Basic Marketing": true,
      "Author Website": true,
      "Social Media Kit": true,
      "Book Trailer": true,
      "PR Campaign": false,
      "Bookstore Placement": false,
      "Award Submissions": false,
      "Dedicated Manager": false,
      "Book Fair Representation": false,
      "Advanced Analytics": true,
    },
    timeline: "6-8 weeks",
    support: "Phone & Email Support",
    copies: "25 Author Copies",
  },
  {
    name: "Premium Package",
    price: "₹3 Lakh",
    icon: Crown,
    popular: false,
    color: "red",
    features: {
      "Editing Services": true,
      "Professional Cover Design": true,
      "ISBN Registration": true,
      "Print Setup": true,
      "Digital Distribution": true,
      "Basic Marketing": true,
      "Author Website": true,
      "Social Media Kit": true,
      "Book Trailer": true,
      "PR Campaign": true,
      "Bookstore Placement": true,
      "Award Submissions": true,
      "Dedicated Manager": true,
      "Book Fair Representation": true,
      "Advanced Analytics": true,
    },
    timeline: "8-12 weeks",
    support: "Dedicated Account Manager",
    copies: "50 Author Copies",
  },
]

const allFeatures = [
  "Editing Services",
  "Professional Cover Design",
  "ISBN Registration",
  "Print Setup",
  "Digital Distribution",
  "Basic Marketing",
  "Author Website",
  "Social Media Kit",
  "Book Trailer",
  "PR Campaign",
  "Bookstore Placement",
  "Award Submissions",
  "Dedicated Manager",
  "Book Fair Representation",
  "Advanced Analytics",
]

export default function PackageComparisonPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black-800 mb-6">Compare Publishing Packages</h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto">
            Choose the perfect package for your publishing journey. Detailed comparison of all features and services.
          </p>
        </div>

        {/* Package Headers */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="hidden lg:block">
            <Card className="h-full border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-black-800">Features</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-black-600">Compare all features across our publishing packages</p>
              </CardContent>
            </Card>
          </div>

          {packages.map((pkg) => {
            const IconComponent = pkg.icon
            return (
              <Card
                key={pkg.name}
                className={`relative border-2 ${
                  pkg.popular ? "border-red-500 shadow-xl" : "border-red-200"
                } ${pkg.popular ? "bg-gradient-to-b from-red-50 to-red-100" : "bg-white"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500 text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black-800">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-red-600 mb-2">{pkg.price}</div>
                  <div className="text-sm text-black-600">{pkg.timeline}</div>
                </CardHeader>

                <CardContent className="text-center">
                  <Button
                    className={`w-full mb-4 ${
                      pkg.popular ? "bg-red-600 hover:bg-red-700" : "bg-black-800 hover:bg-black-700"
                    }`}
                  >
                    Choose Package
                  </Button>
                  <div className="text-sm text-black-600 space-y-1">
                    <p>
                      <strong>Support:</strong> {pkg.support}
                    </p>
                    <p>
                      <strong>Copies:</strong> {pkg.copies}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Comparison Table */}
        <Card className="border-red-200 shadow-lg">
          <CardHeader className="bg-red-50">
            <CardTitle className="text-2xl text-black-800">Detailed Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-red-200">
                    <th className="text-left p-4 font-semibold text-black-800 bg-red-50">Features</th>
                    {packages.map((pkg) => (
                      <th key={pkg.name} className="text-center p-4 font-semibold text-black-800 bg-red-50">
                        {pkg.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, index) => (
                    <tr
                      key={feature}
                      className={`border-b border-red-100 ${index % 2 === 0 ? "bg-white" : "bg-red-25"}`}
                    >
                      <td className="p-4 font-medium text-black-700">{feature}</td>
                      {packages.map((pkg) => (
                        <td key={`${pkg.name}-${feature}`} className="p-4 text-center">
                          {pkg.features[feature] ? (
                            <Check className="h-6 w-6 text-green-600 mx-auto" />
                          ) : (
                            <X className="h-6 w-6 text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-black-800">Payment Options</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-black-600">
                <li>• Full payment upfront</li>
                <li>• 50% advance, 50% on completion</li>
                <li>• EMI options available</li>
                <li>• Corporate packages available</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-black-800">Timeline Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-black-600">
                <li>• Timeline starts after content approval</li>
                <li>• Rush delivery available (+20% cost)</li>
                <li>• Regular updates provided</li>
                <li>• Milestone-based delivery</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-black-800">Support Included</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-black-600">
                <li>• 6 months post-launch support</li>
                <li>• Technical assistance</li>
                <li>• Marketing guidance</li>
                <li>• Sales reporting</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 bg-gradient-to-r from-red-600 to-black-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Publishing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our publishing experts are here to help you choose the perfect package for your book.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
