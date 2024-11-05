import Container from "./container";
import MultiItemCarousel from "./shared/multi-items-carousel";

const ReviewCarousel: React.FC = () => {
  // Sample items (replace with your content)
  const sampleItems = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className="bg-white rounded-lg shadow-md p-4 h-48 flex items-center justify-center"
    >
      <span className="text-2xl font-bold text-gray-700">Item {i + 1}</span>
    </div>
  ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <MultiItemCarousel items={sampleItems} itemsToShow={3} autoPlay={false} />
    </div>
  );
};

export default function Reviews() {
  return (
    <Container className="py-12">
      <h2>Bộ sản phẩm</h2>
      <ReviewCarousel />
    </Container>
  );
}
