"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { ShoppingBagIcon } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import type React from "react" // Added import for React

export const CartIcon: React.FC = () => {
  const { cart } = useCart()

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon" className="relative">
        <ShoppingBagIcon className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </Button>
    </Link>
  )
}

