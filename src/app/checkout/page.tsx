"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const CheckoutForm = () => {
  const {total, clearCart } = useCart()
  const router = useRouter()
  const stripe = useStripe()
  const elements = useElements()
  const [isProcessing, setIsProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  })

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [total])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements || !clientSecret) return

    setIsProcessing(true)

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) return

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
          address: {
            line1: formData.address,
            city: formData.city,
            country: formData.country,
            postal_code: formData.zipCode,
          },
        },
      },
    })

    if (error) {
      console.error(error)
      setIsProcessing(false)
      return
    }

    if (paymentIntent.status === "succeeded") {
      console.log("Payment successful")
      clearCart()
      router.push("/thank-you")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <Input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleInputChange}
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} required />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
          required
        />
      </div>
      <Input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleInputChange}
        required
      />
      <div className="border border-gray-300 p-3 rounded-md">
        <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
      </div>
      <Button
        type="submit"
        className="w-full bg-gold hover:bg-gold/90 text-black"
        disabled={isProcessing || !clientSecret}
      >
        {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
      </Button>
    </form>
  )
}

export default function CheckoutPage() {
  const { cart, total } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <div className="order-first md:order-last mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

