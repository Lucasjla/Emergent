import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Camera, Heart, Target, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre a Arkano
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Transformamos imóveis em experiências visuais que encantam e vendem mais rápido
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1a0005] mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  A <strong>Arkano</strong> nasceu da paixão por fotografia e do entendimento profundo do mercado imobiliário. Percebemos que imóveis incríveis estavam sendo mal representados por fotos amadoras e iluminação inadequada.
                </p>
                <p>
                  Decidimos mudar isso. Com equipamentos de ponta, técnicas profissionais e um olhar artístico, transformamos cada propriedade em uma obra visual que destaca seus melhores atributos.
                </p>
                <p>
                  Hoje, ajudamos corretores e imobiliárias a venderem mais rápido e por valores melhores, através de conteúdo visual de alta qualidade que realmente faz a diferença.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1554224311-beee415c201f"
                alt="Fotógrafo profissional"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a0005] mb-4">
              Nossos Pilares
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a0005] mb-4">Missão</h3>
              <p className="text-gray-600">
                Valorizar cada imóvel através de fotografia profissional, ajudando nossos clientes a alcançarem resultados extraordinários no mercado imobiliário.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a0005] mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser referência nacional em fotografia imobiliária, reconhecidos pela excelência técnica e pelo impacto direto nas vendas de nossos clientes.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a0005] mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✓ Qualidade acima de tudo</li>
                <li>✓ Comprometimento com prazos</li>
                <li>✓ Inovação constante</li>
                <li>✓ Transparência</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a0005] mb-4">
              Por Que Escolher a Arkano?
            </h2>
            <p className="text-xl text-gray-600">
              Não somos apenas fotógrafos, somos especialistas em vender imóveis através da imagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                titulo: 'Equipamento Profissional',
                descricao: 'Câmeras full-frame, lentes premium e drones de última geração para resultados impecáveis'
              },
              {
                icon: Users,
                titulo: 'Equipe Especializada',
                descricao: 'Fotógrafos com anos de experiência no mercado imobiliário de alto padrão'
              },
              {
                icon: TrendingUp,
                titulo: 'Resultados Comprovados',
                descricao: 'Imóveis fotografados por nós vendem 50% mais rápido que a média do mercado'
              },
              {
                icon: Award,
                titulo: 'Edição Profissional',
                descricao: 'Tratamento de cor, correção de perspectiva e otimização para todos os canais'
              },
              {
                icon: Target,
                titulo: 'Foco no Cliente',
                descricao: 'Entendemos suas necessidades e entregamos exatamente o que você precisa'
              },
              {
                icon: Heart,
                titulo: 'Paixão pelo que Fazemos',
                descricao: 'Cada projeto é tratado com atenção aos mínimos detalhes e dedicação total'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#38030a] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a0005] mb-2">{item.titulo}</h3>
                <p className="text-gray-600">{item.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-24 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Nossos Números
            </h2>
            <p className="text-xl text-gray-200">
              Resultados que falam por si
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { numero: '500+', label: 'Imóveis Fotografados' },
              { numero: '200+', label: 'Clientes Satisfeitos' },
              { numero: '95%', label: 'Taxa de Satisfação' },
              { numero: '48h', label: 'Entrega Média' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.numero}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#1a0005] mb-6">
            Pronto para Valorizar Seu Imóvel?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Junte-se a centenas de corretores que já confiam na Arkano
          </p>
          <Link to="/novo-agendamento">
            <Button size="lg" className="bg-white border-2 border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white shadow-lg text-lg px-10 py-6">
              Agendar Ensaio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
