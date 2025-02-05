import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/ui/icons";

export default function Footer() {
  return (
    <footer className="bg-deep-purple text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">LUXE SCENT</h3>
            <p className="text-gray-300">Elevating your olfactory experience since 2023</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/shop" className="hover:text-gold transition-colors">Shop All</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/collections" className="hover:text-gold transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="hover:text-gold transition-colors">Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-gold transition-colors">Returns</Link></li>
              <li><Link href="/gift-cards" className="hover:text-gold transition-colors">Gift Cards</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center sm:justify-start space-x-4">
              <Link href="#" className="hover:text-gold transition-colors"><FacebookIcon className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-gold transition-colors"><InstagramIcon className="h-6 w-6" /></Link>
              <Link href="#" className="hover:text-gold transition-colors"><TwitterIcon className="h-6 w-6" /></Link>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXE SCENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
