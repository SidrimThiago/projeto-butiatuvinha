"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Users, 
  Award,
  Heart,
  BookOpen,
  Smile
} from 'lucide-react';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';

export function News() {
  const noticias = [
    {
      id: 1,
      titulo: "Lorem ipsum dolor sit amet consectetur",
      resumo: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      data: "2024-01-15",
      categoria: "Pedagogia",
      cor: "bg-blue-100 text-blue-700",
      icone: BookOpen,
      imagem: "school children learning"
    },
    {
      id: 2,
      titulo: "Ut enim ad minim veniam quis nostrud",
      resumo: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
      data: "2024-01-10",
      categoria: "Eventos",
      cor: "bg-green-100 text-green-700",
      icone: Users,
      imagem: "children playing outdoor"
    },
    {
      id: 3,
      titulo: "Sed ut perspiciatis unde omnis iste",
      resumo: "Natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa.",
      data: "2024-01-08",
      categoria: "Conquistas",
      cor: "bg-yellow-100 text-yellow-700",
      icone: Award,
      imagem: "happy children achievement"
    },
    {
      id: 4,
      titulo: "At vero eos et accusamus et iusto",
      resumo: "Odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
      data: "2024-01-05",
      categoria: "Comunidade",
      cor: "bg-pink-100 text-pink-700",
      icone: Heart,
      imagem: "children community activity"
    },
    {
      id: 5,
      titulo: "Et harum quidem rerum facilis est",
      resumo: "Expedita distinctio nam libero tempore cum soluta nobis est eligendi optio cumque nihil.",
      data: "2024-01-03",
      categoria: "Atividades",
      cor: "bg-purple-100 text-purple-700",
      icone: Smile,
      imagem: "children art activity"
    },
    {
      id: 6,
      titulo: "Temporibus autem quibusdam et aut",
      resumo: "Officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.",
      data: "2024-01-01",
      categoria: "Informes",
      cor: "bg-indigo-100 text-indigo-700",
      icone: Calendar,
      imagem: "school information board"
    }
  ];

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const noticiaDestaque = noticias[0];
  const outrasNoticias = noticias.slice(1);

  return (
    <section id="noticias" className="py-20 bg-linear-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <Calendar className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Últimas Notícias
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Acompanhe o <span className="text-primary">Dia a Dia</span> da Escola 📰
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Notícia Destaque */}
          <Card className="lg:col-span-1 border-border/50 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback 
                src="https://placehold.co/1080x720/14532d/FFFFFF/png?text=Sala+de+Aula+CMEI"
                alt={noticiaDestaque.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${noticiaDestaque.cor} border-0`}>
                  <noticiaDestaque.icone className="w-3 h-3 mr-1" />
                  {noticiaDestaque.categoria}
                </Badge>
              </div>
            </div>
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatarData(noticiaDestaque.data)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>5 min de leitura</span>
                </div>
              </div>
              <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                {noticiaDestaque.titulo}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {noticiaDestaque.resumo}
              </p>
              <Button variant="outline" className="group-hover:bg-primary group-hover:text-white transition-colors">
                Ler mais
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Lista de Outras Notícias */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Outras Notícias
            </h3>
            
            {outrasNoticias.slice(0, 4).map((noticia) => (
              <Card key={noticia.id} className="border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                      <ImageWithFallback 
                        src={`https://placehold.co/1080x720/14532d/FFFFFF/png?text=Sala+de+Aula+CMEI`}
                        alt={noticia.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="secondary" className={`${noticia.cor} border-0 text-xs`}>
                          <noticia.icone className="w-3 h-3 mr-1" />
                          {noticia.categoria}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatarData(noticia.data)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {noticia.titulo}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {noticia.resumo}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="px-8">
            Ver Todas as Notícias
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}