"use client";

import { Button } from '../ui/button';
import { ArrowRight, Users, GraduationCap, Heart, Building } from 'lucide-react';
import { ImageWithFallback } from '../shared/ImageWithFallback';
import Image from 'next/image';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-linear-to-br from-white via-accent/20 to-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full">
                <Image src="/images/logo-prefeitura.png" alt="Prefeitura de Curitiba" height={16} width={16} className="mr-2" />
                <span className="text-sm text-primary font-medium">
                  Educação Municipal de Qualidade
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                CMEI{' '}
                <span className="text-primary">Butiatuvinha</span>{' '}
                💛
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Centro Municipal de Educação Infantil dedicado ao desenvolvimento
                integral das crianças no bairro Butiatuvinha, oferecendo cuidado
                e educação de qualidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8">
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Building className="w-5 h-5 mr-2" />
                Nossa Estrutura
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">157</div>
                <div className="text-sm text-muted-foreground">Alunos atendidos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">2</div>
                <div className="text-sm text-muted-foreground">Modalidades</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">6</div>
                <div className="text-sm text-muted-foreground">Salas de aula</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://placehold.co/1080x720/14532d/FFFFFF/png?text=Sala+de+Aula+CMEI"
                alt="Crianças felizes no CMEI Butiatuvinha"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-sm font-medium">Educação Municipal</div>
                  <div className="text-xs text-muted-foreground">Butiatuvinha</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-border/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium">Creche + Pré-escola</div>
                  <div className="text-xs text-muted-foreground">Educação integral</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}