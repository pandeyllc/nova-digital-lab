import { CheckCircle2 } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Do It — <span className="glow-text">Vision & Authority</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We fuse creativity and intelligence to engineer brands that scale effortlessly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-muted-foreground">
                We believe in merging automation, design, and data-driven storytelling to help businesses 
                do more with less. Our mission: to craft digital ecosystems that don't just work — 
                they <span className="text-primary font-semibold">think, adapt, and perform</span>.
              </p>

              <div className="space-y-4">
                {proofPoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glow-border rounded-lg overflow-hidden hover:scale-105 transition-transform duration-500">
                <img 
                  src={aboutVisual} 
                  alt="AI Automation Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Trusted By Industries */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Trusted By Industries</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <motion.div 
                  key={index}
                  className="glass-card px-4 py-2 rounded-full text-sm hover:glow-border transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {industry}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
