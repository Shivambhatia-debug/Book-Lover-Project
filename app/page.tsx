import WelcomePopup from "@/components/WelcomePopup"
import Hero from "@/components/Hero"
import PackagesPreview from "@/components/PackagesPreview"
import PublishWithUsSection from "@/components/PublishWithUsSection"
import BookFairsSection from "@/components/BookFairsSection"
import PreviousActivitiesSection from "@/components/PreviousActivitiesSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FeaturedBooks from "@/components/FeaturedBooks"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <WelcomePopup />
      <Hero />
      <PackagesPreview />
      <PublishWithUsSection />
      <BookFairsSection />
      <PreviousActivitiesSection />
      <TestimonialsSection />
      <FeaturedBooks />
      <ContactSection />
      <Footer />
    </main>
  )
}
