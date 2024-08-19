// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './componentes/Header.jsx';
import '../src/estilos/global.css';
import '../src/App.css';
import Footer from './componentes/Footer';

function App() {

  return (
    <>
      <div>
      
        <main>
          <Outlet/>
        </main>
        
        <Footer/>
      </div>
    </>
  );
}

export default App
