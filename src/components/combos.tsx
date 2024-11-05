import React from "react";
import Container from "./container";
import Image from "next/image";

interface ProductCollection {
  image: string;
  alt: string;
}

const ProductSets: React.FC = () => {
  const collections: ProductCollection[] = [
    {
      image: "/api/placeholder/800/500",
      alt: "EX Collection with Pink Rose - Newland Corrective Set",
    },
    {
      image: "/api/placeholder/800/500",
      alt: "Airfrais Collection with Purple Flowers",
    },
    {
      image: "/api/placeholder/800/500",
      alt: "Pure Magic Collection with Aloe",
    },
    {
      image: "/api/placeholder/800/500",
      alt: "Daily Care Collection with Green Plants",
    },
  ];

  return (
    <Container className="py-12">
      <h2>Bộ sản phẩm</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="group relative aspect-[3/2] rounded overflow-hidden bg-green-200"
          >
            {/* Main Image */}
            <Image
              src={collection.image}
              alt={collection.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSets;
