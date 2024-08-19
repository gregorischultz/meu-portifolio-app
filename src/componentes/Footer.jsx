import React from "react";
import { Icon } from "@iconify/react";
import emailIcon from '@iconify/icons-ic/baseline-email';
import '../estilos/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <Icon  className="iconemail"icon={emailIcon}/>
            <p className="footer-text">gregorischultz07@gmail.com</p>
        </footer>
    );
}


export default Footer;