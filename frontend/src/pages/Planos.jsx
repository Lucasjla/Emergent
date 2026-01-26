import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { pacotes } from '../mock/data';

const Planos = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Escolha o pacote ideal para suas necessidades. Todos incluem edição profissional e entrega rápida.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pacotes.map((pacote) => (
              <Card
                key={pacote.id}
                className={`relative p-8 hover:shadow-2xl transition-all duration-300 ${
                  pacote.destaque
                    ? 'border-4 border-[#000000] transform md:scale-105'
                    : 'border-2 border-gray-200'
                }`}
              >
                {pacote.destaque && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[#000000] text-[#1a0005] text-sm font-bold px-6 py-2 rounded-full">
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#1a0005] mb-2">{pacote.nome}</h3>
                  <div className="text-5xl font-bold text-[#38030a] mb-3">{pacote.preco}</div>
                  <p className="text-gray-600">{pacote.descricao}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pacote.recursos.map((recurso, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-[#38030a] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{recurso}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/novo-agendamento">
                  <Button
                    className={`w-full ${
                      pacote.destaque
                        ? 'bg-[#000000] hover:bg-[#1a0005] text-[#1a0005]'
                        : 'bg-[#38030a] hover:bg-[#38001d] text-white'
                    }`}
                    size="lg"
                  >
                    Escolher Plano
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Todos os planos incluem edição profissional, licença de uso comercial e suporte especializado.
            </p>
            <p className="text-sm text-gray-500">
              *Preços podem variar dependendo da localização e complexidade do imóvel.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a0005] mb-12">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-6">
            {[
              {
                pergunta: 'Posso adicionar serviços extras ao meu pacote?',
                resposta: 'Sim! Você pode adicionar qualquer serviço adicional como drone, tour virtual ou planta humanizada ao fazer o agendamento.'
              },
              {
                pergunta: 'Qual é o prazo de entrega?',
                resposta: 'O prazo varia de acordo com o pacote: Básico em 48h, Profissional em 72h e Premium em 48h com prioridade.'
              },
              {
                pergunta: 'Posso usar as fotos para qualquer finalidade?',
                resposta: 'Sim! Todos os pacotes incluem licença de uso comercial completa para divulgação do imóvel.'
              },
              {
                pergunta: 'E se eu precisar de mais fotos que o limite do pacote?',
                resposta: 'Sem problemas! Entre em contato conosco para personalizar seu pacote de acordo com suas necessidades específicas.'
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-bold text-lg text-[#1a0005] mb-2">{item.pergunta}</h4>
                <p className="text-gray-600">{item.resposta}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ainda tem dúvidas?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Entre em contato conosco e teremos prazer em ajudar
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-[#000000] hover:bg-[#1a0005] text-[#1a0005] font-semibold text-lg px-10 py-6">
              Falar Conosco
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Planos;