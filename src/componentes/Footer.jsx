// eslint-disable-next-line no-unused-vars
import React from 'react';
import imgmail from'../assets/mail.png';
import '../estilos/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src={imgmail} className="iconemail" />
            <p className="footer-text">gregorischultz07@gmail.com</p>
        </footer>
    );
}

export default Footer;