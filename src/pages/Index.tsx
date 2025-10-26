import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
