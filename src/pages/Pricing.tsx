import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Starter Package",
      description: "Essential solutions for businesses just getting started",
      features: [
        "Logo Design & Branding",
        "Simple Website Pages",
        "Social Media Graphics",
        "Basic Chatbot Setup",
        "SEO Optimization",
      ],
    },
    {
      name: "Professional Package",
      description: "Complete digital ecosystem tailored to your growth",
      features: [
        "Full Website Design & Development",
        "AI Chatbot & Voice Agents",
        "WhatsApp & Email Automation",
        "CRM Integration",
        "Digital Marketing Campaigns",
        "Ongoing Support & Maintenance",
      ],
      popular: true,
    },
    {
      name: "Enterprise Package",
      description: "End-to-end custom solutions for any business need",
      features: [
        "Everything in Professional",
        "Custom AI & SaaS Development",
        "Mobile App Development",
        "Advanced Analytics & Reporting",
        "Dedicated Account Manager",
        "Priority Support & Updates",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 particle-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Custom <span className="glow-text">Packages</span> Built for You
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                We deliver all types of solutions — from simple designs to complex AI systems
              </p>
              <p className="text-lg text-muted-foreground">
                Every business is unique. We create custom packages based on your specific needs and budget.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`glass-card border-border hover:glow-border transition-all duration-300 ${
                    plan.popular ? "scale-105 ring-2 ring-primary" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-2 rounded-t-lg font-semibold">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-3xl">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground pt-2">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={plan.popular ? "hero" : "outline"}
                      size="lg"
                      className="w-full"
                      onClick={() => navigate("/contact")}
                    >
                      Get Custom Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
