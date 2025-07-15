"use client"

import type React from "react"
import { useState } from "react"
import { Send, Phone, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const benefits = [
  "Professional editing and proofreading",
  "Custom cover design with unlimited revisions",
  "ISBN registration and barcode",
  "Print and digital publishing",
  "Marketing and promotion support",
  "Author website creation",
  "Book fair participation",
  "Dedicated account manager",
]

export default function PublishWithUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Award className="h-4 w-4" />
            <span>India's Leading Publishing House</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black-800 mb-6">
            📚 Publish Your Book With <span className="text-red-600">Book Lover</span>
          </h2>
          <p className="text-xl text-black-600 max-w-3xl mx-auto leading-relaxed">
            Transform your manuscript into a bestseller! Join India's most trusted publishing house and reach readers
            worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-8">
            <Card className="border-red-200 shadow-xl bg-white">
              <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  Why Choose Book Lover?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-black-700 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-red-200 shadow-2xl bg-white">
            <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">Get Started Today!</CardTitle>
              <p className="text-center text-red-100">Fill in your details and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-black-700 font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      className="border-red-200 focus:border-red-500 bg-white"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-black-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 98765 43210"
                      className="border-red-200 focus:border-red-500 bg-white"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-black-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-red-200 focus:border-red-500 bg-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-black-700 font-medium">
                    Tell us about your book
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Brief description of your book, genre, current status..."
                    className="border-red-200 focus:border-red-500 bg-white h-24"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Publish Now
                  </Button>
                  <Button
                    type="button"
                    onClick={scrollToContact}
                    variant="outline"
                    className="flex-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white py-3 text-lg font-semibold bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
