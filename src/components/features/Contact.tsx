"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ImageWithFallback } from '@/components/shared/ImageWithFallback';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  Calendar,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  ExternalLink
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idadeCrianca: '',
    turno: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    // Mostrar toast de sucesso
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contatos = [
    {
      icon: Phone,
      title: "Lorem Phone",
      info: "(00) 0000-0000",
      subtitle: "Lorem ipsum dolor",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Mail,
      title: "Lorem Email",
      info: "lorem@ipsum.com",
      subtitle: "Lorem ipsum dolor",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: MapPin,
      title: "Lorem Address",
      info: "Lorem Street, 123",
      subtitle: "Lorem - CEP: 00000-000",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Clock,
      title: "Lorem Time",
      info: "00h às 00h",
      subtitle: "Lorem ipsum dolor",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const servicos = [
    {
      icon: Calendar,
      title: "Lorem Calendar",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
      action: "Lorem Action"
    },
    {
      icon: Users,
      title: "Lorem Users",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
      action: "Lorem Visit"
    },
    {
      icon: MessageSquare,
      title: "Lorem Questions",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod",
      action: "Lorem Contact"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-linear-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">
              Informações e Contato
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lorem <span className="text-primary">Ipsum</span> Dolor 📞
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contatos.map((contato, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${contato.color}`}>
                  <contato.icon className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {contato.title}
                </h3>
                <p className="text-sm font-medium text-foreground mb-1">
                  {contato.info}
                </p>
                <p className="text-xs text-muted-foreground">
                  {contato.subtitle}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                Lorem Ipsum Form
              </CardTitle>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange('telefone', e.target.value)}
                      placeholder="(41) 99999-9999"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idade">Idade da Criança</Label>
                    <Select onValueChange={(value) => handleInputChange('idadeCrianca', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a idade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4m-1ano">4 meses - 1 ano</SelectItem>
                        <SelectItem value="1-2anos">1 - 2 anos</SelectItem>
                        <SelectItem value="2-3anos">2 - 3 anos</SelectItem>
                        <SelectItem value="3-4anos">3 - 4 anos</SelectItem>
                        <SelectItem value="4-5anos">4 - 5 anos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="turno">Turno de Interesse</Label>
                  <Select onValueChange={(value) => handleInputChange('turno', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o turno" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manha">Manhã (7h às 12h)</SelectItem>
                      <SelectItem value="tarde">Tarde (13h às 18h)</SelectItem>
                      <SelectItem value="integral">Integral (7h às 18h)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange('mensagem', e.target.value)}
                    placeholder="Conte-nos mais sobre suas necessidades e expectativas..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Lorem Submit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Services and Social */}
          <div className="space-y-6">
            {/* Government Image */}
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48">
                  <ImageWithFallback
                    src="https://placehold.co/1080x720/14532d/FFFFFF/png?text=Sala+de+Aula+CMEI"
                    alt="Prefeitura de Curitiba - Edifício governamental"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">Lorem Ipsum</h4>
                    <p className="text-sm opacity-90">Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Lorem Services
              </h3>
              
              {servicos.map((servico, index) => (
                <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <servico.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">
                          {servico.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {servico.description}
                        </p>
                        <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                          {servico.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Lorem Social
                </h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit!
                </p>
              </CardContent>
            </Card>

            {/* Government Info */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lorem Government</h4>
                    <p className="text-sm text-muted-foreground">Lorem ipsum department</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://curitiba.pr.gov.br" target="_blank" rel="noopener noreferrer">
                    Lorem curitiba.pr.gov.br
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="border-border/50">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.351014426834!2d-49.35509152468936!3d-25.393058377585387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce03175463899%3A0x7a190e99f4610659!2sCmei%20Butiatuvinha!5e0!3m2!1spt-BR!2sbr!4v1762542679495!5m2!1spt-BR!2sbr" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}