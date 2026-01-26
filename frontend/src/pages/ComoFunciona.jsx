import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Calendar, Phone, Camera, Package, ArrowRight } from 'lucide-react';
import { processSteps } from '../mock/data';

const ComoFunciona = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Como Funciona
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Nosso processo é simples, rápido e eficiente. Do agendamento à entrega, cuidamos de tudo.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-full flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">{step.numero}</span>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 p-8 hover:shadow-xl transition-shadow">
                  <h3 className="text-3xl font-bold text-[#1a0005] mb-4">{step.titulo}</h3>
                  <p className="text-lg text-gray-600">{step.descricao}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes Adicionais */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a0005] mb-4">
              O Que Esperar
            </h2>
            <p className="text-xl text-gray-600">
              Compromisso com excelência em cada etapa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                titulo: 'Agendamento Fácil',
                descricao: 'Plataforma online simples e intuitiva'
              },
              {
                icon: Phone,
                titulo: 'Contato Direto',
                descricao: 'Comunicação clara durante todo o processo'
              },
              {
                icon: Camera,
                titulo: 'Equipamento Pro',
                descricao: 'Câmeras e drones de última geração'
              },
              {
                icon: Package,
                titulo: 'Entrega Rápida',
                descricao: 'Arquivos organizados e prontos para uso'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#38030a] to-[#38001d] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#1a0005] mb-2">{item.titulo}</h4>
                <p className="text-gray-600">{item.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Agende seu ensaio e veja a diferença que fotos profissionais fazem
          </p>
          <Link to="/novo-agendamento">
            <Button size="lg" className="bg-[#000000] hover:bg-[#1a0005] text-[#1a0005] font-semibold text-lg px-10 py-6">
              Agendar Ensaio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;