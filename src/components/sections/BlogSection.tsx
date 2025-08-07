import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Clock, ArrowLeft, X } from "lucide-react";
import { useState } from "react";

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  const blogPosts = [
    {
      id: "ai-telephone-triage",
      title: "From Telephone Triage to AI: How Digital Innovation is Transforming Emergency Care",
      summary: "Explore how AI is revolutionizing telephone triage in Dutch healthcare while maintaining the human touch. Learn about the ABCDE protocol, NHG compliance, and real-world impact on emergency care.",
      category: "AI in Healthcare",
      readTime: "8 min read",
      date: "August 2025",
      content: `In an era where healthcare systems are under immense pressure, artificial intelligence (AI) is emerging as a game-changer. One area seeing rapid transformation is telephone triage – the crucial first step in assessing a patient's urgency. But how does AI enhance this process without losing the personal touch that patients value?

## The Foundations of Traditional Triage: The ABCDE Protocol

For decades, triage in Dutch primary and emergency care has followed standardized guidelines from the NHG (Dutch College of General Practitioners). At the heart of this system lies the **ABCDE protocol** – a structured method to quickly identify life-threatening conditions:

- **Airway**: Is the airway open and unobstructed?
- **Breathing**: Is the patient breathing adequately, or are there signs of distress (e.g., rapid breathing, inability to speak in full sentences)?
- **Circulation**: Are there symptoms like pallor, clammy skin, or major bleeding?
- **Disability**: Is the patient conscious and responsive, or showing signs of confusion or neurological deficit?
- **Exposure**: Are there environmental threats (e.g., hypothermia, chemical exposure) that require immediate action?

This method allows triage nurses and assistants to **assess urgency within seconds**, often over the phone, before choosing the right "entry complaint" and determining the next steps – whether it's sending an ambulance, booking an urgent GP appointment, or giving self-care advice.

## The Challenges: Time, Workload, and Human Error

Despite its proven effectiveness, traditional telephone triage faces **significant challenges**:

- **Time Pressure**: A single triage call can last 5–10 minutes. In peak hours, this creates backlogs and longer wait times.
- **Rising Workload**: Increasing patient demand – particularly during evenings, nights, and weekends – puts extra strain on triage staff.
- **Human Factors**: Fatigue, stress, and subjective interpretation can lead to inconsistencies in urgency assessment.
- **Complexity of Cases**: Patients may present vague or multiple symptoms, making it harder to apply the structured ABCDE framework effectively.

These pressures have fueled interest in **digital innovations** that can streamline triage without compromising patient safety.

## How AI Accelerates Triage – While Staying NHG-Compliant

AI-driven triage systems, like those developed by MedAI, aim to **enhance rather than replace** the human triagist. Here's how:

### 1. Real-Time Symptom Analysis
AI chatbots can guide patients through structured questions – closely aligned with NHG protocols – and flag potential red flags (e.g., unconsciousness, severe shortness of breath) within seconds.

### 2. Automatic Urgency Classification
By combining symptom patterns with contextual factors (age, comorbidities, onset time), AI can suggest an urgency level (U0–U5) in line with the NHG TriageWijzer. This saves time for the triagist, who only needs to verify rather than manually classify.

### 3. Consistency and Error Reduction
Unlike humans, AI applies the same logic every time. This reduces variability and supports safer decision-making, particularly for less experienced staff.

### 4. Integration With HIS and ABCDE Protocol
MedAI's system is designed to integrate seamlessly with existing healthcare information systems (HIS) and respects the **ABCDE-first principle**: checking for life-threatening conditions before moving into detailed symptom triage.

## Real-World Impact: Faster Recognition of Life-Threatening Signals

Early pilots and simulations show promising outcomes when AI supports triage:

- **Cardiac Arrest (Reanimation)**: Immediate flagging of "unconscious and not breathing" triggers direct ambulance dispatch – seconds faster than manual questioning.
- **Severe Dyspnea (Breathing Distress)**: AI detects critical phrases like "can't speak in full sentences" or "sits upright to breathe," prompting urgent escalation without delay.
- **Hidden Red Flags**: Patterns like "abdominal pain + clammy skin + fainting" can signal shock – quickly recognized by AI, even if the caller doesn't describe it as "severe."

These improvements are not about **replacing** human judgment but about **amplifying it** – ensuring critical cases never slip through the cracks.

## Balancing Technology and Human Touch

A common concern among healthcare professionals is that AI could make care feel impersonal. MedAI addresses this by designing the technology as a **support tool**, not a substitute:

- **Human-in-the-Loop**: Final decisions remain with trained triagists or GPs.
- **Empathetic Design**: Conversational AI uses clear, reassuring language, guiding patients calmly through stressful situations.
- **Time for Personal Care**: By automating routine questioning, staff gain more time to focus on **empathy and reassurance** – the human elements patients value most.

## Looking Ahead: The Future of AI in Emergency Care

The potential of AI in triage extends beyond phone calls. Future developments may include:

- **Multimodal Input**: Combining chat, voice, and even image/video sharing (e.g., photos of rashes, breathing patterns).
- **Predictive Analytics**: Using historical data to forecast peaks in demand or identify high-risk patients.
- **Continuous Learning**: AI models improving over time as they process more real-world triage data.

For healthcare organizations, adopting AI-driven triage offers a **double win**: improving patient safety and satisfaction while reducing workload and costs.

## Conclusion

As emergency care faces growing demand and complexity, **AI offers a powerful ally**. By embedding AI into the well-established NHG triage framework, MedAI ensures innovation without sacrificing safety or humanity. The result? Faster, smarter, and more personal care – exactly what modern patients and professionals need.

*Ready to learn more about how AI can transform your healthcare triage process? Contact MedAI today to schedule a consultation and see our technology in action.*`
    },
    {
      id: "abcde-triage-guide",
      title: "ABCDE Triage in 60 Seconds: What Everyone Should Know About Life-Saving First Checks",
      summary: "When every second counts, a structured approach can mean the difference between life and death. Learn the ABCDE method that could save lives.",
      category: "Emergency Care",
      readTime: "6 min read",
      date: "January 2025",
      content: `When every second counts, a structured approach can mean the difference between life and death. The ABCDE method – a cornerstone of emergency care – is not just for healthcare professionals. Understanding its basics can empower anyone to recognize danger early and act decisively.

## What is the ABCDE Method?

The **ABCDE protocol** is a systematic way to quickly assess a patient's vital functions and identify life-threatening conditions. It stands for:

- **A – Airway:** Is the airway clear? Is the person choking or making abnormal sounds (like stridor)?
- **B – Breathing:** Are they breathing adequately, or are there signs of severe shortness of breath (e.g., can only speak a few words at a time, using shoulder muscles to breathe)?
- **C – Circulation:** Are there signs of major bleeding, bluish skin, or clammy sweat indicating poor circulation?
- **D – Disability:** Is the person conscious and alert, or showing confusion, weakness, or seizure activity?
- **E – Exposure/Environment:** Are there external factors, such as hypothermia, burns, or toxic fumes, that threaten the person's safety?

This framework is widely used in emergency departments, ambulances, and by triage nurses in primary care. In the Netherlands, it forms the foundation of the **NHG TriageWijzer** guidelines for urgent care.

## Why is ABCDE So Important?

### 1. Prioritization of Life-Threatening Issues
The method ensures that the most urgent problems (like airway obstruction or cardiac arrest) are addressed first, before moving on to less critical concerns.

### 2. Structured Thinking Under Pressure
During emergencies, stress can lead to confusion. ABCDE provides a **step-by-step checklist** to stay focused and avoid missing crucial details.

### 3. Universal Language in Healthcare
Whether you're a triagist, paramedic, or GP, ABCDE offers a **common framework** for communicating a patient's condition quickly and accurately.

## Real-World Examples: Recognizing Red Flags

### Choking in Children
- **Airway (A):** A child suddenly can't swallow saliva, looks panicked, and turns blue.
- Immediate action: Call emergency services (112 in the Netherlands), perform back blows and chest thrusts as instructed while awaiting help.

### Severe Shortness of Breath
- **Breathing (B):** An adult sitting upright, unable to speak five words without gasping for air.
- Immediate action: Treat as life-threatening – needs urgent medical attention (possible severe asthma attack or heart failure).

### Massive Bleeding
- **Circulation (C):** A car accident victim with visible, uncontrolled bleeding.
- Immediate action: Apply direct pressure to the wound and elevate the limb while waiting for emergency services.

### Unconscious Patient with Seizure
- **Disability (D):** Someone found unresponsive, having convulsions, then remains confused.
- Immediate action: Place them in the recovery position and monitor breathing.

## Challenges in ABCDE Assessments

Even trained professionals face obstacles:

- **Information Gaps**: In telephone triage, symptoms are described by anxious callers, making it harder to visualize severity.
- **Multiple Symptoms**: Patients may present overlapping problems (e.g., chest pain and confusion), requiring quick judgment on priority.
- **Time Pressure**: Especially in out-of-hours GP services, every minute saved can change the outcome for the next patient in line.

## Where Does AI Come In?

AI-enhanced triage systems like **MedAI** integrate ABCDE logic into their algorithms:

- **Automated Red Flag Detection**: AI identifies keywords such as "can't breathe," "turning blue," or "unconscious" and instantly escalates the case.
- **Guided Questioning**: The chatbot asks structured follow-up questions (e.g., "Can they speak full sentences?") that mirror NHG triage protocols.
- **Real-Time Decision Support**: The system proposes an urgency level and next steps (e.g., "call ambulance now"), while human professionals remain in control.
- **Consistency and Speed**: AI removes variability and ensures no critical step in the ABCDE check is skipped.

## Why Should the Public Know About ABCDE?

While professionals use ABCDE daily, **basic awareness among the public** can save lives. Recognizing choking, severe breathing distress, or unconsciousness allows bystanders to:

- Call emergency services sooner.
- Follow dispatcher instructions more effectively (e.g., chest compressions, recovery position).
- Stay calm and structured in chaotic situations.

Public education – through schools, workplaces, and even digital health platforms – can bridge this knowledge gap.

## MedAI's Vision: Combining Speed With Compassion

MedAI's mission is to **streamline emergency assessment** without losing the human connection. Our AI doesn't replace triagists – it empowers them to:

- Focus on **empathy** rather than repetitive questioning.
- Respond faster to the most critical patients.
- Reduce cognitive load and fatigue during high-demand periods.

Ultimately, this leads to safer, more humane care for patients in crisis.

## Conclusion

The ABCDE method remains a timeless tool in emergency medicine – simple, structured, and life-saving. By combining this proven framework with AI-powered tools, we can bring faster and safer care to patients, support overwhelmed healthcare teams, and even educate the public on what to do when seconds matter most.

*Want to learn more about how MedAI incorporates ABCDE principles into our AI triage system? Contact us to discover how we're making emergency care more efficient and effective.*`
    },
    {
      id: "gp-out-of-hours-ai",
      title: "The Future of GP Out-of-Hours Care: AI Triage as a Solution to Healthcare Pressure",
      summary: "General practitioners across the Netherlands face unprecedented demand. Discover how AI triage could be the breakthrough that helps sustain emergency primary care without sacrificing quality or empathy.",
      category: "Healthcare Innovation",
      readTime: "7 min read",
      date: "February 2025",
      content: `General practitioners (GPs) and triage nurses across the Netherlands are facing unprecedented demand. Rising patient numbers, staff shortages, and growing complexity of cases are pushing out-of-hours services to their limits. Could artificial intelligence (AI) triage be the breakthrough that helps sustain emergency primary care – without sacrificing quality or empathy?

## The Current Challenge: Overloaded GP Posts

Dutch GP out-of-hours services (huisartsenposten) are vital for urgent, non-hospital emergencies during evenings, nights, and weekends. But these services are under strain:

- **Rising Patient Volumes:** More people are seeking urgent care outside regular hours, often due to difficulty accessing daytime appointments.
- **Staff Shortages:** Recruiting and retaining trained triage nurses and assistants is increasingly difficult, especially in rural areas.
- **Increasing Complexity:** Patients present with multiple symptoms, chronic conditions, or vague complaints that require careful evaluation.
- **Longer Wait Times:** High demand leads to backlogs, patient dissatisfaction, and stress for healthcare professionals.

This context makes it clear: **new approaches are needed to maintain safe and efficient care**.

## Why AI Triage Could Be the Answer

AI-driven triage systems are designed to support – not replace – human triagists. Here's how they address key challenges faced by GP posts:

### 1. Speed and Efficiency
AI chatbots can perform initial structured questioning with patients, identifying key symptoms and potential red flags before a human triagist even picks up the call. This reduces the time needed for manual questioning and helps prioritize urgent cases.

### 2. Consistency and Safety
AI applies NHG-based triage protocols uniformly, reducing variability caused by fatigue or differing experience levels among staff. This leads to more consistent urgency assessments and safer decision-making.

### 3. Scalable Workflows
By automating parts of the process, AI allows GP posts to handle more cases with the same workforce – a critical advantage during peak times.

### 4. Integration With Existing Systems
Modern AI triage tools can integrate seamlessly with electronic health records (HIS) and existing workflows, minimizing disruption to daily practice.

## How Does It Work in Practice?

Imagine this scenario:

**Before AI**
- A patient calls with severe abdominal pain and dizziness.
- The triage nurse starts from scratch: verifying patient details, asking structured questions, assessing urgency, and escalating if necessary.
- This takes 8–10 minutes per call, multiplied by hundreds of calls per shift.

**With AI**
- The AI chatbot collects initial information (symptoms, onset, relevant medical history) through an online form or voice assistant.
- Urgent red flags – such as signs of shock or severe pain – are automatically flagged and escalated.
- The triage nurse reviews the pre-collected data, verifies key details, and focuses on empathetic communication and reassurance.
- Total time per case drops by 30–50%, while critical cases are prioritized faster.

## Maintaining NHG Standards: Safety First

A key concern among GPs is whether AI can be trusted to follow national guidelines. MedAI addresses this by:

- **Basing all decision logic on the NHG TriageWijzer** (including the ABCDE-first approach).
- **Aligning urgency classification (U0–U5)** with established Dutch standards.
- **Human oversight at every step**, ensuring AI suggestions are verified, not blindly followed.

This approach ensures that innovation enhances – rather than undermines – the trusted frameworks already used in Dutch primary care.

## Beyond Efficiency: Improving the Patient Experience

While much attention is on workload reduction, AI triage also benefits patients:

- **Shorter Wait Times:** Faster pre-assessment means urgent cases are prioritized sooner.
- **24/7 Accessibility:** Digital triage tools can operate around the clock, even outside peak staffing hours.
- **Clear Communication:** Structured questions and summaries help patients understand next steps (e.g., "You need to be seen within an hour" vs. vague instructions).

Importantly, AI does **not replace human contact** – it ensures that when a nurse or GP speaks with the patient, they can focus on empathy, reassurance, and clinical judgment rather than administrative tasks.

## A Glimpse Into the Future

AI in GP posts is still in its early stages, but the potential is vast:

- **Multi-Channel Triage:** Integration of phone, chat, and video consultations for a seamless patient experience.
- **Predictive Demand Planning:** AI forecasts surges in demand (e.g., flu season spikes) so staffing can be adjusted proactively.
- **Continuous Learning:** AI models improve over time by analyzing anonymized triage outcomes and feedback loops.

As these technologies evolve, they promise not just incremental efficiency gains, but **a reimagined model of urgent primary care** – one where speed, safety, and empathy coexist.

## MedAI's Vision: Human-Centered AI

At MedAI, our mission is clear: **support healthcare professionals with intelligent tools that free them to do what only humans can – care.** We see AI as a partner, not a replacement, helping GPs and triage nurses focus on critical tasks and human connection while technology handles the rest.

By embedding AI into NHG-compliant workflows and collaborating closely with frontline professionals, we aim to create a system where patients are assessed **faster, more accurately, and more compassionately** than ever before.

## Conclusion

The pressures on GP out-of-hours services are unlikely to ease anytime soon. But with AI triage, there's a path forward: one that maintains high clinical standards, improves patient outcomes, and restores breathing room to healthcare teams. The future of urgent primary care isn't just digital – it's **human and AI, working side by side**.

*Ready to explore how AI triage can transform your GP out-of-hours service? Contact MedAI to learn more about our human-centered approach to healthcare innovation.*`
    }
  ];

  const selectedPost = selectedBlog ? blogPosts.find(post => post.id === selectedBlog) : null;

  if (selectedPost) {
    return (
      <div className="fixed inset-0 z-50 bg-background overflow-y-auto">
        {/* Header */}
        <div className="bg-deep-purple text-white py-8 sticky top-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 mb-6"
              onClick={() => setSelectedBlog(null)}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {selectedPost.title}
            </h1>
            <div className="flex items-center space-x-4 text-white/80">
              <span>{selectedPost.category}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
              <span>•</span>
              <span>{selectedPost.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            {selectedPost.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="mb-2" 
                      dangerouslySetInnerHTML={{
                        __html: paragraph.replace('- ', '')
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/&lt;strong&gt;(.*?)&lt;\/strong&gt;/g, '<strong>$1</strong>')
                      }}
                  />
                );
              }
              if (paragraph.trim() === '') {
                return <br key={index} />;
              }
              if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                return (
                  <div key={index} className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg mt-8 mb-8">
                    <p className="text-sm italic text-muted-foreground">
                      {paragraph.replace(/^\*/, '').replace(/\*$/, '')}
                    </p>
                  </div>
                );
              }
              return (
                <p key={index} className="mb-4 leading-relaxed" 
                   dangerouslySetInnerHTML={{
                     __html: paragraph
                       .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                       .replace(/&lt;strong&gt;(.*?)&lt;\/strong&gt;/g, '<strong>$1</strong>')
                   }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-accent-foreground">
            <BookOpen className="w-4 h-4 mr-2" />
            Insights & Knowledge
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest 
            <span className="block bg-gradient-primary bg-clip-text text-transparent pb-1">
              Insights
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights on AI in healthcare, implementation guides, 
            and clinical research to help you make informed decisions about intelligent triage technology.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="border-0 shadow-soft hover:shadow-glow transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedBlog(post.id)}
            >
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
                  {post.summary}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
