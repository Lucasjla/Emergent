// Mock data para demonstração do sistema Arkano

export const servicos = [
  {
    id: 1,
    nome: 'Fotografia Profissional',
    descricao: 'Fotos de alta qualidade com equipamento profissional e edição avançada',
    icone: 'Camera',
    detalhes: ['Até 50 fotos editadas', 'Equipamento profissional', 'Edição avançada', 'Entrega em 48h']
  },
  {
    id: 2,
    nome: 'Vídeo Promocional',
    descricao: 'Vídeos cinematográficos que destacam o melhor do imóvel',
    icone: 'Video',
    detalhes: ['Vídeo de 1-2 minutos', 'Edição profissional', 'Trilha sonora', 'Entrega em 5 dias']
  },
  {
    id: 3,
    nome: 'Fotografia Aérea (Drone)',
    descricao: 'Imagens aéreas impressionantes que mostram toda a propriedade',
    icone: 'Plane',
    detalhes: ['Piloto certificado', 'Fotos e vídeos aéreos', 'Diferentes ângulos', 'Alta resolução']
  },
  {
    id: 4,
    nome: 'Tour Virtual 360°',
    descricao: 'Experiência imersiva que permite explorar o imóvel virtualmente',
    icone: 'ScanEye',
    detalhes: ['Tour interativo', 'Visualização 360°', 'Hotspots informativos', 'Compatível com VR']
  },
  {
    id: 5,
    nome: 'Planta Humanizada',
    descricao: 'Plantas baixas profissionais com móveis e decoração',
    icone: 'Layout',
    detalhes: ['Medidas precisas', 'Design realista', 'Alta qualidade', 'Diversos formatos']
  },
  {
    id: 6,
    nome: 'Ensaio Retrato',
    descricao: 'Fotos profissionais da equipe e corretores',
    icone: 'User',
    detalhes: ['Fotos corporativas', 'Vários looks', 'Edição profissional', 'Uso comercial']
  }
];

export const pacotes = [
  {
    id: 'basico',
    nome: 'Básico',
    preco: 'R$ 399',
    descricao: 'Ideal para imóveis pequenos e médios',
    recursos: [
      'Até 20 fotos profissionais',
      'Edição completa',
      'Entrega em 48h',
      'Formato digital HD',
      'Licença de uso comercial'
    ],
    destaque: false
  },
  {
    id: 'profissional',
    nome: 'Profissional',
    preco: 'R$ 799',
    descricao: 'Perfeito para imóveis de médio e alto padrão',
    recursos: [
      'Até 30 fotos profissionais',
      'Vídeo promocional (1-2 min)',
      'Edição avançada',
      'Entrega em 72h',
      'Formatos otimizados',
      'Suporte prioritário'
    ],
    destaque: true
  },
  {
    id: 'premium',
    nome: 'Premium',
    preco: 'R$ 1.499',
    descricao: 'Solução completa para imóveis de luxo',
    recursos: [
      'Fotos ilimitadas',
      'Vídeo premium (2-3 min)',
      'Fotografia aérea (drone)',
      'Tour virtual 360°',
      'Edição premium',
      'Entrega expressa em 48h',
      'Atendimento VIP'
    ],
    destaque: false
  }
];

export const depoimentos = [
  {
    id: 1,
    nome: 'Mariana Silva',
    cargo: 'Corretora - Imobiliária Premium',
    texto: 'O trabalho da Arkano transformou completamente a forma como apresento os imóveis. As fotos são impressionantes e meus clientes sempre elogiam a qualidade.',
    avatar: 'MS',
    rating: 5
  },
  {
    id: 2,
    nome: 'Roberto Cardoso',
    cargo: 'Diretor - RC Imóveis',
    texto: 'Profissionalismo e qualidade incomparáveis. O tempo de entrega é excelente e o resultado sempre supera as expectativas. Recomendo!',
    avatar: 'RC',
    rating: 5
  },
  {
    id: 3,
    nome: 'Juliana Mendes',
    cargo: 'Proprietária',
    texto: 'Contratei o pacote Premium para vender minha casa e valeu cada centavo. As fotos com drone e o vídeo foram decisivos para a venda rápida.',
    avatar: 'JM',
    rating: 5
  }
];

export const portfolioImages = [
  'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f',
  'https://images.unsplash.com/photo-1581784878214-8d5596b98a01',
  'https://images.unsplash.com/photo-1621293954908-907159247fc8',
  'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  'https://images.unsplash.com/photo-1605146769289-440113cc3d00',
  'https://images.unsplash.com/photo-1564078516393-cf04bd966897',
  'https://images.unsplash.com/photo-1615473787506-24ca223bf0e1'
];

export const processSteps = [
  {
    numero: '01',
    titulo: 'Agende o Serviço',
    descricao: 'Escolha o pacote ideal e agende data e horário através da nossa plataforma'
  },
  {
    numero: '02',
    titulo: 'Preparação do Imóvel',
    descricao: 'Orientamos sobre como preparar o espaço para obter os melhores resultados'
  },
  {
    numero: '03',
    titulo: 'Realização',
    descricao: 'Nossa equipe comparece no local e realiza todo o trabalho com equipamento profissional'
  },
  {
    numero: '04',
    titulo: 'Edição e Entrega',
    descricao: 'Editamos todo o material e entregamos em alta qualidade no prazo acordado'
  }
];

// Mock de agendamentos salvos localmente
export const getMockAgendamentos = () => {
  const saved = localStorage.getItem('arkano_agendamentos');
  return saved ? JSON.parse(saved) : [];
};

export const saveMockAgendamento = (agendamento) => {
  const agendamentos = getMockAgendamentos();
  const novoAgendamento = {
    ...agendamento,
    id: Date.now(),
    status: 'pendente',
    dataCriacao: new Date().toISOString()
  };
  agendamentos.push(novoAgendamento);
  localStorage.setItem('arkano_agendamentos', JSON.stringify(agendamentos));
  return novoAgendamento;
};