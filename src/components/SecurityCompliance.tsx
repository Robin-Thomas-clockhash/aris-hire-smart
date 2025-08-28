import { Shield, Lock, Key, FileCheck, UserCheck, Eye } from "lucide-react";

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "GDPR-Compliant",
      description: "Full compliance with European data protection regulations"
    },
    {
      icon: Lock,
      title: "Role-Based Access",
      description: "Granular permissions and access control for your team"
    },
    {
      icon: Key,
      title: "Encryption",
      description: "Data encrypted in transit and at rest using industry standards"
    },
    {
      icon: FileCheck,
      title: "Audit Logging",
      description: "Complete audit trails for all system activities and changes"
    },
    {
      icon: UserCheck,
      title: "SSO Options",
      description: "Single sign-on integration with your existing systems"
    },
    {
      icon: Eye,
      title: "Data Transparency",
      description: "Clear data usage policies and candidate consent management"
    }
  ];

  const certifications = [
    "SOC 2 Type II",
    "ISO 27001",
    "GDPR Ready",
    "CCPA Compliant"
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Security & 
              <span className="gradient-primary bg-clip-text text-transparent"> Compliance</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Enterprise-grade security that protects your data and your candidates' privacy
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 shadow-card-custom hover:shadow-card-hover-custom transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-heading-custom mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-primary/10 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Certifications & Standards
              </h3>
              <p className="text-text-muted">
                We maintain the highest security and compliance standards
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="text-center p-4 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-semibold text-heading-custom text-sm">
                    {cert}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Promise */}
          <div className="text-center">
            <div className="bg-card rounded-2xl p-8 shadow-card-custom border border-primary/10 max-w-4xl mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Your Data, Your Control
              </h3>
              
              <p className="text-lg text-text-muted mb-6 leading-relaxed">
                We believe in transparent, secure, and compliant recruitment technology. 
                Your candidate data is protected with enterprise-grade security, 
                and you maintain full control and ownership.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Security Overview
                </button>
                <button className="px-8 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  Download Security Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;