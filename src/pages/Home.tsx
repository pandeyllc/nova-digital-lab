import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <VisionSection />
        <ServicesGrid />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
