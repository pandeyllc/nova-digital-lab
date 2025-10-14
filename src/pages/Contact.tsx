import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

const Contact = () => {
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    toast({
      title: "Message Sent! 🎉",
      description: "We'll get back to you within 24 hours.",
    });
    setTimeout(() => setShowConfetti(false), 3000);
    setFormData({ name: "", email: "", business: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={500} />}
      <Navigation />
      <main className="pt-16">
        <section className="py-20 particle-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Let's <span className="glow-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to transform your business? Get in touch and let's build something amazing together.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="Your business name"
                    className="bg-secondary border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest *</Label>
                  <Select required onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border-border">
                      <SelectItem value="ai-automation">AI Automation</SelectItem>
                      <SelectItem value="website-design">Website Design</SelectItem>
                      <SelectItem value="chatbot">Chatbot Development</SelectItem>
                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                      <SelectItem value="crm">Custom CRM</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="bg-secondary border-border min-h-[150px]"
                  />
                </div>

                <Button type="submit" variant="hero" size="xl" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
