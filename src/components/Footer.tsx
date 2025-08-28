import { useState } from "react";
import { ArrowRight, Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const footerLinks = {
    Product: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Integrations", href: "#integrations" },
      { label: "API Documentation", href: "#api" }
    ],
    Solutions: [
      { label: "Tech Hiring", href: "#tech-hiring" },
      { label: "High-Volume Recruitment", href: "#high-volume" },
      { label: "Diversity & Inclusion", href: "#diversity" },
      { label: "Enterprise", href: "#enterprise" }
    ],
    Security: [
      { label: "Data Protection", href: "#data-protection" },
      { label: "Compliance", href: "#compliance" },
      { label: "Security Overview", href: "#security" },
      { label: "Privacy Policy", href: "#privacy" }
    ],
    Resources: [
      { label: "Blog", href: "#blog" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Documentation", href: "#docs" },
      { label: "Support", href: "#support" }
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Press Kit", href: "#press" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Newsletter Section */}
          <div className="bg-section rounded-2xl p-8 mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold text-heading-custom mb-4">
                Stay Updated with ARIS
              </h3>
              <p className="text-text-muted mb-6">
                Get the latest insights on AI recruitment intelligence, product updates, and industry trends.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth group"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-heading-custom mb-4">
                  Alphainterface
                </h4>
                <p className="text-text-muted leading-relaxed mb-6">
                  We're building ARIS — the AI Recruitment Intelligence System that goes beyond outdated ATS. 
                  Smarter candidate selection, better hiring decisions, and happier candidates.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-text-muted hover:text-primary hover:bg-primary/10 transition-smooth"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="font-semibold text-heading-custom mb-4">
                  {category}
                </h5>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-text-muted hover:text-primary transition-smooth text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-text-muted text-sm">
                © 2024 Alphainterface. All rights reserved.
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#terms" className="text-text-muted hover:text-primary transition-smooth">
                  Terms of Service
                </a>
                <a href="#privacy" className="text-text-muted hover:text-primary transition-smooth">
                  Privacy Policy
                </a>
                <a href="#cookies" className="text-text-muted hover:text-primary transition-smooth">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;