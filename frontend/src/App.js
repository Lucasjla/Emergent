import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import ComoFunciona from "./pages/ComoFunciona";
import Portfolio from "./pages/Portfolio";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import NovoAgendamento from "./pages/NovoAgendamento";
import Login from "./pages/Login";
import AreaCliente from "./pages/AreaCliente";
import GaleriaPublica from "./pages/GaleriaPublica";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Rota pública sem header/footer */}
            <Route path="/galeria/:pedidoId" element={<GaleriaPublica />} />
            
            {/* Rotas com header/footer */}
            <Route path="*" element={
              <>
                <Header />
                <main className="pt-20">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/servicos" element={<Servicos />} />
                    <Route path="/como-funciona" element={<ComoFunciona />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/planos" element={<Planos />} />
                    <Route path="/contato" element={<Contato />} />
                    <Route path="/novo-agendamento" element={<NovoAgendamento />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/area-cliente" element={<AreaCliente />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
          <Toaster />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
