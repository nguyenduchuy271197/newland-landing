import { Button } from "./ui/button";

const CTA: React.FC = () => {
  return (
    <div className="relative h-[600px] overflow-hidden bg-[#f5f8f5]">
      {/* Background Image - Mossy Landscape */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/api/placeholder/1920/600)",
        }}
      />

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto h-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
          {/* Image Container */}
          <div className="relative h-[500px] hidden md:block">
            <img
              src="/api/placeholder/600/800"
              alt="Beauty Model"
              className="absolute bottom-0 h-full w-auto object-cover object-top"
            />
          </div>

          {/* Text Content */}
          <div className="text-left space-y-6 md:max-w-xl">
            <h2>
              Tạm biệt làn da yếu ớt, thiếu căng bóng vì đã có{" "}
              <span className="text-primary-700">Newland All Nature</span>, cứu
              tinh cho làn da của bạn!
            </h2>

            <Button size="lg">Nhận tư vấn miễn phí ngay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
