import WelcomePopup from "@/components/WelcomePopup"
import Hero from "@/components/Hero"
import PublishWithUsSection from "@/components/PublishWithUsSection"
import BookFairsSection from "@/components/BookFairsSection"
import PreviousActivitiesSection from "@/components/PreviousActivitiesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FeaturedBooks from "@/components/FeaturedBooks"
import PackagesPreview from "@/components/PackagesPreview"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomePopup />
      <Hero />
      <PublishWithUsSection />
      <BookFairsSection />
      <PreviousActivitiesSection />
      <TestimonialsSection />
      <FeaturedBooks />
      <PackagesPreview />
      <ContactSection />
    </main>
  )
}
