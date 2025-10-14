import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesGrid from "@/components/ServicesGrid";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 particle-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="glow-text">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive digital solutions that transform businesses
              </p>
            </div>
          </div>
        </section>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
