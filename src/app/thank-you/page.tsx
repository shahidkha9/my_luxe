import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-xl mb-8">We&apos;ve received your order and will process it shortly.</p>
      <Link href="/">
        <Button className="bg-gold hover:bg-gold/90 text-black">Continue Shopping</Button>
      </Link>
    </div>
  )
}

