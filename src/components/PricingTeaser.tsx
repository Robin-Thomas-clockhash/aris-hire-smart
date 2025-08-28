import { Check, ArrowRight } from "lucide-react";

const PricingTeaser = () => {
  const earlyAccessFeatures = [
    "Full ARIS dashboard access",
    "AI-powered candidate analysis",
    "Unlimited job postings",
    "Basic integrations",
    "Email support"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Early Access 
              <span className="gradient-primary bg-clip-text text-transparent"> Pricing</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Be among the first to experience the future of recruitment intelligence
            </p>
          </div>

          {/* Pricing Card */}
          <div className="relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl transform rotate-1"></div>
            
            <div className="relative bg-card rounded-2xl p-8 md:p-12 shadow-card-custom border border-primary/10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Limited Time Offer
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left Side - Pricing */}
                <div>
                  <h3 className="text-3xl font-bold text-heading-custom mb-4">
                    Early Access
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-bold text-primary">Free</span>
                      <span className="text-text-muted">for 90 days</span>
                    </div>
                    <p className="text-text-muted">
                      Full access to ARIS during our beta period
                    </p>
                  </div>

                  <div className="space-y-2 mb-8">
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-text-muted">No setup fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-text-muted">No contracts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-text-muted">Priority support</span>
                    </div>
                  </div>

                  <button className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth text-lg group">
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Right Side - Features */}
                <div>
                  <h4 className="text-xl font-semibold text-heading-custom mb-6">
                    What's Included:
                  </h4>
                  
                  <ul className="space-y-4">
                    {earlyAccessFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="text-center mt-12">
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-heading-custom mb-2">
                Need Enterprise Features?
              </h4>
              <p className="text-text-muted mb-4">
                Custom integrations, dedicated support, and advanced analytics
              </p>
              <button className="text-primary font-semibold hover:text-primary-hover transition-smooth">
                Contact Sales →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;