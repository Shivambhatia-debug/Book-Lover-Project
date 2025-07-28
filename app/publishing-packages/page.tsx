"use client"
import Link from "next/link"

const packages = [
  {
    name: "Help Booklover",
    price: "₹5,000 + GST",
    description: "This package is for additional help authors are looking for.",
    freeBenefit: null,
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "❌" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "If required" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "❌" },
      { label: "Paperback Printing", value: "❌" },
      { label: "Distribution", value: "❌" },
      { label: "Promotion & Marketing", value: "❌" },
      { label: "Sales Report & Royalty", value: "❌" },
    ],
  },
  {
    name: "Welcome Booklover",
    price: "₹8,999 + GST",
    freeBenefit: null,
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design, ✔ Formatting: Regular, ✔ Illustration: Extra Charge, ✔ Editing: Basic" },
      { label: "Paperback Printing", value: "❌" },
      { label: "Distribution", value: "Indian Market Online Distribution ✅, Booklover Online Distribution ✅ (Website & Social Media), Bookstore Display → Paid by author, Airport Display → Paid by author, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release (Included), ✔ Digital Posters, ❌ Video Trailers, ❌ Video Trailer Promotion, ❌ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: Add-On, Book Launch: Add-On, Visiting Card: Add-On" },
      { label: "Sales & Royalty", value: "✔ Author Report On Demand, 💰 Royalty 90%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Booklover Elite",
    price: "₹14,999 + GST",
    freeBenefit: "Free Benefit Worth: ₹5,900/-",
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Premium), ✔ Formatting: Regular+, ✔ Illustration: Extra Charge, ✔ Editing: Basic+" },
      { label: "Paperback Printing", value: "5 Author Copies, Regular Print Quality, Good Lamination, A1 Grade Paper, Paperback format, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution (Website & Social Media), ✔ Bookstore Display → Paid by author, ✔ Airport Display → Paid by author, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ❌ Video Trailers, ❌ Video Trailer Promotion, ❌ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: Add-On, Book Launch: Add-On, Visiting Card: Add-On" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 90%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Booklover Big Book Box",
    price: "₹20,999 + GST",
    freeBenefit: "Free Benefit Worth: ₹9,440/-",
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Premium), ✔ Formatting: Best, ✔ Illustration: Extra Charge, ✔ Editing: Essential" },
      { label: "Paperback Printing", value: "20 Author Copies, Regular/Custom Print Quality, Best Lamination, Best Quality Paper, Paperback, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution, ✔ Bookstore Display → Paid by author, ✔ Airport Display → Paid by author, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ✔ Video Trailers, ❌ Video Trailer Promotion, ❌ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: Add-On, Book Launch: Add-On, Visiting Card: Add-On" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 100%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Elite++",
    price: "₹33,999 + GST",
    freeBenefit: "Free Benefit Worth: ₹12,980/-",
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Extreme), ✔ Formatting: Extreme, ✔ Illustration: Extra Charge, ✔ Editing: Proofreading + Editing" },
      { label: "Paperback Printing", value: "30 Author Copies, Custom Print Quality, Best Quality Lamination, Best Quality Paper, Paperback, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution, ✔ Bookstore Display → Extra Charge, ✔ Airport Display → Extra Charge, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ✔ Video Trailers, ✔ Video Trailer Promotion, ❌ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: Add-On, Book Launch: Add-On, Visiting Card: Add-On" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 100%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Booklover Silver",
    price: "₹51,999 + GST",
    freeBenefit: "Free Benefit Worth: ₹17,700/-",
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Extreme), ✔ Formatting: Extreme+, ✔ Illustration: Extra Charge, ✔ Editing: Proofreading + Editing" },
      { label: "Paperback Printing", value: "40 Author Copies, Custom Print Quality, Premium Lamination, A1 Grade on Demand Paper, Paperback/Hardbound, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution, ✔ Bookstore Display → Extra Charge, ✔ Airport Display → Extra Charge, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ✔ Video Trailers, ✔ Video Trailer Promotion, ✔ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: Add-On, Book Launch: YES, Visiting Card: YES, Instagram Ad Campaign: Included (2 months), Facebook Page Setup: Included, Facebook Ad Campaign: Included, Goodreads Page Setup: Add-On" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 100%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Booklover Display Gold",
    price: "₹91,000 + GST",
    freeBenefit: "Free Benefit Worth: ₹29,500/-",
    image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Extreme), ✔ Formatting: Premium, ✔ Illustration: 3 Phase/Layer, ✔ Editing: 3 Phase/Layer" },
      { label: "Paperback Printing", value: "60 Author Copies, Custom Premium Print Quality, A1 Grade on Demand Paper, Paperback/Hardbound, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution, ✔ Bookstore Display → Extra Charge, ✔ Airport Display → Extra Charge, ❌ Global Distribution" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ✔ Video Trailers, ✔ Video Trailer Promotion, ✔ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: YES (4 weeks), Book Launch: YES, Visiting Card: YES (100), Instagram Ad Campaign: Included (3 months), Facebook Page Setup: Included, Facebook Ad Campaign: Included, Goodreads Page Setup: Add-On, Event Notifications: YES" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 100%, 📖 Amazon POD" },
    ],
  },
  {
    name: "Booklover Platinum",
    price: "₹1,51,000 + GST",
    freeBenefit: "Free Benefit Worth: ₹29,500/-",
      image: "/images/ee1.jpg",
    features: [
      { label: "Copyright / ISBN / Barcode", value: "✅" },
      { label: "Publishing Consultant", value: "✅" },
      { label: "Publishing Manager", value: "✅" },
      { label: "Marketing Assistance", value: "✅" },
      { label: "Add-on Services", value: "✔ Book Cover Design (Extreme), ✔ Formatting: Superior, ✔ Illustration: 5 Phase/Layer, ✔ Editing: 5 Phase/Layer" },
      { label: "Paperback Printing", value: "75/100 Author Copies, Custom Premium Print Quality, A1 Grade on Demand Paper, Paperback/Hardbound, Amazon Kindle ebook" },
      { label: "Distribution", value: "✔ Indian Market Online Distribution, ✔ Booklover Online Distribution, ✔ Bookstore Display → INCLUDED, ✔ Airport Display → INCLUDED, ✔ Global Distribution (144+ Countries)" },
      { label: "Promotion & Marketing", value: "✔ Online Release, ✔ Digital Posters, ✔ Video Trailers, ✔ Video Trailer Promotion, ✔ Amazon Author Page" },
      { label: "Extra Promotions", value: "Amazon Sponsored: YES (8 weeks), Book Launch: YES, Visiting Card: YES (200), Instagram Ad Campaign: Included (3 months), Facebook Page Setup: Included, Facebook Ad Campaign: Included, Goodreads Page Setup: YES, Event Notifications: YES" },
      { label: "Sales & Royalty", value: "✔ Author Report, 💰 Royalty 100%, 📖 Amazon POD" },
    ],
  },
]

export default function PublishingPackagesPage() {
  return (
    <div className="min-h-screen bg-cream-50 py-8 px-2 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link href="/book-fairs" className="inline-block mb-4 text-burgundy-700 hover:underline font-semibold">← Back to Book Fairs</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-center text-burgundy-900 mb-2">BOOKLOVER PUBLISHING HOUSE</h1>
          <h2 className="text-xl md:text-2xl font-bold text-center text-burgundy-700 mb-6">BOOKLOVER PUBLISHING PACKAGE</h2>
        </div>
        <div className="flex flex-col gap-12">
          {packages.map((pkg) => (
            <div key={pkg.name} className="flex flex-col md:flex-row items-stretch md:items-start gap-6 w-full">
              {/* Image left, details right */}
              <div className="md:w-64 w-full flex-shrink-0 flex justify-center items-start">
                <img src={pkg.image} alt={pkg.name} className="object-contain w-full h-48 md:h-64 rounded-lg bg-gray-100" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-burgundy-900 mb-1">{pkg.name}</h3>
                  <div className="text-lg font-semibold text-burgundy-700 mb-1">{pkg.price}</div>
                  {pkg.freeBenefit && <div className="text-sm font-semibold text-amber-600 mb-2">{pkg.freeBenefit}</div>}
                  {pkg.description && <p className="text-burgundy-700 mb-2">{pkg.description}</p>}
                  <ul className="space-y-2 text-sm mb-4">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <span className="font-semibold text-burgundy-800 w-44 flex-shrink-0">{f.label}:</span>
                        <span className="ml-2 text-burgundy-700">{f.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full md:w-auto px-8 py-2 rounded bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg transition self-start mt-2">Pay Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 