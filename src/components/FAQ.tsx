import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Are you an ATS?",
      answer: "No. We're an AI Recruitment Intelligence System (ARIS). We can integrate with your existing ATS/HRIS, or run standalone. Think of us as the intelligent layer that sits on top of your current recruitment stack, providing contextual analysis and insights that traditional systems miss."
    },
    {
      question: "Do you match keywords?",
      answer: "No. ARIS evaluates context, skills signals, and patterns rather than simple keyword matching. We analyze the full picture of a candidate's experience, projects, growth trajectory, and potential fit using advanced AI that understands nuance and context."
    },
    {
      question: "Will ARIS replace my recruiters?",
      answer: "Absolutely not. ARIS assists recruiters with better insights for confident decisions. We enhance human judgment with AI-powered analysis, giving recruiters the tools and confidence to make better hiring decisions faster. Think of ARIS as your recruitment intelligence partner."
    },
    {
      question: "How does ARIS help technical hiring?",
      answer: "ARIS detects ability beyond polished CVs, surfacing hidden high-potential talent. For technical roles, we analyze GitHub activity, project complexity, coding patterns, and technical skill progression. We can identify brilliant engineers whose resumes might not pass traditional keyword filters."
    },
    {
      question: "What about data privacy?",
      answer: "GDPR-ready with encryption and strict access controls. We maintain enterprise-grade security with role-based permissions, audit logging, and transparent data usage policies. Candidates have full visibility into how their data is used, and you maintain complete control over your recruitment data."
    },
    {
      question: "How long does implementation take?",
      answer: "Fast onboarding — use our hosted dashboard or integrate via API. Most customers are up and running within 24-48 hours. Our team provides dedicated onboarding support, and our API documentation makes integration straightforward for technical teams."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-6">
              Frequently Asked 
              <span className="gradient-primary bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-xl text-text-muted max-w-3xl mx-auto">
              Get answers to common questions about ARIS
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl shadow-card-custom border border-primary/5 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  className="w-full px-8 py-6 text-left hover:bg-muted/30 transition-smooth"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-heading-custom pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openItem === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-text-muted" />
                      )}
                    </div>
                  </div>
                </button>

                {openItem === index && (
                  <div className="px-8 pb-6">
                    <div className="pt-4 border-t border-border">
                      <p className="text-text-muted leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-card rounded-xl p-8 shadow-card-custom border border-primary/10">
              <h3 className="text-xl font-semibold text-heading-custom mb-4">
                Still Have Questions?
              </h3>
              <p className="text-text-muted mb-6">
                Our team is here to help you understand how ARIS can transform your recruitment process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-smooth">
                  Schedule a Call
                </button>
                <button className="px-6 py-3 border border-primary/30 text-primary rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default FAQ;