import '../styles/app.css';
import '../styles/media.css';
import React, { useState, useEffect } from 'react';
import ContactForm from './formulaire';
import profile from '../../assets/images/porfolio.PNG';
import pngegg from '../../assets/images/logo.webp';
import javascript from '../../assets/images/js.webp';
import python from '../../assets/images/Python.JPG';
import django from '../../assets/images/django.JPG';
import github from '../../assets/images/github-logo.webp';
import reactJs from '../../assets/images/react.JPG';
import php from '../../assets/images/php.JPG';
import docker from '../../assets/images/docker.webp';
import symfony from '../../assets/images/symfony.JPG';
import debian from '../../assets/images/debian.JPG';
import vs from '../../assets/images/vs.JPG';
import mysql from '../../assets/images/mysql.JPG';
import trello from '../../assets/images/trello.JPG';
import destop from '../../assets/imageProjet/destop.JPG';
import mobile from '../../assets/imageProjet/accueilMobile.JPG';
import cabinet from '../../assets/imageProjet/cabinet.PNG';
import cabinetCompte from '../../assets/imageProjet/cabinet1.PNG';


const App = () => {
  const presentation = ["Bonjour je me présente je m'appelle Yang Fu. Je suis passionné par le métier de développeur."];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Fonction pour extraire le texte et le mettre à jour dans le state
    const extrait = () => {
      let extractedText = [];
      for (let i = 0; i < presentation.length; i++) {
        const element = presentation[i];
        for (let j = 0; j < element.length; j++) {
          extractedText.push(element[j]);
        }
      }
      return extractedText.join('');
    };

    const fullText = extrait();
    const textLength = fullText.length;

    const interval = setInterval(() => {
      if (index < textLength) {
        setText(prevText => prevText + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 15); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [index]); // Dependency array includes `index` so that it re-runs when `index` changes

  return (

    <div id='contenaire'>
      <nav>
        <a href='/projet/mesProjet'>Mes Projet</a>
      </nav>

      <div id='herder'>
        <div>
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Je suis activement à la recherche d'une entreprise pour une alternance pour le titre de concepteur développeur d'application de niveau 6</p>
          <div id='lien'>
            <a href='https://www.linkedin.com/in/fu-yang-588646243/'>linkedin</a>
            <a href='https://github.com/Fu1Yang'>Github</a>
          </div>
        </div>
        <div id='photo'>
          <img src={profile} alt='photo de identité'/>
          <p>{text}</p> {/* Affiche le texte progressivement */}
        </div>
      </div>

      <div id='titre'>
        <h1>Mes Skills</h1>
        <div className='colonne'>
          <div id='front'>
            <h1>Compétence Front-end</h1>
            <div>
              <img src={pngegg} alt='logo html css'/>
            </div>
            <div className='python'>
              <img src={javascript}  alt='logo Javascript'/>
              <img src={reactJs}  alt='logo react'/>
            </div>
          </div>
          <div id='competence'>
            <h1>Compétence Back-end</h1>
            <div className='python' id='php'>
              <img src={php}  alt='logo php'/>
              <img src={symfony}  alt='logo symfony'/>
            </div>
          </div>
          <div id='environement'>
            <h1>Environement de Travaille</h1>
            <div id='logoEnviro'>
              <div><img className='dock' src={docker}  alt='logo docker'/></div>
              <div><img className='dock' src={vs} alt='logo visual studio code'/></div>
              <div><img className='dock' src={debian} alt='logo debian'/></div>
              <div><img className='dock' src={github} alt='logo github'/></div>
              <div><img className='dock' src={mysql} alt='logo mysql'/></div>
              <div><img className='dock' src={trello} alt='logo de trello'/></div>
            </div>
          </div>
        </div>
      </div>
      
      <div id='projet'>
        <h1>Mes Projet</h1>
        <div id='sujet'>
          <section>
            <h2>Projet pour une association</h2>
            <p>Le projet consiste a faire un cms pour la gestion du site</p>
            <div  id='accueil'>
              <a href='/projet/mesProjet'>vue sur destop<img src={destop} alt='photo vue destop'/></a>
              <a href='/projet/mesProjet'>vue sur mobile<img src={mobile} alt='photo vue mobile'/></a>
            </div>
          </section>
          <section>
            <h2>Projet en cours</h2>
            <div  id='accueil'>
              <a href='/projet/mesProjet'>la page de connexion<img src={cabinet} alt='photo de la page de connexion'/></a>
              <a href='/projet/mesProjet'>la page du compte du patient<img src={cabinetCompte} alt='photo de la page du compte du patient'/></a>
            </div>
          </section>
          {/* <section>
            <h2></h2>
           
          </section> */}
        </div>
      </div> 

      <div id="experience">
        <h1>Expérience</h1>
        <div id='row'>
          <div id='row2'>
            <div id='exp'>
              <h2 className='center'>2024</h2>
            </div>
            <div className='.rond'>
              <p className='center' id='raduis'></p>
              <p id='rad'></p>
            </div>
          </div>
          <div id='description'>
              <h2>Stage de développeur web pour une association.</h2>
              <h4>Centre val de loire Vierzon.</h4>
              <article>
                Dans le cadre de ma formation en développement web, j'ai eu l'opportunité de réaliser un stage au sein d'une association. Ce stage m'a permis de mettre en pratique les compétences que j'ai acquises, notamment dans la conception et le développement d'applications web.
                Mon principal projet durant ce stage a été la création d'un site web basé sur un système de gestion de contenu (CMS). L'objectif était de fournir à l'association un site qu'elle pourrait gérer de manière autonome, sans avoir à faire appel à un professionnel pour chaque modification. J'ai donc opté pour la mise en place d'une architecture MVC (Modèle-Vue-Contrôleur), une approche qui permet une séparation claire entre la logique métier, l'interface utilisateur et la gestion des données.
                Pour la partie back-end, j'ai utilisé PHP, un langage de programmation particulièrement adapté aux applications web dynamiques. Cette partie du projet était essentielle pour assurer la gestion des contenus, la sécurité et l'administration du site.
                Quant au front-end, j'ai développé l'interface utilisateur à l'aide des technologies HTML, CSS et JavaScript. L'interface se devait d'être simple, intuitive et facilement modifiable par le responsable de l'association.
                Ce projet m'a permis d’acquérir une expérience pratique significative, notamment en travaillant sur une solution CMS personnalisée. J'ai également renforcé mes compétences en gestion de projet, puisque j'ai dû m'assurer que le site soit fonctionnel, sécurisé et facile à utiliser pour l'équipe de l'association.
                Ce stage m'a permis d'appliquer et de perfectionner mes connaissances techniques, tout en contribuant à un projet utile pour une structure associative.
              </article>
          </div>
        </div>
      </div>
       <ContactForm></ContactForm>       
      <footer>Copyright Yang Fu</footer>
    </div>
  );
};

export default App;
