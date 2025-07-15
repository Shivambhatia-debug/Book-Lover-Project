"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { BookOpen, Upload, DollarSign, BarChart3, Plus, Eye, Edit, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockBooks = [
  {
    id: 1,
    title: "The Silent Echo",
    status: "Published",
    sales: 127,
    revenue: 2540,
    cover: "/images/book-frankenstein.jpeg",
  },
  {
    id: 2,
    title: "Midnight Reflections",
    status: "Under Review",
    sales: 0,
    revenue: 0,
    cover: "/images/book-frankenstein.jpeg",
  },
]

export default function AuthorDashboard() {
  const [authorImage, setAuthorImage] = useState("/images/author-alice-munro.jpeg")
  const [bookForm, setBookForm] = useState({
    title: "",
    description: "",
    genre: "",
    price: "",
    cover: null as File | null,
  })
  const [profileForm, setProfileForm] = useState({
    name: "Alice Munro",
    bio: "Award-winning author with a passion for storytelling",
    email: "alice@example.com",
    phone: "+91 98765 43210",
  })

  const authorImageRef = useRef<HTMLInputElement>(null)
  const bookCoverRef = useRef<HTMLInputElement>(null)

  const handleAuthorImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setAuthorImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleBookCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setBookForm({ ...bookForm, cover: file })
    }
  }

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Book submitted:", bookForm)
    // Reset form
    setBookForm({
      title: "",
      description: "",
      genre: "",
      price: "",
      cover: null,
    })
  }

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Profile updated:", profileForm)
  }

  return (
    <div className="min-h-screen bg-cream-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <Image
                src={authorImage || "/placeholder.svg"}
                alt="Author Profile"
                width={120}
                height={120}
                className="rounded-full border-4 border-red-200 object-cover"
              />
              <button
                onClick={() => authorImageRef.current?.click()}
                className="absolute bottom-0 right-0 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
              >
                <Camera className="h-4 w-4" />
              </button>
              <input
                ref={authorImageRef}
                type="file"
                accept="image/*"
                onChange={handleAuthorImageUpload}
                className="hidden"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 w-full">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-black-800">Welcome back, {profileForm.name}!</h1>
                <p className="text-black-600 mt-2">{profileForm.bio}</p>
              </div>
              <Link href="/author/alice-munro">
                <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 mt-4 md:mt-0">
                  View Public Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-black-600">Total Books</p>
                  <p className="text-2xl font-bold text-black-800">{mockBooks.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-black-600">Total Sales</p>
                  <p className="text-2xl font-bold text-black-800">
                    {mockBooks.reduce((sum, book) => sum + book.sales, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                {/* Removed DollarSign icon for rupee-only look */}
                <div className="ml-4">
                  <p className="text-sm font-medium text-black-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-black-800">
                    ₹{mockBooks.reduce((sum, book) => sum + book.revenue, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Upload className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-black-600">Published</p>
                  <p className="text-2xl font-bold text-black-800">
                    {mockBooks.filter((book) => book.status === "Published").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="books" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-red-200">
            <TabsTrigger value="books" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              My Books
            </TabsTrigger>
            <TabsTrigger value="add-book" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Add New Book
            </TabsTrigger>
            <TabsTrigger value="profile" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Profile Settings
            </TabsTrigger>
          </TabsList>

          {/* My Books Tab */}
          <TabsContent value="books">
            <Card className="border-red-200 bg-white">
              <CardHeader>
                <CardTitle className="text-black-800">Your Published Books</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockBooks.map((book) => (
                    <Card key={book.id} className="border-red-100 bg-cream-50">
                      <CardContent className="p-4">
                        <Image
                          src={book.cover || "/placeholder.svg"}
                          alt={book.title}
                          width={150}
                          height={200}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-bold text-lg text-black-800 mb-2">{book.title}</h3>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-black-600">Status:</span>
                            <span
                              className={`font-semibold ${
                                book.status === "Published" ? "text-green-600" : "text-yellow-600"
                              }`}
                            >
                              {book.status}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black-600">Sales:</span>
                            <span className="font-semibold text-black-800">{book.sales}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-black-600">Revenue:</span>
                            <span className="font-semibold text-black-800">₹{book.revenue}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-red-300 text-red-600 bg-transparent"
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-red-300 text-red-600 bg-transparent"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add New Book Tab */}
          <TabsContent value="add-book">
            <Card className="border-red-200 bg-white">
              <CardHeader>
                <CardTitle className="text-black-800">Add New Book</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleBookSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title" className="text-black-700">
                          Book Title *
                        </Label>
                        <Input
                          id="title"
                          value={bookForm.title}
                          onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                          placeholder="Enter book title"
                          className="border-red-200"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="genre" className="text-black-700">
                          Genre *
                        </Label>
                        <Select
                          value={bookForm.genre}
                          onValueChange={(value) => setBookForm({ ...bookForm, genre: value })}
                        >
                          <SelectTrigger className="border-red-200">
                            <SelectValue placeholder="Select genre" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="fiction">Fiction</SelectItem>
                            <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                            <SelectItem value="mystery">Mystery</SelectItem>
                            <SelectItem value="romance">Romance</SelectItem>
                            <SelectItem value="sci-fi">Science Fiction</SelectItem>
                            <SelectItem value="fantasy">Fantasy</SelectItem>
                            <SelectItem value="biography">Biography</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="price" className="text-black-700">
                          Price (₹) *
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          value={bookForm.price}
                          onChange={(e) => setBookForm({ ...bookForm, price: e.target.value })}
                          placeholder="Enter price in rupees"
                          className="border-red-200"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="description" className="text-black-700">
                          Book Description *
                        </Label>
                        <Textarea
                          id="description"
                          value={bookForm.description}
                          onChange={(e) => setBookForm({ ...bookForm, description: e.target.value })}
                          placeholder="Enter book description"
                          className="border-red-200 h-32"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="cover" className="text-black-700">
                          Book Cover Image *
                        </Label>
                        <div className="mt-2">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => bookCoverRef.current?.click()}
                            className="w-full border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <Upload className="h-4 w-4 mr-2" />
                            {bookForm.cover ? bookForm.cover.name : "Upload Book Cover"}
                          </Button>
                          <input
                            ref={bookCoverRef}
                            type="file"
                            accept="image/*"
                            onChange={handleBookCoverUpload}
                            className="hidden"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Book for Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Settings Tab */}
          <TabsContent value="profile">
            <Card className="border-red-200 bg-white">
              <CardHeader>
                <CardTitle className="text-black-800">Profile Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-black-700">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        value={profileForm.name}
                        onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                        className="border-red-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black-700">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileForm.email}
                        onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                        className="border-red-200"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-black-700">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="border-red-200"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio" className="text-black-700">
                      Author Bio
                    </Label>
                    <Textarea
                      id="bio"
                      value={profileForm.bio}
                      onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                      placeholder="Tell readers about yourself..."
                      className="border-red-200 h-24"
                    />
                  </div>

                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white">
                    Update Profile
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
