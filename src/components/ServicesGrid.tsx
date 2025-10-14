import { 
  Globe, MessageSquare, Bot, Smartphone, Phone, Database, 
  Workflow, TrendingUp, FileText, ShoppingCart, Palette, Sparkles 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const ServicesGrid = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Website Design & AI-First UX",
      description: "Stunning, conversion-optimized websites built with the latest AI technologies.",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business Store + Chat Automations",
      description: "Turn conversations into conversions with automated WhatsApp commerce.",
    },
    {
      icon: Bot,
      title: "Full Chatbot Ecosystems",
      description: "Intelligent chatbots that understand, engage, and convert 24/7.",
    },
    {
      icon: Smartphone,
      title: "Native Mobile & Web Apps",
      description: "iOS and Android applications that deliver exceptional user experiences.",
    },
    {
      icon: Phone,
      title: "Voice Agents for Calling & Engagement",
      description: "AI-powered voice assistants that handle calls and customer interactions.",
    },
    {
      icon: Database,
      title: "Custom CRM & SaaS Systems",
      description: "Tailored systems that streamline your operations and scale with you.",
    },
    {
      icon: Workflow,
      title: "Internal Workflow & HR Automation",
      description: "Automate repetitive tasks and free your team for strategic work.",
    },
    {
      icon: TrendingUp,
      title: "Performance Digital Marketing",
      description: "Data-driven campaigns that maximize ROI across all channels.",
    },
    {
      icon: FileText,
      title: "AI-Driven Content Creation & SEO",
      description: "Content that ranks, engages, and converts powered by AI.",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Store Setup & Automation",
      description: "Complete e-commerce solutions with automated marketing and fulfillment.",
    },
    {
      icon: Palette,
      title: "Branding & Visual Identity Kits",
      description: "Cohesive brand identities that make lasting impressions.",
    },
    {
      icon: Sparkles,
      title: "AI Integration & Custom Solutions",
      description: "Bespoke AI solutions tailored to your unique business needs.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services We <span className="glow-text">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end solutions that transform how you do business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card border-border hover:glow-border transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
