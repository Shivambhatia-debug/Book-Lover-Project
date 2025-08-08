"use client"

import { useState } from "react"
import { X, FileText, Image, AlertCircle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface UploadInstructionModalProps {
  isOpen: boolean
  onClose: () => void
  onContinue: () => void
  fileType: "cover" | "manuscript"
}

const acceptedFormats = {
  cover: {
    formats: ["JPG", "PNG", "JPEG"],
    maxSize: "5MB",
    dimensions: "Minimum 800x1200px, recommended 1600x2400px",
    requirements: [
      "High resolution image (300 DPI minimum)",
      "Clear, professional design",
      "No watermarks or text overlays",
      "Proper aspect ratio (2:3 recommended)",
      "File size under 5MB"
    ]
  },
  manuscript: {
    formats: ["PDF", "DOC", "DOCX"],
    maxSize: "10MB",
    dimensions: "Standard A4 or Letter size",
    requirements: [
      "Complete manuscript or sample chapters",
      "Proper formatting with chapters and sections",
      "No password protection",
      "Clear, readable text",
      "File size under 10MB"
    ]
  }
}

const freePublishingConditions = [
  "Original content owned by the author",
  "No copyright violations",
  "Appropriate content for general audience",
  "Complete manuscript or substantial sample",
  "Professional quality writing",
  "Author agrees to platform terms and conditions"
]

export default function UploadInstructionModal({ isOpen, onClose, onContinue, fileType }: UploadInstructionModalProps) {
  if (!isOpen) return null

  const formatInfo = acceptedFormats[fileType]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto border-red-200 shadow-2xl bg-white">
        <CardHeader className="bg-gradient-to-r from-red-600 to-black-800 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl sm:text-2xl flex items-center">
              <FileText className="h-6 w-6 mr-3" />
              Upload Instructions
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-red-100 text-sm">
            {fileType === "cover" ? "Book Cover Image Requirements" : "Manuscript Upload Requirements"}
          </p>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          {/* Accepted Formats */}
          <div>
            <h3 className="text-lg font-bold text-black-800 mb-3 flex items-center">
              <Image className="h-5 w-5 mr-2 text-red-600" />
              Accepted Formats
            </h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {formatInfo.formats.map((format) => (
                <Badge key={format} variant="secondary" className="bg-green-100 text-green-800">
                  {format}
                </Badge>
              ))}
            </div>
            <p className="text-sm text-black-600">
              <strong>Max Size:</strong> {formatInfo.maxSize} | <strong>Dimensions:</strong> {formatInfo.dimensions}
            </p>
          </div>

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-bold text-black-800 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
              Requirements
            </h3>
            <ul className="space-y-2">
              {formatInfo.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-black-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Publishing Conditions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-black-800 mb-3 flex items-center">
              <Info className="h-5 w-5 mr-2 text-blue-600" />
              Free Publishing Conditions
            </h3>
            <p className="text-sm text-black-600 mb-3">
              To qualify for <strong>FREE publishing</strong>, your submission must meet these conditions:
            </p>
            <ul className="space-y-2">
              {freePublishingConditions.map((condition, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-black-700">{condition}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Notes */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="text-lg font-bold text-black-800 mb-2 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-yellow-600" />
              Important Notes
            </h3>
            <ul className="text-sm text-black-700 space-y-1">
              <li>• Free publishing is only available for new authors</li>
              <li>• Your book will be reviewed within 2-3 business days</li>
              <li>• We reserve the right to reject submissions that don't meet our standards</li>
              <li>• Free publishing includes basic listing and distribution</li>
              <li>• Premium services (editing, cover design, marketing) are available at additional cost</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={onContinue}
                              className="flex-1 bg-gradient-to-r from-red-600 to-black-800 hover:from-red-700 hover:to-black-900 text-white"
            >
              Got It, Continue Upload
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
            >
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 