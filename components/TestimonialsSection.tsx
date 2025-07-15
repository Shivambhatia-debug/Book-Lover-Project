"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const authorDashboardImage = "/images/author-alice-munro.jpeg"
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Romance Novelist",
    book: "Hearts Entwined",
    image: authorDashboardImage,
    rating: 5,
    text: "Book Lover made my publishing dream come true! Their professional team guided me through every step. My book is now selling in 15+ countries. Highly recommended!",
    sales: "2,500+ copies sold",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Business Author",
    book: "Digital Marketing Mastery",
    image: authorDashboardImage,
    rating: 5,
    text: "The marketing support was exceptional! They helped me reach my target audience effectively. My book became a bestseller within 3 months of publication.",
    sales: "5,000+ copies sold",
  },
  {
    id: 3,
    name: "Dr. Meera Patel",
    role: "Academic Writer",
    book: "Modern Psychology",
    image: authorDashboardImage,
    rating: 5,
    text: "Professional editing and beautiful cover design. The international distribution helped my academic work reach universities worldwide. Excellent service!",
    sales: "1,800+ copies sold",
  },
  {
    id: 4,
    name: "Arjun Singh",
    role: "Fiction Writer",
    book: "The Last Warrior",
    image: authorDashboardImage,
    rating: 5,
    text: "From manuscript to bestseller - Book Lover handled everything perfectly. The book fair participation boosted my sales tremendously. Thank you team!",
    sales: "3,200+ copies sold",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    role: "Children's Author",
    book: "Magic Adventures",
    image: authorDashboardImage,
    rating: 5,
    text: "Amazing experience! They understood my vision for children's literature and created a beautiful, colorful book that kids love. Sales exceeded expectations!",
    sales: "4,100+ copies sold",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-black-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">💬 What Our Authors Say</h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our successful authors have to say about their journey with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    width={120}
                    height={120}
                    className="rounded-full border-4 border-white/20"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-red-400 mb-4 mx-auto md:mx-0" />
                  <p className="text-lg text-white leading-relaxed mb-6">"{testimonials[currentIndex].text}"</p>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-red-200">{testimonials[currentIndex].role}</p>
                    <p className="text-red-300 font-semibold">Book: "{testimonials[currentIndex].book}"</p>
                    <p className="text-green-300 font-semibold mt-2">{testimonials[currentIndex].sales}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-red-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/20 bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mx-auto mb-4 border-2 border-white/20"
                />
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>
                <h5 className="font-semibold text-white">{testimonial.name}</h5>
                <p className="text-red-200 text-sm">{testimonial.role}</p>
                <p className="text-green-300 text-sm font-semibold mt-1">{testimonial.sales}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
