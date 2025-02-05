"use client"

import type React from "react"
import Image from "next/image"
import { useCart } from "@/context/CartContext"
import type { Product } from "@/types"
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  product: Product
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button className="bg-gold hover:bg-gold/90 text-black" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </div>
  )
}

