"use client"

import { useState, useEffect } from "react"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 1 second when page loads
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <Card className="max-w-xs sm:max-w-md w-full border-red-500 border-2 shadow-2xl animate-in zoom-in duration-300">
        <CardContent className="p-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-black-800 text-white p-4 sm:p-6 rounded-t-lg relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-red-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-2 sm:mb-4">
                <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-12 sm:h-16 w-auto" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">🎉 Welcome!</h2>
              <div className="flex items-center justify-center space-x-1 mb-1 sm:mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6 text-center bg-white">
            <h3 className="text-lg sm:text-xl font-bold text-black-800 mb-2 sm:mb-3">
              Welcome to India's One of the Best Publishing House
            </h3>
            <p className="text-black-600 mb-2 sm:mb-4 leading-relaxed text-sm sm:text-base">
              🌟 <strong>Welcome to Book Lover Family!</strong> 🌟
            </p>
            <p className="text-black-600 mb-4 sm:mb-6 text-xs sm:text-sm">
              Join thousands of successful authors who have published their dreams with us. Your story deserves to be told!
            </p>

            <div className="space-y-2 sm:space-y-3">
              <Button
                onClick={() => setIsOpen(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 sm:py-3"
              >
                🚀 Start Your Publishing Journey
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
