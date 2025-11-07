"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Wifi, 
  Camera, 
  Thermometer, 
  Leaf,
  Heart,
  BookOpen,
  Utensils,
  Music,
  Gamepad2,
  TreePine,
  Droplets,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export function Structure() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const espacos = [
    {
      title: "6 Salas de Aula",
      description: "Ambientes adaptados para educação infantil com recursos pedagógicos",
      image: "https://images.unsplash.com/photo-1748848597565-0b7bed80a849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwa2lkc3xlbnwxfHx8fDE3NTc4MTE4MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Mobiliário adequado", "Material pedagógico", "Ventilação natural", "Espaço para 157 alunos"]
    },
    {
      title: "Sala de Leitura",
      description: "Espaço dedicado ao desenvolvimento da linguagem e imaginação",
      image: "https://images.unsplash.com/photo-1733671805619-1a1563c006bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBsaWJyYXJ5JTIwY2hpbGRyZW58ZW58MXx8fHwxNzU3ODExOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Acervo infantil", "Contação de histórias", "Atividades de leitura", "Ambiente acolhedor"]
    },
    {
      title: "Cozinha e Refeitório",
      description: "Preparo de alimentação escolar balanceada e nutritiva",
      image: "https://images.unsplash.com/photo-1572461354052-0105fe842087?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYXJjaHwxfHxzY2hvb2wlMjBjYWZldGVyaWElMjBoZWFsdGh5JTIwZm9vZHxlbnwxfHx8fDE3NTc4MTE5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["3 profissionais de alimentação", "Cardápio balanceado", "Cozinha equipada", "Higiene rigorosa"]
    },
    {
      title: "Área Verde e Pátios",
      description: "Espaços ao ar livre para recreação e contato com a natureza",
      image: "https://images.unsplash.com/photo-1571157860025-39e603a533df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNsYXJjaHwxfHxzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc1NzgxMTkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Pátio coberto", "Pátio descoberto", "Área verde", "Recreação supervisionada"]
    }
  ];

  const diferenciais = [
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Infraestrutura adequada às normas de segurança para educação infantil",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Wifi,
      title: "Recursos Tecnológicos",
      description: "Internet, computadores desktop, tablets e equipamentos audiovisuais",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Thermometer,
      title: "Ventilação Natural",
      description: "Ambientes arejados e adequados ao clima de Curitiba",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Leaf,
      title: "Área Verde",
      description: "Espaços verdes para contato com a natureza e atividades ao ar livre",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Camera,
      title: "Administração Municipal",
      description: "Gestão transparente seguindo diretrizes da Secretaria de Educação",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Heart,
      title: "Equipe Qualificada",
      description: "Profissionais especializados em educação infantil e apoio pedagógico",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  const ambientes = [
    { icon: BookOpen, name: "6 Salas de Aula", description: "Para todas as idades" },
    { icon: Utensils, name: "Cozinha Equipada", description: "Alimentação escolar" },
    { icon: Music, name: "Sala Multiuso", description: "Atividades diversas" },
    { icon: Gamepad2, name: "Pátio Coberto", description: "Recreação protegida" },
    { icon: TreePine, name: "Área Verde", description: "Contato com natureza" },
    { icon: Droplets, name: "Pátio Descoberto", description: "Atividades ao ar livre" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % espacos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + espacos.length) % espacos.length);
  };

  return (
    <section id="estrutura" className="py-20 bg-linear-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Shield className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Nossa Estrutura
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Infraestrutura <span className="text-primary">Adequada</span> 🏫
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Estrutura física preparada para atender 157 alunos com segurança e qualidade, 
            seguindo as normas municipais para centros de educação infantil.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="relative mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={espacos[currentImageIndex].image}
              alt={espacos[currentImageIndex].title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Overlay with info */}
            <div className="absolute inset-0 gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {espacos[currentImageIndex].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {espacos[currentImageIndex].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {espacos[currentImageIndex].features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center space-x-2 mt-4">
            {espacos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Ambientes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ambientes.map((ambiente, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <ambiente.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {ambiente.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {ambiente.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diferenciais */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Diferenciais da Nossa Estrutura
            </h3>
            <p className="text-muted-foreground">
              Investimos constantemente em melhorias para oferecer o melhor ambiente 
              educacional para seu filho.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${diferencial.color}`}>
                  <diferencial.icon className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground">
                    {diferencial.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {diferencial.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg">
              Conhecer a Escola
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}