import { ProductCard } from "@/components/ProductCard"
import type { Product } from "@/types"

// This would typically come from an API or database
const products: Product[] = [
  {
    id: "1",
    name: "Ethereal Essence",
    description: "A captivating blend of floral and woody notes",
    price: 199.99,
    image: "/assets/ethereal_essence_perfume.jpeg",
    category: "Floral",
  },
  {
    id: "2",
    name: "Midnight Mystery",
    description: "An intoxicating mix of spices and dark woods",
    price: 249.99,
    image: "/assets/midnight_mystery_perfume.jpeg",
    category: "Oriental",
  },
  {
    id: "3",
    name: "Ocean Breeze",
    description: "A fresh and invigorating aquatic scent",
    price: 179.99,
    image: "/assets/ocean_breeze_perfume.jpeg",
    category: "Fresh",
  },
  // Add more products as needed
]

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

