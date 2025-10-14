import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, Scissors, Stethoscope, Home, UtensilsCrossed, 
  Dumbbell, SprayCanIcon, ShoppingBag, Store, Heart,
  GraduationCap, Zap, Coffee, ShoppingCart
} from "lucide-react";

const AISolutions = () => {
  const industries = [
    {
      icon: Wrench,
      name: "HVAC",
      useCase: "Automated appointment scheduling, emergency service routing, and seasonal maintenance reminders.",
    },
    {
      icon: Scissors,
      name: "Salons & Spas",
      useCase: "Smart booking system, client preference tracking, and automated follow-up campaigns.",
    },
    {
      icon: Stethoscope,
      name: "Medical Clinics",
      useCase: "Patient appointment management, insurance verification, and health reminder systems.",
    },
    {
      icon: Home,
      name: "Real Estate",
      useCase: "Property matching AI, virtual tours automation, and lead nurturing workflows.",
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurants",
      useCase: "Table reservations, menu chatbots, and delivery order automation.",
    },
    {
      icon: Dumbbell,
      name: "Gyms & Fitness",
      useCase: "Class booking, membership management, and personalized workout tracking.",
    },
    {
      icon: SprayCanIcon,
      name: "Cleaning Services",
      useCase: "Quote generation, route optimization, and recurring service automation.",
    },
    {
      icon: ShoppingBag,
      name: "E-Commerce",
      useCase: "Personalized product recommendations, cart recovery, and order tracking bots.",
    },
    {
      icon: Store,
      name: "Retail",
      useCase: "Inventory management, customer loyalty programs, and in-store chatbots.",
    },
    {
      icon: Heart,
      name: "Healthcare",
      useCase: "Telemedicine scheduling, prescription reminders, and patient education automation.",
    },
    {
      icon: GraduationCap,
      name: "Coaches & Consultants",
      useCase: "Session booking, course delivery automation, and client progress tracking.",
    },
    {
      icon: Zap,
      name: "Electricians & Plumbers",
      useCase: "Emergency dispatch, quote automation, and job completion follow-ups.",
    },
    {
      icon: Coffee,
      name: "Cafés",
      useCase: "Mobile ordering, loyalty rewards, and menu customization chatbots.",
    },
    {
      icon: ShoppingCart,
      name: "Grocery Stores",
      useCase: "Online ordering, delivery scheduling, and inventory notifications.",
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
                <span className="glow-text">AI Solutions</span> for Every Industry
              </h1>
              <p className="text-xl text-muted-foreground">
                Tailored automation and intelligence for small and medium businesses
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border hover:glow-border transition-all duration-300 hover:scale-105 group"
                >
                  <CardHeader>
                    <industry.icon className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
                    <CardTitle className="text-2xl">{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {industry.useCase}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Don't See Your Industry?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We create custom AI solutions for any business. Let's discuss how we can help you.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AISolutions;
