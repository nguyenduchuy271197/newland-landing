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

interface Product {
  name: string;
  price: string;
  image: string;
}

interface ProductSectionProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  products: Product[];
}

const ProductSection = ({
  title,
  subtitle,
  icon: Icon,
  products,
}: ProductSectionProps) => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-green-200">
        <Container className="flex justify-between items-center py-6">
          <div className="flex items-center gap-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="h3">{title}</h3>
              <p className="display2">{subtitle}</p>
            </div>
          </div>
          <Icon className="w-8 h-8 text-green-600" />
        </Container>
      </div>

      <Container className="py-12">
        {/* Products Grid */}
        <div className="flex justify-center gap-8">
          {products.map((product, index) => (
            <div key={index} className="max-w-[200px] w-full">
              <div className="flex flex-col items-center h-full">
                {/* Product Card */}
                <div className="w-full mb-4 group grow">
                  {/* Image Container */}
                  <div className="aspect-square flex items-center justify-center mb-6 bg-gray-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="text-center space-y-2">
                    <h3 className="body1 text-balance">{product.name}</h3>
                    <p className="display1">{product.price}</p>
                  </div>
                </div>

                {/* Consultation Button */}
                <Button variant="outline" className="w-full">
                  Tư vấn ngay
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const Products = () => {
  const sections = [
    {
      title: "Sản phẩm làm sạch",
      subtitle: "Thông thoáng từ sâu bên trong",
      icon: Droplets,
      products: [
        {
          name: "Sữa rửa mặt Newland Pure Magic Foam Cleansing",
          price: "560,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Tẩy tế bào chết Newland Pure Magic Peeling Gel",
          price: "560,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Dầu tẩy trang Newland Pure Magic Cleansing Oil",
          price: "740,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Chăm sóc cơ bản",
      subtitle: "Chăm sóc toàn diện cho da hằng ngày",
      icon: Sparkles,
      products: [
        {
          name: "Gel cân bằng Newland Clean Fresh Balance Gel",
          price: "560,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Dầu tẩy trang Newland Clean",
          price: "560,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Nước hoa hồng Newland Fresh",
          price: "560,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Dưỡng trắng",
      subtitle: "Cung cấp dưỡng chất làm trắng da",
      icon: Sun,
      products: [
        {
          name: "Multi Vitamin For Brightening Rapid White Plus",
          price: "760,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Skin White Concentrated Anti Dark Spot",
          price: "790,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Anti Aging Ultra Strong Whitening Day Cream",
          price: "840,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Total Care Newland Pure Vita C Total Care Ampoule",
          price: "490,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Total Care Newland Pure Total Care Pack 12",
          price: "2,900,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Làm dịu và phục hồi da",
      subtitle: "Phục hồi làn da tổn thương",
      icon: Shield,
      products: [
        {
          name: "Serum làm dịu phục hồi da Care Plus Pure Repair",
          price: "760,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum phục hồi da sau mụn Magic Pure Repair",
          price: "850,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Gel làm dịu và phục hồi da Saemina Revitalizing",
          price: "850,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Kem phục hồi da Saemina Revitalizing Signal",
          price: "480,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Chống lão hóa và tăng đàn hồi da",
      subtitle: "Trẻ hóa làn da cho vẻ đẹp tươi trẻ",
      icon: Clock,
      products: [
        {
          name: "Serum chống lão hóa Magic Pro Retinol",
          price: "980,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Kem dưỡng phục hồi Revital",
          price: "960,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum tinh chất Blur",
          price: "1,200,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum tảo biển",
          price: "1,200,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum NPH Cream",
          price: "1,800,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Kem chống nắng",
      subtitle: "Bảo vệ da khỏi tác hại ánh nắng",
      icon: Sun,
      products: [
        {
          name: "Kem chống nắng dạng gel Newland Pure UV Protection",
          price: "750,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Kem chống nắng dạng sữa Pure UV Block",
          price: "840,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Tinh chất dưỡng da",
      subtitle: "Dưỡng chất đặc biệt cho làn da",
      icon: FlaskConical,
      products: [
        {
          name: "Serum Col-Pep Saemina Magic Pure",
          price: "850,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum Vita-C Total Care Newland Pure",
          price: "720,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum Magic Pure R3",
          price: "1,200,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "DERMA BIOME",
      subtitle: "Phục hồi giúp 3 lớp da khỏe mạnh",
      icon: Dna,
      products: [
        {
          name: "Toner trị mụn Newland Derma",
          price: "1,100,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Serum trị mụn Newland Derma",
          price: "1,800,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Kem trị mụn Newland Derma",
          price: "1,800,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
    {
      title: "Sản phẩm trang điểm",
      subtitle: "Phấn nước, cushion, phấn phủ kiềm dầu",
      icon: Star,
      products: [
        {
          name: "Phấn nước sáng hồng Natural BB",
          price: "750,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "CC Cushion trang điểm hoàn hảo",
          price: "620,000 VND",
          image: "/api/placeholder/200/300",
        },
        {
          name: "Phấn phủ kiềm dầu pressed powder BB",
          price: "590,000 VND",
          image: "/api/placeholder/200/300",
        },
      ],
    },
  ];
  return (
    <div className="space-y-4">
      {sections.map((section, index) => (
        <ProductSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Products;
