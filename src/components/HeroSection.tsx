import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleCTAClick = (action: string) => {
    setShowConfetti(true);
    toast({
      title: "Awesome! 🚀",
      description: `Let's get started with ${action}!`,
    });
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Where Intelligence Meets{" "}
            <span className="glow-text">Imagination</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From AI automations to stunning designs, from chatbots to full-scale marketing — 
            we build the digital backbone that powers tomorrow's brands today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                handleCTAClick("viewing demos");
                navigate("/demos");
              }}
            >
              See Demos
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                handleCTAClick("booking a strategy call");
                navigate("/contact");
              }}
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Proof Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary glow-text">70%</div>
              <div className="text-sm text-muted-foreground mt-2">Reduced Administrative Workload</div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary glow-text">$1M+</div>
              <div className="text-sm text-muted-foreground mt-2">New Business Generated</div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-bold text-primary glow-text">3x ROI</div>
              <div className="text-sm text-muted-foreground mt-2">Within 6 Months</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
