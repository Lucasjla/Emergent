import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import ComoFunciona from "./pages/ComoFunciona";
import Portfolio from "./pages/Portfolio";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";
import NovoAgendamento from "./pages/NovoAgendamento";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
