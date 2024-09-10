import About from "@/components/about";
import Certificates from "@/components/certificates";
import Combos from "@/components/combos";
import Commitment from "@/components/commitment";
import CTA from "@/components/cta";
import Featured from "@/components/featured";
import Hero from "@/components/hero";
import Ingredients from "@/components/ingredients";
import Products from "@/components/products";
import PurchaseGuide from "@/components/purchase-guide";
import Reels from "@/components/reels";
import Reviews from "@/components/reviews";
import Solutions from "@/components/solutions";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Ingredients />
      <Solutions />
      <Featured />
      <Products />
      <Combos />
      <Certificates />
      <Reviews />
      <Reels />
      <PurchaseGuide />
      <Commitment />
      <CTA />
    </div>
  );
}
