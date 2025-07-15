import { BookOpen, Users, Award, Globe, Zap, Heart, Target, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: BookOpen,
    title: "Book Publishing",
    description: "Complete publishing solutions from manuscript to market-ready books",
    features: ["Professional editing", "Cover design", "ISBN registration", "Print & digital formats"],
  },
  {
    icon: Zap,
    title: "Book Promotion",
    description: "Strategic marketing campaigns to boost your book's visibility",
    features: ["Social media marketing", "PR campaigns", "Book trailers", "Author branding"],
  },
  {
    icon: Users,
    title: "Book Launches",
    description: "Memorable book launch events to create buzz around your publication",
    features: ["Event planning", "Media coverage", "Author readings", "Networking opportunities"],
  },
  {
    icon: Globe,
    title: "Bookstore Distribution",
    description: "Get your books into physical and online bookstores nationwide",
    features: ["Retail partnerships", "Online marketplaces", "Library distribution", "International reach"],
  },
  {
    icon: Award,
    title: "Book Fair Participation",
    description: "Showcase your books at prestigious national and international book fairs",
    features: ["Exhibition setup", "Author representation", "Networking events", "Media interviews"],
  },
  {
    icon: Heart,
    title: "Author Support",
    description: "Comprehensive support throughout your publishing journey",
    features: ["Dedicated account manager", "24/7 support", "Author community", "Ongoing guidance"],
  },
]

const achievements = [
  { number: "500+", label: "Books Published", icon: BookOpen },
  { number: "300+", label: "Happy Authors", icon: Users },
  { number: "50+", label: "Awards Won", icon: Award },
  { number: "25+", label: "Countries Reached", icon: Globe },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-black-800 mb-6">
            About <span className="text-red-600">Book Lover</span> Publishing
          </h1>
          <p className="text-xl text-black-600 max-w-3xl mx-auto leading-relaxed">
            India's premier publishing house dedicated to transforming manuscripts into bestsellers. We've been helping
            authors achieve their publishing dreams since 2020.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-black-800 flex items-center">
                <Target className="h-6 w-6 mr-3 text-red-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-black-600 leading-relaxed text-lg">
                To democratize publishing by providing world-class publishing services to authors across India and
                beyond. We believe every story deserves to be told and every author deserves professional support to
                reach their audience.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-red-50">
              <CardTitle className="text-2xl text-black-800 flex items-center">
                <Heart className="h-6 w-6 mr-3 text-red-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-black-600 leading-relaxed text-lg">
                To become the most trusted publishing partner for authors worldwide, fostering a vibrant literary
                ecosystem where creativity thrives and stories connect hearts across cultures and continents.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black-800 mb-4">What Services Do We Offer?</h2>
            <p className="text-xl text-black-600 max-w-2xl mx-auto">
              Comprehensive publishing solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <CardTitle className="text-xl text-black-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-black-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-black-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-black-600">Numbers that speak for our success</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <Card key={index} className="border-red-200 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="text-4xl font-bold text-black-800 mb-2">{achievement.number}</div>
                    <div className="text-black-600 font-medium">{achievement.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black-800 mb-4">Our Publishing Process</h2>
            <p className="text-xl text-black-600">From manuscript to bestseller in simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Manuscript Review",
                description: "We review your manuscript and provide detailed feedback",
              },
              {
                step: "02",
                title: "Professional Editing",
                description: "Our expert editors polish your content to perfection",
              },
              {
                step: "03",
                title: "Design & Production",
                description: "Beautiful cover design and professional formatting",
              },
              {
                step: "04",
                title: "Launch & Promotion",
                description: "Strategic marketing to reach your target audience",
              },
            ].map((process, index) => (
              <Card key={index} className="border-red-200 text-center relative">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-red-100 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold text-black-800 mb-3">{process.title}</h3>
                  <p className="text-black-600 leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-black-800 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Publishing Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of successful authors who chose Book Lover for their publishing dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
