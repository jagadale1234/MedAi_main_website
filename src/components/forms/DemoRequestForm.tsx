import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Mail, X } from "lucide-react";

interface DemoRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoRequestForm = ({ isOpen, onClose }: DemoRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    practice: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create submission object with timestamp
    const submission = {
      ...formData,
      submittedAt: new Date().toISOString(),
      id: Date.now().toString()
    };

    try {
      // Log to console for now
      console.log('Demo Request Submission:', submission);
      
      // Save to localStorage as a simple storage solution
      const existingSubmissions = JSON.parse(localStorage.getItem('demoRequests') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('demoRequests', JSON.stringify(existingSubmissions));
      
      // In a real app, you would send this to your backend API:
      // await fetch('/api/demo-requests', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submission)
      // });

      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Auto close after success message
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          practice: "",
          phone: ""
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting demo request:', error);
      setIsSubmitting(false);
      // Handle error state here
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl font-bold text-center text-foreground">
            Schedule Your Demo
          </CardTitle>
          <p className="text-center text-muted-foreground">
            See MedAI in action with a personalized demo
          </p>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Demo Scheduled!</h3>
              <p className="text-muted-foreground">
                We'll contact you shortly to confirm your demo appointment.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Dr. John Smith"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.smith@practice.nl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="practice">Practice/Organization</Label>
                <Input
                  id="practice"
                  name="practice"
                  type="text"
                  value={formData.practice}
                  onChange={handleInputChange}
                  placeholder="Amsterdam Medical Center"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+31 20 123 4567"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Preferred Time *
                  </Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling..." : "Schedule Demo"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our privacy policy and consent to being contacted about MedAI.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DemoRequestForm;
