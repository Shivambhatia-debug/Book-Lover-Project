import { X, BookOpen, Award, Gem, Shield, Heart, Sparkles, Clock, Check, Star, Zap, Crown, RefreshCw, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const coimbatorePackages = [
  {
    name: "Starter Package",
    price: "₹2,999",
    originalPrice: null,
    icon: Heart,
    popular: false,
    featured: false,
    color: "blue",
    description: "Essential package for Coimbatore book fair participation.",
    features: [
      { text: "Book Featuring", included: true },
      { text: "Book Signing", included: true },
      { text: "Dedicated Banner Display", included: false },
      { text: "Book Launch", included: false },
      { text: "Premium Display", included: false },
      { text: "Book of the Day", included: false },
      { text: "Bookmarks", included: false },
      { text: "Author Interview", included: false },
    ],
    additionalFeatures: 2,
    timeline: "2-3 weeks",
    support: "Email Support",
    copies: "Not included",
  },
  {
    name: "Basic Package",
    price: "₹4,990",
    originalPrice: null,
    icon: BookOpen,
    popular: false,
    featured: false,
    color: "green",
    description: "Enhanced package with premium display benefits.",
    features: [
      { text: "Book Featuring", included: true },
      { text: "Premium Display", included: true },
      { text: "Book Signing", included: true },
      { text: "Bookmarks", included: true },
      { text: "Dedicated Banner Display", included: false },
      { text: "Book Launch", included: false },
      { text: "Book of the Day", included: false },
      { text: "Author Interview", included: false },
    ],
    additionalFeatures: 4,
    timeline: "3-4 weeks",
    support: "Email & Phone Support",
    copies: "Not included",
  },
  {
    name: "Standard Package",
    price: "₹7,900",
    originalPrice: null,
    icon: Award,
    popular: false,
    featured: true,
    color: "purple",
    description: "Standard package with dedicated banner display.",
    features: [
      { text: "Book Featuring", included: true },
      { text: "Dedicated Banner Display", included: true },
      { text: "Premium Display", included: true },
      { text: "Book Signing", included: true },
      { text: "Book of the Day", included: true },
      { text: "Bookmarks", included: true },
      { text: "Book Launch", included: false },
      { text: "Author Interview", included: false },
    ],
    additionalFeatures: 6,
    timeline: "4-5 weeks",
    support: "Dedicated Manager",
    copies: "5 Author Copies",
  },
  {
    name: "Premium Package",
    price: "₹9,999",
    originalPrice: null,
    icon: Crown,
    popular: true,
    featured: true,
    color: "orange",
    description: "Premium package with author interview.",
    features: [
      { text: "Book Featuring", included: true },
      { text: "Dedicated Banner Display", included: true },
      { text: "Premium Display", included: true },
      { text: "Book Signing", included: true },
      { text: "Book of the Day", included: true },
      { text: "Bookmarks", included: true },
      { text: "Author Interview", included: true },
      { text: "Book Launch", included: false },
    ],
    additionalFeatures: 7,
    timeline: "5-6 weeks",
    support: "Dedicated Account Manager",
    copies: "10 Author Copies",
  },
  {
    name: "Elite Package",
    price: "₹14,999",
    originalPrice: null,
    icon: Crown,
    popular: true,
    featured: true,
    color: "red",
    description: "All-inclusive package with complete book fair benefits.",
    features: [
      { text: "Book Featuring", included: true },
      { text: "Dedicated Banner Display", included: true },
      { text: "Book Launch", included: true },
      { text: "Premium Display", included: true },
      { text: "Book Signing", included: true },
      { text: "Book of the Day", included: true },
      { text: "Bookmarks", included: true },
      { text: "Author Interview", included: true },
    ],
    additionalFeatures: 8,
    timeline: "6-8 weeks",
    support: "Dedicated Account Manager",
    copies: "20 Author Copies",
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "border-blue-200 bg-blue-50"
    case "green":
      return "border-green-200 bg-green-50"
    case "purple":
      return "border-purple-200 bg-purple-50"
    case "orange":
      return "border-orange-200 bg-orange-50"
    case "red":
      return "border-red-200 bg-red-50"
    default:
      return "border-gray-200 bg-gray-50"
  }
}

export default function CoimbatorePackagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Coimbatore Book Fair Publishing Packages
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Special packages designed for the Coimbatore Book Fare Festival. Get exclusive benefits and booth opportunities at the largest literary event in Coimbatore.
          </p>
          <Badge className="mt-4 bg-amber-500 text-white px-4 py-2">
            Coimbatore Book Fair Special
          </Badge>
        </div>

                 {/* Packages Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
           {coimbatorePackages.slice(0, 3).map((pkg, index) => (
             <Card
               key={index}
               className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                 pkg.featured ? "ring-2 ring-amber-500" : ""
               } ${getColorClasses(pkg.color)}`}
             >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-amber-100">
                    <pkg.icon className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                    )}
                  </div>
                  {pkg.freeBenefit && (
                    <Badge className="bg-green-100 text-green-800">
                      Save ₹{pkg.freeBenefit}
                    </Badge>
                  )}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included === true ? (
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : feature.included === false ? (
                        <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <span className={`text-sm ${feature.included === false ? 'text-gray-500' : 'text-gray-700'}`}>
                          {feature.text}
                        </span>
                        {feature.note && (
                          <p className="text-xs text-amber-600 mt-1">{feature.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Timeline: {pkg.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Support: {pkg.support}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>Copies: {pkg.copies}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    pkg.featured 
                      ? "bg-amber-600 hover:bg-amber-700 text-white" 
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  Choose {pkg.name}
                </Button>
                             </CardContent>
             </Card>
           ))}
         </div>

         {/* Second Row - 2 Packages Centered */}
         <div className="flex justify-center mb-12">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
             {coimbatorePackages.slice(3, 5).map((pkg, index) => (
               <Card
                 key={index + 3}
                 className={`relative overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                   pkg.featured ? "ring-2 ring-amber-500" : ""
                 } ${getColorClasses(pkg.color)}`}
               >
                 {pkg.popular && (
                   <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 text-sm font-medium">
                     Most Popular
                   </div>
                 )}
                 
                 <CardHeader className="text-center pb-4">
                   <div className="flex justify-center mb-4">
                     <div className="p-3 rounded-full bg-amber-100">
                       <pkg.icon className="h-8 w-8 text-amber-600" />
                     </div>
                   </div>
                   <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                   <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                 </CardHeader>

                 <CardContent className="space-y-6">
                   {/* Pricing */}
                   <div className="text-center">
                     <div className="flex items-center justify-center gap-2 mb-2">
                       <span className="text-3xl font-bold text-gray-900">{pkg.price}</span>
                       {pkg.originalPrice && (
                         <span className="text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                       )}
                     </div>
                     {pkg.freeBenefit && (
                       <Badge className="bg-green-100 text-green-800">
                         Save ₹{pkg.freeBenefit}
                       </Badge>
                     )}
                   </div>

                   {/* Features */}
                   <div className="space-y-3">
                     {pkg.features.map((feature, featureIndex) => (
                       <div key={featureIndex} className="flex items-start gap-3">
                         {feature.included === true ? (
                           <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                         ) : feature.included === false ? (
                           <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                         ) : (
                           <Star className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                         )}
                         <div className="flex-1">
                           <span className={`text-sm ${feature.included === false ? 'text-gray-500' : 'text-gray-700'}`}>
                             {feature.text}
                           </span>
                           {feature.note && (
                             <p className="text-xs text-amber-600 mt-1">{feature.note}</p>
                           )}
                         </div>
                       </div>
                     ))}
                   </div>

                   {/* Additional Info */}
                   <div className="space-y-2 text-sm text-gray-600">
                     <div className="flex items-center gap-2">
                       <Clock className="h-4 w-4" />
                       <span>Timeline: {pkg.timeline}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <Shield className="h-4 w-4" />
                       <span>Support: {pkg.support}</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <BookOpen className="h-4 w-4" />
                       <span>Copies: {pkg.copies}</span>
                     </div>
                   </div>

                   {/* CTA Button */}
                   <Button 
                     className={`w-full ${
                       pkg.featured 
                         ? "bg-amber-600 hover:bg-amber-700 text-white" 
                         : "bg-gray-900 hover:bg-gray-800 text-white"
                     }`}
                   >
                     Choose {pkg.name}
                   </Button>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>

                 {/* Special Coimbatore Benefits */}
         <Card className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
           <CardHeader>
             <CardTitle className="text-2xl">Coimbatore Book Fair Exclusive Benefits</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="text-center">
                 <BookOpen className="h-12 w-12 mx-auto mb-3" />
                 <h3 className="font-semibold mb-2">Book Fair Booth</h3>
                 <p className="text-sm opacity-90">Exclusive booth space at Coimbatore Book Fare Festival</p>
               </div>
               <div className="text-center">
                 <Users className="h-12 w-12 mx-auto mb-3" />
                 <h3 className="font-semibold mb-2">Author Meet & Greet</h3>
                 <p className="text-sm opacity-90">Direct interaction with 2000+ book lovers</p>
               </div>
               <div className="text-center">
                 <Award className="h-12 w-12 mx-auto mb-3" />
                 <h3 className="font-semibold mb-2">Marketing Support</h3>
                 <p className="text-sm opacity-90">Promotional materials and social media coverage</p>
               </div>
             </div>
           </CardContent>
         </Card>

         {/* Optional Add-On */}
         <Card className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-8">
           <CardHeader>
             <CardTitle className="text-2xl">💡 Optional Add-On</CardTitle>
           </CardHeader>
           <CardContent>
             <div className="text-center">
               <h3 className="text-xl font-semibold mb-2">Book Featuring (Standalone)</h3>
               <p className="text-3xl font-bold mb-4">₹1,999</p>
               <p className="text-sm opacity-90 mb-4">
                 Add book featuring to any package or purchase as a standalone service
               </p>
               <Button className="bg-white text-blue-600 hover:bg-gray-100">
                 Add Book Featuring
               </Button>
             </div>
           </CardContent>
         </Card>
      </div>
    </div>
  )
} 