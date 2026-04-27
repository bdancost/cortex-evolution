import { Header } from "../components/layout/Header";
import { HeroSection } from "../components/sections/HeroSection";
import { ServicesSection } from "../components/sections/ServicesSection";

export function Home() {
  return (
    <div className="bg-secondary text-text-soft min-h-screen selection:bg-accent selection:text-primary overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
