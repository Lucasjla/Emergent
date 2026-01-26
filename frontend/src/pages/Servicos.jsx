import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Camera, Video, Plane, ScanEye, Layout, User, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicos } from '../mock/data';

const Servicos = () => {
  const iconMap = {
    'Camera': Camera,
    'Video': Video,
    'Plane': Plane,
    'ScanEye': ScanEye,
    'Layout': Layout,
    'User': User
  };

  const servicoImages = [
    'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f',
    'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
    'https://images.unsplash.com/photo-1591379053117-53dd267abb19',
    'https://images.unsplash.com/photo-1581784878214-8d5596b98a01',
    'https://images.unsplash.com/photo-1621293954908-907159247fc8',
    'https://images.unsplash.com/photo-1618661148759-0d481c0c2116'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#800020] via-[#6B0F1A] to-[#2D0A0F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nossos Serviços
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Soluções completas em mídia imobiliária para destacar seu imóvel e acelerar suas vendas
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {servicos.map((servico, index) => {
              const IconComponent = iconMap[servico.icone];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={servico.id}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                >
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={servicoImages[index]}
                        alt={servico.nome}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#800020]/50 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#800020] to-[#6B0F1A] rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#2D0A0F] mb-4">{servico.nome}</h3>
                    <p className="text-lg text-gray-600 mb-6">{servico.descricao}</p>
                    <ul className="space-y-3">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-6 h-6 text-[#800020] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detalhe}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#2D0A0F] mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha o pacote ideal e agende seu ensaio fotográfico agora mesmo
          </p>
          <Link to="/novo-agendamento">
            <Button size="lg" className="bg-[#800020] hover:bg-[#6B0F1A] text-white text-lg px-10 py-6">
              Agendar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Servicos;