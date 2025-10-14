import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

const CTASection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleCTAClick = (action: string) => {
    setShowConfetti(true);
    toast({
      title: "Fantastic! ✨",
      description: `Let's take your business to the next level!`,
    });
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} />}
      
      {/* Neon Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,hsl(var(--primary)/0.1)_50%,transparent_100%)] animate-[shimmer_3s_ease-in-out_infinite]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to <span className="glow-text">Automate, Design,</span> and Dominate?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Let's build your all-in-one growth engine — powered by AI, creativity, and strategy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                handleCTAClick("demos");
                navigate("/demos");
              }}
            >
              View Demos
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                handleCTAClick("booking");
                navigate("/contact");
              }}
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
