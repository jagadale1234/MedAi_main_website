import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  Video, 
  Download,
  Calendar,
  Users,
  ArrowRight,
  Newspaper
} from "lucide-react";

const ResourcesSection = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Primary Care: NHG Standards Integration",
      description: "How MedAI integrates NHG standards to revolutionize Dutch primary care workflows while maintaining compliance with clinical guidelines.",
      category: "Clinical Insights",
      readTime: "8 min read",
      date: "March 2024"
    },
    {
      title: "Case Study: Reducing Wait Times in Dutch GP Practices",
      description: "How intelligent triage systems are helping Dutch healthcare providers reduce patient wait times by up to 50% without compromising care quality.",
      category: "Case Study",
      readTime: "6 min read", 
      date: "February 2024"
    },
    {
      title: "Technical Deep Dive: ABCDE Triage and AI",
      description: "Understanding the implementation of ABCDE (Airway, Breathing, Circulation, Disability, Exposure) protocols in AI-assisted triage systems.",
      category: "Technical",
      readTime: "10 min read",
      date: "January 2024"
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: "Implementation Guide",
      description: "Step-by-step guide for integrating MedAI with your existing HIS and clinical workflows.",
      type: "PDF Download",
      action: "Download Guide"
    },
    {
      icon: Video,
      title: "Product Demo Recording",
      description: "30-minute comprehensive demo showing MedAI in action with real clinical scenarios.",
      type: "Video",
      action: "Watch Demo"
    },
    {
      icon: BookOpen,
      title: "Clinical Validation Report",
      description: "Detailed analysis of MedAI's accuracy and performance in clinical validation studies.",
      type: "Research Paper",
      action: "Read Report"
    },
    {
      icon: Users,
      title: "Training Materials",
      description: "Complete training package for healthcare staff including videos, guides, and best practices.",
      type: "Learning Package",
      action: "Access Training"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <BookOpen className="w-4 h-4 mr-2" />
            Knowledge Hub
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Resources &
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights on AI in healthcare, implementation guides, 
            and clinical research to help you make informed decisions about intelligent triage technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-foreground">Latest Insights</h3>
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {post.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Download Resources</h3>
            <p className="text-muted-foreground text-lg">
              Everything you need to evaluate, implement, and optimize MedAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const IconComponent = resource.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-xl font-semibold text-foreground">{resource.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {resource.type}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        <Button variant="outline" className="border-accent text-accent hover:bg-accent/10 group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                          <Download className="mr-2 h-4 w-4" />
                          {resource.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-accent/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <Newspaper className="w-16 h-16 mx-auto mb-6 text-cyan-accent" />
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-8 text-lg">
              Get the latest insights on AI in healthcare, product updates, and clinical research 
              delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cyan-accent"
              />
              <Button className="bg-white text-deep-purple hover:bg-white/90 font-semibold px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe at any time. GDPR compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;