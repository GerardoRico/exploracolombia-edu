import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ExternalLink
} from "lucide-react";

const Footer = () => {
  const enlaces = {
    programas: [
      { nombre: "Ingeniería", href: "#" },
      { nombre: "Medicina", href: "#" },
      { nombre: "Administración", href: "#" },
      { nombre: "Diseño", href: "#" },
      { nombre: "Derecho", href: "#" }
    ],
    universidades: [
      { nombre: "Universidad Nacional", href: "#" },
      { nombre: "Universidad de los Andes", href: "#" },
      { nombre: "Universidad Javeriana", href: "#" },
      { nombre: "EAFIT", href: "#" },
      { nombre: "Universidad del Rosario", href: "#" }
    ],
    recursos: [
      { nombre: "Guía de Admisiones", href: "#" },
      { nombre: "Becas y Financiación", href: "#" },
      { nombre: "Educación Virtual", href: "#" },
      { nombre: "Blog Educativo", href: "#" },
      { nombre: "Centro de Ayuda", href: "#" }
    ],
    empresa: [
      { nombre: "Sobre Nosotros", href: "#" },
      { nombre: "Equipo", href: "#" },
      { nombre: "Contacto", href: "#" },
      { nombre: "Términos y Condiciones", href: "#" },
      { nombre: "Política de Privacidad", href: "#" }
    ]
  };

  const redesSociales = [
    { icono: Facebook, href: "#", nombre: "Facebook" },
    { icono: Twitter, href: "#", nombre: "Twitter" },
    { icono: Instagram, href: "#", nombre: "Instagram" },
    { icono: Linkedin, href: "#", nombre: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Mantente Informado
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Recibe las últimas noticias sobre programas académicos, becas y 
              oportunidades educativas en Colombia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="bg-primary-foreground text-foreground border-0 flex-1"
              />
              <Button variant="secondary" size="lg">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduColombia</span>
              </div>
              <p className="text-muted-foreground mb-6">
                La plataforma líder para descubrir oportunidades educativas 
                en Colombia. Conectamos estudiantes con su futuro académico.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bogotá, Colombia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+57 (1) 234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@educolombia.co</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Programas</h4>
              <ul className="space-y-3">
                {enlaces.programas.map((enlace, index) => (
                  <li key={index}>
                    <a 
                      href={enlace.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Universidades</h4>
              <ul className="space-y-3">
                {enlaces.universidades.map((enlace, index) => (
                  <li key={index}>
                    <a 
                      href={enlace.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {enlace.nombre}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Recursos</h4>
              <ul className="space-y-3">
                {enlaces.recursos.map((enlace, index) => (
                  <li key={index}>
                    <a 
                      href={enlace.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Empresa</h4>
              <ul className="space-y-3">
                {enlaces.empresa.map((enlace, index) => (
                  <li key={index}>
                    <a 
                      href={enlace.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Social Media */}
              <div className="mt-6">
                <h5 className="font-medium mb-3">Síguenos</h5>
                <div className="flex gap-3">
                  {redesSociales.map((red, index) => {
                    const IconComponent = red.icono;
                    return (
                      <a
                        key={index}
                        href={red.href}
                        aria-label={red.nombre}
                        className="p-2 bg-muted/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-muted/20" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 EduColombia. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;