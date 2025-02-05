import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { CartProvider } from "@/context/CartContext"
import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "MY LUXE SCENT - Luxury Perfumes",
  description: "Discover your signature scent with our exquisite collection of luxury perfumes.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider><Header />{children}<Footer /></CartProvider>
      </body>
    </html>
  )
}


