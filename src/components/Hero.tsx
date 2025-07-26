import { Button } from "@/components/ui/button";
import { GraduationCap, MapPin, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  const scrollToMap = () => {
    document.getElementById('colombia-map')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToChat = () => {
    document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Educación en Colombia" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center gap-2 bg-card/20 backdrop-blur-sm border border-primary-glow/30 rounded-full px-6 py-3 mb-8">
            <GraduationCap className="w-5 h-5 text-accent" />
            <span className="text-primary-foreground font-medium">
              Plataforma Educativa de Colombia
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground mb-8 leading-tight">
            Descubre tu
            <span className="text-accent block">
              Futuro Educativo
            </span>
            en Colombia
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Explora programas académicos, universidades y oportunidades educativas 
            a través de nuestro mapa interactivo y asistente inteligente.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToMap}
              className="group"
            >
              <MapPin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Explorar Mapa Interactivo
            </Button>
            
            <Button 
              variant="accent" 
              size="xl" 
              onClick={scrollToChat}
              className="group"
            >
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Consultar con IA
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Programas Académicos</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-primary-foreground/80">Universidades</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-glow/20">
              <div className="text-3xl font-bold text-accent mb-2">32</div>
              <div className="text-primary-foreground/80">Departamentos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;