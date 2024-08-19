// src/pages/About.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../componentes/Header';
import hardSkillsIcons from "../data/hardSkillsIcons";
import SocialMedia from '../componentes/SocialMedia';
import { Icon } from '@iconify/react';
import '../estilos/About.css';


const About = () => {
  return (
    <div>
      <Header/>
      <div className="all-about">
      
      <section className="about">
        <div className="about-header-text-skills" >
          
          <div className="about-text-skills">
          <section className="about-text">
              <p className="P0">Bonjour, je m'appelle <span> Gregori Schultz.</span> </p>
              
              <p className="P">Je suis à <span>la recherche d'une alternance dans le cadre de la formation Concépteur Développeur d'Applications proposée par le CEFIM.</span> J'aimerais ensuite gagner de l'expérience entant que développeur Back-end, pour un jour exercer entant que développeur Full-Stack.</p>
                            
              <p className="P">Je suis <span>développeur Front-ent de formation,</span> je maîtrise particulièrement les languages suivants : <span>JavaScript</span>, <span>ReactJS</span> et <span>HTML/CSS.</span> Je suis également familier avec les outils essentiels : <span>NodeJS, SQL e MySQL, ExpressJS.</span> J'étudie actuellement de manière autodidacte le <span>Python et TypeScript,</span> afin d'enrichir mes connaissances et gagner en compétences.</p>
              
              <p className="P">J'améliore constamment ma capacité à créer des interfaces utilisateur élégantes et fonctionnelles, en utilisant <span>Figma</span> pour la création de wireframes et prototypes. </p>
              
              <p className="P">Je suis ouvert aux opportunités de collaboration, aux défis passionnants et aux nouvelles connexions dans l'industrie technologique.</p>

              <p className="P1"><span>N'hésitez pas à me contacter pour en discuter !</span></p>
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
        <SocialMedia/>
        
      </section>
      
    </div>
    </div>
  );
};

export default About;