"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Palette, Music, Users, Globe, Calculator, BookOpen, Gamepad2 } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export function Methodology() {
  const faixasEtarias = [
    {
      id: "creche",
      title: "Creche",
      age: "4 meses - 3 anos",
      description: "Cuidado e educação para bebês e crianças pequenas, com 66 matrículas",
      color: "bg-blue-100 text-blue-800",
      activities: [
        "Cuidados básicos e higiene",
        "Estimulação sensorial e motora",
        "Desenvolvimento da linguagem",
        "Brincadeiras e exploração",
        "Socialização inicial"
      ]
    },
    {
      id: "pre-escola",
      title: "Pré-Escola",
      age: "4 - 5 anos",
      description: "Preparação para o ensino fundamental, com 91 matrículas",
      color: "bg-green-100 text-green-800",
      activities: [
        "Desenvolvimento da linguagem oral e escrita",
        "Conceitos matemáticos básicos",
        "Coordenação motora fina e grossa",
        "Artes e expressão criativa",
        "Preparação para alfabetização"
      ]
    }
  ];

  const metodologias = [
    {
      icon: Brain,
      title: "Base Nacional Comum",
      description: "Seguimos as diretrizes da BNCC para educação infantil municipal"
    },
    {
      icon: Palette,
      title: "Atividades Criativas",
      description: "Arte, música e expressão para desenvolvimento integral"
    },
    {
      icon: Music,
      title: "Tecnologia Educativa",
      description: "Tablets e computadores como ferramentas de apoio pedagógico"
    },
    {
      icon: Globe,
      title: "Inclusão e Diversidade",
      description: "Acolhimento a todas as crianças, respeitando suas diferenças"
    }
  ];

  const areas = [
    {
      icon: BookOpen,
      title: "Linguagem",
      description: "Desenvolvimento da comunicação oral e escrita",
      color: "text-blue-600"
    },
    {
      icon: Calculator,
      title: "Matemática",
      description: "Raciocínio lógico através de jogos e brincadeiras",
      color: "text-green-600"
    },
    {
      icon: Palette,
      title: "Artes",
      description: "Expressão criativa e desenvolvimento estético",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Socioemocional",
      description: "Inteligência emocional e habilidades sociais",
      color: "text-orange-600"
    },
    {
      icon: Gamepad2,
      title: "Psicomotricidade",
      description: "Desenvolvimento motor e coordenação",
      color: "text-red-600"
    },
    {
      icon: Globe,
      title: "Natureza",
      description: "Consciência ambiental e sustentabilidade",
      color: "text-emerald-600"
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Brain className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Nossa Educação
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Educação Infantil <span className="text-primary">Municipal</span> 🌱
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Oferecemos educação infantil baseada nas diretrizes nacionais, 
            com cuidado integral e atividades adequadas para cada faixa etária.
          </p>
        </div>

        {/* Metodologias Aplicadas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metodologias.map((metodologia, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metodologia.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {metodologia.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metodologia.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Faixas Etárias */}
        <div className="bg-muted/30 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Turmas por Faixa Etária
            </h3>
            <p className="text-muted-foreground">
              Cada idade tem suas necessidades específicas. Nosso currículo é cuidadosamente 
              adaptado para cada fase do desenvolvimento infantil.
            </p>
          </div>

          <Tabs defaultValue="creche" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              {faixasEtarias.map((faixa) => (
                <TabsTrigger key={faixa.id} value={faixa.id} className="text-xs md:text-sm">
                  {faixa.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {faixasEtarias.map((faixa) => (
              <TabsContent key={faixa.id} value={faixa.id}>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div>
                      <Badge className={`${faixa.color} mb-3`}>
                        {faixa.age}
                      </Badge>
                      <h4 className="text-xl font-bold text-foreground mb-2">
                        {faixa.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {faixa.description}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3">
                        Principais Atividades:
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {faixa.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1640095108893-a1486543c5e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwb3V0ZG9vciUyMG5hdHVyZXxlbnwxfHx8fDE3NTc4MTE4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt={`Crianças do ${faixa.title} em atividade educativa`}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Áreas de Desenvolvimento */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Áreas de Desenvolvimento
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos o desenvolvimento integral da criança através de diferentes 
            áreas do conhecimento, sempre de forma lúdica e significativa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl border border-border/50 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                    <area.icon className={`w-6 h-6 ${area.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      {area.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}