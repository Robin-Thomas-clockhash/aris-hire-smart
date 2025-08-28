import { ArrowRight, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Banner */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            
            <div className="relative bg-card rounded-2xl p-8 md:p-16 shadow-card-custom border border-primary/10 text-center">
              {/* Sparkle Icon */}
              <div className="w-20 h-20 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center animate-glow">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>

              {/* Headline */}
              <h2 className="text-4xl md:text-6xl font-bold text-heading-custom mb-6 leading-tight">
                Ready to Experience 
                <br />
                <span className="gradient-primary bg-clip-text text-transparent">
                  ARIS?
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-12 leading-relaxed">
                Don't let keyword filters hide your best talent. 
                <br />
                Upgrade to ARIS — AI Recruitment Intelligence System.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <button className="px-10 py-5 bg-primary text-primary-foreground rounded-xl font-bold text-lg hover:bg-primary-hover hover:scale-105 transition-smooth shadow-card-hover-custom group">
                  Book a Demo
                  <ArrowRight className="w-6 h-6 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-10 py-5 border-2 border-primary/30 text-primary rounded-xl font-bold text-lg hover:bg-primary/5 hover:border-primary transition-smooth">
                  Start Free Trial
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">90 Days</div>
                  <div className="text-text-muted text-sm">Free Trial Period</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">5 Min</div>
                  <div className="text-text-muted text-sm">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-text-muted text-sm">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Demo Card */}
            <div className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth border border-primary/5">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                See ARIS in Action
              </h3>
              <p className="text-text-muted mb-6">
                Book a personalized demo and see how ARIS can transform your recruitment process in just 30 minutes.
              </p>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                Schedule Demo
              </button>
            </div>

            {/* Trial Card */}
            <div className="bg-card rounded-xl p-8 shadow-card-custom hover:shadow-card-hover-custom transition-smooth border border-primary/5">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Start Your Free Trial
              </h3>
              <p className="text-text-muted mb-6">
                Get immediate access to ARIS with a 90-day free trial. No credit card required. Full access to all features.
              </p>
              <button className="w-full px-6 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                Try ARIS Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;