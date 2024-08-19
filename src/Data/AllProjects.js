//abaixo o importe das imagens
import gengo from '../assets/gengoimg.png';
import guild from '../assets/guildimg.png';
import future from '../assets/Logofuture.png';
import cpf from '../assets/Logo CPF.png';





const allProjects = [
    {
        id: 1,
        name:'Guild' ,
        moduleCurso:'Front-end e Back-end',
        img: guild,
        linkGitHub:'https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G1-P3',
        linkVideo: '8PHGTdK5FbM',
        tecnologias: 'React, CSS3, HTML5, MySQL, NodeJS',
        descriçao:'Plateforme en ligne dédiée aux meneurs de jeux de rôle (MJ) et aux joueurs passionnés qui souhaitent trouver des partenaires pour des sessions de jeu de rôle. ',
    },
    {
        id: 2,
        name:'Gengo',
        moduleCurso: 'Front-End',
        img: gengo ,
        linkGitHub:'https://github.com/WildCodeSchool/11-2023-Rem-FR-Crew-Bleu-LaPromodoro-G4',
        linkVideo: 'i1B_LIgojxM',
        tecnologias:'React, CSS3, HTML5, NodeJS' ,
        descriçao:'Plateforme web dédiée à l’apprentissage ludique de la langue française.',
 
    },
    {
        id: 3,
        name:'Crime Pas Fait ' ,
        moduleCurso:'Front-End' ,
        img: cpf,
        linkGitHub:'https://github.com/Eric198809/crimepasfait' ,
        linkVideo: 'woawBZhvFuc',
        tecnologias:'HTML5, CSS3, JavaScript' ,
        descriçao:'Plongez dans l`univers captivant de Crimies Pas-Fait, une équipe déjantée de passionnés qui mettent en lumière les crimes les moins réussis, mais les plus hilarants de l`histoire.' ,
    },
    {
        id: 4,
        name: 'FutureCorp',
        moduleCurso:'Front-end e Back-end' ,
        img: future ,
        linkGitHub:'https://github.com/Paul-Lac/Hackathon2' ,
        linkVideo: 'vx7XF3VyWRQ',
        tecnologias:'React, CSS3, HTML5, JavaScript' ,
        descriçao:'Hackathon - Une météorite s’est abatu sur la Terre. Heureusement que Futur Corp avait tout prévu et a crée un guide se survie sous la forme d’une application mobile.' ,
    },
];

export default allProjects;