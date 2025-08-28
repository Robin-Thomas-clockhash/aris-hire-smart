import { Check, X } from "lucide-react";

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Filtering Method",
      ats: "Keyword matching",
      aris: "Contextual analysis",
      atsIcon: X,
      arisIcon: Check
    },
    {
      category: "Signal Used", 
      ats: "Resume keywords only",
      aris: "Skills, projects, growth patterns",
      atsIcon: X,
      arisIcon: Check
    },
    {
      category: "Candidate Experience",
      ats: "Generic, impersonal",
      aris: "Personalized, transparent",
      atsIcon: X,
      arisIcon: Check
    },
    {
      category: "Recruiter Confidence",
      ats: "Blind screening decisions",
      aris: "Data-driven insights",
      atsIcon: X,
      arisIcon: Check
    },
    {
      category: "Outcome",
      ats: "Miss qualified candidates",
      aris: "Discover hidden talent",
      atsIcon: X,
      arisIcon: Check
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              ATS vs 
              <span className="gradient-primary bg-clip-text text-transparent"> ARIS</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              See the difference that intelligent recruitment makes
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-2xl shadow-card-custom overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-muted/50">
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-heading-custom">Category</h3>
              </div>
              <div className="p-6 text-center border-x border-border">
                <h3 className="text-lg font-semibold text-destructive">Traditional ATS</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary">ARIS Intelligence</h3>
              </div>
            </div>

            {/* Table Rows */}
            {comparisons.map((comparison, index) => (
              <div
                key={comparison.category}
                className={`grid grid-cols-3 ${index !== comparisons.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/30 transition-smooth`}
              >
                {/* Category */}
                <div className="p-6">
                  <h4 className="font-semibold text-heading-custom text-center md:text-left">
                    {comparison.category}
                  </h4>
                </div>

                {/* ATS Column */}
                <div className="p-6 border-x border-border">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <comparison.atsIcon className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-text-muted text-center md:text-left">
                      {comparison.ats}
                    </span>
                  </div>
                </div>

                {/* ARIS Column */}
                <div className="p-6">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <comparison.arisIcon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-text-muted text-center md:text-left">
                      {comparison.aris}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-12">
            <div className="bg-card rounded-xl p-8 shadow-card-custom border border-primary/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                The Choice is Clear
              </h3>
              <p className="text-lg text-text-muted mb-6">
                Stop letting keyword filters hide your best talent. 
                Upgrade to ARIS — AI Recruitment Intelligence System.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Start Free Trial
                </button>
                <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  Compare Features
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;