import { Brain, BarChart3, Heart, TrendingUp } from "lucide-react";

const ValuePropositions = () => {
  const valueProps = [
    {
      icon: Brain,
      title: "Intelligent Candidate Selection",
      description: "Contextual analysis ranks candidates beyond keywords.",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: BarChart3,
      title: "Decision Support for Recruiters",
      description: "Strengths, risks, skills match, culture indicators.",
      gradient: "from-green-500/10 to-blue-500/10"
    },
    {
      icon: Heart,
      title: "Candidate-First Experience",
      description: "Personalized, transparent, and guided journeys.",
      gradient: "from-pink-500/10 to-orange-500/10"
    },
    {
      icon: TrendingUp,
      title: "Improved Offer Acceptance",
      description: "Better fit → better acceptance and retention.",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Why Choose 
              <span className="gradient-primary bg-clip-text text-transparent"> ARIS</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Four core capabilities that transform your recruitment process
            </p>
          </div>

          {/* Value Prop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={prop.title}
                className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${prop.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                  <prop.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-heading-custom mb-4 leading-tight">
                  {prop.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-primary/10">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-text-muted mb-6">
                See how ARIS transforms recruitment intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;