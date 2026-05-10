// src/pages/About.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../componentes/Header';
import hardSkillsIcons from "../Data/hardSkillsIcons.js";
import SocialMedia from '../componentes/SocialMedia';
import { Icon } from '@iconify/react';
import '../estilos/About.css';


const About = () => {
  return (
    <div>
      <Header />
      <div className="all-about">

        <section className="about">
          <div className="about-header-text-skills" >

            <div className="about-text-skills">
              <section className="about-text">
                <p className="P0">Bonjour, je m'appelle <span> Gregori Schultz.</span> </p>

                <p className="P">Je suis actuellement à la recherche d'une alternance dans le cadre de la formation Concepteur Développeur d'Applications, dont le début est prévu le 19 octobre, avec la possibilité de commencer en entreprise dès septembre.</p>

                <p className="P">Titulaire du titre professionnel Développeur Web et Web Mobile, j’ai acquis des compétences en développement frontend et backend à travers plusieurs projets concrets.
                  Je travaille notamment avec : <span>React</span>, <span>Node.js</span>, <span>Express</span> et des bases de données relationnelles comme <span>SQL / MySQL</span>, en mettant en place des opérations CRUD et des applications web dynamiques.</p>

                <p className="P">Curieux et motivé, je suis avant tout animé par l’envie d’apprendre et de progresser. Je suis ouvert à tout type d’environnement me permettant de développer mes compétences et de contribuer à des projets concrets. </p>

                <p className="P">Je continue également à me former de manière autonome afin d’élargir mes connaissances techniques et de gagner en efficacité.</p>

                <p className="P1"><span>N'hésitez pas à me contacter pour échanger !</span></p>
              </section>
              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                  {hardSkillsIcons.map((icon, index) => (
                    <div key={index} className="about-div-icon">
                      <Icon icon={icon.icon} className={icon.className} />
                      <p className='about-icon-text'>{icon.title}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
          <SocialMedia />

        </section>

      </div>
    </div>
  );
};

export default About;