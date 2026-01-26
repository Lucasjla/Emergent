import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock: salvar no localStorage
    const mensagens = JSON.parse(localStorage.getItem('arkano_mensagens') || '[]');
    mensagens.push({ ...formData, id: Date.now(), data: new Date().toISOString() });
    localStorage.setItem('arkano_mensagens', JSON.stringify(mensagens));
    
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[#800020] via-[#6B0F1A] to-[#2D0A0F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Estamos aqui para responder suas dúvidas e ajudar com o que você precisar
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#2D0A0F] mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-8">
                  Entre em contato conosco através dos canais abaixo ou envie sua mensagem pelo formulário.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#800020] to-[#6B0F1A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D0A0F] mb-1">Telefone</h4>
                      <p className="text-gray-600">(11) 99999-9999</p>
                      <p className="text-sm text-gray-500 mt-1">Seg - Sex: 8h às 18h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#800020] to-[#6B0F1A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D0A0F] mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@arkano.com.br</p>
                      <p className="text-sm text-gray-500 mt-1">Resposta em até 24h</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#800020] to-[#6B0F1A] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2D0A0F] mb-1">Localização</h4>
                      <p className="text-gray-600">São Paulo, SP</p>
                      <p className="text-sm text-gray-500 mt-1">Atendemos toda a Grande SP</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-3xl font-bold text-[#2D0A0F] mb-6">
                  Envie sua Mensagem
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="telefone">Telefone *</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        placeholder="(00) 00000-0000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="assunto">Assunto *</Label>
                      <select
                        id="assunto"
                        className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                        value={formData.assunto}
                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="duvida">Dúvida</option>
                        <option value="agendamento">Agendamento</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mensagem">Mensagem *</Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#800020] hover:bg-[#6B0F1A] text-white"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;