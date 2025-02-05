"use client"
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CartIcon } from "@/components/CartIcon";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          LUXE SCENT
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
          <Link href="/about" className="hover:text-gold transition-colors">About</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </nav>
        
        {/* Search and Cart - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Input type="search" placeholder="Search..." className="w-40 md:w-auto border-gold focus:ring-gold" />
          <CartIcon />
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Navigation Menu */}
      <nav className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden p-6`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">LUXE SCENT</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Search & Cart - Mobile */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          <Input type="search" placeholder="Search..." className="w-full border-gold focus:ring-gold px-4 py-2" />
          {/* Cart Icon Click پر Hamburger Close ہوگا */}
          <div onClick={() => setIsOpen(false)} className="cursor-pointer">
            <CartIcon />
          </div>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col items-center space-y-6 mt-8 text-lg">
          <li><Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link href="/collections" onClick={() => setIsOpen(false)}>Collections</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
