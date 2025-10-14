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
      name: "Starter",
      price: "$2,500",
      period: "one-time",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Custom Website Design",
        "Basic Chatbot Integration",
        "Social Media Setup",
        "SEO Optimization",
        "3 Months Support",
      ],
    },
    {
      name: "Growth",
      price: "$5,000",
      period: "one-time",
      description: "Comprehensive solution for scaling businesses",
      features: [
        "Everything in Starter",
        "AI Voice Agent",
        "WhatsApp Automation",
        "CRM Integration",
        "Email Marketing Setup",
        "6 Months Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Everything in Growth",
        "Custom AI Solutions",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "Priority Support",
        "Unlimited Updates",
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
                Simple, Transparent <span className="glow-text">Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose the plan that fits your business needs
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
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                    <div className="pt-4">
                      <span className="text-5xl font-bold glow-text">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                    </div>
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
                      Get Started
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
