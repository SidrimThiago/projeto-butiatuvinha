"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Shield, Heart, BookOpen, Globe } from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export function About() {
  const valores = [
    {
      icon: Building,
      title: "Gestão Municipal",
      description: "Administrado pela Prefeitura de Curitiba, garantindo qualidade e continuidade na educação infantil."
    },
    {
      icon: Users,
      title: "Inclusão Social",
      description: "Atendimento a todas as crianças da comunidade, promovendo igualdade de oportunidades educacionais."
    },
    {
      icon: Heart,
      title: "Cuidado Integral",
      description: "Desenvolvimento físico, cognitivo, social e emocional em ambiente seguro e acolhedor."
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Ambiente protegido com profissionais qualificados e protocolos adequados de segurança."
    },
    {
      icon: BookOpen,
      title: "Educação de Qualidade",
      description: "Currículo baseado nas diretrizes nacionais para educação infantil, respeitando as fases de desenvolvimento."
    },
    {
      icon: Globe,
      title: "Diversidade Cultural",
      description: "Acolhimento a famílias diversas, incluindo crianças de diferentes origens e necessidades especiais."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-linear-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Building className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Nossa Missão
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Educação Infantil
            <span className="text-primary"> Municipal de Qualidade</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            O CMEI Butiatuvinha é parte da rede municipal de educação de Curitiba,
            oferecendo educação infantil gratuita e de qualidade para crianças
            de 4 meses a 5 anos no bairro Butiatuvinha.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://placehold.co/1080x720/14532d/FFFFFF/png?text=Sala+de+Aula+CMEI"
                alt="Sala de aula moderna com tecnologia educacional"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            {/* Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">157</div>
                    <div className="text-xs text-muted-foreground">Alunos atendidos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-xs text-muted-foreground">Salas de aula</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Nossos Diferenciais
            </h3>

            <p className="text-muted-foreground">
              Como parte da rede municipal de Curitiba, oferecemos educação infantil
              gratuita e de qualidade, seguindo as melhores práticas pedagógicas
              e as diretrizes nacionais para primeira infância.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Localização Central</h4>
                  <p className="text-sm text-muted-foreground">
                    Estrategicamente localizado no bairro Butiatuvinha para atender a comunidade local
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Recursos Tecnológicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Computadores, tablets e internet para apoio às atividades pedagógicas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Equipe Especializada</h4>
                  <p className="text-sm text-muted-foreground">
                    Profissionais qualificados em educação infantil e apoio pedagógico
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="mt-6">
              Saiba Mais
            </Button>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valores.map((valor, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <valor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-foreground">
                      {valor.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {valor.description}
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