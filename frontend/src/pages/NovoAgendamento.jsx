import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Calendar } from '../components/ui/calendar';
import { Camera, Video, Plane, ScanEye, Layout, User, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { servicos, pacotes } from '../mock/data';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const NovoAgendamento = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, loading: authLoading } = useAuth();
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Etapa 1: Serviços
    pacoteSelecionado: '',
    servicosAdicionais: [],
    
    // Etapa 2: Informações do Imóvel
    tipoImovel: '',
    endereco: '',
    complemento: '',
    cidade: '',
    estado: '',
    cep: '',
    detalhesImovel: '',
    
    // Etapa 3: Data e Horário
    dataDesejada: null,
    horarioDesejado: '',
    
    // Etapa 4: Contato e Detalhes
    nomeCorretor: user?.nome || '',
    telefone: user?.telefone || '',
    email: user?.email || '',
    nomeProprietario: '',
    telefoneProprietario: '',
    localChaves: '',
    autorizacaoEntrada: '',
    observacoes: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        nomeCorretor: user.nome,
        telefone: user.telefone,
        email: user.email
      }));
    }
  }, [user]);

  const etapas = [
    { numero: 1, titulo: 'Serviços' },
    { numero: 2, titulo: 'Imóvel' },
    { numero: 3, titulo: 'Data/Hora' },
    { numero: 4, titulo: 'Contato' },
    { numero: 5, titulo: 'Confirmação' }
  ];

  const iconMap = {
    'Camera': Camera,
    'Video': Video,
    'Plane': Plane,
    'ScanEye': ScanEye,
    'Layout': Layout,
    'User': User
  };

  const handleServicoAdicionalToggle = (servicoId) => {
    setFormData(prev => ({
      ...prev,
      servicosAdicionais: prev.servicosAdicionais.includes(servicoId)
        ? prev.servicosAdicionais.filter(id => id !== servicoId)
        : [...prev.servicosAdicionais, servicoId]
    }));
  };

  const proximaEtapa = () => {
    if (validarEtapa()) {
      setEtapaAtual(prev => Math.min(prev + 1, 5));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const etapaAnterior = () => {
    setEtapaAtual(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const validarEtapa = () => {
    switch (etapaAtual) {
      case 1:
        if (!formData.pacoteSelecionado) {
          toast.error('Por favor, selecione um pacote');
          return false;
        }
        return true;
      case 2:
        if (!formData.tipoImovel || !formData.endereco || !formData.cidade || !formData.estado) {
          toast.error('Por favor, preencha todos os campos obrigatórios');
          return false;
        }
        return true;
      case 3:
        if (!formData.dataDesejada || !formData.horarioDesejado) {
          toast.error('Por favor, selecione data e horário');
          return false;
        }
        return true;
      case 4:
        if (!formData.nomeCorretor || !formData.telefone || !formData.email) {
          toast.error('Por favor, preencha seus dados de contato');
          return false;
        }
        return true;
      default:
        return true;
    }
  };

  const finalizarAgendamento = async () => {
    if (!isAuthenticated) {
      toast.error('Você precisa estar logado para fazer um agendamento');
      navigate('/login');
      return;
    }

    setLoading(true);
    
    try {
      const pedidoData = {
        pacote_selecionado: formData.pacoteSelecionado,
        servicos_adicionais: formData.servicosAdicionais,
        tipo_imovel: formData.tipoImovel,
        endereco: formData.endereco,
        complemento: formData.complemento,
        cidade: formData.cidade,
        estado: formData.estado,
        cep: formData.cep,
        detalhes_imovel: formData.detalhesImovel,
        data_desejada: formData.dataDesejada.toISOString(),
        horario_desejado: formData.horarioDesejado,
        nome_corretor: formData.nomeCorretor,
        telefone: formData.telefone,
        email: formData.email,
        nome_proprietario: formData.nomeProprietario,
        telefone_proprietario: formData.telefoneProprietario,
        local_chaves: formData.localChaves,
        autorizacao_entrada: formData.autorizacaoEntrada,
        observacoes: formData.observacoes
      };

      await axios.post(`${API}/pedidos`, pedidoData);
      
      toast.success('Agendamento realizado com sucesso!');
      setTimeout(() => {
        navigate('/area-cliente');
      }, 1500);
    } catch (error) {
      console.error('Error creating pedido:', error);
      toast.error(error.response?.data?.detail || 'Erro ao criar agendamento');
    } finally {
      setLoading(false);
    }
  };

  const renderEtapa1 = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Escolha seu Pacote</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pacotes.map((pacote) => (
            <Card
              key={pacote.id}
              onClick={() => setFormData({ ...formData, pacoteSelecionado: pacote.id })}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                formData.pacoteSelecionado === pacote.id
                  ? 'border-2 border-[#38030a] bg-[#F5E6E8]'
                  : 'border-2 border-gray-200 hover:border-[#38030a]'
              } ${pacote.destaque ? 'ring-2 ring-[#000000]' : ''}`}
            >
              {pacote.destaque && (
                <div className="bg-[#38030a] text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  MAIS POPULAR
                </div>
              )}
              <h4 className="text-xl font-bold text-[#1a0005] mb-2">{pacote.nome}</h4>
              <div className="text-3xl font-bold text-[#38030a] mb-3">{pacote.preco}</div>
              <p className="text-sm text-gray-600 mb-4">{pacote.descricao}</p>
              <ul className="space-y-2">
                {pacote.recursos.map((recurso, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm">
                    <Check className="w-4 h-4 text-[#38030a] flex-shrink-0 mt-0.5" />
                    <span>{recurso}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Serviços Adicionais (Opcional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicos.map((servico) => {
            const IconComponent = iconMap[servico.icone];
            return (
              <Card
                key={servico.id}
                className={`p-4 cursor-pointer transition-all duration-300 ${
                  formData.servicosAdicionais.includes(servico.id)
                    ? 'border-2 border-[#38030a] bg-[#F5E6E8]'
                    : 'border border-gray-200 hover:border-[#38030a]'
                }`}
                onClick={() => handleServicoAdicionalToggle(servico.id)}
              >
                <div className="flex items-start space-x-3">
                  <Checkbox
                    checked={formData.servicosAdicionais.includes(servico.id)}
                    onCheckedChange={() => handleServicoAdicionalToggle(servico.id)}
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <IconComponent className="w-5 h-5 text-[#38030a]" />
                      <h4 className="font-semibold text-[#1a0005]">{servico.nome}</h4>
                    </div>
                    <p className="text-sm text-gray-600">{servico.descricao}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderEtapa2 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Informações do Imóvel</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="tipoImovel">Tipo de Imóvel *</Label>
          <select
            id="tipoImovel"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38030a] focus:border-transparent"
            value={formData.tipoImovel}
            onChange={(e) => setFormData({ ...formData, tipoImovel: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="apartamento">Apartamento</option>
            <option value="casa">Casa</option>
            <option value="cobertura">Cobertura</option>
            <option value="comercial">Comercial</option>
            <option value="terreno">Terreno</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <Label htmlFor="endereco">Endereço Completo *</Label>
          <Input
            id="endereco"
            value={formData.endereco}
            onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
            placeholder="Rua, número"
          />
        </div>

        <div>
          <Label htmlFor="complemento">Complemento</Label>
          <Input
            id="complemento"
            value={formData.complemento}
            onChange={(e) => setFormData({ ...formData, complemento: e.target.value })}
            placeholder="Apto, bloco, etc"
          />
        </div>

        <div>
          <Label htmlFor="cidade">Cidade *</Label>
          <Input
            id="cidade"
            value={formData.cidade}
            onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
          />
        </div>

        <div>
          <Label htmlFor="estado">Estado *</Label>
          <select
            id="estado"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38030a] focus:border-transparent"
            value={formData.estado}
            onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
          >
            <option value="">Selecione</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="MG">Minas Gerais</option>
            {/* Adicionar mais estados conforme necessário */}
          </select>
        </div>

        <div>
          <Label htmlFor="cep">CEP</Label>
          <Input
            id="cep"
            value={formData.cep}
            onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
            placeholder="00000-000"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="detalhesImovel">Detalhes do Imóvel</Label>
        <Textarea
          id="detalhesImovel"
          value={formData.detalhesImovel}
          onChange={(e) => setFormData({ ...formData, detalhesImovel: e.target.value })}
          placeholder="Número de quartos, metragem, características especiais, etc."
          rows={4}
        />
      </div>
    </div>
  );

  const renderEtapa3 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Selecione Data e Horário</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Label className="mb-4 block">Data Desejada *</Label>
          <Calendar
            mode="single"
            selected={formData.dataDesejada}
            onSelect={(date) => setFormData({ ...formData, dataDesejada: date })}
            className="rounded-lg border border-gray-200 p-3"
            disabled={(date) => date < new Date()}
          />
        </div>

        <div>
          <Label htmlFor="horario">Horário Preferencial *</Label>
          <select
            id="horario"
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#38030a] focus:border-transparent"
            value={formData.horarioDesejado}
            onChange={(e) => setFormData({ ...formData, horarioDesejado: e.target.value })}
          >
            <option value="">Selecione um horário</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Dica:</strong> Horários matinais (8h-11h) oferecem a melhor iluminação natural para fotos de interiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEtapa4 = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Dados de Contato</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4">Seus Dados (Corretor)</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nomeCorretor">Nome Completo *</Label>
            <Input
              id="nomeCorretor"
              value={formData.nomeCorretor}
              onChange={(e) => setFormData({ ...formData, nomeCorretor: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
              placeholder="(00) 00000-0000"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4">Dados do Proprietário</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="nomeProprietario">Nome do Proprietário</Label>
            <Input
              id="nomeProprietario"
              value={formData.nomeProprietario}
              onChange={(e) => setFormData({ ...formData, nomeProprietario: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="telefoneProprietario">Telefone do Proprietário</Label>
            <Input
              id="telefoneProprietario"
              value={formData.telefoneProprietario}
              onChange={(e) => setFormData({ ...formData, telefoneProprietario: e.target.value })}
              placeholder="(00) 00000-0000"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="localChaves">Local das Chaves</Label>
          <Input
            id="localChaves"
            value={formData.localChaves}
            onChange={(e) => setFormData({ ...formData, localChaves: e.target.value })}
            placeholder="Portaria, com proprietário, etc."
          />
        </div>

        <div>
          <Label htmlFor="autorizacao">Autorização de Entrada</Label>
          <Textarea
            id="autorizacao"
            value={formData.autorizacaoEntrada}
            onChange={(e) => setFormData({ ...formData, autorizacaoEntrada: e.target.value })}
            placeholder="Informações sobre autorização, pessoas autorizadas, etc."
            rows={3}
          />
        </div>

        <div>
          <Label htmlFor="observacoes">Observações Gerais</Label>
          <Textarea
            id="observacoes"
            value={formData.observacoes}
            onChange={(e) => setFormData({ ...formData, observacoes: e.target.value })}
            placeholder="Alguma informação adicional importante?"
            rows={3}
          />
        </div>
      </div>
    </div>
  );

  const renderEtapa5 = () => {
    const pacote = pacotes.find(p => p.id === formData.pacoteSelecionado);
    const servicosAdicionaisSelecionados = servicos.filter(s => formData.servicosAdicionais.includes(s.id));

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#1a0005] mb-6">Confirmação do Pedido</h3>
        
        <Card className="p-6 bg-gradient-to-br from-[#F5E6E8] to-white">
          <h4 className="font-bold text-lg mb-4 text-[#38030a]">Serviços Selecionados</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Pacote:</span>
              <span className="text-[#38030a] font-bold">{pacote?.nome} - {pacote?.preco}</span>
            </div>
            {servicosAdicionaisSelecionados.length > 0 && (
              <div>
                <span className="font-semibold">Serviços Adicionais:</span>
                <ul className="ml-4 mt-2 space-y-1">
                  {servicosAdicionaisSelecionados.map(s => (
                    <li key={s.id} className="text-sm">• {s.nome}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold text-lg mb-4 text-[#38030a]">Informações do Imóvel</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Tipo:</strong> {formData.tipoImovel}</p>
            <p><strong>Endereço:</strong> {formData.endereco}, {formData.complemento}</p>
            <p><strong>Cidade/Estado:</strong> {formData.cidade} - {formData.estado}</p>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold text-lg mb-4 text-[#38030a]">Data e Horário</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Data:</strong> {formData.dataDesejada?.toLocaleDateString('pt-BR')}</p>
            <p><strong>Horário:</strong> {formData.horarioDesejado}</p>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold text-lg mb-4 text-[#38030a]">Contato</h4>
          <div className="space-y-2 text-sm">
            <p><strong>Corretor:</strong> {formData.nomeCorretor}</p>
            <p><strong>Telefone:</strong> {formData.telefone}</p>
            <p><strong>E-mail:</strong> {formData.email}</p>
          </div>
        </Card>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Importante:</strong> Após confirmar, entraremos em contato em até 24 horas para validar o agendamento e fornecer mais informações.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {etapas.map((etapa) => (
              <div key={etapa.numero} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    etapaAtual >= etapa.numero
                      ? 'bg-[#38030a] text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {etapaAtual > etapa.numero ? <Check className="w-5 h-5" /> : etapa.numero}
                </div>
                <span className="text-xs mt-2 text-center">{etapa.titulo}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#38030a] transition-all duration-300"
              style={{ width: `${(etapaAtual / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <Card className="p-8 mb-8">
          {etapaAtual === 1 && renderEtapa1()}
          {etapaAtual === 2 && renderEtapa2()}
          {etapaAtual === 3 && renderEtapa3()}
          {etapaAtual === 4 && renderEtapa4()}
          {etapaAtual === 5 && renderEtapa5()}
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={etapaAnterior}
            disabled={etapaAtual === 1}
            className="border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>

          {etapaAtual < 5 ? (
            <Button
              onClick={proximaEtapa}
              className="bg-[#38030a] hover:bg-[#38001d] text-white"
            >
              Próxima Etapa
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={finalizarAgendamento}
              className="bg-white hover:bg-gray-100 text-[#38030a] shadow-lg font-semibold"
            >
              Confirmar Agendamento
              <Check className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NovoAgendamento;