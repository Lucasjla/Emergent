import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Camera, Video, Plane, Star, ArrowRight, CheckCircle2, TrendingUp, Clock, Award } from 'lucide-react';
import { servicos, depoimentos, portfolioImages } from '../mock/data';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#38030a]/95 via-[#38001d]/90 to-[#1a0005]/95 z-10" />
          <img
            src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fotografia que <br />
            <span className="text-[#000000]">Valoriza Seu Imóvel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Transforme propriedades em obras de arte visual. Fotografia, vídeo e drone profissionais para o mercado imobiliário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/novo-agendamento">
              <Button size="lg" className="bg-[#000000] hover:bg-[#1a0005] text-[#1a0005] font-semibold text-lg px-8 py-6">
                Agendar Ensaio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#38030a] text-lg px-8 py-6">
                Ver Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: '500+', label: 'Imóveis Fotografados' },
              { icon: TrendingUp, value: '95%', label: 'Taxa de Satisfação' },
              { icon: Clock, value: '48h', label: 'Entrega Média' },
              { icon: Star, value: '5.0', label: 'Avaliação Média' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#38030a]" />
                <div className="text-4xl font-bold text-[#38030a] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0005] mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções completas em mídia imobiliária para destacar seu imóvel no mercado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.slice(0, 3).map((servico) => {
              const IconComponent = servico.icone === 'Camera' ? Camera : servico.icone === 'Video' ? Video : Plane;
              return (
                <Card key={servico.id} className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#38030a]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a0005] mb-3">{servico.nome}</h3>
                  <p className="text-gray-600 mb-6">{servico.descricao}</p>
                  <ul className="space-y-2">
                    {servico.detalhes.slice(0, 3).map((detalhe, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-[#38030a] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/servicos">
              <Button size="lg" className="bg-[#38030a] hover:bg-[#38001d] text-white">
                Ver Todos os Serviços
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0005] mb-4">
              Nosso Trabalho
            </h2>
            <p className="text-xl text-gray-600">
              Veja alguns dos nossos projetos realizados
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.slice(0, 8).map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300">
                <img src={img} alt={`Portfolio ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white">
                Ver Portfólio Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0005] mb-4">
              O Que Dizem Nossos Clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento) => (
              <Card key={depoimento.id} className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#000000] text-[#000000]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{depoimento.texto}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#38030a] rounded-full flex items-center justify-center text-white font-bold">
                    {depoimento.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a0005]">{depoimento.nome}</div>
                    <div className="text-sm text-gray-500">{depoimento.cargo}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto Para Valorizar Seu Imóvel?
          </h2>
          <p className="text-xl mb-10 text-gray-200">
            Agende agora seu ensaio fotográfico e destaque-se no mercado imobiliário
          </p>
          <Link to="/novo-agendamento">
            <Button size="lg" className="bg-[#000000] hover:bg-[#1a0005] text-[#1a0005] font-semibold text-lg px-10 py-6">
              Agendar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;