import Container from "./container";
import MultiItemCarousel from "./shared/multi-items-carousel";

const CertificateCarousel: React.FC = () => {
  const sampleItems = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className="bg-white rounded-lg shadow-md p-4 h-48 flex items-center justify-center"
    >
      <span className="text-2xl font-bold text-gray-700">Item {i + 1}</span>
    </div>
  ));

  return (
    <MultiItemCarousel items={sampleItems} itemsToShow={3} autoPlay={false} />
  );
};

export default function Certificates() {
  return (
    <Container className="py-12">
      <h2>Chứng nhận</h2>
      <CertificateCarousel />
    </Container>
  );
}
