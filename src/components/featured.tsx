import React from "react";
import Container from "./container";

const BestSellingProducts = () => {
  const products = [
    {
      name: "Tinh chất Newland Vita-C Total Care Ampule",
      image: "/api/placeholder/600/400",
      price: "499.000 VND",
    },
    {
      name: "Tinh chất dưỡng trắng Newland R3 Serum",
      image: "/api/placeholder/600/400",
      price: "1.400.000 VND",
    },
    {
      name: "Gel làm dịu chống oxy hóa Saemina Revitalizing Signal Velvet Anti-Oxidation Gel",
      image: "/api/placeholder/600/400",
      price: "420.000 VND",
    },
  ];

  return (
    <Container className="py-12">
      <h2>Sản phẩm bán chạy</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {products.map((product, index) => (
          <div key={index} className="group">
            {/* Product Card */}
            <div>
              {/* Image Container */}
              <div className="relative aspect-square mb-6 overflow-hidden rounded bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex justify-between">
                <h3 className="display2 max-w-[207px]">{product.name}</h3>
                <p className="display1">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default BestSellingProducts;
