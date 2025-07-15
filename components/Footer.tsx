import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-burgundy-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-12 w-auto" />
            </div>
            <p className="text-cream-200 mb-4">
              Empowering authors to share their stories with the world. Your publishing partner for success.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-cream-300 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-cream-300 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-cream-300 hover:text-amber-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-cream-300 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="/authors" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Our Authors
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Publishing Packages
                </Link>
              </li>
              <li>
                <Link href="/book-fairs" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Book Fairs
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream-200 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/editing" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Professional Editing
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Cover Design
                </Link>
              </li>
              <li>
                <Link href="/services/marketing" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Book Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/distribution" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Distribution
                </Link>
              </li>
              <li>
                <Link href="/author-dashboard" className="text-cream-200 hover:text-amber-400 transition-colors">
                  Author Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-cream-200">info@booklover.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-cream-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-amber-400 mr-3" />
                <span className="text-cream-200">123 Literary Lane, Book City, BC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-burgundy-700 mt-8 pt-8 text-center">
          <p className="text-cream-300">
            © 2024 Book Lover. All rights reserved. |
            <Link href="/privacy" className="hover:text-amber-400 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-amber-400 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
