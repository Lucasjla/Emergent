import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Camera, Video, Plane, ScanEye, Layout, User, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicos } from '../mock/data';

const Servicos = () => {
  const iconMap = {
    'Camera': Camera,
    'Video': Video,
    'Plane': Plane,
    'ScanEye': ScanEye,
    'Layout': Layout,
    'User': User,
    'Sparkles': Sparkles
  };

  const servicoImages = [
    'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f',
    'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
    'https://images.unsplash.com/photo-1591379053117-53dd267abb19',
    'https://images.unsplash.com/photo-1581784878214-8d5596b98a01',
    'https://images.unsplash.com/photo-1621293954908-907159247fc8',
    'https://images.unsplash.com/photo-1618661148759-0d481c0c2116',
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#38030a]/50 to-transparent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#1a0005] mb-4">{servico.nome}</h3>
                    <p className="text-lg text-gray-600 mb-6">{servico.descricao}</p>
                    <ul className="space-y-3">
                      {servico.detalhes.map((detalhe, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle2 className="w-6 h-6 text-[#38030a] flex-shrink-0 mt-0.5" />
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

      {/* Home Staging Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#38030a] text-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">NOVO SERVIÇO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a0005] mb-4">
              Valorização Visual do Imóvel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme ambientes vazios em espaços mobiliados virtualmente com Home Staging Digital
            </p>
          </div>

          {/* Slider Antes/Depois */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Exemplo 1 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  ANTES
                </div>
                <img
                  src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
                  alt="Sala vazia antes"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  DEPOIS
                </div>
                <img
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="Sala mobiliada depois"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-[#1a0005] mb-2">Sala de Estar</h4>
                <p className="text-gray-600 text-sm">
                  Ambiente transformado com mobília virtual moderna e aconchegante
                </p>
              </div>
            </Card>

            {/* Exemplo 2 */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative">
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  ANTES
                </div>
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                  alt="Quarto vazio antes"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="relative">
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                  DEPOIS
                </div>
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
                  alt="Quarto mobiliado depois"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-lg text-[#1a0005] mb-2">Quarto Principal</h4>
                <p className="text-gray-600 text-sm">
                  Espaço acolhedor e sofisticado que atrai compradores
                </p>
              </div>
            </Card>
          </div>

          {/* Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: 'Valorização Imediata',
                descricao: 'Imóveis com Home Staging vendem até 73% mais rápido'
              },
              {
                titulo: 'Custo-Benefício',
                descricao: 'Muito mais econômico que mobiliar fisicamente'
              },
              {
                titulo: 'Versatilidade',
                descricao: 'Diferentes estilos para públicos diversos'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center border-2 border-[#38030a]/10">
                <div className="w-12 h-12 bg-[#38030a] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-lg text-[#1a0005] mb-2">{item.titulo}</h4>
                <p className="text-gray-600">{item.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a0005] mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Escolha o pacote ideal e agende seu ensaio fotográfico agora mesmo
          </p>
          <Link to="/novo-agendamento">
            <Button size="lg" className="bg-[#38030a] hover:bg-[#38001d] text-white text-lg px-10 py-6">
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