"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, CheckCircle, Star, Award, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

const benefits = [
  {
    icon: Star,
    title: "Free Book Listing",
    description: "List your book on our platform at absolutely no cost",
  },
  {
    icon: Users,
    title: "Reach Thousands of Readers",
    description: "Access our growing community of book lovers",
  },
  {
    icon: TrendingUp,
    title: "Boost Your Sales",
    description: "Increase visibility and sales through our marketing channels",
  },
  {
    icon: Award,
    title: "Professional Support",
    description: "Get expert guidance from our publishing team",
  },
]

export default function ListBookFreePage() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    price: "",
    isbn: "",
    pages: "",
    language: "",
    publishYear: "",
    keywords: "",
    authorBio: "",
    email: "",
    phone: "",
    agreeTerms: false,
  })
  const [bookCover, setBookCover] = useState<File | null>(null)
  const [manuscript, setManuscript] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const bookCoverRef = useRef<HTMLInputElement>(null)
  const manuscriptRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleFileUpload = (type: "cover" | "manuscript", file: File | null) => {
    if (type === "cover") {
      setBookCover(file)
    } else {
      setManuscript(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions")
      return
    }
    console.log("Form submitted:", { formData, bookCover, manuscript })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-50 py-16 flex items-center justify-center">
        <Card className="max-w-2xl mx-auto border-green-200 bg-white shadow-2xl">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-black-800 mb-4">🎉 Submission Successful!</h1>
            <p className="text-xl text-black-600 mb-8 leading-relaxed">
              Thank you for submitting your book! Our team will review your submission within 2-3 business days and get
              back to you with next steps.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-green-800 mb-2">What happens next?</h3>
              <ul className="text-left text-green-700 space-y-2">
                <li>• Our editorial team will review your manuscript</li>
                <li>• We'll contact you within 2-3 business days</li>
                <li>• If approved, your book will be listed on our platform</li>
                <li>• You'll receive a confirmation email with tracking details</li>
              </ul>
            </div>
            <Button
              onClick={() => (window.location.href = "/author-dashboard")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              Go to Author Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black-800 mb-6">
            📚 List Your Book for <span className="text-red-600">FREE!</span>
          </h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful authors on our platform. Get your book discovered by readers worldwide at
            absolutely no cost.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="border-red-200 text-center hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <IconComponent className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-black-800 mb-2">{benefit.title}</h3>
                  <p className="text-black-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Form Section */}
        <Card className="border-red-200 shadow-2xl bg-white">
          <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
            <CardTitle className="text-3xl text-center">Submit Your Book Details</CardTitle>
            <p className="text-center text-red-100 text-lg">Fill in the information below to get started</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Book Information */}
              <div>
                <h3 className="text-2xl font-bold text-black-800 mb-6 border-b border-red-200 pb-2">
                  📖 Book Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="title" className="text-black-700 font-medium">
                      Book Title *
                    </Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter your book title"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="author" className="text-black-700 font-medium">
                      Author Name *
                    </Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleInputChange("author", e.target.value)}
                      placeholder="Your full name"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre" className="text-black-700 font-medium">
                      Genre *
                    </Label>
                    <Select value={formData.genre} onValueChange={(value) => handleInputChange("genre", value)}>
                      <SelectTrigger className="border-red-200 focus:border-red-500">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="mystery">Mystery & Thriller</SelectItem>
                        <SelectItem value="romance">Romance</SelectItem>
                        <SelectItem value="sci-fi">Science Fiction</SelectItem>
                        <SelectItem value="fantasy">Fantasy</SelectItem>
                        <SelectItem value="biography">Biography</SelectItem>
                        <SelectItem value="self-help">Self-Help</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="history">History</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="price" className="text-black-700 font-medium">
                      Selling Price (₹) *
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      placeholder="Enter price in rupees"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="pages" className="text-black-700 font-medium">
                      Number of Pages
                    </Label>
                    <Input
                      id="pages"
                      type="number"
                      value={formData.pages}
                      onChange={(e) => handleInputChange("pages", e.target.value)}
                      placeholder="Total pages"
                      className="border-red-200 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="language" className="text-black-700 font-medium">
                      Language *
                    </Label>
                    <Select value={formData.language} onValueChange={(value) => handleInputChange("language", value)}>
                      <SelectTrigger className="border-red-200 focus:border-red-500">
                        <SelectValue placeholder="Select language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                        <SelectItem value="bengali">Bengali</SelectItem>
                        <SelectItem value="tamil">Tamil</SelectItem>
                        <SelectItem value="telugu">Telugu</SelectItem>
                        <SelectItem value="marathi">Marathi</SelectItem>
                        <SelectItem value="gujarati">Gujarati</SelectItem>
                        <SelectItem value="kannada">Kannada</SelectItem>
                        <SelectItem value="malayalam">Malayalam</SelectItem>
                        <SelectItem value="punjabi">Punjabi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="description" className="text-black-700 font-medium">
                    Book Description *
                  </Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Provide a compelling description of your book (minimum 100 words)"
                    className="border-red-200 focus:border-red-500 h-32"
                    required
                  />
                </div>

                <div className="mt-6">
                  <Label htmlFor="keywords" className="text-black-700 font-medium">
                    Keywords (for better discoverability)
                  </Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => handleInputChange("keywords", e.target.value)}
                    placeholder="Enter keywords separated by commas (e.g., love, adventure, mystery)"
                    className="border-red-200 focus:border-red-500"
                  />
                </div>
              </div>

              {/* File Uploads */}
              <div>
                <h3 className="text-2xl font-bold text-black-800 mb-6 border-b border-red-200 pb-2">📁 File Uploads</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-black-700 font-medium">Book Cover Image *</Label>
                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => bookCoverRef.current?.click()}
                        className="w-full border-red-300 text-red-600 hover:bg-red-50 h-24"
                      >
                        <Upload className="h-6 w-6 mr-2" />
                        <div className="text-center">
                          <div>{bookCover ? bookCover.name : "Upload Book Cover"}</div>
                          <div className="text-xs text-black-500 mt-1">JPG, PNG (Max 5MB)</div>
                        </div>
                      </Button>
                      <input
                        ref={bookCoverRef}
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload("cover", e.target.files?.[0] || null)}
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-black-700 font-medium">Manuscript/Sample Chapters</Label>
                    <div className="mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => manuscriptRef.current?.click()}
                        className="w-full border-red-300 text-red-600 hover:bg-red-50 h-24"
                      >
                        <Upload className="h-6 w-6 mr-2" />
                        <div className="text-center">
                          <div>{manuscript ? manuscript.name : "Upload Manuscript"}</div>
                          <div className="text-xs text-black-500 mt-1">PDF, DOC, DOCX (Max 10MB)</div>
                        </div>
                      </Button>
                      <input
                        ref={manuscriptRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileUpload("manuscript", e.target.files?.[0] || null)}
                        className="hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Author Information */}
              <div>
                <h3 className="text-2xl font-bold text-black-800 mb-6 border-b border-red-200 pb-2">
                  👤 Author Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-black-700 font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-black-700 font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className="border-red-200 focus:border-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="authorBio" className="text-black-700 font-medium">
                    Author Bio *
                  </Label>
                  <Textarea
                    id="authorBio"
                    value={formData.authorBio}
                    onChange={(e) => handleInputChange("authorBio", e.target.value)}
                    placeholder="Tell readers about yourself, your writing experience, and what inspired you to write this book"
                    className="border-red-200 focus:border-red-500 h-24"
                    required
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="terms" className="text-black-700 font-medium cursor-pointer">
                      I agree to the Terms and Conditions *
                    </Label>
                    <p className="text-sm text-black-600 mt-2">
                      By submitting this form, you agree to our terms of service and confirm that you own the rights to
                      the submitted content. We will review your submission and contact you within 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={!formData.agreeTerms}
                >
                  🚀 Submit Book for FREE Listing
                </Button>
                <p className="text-sm text-black-600 mt-4">Your book will be reviewed within 2-3 business days</p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
