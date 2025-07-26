import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  GraduationCap,
  MapPin,
  Clock
} from "lucide-react";
import { toast } from "sonner";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: '¡Hola! Soy tu asistente educativo inteligente. Puedo ayudarte a encontrar programas académicos, universidades y oportunidades educativas en Colombia. ¿En qué te puedo ayudar hoy?',
      timestamp: new Date(),
      suggestions: [
        'Buscar programas de ingeniería',
        'Universidades en Bogotá',
        'Carreras de medicina',
        'Becas disponibles'
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Base de conocimiento simulada
  const knowledgeBase = {
    programas: {
      ingenieria: {
        universidades: ['Universidad Nacional', 'Universidad de los Andes', 'EAFIT'],
        ciudades: ['Bogotá', 'Medellín', 'Cali'],
        duracion: '5 años',
        modalidades: ['Presencial', 'Virtual', 'Mixta']
      },
      medicina: {
        universidades: ['Universidad Nacional', 'Universidad Javeriana', 'Universidad del Rosario'],
        ciudades: ['Bogotá', 'Medellín', 'Cali', 'Barranquilla'],
        duracion: '6 años',
        modalidades: ['Presencial']
      },
      administracion: {
        universidades: ['Universidad de los Andes', 'EAFIT', 'Universidad Icesi'],
        ciudades: ['Bogotá', 'Medellín', 'Cali'],
        duracion: '4 años',
        modalidades: ['Presencial', 'Virtual', 'Mixta']
      }
    },
    ciudades: {
      bogota: {
        universidades: 45,
        estudiantes: '250,000+',
        caracteristicas: 'Capital educativa con mayor oferta académica'
      },
      medellin: {
        universidades: 28,
        estudiantes: '180,000+',
        caracteristicas: 'Centro de innovación y tecnología'
      },
      cali: {
        universidades: 22,
        estudiantes: '140,000+',
        caracteristicas: 'Hub de salud y ciencias biomédicas'
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('ingeniería') || message.includes('ingenieria')) {
      return `🎓 **Programas de Ingeniería en Colombia**

Las mejores opciones incluyen:
• **Universidad Nacional** - Bogotá y Medellín
• **Universidad de los Andes** - Bogotá
• **EAFIT** - Medellín

**Duración:** 5 años
**Modalidades:** Presencial, Virtual y Mixta
**Especialidades más demandadas:** Sistemas, Civil, Industrial, Mecánica

¿Te gustaría información específica sobre alguna universidad o especialidad?`;
    }
    
    if (message.includes('medicina')) {
      return `🏥 **Medicina en Colombia**

Universidades acreditadas:
• **Universidad Nacional** - Bogotá
• **Universidad Javeriana** - Bogotá y Cali
• **Universidad del Rosario** - Bogotá
• **Universidad de Antioquia** - Medellín

**Duración:** 6 años
**Modalidad:** Presencial únicamente
**Requisitos:** Excelente puntaje en Saber 11, entrevistas y pruebas específicas

¿Necesitas información sobre requisitos de admisión?`;
    }
    
    if (message.includes('bogotá') || message.includes('bogota')) {
      return `🏛️ **Educación en Bogotá D.C.**

**45 universidades** con más de **250,000 estudiantes**

**Universidades destacadas:**
• Universidad Nacional de Colombia
• Universidad de los Andes
• Universidad Javeriana
• Universidad del Rosario
• Universidad Externado

**Ventajas:**
✅ Mayor oferta académica del país
✅ Oportunidades laborales
✅ Vida cultural rica
✅ Conexiones internacionales

¿Qué programa específico te interesa en Bogotá?`;
    }
    
    if (message.includes('becas')) {
      return `💰 **Becas y Financiación Educativa**

**Opciones disponibles:**
• **Ser Pilo Paga** (Generación E)
• **Becas de excelencia académica**
• **ICETEX** - Créditos educativos
• **Becas internacionales**
• **Becas universitarias propias**

**Para aplicar necesitas:**
✅ Excelente rendimiento académico
✅ Situación socioeconómica
✅ Documentación completa
✅ Ensayos motivacionales

¿Te gustaría información específica sobre algún tipo de beca?`;
    }
    
    if (message.includes('virtual') || message.includes('online')) {
      return `💻 **Educación Virtual en Colombia**

**Universidades con programas virtuales:**
• Universidad Nacional Abierta y a Distancia (UNAD)
• Universidad Minuto de Dios (UNIMINUTO)
• Politécnico Grancolombiano
• Universidad EAN

**Ventajas:**
✅ Flexibilidad horaria
✅ Menores costos
✅ Acceso desde cualquier lugar
✅ Tecnología de vanguardia

**Programas más populares:** Administración, Sistemas, Psicología, Educación

¿Qué área de estudio te interesa en modalidad virtual?`;
    }
    
    // Respuesta por defecto
    return `Entiendo que estás buscando información educativa. Te puedo ayudar con:

🎓 **Programas académicos** (Ingeniería, Medicina, Administración, etc.)
🏛️ **Universidades por ciudad** (Bogotá, Medellín, Cali, etc.)
💰 **Becas y financiación**
💻 **Educación virtual**
📍 **Información por regiones**

¿Sobre cuál de estos temas te gustaría saber más?`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: generateBotResponse(inputMessage),
        timestamp: new Date(),
        suggestions: [
          'Más información',
          'Otras opciones',
          'Requisitos de admisión',
          'Costos y financiación'
        ]
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      toast.success("¡Respuesta generada!");
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  return (
    <section id="chat-section" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Asistente Educativo
            <span className="text-primary block">Inteligente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtén respuestas instantáneas sobre programas académicos, universidades, 
            becas y oportunidades educativas en Colombia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader className="bg-gradient-hero text-primary-foreground">
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/20 rounded-full">
                  <Sparkles className="w-6 h-6" />
                </div>
                Chat Educativo IA
                <Badge variant="secondary" className="ml-auto">
                  En línea
                </Badge>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="p-0">
              {/* Messages Area */}
              <ScrollArea className="h-96 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${
                        message.type === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.type === 'bot' && (
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-primary-foreground" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-card border shadow-sm'
                        }`}
                      >
                        <div className="whitespace-pre-wrap text-sm">
                          {message.content}
                        </div>
                        <div
                          className={`text-xs mt-2 flex items-center gap-1 ${
                            message.type === 'user'
                              ? 'text-primary-foreground/70'
                              : 'text-muted-foreground'
                          }`}
                        >
                          <Clock className="w-3 h-3" />
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                      
                      {message.type === 'user' && (
                        <div className="flex-shrink-0 w-8 h-8 bg-educational rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-educational-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex gap-3 justify-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-card border shadow-sm px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Suggestions */}
              {messages.length > 0 && messages[messages.length - 1].suggestions && !isTyping && (
                <div className="p-4 border-t bg-muted/50">
                  <div className="text-sm text-muted-foreground mb-2">Sugerencias:</div>
                  <div className="flex flex-wrap gap-2">
                    {messages[messages.length - 1].suggestions?.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="text-xs"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Pregunta sobre programas, universidades, becas..."
                    disabled={isTyping}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    variant="hero"
                    size="icon"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Programas Académicos</h3>
                <p className="text-sm text-muted-foreground">
                  Información detallada sobre carreras y especializaciones
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-educational mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ubicaciones</h3>
                <p className="text-sm text-muted-foreground">
                  Universidades por ciudad y región
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card">
              <CardContent className="p-6">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">IA Avanzada</h3>
                <p className="text-sm text-muted-foreground">
                  Respuestas inteligentes y personalizadas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;