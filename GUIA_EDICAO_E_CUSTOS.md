# 📝 Guia de Edição de Conteúdo e Custos - ARKANO

## 1️⃣ EDIÇÃO DE TEXTOS E VALORES APÓS PUBLICAÇÃO

### ✅ O QUE VOCÊ PODE EDITAR FACILMENTE

Atualmente, o site tem **dois tipos de conteúdo**:

---

#### **A) CONTEÚDO FIXO (Hard-coded)**
**Localização:** Dentro dos arquivos de código

**O que está aqui:**
- Textos do site (títulos, descrições, parágrafos)
- Valores dos pacotes (R$ 399, R$ 799, R$ 1.499)
- Descrições de serviços
- Depoimentos de clientes
- Informações de contato

**Como editar:**
📌 **Opção 1: Você mesmo edita (Requer conhecimento técnico básico)**
- Acessa o código-fonte
- Edita os arquivos `.jsx` com um editor de texto
- Faz deploy novamente

📌 **Opção 2: Solicita edições (Recomendado inicialmente)**
- Me envia a lista de mudanças
- Eu edito e faço deploy
- Processo rápido (minutos a horas)

📌 **Opção 3: Painel Administrativo CMS (Melhor para longo prazo)**
- **NÃO está implementado ainda**
- Seria necessário desenvolver (2-3 dias de trabalho)
- Permite editar tudo via interface web
- Ideal para mudanças frequentes

---

#### **B) CONTEÚDO DINÂMICO (No Banco de Dados)**
**Localização:** MongoDB

**O que está aqui:**
- Usuários cadastrados
- Pedidos/agendamentos
- Status dos pedidos
- Arquivos entregues
- Links de sites

**Como gerenciar:**
✅ **Atualmente via MongoDB Atlas (painel web)**
- Acesso direto ao banco de dados
- Interface web do MongoDB
- Você pode visualizar, editar, deletar registros
- Não precisa tocar no código

---

### 🎯 ARQUIVOS ONDE ESTÃO OS PRINCIPAIS TEXTOS

Para sua referência, aqui estão os arquivos principais:

**Textos do Site:**
```
/app/frontend/src/pages/Home.jsx
- Títulos do hero
- Descrições de serviços
- Estatísticas (500+ imóveis, 95% satisfação)
- Depoimentos

/app/frontend/src/mock/data.js
- Pacotes e preços (Básico, Profissional, Premium)
- Lista de serviços completa
- Depoimentos (textos longos)
- Processo "Como Funciona"

/app/frontend/src/components/Footer.jsx
- Telefone: (11) 99999-9999
- Email: contato@arkano.com.br
- Localização: São Paulo, SP
```

**Exemplo de Edição Simples:**

Para mudar o preço do Pacote Básico de R$ 399 para R$ 450:

1. Abrir `/app/frontend/src/mock/data.js`
2. Localizar:
```javascript
{
  id: 'basico',
  nome: 'Básico',
  preco: 'R$ 399',  // ← MUDAR AQUI
```
3. Alterar para `preco: 'R$ 450'`
4. Salvar e fazer deploy

---

### 🚀 OPÇÕES PARA FACILITAR EDIÇÕES FUTURAS

#### **Opção A: Sistema CMS Personalizado** ⭐ RECOMENDADO
**Tempo de desenvolvimento:** 2-3 dias  
**Custo estimado:** Depende do desenvolvedor

**O que terá:**
- ✅ Painel administrativo web
- ✅ Editar textos, preços, serviços
- ✅ Gerenciar depoimentos
- ✅ Upload de imagens do portfólio
- ✅ Editar informações de contato
- ✅ Sem tocar no código nunca mais

**Como funciona:**
1. Acessa `arkano.com/admin`
2. Login com senha
3. Edita via formulários
4. Salva e já atualiza no site

---

#### **Opção B: Integração com CMS Headless**
**Tempo de integração:** 2-3 dias  
**Custo mensal:** $0-$9 (Strapi, Directus, Contentful)

**O que terá:**
- ✅ Interface de edição profissional
- ✅ Versionamento de conteúdo
- ✅ Múltiplos usuários administradores
- ✅ API automaticamente gerada

**Exemplos:**
- **Strapi** (gratuito, auto-hospedado)
- **Contentful** (grátis até 25k registros)
- **Sanity** ($0-$99/mês)

---

#### **Opção C: Google Sheets como CMS** 💰 MAIS BARATO
**Tempo de integração:** 1 dia  
**Custo:** Gratuito

**Como funciona:**
1. Você edita preços/textos em planilha Google
2. Site busca dados da planilha via API
3. Atualizações em tempo real

**Limitações:**
- Menos profissional
- Requer Google API configurada
- Não recomendado para grandes volumes

---

### 📊 RECOMENDAÇÃO PARA ARKANO

**Fase 1 (Agora - Primeiros 3 meses):**
- ✅ Edições via código (você solicita, eu faço)
- ✅ Banco de dados MongoDB para pedidos
- ⏱️ Velocidade: mudanças em minutos/horas

**Fase 2 (Após validação do negócio):**
- 🎯 Implementar painel administrativo CMS
- 🎯 Você edita tudo sozinho
- 🎯 Sem dependência de desenvolvedor

**Custo-benefício:**
- Esperar 3 meses para validar = **R$ 0 extras**
- Implementar CMS agora = **3 dias de desenvolvimento**

Minha sugestão: **comece sem CMS**, valide o negócio, depois implementamos.

---

## 2️⃣ CUSTOS PARA MANTER O SITE ATIVO

### 💰 CUSTOS OBRIGATÓRIOS

#### **A) HOSPEDAGEM + BANCO DE DADOS**

**Opção 1: Vercel + MongoDB Atlas** ⭐ RECOMENDADO
```
Frontend (Vercel):     GRATUITO
Backend (Vercel):      GRATUITO (hobby)
MongoDB (Atlas):       GRATUITO (até 512MB)
────────────────────────────────
TOTAL:                 R$ 0/mês
```

**Limitações do plano gratuito:**
- ✅ Ilimitadas visualizações
- ✅ 100 GB de banda/mês
- ⚠️ Backend "dorme" após inatividade (acorda em ~10s na primeira requisição)
- ⚠️ Banco de dados limitado a 512MB (~50.000 pedidos)

**Quando precisará pagar:**
- Quando tiver **muito tráfego** (>100k visitas/mês)
- Quando banco de dados **encher** (>50k pedidos)
- Se quiser **backend sempre ligado** (sem cold start)

**Custo se precisar upgrade:**
```
Vercel Pro:            $20/mês (~R$ 100)
MongoDB Atlas M2:      $9/mês (~R$ 45)
────────────────────────────────
TOTAL se crescer:      ~R$ 145/mês
```

---

**Opção 2: AWS / DigitalOcean / Heroku**
```
Servidor VPS:          $5-12/mês (~R$ 25-60)
MongoDB Atlas:         GRATUITO
────────────────────────────────
TOTAL:                 R$ 25-60/mês
```

**Vantagens:**
- ✅ Backend sempre ligado
- ✅ Mais controle

**Desvantagens:**
- ⚠️ Requer mais manutenção
- ⚠️ Precisa configurar servidor

---

**Opção 3: Emergent (Onde está rodando agora)**
```
Custo:                 ? (verificar com Emergent)
```

*Atualmente seu site está no ambiente de desenvolvimento Emergent. Para produção, precisaria migrar.*

---

#### **B) DOMÍNIO**
```
arkano.com.br:         R$ 40/ano
────────────────────────────────
TOTAL:                 R$ 3,30/mês
```

**Onde comprar:**
- Registro.br (domínios .com.br)
- GoDaddy / Namecheap (.com)

---

#### **C) CERTIFICADO SSL (HTTPS)**
```
Custo:                 GRATUITO
```
- Let's Encrypt (gratuito)
- Incluído no Vercel, AWS, DigitalOcean

---

### 💰 CUSTOS OPCIONAIS

#### **D) EMAIL PROFISSIONAL**
```
Google Workspace:      R$ 33/mês/usuário
Microsoft 365:         R$ 25/mês/usuário
Zoho Mail:            R$ 8/mês/usuário
────────────────────────────────
RECOMENDADO:          R$ 8-33/mês
```

**Exemplo:**
- contato@arkano.com.br
- comercial@arkano.com.br

---

#### **E) ARMAZENAMENTO DE ARQUIVOS (Fotos/Vídeos)**

Se você vai entregar arquivos pesados aos clientes:

```
AWS S3:               ~R$ 0,10/GB/mês + transferência
Cloudflare R2:        GRATUITO (10GB)
Google Drive:         R$ 10/mês (100GB)
Dropbox Business:     R$ 80/mês/usuário (3TB)
────────────────────────────────
RECOMENDADO INICIAL:  R$ 0-10/mês
```

**Estratégia:**
- Fase 1: Google Drive / Dropbox (links manuais)
- Fase 2: AWS S3 integrado (automático)

---

#### **F) BACKUP**
```
Custo:                GRATUITO
```
- MongoDB Atlas tem backup automático (plano free)
- Git/GitHub para código (gratuito)

---

### 📊 RESUMO DE CUSTOS

#### **🟢 OPÇÃO ECONÔMICA (Início)**
```
Hospedagem (Vercel):          R$ 0/mês
Banco (MongoDB Atlas):        R$ 0/mês
Domínio (.com.br):           R$ 3,30/mês
Email (Zoho):                R$ 8/mês
Armazenamento (Drive):       R$ 10/mês (opcional)
────────────────────────────────────────
TOTAL MENSAL:                R$ 21/mês
TOTAL ANUAL:                 R$ 250/ano
```

---

#### **🟡 OPÇÃO INTERMEDIÁRIA (Crescimento)**
```
Hospedagem (Vercel Pro):     R$ 100/mês
Banco (MongoDB M2):          R$ 45/mês
Domínio:                     R$ 3,30/mês
Email (Google Workspace):    R$ 33/mês
Armazenamento (S3):          R$ 20/mês
────────────────────────────────────────
TOTAL MENSAL:                R$ 201/mês
TOTAL ANUAL:                 R$ 2.412/ano
```

---

#### **🔴 OPÇÃO PROFISSIONAL (Alto Volume)**
```
Servidor dedicado:           R$ 300/mês
Banco MongoDB (M10):         R$ 290/mês
CDN (Cloudflare):           R$ 100/mês
Email + Storage:            R$ 100/mês
────────────────────────────────────────
TOTAL MENSAL:                R$ 790/mês
TOTAL ANUAL:                 R$ 9.480/ano
```

*Só necessário com MUITO tráfego (>1M visitas/mês)*

---

### 🎯 RECOMENDAÇÃO PARA VOCÊ

**Comece com OPÇÃO ECONÔMICA:**
```
✅ R$ 21/mês é suficiente para começar
✅ Suporta até ~10.000 visitas/mês
✅ Banco de dados para ~50.000 pedidos
✅ Upgrades simples quando crescer
```

**Quando fazer upgrade:**
1. Site com **muitos acessos** (>50k/mês)
2. Backend com **delays** (cold start incomoda)
3. Banco de dados **chegando no limite**
4. Precisa de **features enterprise**

---

### 📞 CUSTOS ADICIONAIS (Desenvolvimento Futuro)

Se quiser adicionar funcionalidades:

```
Painel Admin (CMS):           2-3 dias dev
Geração auto de sites:        3-5 dias dev
Pagamentos (Stripe):          2-3 dias dev
Notificações (Email/SMS):     1-2 dias dev
App Mobile:                   30+ dias dev
```

**Custo:** Depende do desenvolvedor contratado.

---

## ✅ RESUMO EXECUTIVO

### **Edição de Conteúdo:**
- ✅ **Agora:** Você solicita, alterações em horas
- 🔄 **Futuro:** Painel admin para editar sozinho
- 💰 **Custo futuro CMS:** 2-3 dias de desenvolvimento

### **Custos Mensais:**
- 🟢 **Início:** R$ 21/mês (suficiente para começar)
- 🟡 **Crescimento:** R$ 200/mês (quando escalar)
- 🔴 **Alto volume:** R$ 800/mês (só se explodir)

### **Minha Recomendação:**
1. ✅ Publique com hospedagem gratuita (Vercel)
2. ✅ Use R$ 21/mês (domínio + email)
3. ✅ Edições: me envie lista de mudanças
4. ⏰ Após 3-6 meses: implemente CMS
5. ⏰ Faça upgrade só quando necessário

**Você está pronto para lançar gastando quase nada!** 🚀

---

**Precisa de ajuda para:**
- Configurar hospedagem?
- Registrar domínio?
- Implementar CMS?
- Migrar para produção?

**É só pedir!** 😊
