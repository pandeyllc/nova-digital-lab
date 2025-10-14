import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, MessageCircle, Workflow, TrendingUp, 
  BarChart3, Users, Play 
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Demos = () => {
  const navigate = useNavigate();

  const demos = [
    {
      icon: Phone,
      title: "AI Receptionist",
      description: "Watch how our AI receptionist handles calls, books appointments, and follows up automatically.",
      features: ["24/7 availability", "Multi-language support", "CRM integration"],
    },
    {
      icon: MessageCircle,
      title: "Automated Voice Agent",
      description: "Experience live AI-powered calling that engages leads and schedules meetings.",
      features: ["Natural conversations", "Lead qualification", "Appointment booking"],
    },
    {
      icon: Workflow,
      title: "Lead Automation Flow",
      description: "See leads flowing seamlessly from WhatsApp, Meta ads, and your website into one system.",
      features: ["Multi-channel capture", "Smart routing", "Auto-nurturing"],
    },
    {
      icon: TrendingUp,
      title: "Nurture Automation",
      description: "Personalized engagement sequences that turn cold leads into hot prospects.",
      features: ["Behavior triggers", "Email sequences", "SMS campaigns"],
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights and ROI tracking that shows exactly what's working.",
      features: ["Live metrics", "ROI tracking", "Custom reports"],
    },
    {
      icon: Users,
      title: "Workflow Automation",
      description: "Complete onboarding, HR processes, and internal alerts fully automated.",
      features: ["Employee onboarding", "Task automation", "Alert systems"],
    },
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
                See AI in <span className="glow-text">Action</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Interactive demos showcasing the power of our AI solutions
              </p>
            </div>
          </div>
        </section>

        {/* Demos Grid */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {demos.map((demo, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border hover:glow-border transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader>
                    <demo.icon className="h-16 w-16 text-primary mb-4 group-hover:animate-float" />
                    <CardTitle className="text-2xl">{demo.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {demo.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate("/contact")}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Request Demo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to See More?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Schedule a personalized demo tailored to your business needs
              </p>
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate("/contact")}
              >
                Book Your Demo Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Demos;
