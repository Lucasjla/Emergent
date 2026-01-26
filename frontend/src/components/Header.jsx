import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/como-funciona', label: 'Como Funciona' },
    { to: '/portfolio', label: 'Portfólio' },
    { to: '/planos', label: 'Planos' },
    { to: '/contato', label: 'Contato' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="text-[#800020]">ARKANO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-[#800020] ${
                  isActive(link.to) ? 'text-[#800020]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/novo-agendamento">
              <Button className="bg-[#800020] hover:bg-[#6B0F1A] text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Ensaio
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(link.to) ? 'text-[#800020]' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/novo-agendamento" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-[#800020] hover:bg-[#6B0F1A] text-white">
                <Calendar className="w-4 h-4 mr-2" />
                Agendar Ensaio
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;