import Image from "next/image";
import Container from "./container";
import Carousel from "./shared/carousel";
import { Button } from "./ui/button";

interface SlideImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

// Define the slide data separately for better maintainability
const SLIDE_IMAGES: SlideImage[] = [
  {
    src: "/image1.jpg",
    alt: "Slide 1",
    width: 800,
    height: 400,
  },
  {
    src: "/image2.jpg",
    alt: "Slide 2",
    width: 800,
    height: 400,
  },
  {
    src: "/image3.jpg",
    alt: "Slide 3",
    width: 800,
    height: 400,
  },
];

const AboutCarousel: React.FC = () => {
  // Create slides with proper image optimization and loading
  const slides = SLIDE_IMAGES.map((image, index) => (
    <div key={index} className="relative w-full h-[400px]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 800px"
        priority={index === 0} // Load first image immediately
        className="object-cover rounded-lg"
        loading={index === 0 ? "eager" : "lazy"}
      />
    </div>
  ));

  const carouselConfig: Partial<CarouselProps> = {
    autoPlay: true,
    interval: 5000,
    showDots: true,
    showArrows: false,
  };

  return <Carousel items={slides} {...carouselConfig} />;
};

const About = () => {
  const stats = [
    {
      number: "16",
      label: "Năm kinh nghiệm trong ngành mỹ phẩm",
    },
    {
      number: "9",
      label: "Thị trường trên thế giới",
    },
    {
      number: "60",
      label: "Dòng sản phẩm từ thiên nhiên",
    },
    {
      number: "1000+",
      label: "Nhân viên tại Hàn Quốc",
    },
  ];

  return (
    <Container className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded p-6 bg-gradient-to-b from-[#E4EED9] to-[#F6F6F6]"
              >
                <p className="highlight">{stat.number}</p>
                <p className="display1">{stat.label}</p>
              </div>
            ))}
          </div>
          {/* Description */}
          <div className="mt-6">
            <p className="body1">
              Newland All Nature là công ty mỹ phẩm đến từ Hàn Quốc với 16 năm
              phát triển, hiện diện tại các thị trường lớn như Hoa Kỳ, Úc, Trung
              Quốc,... và nay là Việt Nam.
            </p>
            <Button variant="link" className="mt-2">
              Xem thêm
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <AboutCarousel />
        </div>
      </div>
    </Container>
  );
};

export default About;
