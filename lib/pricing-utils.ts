/**
 * Pricing utilities for book pricing based on page count
 */

export interface PricingValidation {
  isValid: boolean
  message: string
  suggestedPrice: number
  minimumPrice: number
}

/**
 * Calculate minimum price based on page count
 * @param pages - Number of pages in the book
 * @returns Minimum price in rupees
 */
export const calculateMinimumPrice = (pages: number): number => {
  if (pages <= 100) {
    return 200
  } else {
    // Sliding scale for books > 100 pages
    // Base price: ₹200 for first 100 pages
    // Additional ₹2 per page for pages > 100
    const additionalPages = pages - 100
    const additionalCost = additionalPages * 2
    return 200 + additionalCost
  }
}

/**
 * Validate price based on page count
 * @param price - Book price in rupees
 * @param pages - Number of pages in the book
 * @returns PricingValidation object with validation results
 */
export const validateBookPrice = (price: string, pages: string): PricingValidation => {
  const priceNum = parseFloat(price)
  const pagesNum = parseInt(pages)

  if (!price || !pages) {
    return {
      isValid: true,
      message: "",
      suggestedPrice: 0,
      minimumPrice: 0,
    }
  }

  if (isNaN(priceNum) || isNaN(pagesNum)) {
    return {
      isValid: false,
      message: "Please enter valid numbers for price and pages",
      suggestedPrice: 0,
      minimumPrice: 0,
    }
  }

  const minimumPrice = calculateMinimumPrice(pagesNum)
  const suggestedPrice = minimumPrice

  if (priceNum < minimumPrice) {
    return {
      isValid: false,
      message: `Minimum price for ${pagesNum} pages is ₹${minimumPrice}`,
      suggestedPrice,
      minimumPrice,
    }
  } else {
    return {
      isValid: true,
      message: `Price is valid for ${pagesNum} pages`,
      suggestedPrice,
      minimumPrice,
    }
  }
}

/**
 * Get pricing information for display
 * @param pages - Number of pages
 * @returns Object with pricing details
 */
export const getPricingInfo = (pages: number) => {
  const minimumPrice = calculateMinimumPrice(pages)
  
  if (pages <= 100) {
    return {
      minimumPrice,
      description: `Books with ${pages} pages or less have a minimum price of ₹200`,
      formula: "Fixed minimum: ₹200"
    }
  } else {
    const additionalPages = pages - 100
    const additionalCost = additionalPages * 2
    return {
      minimumPrice,
      description: `Books with ${pages} pages: ₹200 base + ₹2 × ${additionalPages} additional pages = ₹${minimumPrice}`,
      formula: `₹200 + (₹2 × ${additionalPages} pages) = ₹${minimumPrice}`
    }
  }
} 