import gengo from '../assets/gengoimg.png';
import guild from '../assets/guildimg.png';
import future from '../assets/Logofuture.png';
import cpf from '../assets/Logo CPF.png';
import pizz from '../assets/LOGO.png';

export const categories = [
  { id: "scolaire", label: "Projets Scolaires" },
  { id: "personnel", label: "Projets Personnels" },
  { id: "client", label: "Projets Clients" },
];

const allProjects = [
  {
    id: 1,
    name: 'Guild',
    category: 'scolaire',
    moduleCurso: 'Front-end e Back-end',
    img: guild,
    linkGitHub: 'https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G1-P3',
    linkVideo: '8PHGTdK5FbM',
    tecnologias: 'React, CSS3, HTML5, MySQL, NodeJS',
    descriçao: 'Plateforme en ligne dédiée aux meneurs de jeux de rôle (MJ) et aux joueurs passionnés qui souhaitent trouver des partenaires pour des sessions de jeu de rôle.',
  },
  {
    id: 2,
    name: 'Gengo',
    category: 'scolaire',
    moduleCurso: 'Front-End',
    img: gengo,
    linkGitHub: 'https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G4',
    linkVideo: 'i1B_LIgojxM',
    tecnologias: 'React, CSS3, HTML5, NodeJS',
    descriçao: "Plateforme web dédiée à l'apprentissage ludique de la langue française.",
  },
  {
    id: 3,
    name: 'Crime Pas Fait',
    category: 'scolaire',
    moduleCurso: 'Front-End',
    img: cpf,
    linkGitHub: 'https://github.com/Eric198809/crimepasfait',
    linkVideo: 'woawBZhvFuc',
    tecnologias: 'HTML5, CSS3, JavaScript',
    descriçao: "Plongez dans l'univers captivant de Crimies Pas-Fait, une équipe déjantée de passionnés qui mettent en lumière les crimes les moins réussis, mais les plus hilarants de l'histoire.",
  },
  {
    id: 4,
    name: 'FutureCorp',
    category: 'scolaire',
    moduleCurso: 'Front-end e Back-end',
    img: future,
    linkGitHub: 'https://github.com/Paul-Lac/Hackathon2',
    linkVideo: 'vx7XF3VyWRQ',
    tecnologias: 'React, CSS3, HTML5, JavaScript',
    descriçao: "Hackathon - Une météorite s'est abattue sur la Terre. Heureusement que Futur Corp avait tout prévu et a créé un guide de survie sous la forme d'une application mobile.",
  },
  {
    id: 5,
    name: "Diony's Pizz",
    category: 'personnel',
    moduleCurso: 'Front-end',
    img: pizz,
    linkGitHub: 'https://github.com/gregorischultz/dyonis-pizza',
    linkVideo: '9QUo4YVVQ6E',
    tecnologias: 'React, JavaScript, TailwindCSS, HTML5',
    descriçao: "Refonte totale du site «One page» de la pizzaria Diony's Pizz située à Saint Denis en Val. Basé sur les maquettes Figma, le but était de développer la présentation de la pizzaria en créant des pages dédiées au menu (avec tous les produits proposés) et aux services.",
  },
  {
    id: 6,
    name: '[ À éditer — Projet Client ]',
    category: 'client',
    moduleCurso: 'À compléter',
    img: pizz,
    linkGitHub: 'https://github.com/gregorischultz',
    linkVideo: '9QUo4YVVQ6E',
    tecnologias: 'À compléter',
    descriçao: 'Placeholder — remplacez ce projet par votre vrai projet client.',
  },
];

export default allProjects;
