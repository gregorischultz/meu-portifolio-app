// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './componentes/NavBar.jsx';
import '../src/estilos/global.css';
import '../src/App.css';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <main>
          <Outlet/>
        </main>
        
        
      </div>
    </>
  );
}

export default App
