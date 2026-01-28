import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const HomePreview = () => {
  return (
    <div className="min-h-screen">
      {/* OPÇÃO 1: Hero com Foto de Fachada + Overlay Escuro */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Overlay escuro para garantir legibilidade do texto */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* Foto de fachada moderna e luxuosa */}
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
            alt="Luxury Property"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Fotografia que <br />
            <span className="text-white">Valoriza Seu Imóvel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto drop-shadow-lg">
            Transforme propriedades em obras de arte visual. Fotografia, vídeo e drone profissionais para o mercado imobiliário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/novo-agendamento">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#38030a] font-semibold text-lg px-8 py-6 shadow-2xl">
                Agendar Ensaio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#38030a] text-lg px-8 py-6 backdrop-blur-sm">
                Ver Portfólio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* OPÇÃO 2: Hero com Foto de Fachada + Overlay Gradiente Bordô */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Overlay gradiente bordô para manter identidade visual */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#38030a]/85 via-[#38001d]/80 to-[#1a0005]/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern Architecture"
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

      {/* OPÇÃO 3: Hero com Foto Interior Luxuoso + Overlay Suave */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Overlay suave preto */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Fotografia que <br />
            <span className="text-white">Valoriza Seu Imóvel</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
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

      {/* Informações sobre as opções */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">📸 Preview de Sugestões - Hero com Foto Real</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-3">🏠 Opção 1: Fachada + Overlay Escuro</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prós:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Foto de fachada bonita destaca</li>
                  <li>Overlay escuro garante legibilidade</li>
                  <li>Botões brancos se destacam</li>
                  <li>Visual limpo e profissional</li>
                </ul>
                <p><strong>Contras:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Perde a identidade bordô</li>
                  <li>Pode parecer mais genérico</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-[#38030a] rounded-lg p-6 bg-[#F5E6E8]">
              <h3 className="font-bold text-xl mb-3">⭐ Opção 2: Fachada + Overlay Bordô</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prós:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Mantém identidade visual bordô</li>
                  <li>Foto de fachada moderna</li>
                  <li>Melhor dos dois mundos</li>
                  <li>Profissional e único</li>
                </ul>
                <p><strong>Contras:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Overlay pode escurecer muito a foto</li>
                </ul>
                <p className="text-[#38030a] font-bold mt-3">👈 RECOMENDADA</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-xl mb-3">🛋️ Opção 3: Interior + Overlay Suave</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Prós:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Mostra qualidade do trabalho</li>
                  <li>Interior luxuoso impacta</li>
                  <li>Overlay gradiente do chão ao topo</li>
                  <li>Elegante e sofisticado</li>
                </ul>
                <p><strong>Contras:</strong></p>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Interior pode distrair da mensagem</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="font-bold text-xl mb-3">💡 Recomendação Profissional</h3>
              <p className="text-gray-700 mb-4">
                A <strong>Opção 2 (Fachada + Overlay Bordô)</strong> é a melhor escolha porque:
              </p>
              <ul className="text-left space-y-2 max-w-xl mx-auto">
                <li>✓ Mantém a identidade visual única da Arkano</li>
                <li>✓ Foto de fachada mostra o resultado do trabalho</li>
                <li>✓ Overlay bordô diferencia de concorrentes</li>
                <li>✓ Botões brancos têm excelente contraste</li>
                <li>✓ Profissional sem ser genérico</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/">
              <Button className="bg-[#38030a] hover:bg-[#38001d] text-white">
                ← Voltar para Home Atual
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePreview;
