import { Header } from "../components/layout/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { ProblemSection } from "../components/sections/ProblemSection";
import { BenefitsSection } from "../components/sections/BenefitsSection";
import { TeamSection } from "../components/sections/TeamSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";

export function Home() {
  return (
    <div className="bg-secondary text-text-soft min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  );
}
