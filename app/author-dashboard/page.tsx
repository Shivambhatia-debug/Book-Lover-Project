"use client"

import { useState } from "react"
import { Upload, CheckCircle, Clock, CreditCard, FileText, Phone, Mail } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const publishingPackages = [
  {
    id: 1,
    name: "Basic Publishing",
    price: "₹15,000",
    originalPrice: "₹20,000",
    features: [
      "Professional Editing & Proofreading",
      "Basic Cover Design",
      "ISBN Registration", 
      "Print Publishing (50 copies)",
      "Digital Publishing"
    ]
  },
  {
    id: 2,
    name: "Premium Publishing",
    price: "₹25,000",
    originalPrice: "₹35,000",
    popular: true,
    features: [
      "All Basic Features",
      "Premium Cover Design",
      "Professional Formatting",
      "Print Publishing (100 copies)",
      "Enhanced Marketing",
      "Book Fair Participation"
    ]
  },
  {
    id: 3,
    name: "Elite Publishing", 
    price: "₹45,000",
    originalPrice: "₹60,000",
    features: [
      "All Premium Features",
      "Premium Editing",
      "Custom Cover Design",
      "Print Publishing (200 copies)",
      "Complete Marketing Campaign",
      "Book Launch Event"
    ]
  }
]

export default function AuthorDashboard() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [uploadProgress] = useState(85)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("")

  const handlePackageSelect = (packageId: number) => {
    setSelectedPackage(packageId)
  }

  const handlePayment = () => {
    toast.success("Payment processing... Redirecting to payment gateway")
    // Here you would integrate with actual payment gateway
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Author Dashboard</h1>
          <p className="text-xl text-gray-600">Manage your publishing journey with Booklover Publishing House</p>
        </div>

        <Tabs defaultValue="upload-status" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="upload-status">Upload Status</TabsTrigger>
            <TabsTrigger value="pricing">Pricing & Packages</TabsTrigger>
            <TabsTrigger value="payment">Payment & Support</TabsTrigger>
          </TabsList>

          {/* Upload Status Tab */}
          <TabsContent value="upload-status" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-6 w-6 text-blue-600" />
                  File Upload Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Overall Progress</span>
                    <span className="text-sm text-gray-600">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-3" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Book Manuscript</p>
                      <p className="text-sm text-green-700">Successfully uploaded</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Cover Design</p>
                      <p className="text-sm text-green-700">Successfully uploaded</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                    <div>
                      <p className="font-medium text-yellow-900">Author Bio</p>
                      <p className="text-sm text-yellow-700">Processing...</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Additional Documents</p>
                      <p className="text-sm text-blue-700">Optional uploads</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-900 mb-2">Next Steps</h3>
                  <p className="text-gray-700 mb-4">Your files have been successfully uploaded! Choose a publishing package to proceed.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Choose Publishing Package
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pricing & Packages Tab */}
          <TabsContent value="pricing" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Publishing Package</h2>
              <p className="text-lg text-gray-600">Select the perfect package for your publishing journey</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {publishingPackages.map((pkg) => (
                <Card 
                  key={pkg.id} 
                  className={`shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    selectedPackage === pkg.id ? 'ring-2 ring-blue-500' : ''
                  } ${pkg.popular ? 'border-2 border-red-500' : ''} overflow-hidden`}
                >
                  {pkg.popular && (
                    <div className="bg-red-500 text-white text-center py-2 px-4">
                      <span className="font-bold text-sm">🌟 MOST POPULAR</span>
                    </div>
                  )}
                  
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center pb-6">
                    <CardTitle className="text-2xl font-bold mb-2">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold">{pkg.price}</div>
                      <div className="text-sm opacity-90">
                        <span className="line-through">{pkg.originalPrice}</span>
                        <span className="ml-2 bg-white/20 px-2 py-1 rounded">Save ₹{parseInt(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseInt(pkg.price.replace('₹', '').replace(',', ''))}</span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => handlePackageSelect(pkg.id)}
                      className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold ${
                        selectedPackage === pkg.id ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                      }`}
                    >
                      {selectedPackage === pkg.id ? 'Selected' : 'Select Package'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Payment & Support Tab */}
          <TabsContent value="payment" className="space-y-6">
            {selectedPackage && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-6 w-6 text-green-600" />
                    Payment Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-900 mb-2">Selected Package</h3>
                    <p className="text-green-800">
                      {publishingPackages.find(p => p.id === selectedPackage)?.name} - 
                      {publishingPackages.find(p => p.id === selectedPackage)?.price}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">Payment Methods</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {["Credit/Debit Card", "UPI Payment", "Net Banking", "Digital Wallet"].map((method, index) => (
                        <Card 
                          key={index}
                          className={`cursor-pointer hover:shadow-lg transition-all ${
                            selectedPaymentMethod === method ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                          }`}
                          onClick={() => setSelectedPaymentMethod(method)}
                        >
                          <CardContent className="p-4 flex items-center space-x-3">
                            <CreditCard className="h-6 w-6 text-blue-600" />
                            <span className="font-medium">{method}</span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {selectedPaymentMethod && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">Payment Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" placeholder="your@email.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                      <Button 
                        onClick={handlePayment}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold"
                      >
                        Proceed to Payment Gateway
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Support Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-6 w-6 text-blue-600" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">Our publishing experts are here to help you choose the right package.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-900">Call Us</p>
                      <p className="text-sm text-blue-700">+91 9142994429</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">Email Us</p>
                      <p className="text-sm text-green-700">bookloverpublishinghouse@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Publishing Timeline</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Payment Processing: 1-2 business days</li>
                    <li>• Editing & Design: 7-14 business days</li>
                    <li>• Printing & Publishing: 15-21 business days</li>
                    <li>• Marketing & Distribution: Ongoing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}