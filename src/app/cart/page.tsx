"use client"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const router = useRouter()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link href="/shop">
            <Button className="bg-gold hover:bg-gold/90 text-black">Continue Shopping</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center md:space-x-4 border-b border-gray-200 py-4"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md mb-4 md:mb-0"
                />
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                    -
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="w-16 text-center"
                    min="1"
                  />
                  <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </div>
                <Button variant="ghost" onClick={() => removeFromCart(item.id)} className="mt-4 md:mt-0">
                  Remove
                </Button>
              </div>
            ))}
          </div>
          <div className="md:col-span-1">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-lg mt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button
                className="w-full mt-6 bg-gold hover:bg-gold/90 text-black"
                onClick={() => router.push("/checkout")}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

