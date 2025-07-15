"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartDrawer from "@/components/CartDrawer"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/books" className="hover:text-red-400 transition-colors">
              Books
            </Link>
            <Link href="/authors" className="hover:text-red-400 transition-colors">
              Authors
            </Link>
            <Link href="/book-fairs" className="hover:text-red-400 transition-colors">
              Book Fairs
            </Link>
            <Link href="/packages" className="hover:text-red-400 transition-colors">
              Publishing Packages
            </Link>
            <Link href="/about" className="hover:text-red-400 transition-colors">
              About Us
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <CartDrawer />
            <Link href="/author-dashboard">
              <Button
                variant="outline"
                size="sm"
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black bg-transparent"
              >
                Author Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartDrawer />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black-700">
              <Link href="/" className="block px-3 py-2 hover:text-red-400 transition-colors">
                Home
              </Link>
              <Link href="/books" className="block px-3 py-2 hover:text-red-400 transition-colors">
                Books
              </Link>
              <Link href="/authors" className="block px-3 py-2 hover:text-red-400 transition-colors">
                Authors
              </Link>
              <Link href="/book-fairs" className="block px-3 py-2 hover:text-red-400 transition-colors">
                Book Fairs
              </Link>
              <Link href="/packages" className="block px-3 py-2 hover:text-red-400 transition-colors">
                Publishing Packages
              </Link>
              <Link href="/about" className="block px-3 py-2 hover:text-red-400 transition-colors">
                About Us
              </Link>
              <div className="border-t border-burgundy-700 pt-4 pb-3">
                <div className="flex flex-col space-y-3 px-3">
                  <Link href="/author-dashboard">
                    <Button variant="outline" size="sm" className="w-full border-red-400 text-red-400 bg-transparent">
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
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
