import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Camera, Video, Plane, ArrowRight, CheckCircle2, TrendingUp, Clock, Award } from 'lucide-react';
import { servicos, portfolioImages } from '../mock/data';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Overlay gradiente bordô para manter identidade visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#38030a]/85 via-[#38001d]/80 to-[#1a0005]/90 z-10" />
          {/* Foto de fachada moderna e luxuosa */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fotografia que <br />
            <span className="text-white">Valoriza Seu Imóvel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Transforme propriedades em obras de arte visual. Fotografia, vídeo e drone profissionais para o mercado imobiliário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/novo-agendamento">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#38030a] font-semibold text-lg px-8 py-6 shadow-lg">
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
              { icon: CheckCircle2, value: '5.0', label: 'Avaliação Média' }
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
            <Button size="lg" className="bg-white hover:bg-gray-100 text-[#38030a] font-semibold text-lg px-10 py-6 shadow-lg">
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