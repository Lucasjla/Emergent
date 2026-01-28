from fastapi import FastAPI, APIRouter, HTTPException, Depends, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List, Optional
from datetime import datetime
from models import (
    UserCreate, UserLogin, User, UserResponse, Token,
    PedidoCreate, Pedido, PedidoResponse, PedidoStatus, ArquivoEntregue
)
from auth import (
    verify_password, get_password_hash, create_access_token, verify_token
)

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()

# Dependency to get current user
async def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)) -> User:
    token = credentials.credentials
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Token inválido ou expirado")
    
    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(status_code=401, detail="Token inválido")
    
    user_data = await db.users.find_one({"id": user_id})
    if not user_data:
        raise HTTPException(status_code=404, detail="Usuário não encontrado")
    
    return User(**user_data)

# ==================== AUTH ROUTES ====================

@api_router.post("/auth/register", response_model=Token)
async def register(user_data: UserCreate):
    # Check if user already exists
    existing_user = await db.users.find_one({"email": user_data.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="Email já cadastrado")
    
    # Create new user
    user = User(
        nome=user_data.nome,
        email=user_data.email,
        telefone=user_data.telefone,
        senha_hash=get_password_hash(user_data.senha)
    )
    
    await db.users.insert_one(user.dict())
    
    # Create access token
    access_token = create_access_token(data={"sub": user.id})
    
    user_response = UserResponse(
        id=user.id,
        nome=user.nome,
        email=user.email,
        telefone=user.telefone
    )
    
    return Token(access_token=access_token, token_type="bearer", user=user_response)

@api_router.post("/auth/login", response_model=Token)
async def login(credentials: UserLogin):
    # Find user
    user_data = await db.users.find_one({"email": credentials.email})
    if not user_data:
        raise HTTPException(status_code=401, detail="Email ou senha incorretos")
    
    user = User(**user_data)
    
    # Verify password
    if not verify_password(credentials.senha, user.senha_hash):
        raise HTTPException(status_code=401, detail="Email ou senha incorretos")
    
    # Create access token
    access_token = create_access_token(data={"sub": user.id})
    
    user_response = UserResponse(
        id=user.id,
        nome=user.nome,
        email=user.email,
        telefone=user.telefone
    )
    
    return Token(access_token=access_token, token_type="bearer", user=user_response)

@api_router.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_user)):
    return UserResponse(
        id=current_user.id,
        nome=current_user.nome,
        email=current_user.email,
        telefone=current_user.telefone
    )

# ==================== PEDIDOS ROUTES ====================

@api_router.post("/pedidos", response_model=PedidoResponse)
async def create_pedido(
    pedido_data: PedidoCreate,
    current_user: User = Depends(get_current_user)
):
    # Convert string date to datetime
    data_desejada = datetime.fromisoformat(pedido_data.data_desejada.replace('Z', '+00:00'))
    
    # Create pedido
    pedido = Pedido(
        user_id=current_user.id,
        **pedido_data.dict(exclude={'data_desejada'}),
        data_desejada=data_desejada,
        historico_status=[
            PedidoStatus(status='agendado', data=datetime.utcnow())
        ]
    )
    
    await db.pedidos.insert_one(pedido.dict())
    
    return PedidoResponse(
        id=pedido.id,
        pacote_selecionado=pedido.pacote_selecionado,
        tipo_imovel=pedido.tipo_imovel,
        endereco=pedido.endereco,
        cidade=pedido.cidade,
        estado=pedido.estado,
        data_desejada=pedido.data_desejada,
        horario_desejado=pedido.horario_desejado,
        status=pedido.status,
        arquivos_entregues=pedido.arquivos_entregues,
        link_site_imovel=pedido.link_site_imovel,
        created_at=pedido.created_at
    )

@api_router.get("/pedidos", response_model=List[PedidoResponse])
async def get_pedidos(
    current_user: User = Depends(get_current_user),
    limit: int = 50,
    skip: int = 0
):
    """Get user pedidos with pagination"""
    pedidos = await db.pedidos.find(
        {"user_id": current_user.id}
    ).sort("created_at", -1).skip(skip).limit(limit).to_list(limit)
    
    return [
        PedidoResponse(
            id=p['id'],
            pacote_selecionado=p['pacote_selecionado'],
            tipo_imovel=p['tipo_imovel'],
            endereco=p['endereco'],
            cidade=p['cidade'],
            estado=p['estado'],
            data_desejada=p['data_desejada'],
            horario_desejado=p['horario_desejado'],
            status=p['status'],
            arquivos_entregues=[ArquivoEntregue(**a) for a in p.get('arquivos_entregues', [])],
            link_site_imovel=p.get('link_site_imovel'),
            created_at=p['created_at']
        )
        for p in pedidos
    ]

@api_router.get("/pedidos/{pedido_id}", response_model=Pedido)
async def get_pedido(
    pedido_id: str,
    current_user: User = Depends(get_current_user)
):
    pedido_data = await db.pedidos.find_one({"id": pedido_id, "user_id": current_user.id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    return Pedido(**pedido_data)

# ==================== PUBLIC ROUTES ====================

@api_router.get("/pedidos/publico/{pedido_id}", response_model=Pedido)
async def get_pedido_publico(pedido_id: str):
    """Get pedido publicly - for sharing gallery with clients (no auth required)"""
    pedido_data = await db.pedidos.find_one({"id": pedido_id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    # Only return if status is 'entregue' (delivered)
    if pedido_data.get('status') != 'entregue':
        raise HTTPException(status_code=404, detail="Galeria ainda não disponível")
    
    return Pedido(**pedido_data)

# ==================== ADMIN ROUTES (for demo purposes) ====================

@api_router.put("/admin/pedidos/{pedido_id}/status")
async def update_pedido_status(
    pedido_id: str,
    status: str,
    observacao: Optional[str] = None
):
    """Update pedido status - In production, this should require admin auth"""
    pedido_data = await db.pedidos.find_one({"id": pedido_id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    pedido = Pedido(**pedido_data)
    pedido.status = status
    pedido.updated_at = datetime.utcnow()
    pedido.historico_status.append(
        PedidoStatus(status=status, observacao=observacao)
    )
    
    await db.pedidos.update_one(
        {"id": pedido_id},
        {"$set": pedido.dict()}
    )
    
    return {"message": "Status atualizado com sucesso"}

@api_router.post("/admin/pedidos/{pedido_id}/arquivos")
async def add_arquivo(
    pedido_id: str,
    arquivo: ArquivoEntregue
):
    """Add arquivo to pedido - In production, this should require admin auth"""
    pedido_data = await db.pedidos.find_one({"id": pedido_id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    pedido = Pedido(**pedido_data)
    pedido.arquivos_entregues.append(arquivo)
    pedido.updated_at = datetime.utcnow()
    
    await db.pedidos.update_one(
        {"id": pedido_id},
        {"$set": pedido.dict()}
    )
    
    return {"message": "Arquivo adicionado com sucesso"}

@api_router.put("/admin/pedidos/{pedido_id}/link-site")
async def update_link_site(
    pedido_id: str,
    link: str
):
    """Update site link for pedido - In production, this should require admin auth"""
    pedido_data = await db.pedidos.find_one({"id": pedido_id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    await db.pedidos.update_one(
        {"id": pedido_id},
        {"$set": {"link_site_imovel": link, "updated_at": datetime.utcnow()}}
    )
    
    return {"message": "Link atualizado com sucesso"}

@api_router.put("/admin/pedidos/{pedido_id}/pagamento")
async def update_pagamento(
    pedido_id: str,
    status_pagamento: str,
    valor_total: Optional[float] = None,
    forma_pagamento: Optional[str] = None
):
    """Update payment status - In production, this should require admin auth"""
    pedido_data = await db.pedidos.find_one({"id": pedido_id})
    if not pedido_data:
        raise HTTPException(status_code=404, detail="Pedido não encontrado")
    
    update_data = {
        "status_pagamento": status_pagamento,
        "updated_at": datetime.utcnow()
    }
    
    if status_pagamento == 'pago':
        update_data["data_pagamento"] = datetime.utcnow()
    
    if valor_total is not None:
        update_data["valor_total"] = valor_total
    
    if forma_pagamento:
        update_data["forma_pagamento"] = forma_pagamento
    
    await db.pedidos.update_one(
        {"id": pedido_id},
        {"$set": update_data}
    )
    
    return {"message": "Pagamento atualizado com sucesso"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()