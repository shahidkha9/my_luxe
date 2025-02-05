import type React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types"
import { useCart } from "@/context/CartContext"

interface QuickViewModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-auto rounded-lg"
          />
          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
        </div>
        <Button onClick={handleAddToCart} className="w-full bg-gold hover:bg-gold/90 text-black">
          Add to Cart
        </Button>
      </DialogContent>
    </Dialog>
  )
}

