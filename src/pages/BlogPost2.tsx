import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-deep-purple text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 mb-6"
            onClick={() => window.close()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Close
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ABCDE Triage in 60 Seconds: What Everyone Should Know About Life-Saving First Checks
          </h1>
          <div className="flex items-center space-x-4 text-white/80">
            <span>Emergency Care</span>
            <span>•</span>
            <span>6 min read</span>
            <span>•</span>
            <span>January 2025</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            When every second counts, a structured approach can mean the difference between life and death. The ABCDE method – a cornerstone of emergency care – is not just for healthcare professionals. Understanding its basics can empower anyone to recognize danger early and act decisively.
          </p>

          <h2>What is the ABCDE Method?</h2>
          <p>
            The <strong>ABCDE protocol</strong> is a systematic way to quickly assess a patient's vital functions and identify life-threatening conditions. It stands for:
          </p>
          <ul>
            <li><strong>A – Airway:</strong> Is the airway clear? Is the person choking or making abnormal sounds (like stridor)?</li>
            <li><strong>B – Breathing:</strong> Are they breathing adequately, or are there signs of severe shortness of breath (e.g., can only speak a few words at a time, using shoulder muscles to breathe)?</li>
            <li><strong>C – Circulation:</strong> Are there signs of major bleeding, bluish skin, or clammy sweat indicating poor circulation?</li>
            <li><strong>D – Disability:</strong> Is the person conscious and alert, or showing confusion, weakness, or seizure activity?</li>
            <li><strong>E – Exposure/Environment:</strong> Are there external factors, such as hypothermia, burns, or toxic fumes, that threaten the person's safety?</li>
          </ul>
          <p>
            This framework is widely used in emergency departments, ambulances, and by triage nurses in primary care. In the Netherlands, it forms the foundation of the <strong>NHG TriageWijzer</strong> guidelines for urgent care.
          </p>

          <h2>Why is ABCDE So Important?</h2>
          
          <h3>1. Prioritization of Life-Threatening Issues</h3>
          <p>The method ensures that the most urgent problems (like airway obstruction or cardiac arrest) are addressed first, before moving on to less critical concerns.</p>
          
          <h3>2. Structured Thinking Under Pressure</h3>
          <p>During emergencies, stress can lead to confusion. ABCDE provides a <strong>step-by-step checklist</strong> to stay focused and avoid missing crucial details.</p>
          
          <h3>3. Universal Language in Healthcare</h3>
          <p>Whether you're a triagist, paramedic, or GP, ABCDE offers a <strong>common framework</strong> for communicating a patient's condition quickly and accurately.</p>

          <h2>Real-World Examples: Recognizing Red Flags</h2>
          
          <h3>Choking in Children</h3>
          <ul>
            <li><strong>Airway (A):</strong> A child suddenly can't swallow saliva, looks panicked, and turns blue.</li>
            <li>Immediate action: Call emergency services (112 in the Netherlands), perform back blows and chest thrusts as instructed while awaiting help.</li>
          </ul>

          <h3>Severe Shortness of Breath</h3>
          <ul>
            <li><strong>Breathing (B):</strong> An adult sitting upright, unable to speak five words without gasping for air.</li>
            <li>Immediate action: Treat as life-threatening – needs urgent medical attention (possible severe asthma attack or heart failure).</li>
          </ul>

          <h3>Massive Bleeding</h3>
          <ul>
            <li><strong>Circulation (C):</strong> A car accident victim with visible, uncontrolled bleeding.</li>
            <li>Immediate action: Apply direct pressure to the wound and elevate the limb while waiting for emergency services.</li>
          </ul>

          <h3>Unconscious Patient with Seizure</h3>
          <ul>
            <li><strong>Disability (D):</strong> Someone found unresponsive, having convulsions, then remains confused.</li>
            <li>Immediate action: Place them in the recovery position and monitor breathing.</li>
          </ul>

          <h2>Challenges in ABCDE Assessments</h2>
          <p>Even trained professionals face obstacles:</p>
          <ul>
            <li><strong>Information Gaps</strong>: In telephone triage, symptoms are described by anxious callers, making it harder to visualize severity.</li>
            <li><strong>Multiple Symptoms</strong>: Patients may present overlapping problems (e.g., chest pain and confusion), requiring quick judgment on priority.</li>
            <li><strong>Time Pressure</strong>: Especially in out-of-hours GP services, every minute saved can change the outcome for the next patient in line.</li>
          </ul>

          <h2>Where Does AI Come In?</h2>
          <p>AI-enhanced triage systems like <strong>MedAI</strong> integrate ABCDE logic into their algorithms:</p>
          <ul>
            <li><strong>Automated Red Flag Detection</strong>: AI identifies keywords such as "can't breathe," "turning blue," or "unconscious" and instantly escalates the case.</li>
            <li><strong>Guided Questioning</strong>: The chatbot asks structured follow-up questions (e.g., "Can they speak full sentences?") that mirror NHG triage protocols.</li>
            <li><strong>Real-Time Decision Support</strong>: The system proposes an urgency level and next steps (e.g., "call ambulance now"), while human professionals remain in control.</li>
            <li><strong>Consistency and Speed</strong>: AI removes variability and ensures no critical step in the ABCDE check is skipped.</li>
          </ul>

          <h2>Why Should the Public Know About ABCDE?</h2>
          <p>While professionals use ABCDE daily, <strong>basic awareness among the public</strong> can save lives. Recognizing choking, severe breathing distress, or unconsciousness allows bystanders to:</p>
          <ul>
            <li>Call emergency services sooner.</li>
            <li>Follow dispatcher instructions more effectively (e.g., chest compressions, recovery position).</li>
            <li>Stay calm and structured in chaotic situations.</li>
          </ul>
          <p>Public education – through schools, workplaces, and even digital health platforms – can bridge this knowledge gap.</p>

          <h2>MedAI's Vision: Combining Speed With Compassion</h2>
          <p>MedAI's mission is to <strong>streamline emergency assessment</strong> without losing the human connection. Our AI doesn't replace triagists – it empowers them to:</p>
          <ul>
            <li>Focus on <strong>empathy</strong> rather than repetitive questioning.</li>
            <li>Respond faster to the most critical patients.</li>
            <li>Reduce cognitive load and fatigue during high-demand periods.</li>
          </ul>
          <p>Ultimately, this leads to safer, more humane care for patients in crisis.</p>

          <h2>Conclusion</h2>
          <p>The ABCDE method remains a timeless tool in emergency medicine – simple, structured, and life-saving. By combining this proven framework with AI-powered tools, we can bring faster and safer care to patients, support overwhelmed healthcare teams, and even educate the public on what to do when seconds matter most.</p>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg mt-12">
            <p className="text-sm italic text-muted-foreground">
              Want to learn more about how MedAI incorporates ABCDE principles into our AI triage system? Contact us to discover how we're making emergency care more efficient and effective.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
