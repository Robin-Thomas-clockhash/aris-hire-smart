import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CategoryDefinition from "@/components/CategoryDefinition";
import ValuePropositions from "@/components/ValuePropositions";
import HowItWorks from "@/components/HowItWorks";
import ComparisonTable from "@/components/ComparisonTable";
import ImpactMetrics from "@/components/ImpactMetrics";
import Testimonial from "@/components/Testimonial";
import UseCases from "@/components/UseCases";
import SecurityCompliance from "@/components/SecurityCompliance";
import PricingTeaser from "@/components/PricingTeaser";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <CategoryDefinition />
        <ValuePropositions />
        <HowItWorks />
        <ComparisonTable />
        <ImpactMetrics />
        <Testimonial />
        <UseCases />
        <SecurityCompliance />
        <PricingTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
