import { AlertTriangle, Frown, Clock } from "lucide-react";
import atsVsAris from "@/assets/ats-vs-aris.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Missed Talent",
      description: "Keyword filters ignore brilliant technical candidates who aren't great at CV writing."
    },
    {
      icon: Frown,
      title: "Poor Experience", 
      description: "Generic, cold flows hurt employer brand and candidate trust."
    },
    {
      icon: Clock,
      title: "Recruiter Fatigue",
      description: "Noise over signal, slow screening, unclear decisions."
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              The ATS Problem
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Outdated ATS Are Failing Recruiters
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {problems.map((problem, index) => (
              <div
                key={problem.title}
                className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-heading-custom mb-4">
                  {problem.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visual Comparison */}
          <div className="relative rounded-2xl overflow-hidden shadow-card-custom">
            <img
              src={atsVsAris}
              alt="Comparison showing ATS keyword matching versus ARIS contextual analysis revealing hidden talent"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/5 to-transparent pointer-events-none" />
            
            {/* Overlay Labels */}
            <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-lg text-sm font-medium">
              ATS: Keywords → Missed Talent
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium">
              ARIS: Context → Hidden Stars Surfaced
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;