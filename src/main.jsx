import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root')); // Criamos um elemento raiz para renderizar o componente
root.render( // Renderizamos o componente principal da aplicação
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
); 