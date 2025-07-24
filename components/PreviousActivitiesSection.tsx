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
    <section className="py-10 md:py-16 bg-gradient-to-br from-cream-50 to-red-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black-800 mb-2 sm:mb-4">🏆 Our Journey So Far</h2>
          <p className="text-base sm:text-xl text-black-600 max-w-2xl sm:max-w-3xl mx-auto">
            Over the years, we've helped hundreds of authors turn their dreams into reality. Here's what we've achieved together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            return (
              <Card
                key={index}
                className="border-red-200 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-10 sm:w-16 h-10 sm:h-16 ${achievement.bgColor} rounded-full mb-4 sm:mb-6`}>
                    <IconComponent className={`h-6 sm:h-8 w-6 sm:w-8 ${achievement.color}`} />
                  </div>
                  <div className="text-xl sm:text-4xl font-bold text-black-800 mb-1 sm:mb-2">{achievement.number}</div>
                  <h3 className="text-base sm:text-xl font-semibold text-black-800 mb-1 sm:mb-3">{achievement.label}</h3>
                  <p className="text-black-600 text-xs sm:text-base leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Timeline Section */}
        <div className="mt-10 md:mt-16">
          <h3 className="text-lg sm:text-3xl font-bold text-black-800 text-center mb-6 sm:mb-12">Our Milestones</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200"></div>
            <div className="space-y-8 sm:space-y-12">
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
                <div key={index} className={`flex flex-col sm:flex-row items-center ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"}`}>
                    <Card className="border-red-200 bg-white/90">
                      <CardContent className="p-4 sm:p-6">
                        <div className="text-base sm:text-2xl font-bold text-red-600 mb-1 sm:mb-2">{milestone.year}</div>
                        <h4 className="text-sm sm:text-lg font-semibold text-black-800 mb-1 sm:mb-2">{milestone.title}</h4>
                        <p className="text-black-600 text-xs sm:text-base">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative z-10 my-2 sm:my-0">
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-red-600 rounded-full border-2 sm:border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-full sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
