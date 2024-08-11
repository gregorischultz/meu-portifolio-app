import React from "react";
import { Link } from "react-router-dom";
import '../estilos/Header.css';


function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="listNavBAr">
          <li className="navItem"><Link to="/">Home</Link></li>
          <li className="navItem"><Link to="/Apropos">A propos</Link></li>
          <li className="navItem"><Link to="/Projects">Projects</Link></li>
        </ul>
        <button className="menu-toggle">Menu</button> {/* adicionando botão do menu hamburguer */}
      </nav>
    </header>
  );
}

export default Header;