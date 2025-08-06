import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Target, 
  Heart, 
  Lightbulb, 
  Award,
  Users,
  Globe
} from "lucide-react";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Mohamed Ali",
      role: "Founder & CEO",
      initials: "MA",
      description: "Healthcare professional and AI innovator"
    },
    {
      name: "Inay Sayedi",
      role: "Co-founder", 
      initials: "IS",
      description: "Healthcare technology specialist"
    },
    {
      name: "Vince Szabó",
      role: "Technical Lead & Developer",
      initials: "VS", 
      description: "Full-stack developer and system architect"
    },
    {
      name: "Anish Jagadale",
      role: "AI Engineer & Developer",
      initials: "AJ",
      description: "AI/ML expert specializing in healthcare applications"
    },
    {
      name: "Márk Bodrácska",
      role: "Architect Developer",
      initials: "MB",
      description: "Software architect and development lead"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Safety and compassion first."
    },
    {
      icon: Target,
      title: "Clinically Driven",
      description: "Built with and for healthcare professionals."
    },
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Technology designed to solve real frontline challenges."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Users className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Revolutionizing Healthcare
            <span className="block bg-gradient-primary bg-clip-text text-transparent pb-1">
              One Triage at a Time
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in Amsterdam by healthcare professionals and AI innovators, MedAI was created to solve one of primary care's biggest challenges: rising patient demand and limited GP capacity. Our mission is to empower care teams with tools that save time, reduce burnout, and maintain quality care.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-deep-purple/5 to-vivid-magenta/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To enable GPs and triagists to provide faster, safer care using AI-powered triage — without compromising the personal connection at the heart of healthcare.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 bg-gradient-to-br from-cyan-accent/5 to-purple-blue/5">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every GP practice in the Netherlands benefits from AI-driven triage that reduces workload, improves patient outcomes, and integrates seamlessly into existing workflows.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do at TriageAI
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="bg-gradient-to-br from-secondary/50 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h3>
            <p className="text-muted-foreground text-lg">
              Healthcare professionals and technology experts united by a common vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group text-center bg-white">
                <CardContent className="p-6">
                  <Avatar className="w-20 h-20 mx-auto mb-4 bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                    <AvatarFallback className="text-white font-bold text-xl bg-transparent">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                  <p className="text-accent text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12">Impact So Far</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">50K+</div>
              <div className="text-muted-foreground">Patients Triaged</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">250+</div>
              <div className="text-muted-foreground">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">89%</div>
              <div className="text-muted-foreground">Faster Triage Times</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">95%</div>
              <div className="text-muted-foreground">Provider Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;