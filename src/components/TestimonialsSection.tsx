import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Luxe Hair Salon",
      image: "👩‍💼",
      text: "Our salon bookings grew 200% in 30 days — all automated. The AI receptionist handles everything while we focus on our clients.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "TechStart Solutions",
      image: "👨‍💻",
      text: "They built our brand, chatbot, and CRM — we now run on autopilot. Best investment we've ever made.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Green HVAC Services",
      image: "👩‍🔧",
      text: "From website to AI agent, everything connects seamlessly. Our customer satisfaction scores have never been higher.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Clients <span className="glow-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-border hover:glow-border transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
