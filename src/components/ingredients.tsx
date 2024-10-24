import React from "react";
import Container from "./container";

const Ingredients = () => {
  const ingredients = [
    {
      title: "Rễ Hà thủ ô và Vỏ cây Morus",
      description:
        "Chiết xuất Hà thủ ô và vỏ dâu tằm giúp làm trắng da tự nhiên, mờ vết nhăn và kháng viêm, mang đến làn da mịn màng, khỏe mạnh.",
      image: "/api/placeholder/600/400",
    },
    {
      title: "Lá Bibichu",
      description:
        "Chiết xuất Bibichu hiệu quả trong việc làm giảm sắc tố melanin, mang lại làn da trắng sáng tự nhiên.",
      image: "/api/placeholder/600/400",
    },
    {
      title:
        "Phức hợp chống oxy hóa (Nấm Chaga, Hoa sen, Mạch môn, Đại Hoàng, Toàn Phúc Hoa)",
      description:
        "Hoạt chất chống oxy hóa Radi-Scavenger NL được cấp bằng sáng chế của Newland, bảo vệ tế bào bằng cách tăng cường hệ thống chống oxy hóa tự nhiên.",
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <Container>
      {/* Section Title */}
      <h2>Thành phần nổi bật</h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <div className="bg-black aspect-[411/547]">
              <img
                src={ingredient.image}
                alt={ingredient.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 h-32 bg-gradient-to-b from-[#182211] to-transparent">
              <div className="text-neutral-50 p-6 space-y-4">
                <h4 className="h4">{ingredient.title}</h4>
                <p className="display2">{ingredient.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Ingredients;
