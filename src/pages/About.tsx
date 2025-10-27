import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";
import AIOrb3D from "@/components/AIOrb3D";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    { title: "Hands-Free AI That Delivers", description: "Our automation systems work 24/7 without supervision" },
    { title: "Design That Converts", description: "Every pixel serves a purpose in driving results" },
    { title: "Marketing Fueled by Intelligence", description: "Data-driven strategies that maximize ROI" },
    { title: "Built for SMBs — Scalable for Enterprises", description: "Solutions that grow with your business" },
    { title: "Transparent, Proven, Performance-Driven", description: "We measure success by your success" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 particle-bg overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                About <span className="glow-text">Digital Flow Company</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Where human creativity meets artificial intelligence to build the future of digital business
              </motion.p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  We exist to democratize access to cutting-edge AI and automation technology. 
                  Every business, regardless of size, deserves tools that think, adapt, and perform.
                </p>
                <p className="text-lg text-muted-foreground">
                  By combining world-class design, intelligent automation, and data-driven marketing, 
                  we help businesses break free from operational constraints and focus on what they do best.
                </p>
                <div className="space-y-3 pt-4">
                  {[
                    "Founded by industry experts with 20+ years combined experience",
                    "Serving businesses across 14+ industries",
                    "100% client satisfaction rate"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="relative h-[400px]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <AIOrb3D />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background relative overflow-hidden">
          <AnimatedBackground />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Work With <span className="glow-text">Us</span>
              </h2>
            </motion.div>
            <div className="max-w-4xl mx-auto space-y-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-lg hover:glow-border transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
