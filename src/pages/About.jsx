import React from 'react';
import { motion } from 'framer-motion';
import Header from '../componentes/Header';
import hardSkillsIcons from "../Data/hardSkillsIcons.js";
import SocialMedia from '../componentes/SocialMedia';
import { Icon } from '@iconify/react';
import '../estilos/About.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const About = () => {
  return (
    <div>
      <Header />
      <div className="all-about">
        <section className="about">
          <div className="about-header-text-skills">
            <div className="about-text-skills">
              <section className="about-text">
                <motion.p className="P0" {...fadeUp(0)}>
                  Bonjour, je m'appelle <span> Gregori Schultz.</span>
                </motion.p>
                <motion.p className="P" {...fadeUp(0.1)}>
                  Je suis actuellement à la recherche d'une alternance dans le cadre de la formation Concepteur Développeur d'Applications, dont le début est prévu le 19 octobre, avec la possibilité de commencer en entreprise dès septembre.
                </motion.p>
                <motion.p className="P" {...fadeUp(0.2)}>
                  Titulaire du titre professionnel Développeur Web et Web Mobile, j'ai acquis des compétences en développement frontend et backend à travers plusieurs projets concrets.
                  Je travaille notamment avec : <span>React</span>, <span>Node.js</span>, <span>Express</span> et des bases de données relationnelles comme <span>SQL / MySQL</span>, en mettant en place des opérations CRUD et des applications web dynamiques.
                </motion.p>
                <motion.p className="P" {...fadeUp(0.3)}>
                  Curieux et motivé, je suis avant tout animé par l'envie d'apprendre et de progresser. Je suis ouvert à tout type d'environnement me permettant de développer mes compétences et de contribuer à des projets concrets.
                </motion.p>
                <motion.p className="P" {...fadeUp(0.4)}>
                  Je continue également à me former de manière autonome afin d'élargir mes connaissances techniques et de gagner en efficacité.
                </motion.p>
                <motion.p className="P1" {...fadeUp(0.5)}>
                  <span>N'hésitez pas à me contacter pour échanger !</span>
                </motion.p>
              </section>

              <section className="about-skills">
                <p className="about-skills-p">SKILLS</p>
                <div className="about-skill">
                  {hardSkillsIcons.map((icon, index) => (
                    <motion.div
                      key={index}
                      className="about-div-icon"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      <Icon icon={icon.icon} className={icon.className} />
                      <p className='about-icon-text'>{icon.title}</p>
                    </motion.div>
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
