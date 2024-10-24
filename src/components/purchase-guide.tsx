import React from "react";
import {
  MousePointerClick,
  MessagesSquare,
  FileCheck,
  Receipt,
} from "lucide-react";
import Container from "./container";

interface GuideStep {
  icon: React.ElementType;
  step: number;
  title: string;
  description: string;
}

const PurchaseGuide: React.FC = () => {
  const steps: GuideStep[] = [
    {
      icon: MousePointerClick,
      step: 1,
      title: "Chọn sản phẩm",
      description:
        "Khám phá các sản phẩm chăm sóc da tự nhiên Hàn Quốc của chúng tôi và chọn những món bạn muốn mua.",
    },
    {
      icon: MessagesSquare,
      step: 2,
      title: "Trò chuyện với Newland",
      description:
        "Kết nối với đội ngũ của Newland qua Zalo hoặc Messenger để giải đáp thắc mắc hoặc chốt đơn hàng.",
    },
    {
      icon: FileCheck,
      step: 3,
      title: "Xác nhận đơn hàng",
      description:
        "Kiểm tra và xác nhận thông tin đơn hàng với đội ngũ hỗ trợ.",
    },
    {
      icon: Receipt,
      step: 4,
      title: "Nhận hóa đơn",
      description: "Nhận hóa đơn mua hàng trực tiếp qua zalo.",
    },
  ];

  return (
    <Container className="py-12">
      <h2>Hướng dẫn mua hàng</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={index}
              className={`flex flex-col items-center text-center p-8 rounded-2xl
                ${index % 2 === 0 ? "bg-primary-100" : "bg-secondary-100"}`}
            >
              {/* Icon */}
              <div className="mb-8">
                <Icon className="w-12 h-12 text-[#516B41]" />
              </div>

              {/* Step Number */}
              <div className="bg-primary-700 text-white px-8 py-2 rounded-full mb-4 display1">
                Bước {step.step}
              </div>

              {/* Title */}
              <h4 className="mb-2.5">{step.title}</h4>

              {/* Description */}
              <p className="body1">{step.description}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default PurchaseGuide;
