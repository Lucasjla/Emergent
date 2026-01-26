import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { LogIn, UserPlus } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });
  
  const [registerData, setRegisterData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const result = await login(loginData.email, loginData.senha);
    
    if (result.success) {
      toast.success('Login realizado com sucesso!');
      navigate('/area-cliente');
    } else {
      toast.error(result.error);
    }
    
    setLoading(false);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (registerData.senha !== registerData.confirmarSenha) {
      toast.error('As senhas não coincidem');
      return;
    }
    
    if (registerData.senha.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }
    
    setLoading(true);
    
    const result = await register(
      registerData.nome,
      registerData.email,
      registerData.telefone,
      registerData.senha
    );
    
    if (result.success) {
      toast.success('Conta criada com sucesso!');
      navigate('/area-cliente');
    } else {
      toast.error(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-md mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="text-4xl font-bold text-[#38030a]">
            ARKANO
          </Link>
          <p className="text-gray-600 mt-2">
            {isLogin ? 'Entre na sua conta' : 'Crie sua conta'}
          </p>
        </div>

        <Card className="p-8">
          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="senha">Senha</Label>
                <Input
                  id="senha"
                  type="password"
                  value={loginData.senha}
                  onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#38030a] hover:bg-[#38001d] text-white"
                disabled={loading}
              >
                {loading ? 'Entrando...' : (
                  <>
                    <LogIn className="w-4 h-4 mr-2" />
                    Entrar
                  </>
                )}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input
                  id="nome"
                  value={registerData.nome}
                  onChange={(e) => setRegisterData({ ...registerData, nome: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email-register">E-mail</Label>
                <Input
                  id="email-register"
                  type="email"
                  value={registerData.email}
                  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input
                  id="telefone"
                  value={registerData.telefone}
                  onChange={(e) => setRegisterData({ ...registerData, telefone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  required
                />
              </div>

              <div>
                <Label htmlFor="senha-register">Senha</Label>
                <Input
                  id="senha-register"
                  type="password"
                  value={registerData.senha}
                  onChange={(e) => setRegisterData({ ...registerData, senha: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                <Input
                  id="confirmar-senha"
                  type="password"
                  value={registerData.confirmarSenha}
                  onChange={(e) => setRegisterData({ ...registerData, confirmarSenha: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#38030a] hover:bg-[#38001d] text-white"
                disabled={loading}
              >
                {loading ? 'Criando conta...' : (
                  <>
                    <UserPlus className="w-4 h-4 mr-2" />
                    Criar Conta
                  </>
                )}
              </Button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#38030a] hover:underline text-sm"
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Entre'}
            </button>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-gray-600 hover:text-[#38030a] text-sm">
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;