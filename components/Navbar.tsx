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
            <Link href="/" className="hover:text-red-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/books" className="hover:text-red-600 transition-colors font-medium">
              Books
            </Link>
            <Link href="/authors" className="hover:text-red-600 transition-colors font-medium">
              Authors
            </Link>
            <Link href="/book-fairs" className="hover:text-red-600 transition-colors font-medium">
              Book Fairs
            </Link>
            <Link href="/packages" className="hover:text-red-600 transition-colors font-medium">
              Publishing Packages
            </Link>
            <Link href="/about" className="hover:text-red-600 transition-colors font-medium">
              About Us
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer className="text-black-800" />
            <Link href="/author-dashboard">
              <Button
                variant="outline"
                size="sm"
                className="border-red-500 text-red-600 hover:bg-red-600 hover:text-white bg-white font-semibold"
              >
                Author Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartDrawer className="text-black-800" />
            <Link href="/login">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white font-semibold">
                <User className="h-4 w-4 mr-1" />
                Login
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-black-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#fff] border-t border-gray-200 shadow-lg">
              <Link href="/" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/books" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                Books
              </Link>
              <Link href="/authors" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                Authors
              </Link>
              <Link href="/book-fairs" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                Book Fairs
              </Link>
              <Link href="/packages" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                Publishing Packages
              </Link>
              <Link href="/about" className="block px-3 py-2 hover:text-red-600 transition-colors font-medium">
                About Us
              </Link>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex flex-col space-y-3 px-3">
                  <Link href="/author-dashboard">
                    <Button variant="outline" size="sm" className="w-full border-red-500 text-red-600 bg-white font-semibold hover:bg-red-600 hover:text-white">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
