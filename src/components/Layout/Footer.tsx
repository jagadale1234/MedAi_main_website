import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";

const Footer = () => {
  const navigation = {
    product: [
      { name: "Features", href: "#product" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Integration", href: "#integration" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" },
      { name: "Support", href: "#support" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "GDPR Compliance", href: "#gdpr" },
      { name: "Security", href: "#security" },
    ],
  };

  return (
    <footer className="bg-deep-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg mr-3"></div>
              <span className="text-2xl font-bold">TriageAI</span>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Revolutionizing healthcare triage with AI-powered solutions that maximize care 
              efficiency while preserving the human touch that defines exceptional patient care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-cyan-accent" />
                <span className="text-white/80">hello@triageai.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-cyan-accent" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-cyan-accent" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 mb-8">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2024 TriageAI. All rights reserved.
          </div>
          <div className="text-white/60 text-sm mt-4 md:mt-0">
            Built with ❤️ for healthcare professionals worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;