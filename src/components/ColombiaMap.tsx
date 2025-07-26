import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Users, GraduationCap, Building } from "lucide-react";
import { toast } from "sonner";

const ColombiaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<any>(null);
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Datos de regiones educativas de Colombia
  const regionesEducativas = [
    {
      id: 'bogota',
      name: 'Bogotá D.C.',
      coordinates: [-74.0721, 4.7110],
      universidades: 45,
      estudiantes: '250,000+',
      programas: 180,
      descripcion: 'Capital educativa del país con las mejores universidades',
      destacados: ['Universidad Nacional', 'Universidad de los Andes', 'Universidad Javeriana']
    },
    {
      id: 'medellin',
      name: 'Medellín - Antioquia',
      coordinates: [-75.5636, 6.2442],
      universidades: 28,
      estudiantes: '180,000+',
      programas: 120,
      descripcion: 'Centro de innovación y tecnología',
      destacados: ['Universidad de Antioquia', 'EAFIT', 'Universidad Nacional sede Medellín']
    },
    {
      id: 'cali',
      name: 'Cali - Valle del Cauca',
      coordinates: [-76.5225, 3.4516],
      universidades: 22,
      estudiantes: '140,000+',
      programas: 95,
      descripcion: 'Hub de salud y ciencias biomédicas',
      destacados: ['Universidad del Valle', 'Universidad Icesi', 'Universidad Javeriana Cali']
    },
    {
      id: 'barranquilla',
      name: 'Barranquilla - Atlántico',
      coordinates: [-74.7813, 10.9685],
      universidades: 18,
      estudiantes: '90,000+',
      programas: 75,
      descripcion: 'Puerta de entrada del Caribe colombiano',
      destacados: ['Universidad del Norte', 'Universidad del Atlántico', 'Universidad Simón Bolívar']
    },
    {
      id: 'cartagena',
      name: 'Cartagena - Bolívar',
      coordinates: [-75.5144, 10.3997],
      universidades: 12,
      estudiantes: '55,000+',
      programas: 60,
      descripcion: 'Ciudad patrimonio con tradición educativa',
      destacados: ['Universidad de Cartagena', 'Universidad Tecnológica de Bolívar']
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.2973, 4.5709], // Centro de Colombia
        zoom: 5.5,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: false,
        }),
        'top-right'
      );

      // Agregar marcadores para cada región educativa
      regionesEducativas.forEach((region) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.backgroundImage = 'linear-gradient(135deg, hsl(210, 88%, 52%), hsl(48, 89%, 60%))';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.3)';
        el.style.cursor = 'pointer';
        el.style.transition = 'all 0.3s ease';

        el.addEventListener('mouseenter', () => {
          el.style.transform = 'scale(1.2)';
          el.style.boxShadow = '0 8px 30px rgba(33, 150, 243, 0.5)';
        });

        el.addEventListener('mouseleave', () => {
          el.style.transform = 'scale(1)';
          el.style.boxShadow = '0 4px 20px rgba(33, 150, 243, 0.3)';
        });

        el.addEventListener('click', () => {
          setSelectedRegion(region);
          map.current?.flyTo({
            center: region.coordinates as [number, number],
            zoom: 8,
            speed: 1.2,
            curve: 1.4
          });
        });

        new mapboxgl.Marker(el)
          .setLngLat(region.coordinates as [number, number])
          .addTo(map.current!);
      });

      toast("¡Mapa de Colombia cargado exitosamente!");
      setShowTokenInput(false);

    } catch (error) {
      toast.error("Error al cargar el mapa. Verifica tu token de Mapbox.");
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    } else {
      toast.error("Por favor ingresa un token válido de Mapbox");
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section id="colombia-map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Explora la Educación en
            <span className="text-primary block">Colombia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre universidades, programas académicos y oportunidades educativas 
            en cada región del país a través de nuestro mapa interactivo.
          </p>
        </div>

        {showTokenInput && (
          <Card className="max-w-md mx-auto mb-8 shadow-card">
            <CardHeader>
              <CardTitle className="text-center">Configurar Mapa</CardTitle>
              <CardDescription className="text-center">
                Ingresa tu token público de Mapbox para visualizar el mapa interactivo.
                <br />
                <a 
                  href="https://mapbox.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Obtener token gratuito aquí
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTokenSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6Ij..."
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                  className="font-mono text-sm"
                />
                <Button type="submit" className="w-full" variant="hero">
                  <MapPin className="w-4 h-4 mr-2" />
                  Cargar Mapa
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mapa */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-elegant">
              <div 
                ref={mapContainer} 
                className="w-full h-96 lg:h-[600px] bg-muted relative"
              >
                {showTokenInput && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg text-muted-foreground">
                        Configura tu token de Mapbox para comenzar
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Panel de información */}
          <div className="space-y-6">
            {selectedRegion ? (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {selectedRegion.name}
                  </CardTitle>
                  <CardDescription>
                    {selectedRegion.descripcion}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gradient-card rounded-lg">
                      <Building className="w-6 h-6 text-primary mx-auto mb-1" />
                      <div className="font-bold text-lg">{selectedRegion.universidades}</div>
                      <div className="text-sm text-muted-foreground">Universidades</div>
                    </div>
                    <div className="text-center p-3 bg-gradient-card rounded-lg">
                      <Users className="w-6 h-6 text-educational mx-auto mb-1" />
                      <div className="font-bold text-lg">{selectedRegion.estudiantes}</div>
                      <div className="text-sm text-muted-foreground">Estudiantes</div>
                    </div>
                  </div>
                  
                  <div className="text-center p-3 bg-gradient-card rounded-lg">
                    <GraduationCap className="w-6 h-6 text-accent mx-auto mb-1" />
                    <div className="font-bold text-lg">{selectedRegion.programas}</div>
                    <div className="text-sm text-muted-foreground">Programas Académicos</div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Universidades Destacadas:</h4>
                    <ul className="space-y-1">
                      {selectedRegion.destacados.map((universidad: string, index: number) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          {universidad}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Selecciona una Región</CardTitle>
                  <CardDescription>
                    Haz clic en los marcadores del mapa para ver información detallada 
                    sobre las oportunidades educativas en cada región.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Explora las regiones educativas de Colombia
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Estadísticas generales */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Educación en Colombia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Universidades</span>
                  <span className="font-bold text-primary">125+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estudiantes Activos</span>
                  <span className="font-bold text-educational">715,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Programas Disponibles</span>
                  <span className="font-bold text-accent">530+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColombiaMap;