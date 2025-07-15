import { BookOpen, Users, Award, TrendingUp, Globe, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    icon: BookOpen,
    number: "500+",
    label: "Books Published",
    description: "Successfully published across various genres",
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    icon: Users,
    number: "300+",
    label: "Happy Authors",
    description: "Authors who achieved their publishing dreams",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    icon: Award,
    number: "50+",
    label: "Awards Won",
    description: "Literary awards and recognitions received",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    icon: Globe,
    number: "25+",
    label: "Countries Reached",
    description: "International distribution network",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    icon: TrendingUp,
    number: "₹2 Cr+",
    label: "Revenue Generated",
    description: "Total revenue for our authors",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    icon: Star,
    number: "4.9/5",
    label: "Average Rating",
    description: "Customer satisfaction rating",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
]

export default function PreviousActivitiesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black-800 mb-4">🏆 Our Journey So Far</h2>
          <p className="text-xl text-black-600 max-w-3xl mx-auto">
            Over the years, we've helped hundreds of authors turn their dreams into reality. Here's what we've achieved
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 ${achievement.bgColor} rounded-full mb-6`}
                  >
                    <IconComponent className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-black-800 mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-semibold text-black-800 mb-3">{achievement.label}</h3>
                  <p className="text-black-600 leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-black-800 text-center mb-12">Our Milestones</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            <div className="space-y-12">
              {[
                {
                  year: "2020",
                  title: "Founded Book Lover",
                  description: "Started with a vision to help authors publish their dreams",
                },
                {
                  year: "2021",
                  title: "First 100 Books",
                  description: "Successfully published our first 100 books across various genres",
                },
                {
                  year: "2022",
                  title: "International Expansion",
                  description: "Expanded to international markets and book fairs",
                },
                {
                  year: "2023",
                  title: "Digital Revolution",
                  description: "Launched comprehensive digital publishing solutions",
                },
                {
                  year: "2024",
                  title: "500+ Books Milestone",
                  description: "Crossed 500 published books with 300+ happy authors",
                },
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="border-red-200 bg-white/90">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-red-600 mb-2">{milestone.year}</div>
                        <h4 className="text-lg font-semibold text-black-800 mb-2">{milestone.title}</h4>
                        <p className="text-black-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
