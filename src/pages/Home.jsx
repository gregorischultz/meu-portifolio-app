// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../componentes/Header"; 
import '../estilos/Home.css';
import SocialMedia from '../componentes/SocialMedia';



const Home = () => {
    
    return (
  <><Header />
  <div className='all-home'>
      <div className="home">
        <section className="home-section home-text-animation">
          <p className="home-name-1">GREGORI</p>
          <p className="home-name-2">SCHULTZ</p>
          <div className="home-subtitle">
            <p className="home-subtitle-1">Développeur Web</p><span>|</span>
            <p className="home-subtitle-2">Étudiant Concepteur Développeur d’Application</p>
          </div>
        </section>
       <SocialMedia/>
      </div>
    </div>
      
      </>
    )
  };
    export default Home;