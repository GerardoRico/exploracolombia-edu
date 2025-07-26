import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Code, 
  Heart, 
  Building, 
  Palette, 
  Calculator,
  Globe,
  ArrowRight,
  Clock,
  MapPin,
  Users
} from "lucide-react";
import programsImage from "@/assets/programs-icons.jpg";

const ProgramsSection = () => {
  const programas = [
    {
      id: 1,
      categoria: "Ingeniería",
      titulo: "Ingeniería de Sistemas",
      descripcion: "Desarrollo de software, inteligencia artificial y transformación digital",
      icono: Code,
      duracion: "5 años",
      modalidad: "Presencial/Virtual",
      universidades: 28,
      empleabilidad: "95%",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      categoria: "Salud",
      titulo: "Medicina",
      descripcion: "Formación integral en ciencias médicas y atención en salud",
      icono: Heart,
      duracion: "6 años",
      modalidad: "Presencial",
      universidades: 15,
      empleabilidad: "98%",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      id: 3,
      categoria: "Negocios",
      titulo: "Administración de Empresas",
      descripcion: "Liderazgo empresarial, gestión estratégica y emprendimiento",
      icono: Building,
      duracion: "4 años",
      modalidad: "Presencial/Virtual",
      universidades: 35,
      empleabilidad: "92%",
      color: "text-educational",
      bgColor: "bg-educational/10"
    },
    {
      id: 4,
      categoria: "Arte y Diseño",
      titulo: "Diseño Gráfico",
      descripcion: "Creatividad visual, branding y comunicación digital",
      icono: Palette,
      duracion: "4 años",
      modalidad: "Presencial",
      universidades: 22,
      empleabilidad: "88%",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 5,
      categoria: "Ciencias",
      titulo: "Ingeniería Civil",
      descripcion: "Infraestructura, construcción sostenible y desarrollo urbano",
      icono: Calculator,
      duracion: "5 años",
      modalidad: "Presencial",
      universidades: 25,
      empleabilidad: "94%",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 6,
      categoria: "Humanidades",
      titulo: "Relaciones Internacionales",
      descripcion: "Diplomacia, comercio internacional y cooperación global",
      icono: Globe,
      duracion: "4 años",
      modalidad: "Presencial/Virtual",
      universidades: 18,
      empleabilidad: "90%",
      color: "text-educational",
      bgColor: "bg-educational/10"
    }
  ];

  const estadisticas = [
    { label: "Programas Disponibles", valor: "530+", icono: GraduationCap },
    { label: "Universidades", valor: "125+", icono: Building },
    { label: "Estudiantes Activos", valor: "715K+", icono: Users },
    { label: "Ciudades", valor: "32", icono: MapPin }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Programas Académicos
            <span className="text-primary block">Destacados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubre las carreras más demandadas y con mejor proyección profesional 
            en el mercado laboral colombiano.
          </p>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {estadisticas.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-hero rounded-full mb-3">
                  <stat.icono className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.valor}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programas.map((programa) => {
            const IconComponent = programa.icono;
            return (
              <Card key={programa.id} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-full ${programa.bgColor} mb-4`}>
                      <IconComponent className={`w-6 h-6 ${programa.color}`} />
                    </div>
                    <Badge variant="outline">{programa.categoria}</Badge>
                  </div>
                  <CardTitle className="text-xl">{programa.titulo}</CardTitle>
                  <CardDescription className="text-sm">
                    {programa.descripcion}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        Duración
                      </span>
                      <span className="font-medium">{programa.duracion}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <Building className="w-4 h-4" />
                        Universidades
                      </span>
                      <span className="font-medium">{programa.universidades}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Modalidad</span>
                      <span className="font-medium">{programa.modalidad}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Empleabilidad</span>
                      <span className="font-bold text-educational">{programa.empleabilidad}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver más información
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Image */}
        <div className="bg-gradient-card rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Tu Futuro Profesional Comienza Aquí
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Más de 530 programas académicos esperan por ti en las mejores 
                universidades de Colombia. Encuentra la carrera perfecta para 
                tus objetivos profesionales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Explorar Todos los Programas
                </Button>
                <Button variant="outline" size="lg">
                  Obtener Asesoría Personalizada
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={programsImage} 
                alt="Programas educativos en Colombia" 
                className="rounded-xl shadow-elegant w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-hero/20 rounded-xl" />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-primary-foreground shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">
                ¿No encuentras lo que buscas?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Nuestro asistente IA puede ayudarte a encontrar el programa perfecto 
                para tus intereses y objetivos profesionales.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => document.getElementById('chat-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Consultar con IA
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;