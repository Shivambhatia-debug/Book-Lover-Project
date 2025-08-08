"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "@/components/CartDrawer"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#fff] text-black-800 shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-10 w-auto drop-shadow-sm" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              Home
            </Link>
            <Link href="/books" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              Books
            </Link>
            <Link href="/authors" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              Authors
            </Link>
            <Link href="/book-fairs" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              Book Fairs
            </Link>
            <Link href="/packages" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              Publishing Packages
            </Link>
            <Link href="/about" className="hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
              About Us
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer className="text-black-800" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartDrawer className="text-black-800" />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-black-800" suppressHydrationWarning>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fff] border-t border-gray-200 shadow-lg">
              <Link href="/" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                Home
              </Link>
              <Link href="/books" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                Books
              </Link>
              <Link href="/authors" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                Authors
              </Link>
              <Link href="/book-fairs" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                Book Fairs
              </Link>
              <Link href="/packages" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                Publishing Packages
              </Link>
              <Link href="/about" className="block px-3 py-2 hover:bg-gradient-to-r hover:from-red-600 hover:to-black-800 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
