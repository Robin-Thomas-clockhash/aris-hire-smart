import { FileText, Link, Brain, BarChart3, MessageCircle } from "lucide-react";
import howItWorksFlow from "@/assets/how-it-works-flow.jpg";

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Import Job Description",
      description: "ARIS auto-generates criteria from your job requirements"
    },
    {
      icon: Link,
      number: "02", 
      title: "Unique Application Link",
      description: "Candidates apply through personalized, branded experience"
    },
    {
      icon: Brain,
      number: "03",
      title: "AI Analysis",
      description: "ARIS analyzes CVs, projects, patterns, and growth signals"
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Intelligent Shortlists",
      description: "Ranked candidates with insights appear in your dashboard"
    },
    {
      icon: MessageCircle,
      number: "05",
      title: "Guided Communication",
      description: "Improved candidate experience through personalized journeys"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              How 
              <span className="gradient-primary bg-clip-text text-transparent"> ARIS </span>
              Works
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Five simple steps to transform your recruitment process
            </p>
          </div>

          {/* Flow Visual */}
          <div className="mb-16 rounded-2xl overflow-hidden shadow-card-custom">
            <img
              src={howItWorksFlow}
              alt="Five-step ARIS workflow: job description input, application link creation, AI analysis, shortlist generation, and candidate communication"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Connection Line - Hidden on mobile */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Step Circle */}
                  <div className="relative mx-auto w-20 h-20 bg-card rounded-full shadow-card-custom border-4 border-primary/20 flex items-center justify-center mb-6 group hover:border-primary/40 transition-smooth">
                    <step.icon className="w-8 h-8 text-primary" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <h3 className="text-lg font-semibold text-heading-custom mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth text-lg">
                See ARIS in Action
              </button>
              <button className="px-8 py-4 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;