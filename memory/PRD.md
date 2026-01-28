# Arkano - Sistema de Mídia Imobiliária

## Visão Geral
Site institucional premium para empresa de mídia imobiliária "Arkano", inspirado no Spiro Media.

## Requisitos Principais

### Site Institucional
- [x] Home com hero image de imóvel
- [x] Quem Somos
- [x] Serviços (Fotografia, Vídeo, Drone, Home Staging)
- [x] Como Funciona
- [x] Portfólio
- [x] Planos/Preços
- [x] Contato

### Sistema de Agendamento
- [x] Fluxo multi-step para pedidos
- [x] Seleção de pacotes (Fotografia, Vídeo, Drone)
- [x] Serviço adicional: Valorização Visual (Home Staging)
- [x] Coleta de dados do imóvel, data/hora e contato

### Área do Cliente
- [x] Registro e Login (JWT)
- [x] Histórico de pedidos
- [x] Status dos pedidos (Agendado, Em Produção, Entregue)
- [x] Download de arquivos entregues

### Galeria Pública
- [x] Link único por projeto
- [x] Visualização sem login
- [x] Download de arquivos

### Design
- [x] Paleta: Bordô (#38030a, #38001d) e preto
- [x] Hero com foto de imóvel + overlay de cor
- [x] Visual sofisticado e premium

## Status das Correções - 28/Jan/2025

### Corrigidos ✅
1. **Endpoint /health** - Adicionado para health checks de deploy
2. **Endpoint /api/health** - Rota alternativa via prefixo API
3. **Script PostHog removido** - Eliminado erro de console DataCloneError

## Arquitetura

```
/app
├── backend/
│   ├── server.py      # API FastAPI
│   ├── auth.py        # JWT Authentication
│   ├── models.py      # Pydantic models
│   └── .env           # Variáveis de ambiente
└── frontend/
    ├── src/
    │   ├── pages/     # Páginas React
    │   ├── components/# Header, Footer
    │   └── context/   # AuthContext
    └── public/
        └── index.html # Entry point
```

## APIs Principais
- `POST /api/auth/register` - Registro
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Usuário atual
- `POST /api/pedidos` - Criar pedido
- `GET /api/pedidos` - Listar pedidos do usuário
- `GET /api/pedidos/publico/{id}` - Galeria pública
- `GET /api/health` - Health check
- `GET /health` - Health check (root)

## Backlog

### P1 - Próximas
- [ ] Painel Admin/CMS para editar textos e preços

### P2 - Futuras
- [ ] Integração Stripe para pagamentos online
- [ ] Geração automática de sites por imóvel

## Pronto para Deploy
O site está pronto para ativação no Netlify ou outra plataforma.
