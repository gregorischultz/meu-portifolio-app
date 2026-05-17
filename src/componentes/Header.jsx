import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import '../estilos/Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar">
        <ul className="listNavBAr">
          <li className="navItem"><Link to="/" className={isActive('/')}>Home</Link></li>
          <li className="navItem"><Link to="/Apropos" className={isActive('/Apropos')}>A propos</Link></li>
          <li className="navItem"><Link to="/Projects" className={isActive('/Projects')}>Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
