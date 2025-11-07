"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import LogoCMEI from '@/assets/images/cmei-butiatuvinha.jpeg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - hidden on mobile */}
        <div className="hidden md:flex items-center justify-between py-2 border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">(41) 3370-1574</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Butiatuvinha, Curitiba - PR</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Horário de Funcionamento: Consulte a Secretaria
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <Image
              src={LogoCMEI}
              alt="Logo CMEI Butiatuvinha"
              height={48}
              width={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <div>
              <h1 className="text-lg font-semibold text-foreground">CMEI Butiatuvinha</h1>
              <p className="text-sm text-muted-foreground">Centro Municipal de Educação Infantil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Início
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              A Escola
            </a>
            <a href="#educacao" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Educação
            </a>
            <a href="#estrutura" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Estrutura
            </a>
            <a href="#noticias" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Notícias
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors whitespace-nowrap">
              Contato
            </a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-sm px-3">
              Info
            </Button>
            <Button size="sm" className="text-sm px-3">
              Matrícula
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border/50">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#inicio"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                A Escola
              </a>
              <a
                href="#educacao"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Educação
              </a>
              <a
                href="#estrutura"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Estrutura
              </a>
              <a
                href="#noticias"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </a>
              <a
                href="#contato"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" size="sm" className="w-full">
                  Informações
                </Button>
                <Button size="sm" className="w-full">
                  Matrículas
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}