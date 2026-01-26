# 📸 Sistema de Galeria Pública - ARKANO

## O Que Foi Implementado

✅ **Galeria pública de fotos** para cada pedido  
✅ **Link único compartilhável** (não precisa de login)  
✅ **Download individual ou em lote** de todos os arquivos  
✅ **Design limpo e profissional**  
✅ **Acesso via link direto**  

---

## Como Funciona

### 1️⃣ Para Você (Admin)

Quando você finalizar um pedido e fazer upload dos arquivos:

1. Acesse o **painel do MongoDB** ou **API admin**
2. Mude o status do pedido para `entregue`
3. Adicione os arquivos (fotos/vídeos) no campo `arquivos_entregues`
4. Copie o ID do pedido

**O link da galeria será:**
```
https://seusite.com/galeria/[ID-DO-PEDIDO]
```

Exemplo:
```
https://arkano.com.br/galeria/abc123xyz
```

---

### 2️⃣ Para o Cliente

O cliente recebe o link e pode:

✅ **Ver todas as fotos e vídeos**  
✅ **Baixar arquivos individualmente**  
✅ **Baixar todos de uma vez** (botão "Baixar Todos")  
✅ **Acessar o link do site do imóvel** (se disponível)  
✅ **Sem precisar fazer login** (acesso público)  

---

### 3️⃣ Na Área do Cliente (Logado)

Clientes logados têm um botão extra:

✅ **"Copiar Link da Galeria"** - copia o link automaticamente  
✅ Podem compartilhar com outros corretores/clientes  
✅ Link funciona mesmo sem login  

---

## Estrutura dos Arquivos no Banco

Cada pedido tem um campo `arquivos_entregues` que é uma lista:

```javascript
arquivos_entregues: [
  {
    tipo: 'foto',
    nome: 'Sala-Principal-01.jpg',
    url: 'https://seuservidor.com/arquivos/abc123/sala01.jpg',
    tamanho: 2048000,  // em bytes (opcional)
    data_upload: '2025-01-26T12:00:00Z'
  },
  {
    tipo: 'video',
    nome: 'Tour-Virtual.mp4',
    url: 'https://seuservidor.com/arquivos/abc123/tour.mp4',
    tamanho: 52428800,
    data_upload: '2025-01-26T12:00:00Z'
  }
]
```

---

## Como Adicionar Arquivos (Manualmente via MongoDB)

### Opção A: MongoDB Atlas Interface

1. Acesse **MongoDB Atlas** → sua base de dados
2. Vá em **Collections** → `pedidos`
3. Encontre o pedido pelo ID
4. Clique em **Edit**
5. No campo `arquivos_entregues`, adicione:

```json
{
  "tipo": "foto",
  "nome": "Foto-Sala-01.jpg",
  "url": "https://seu-link-do-arquivo.com/foto.jpg",
  "tamanho": 2048000,
  "data_upload": "2025-01-26T12:00:00Z"
}
```

6. Mude `status` para `entregue`
7. Salve

---

### Opção B: Via API (Usando curl/Postman)

```bash
curl -X POST http://seusite.com/api/admin/pedidos/[PEDIDO_ID]/arquivos \
  -H "Content-Type: application/json" \
  -d '{
    "tipo": "foto",
    "nome": "Sala-01.jpg",
    "url": "https://link-do-arquivo.com/sala01.jpg",
    "tamanho": 2048000
  }'
```

---

### Opção C: Sistema de Upload (Futuro)

🔜 **A implementar:**
- Interface web para fazer upload direto
- Arrastar e soltar arquivos
- Upload para AWS S3 ou Google Drive
- Geração automática de links

**Tempo de desenvolvimento:** 2-3 dias

---

## Onde Hospedar os Arquivos?

### 🟢 **Opção 1: Google Drive** (Mais Simples)

**Como funciona:**
1. Faça upload das fotos para o Google Drive
2. Gere link público de compartilhamento
3. Cole o link no campo `url`

**Vantagens:**
✅ Gratuito até 15GB  
✅ Fácil de usar  
✅ Sem código necessário  

**Desvantagens:**
⚠️ Link genérico (não personalizado)  
⚠️ Limite de downloads simultâneos  

---

### 🟡 **Opção 2: Dropbox / OneDrive**

Similar ao Google Drive, mas com integrações diferentes.

**Custo:** Gratuito (planos limitados) ou R$ 40-80/mês

---

### 🟢 **Opção 3: AWS S3** (Profissional)

**Como funciona:**
1. Upload direto via painel admin (quando implementado)
2. Arquivos ficam na nuvem AWS
3. Links automáticos gerados
4. CDN para velocidade

**Vantagens:**
✅ Profissional e escalável  
✅ Links personalizados  
✅ Sem limite de downloads  
✅ Integração automática  

**Custo:**
- ~R$ 0,10/GB armazenado/mês
- ~R$ 0,30/GB transferido
- **Exemplo:** 100GB de fotos + 1TB de downloads = ~R$ 350/mês

---

### 🔴 **Opção 4: Cloudflare R2** (Recomendado)

**Como funciona:**
- Similar ao AWS S3
- Mas SEM custo de transferência de dados

**Vantagens:**
✅ 10GB gratuitos  
✅ Transfer\u00eancia de dados GRATUITA (economia massiva)  
✅ R$ 0,015/GB armazenado após 10GB  

**Custo:**
- **Exemplo:** 100GB de fotos = ~R$ 7/mês (vs R$ 350 na AWS)

---

## Fluxo de Trabalho Recomendado

### **Fase 1 (Agora - Manual):**

1. Cliente faz pedido pelo site
2. Você realiza o ensaio fotográfico
3. Edita as fotos
4. **Upload manual para Google Drive**
5. **Copia links públicos**
6. **Adiciona no MongoDB** via interface
7. **Envia link da galeria** para o cliente

**Tempo:** ~10 min por pedido

---

### **Fase 2 (Após 3-6 meses - Semi-automático):**

1. Cliente faz pedido pelo site ✅ (já funciona)
2. Você realiza o ensaio fotográfico
3. Edita as fotos
4. **Faz upload via painel admin** (a implementar)
5. Sistema gera links automaticamente
6. **Email automático** enviado ao cliente com link

**Tempo:** ~2 min por pedido

---

### **Fase 3 (Futuro - Totalmente Automático):**

1. Cliente faz pedido ✅
2. Você realiza ensaio
3. Edita e faz upload no celular (app mobile)
4. Sistema processa e otimiza
5. Email automático com galeria
6. Cliente recebe notificação SMS/WhatsApp

**Tempo:** ~1 min por pedido

---

## Exemplo de Uso Completo

### Cenário: Cliente "João Silva" fez pedido

**1. João agenda pelo site:**
- Pacote: Profissional (R$ 799)
- Imóvel: Apartamento na Av. Paulista
- Data: 30/01/2025

**2. Você realiza o ensaio:**
- 30 fotos editadas
- 1 vídeo de 2 minutos

**3. Upload dos arquivos:**
```
Google Drive/Arkano/
  └── joao-silva-apartamento-paulista/
      ├── foto-01.jpg
      ├── foto-02.jpg
      ├── ...
      └── video-tour.mp4
```

**4. Adiciona no MongoDB:**
```javascript
status: 'entregue',
arquivos_entregues: [
  { tipo: 'foto', nome: 'Foto 01 - Sala', url: 'https://drive.google.com/...' },
  { tipo: 'foto', nome: 'Foto 02 - Cozinha', url: 'https://drive.google.com/...' },
  // ... mais 28 fotos
  { tipo: 'video', nome: 'Tour Virtual', url: 'https://drive.google.com/...' }
]
```

**5. João recebe link:**
```
https://arkano.com.br/galeria/abc123xyz
```

**6. João acessa e vê:**
- ✅ 30 fotos em cards bonitos
- ✅ 1 vídeo
- ✅ Botão "Baixar Todos"
- ✅ Informações do imóvel

**7. João compartilha:**
- Envia link para proprietário
- Envia para imobiliária
- Posta nas redes sociais
- Todos acessam sem login

---

## Segurança e Privacidade

### ✅ **Está Seguro:**
- Link único e aleatório (difícil de adivinhar)
- Só funciona se status = 'entregue'
- Arquivos só aparecem se adicionados

### ⚠️ **Limitações:**
- Qualquer pessoa com o link pode acessar
- Não tem senha ou expiração (ainda)

### 🔜 **Melhorias Futuras:**
- Link com senha opcional
- Link com expiração (ex: válido por 30 dias)
- Contador de downloads
- Marca d'água opcional nas fotos

---

## APIs Disponíveis

### **Buscar Galeria Pública:**
```
GET /api/pedidos/publico/{pedidoId}
```

**Resposta:**
```json
{
  "id": "abc123",
  "tipo_imovel": "apartamento",
  "endereco": "Av. Paulista, 1000",
  "cidade": "São Paulo",
  "estado": "SP",
  "pacote_selecionado": "profissional",
  "status": "entregue",
  "arquivos_entregues": [
    {
      "tipo": "foto",
      "nome": "Sala-01.jpg",
      "url": "https://...",
      "tamanho": 2048000
    }
  ],
  "link_site_imovel": "https://..."
}
```

---

### **Adicionar Arquivo (Admin):**
```
POST /api/admin/pedidos/{pedidoId}/arquivos
```

**Body:**
```json
{
  "tipo": "foto",
  "nome": "Quarto-Master.jpg",
  "url": "https://seu-storage.com/foto.jpg",
  "tamanho": 3145728
}
```

---

### **Atualizar Link do Site:**
```
PUT /api/admin/pedidos/{pedidoId}/link-site
```

**Body:**
```json
{
  "link": "https://imovel-exemplo.com"
}
```

---

## Próximos Passos Recomendados

### **Curto Prazo (1-2 semanas):**
1. ✅ Testar sistema de galeria
2. ✅ Fazer primeiro pedido real
3. ✅ Validar processo de upload manual
4. ✅ Ajustar design se necessário

### **Médio Prazo (1-2 meses):**
1. 🔄 Implementar painel admin para upload
2. 🔄 Integrar com Cloudflare R2 ou AWS S3
3. 🔄 Sistema de notificação por email
4. 🔄 Estatísticas de downloads

### **Longo Prazo (3-6 meses):**
1. 🔮 App mobile para upload
2. 🔮 Processamento automático de imagens
3. 🔮 Marca d'água automática
4. 🔮 Galeria com senha/expiração

---

## Conclusão

✅ **Sistema de galeria está 100% funcional**  
✅ **Clientes podem baixar arquivos facilmente**  
✅ **Links compartilháveis sem login**  
✅ **Design profissional e responsivo**  

**Você já pode começar a usar!** 🚀

Para facilitar ainda mais, recomendo implementar o **painel de upload admin** em breve.

---

**Dúvidas?** É só perguntar! 😊
