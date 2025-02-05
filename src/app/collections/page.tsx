import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  // Collections Data with Images
  const collections = [
    {
      name: "Summer Breeze",
      image: "/assets/summer_breeze_perfume_without_any_girl.jpeg",
      link: "/collections/summer-breeze",
    },
    {
      name: "Midnight Mystery",
      image: "/assets/midnight_mystery_perfume (1).jpeg",
      link: "/collections/midnight-mystery",
    },
    {
      name: "Floral Fantasy",
      image: "/assets/floral_fantasy_perfume.jpeg",
      link: "/collections/floral-fantasy",
    },
    {
      name: "Citrus Splash",
      image: "/assets/citrus_splash_perfume.jpeg",
      link: "/collections/citrus-splash",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <div key={collection.name} className="relative group">
            <Image
              src={collection.image}
              alt={collection.name}
              width={600}
              height={400}
              className="w-full h-60 sm:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Overlay Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  {collection.name}
                </h2>
                <Link href={collection.link}>
                  <Button className="bg-gold hover:bg-gold/90 text-black px-4 py-2">
                    Explore
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
