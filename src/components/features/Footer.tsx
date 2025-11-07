"use client";

import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';

export function Footer() {
  const links = {
    escola: [
      { name: "Lorem Ipsum", href: "#lorem" },
      { name: "Lorem Dolor", href: "#dolor" },
      { name: "Lorem Sit", href: "#sit" },
      { name: "Lorem Amet", href: "#amet" },
    ],
    servicos: [
      { name: "Lorem Service", href: "#service1" },
      { name: "Lorem Option", href: "#service2" },
      { name: "Lorem Feature", href: "#service3" },
      { name: "Lorem Product", href: "#service4" },
    ],
    contato: [
      { name: "Lorem Contact", href: "#contact1" },
      { name: "Lorem Online", href: "#contact2" },
      { name: "Lorem Support", href: "#contact3" },
      { name: "Lorem Jobs", href: "#contact4" },
    ]
  };

  return (
    <footer className="bg-linear-to-b from-slate-50 to-slate-100 text-slate-900 border-t border-slate-200">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">CMEI</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Lorem Ipsum</h3>
                  <p className="text-sm text-slate-600">Lorem ipsum dolor sit amet</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-slate-200 p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-slate-200 p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900 hover:bg-slate-200 p-2">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-slate-900">Lorem Menu</h4>
              <ul className="space-y-3">
                {links.escola.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-slate-900">Lorem Services</h4>
              <ul className="space-y-3">
                {links.servicos.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-6 text-slate-900">Lorem Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-900">(00) 0000-0000</p>
                    <p className="text-xs text-slate-600">Lorem ipsum dolor</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-900">lorem@ipsum.com</p>
                    <p className="text-xs text-slate-600">Lorem ipsum dolor</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-900">Lorem Street, 123</p>
                    <p className="text-xs text-slate-600">Lorem - CEP: 00000-000</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-slate-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-slate-900">00h às 00h</p>
                    <p className="text-xs text-slate-600">Lorem ipsum dolor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-slate-300 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Lorem Ipsum Dolor Sit?
            </h3>
            <p className="text-slate-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                Lorem Action
              </Button>
              <Button variant="outline" size="lg" className="px-8 text-slate-900 border-slate-400 hover:bg-slate-200">
                Lorem Info
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-300 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-slate-600">
              <span>© 2024 Lorem Ipsum.</span>
              <span>Lorem ipsum dolor sit.</span>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-slate-600">
              <span>Lorem with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for lorem ipsum</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-2 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-slate-500">
              <a href="#privacidade" className="hover:text-slate-900 transition-colors">
                Lorem Policy
              </a>
              <a href="#termos" className="hover:text-slate-900 transition-colors">
                Lorem Terms
              </a>
              <a href="#cookies" className="hover:text-slate-900 transition-colors">
                Lorem Cookies
              </a>
              <a href="#lgpd" className="hover:text-slate-900 transition-colors">
                Lorem LGPD
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-slate-500 hover:text-slate-900 text-xs p-2"
                asChild
              >
                <a href="https://curitiba.pr.gov.br" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  curitiba.pr.gov.br
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}