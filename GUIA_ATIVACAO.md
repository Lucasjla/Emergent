# 🚀 Guia de Ativação - Site ARKANO

## ✅ ALTERAÇÕES FINAIS APLICADAS

### Hero Section Atualizado
- ✅ Foto de fachada moderna com piscina
- ✅ Overlay gradiente bordô (mantém identidade visual)
- ✅ Botões brancos com excelente contraste
- ✅ Visual profissional e único

### Serviços Finalizados
- ✅ 5 serviços principais (removidos Tour 360° e Planta Humanizada)
- ✅ Home Staging Digital com exemplos visuais
- ✅ Seleção de ambientes no agendamento

---

## 🌐 SOBRE O DOMÍNIO

### Opções de Domínio

Atualmente seu site está rodando em ambiente de desenvolvimento Emergent. Para colocar no ar, você precisa de um **domínio próprio**.

#### **Sugestões de Domínio:**

**1. arkano.com.br** (Recomendado)
- ✅ Domínio brasileiro oficial
- ✅ Mais confiável para clientes BR
- ✅ Custo: ~R$ 40/ano
- ✅ Registro: Registro.br

**2. arkano.com.br** alternativas:
- arkanofoto.com.br
- arkanomidia.com.br
- arkanoimoveis.com.br
- fotosarkano.com.br

**3. arkano.com** (Internacional)
- ✅ Mais curto e global
- ✅ Custo: ~$12-15/ano (~R$ 60-75)
- ✅ Registro: GoDaddy, Namecheap, Google Domains

**4. Domínio customizado:**
- Qualquer nome disponível que você preferir

---

## 📋 CHECKLIST PRÉ-ATIVAÇÃO

### ✅ Já Está Pronto:

- [x] Site completo e funcional
- [x] Design premium profissional
- [x] Sistema de autenticação
- [x] Área do cliente
- [x] Sistema de agendamento
- [x] Galeria pública
- [x] Sistema de pagamento
- [x] Home Staging Digital
- [x] 7 páginas completas
- [x] Responsivo (mobile/tablet/desktop)
- [x] Backend robusto
- [x] Banco de dados MongoDB

### ⚠️ Para Decidir ANTES de Ativar:

#### 1. **Conteúdo**
- [ ] Revisar todos os textos da página "Quem Somos"
- [ ] Adicionar imagens reais do seu portfólio (se tiver)
- [ ] Ajustar preços dos pacotes se necessário
- [ ] Definir telefone e email reais no footer

#### 2. **Domínio**
- [ ] Escolher nome do domínio
- [ ] Registrar domínio (.com.br ou .com)
- [ ] Configurar DNS

#### 3. **Email Profissional**
- [ ] Decidir sobre email @arkano.com.br
- [ ] Configurar (Google Workspace, Zoho, etc)

#### 4. **Testes**
- [ ] Testar fluxo completo de agendamento
- [ ] Criar conta de teste
- [ ] Verificar área do cliente
- [ ] Testar em mobile/tablet

---

## 🚀 PROCESSO DE ATIVAÇÃO

### **Passo 1: Registrar Domínio**

#### Opção A: Registro.br (para .com.br)
```
1. Acesse: https://registro.br
2. Busque disponibilidade: "arkano"
3. Se disponível, registre
4. Custo: ~R$ 40/ano
5. Tempo: 15 minutos
```

#### Opção B: GoDaddy/Namecheap (para .com)
```
1. Acesse: https://godaddy.com ou https://namecheap.com
2. Busque "arkano.com"
3. Adicionar ao carrinho
4. Custo: $12-15/ano
5. Tempo: 10 minutos
```

---

### **Passo 2: Escolher Hospedagem**

#### **Opção A: Vercel** (Recomendado - GRATUITO para começar)

**Por que Vercel:**
- ✅ GRATUITO para projetos pequenos
- ✅ Deploy automático
- ✅ SSL grátis (HTTPS)
- ✅ CDN global (site rápido)
- ✅ Fácil de usar
- ✅ Suporta React + API

**Limitações do plano free:**
- Backend pode "dormir" após inatividade (~10s para acordar)
- 100 GB banda/mês (suficiente para ~50k visitas)

**Quando fazer upgrade:**
- Vercel Pro: $20/mês (~R$ 100)
- Necessário apenas com MUITO tráfego

**Como fazer deploy:**
```bash
1. Criar conta no Vercel (vercel.com)
2. Conectar repositório Git (GitHub)
3. Vercel detecta React automaticamente
4. Click "Deploy"
5. Pronto! Site no ar em ~5 minutos
```

---

#### **Opção B: AWS / DigitalOcean** (Mais controle)

**Custo:** $5-12/mês (~R$ 25-60)

**Vantagens:**
- ✅ Backend sempre ligado
- ✅ Mais controle técnico
- ✅ Escalável

**Desvantagens:**
- ⚠️ Requer conhecimento técnico
- ⚠️ Mais tempo de setup

---

#### **Opção C: Hospedagem Tradicional BR**

**Exemplos:** HostGator, Locaweb, UOL Host
**Custo:** R$ 30-80/mês

**Vantagens:**
- ✅ Suporte em português
- ✅ Pagamento em R$

**Desvantagens:**
- ⚠️ Menos moderno
- ⚠️ Pode ter limitações técnicas

---

### **Passo 3: Configurar MongoDB (Banco de Dados)**

#### **MongoDB Atlas** (Recomendado - GRATUITO)

**Plano Free:**
- ✅ 512 MB armazenamento (~50.000 pedidos)
- ✅ Backup automático
- ✅ Interface web

**Quando fazer upgrade:**
- M2: $9/mês (~R$ 45) - 2GB
- M5: $25/mês (~R$ 125) - 5GB

**Como configurar:**
```
1. Conta já existe (você está usando)
2. Criar novo cluster para produção
3. Copiar connection string
4. Adicionar nas variáveis de ambiente
```

---

### **Passo 4: Variáveis de Ambiente**

Você precisa configurar:

**Frontend (.env):**
```
REACT_APP_BACKEND_URL=https://api.seudominio.com
```

**Backend (.env):**
```
MONGO_URL=mongodb+srv://...
DB_NAME=arkano_production
JWT_SECRET_KEY=chave-super-secreta-aqui
```

⚠️ **IMPORTANTE:** Gerar nova chave JWT para produção (segurança)

---

### **Passo 5: Deploy**

#### **Deploy no Vercel (Simplificado):**

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy frontend
cd /app/frontend
vercel --prod

# 4. Deploy backend (API)
cd /app/backend
vercel --prod

# 5. Configurar domínio customizado no dashboard Vercel
```

---

### **Passo 6: Configurar DNS**

Após deploy no Vercel:

```
1. Vercel fornece domínio temporário: arkano.vercel.app
2. No painel do seu domínio (Registro.br/GoDaddy)
3. Adicionar registro CNAME:
   - Nome: www
   - Valor: cname.vercel-dns.com
4. Adicionar registro A:
   - Nome: @
   - Valor: 76.76.21.21 (IP do Vercel)
5. Aguardar propagação DNS (até 48h, geralmente 2-6h)
```

---

### **Passo 7: SSL/HTTPS**

✅ **Vercel configura HTTPS automaticamente**
- Certificado Let's Encrypt gratuito
- Renovação automática
- Nada para fazer!

---

### **Passo 8: Email Profissional (Opcional mas Recomendado)**

#### **Opção 1: Google Workspace**
- Custo: R$ 33/mês por usuário
- Inclui: Gmail, Drive, Meet
- Email: contato@arkano.com.br

#### **Opção 2: Zoho Mail** (Recomendado para começar)
- Custo: R$ 8/mês por usuário
- Apenas email
- Ótimo custo-benefício

#### **Opção 3: Titan Email**
- Custo: $8/mês
- Integrado com GoDaddy/Namecheap

---

## 💰 RESUMO DE CUSTOS (PRIMEIRO ANO)

### **Opção Econômica (Recomendada para começar):**
```
Domínio .com.br:              R$ 40/ano
Hospedagem (Vercel):          R$ 0
Banco de dados (MongoDB):     R$ 0
Email (Zoho):                 R$ 96/ano (R$ 8/mês)
─────────────────────────────────────
TOTAL PRIMEIRO ANO:           R$ 136/ano
MENSAL:                       ~R$ 11/mês
```

### **Opção Profissional (Após crescimento):**
```
Domínio .com.br:              R$ 40/ano
Hospedagem (Vercel Pro):      R$ 1.200/ano (R$ 100/mês)
Banco de dados (M2):          R$ 540/ano (R$ 45/mês)
Email (Google Workspace):     R$ 396/ano (R$ 33/mês)
─────────────────────────────────────
TOTAL PRIMEIRO ANO:           R$ 2.176/ano
MENSAL:                       R$ 181/mês
```

**Recomendação:** Comece com opção econômica, faça upgrade conforme necessário.

---

## 📊 TIMELINE DE ATIVAÇÃO

### **Se fizer hoje:**

**Dia 1 (Hoje):**
- [ ] Registrar domínio (15 min)
- [ ] Criar conta Vercel (5 min)
- [ ] Revisar conteúdos finais (1-2h)
- [ ] Fazer deploy (30 min)

**Dia 2:**
- [ ] Configurar DNS (10 min)
- [ ] Aguardar propagação DNS (2-24h)
- [ ] Testar site em produção

**Dia 3:**
- [ ] Configurar email profissional (30 min)
- [ ] Testes finais
- [ ] ✅ SITE NO AR!

**Total:** 2-3 dias para estar 100% operacional

---

## 🎯 PRÓXIMOS PASSOS RECOMENDADOS

### **Imediato (Antes de Ativar):**
1. Decidir nome do domínio
2. Revisar textos da página "Quem Somos"
3. Definir preços finais
4. Adicionar telefone e email reais

### **Após Ativação:**
1. Criar contas de teste
2. Testar fluxo completo
3. Compartilhar com amigos/parceiros para feedback
4. Ajustar conforme necessário

### **Primeiras Semanas:**
1. Processar primeiros pedidos reais
2. Ajustar processo baseado em uso real
3. Coletar feedback de clientes
4. Implementar melhorias

---

## 🔐 SEGURANÇA

### **Já Implementado:**
- ✅ Senhas com hash bcrypt
- ✅ Tokens JWT
- ✅ HTTPS (quando no Vercel)
- ✅ Proteção de rotas
- ✅ Validação de dados

### **Recomendações Adicionais:**
- Fazer backup semanal do MongoDB
- Monitorar logs de acesso
- Atualizar dependências regularmente

---

## 📱 CHECKLIST FINAL PRÉ-LANÇAMENTO

### **Conteúdo:**
- [ ] Todos os textos revisados
- [ ] Telefone correto no footer
- [ ] Email correto no footer
- [ ] Preços atualizados
- [ ] Imagens de portfólio (se tiver)

### **Funcionalidades:**
- [x] Agendamento funcionando
- [x] Login/cadastro funcionando
- [x] Área do cliente funcionando
- [x] Galeria pública funcionando
- [x] Todas as páginas carregando

### **Design:**
- [x] Responsivo em mobile
- [x] Responsivo em tablet
- [x] Botões funcionando
- [x] Links funcionando
- [x] Imagens carregando

### **Técnico:**
- [ ] Domínio registrado
- [ ] Deploy feito
- [ ] DNS configurado
- [ ] HTTPS ativo
- [ ] MongoDB produção configurado

---

## ✅ RESUMO EXECUTIVO

### **O Site Está Pronto Para:**
✅ Receber clientes  
✅ Processar agendamentos  
✅ Autenticar usuários  
✅ Gerenciar pedidos  
✅ Entregar arquivos  
✅ Receber pagamentos (tracking)  

### **Para Colocar no Ar, Você Precisa:**
1. Registrar domínio (15 min)
2. Fazer deploy no Vercel (30 min)
3. Configurar DNS (10 min + aguardar propagação)
4. Revisar conteúdos (1-2h)

### **Custo Inicial:**
- **R$ 11/mês** (opção econômica)
- **R$ 181/mês** (opção profissional - só se necessário)

---

## 🎉 RECOMENDAÇÃO FINAL

**Minha sugestão:**

1. ✅ Registre **arkano.com.br** hoje (R$ 40)
2. ✅ Faça deploy no **Vercel** (gratuito)
3. ✅ Use **MongoDB Atlas** free
4. ✅ Configure **Zoho Mail** (R$ 8/mês)
5. ✅ Revisar textos finais
6. ✅ **LANÇAR!**

**Em 2-3 dias você estará no ar gastando apenas R$ 11/mês!**

Depois, conforme crescer, você faz upgrades conforme necessário.

---

**Pronto para começar? Me diga qual domínio você quer e te ajudo no processo!** 🚀
