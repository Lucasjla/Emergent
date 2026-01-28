from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
import uuid

# User Models
class UserCreate(BaseModel):
    nome: str
    email: EmailStr
    telefone: str
    senha: str

class UserLogin(BaseModel):
    email: EmailStr
    senha: str

class User(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    nome: str
    email: EmailStr
    telefone: str
    senha_hash: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class UserResponse(BaseModel):
    id: str
    nome: str
    email: str
    telefone: str

# Pedido Models
class PedidoStatus(BaseModel):
    status: str  # 'agendado', 'em_producao', 'entregue', 'cancelado'
    data: datetime = Field(default_factory=datetime.utcnow)
    observacao: Optional[str] = None

class ArquivoEntregue(BaseModel):
    tipo: str  # 'foto', 'video', 'drone', 'tour', 'planta'
    url: str
    nome: str
    tamanho: Optional[int] = None
    data_upload: datetime = Field(default_factory=datetime.utcnow)

class Pedido(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    
    # Serviços
    pacote_selecionado: str
    servicos_adicionais: List[int] = []
    ambientes_home_staging: List[str] = []  # Para Home Staging Digital
    
    # Imóvel
    tipo_imovel: str
    endereco: str
    complemento: Optional[str] = None
    cidade: str
    estado: str
    cep: Optional[str] = None
    detalhes_imovel: Optional[str] = None
    
    # Data/Hora
    data_desejada: datetime
    horario_desejado: str
    
    # Contato
    nome_corretor: str
    telefone: str
    email: str
    nome_proprietario: Optional[str] = None
    telefone_proprietario: Optional[str] = None
    local_chaves: Optional[str] = None
    autorizacao_entrada: Optional[str] = None
    observacoes: Optional[str] = None
    
    # Status e Entrega
    status: str = 'agendado'  # 'agendado', 'em_producao', 'entregue', 'cancelado'
    historico_status: List[PedidoStatus] = []
    arquivos_entregues: List[ArquivoEntregue] = []
    link_site_imovel: Optional[str] = None
    
    # Pagamento
    status_pagamento: str = 'pendente'  # 'pendente', 'pago', 'cancelado'
    valor_total: Optional[float] = None
    data_pagamento: Optional[datetime] = None
    forma_pagamento: Optional[str] = None  # 'dinheiro', 'pix', 'cartao', 'transferencia'
    
    # Metadata
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class PedidoCreate(BaseModel):
    pacote_selecionado: str
    servicos_adicionais: List[int] = []
    ambientes_home_staging: List[str] = []
    tipo_imovel: str
    endereco: str
    complemento: Optional[str] = None
    cidade: str
    estado: str
    cep: Optional[str] = None
    detalhes_imovel: Optional[str] = None
    data_desejada: str
    horario_desejado: str
    nome_corretor: str
    telefone: str
    email: str
    nome_proprietario: Optional[str] = None
    telefone_proprietario: Optional[str] = None
    local_chaves: Optional[str] = None
    autorizacao_entrada: Optional[str] = None
    observacoes: Optional[str] = None

class PedidoResponse(BaseModel):
    id: str
    pacote_selecionado: str
    tipo_imovel: str
    endereco: str
    cidade: str
    estado: str
    data_desejada: datetime
    horario_desejado: str
    status: str
    arquivos_entregues: List[ArquivoEntregue]
    link_site_imovel: Optional[str]
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str
    user: UserResponse