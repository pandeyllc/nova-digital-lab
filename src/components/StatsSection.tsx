import { TrendingUp, Zap, DollarSign } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      stat: "80%",
      description: "of businesses adopting AI see higher efficiency",
    },
    {
      icon: Zap,
      stat: "3×",
      description: "AI marketing increases ROI on average",
    },
    {
      icon: DollarSign,
      stat: "$15.7T",
      description: "AI contribution to global economy by 2030",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 particle-bg opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Facts & <span className="glow-text">Stats</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            The future is automated — don't get left behind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-lg text-center hover:glow-border transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-16 w-16 text-primary mx-auto mb-6 animate-float" />
              <div className="text-5xl font-bold text-primary glow-text mb-4">
                {item.stat}
              </div>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
