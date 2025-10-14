import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How AI is Transforming Small Business Operations",
      excerpt: "Discover the top 5 ways AI automation is helping SMBs compete with enterprise-level efficiency.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI Insights",
    },
    {
      title: "Building a WhatsApp Business Store in 2025",
      excerpt: "A complete guide to setting up automated commerce on WhatsApp and maximizing conversions.",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "E-Commerce",
    },
    {
      title: "Voice AI: The Future of Customer Service",
      excerpt: "Why voice agents are becoming essential for businesses that want to scale without hiring.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Automation",
    },
    {
      title: "ROI of Marketing Automation: Real Case Studies",
      excerpt: "See how three businesses achieved 3-5x ROI within their first year using AI marketing.",
      date: "December 28, 2024",
      readTime: "10 min read",
      category: "Marketing",
    },
    {
      title: "Design Trends That Convert in 2025",
      excerpt: "The latest UX/UI trends that are proven to increase engagement and sales.",
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Design",
    },
    {
      title: "CRM vs Custom Software: What's Right for You?",
      excerpt: "Understanding when to use off-the-shelf solutions versus building custom systems.",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Technology",
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
                Insights & <span className="glow-text">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay ahead with the latest in AI, automation, and digital transformation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {posts.map((post, index) => (
                <Card 
                  key={index}
                  className="glass-card border-border hover:glow-border transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <CardHeader>
                    <div className="text-sm text-primary font-semibold mb-2">{post.category}</div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
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

export default Blog;
