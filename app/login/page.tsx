"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, User, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login attempt:", formData)
    // Redirect to author dashboard after successful login
    window.location.href = "/author-dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-cream-100 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <img src="/images/booklover-logo-full.png" alt="Booklover Publishing House" className="h-20 w-auto" />
          </div>
          <h1 className="text-3xl font-bold text-black-800">Welcome Back!</h1>
          <p className="text-black-600 mt-2">Sign in to your Author Dashboard</p>
        </div>

        <Card className="border-red-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
            <CardTitle className="text-center text-xl">Author Login</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-black-700 font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
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
                <Label htmlFor="password" className="text-black-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-black-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                  />
                  <Label htmlFor="remember" className="text-sm text-black-600">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-red-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
              >
                Sign In to Dashboard
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-black-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-red-600 hover:underline font-semibold">
                  Create Account
                </Link>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-red-100">
              <p className="text-center text-sm text-black-500 mb-4">Or continue as guest</p>
              <Link href="/list-book-free">
                <Button variant="outline" className="w-full border-red-300 text-red-600 hover:bg-red-50 bg-transparent">
                  List Your Book for FREE
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
