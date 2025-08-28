import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card-custom border border-primary/10 text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 mx-auto mb-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-6 h-6 text-yellow-400 fill-current"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-heading-custom mb-8 leading-relaxed font-medium">
              "ARIS helped us uncover brilliant candidates who would've been rejected by keyword filters. 
              Our time-to-hire dropped by 50% and we're finding talent we never would have discovered before."
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              {/* Profile Photo Placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-primary/30 rounded-full"></div>
              </div>

              {/* Author Details */}
              <div className="text-center md:text-left">
                <div className="font-semibold text-heading-custom text-lg">
                  Sarah Chen
                </div>
                <div className="text-text-muted">
                  HR Director, Tech Company
                </div>
                <div className="text-sm text-text-muted mt-1">
                  Fortune 500 • 1000+ employees
                </div>
              </div>
            </div>

            {/* Company Logo Placeholder */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex justify-center items-center gap-2 text-text-muted">
                <div className="w-8 h-8 bg-primary/20 rounded"></div>
                <span className="font-medium">TechCorp</span>
              </div>
            </div>
          </div>

          {/* Additional Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-text-muted">Companies Trust ARIS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-text-muted">Candidates Processed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-text-muted">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;