import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import { CartProvider } from "@/context/CartContext"
import type React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "MY LUXE SCENT - Luxury Perfumes",
  description:
    "Discover your signature scent with our exquisite collection of luxury perfumes. Explore premium fragrances for discerning individuals.",
  keywords: "luxury perfumes, premium fragrances, signature scents, high-end perfumes, designer fragrances",
  authors: [{ name: "MY LUXE SCENT" }],
  category: "E-commerce",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://my-luxe.vercel.app//",
    title: "MY LUXE SCENT - Luxury Perfumes",
    description:
      "Discover your signature scent with our exquisite collection of luxury perfumes. Explore premium fragrances for discerning individuals.",
    siteName: "MY LUXE SCENT",
    images: [
      {
        url: "https://my-luxe.vercel.app//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MY LUXE SCENT - Luxury Perfumes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MY LUXE SCENT - Luxury Perfumes",
    description:
      "Discover your signature scent with our exquisite collection of luxury perfumes. Explore premium fragrances for discerning individuals.",
    images: ["https://my-luxe.vercel.app//twitter-image.jpg"],
    creator: "@myluxescent",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://my-luxe.vercel.app//",
    languages: {
      "en-US": "https://my-luxe.vercel.app//",
      "es-ES": "https://my-luxe.vercel.app//es",
    },
  },
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
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

