import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Clock, 
  Shield, 
  Users, 
  Stethoscope, 
  BarChart3,
  CheckCircle,
  Zap
} from "lucide-react";

const ProductSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Triage",
      description: "Uses advanced algorithms to analyze symptoms and medical history, following NHG's ABCDE and ingangsklachten frameworks for accurate urgency classification (U0–U5).",
      badge: "Core Feature"
    },
    {
      icon: Clock,
      title: "Real-Time Processing",
      description: "Delivers instant triage recommendations, cutting wait times and boosting efficiency during peak hours.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "NHG Compliant",
      description: "Fully aligned with Dutch triage standards and ABCDE safety checks to ensure reliable, standardized care.",
      badge: "Compliance"
    },
    {
      icon: Users,
      title: "Multi-Provider Support",
      description: "Designed for GP practices, out-of-hours services, and nurses with customizable workflows and role-based access.",
      badge: "Flexibility"
    },
    {
      icon: Stethoscope,
      title: "Clinical Decision Support",
      description: "Provides evidence-based recommendations to assist providers while keeping the clinician in control of final decisions.",
      badge: "Clinical"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Tracks triage outcomes, patient flow, and system performance to support continuous improvement and reporting.",
      badge: "Insights"
    }
  ];

  const benefits = [
    "Reduce triage workload by up to 50%",
    "Increase diagnostic consistency with AI guidance",
    "Free up GP time for high-value patient interactions",
    "Fully NHG and GDPR compliant",
    "Scales easily as patient volumes grow"
  ];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Zap className="w-4 h-4 mr-2" />
            Revolutionary Technology
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI-Powered Triage That
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Transforms Primary Care
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MedAI integrates seamlessly with existing HIS systems to provide intelligent, NHG-compliant triage. Our platform improves access to care, reduces workload, and enables healthcare professionals to focus on what matters most: the patient.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-secondary/50 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Why Choose MedAI
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">95%</div>
                  <div className="text-muted-foreground mb-4">Provider Satisfaction</div>
                  <div className="w-full bg-secondary rounded-full h-3 mb-6">
                    <div className="bg-gradient-primary h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "TriageAI has revolutionized our clinic workflow, giving us more time 
                    for what matters most - our patients."
                  </p>
                  <div className="mt-4 text-sm font-medium text-foreground">
                    - Dr. Sarah Mitchell, Primary Care
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;