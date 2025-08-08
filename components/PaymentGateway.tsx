"use client"

import { useState } from "react"
import { CreditCard, Smartphone, Building, Wallet, Shield, CheckCircle, X, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface PaymentPackage {
  id: string
  name: string
  price: string
  originalPrice?: string
  description: string
  features: string[]
}

interface PaymentGatewayProps {
  isOpen: boolean
  onClose: () => void
  selectedPackage: PaymentPackage | null
  onSuccess?: () => void
}

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    icon: Smartphone,
    description: "Pay using PhonePe, Google Pay, Paytm, etc.",
    color: "text-green-600"
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    icon: CreditCard,
    description: "Visa, Mastercard, Rupay",
    color: "text-blue-600"
  },
  {
    id: "netbanking",
    name: "Net Banking",
    icon: Building,
    description: "All major banks supported",
    color: "text-purple-600"
  },
  {
    id: "wallet",
    name: "Digital Wallet",
    icon: Wallet,
    description: "Paytm, Mobikwik, Amazon Pay",
    color: "text-orange-600"
  }
]

const banks = [
  "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
  "Kotak Mahindra Bank", "Punjab National Bank", "Bank of Baroda", 
  "Canara Bank", "Union Bank", "IDFC First Bank"
]

export default function PaymentGateway({ isOpen, onClose, selectedPackage, onSuccess }: PaymentGatewayProps) {
  const [selectedMethod, setSelectedMethod] = useState("")
  const [step, setStep] = useState<"method" | "details" | "processing" | "success">("method")
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    upiId: "",
    selectedBank: ""
  })

  if (!isOpen || !selectedPackage) return null

  const calculateDiscount = () => {
    if (!selectedPackage.originalPrice) return 0
    const original = parseInt(selectedPackage.originalPrice.replace(/[₹,]/g, ''))
    const current = parseInt(selectedPackage.price.replace(/[₹,]/g, ''))
    return original - current
  }

  const handleMethodSelect = (methodId: string) => {
    setSelectedMethod(methodId)
    setStep("details")
  }

  const handleBackToMethods = () => {
    setStep("method")
    setSelectedMethod("")
  }

  const handlePayment = async () => {
    // Basic validation
    if (!formData.email || !formData.phone) {
      toast.error("Please fill in email and phone number")
      return
    }

    if (selectedMethod === "card") {
      if (!formData.cardNumber || !formData.expiryDate || !formData.cvv || !formData.cardName) {
        toast.error("Please fill in all card details")
        return
      }
    } else if (selectedMethod === "upi") {
      if (!formData.upiId) {
        toast.error("Please enter your UPI ID")
        return
      }
    } else if (selectedMethod === "netbanking") {
      if (!formData.selectedBank) {
        toast.error("Please select your bank")
        return
      }
    }

    setStep("processing")
    
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000))
      setStep("success")
      toast.success("Payment successful!")
      
      setTimeout(() => {
        onSuccess?.()
        onClose()
      }, 2000)
    } catch (error) {
      toast.error("Payment failed. Please try again.")
      setStep("details")
    }
  }

  const renderMethodSelection = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Payment Method</h3>
        <p className="text-sm text-gray-600">Choose your preferred payment option</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon
          return (
            <Card
              key={method.id}
              className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-blue-300"
              onClick={() => handleMethodSelect(method.id)}
            >
              <CardContent className="p-4 text-center">
                <IconComponent className={`h-8 w-8 ${method.color} mx-auto mb-2`} />
                <h4 className="font-medium text-gray-900 mb-1">{method.name}</h4>
                <p className="text-xs text-gray-600">{method.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )

  const renderPaymentDetails = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={handleBackToMethods} className="p-0">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to payment methods
        </Button>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="font-semibold text-gray-900">Contact Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
            />
          </div>
        </div>
      </div>

      {/* Payment Method Specific Fields */}
      {selectedMethod === "card" && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Card Details</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number *</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                maxLength={19}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiryDate">Expiry Date *</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                  maxLength={5}
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                  maxLength={4}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="cardName">Cardholder Name *</Label>
              <Input
                id="cardName"
                placeholder="Name as on card"
                value={formData.cardName}
                onChange={(e) => setFormData({...formData, cardName: e.target.value})}
              />
            </div>
          </div>
        </div>
      )}

      {selectedMethod === "upi" && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">UPI Details</h3>
          <div>
            <Label htmlFor="upiId">UPI ID *</Label>
            <Input
              id="upiId"
              placeholder="yourname@paytm"
              value={formData.upiId}
              onChange={(e) => setFormData({...formData, upiId: e.target.value})}
            />
          </div>
        </div>
      )}

      {selectedMethod === "netbanking" && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Net Banking Details</h3>
          <div>
            <Label htmlFor="bank">Select Your Bank *</Label>
            <Select value={formData.selectedBank} onValueChange={(value) => setFormData({...formData, selectedBank: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Choose your bank" />
              </SelectTrigger>
              <SelectContent>
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {selectedMethod === "wallet" && (
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Digital Wallet</h3>
          <p className="text-sm text-gray-600">You will be redirected to your wallet app to complete the payment.</p>
        </div>
      )}

      <Button onClick={handlePayment} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold" suppressHydrationWarning>
        Pay {selectedPackage.price}
      </Button>
    </div>
  )

  const renderProcessing = () => (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Payment...</h3>
      <p className="text-sm text-gray-600">Please do not refresh or close this window</p>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center py-8">
      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Payment Successful!</h3>
      <p className="text-sm text-gray-600 mb-4">Thank you for choosing Book Lover Publishing House</p>
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-sm text-green-800">
          You will receive a confirmation email shortly with your package details.
        </p>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">Complete Your Purchase</CardTitle>
              <p className="text-sm text-gray-600 mt-1">{selectedPackage.name}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} suppressHydrationWarning>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {/* Package Summary */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-gray-900">{selectedPackage.name}</h4>
                <p className="text-sm text-gray-600">{selectedPackage.description}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{selectedPackage.price}</div>
                {selectedPackage.originalPrice && (
                  <div className="text-sm text-gray-500">
                    <span className="line-through">{selectedPackage.originalPrice}</span>
                    <span className="ml-2 text-green-600 font-medium">Save ₹{calculateDiscount()}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center text-sm text-gray-600 mt-2">
              <Shield className="h-4 w-4 mr-1" />
              Secure payment powered by Razorpay
            </div>
          </div>

          {/* Payment Steps */}
          {step === "method" && renderMethodSelection()}
          {step === "details" && renderPaymentDetails()}
          {step === "processing" && renderProcessing()}
          {step === "success" && renderSuccess()}
        </CardContent>
      </Card>
    </div>
  )
}