"use client"

import { useState } from "react"
import { calculateMinimumPrice, validateBookPrice, getPricingInfo } from "./pricing-utils"

export default function PricingDemo() {
  const [pages, setPages] = useState("")
  const [price, setPrice] = useState("")

  const handlePagesChange = (value: string) => {
    setPages(value)
    if (value && price) {
      const validation = validateBookPrice(price, value)
      console.log("Validation result:", validation)
    }
  }

  const handlePriceChange = (value: string) => {
    setPrice(value)
    if (value && pages) {
      const validation = validateBookPrice(value, pages)
      console.log("Validation result:", validation)
    }
  }

  const pagesNum = parseInt(pages) || 0
  const pricingInfo = pagesNum > 0 ? getPricingInfo(pagesNum) : null

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-4">Pricing Logic Demo</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Pages:</label>
          <input
            type="number"
            value={pages}
            onChange={(e) => handlePagesChange(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter number of pages"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price (₹):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => handlePriceChange(e.target.value)}
            className="border rounded px-3 py-2 w-full"
            placeholder="Enter price"
          />
        </div>

        {pricingInfo && (
          <div className="bg-blue-50 p-3 rounded">
            <h4 className="font-medium text-blue-900">Pricing Information:</h4>
            <p className="text-sm text-blue-700">{pricingInfo.description}</p>
            <p className="text-sm font-medium text-blue-900">Formula: {pricingInfo.formula}</p>
            <p className="text-sm font-bold text-blue-900">Minimum Price: ₹{pricingInfo.minimumPrice}</p>
          </div>
        )}

        {pages && price && (
          <div className="bg-gray-50 p-3 rounded">
            <h4 className="font-medium text-gray-900">Validation Result:</h4>
            <pre className="text-xs text-gray-700">
              {JSON.stringify(validateBookPrice(price, pages), null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
} 