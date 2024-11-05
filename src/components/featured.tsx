import React from "react";
import Container from "./container";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types";
import data from "@/data/db.json";
import MultiItemCarousel from "./shared/multi-items-carousel";
import Image from "next/image";

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-square mb-6 overflow-hidden rounded bg-gray-100">
    <Image
      src={src}
      alt={alt}
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      fill
    />
  </div>
);

const ProductInfo = ({
  name,
  price,
  currency,
  isBestseller,
}: {
  name: string;
  price: number;
  currency: string;
  isBestseller: boolean;
}) => (
  <div className="space-y-2">
    {isBestseller && (
      <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
        Bán chạy
      </span>
    )}
    <h3 className="text-base font-medium leading-tight line-clamp-2">{name}</h3>
    <p className="text-lg font-semibold text-gray-900">
      {formatPrice(price, currency)}
    </p>
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="group w-full">
    <div className="space-y-4">
      <ProductImage src={product.image} alt={product.name} />
      <ProductInfo
        name={product.name}
        price={product.price}
        currency={product.currency}
        isBestseller={product.isBestseller}
      />
    </div>
  </div>
);

const BestsellingProductCarousel = ({ products }: { products: Product[] }) => {
  const ingredientItems = products.map((product) => (
    <div key={product.id} className="rounded flex justify-center">
      <ProductCard key={product.id} product={product} />
    </div>
  ));
  return (
    <MultiItemCarousel
      items={ingredientItems}
      itemsToShow={3}
      autoPlay={false}
      showArrows={false}
    />
  );
};

const BestSellingProducts = () => {
  const bsProducts = data.products.filter((product) => product.isBestseller);
  return (
    <Container className="py-12">
      <h2>Sản phẩm bán chạy</h2>
      <div className="mt-10">
        <BestsellingProductCarousel products={bsProducts} />
      </div>
    </Container>
  );
};

export default BestSellingProducts;
