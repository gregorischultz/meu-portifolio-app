import React from "react";
import { motion } from "framer-motion";
import Header from "../componentes/Header";
import '../estilos/Home.css';
import SocialMedia from '../componentes/SocialMedia';

const AnimatedName = ({ text, className, delayBase = 0 }) => (
  <p className={className} style={{ display: "flex", overflow: "hidden" }}>
    {text.split("").map((letter, i) => (
      <motion.span
        key={i}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: delayBase + i * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ display: "inline-block" }}
      >
        {letter === " " ? " " : letter}
      </motion.span>
    ))}
  </p>
);

const Home = () => {
  return (
    <>
      <Header />
      <div className='all-home'>
        <div className="home">
          <section className="home-section">
            <AnimatedName text="GREGORI" className="home-name-1" />
            <AnimatedName text="SCHULTZ" className="home-name-2" delayBase={0.4} />
            <motion.div
              className="home-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="home-subtitle-1">Développeur Web</p><span>|</span>
              <p className="home-subtitle-2">Recherche alternance – CDA (octobre 2026)</p>
            </motion.div>
          </section>
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default Home;
