"use client"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { QuickViewModal } from "@/components/QuickViewModal"
import { useRouter } from "next/navigation"
import type { Product } from "@/types"

export default function Home() {
  const router = useRouter()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleShopNow = () => {
    router.push("/shop")
  }

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeQuickView = () => {
    setSelectedProduct(null)
  }

  // Sample products
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "Ethereal Essence",
      description: "A captivating blend of floral and woody notes",
      price: 199.99,
      image: "/assets/ethereal_essence_perfume.jpeg",
      category: "Floral",
    },
    {
      id: "2",
      name: "Midnight Mystery",
      description: "An intoxicating mix of spices and dark woods",
      price: 249.99,
      image: "/assets/midnight_mystery_perfume.jpeg",
      category: "Oriental",
    },
    {
      id: "3",
      name: "Ocean Breeze",
      description: "A fresh and invigorating aquatic scent",
      price: 179.99,
      image: "/assets/ocean_breeze_perfume.jpeg",
      category: "Fresh",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "/assets/luxury_perfume.jpeg",
    "/assets/ethereal_essence_perfume.jpeg",
    "/assets/midnight_mystery_perfume.jpeg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-deep-purple text-white text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Discover Your Signature Scent</h1>
            <p className="text-lg md:text-xl my-4">Indulge in luxury fragrances that define your essence</p>
            <Button className="bg-gold hover:bg-gold/90 text-black" onClick={handleShopNow}>Shop Now</Button>
          </div>
          <div className="md:w-1/2">
            <Image src={heroImages[currentImageIndex]} alt="Luxury Perfume" width={400} height={400} className="rounded-lg w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Exquisite Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="text-center">
                <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-auto" />
                <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Button className="mt-2 bg-gold text-black" onClick={() => handleQuickView(product)}>Quick View</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 bg-light-gold text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Stay Inspired</h2>
          <p className="text-lg my-4">Subscribe for exclusive offers and fragrance insights</p>
          <form className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Input type="email" placeholder="Enter your email" className="w-full md:w-80" />
            <Button className="bg-gold text-black w-full md:w-auto">Subscribe</Button>
          </form>
        </div>
      </section>

      {selectedProduct && <QuickViewModal product={selectedProduct} isOpen={!!selectedProduct} onClose={closeQuickView} />}
    </div>
  )
}
