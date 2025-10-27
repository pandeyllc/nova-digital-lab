import { useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";
import heroBg from "@/assets/hero-bg.jpg";
import FloatingGrid3D from "./FloatingGrid3D";
import AnimatedBackground from "./AnimatedBackground";
import { motion } from "framer-motion";

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
      
      {/* Animated Background Elements */}
      <AnimatedBackground />
      <FloatingGrid3D />
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Where Intelligence Meets{" "}
            <span className="glow-text">Imagination</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From AI automations to stunning designs, from chatbots to full-scale marketing — 
            we build the digital backbone that powers tomorrow's brands today.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => {
                handleCTAClick("viewing demos");
                navigate("/demos");
              }}
              className="hover:scale-110 transition-transform"
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
              className="hover:scale-110 transition-transform"
            >
              Book Strategy Call
            </Button>
          </motion.div>

          {/* Proof Points */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: "70%", label: "Reduced Administrative Workload" },
              { value: "$1M+", label: "New Business Generated" },
              { value: "3x ROI", label: "Within 6 Months" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px hsl(120 100% 35% / 0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-primary glow-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
