import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Package, Clock, CheckCircle2, Download, ExternalLink, Calendar, User, LogOut } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AreaCliente = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated, loading: authLoading } = useAuth();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPedido, setSelectedPedido] = useState(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, authLoading, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPedidos();
    }
  }, [isAuthenticated]);

  const fetchPedidos = async () => {
    try {
      const response = await axios.get(`${API}/pedidos`);
      setPedidos(response.data);
    } catch (error) {
      console.error('Error fetching pedidos:', error);
      toast.error('Erro ao carregar pedidos');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'agendado':
        return 'bg-blue-100 text-blue-800';
      case 'em_producao':
        return 'bg-yellow-100 text-yellow-800';
      case 'entregue':
        return 'bg-green-100 text-green-800';
      case 'cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'agendado':
        return 'Agendado';
      case 'em_producao':
        return 'Em Produção';
      case 'entregue':
        return 'Entregue';
      case 'cancelado':
        return 'Cancelado';
      default:
        return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'agendado':
        return Clock;
      case 'em_producao':
        return Package;
      case 'entregue':
        return CheckCircle2;
      default:
        return Clock;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    toast.success('Logout realizado com sucesso');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#38030a] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-[#38030a]">Minha Área</h1>
              <p className="text-gray-600 mt-1">Bem-vindo(a), {user?.nome}</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#38030a] rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-[#38030a]">{pedidos.length}</div>
                <div className="text-sm text-gray-600">Total de Pedidos</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-500">
                  {pedidos.filter(p => p.status === 'agendado').length}
                </div>
                <div className="text-sm text-gray-600">Agendados</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-500">
                  {pedidos.filter(p => p.status === 'em_producao').length}
                </div>
                <div className="text-sm text-gray-600">Em Produção</div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-500">
                  {pedidos.filter(p => p.status === 'entregue').length}
                </div>
                <div className="text-sm text-gray-600">Entregues</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Pedidos List */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1a0005]">Meus Pedidos</h2>
            <Button
              onClick={() => navigate('/novo-agendamento')}
              className="bg-[#38030a] hover:bg-[#38001d] text-white"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Novo Agendamento
            </Button>
          </div>

          {pedidos.length === 0 ? (
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum pedido encontrado</h3>
              <p className="text-gray-500 mb-6">Faça seu primeiro agendamento agora!</p>
              <Button
                onClick={() => navigate('/novo-agendamento')}
                className="bg-[#38030a] hover:bg-[#38001d] text-white"
              >
                Agendar Ensaio
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {pedidos.map((pedido) => {
                const StatusIcon = getStatusIcon(pedido.status);
                return (
                  <Card
                    key={pedido.id}
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setSelectedPedido(pedido.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(pedido.status)}`}>
                            {getStatusLabel(pedido.status)}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(pedido.created_at).toLocaleDateString('pt-BR')}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-[#1a0005] mb-2">
                          {pedido.tipo_imovel.charAt(0).toUpperCase() + pedido.tipo_imovel.slice(1)} - {pedido.endereco}
                        </h3>

                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>
                              {new Date(pedido.data_desejada).toLocaleDateString('pt-BR')} às {pedido.horario_desejado}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Package className="w-4 h-4" />
                            <span>{pedido.pacote_selecionado}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end space-y-2">
                        {pedido.status === 'entregue' && pedido.arquivos_entregues?.length > 0 && (
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedPedido(pedido.id);
                            }}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Ver Arquivos
                          </Button>
                        )}
                        {pedido.link_site_imovel && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(pedido.link_site_imovel, '_blank');
                            }}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver Site
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Arquivos Entregues */}
                    {selectedPedido === pedido.id && pedido.arquivos_entregues?.length > 0 && (
                      <div className="mt-6 pt-6 border-t">
                        <h4 className="font-semibold text-[#1a0005] mb-4">Arquivos Disponíveis</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {pedido.arquivos_entregues.map((arquivo, idx) => (
                            <a
                              key={idx}
                              href={arquivo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <Download className="w-5 h-5 text-[#38030a]" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">
                                  {arquivo.nome}
                                </div>
                                <div className="text-xs text-gray-500">
                                  {arquivo.tipo.toUpperCase()}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AreaCliente;