"use client"

import { Phone, Mail, MessageCircle, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  return (
    <section id="contact-section" className="py-16 bg-gradient-to-br from-red-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black-800 mb-4">📞 Get In Touch With Us</h2>
          <p className="text-xl text-black-600 max-w-2xl mx-auto">
            Ready to start your publishing journey? We're here to help you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-800">WhatsApp</h3>
                    <p className="text-black-600">Quick responses, instant support</p>
                    <Button
                      className="mt-2 bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-800">Phone</h3>
                    <p className="text-black-600">Speak directly with our experts</p>
                    <p className="text-xl font-bold text-blue-600 mt-1">+91 98765 43210</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-800">Email</h3>
                    <p className="text-black-600">Detailed queries and proposals</p>
                    <p className="text-lg font-semibold text-red-600 mt-1">info@booklover.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black-800">Instagram</h3>
                    <p className="text-black-600">Follow our latest updates</p>
                    <Button
                      variant="outline"
                      className="mt-2 border-purple-300 text-purple-600 hover:bg-purple-50 bg-transparent"
                      onClick={() => window.open("https://instagram.com/booklover", "_blank")}
                    >
                      Follow @booklover
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-black-800">
                  <MapPin className="h-5 w-5 mr-2 text-red-600" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black-800">Head Office</h4>
                    <p className="text-black-600">
                      123 Publishing Street,
                      <br />
                      Literary District,
                      <br />
                      Mumbai, Maharashtra 400001
                      <br />
                      India
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 text-black-600">
                    <Clock className="h-4 w-4 text-red-600" />
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-black-800 text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Publish?</h3>
                <p className="mb-6 text-red-100">
                  Join 300+ successful authors who chose Book Lover for their publishing journey.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-white text-red-600 hover:bg-red-50">
                    <Send className="h-5 w-5 mr-2" />
                    Start Publishing Now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
