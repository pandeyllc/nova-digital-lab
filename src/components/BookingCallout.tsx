import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BookingCallout = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glow-border rounded-2xl p-8 md:p-12 text-center hover:scale-105 transition-all duration-300 animate-glow-pulse">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center animate-float">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Where to Start?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a <span className="glow-text font-semibold">free strategy call</span> with our experts. 
              We'll discuss your needs and create a custom package that fits your budget perfectly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                className="group"
                onClick={() => navigate("/contact")}
              >
                Book Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => navigate("/demos")}
              >
                View Live Demos
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              ✓ No commitment required  •  ✓ 100% free consultation  •  ✓ Get instant clarity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCallout;
