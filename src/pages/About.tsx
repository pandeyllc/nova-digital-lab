import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import aboutVisual from "@/assets/about-visual.jpg";

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
        <section className="py-20 particle-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="glow-text">AI Agency</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Where human creativity meets artificial intelligence to build the future of digital business
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
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
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>Founded by industry experts with 20+ years combined experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>Serving businesses across 14+ industries</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <span>100% client satisfaction rate</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="glow-border rounded-lg overflow-hidden">
                  <img 
                    src={aboutVisual} 
                    alt="Our Team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Work With <span className="glow-text">Us</span>
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="glass-card p-6 rounded-lg hover:glow-border transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
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
