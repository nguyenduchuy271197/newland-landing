import Image from "next/image";
import Container from "./container";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="bg-product-bg relative">
      <Container>
        <div className="min-h-[160vw] sm:min-h-[550px] lg:min-h-[811px] pt-[54px] lg:pt-[75px]">
          <div className="max-w-[292px] lg:max-w-[583px] relative z-10">
            <h1 className="mb-1 lg:mb-6">
              Mỹ phẩm Hàn Quốc thuần{" "}
              <strong className="h1-alt">tự nhiên</strong>{" "}
            </h1>
            <p className="text-primary-700 lg:text-[32px] lg:leading-[1.375] max-w-[244px] lg:max-w-[475px] mb-7 lg:mb-10">
              Giải pháp thiên nhiên hoàn hảo cho mọi làn da
            </p>
            <Button size="lg">Nhận tư vấn miễn phi ngay</Button>
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1726814487/likelion/Newland%20All%20Nature/Landing%20page%20%28Sep2024%29/1.%20Hero/Hero_M_transparent_uhsax9.webp"
              alt=""
              width={300}
              height={500}
              className="absolute bottom-0 right-0 w-full sm:hidden"
            />
            <Image
              src="https://res.cloudinary.com/dk3pxmymh/image/upload/v1726814488/likelion/Newland%20All%20Nature/Landing%20page%20%28Sep2024%29/1.%20Hero/Hero_D_transparent_pfkhy9.webp"
              alt=""
              width={1500}
              height={1000}
              className="hidden sm:block absolute bottom-0 right-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
