const CategoryDefinition = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-heading-custom mb-8">
            Not an ATS. 
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">
              A New Category.
            </span>
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card-custom border border-primary/10">
            <p className="text-xl md:text-2xl text-text-muted leading-relaxed mb-8">
              We're not matching keywords. We're not an ATS. We're <strong className="text-primary font-semibold">ARIS — AI Recruitment Intelligence System</strong>.
            </p>
            
            <p className="text-lg text-text-muted leading-relaxed">
              ARIS understands context, skills, trajectory, and fit to reveal candidates traditional systems overlook.
            </p>
          </div>

          {/* Key Differentiators */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-heading-custom mb-4 flex items-center">
                <span className="w-2 h-2 bg-destructive rounded-full mr-3"></span>
                Traditional ATS
              </h3>
              <ul className="space-y-3 text-text-muted">
                <li>• Keyword matching</li>
                <li>• Surface-level filtering</li>
                <li>• Miss qualified candidates</li>
                <li>• Generic workflows</li>
              </ul>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-semibold text-heading-custom mb-4 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                ARIS Intelligence
              </h3>
              <ul className="space-y-3 text-text-muted">
                <li>• Context understanding</li>
                <li>• Deep skill analysis</li>
                <li>• Uncover hidden talent</li>
                <li>• Personalized experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDefinition;