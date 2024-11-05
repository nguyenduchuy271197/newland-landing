import React from "react";
import {
  Leaf,
  Droplets,
  Sparkles,
  Sun,
  Shield,
  Clock,
  FlaskConical,
  Dna,
  Star,
  LucideIcon,
} from "lucide-react";
import Container from "./container";
import { Button } from "./ui/button";
import data from "@/data/db.json";
import MultiItemCarousel from "./shared/multi-items-carousel";
import Image from "next/image";

// Types
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  categoryId: string;
  isBestseller: boolean;
  unit?: string;
}

interface Section {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  categoryId: string;
  products: Product[];
}

// Utility for grouping products by category
const groupProductsByCategory = (products: Product[]) => {
  return products.reduce((acc, product) => {
    const category = product.categoryId;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, Product[]>);
};

// Price formatter
const formatPrice = (price: number, currency: string) => {
  return (
    new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price) + ` ${currency}`
  );
};

// Components
const ProductBadge = ({ isBestseller }: { isBestseller: boolean }) => {
  if (!isBestseller) return null;

  return (
    <span className="inline-block px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
      Bán chạy
    </span>
  );
};

const ProductImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative aspect-square flex items-center justify-center mb-6 bg-gray-100 overflow-hidden rounded">
    <Image
      src={src}
      alt={alt}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
      fill
    />
  </div>
);

const ProductInfo = ({ product }: { product: Product }) => (
  <div className="text-center space-y-2">
    <ProductBadge isBestseller={product.isBestseller} />
    <h3 className="text-sm font-medium leading-tight line-clamp-2 min-h-[40px]">
      {product.name}
    </h3>
    <p className="text-base font-semibold text-gray-900">
      {formatPrice(product.price, product.currency)}
    </p>
    {product.unit && <p className="text-sm text-gray-500">{product.unit}</p>}
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="max-w-[280px] w-full">
    <div className="flex flex-col items-center h-full">
      <div className="w-full mb-4 group grow">
        <ProductImage src={product.image} alt={product.name} />
        <ProductInfo product={product} />
      </div>
      <Button variant="outline" className="w-full">
        Tư vấn ngay
      </Button>
    </div>
  </div>
);

const SectionHeader = ({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}) => (
  <div className="bg-green-200">
    <Container className="flex justify-between items-center py-6">
      <div className="flex items-center gap-4">
        <Leaf className="w-8 h-8 text-green-600" />
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>
      </div>
      <Icon className="w-8 h-8 text-green-600" />
    </Container>
  </div>
);

export const ProductGrid = ({ products }: { products: Product[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

const ProductCarousel = ({ products }: { products: Product[] }) => {
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

const ProductSection = ({ section }: { section: Section }) => {
  const { title, subtitle, icon, products } = section;

  return (
    <div>
      <SectionHeader title={title} subtitle={subtitle} icon={icon} />
      <Container className="py-12">
        {/* <ProductGrid products={products} /> */}
        <ProductCarousel products={products} />
      </Container>
    </div>
  );
};

// Category Mapping
const CATEGORY_CONFIG: Record<
  string,
  { title: string; subtitle: string; icon: LucideIcon }
> = {
  cleansing: {
    title: "Sản phẩm làm sạch",
    subtitle: "Thông thoáng từ sâu bên trong",
    icon: Droplets,
  },
  "deep-cleansing": {
    title: "Tẩy tế bào chết",
    subtitle: "Làm sạch sâu, tái tạo da",
    icon: Sparkles,
  },
  skincare: {
    title: "Chăm sóc da cơ bản",
    subtitle: "Chăm sóc toàn diện hằng ngày",
    icon: Sun,
  },
  treatment: {
    title: "Điều trị & phục hồi",
    subtitle: "Phục hồi làn da tổn thương",
    icon: Shield,
  },
  "anti-aging": {
    title: "Chống lão hóa",
    subtitle: "Ngăn ngừa lão hóa sớm",
    icon: Clock,
  },
  brightening: {
    title: "Dưỡng trắng",
    subtitle: "Làm sáng và đều màu da",
    icon: Sun,
  },
  whitening: {
    title: "Làm trắng",
    subtitle: "Cung cấp dưỡng chất làm trắng da",
    icon: Star,
  },
  derma: {
    title: "DERMA BIOME",
    subtitle: "Phục hồi giúp 3 lớp da khỏe mạnh",
    icon: Dna,
  },
  moisturizing: {
    title: "Dưỡng ẩm",
    subtitle: "Cấp ẩm chuyên sâu",
    icon: FlaskConical,
  },
};

const Products = () => {
  // Group products by category
  const groupedProducts = groupProductsByCategory(data.products);

  // Create sections from grouped products
  const sections: Section[] = Object.entries(groupedProducts)
    .filter(([categoryId]) => CATEGORY_CONFIG[categoryId]) // Only include categories with config
    .map(([categoryId, categoryProducts]) => ({
      id: categoryId,
      ...CATEGORY_CONFIG[categoryId],
      categoryId,
      products: categoryProducts,
    }));

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <ProductSection key={section.id} section={section} />
      ))}
    </div>
  );
};

export default Products;
