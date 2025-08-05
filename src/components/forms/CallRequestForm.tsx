import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, User, X } from "lucide-react";

interface CallRequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallRequestForm = ({ isOpen, onClose }: CallRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredTime: "",
    practice: "",
    urgency: "general"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto close after success message
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        name: "",
        phone: "",
        preferredTime: "",
        practice: "",
        urgency: "general"
      });
    }, 2000);
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
            Request a Call Back
          </CardTitle>
          <p className="text-center text-muted-foreground">
            Speak with our healthcare technology specialist
          </p>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Call Scheduled!</h3>
              <p className="text-muted-foreground">
                Our specialist will call you at your preferred time.
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
                <Label htmlFor="phone" className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+31 20 123 4567"
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
                <Label htmlFor="preferredTime" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Best Time to Call
                </Label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (9:00 - 12:00)</option>
                  <option value="afternoon">Afternoon (12:00 - 17:00)</option>
                  <option value="evening">Early Evening (17:00 - 19:00)</option>
                  <option value="asap">As soon as possible</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="urgency">Call Priority</Label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                >
                  <option value="general">General inquiry</option>
                  <option value="urgent">Urgent - Need solution soon</option>
                  <option value="technical">Technical questions</option>
                  <option value="pricing">Pricing and implementation</option>
                </select>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-white hover:shadow-glow transition-all duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Scheduling Call..." : "Request Call Back"}
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                We'll call you within 24 hours during Dutch business hours (9:00-17:00 CET).
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CallRequestForm;
