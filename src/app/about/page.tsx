import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
        About LUXE SCENT
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-base md:text-lg mb-4">
            LUXE SCENT is a premier destination for luxury fragrances, offering a curated collection of the world&apos;s
            finest perfumes. Our passion for exquisite scents drives us to source unique and captivating fragrances that
            elevate your personal style.
          </p>
          <p className="text-base md:text-lg mb-4">
            Founded in 2023, we have quickly become a trusted name in the world of high-end perfumery. Our team of
            fragrance experts works tirelessly to bring you the most sought-after scents and hidden gems from renowned
            perfumers across the globe.
          </p>
          <p className="text-base md:text-lg">
            At LUXE SCENT, we believe that the right fragrance can transform your day, boost your confidence, and leave
            a lasting impression. We&apos;re committed to helping you discover your signature scent and providing an
            unparalleled luxury shopping experience.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/assets/luxe_scent_store.jpeg"
            alt="LUXE SCENT Store"
            width={600}
            height={400}
            className="rounded-lg shadow-lg w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
