import EmblaCarousel from "@/components/HeroCarousel";
import ProductPage from "./ProductPage";
import TestimonialPage from "./TestimonialPage";
import CampaignBanner from "@/components/Campaign";
import Blog from "@/components/Blog";

export default function HomePage() {
  return (
    <div>
      <EmblaCarousel />
      <ProductPage />
      <CampaignBanner />
      <TestimonialPage />
      <Blog />
    </div>
  )
}
