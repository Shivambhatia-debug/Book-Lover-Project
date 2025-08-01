"use client"

import { useState } from "react"
import { Upload, FileText, Image, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PublishNowPage() {
  const [bookFile, setBookFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [selectedBookSize, setSelectedBookSize] = useState<string>("5x8")

  const handleBookFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setBookFile(e.target.files[0])
    }
  }

  const handleCoverFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0])
    }
  }

  const getCoverWidth = (size: string) => {
    switch (size) {
      case "5x8":
        return "11.25 inches"
      case "5.5x8.5":
        return "12.25 inches"
      case "6x9":
        return "13.5 inches"
      default:
        return "11.25 inches"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publish Now</h1>
          <p className="text-lg text-gray-600">Upload your book and cover files to get started with publishing</p>
        </div>

        <div className="grid gap-8">
          {/* Upload Section */}
          <Card className="shadow-lg border-amber-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Upload className="h-6 w-6 text-amber-600" />
                Upload Your Files
              </CardTitle>
              <CardDescription>
                Upload your book manuscript and cover design to begin the publishing process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Book Size Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Book Size *</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: "5x8", label: "5 x 8 inch", standard: true },
                    { value: "5.5x8.5", label: "5.5 x 8.5 inch", standard: true },
                    { value: "6x9", label: "6 x 9 inch", standard: true }
                  ].map((size) => (
                    <Button
                      key={size.value}
                      variant={selectedBookSize === size.value ? "default" : "outline"}
                      className={`h-auto p-4 flex flex-col items-center gap-2 ${
                        selectedBookSize === size.value 
                          ? "bg-amber-600 hover:bg-amber-700" 
                          : "hover:bg-amber-50"
                      }`}
                      onClick={() => setSelectedBookSize(size.value)}
                    >
                      <span className="font-medium">{size.label}</span>
                      {size.standard && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Standard
                        </span>
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Book File Upload */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Upload Book File *
                </Label>
                <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleBookFileChange}
                    className="hidden"
                    id="book-file"
                  />
                  <Label htmlFor="book-file" className="cursor-pointer">
                    <div className="space-y-2">
                      <Upload className="h-8 w-8 mx-auto text-amber-600" />
                      <div>
                        <p className="text-sm font-medium">
                          {bookFile ? bookFile.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, or DOCX files accepted
                        </p>
                      </div>
                    </div>
                  </Label>
                </div>
              </div>

              {/* Cover File Upload */}
              <div className="space-y-3">
                <Label className="text-base font-medium flex items-center gap-2">
                  <Image className="h-4 w-4" />
                  Upload Cover File *
                </Label>
                <div className="border-2 border-dashed border-amber-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors">
                  <Input
                    type="file"
                    accept=".pdf"
                    onChange={handleCoverFileChange}
                    className="hidden"
                    id="cover-file"
                  />
                  <Label htmlFor="cover-file" className="cursor-pointer">
                    <div className="space-y-2">
                      <Image className="h-8 w-8 mx-auto text-amber-600" />
                      <div>
                        <p className="text-sm font-medium">
                          {coverFile ? coverFile.name : "Click to upload or drag and drop"}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF format only - Must match selected book size
                        </p>
                      </div>
                    </div>
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Instructions Box */}
          <Card className="shadow-lg border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-blue-900">
                <Info className="h-5 w-5" />
                📘 Important Instructions
              </CardTitle>
              <CardDescription className="text-blue-700">
                Please review these requirements carefully before uploading your files
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-800">
              {/* Accepted Book Sizes */}
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">📏 Accepted Book Sizes:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><span className="font-medium">5 x 8 inch</span> - Standard size</li>
                  <li><span className="font-medium">5.5 x 8.5 inch</span> - Standard size</li>
                  <li><span className="font-medium">6 x 9 inch</span> - Standard size</li>
                </ul>
              </div>

              {/* Exceptional Sizes */}
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600" />
                  ⚠️ Exceptional Sizes:
                </h4>
                <p className="ml-6 text-sm">
                  <span className="font-medium">Allowed, but must mention:</span> 
                  <span className="text-orange-700 font-semibold"> *Additional cost will apply*</span>
                </p>
              </div>

              {/* Cover Upload Requirements */}
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-900">🖼️ Cover Upload Requirements:</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cover must match selected book size exactly</li>
                  <li>For <span className="font-medium">5 x 8 inch</span>:
                    <ul className="list-disc list-inside ml-4 mt-1">
                      <li>Full cover width: <span className="font-bold">{getCoverWidth(selectedBookSize)}</span></li>
                      <li>Must include spine</li>
                      <li>PDF format only</li>
                    </ul>
                  </li>
                  <li>Other sizes follow the same logic - width calculated accordingly</li>
                  <li>High resolution (300 DPI minimum)</li>
                  <li>CMYK color mode for print accuracy</li>
                </ul>
              </div>

              {/* Additional Notes */}
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">📝 Additional Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>All files should be properly formatted and print-ready</li>
                  <li>Book files should be single-spaced with proper margins</li>
                  <li>Cover files must include front, back, and spine in one PDF</li>
                  <li>Contact support if you need help with file preparation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Publishing Charges Section */}
          <Card className="shadow-lg border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl text-orange-900">
                <AlertTriangle className="h-5 w-5" />
                💰 Publishing Charges
              </CardTitle>
              <CardDescription className="text-orange-700">
                Important: Publishing charges must be settled before your book can be published
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-800">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  📋 Publishing Requirements
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-orange-900">Option 1: Pay Publishing Charge</p>
                      <p className="text-sm text-orange-700">Pay <span className="font-bold text-orange-900">₹3000</span> as publishing charge</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-medium text-orange-900">Option 2: Dispatch Books to Warehouse</p>
                      <p className="text-sm text-orange-700">Dispatch physical books to our <span className="font-bold text-orange-900">XYZ warehouse</span> before upload</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-100 p-4 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-900 mb-2">⚠️ Important Notes:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>You must choose <span className="font-semibold">either</span> payment or book dispatch</li>
                  <li>Publishing charge is non-refundable once processing begins</li>
                  <li>For warehouse dispatch, books must be in good condition</li>
                  <li>Contact our support team for warehouse address and dispatch instructions</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
              disabled={!bookFile || !coverFile}
            >
              Submit for Publishing Review
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 