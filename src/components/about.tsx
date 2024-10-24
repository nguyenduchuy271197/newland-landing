import Container from "./container";
import { Button } from "./ui/button";

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
          <img
            src="/api/placeholder/800/600"
            alt="Company Building"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default About;
