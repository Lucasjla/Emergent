import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a0005] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">ARKANO</h3>
            <p className="text-gray-300 text-sm">
              Fotografia imobiliária premium que valoriza seu imóvel e acelera suas vendas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#000000] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-300 hover:text-[#000000] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-[#000000] transition-colors">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link to="/planos" className="text-gray-300 hover:text-[#000000] transition-colors">
                  Planos
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Fotografia Profissional</li>
              <li>Vídeo Promocional</li>
              <li>Drone</li>
              <li>Ensaio Retrato</li>
              <li>Home Staging Digital</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 text-[#000000]" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 text-[#000000]" />
                <span className="text-gray-300">contato@arkano.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-[#000000]" />
                <span className="text-gray-300">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Arkano - Fotografia Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;