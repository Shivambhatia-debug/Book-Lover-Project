"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Lock, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Registration attempt:", formData)
    // Redirect to author dashboard after successful registration
    window.location.href = "/author-dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-cream-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-black-800">Join Book Lover!</h1>
          <p className="text-black-600 mt-2">Create your author account and start publishing</p>
        </div>

        <Card className="border-red-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
            <CardTitle className="text-center text-xl">Create Author Account</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-black-700 font-medium">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    className="pl-10 border-red-200 focus:border-red-500"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-black-700 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-10 border-red-200 focus:border-red-500"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="text-black-700 font-medium">
                  Phone Number
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    className="pl-10 border-red-200 focus:border-red-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="text-black-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pl-10 pr-10 border-red-200 focus:border-red-500"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-400 hover:text-black-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-black-700 font-medium">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    className="pl-10 border-red-200 focus:border-red-500"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                  className="border-red-300 mt-1"
                />
                <div className="text-sm">
                  <label htmlFor="terms" className="text-black-700 cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-red-600 hover:underline">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-red-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                disabled={!formData.agreeTerms}
              >
                Create Author Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-black-600">
                Already have an account?{" "}
                <Link href="/login" className="text-red-600 hover:underline font-semibold">
                  Sign In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
