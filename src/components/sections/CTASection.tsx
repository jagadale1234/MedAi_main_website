import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Calendar, 
  Phone, 
  Mail,
  CheckCircle,
  Star
} from "lucide-react";
import { useState } from "react";
import DemoRequestForm from "@/components/forms/DemoRequestForm";

const CTASection = () => {
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const benefits = [
    "Free 30-day pilot program",
    "Full HIS integration support", 
    "Dedicated implementation team",
    "24/7 technical support",
    "No setup fees or long-term contracts"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden mb-16">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-accent/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-3 text-white/80">Trusted by Dutch GP practices</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-cyan-accent to-white bg-clip-text text-transparent pb-1">
                Your Triage Process?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
              Join innovative GP practices already using MedAI to deliver 
              smarter, faster care.
            </p>
            
            <div className="flex justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-deep-purple hover:bg-white/90 hover:shadow-glow transition-all duration-300 font-semibold px-8 py-4 text-lg"
                onClick={() => setIsDemoFormOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
            
            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center text-white/70">
                  <CheckCircle className="w-4 h-4 mr-2 text-cyan-accent flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Schedule a Demo</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                See MedAI in action with a personalized demo tailored to your GP practice and workflow needs.
              </p>
              <Button 
                className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300 w-full"
                onClick={() => setIsDemoFormOpen(true)}
              >
                Book Demo Call
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Get Information</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Request detailed information, pricing, and implementation timelines customized for your organization.
              </p>
              <Button 
                variant="outline" 
                className="border-accent text-accent hover:bg-accent/10 w-full"
                onClick={() => setIsDemoFormOpen(true)}
              >
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by healthcare organizations worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="font-semibold text-muted-foreground">NHS Trust</span>
            </div>
            <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="font-semibold text-muted-foreground">Private Clinics</span>
            </div>
            <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="font-semibold text-muted-foreground">GP Practices</span>
            </div>
            <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="font-semibold text-muted-foreground">Urgent Care</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Request Form */}
      <DemoRequestForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </section>
  );
};

export default CTASection;