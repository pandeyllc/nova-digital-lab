import { CheckCircle2 } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

const VisionSection = () => {
  const proofPoints = [
    "Reduced administrative workload by 70%",
    "$1M+ in new business generated via automations",
    "3× ROI for clients within 6 months",
  ];

  const industries = [
    "HVAC", "Salons", "Dentists", "Real Estate", "Restaurants", "Gyms",
    "Cleaning Services", "E-Commerce", "Retail", "Medical Clinics", 
    "Coaches", "Electricians", "Cafés", "Grocery Stores"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Do It — <span className="glow-text">Vision & Authority</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We fuse creativity and intelligence to engineer brands that scale effortlessly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                We believe in merging automation, design, and data-driven storytelling to help businesses 
                do more with less. Our mission: to craft digital ecosystems that don't just work — 
                they <span className="text-primary font-semibold">think, adapt, and perform</span>.
              </p>

              <div className="space-y-4">
                {proofPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glow-border rounded-lg overflow-hidden">
                <img 
                  src={aboutVisual} 
                  alt="AI Automation Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Trusted By Industries */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">Trusted By Industries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="glass-card px-4 py-2 rounded-full text-sm hover:glow-border transition-all cursor-default"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
