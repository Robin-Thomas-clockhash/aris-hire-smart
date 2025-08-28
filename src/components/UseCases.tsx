import { Code, Users, Heart } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Code,
      title: "Tech Hiring",
      description: "Surface high-potential engineers whose CVs are minimal but whose code speaks volumes.",
      features: [
        "GitHub activity analysis",
        "Project complexity assessment", 
        "Technical skill detection",
        "Coding pattern recognition"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Users,
      title: "High-Volume Roles",
      description: "Scale screening without losing quality. Handle hundreds of applications intelligently.",
      features: [
        "Automated initial screening",
        "Batch candidate analysis",
        "Priority ranking system",
        "Scalable workflows"
      ],
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: Heart,
      title: "Diversity & Inclusion",
      description: "Reduce keyword bias and focus on evidence of skill and potential for growth.",
      features: [
        "Bias-free evaluation",
        "Inclusive language analysis",
        "Diverse talent discovery",
        "Fair assessment criteria"
      ],
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Perfect for Every 
              <span className="gradient-primary bg-clip-text text-transparent"> Use Case</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              ARIS adapts to your specific hiring challenges and requirements
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <useCase.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                  {useCase.title}
                </h3>
                
                <p className="text-text-muted mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {useCase.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-text-muted"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-border">
                  <button className="text-primary font-semibold hover:text-primary-hover transition-smooth text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-primary/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Ready to Transform Your Hiring?
              </h3>
              <p className="text-text-muted mb-6">
                See how ARIS can solve your specific recruitment challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;