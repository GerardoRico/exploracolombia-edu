import Hero from "@/components/Hero";
import ColombiaMap from "@/components/ColombiaMap";
import ProgramsSection from "@/components/ProgramsSection";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProgramsSection />
      <ColombiaMap />
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
