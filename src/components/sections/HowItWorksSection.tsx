import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  MessageSquare, 
  Brain, 
  Stethoscope, 
  FileText, 
  TrendingUp,
  ArrowRight,
  Shield
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Patient Registration",
      description: "Patients initiate triage via your website or HIS with basic info.",
      step: "01",
      color: "from-cyan-accent to-purple-blue"
    },
    {
      icon: MessageSquare,
      title: "Symptom Assessment",
      description: "AI-adaptive questioning gathers comprehensive clinical data.",
      step: "02",
      color: "from-purple-blue to-vivid-magenta"
    },
    {
      icon: Brain,
      title: "AI Analysis",
      description: "Algorithms apply NHG triage rules (ABCDE + ingangsklachten) to determine urgency.",
      step: "03",
      color: "from-vivid-magenta to-deep-purple"
    },
    {
      icon: Stethoscope,
      title: "Clinical Review",
      description: "Provider reviews AI recommendation with complete context.",
      step: "04",
      color: "from-deep-purple to-cyan-accent"
    },
    {
      icon: FileText,
      title: "Care Coordination",
      description: "Automated documentation and routing to appropriate care path.",
      step: "05",
      color: "from-cyan-accent to-purple-blue"
    },
    {
      icon: TrendingUp,
      title: "Outcome Tracking",
      description: "Continuous monitoring and analytics for performance optimization.",
      step: "06",
      color: "from-purple-blue to-vivid-magenta"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            Simple Integration
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How MedAI
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Transforms Your Workflow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless 6-step process that integrates with your existing systems 
            and enhances your clinical workflow without disruption.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-accent via-purple-blue to-vivid-magenta opacity-30 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="relative border-0 shadow-soft hover:shadow-glow transition-all duration-500 group overflow-hidden">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Arrow for flow indication */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Integration Highlights */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Seamless Integration with Your Existing Systems
            </h3>
            <p className="text-muted-foreground text-lg">
              No disruption to your current workflow. MedAI works with your HIS, EMR, and clinical protocols.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">HIS Integration</h4>
              <p className="text-muted-foreground text-sm">Compatible with leading Dutch HIS (e.g., Medicom, Promedico)</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">GDPR Compliant</h4>
              <p className="text-muted-foreground text-sm">Full compliance with healthcare data protection regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Real-time Analytics</h4>
              <p className="text-muted-foreground text-sm">Live dashboards for triage data and quality metrics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;