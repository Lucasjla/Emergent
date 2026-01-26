import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Download, Image, Video, ExternalLink, CheckCircle2, MapPin, Calendar, Package } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GaleriaPublica = () => {
  const { pedidoId } = useParams();
  const [pedido, setPedido] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPedido();
  }, [pedidoId]);

  const fetchPedido = async () => {
    try {
      const response = await axios.get(`${API}/pedidos/publico/${pedidoId}`);
      setPedido(response.data);
    } catch (error) {
      console.error('Error fetching pedido:', error);
      setError('Galeria não encontrada ou ainda não disponível');
    } finally {
      setLoading(false);
    }
  };

  const getFileIcon = (tipo) => {
    switch (tipo) {
      case 'foto':
        return Image;
      case 'video':
        return Video;
      default:
        return Download;
    }
  };

  const downloadAll = () => {
    pedido.arquivos_entregues.forEach((arquivo) => {
      window.open(arquivo.url, '_blank');
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#38030a] mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando galeria...</p>
        </div>
      </div>
    );
  }

  if (error || !pedido) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ExternalLink className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Galeria Não Encontrada</h2>
          <p className="text-gray-600 mb-6">
            {error || 'Esta galeria não existe ou ainda não está disponível.'}
          </p>
          <Link to="/">
            <Button className="bg-[#38030a] hover:bg-[#38001d] text-white">
              Voltar ao Site
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#38030a] via-[#38001d] to-[#1a0005] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="inline-block mb-6">
              <h1 className="text-3xl font-bold">ARKANO</h1>
            </Link>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sua Galeria de Imagens
            </h2>
            <p className="text-xl text-gray-200">
              {pedido.tipo_imovel.charAt(0).toUpperCase() + pedido.tipo_imovel.slice(1)} - {pedido.endereco}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info Card */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#38030a] rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Endereço</div>
                <div className="font-semibold text-gray-900">{pedido.cidade}, {pedido.estado}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#38030a] rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Pacote</div>
                <div className="font-semibold text-gray-900">
                  {pedido.pacote_selecionado.charAt(0).toUpperCase() + pedido.pacote_selecionado.slice(1)}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Status</div>
                <div className="font-semibold text-green-600">Entregue</div>
              </div>
            </div>
          </div>

          {pedido.link_site_imovel && (
            <div className="mt-6 pt-6 border-t">
              <a
                href={pedido.link_site_imovel}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-[#38030a] hover:text-[#38001d] font-semibold"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Ver Site do Imóvel</span>
              </a>
            </div>
          )}
        </Card>

        {/* Files Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">
              Arquivos Disponíveis ({pedido.arquivos_entregues.length})
            </h3>
            {pedido.arquivos_entregues.length > 1 && (
              <Button
                onClick={downloadAll}
                className="bg-[#38030a] hover:bg-[#38001d] text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Todos
              </Button>
            )}
          </div>

          {pedido.arquivos_entregues.length === 0 ? (
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Nenhum arquivo disponível ainda</h3>
              <p className="text-gray-500">Os arquivos serão disponibilizados em breve.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pedido.arquivos_entregues.map((arquivo, idx) => {
                const FileIcon = getFileIcon(arquivo.tipo);
                return (
                  <Card
                    key={idx}
                    className="p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-[#38030a] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate">
                            {arquivo.nome}
                          </div>
                          <div className="text-xs text-gray-500">
                            {arquivo.tipo.toUpperCase()}
                            {arquivo.tamanho && ` • ${(arquivo.tamanho / 1024 / 1024).toFixed(2)} MB`}
                          </div>
                        </div>
                      </div>

                      <a
                        href={arquivo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto"
                      >
                        <Button
                          className="w-full bg-white border-2 border-[#38030a] text-[#38030a] hover:bg-[#38030a] hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Baixar
                        </Button>
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Message */}
        <Card className="p-6 bg-gradient-to-r from-[#38030a]/5 to-[#38001d]/5 border-[#38030a]/20">
          <div className="text-center">
            <p className="text-gray-700 mb-2">
              <strong>Dúvidas?</strong> Entre em contato conosco
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:+5511999999999" className="text-[#38030a] hover:underline">
                (11) 99999-9999
              </a>
              <span className="text-gray-400">•</span>
              <a href="mailto:contato@arkano.com.br" className="text-[#38030a] hover:underline">
                contato@arkano.com.br
              </a>
            </div>
          </div>
        </Card>

        {/* Branding */}
        <div className="text-center mt-8">
          <Link to="/" className="inline-block">
            <img
              src="https://avatars.githubusercontent.com/in/1201222?s=80"
              alt="ARKANO"
              className="h-8 opacity-50 hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} Arkano - Fotografia Imobiliária
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaleriaPublica;