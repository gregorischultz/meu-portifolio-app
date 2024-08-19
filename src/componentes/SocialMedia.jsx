// eslint-disable-next-line no-unused-vars
import React from "react";
import { Icon } from "@iconify/react";
import "../estilos/SocialMedia.css";



function SocialMedia() {
    return (
        <section className="social-media">
          <a href="https://www.linkedin.com/in/gregori-schultz-22805720b/" target="_blank" rel="noopener noreferrer">
            <Icon icon="akar-icons:linkedin-fill" />
          </a>
          <a href="https://github.com/gregorischultz" target="_blank" rel="noopener noreferrer">
            <Icon icon="bi:github" />
          </a>
          <a href="mailto:danielle.luisasilva@gmail.com" target="_blank" rel="noopener noreferrer" className="mail-icon">
            <Icon icon="ant-design:mail-outlined" />
          </a>
        </section>
      )
}


export default SocialMedia;