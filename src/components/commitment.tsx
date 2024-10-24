import React from "react";
import { Shield, Truck, Package, RefreshCw } from "lucide-react";
import Container from "./container";

interface Commitment {
  icon: React.ElementType;
  title: string;
}

const NewlandCommitments: React.FC = () => {
  const commitments: Commitment[] = [
    {
      icon: Shield,
      title: "Sản phẩm chính hãng Newland nhập khẩu trực tiếp từ Hàn Quốc",
    },
    {
      icon: Truck,
      title: "Đóng gói và giao hàng nhanh chóng",
    },
    {
      icon: Package,
      title: "Cho phép kiểm tra hàng trước khi nhận",
    },
    {
      icon: RefreshCw,
      title: "Miễn phí đổi trả hàng",
    },
  ];

  return (
    <Container className="py-12">
      <h2>Cam kết từ Newland</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {commitments.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Circle */}
              <div className="mb-6 p-6 bg-[#E4EED9] rounded-full group-hover:bg-[#516B41] transition-colors duration-300">
                <Icon className="w-8 h-8 text-[#516B41] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <p className="display2 text-balance">{item.title}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default NewlandCommitments;
