import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const ImpactMetrics = () => {
  const metrics = [
    {
      icon: Clock,
      value: "80%",
      change: "↓",
      label: "Screening Time",
      description: "Faster candidate evaluation",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      value: "2-3x",
      label: "More Qualified Shortlists",
      description: "Better candidate matches",
      color: "text-blue-500"
    },
    {
      icon: Users,
      value: "30-40%",
      change: "↑",
      label: "Offer Acceptance",
      description: "When using ARIS recommendations",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      value: "100%",
      label: "GDPR-Ready Compliance",
      description: "Built-in data protection",
      color: "text-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Proven 
              <span className="gradient-primary bg-clip-text text-transparent"> Impact</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Real results from organizations using ARIS
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>

                <div className="mb-4">
                  <div className="text-4xl font-bold text-heading-custom mb-2 flex items-center justify-center">
                    {metric.change && (
                      <span className={`text-2xl mr-2 ${metric.color}`}>
                        {metric.change}
                      </span>
                    )}
                    {metric.value}
                  </div>
                  <h3 className="text-lg font-semibold text-heading-custom">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-text-muted text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="text-center">
            <div className="bg-muted/50 rounded-xl p-6 max-w-4xl mx-auto">
              <p className="text-sm text-text-muted">
                <strong>Note:</strong> These are example metrics based on typical ARIS implementations. 
                Actual results may vary and are configurable based on your specific requirements and usage patterns.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-primary/10 max-w-3xl mx-auto">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                See Your Impact
              </h3>
              <p className="text-text-muted mb-6">
                Get a personalized ROI analysis for your recruitment process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Calculate ROI
                </button>
                <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;