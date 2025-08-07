import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import DemoRequestForm from "@/components/forms/DemoRequestForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const navigation = [
    { name: "Product", href: "#product" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-deep-purple border-b border-deep-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-0.5 md:py-1">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 w-48 md:w-64">
            <img 
              src="/edited.png" 
              alt="MEDAI Logo" 
              className="w-48 h-12 md:w-64 md:h-20 object-contain" 
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-cyan-accent transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center justify-end w-48 md:w-64">
            <Button 
              className="bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
              onClick={() => setIsDemoFormOpen(true)}
            >
              Get Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex justify-end flex-1 pl-4 pr-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:text-cyan-accent hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-deep-purple border-t border-deep-purple">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-cyan-accent transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  className="w-full bg-gradient-primary text-white"
                  onClick={() => {
                    setIsDemoFormOpen(true);
                    setIsMenuOpen(false);
                  }}
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Demo Request Form */}
      <DemoRequestForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </header>
  );
};

export default Header;