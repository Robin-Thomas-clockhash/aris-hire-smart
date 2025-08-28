import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const trustLogos = [
    "Microsoft", "Google", "Amazon", "Meta", "Apple"
  ];

  return (
    <section className="pt-20 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-heading-custom mb-6 leading-tight animate-fade-in">
              Recruitment Reinvented
              <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                with ARIS
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-muted max-w-4xl mx-auto mb-8 leading-relaxed">
              ARIS — the AI Recruitment Intelligence System that goes beyond outdated ATS. 
              Smarter candidate selection, better hiring decisions, and happier candidates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl" className="animate-fade-in">
                Start Free Trial
              </Button>
              <Button variant="hero-outline" size="xl" className="animate-fade-in">
                Book a Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mb-16">
              <p className="text-sm text-text-muted mb-6 uppercase tracking-wider">
                Trusted by leading companies
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {trustLogos.map((logo, index) => (
                  <div
                    key={logo}
                    className="text-lg font-semibold text-text-muted hover:text-primary transition-smooth cursor-pointer"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-hero animate-float">
              <img
                src={heroDashboard}
                alt="ARIS dashboard showing AI-ranked candidates with context analysis and skill insights"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-glow hidden lg:block" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-glow hidden lg:block" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;