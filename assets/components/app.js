import '../styles/app.css';
import React, { useState, useEffect } from 'react';
import profile from '../../assets/images/profile.JPG';
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
import destop from '../../assets/imageProjet/destop.JPG';
import mobile from '../../assets/imageProjet/accueilMobile.JPG';


const App = () => {
  const prensentation = ["Bonjour je me présente je m'appelle Yang Fu. Je suis passionné par le métier de développeur."];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Fonction pour extraire le texte et le mettre à jour dans le state
    const extrait = () => {
      let extractedText = [];
      for (let i = 0; i < prensentation.length; i++) {
        const element = prensentation[i];
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
    }, 100); // Adjust the interval speed as needed

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [index]); // Dependency array includes `index` so that it re-runs when `index` changes

  return (

    <div id='contenaire'>
      <nav>
        <a href='#'>Mes Projet</a>
        <a href='/apropos/deMoi'>a propos de moi</a>
        <a href='#'>menu</a>
      </nav>

      <div id='herder'>
        <div>
          <h1>Bienvenue sur mon profile</h1>
          <p>Je suis développeur web et  mobile</p>
          <div id='lien'>
            <a href='#'>Développeur</a>
            <a href='#'>linkedin</a>
            <a href='#'>Github</a>
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
            <div className='python' id='pyth'>
              <img src={python}  alt='logo python'/>
              <img src={django}  alt='logo django'/>
            </div>
            <div className='python' id='php'>
              <img src={php}  alt='logo php'/>
              <img src={symfony}  alt='logo symfony'/>
            </div>
          </div>
          <div id='environement'>
            <h1>Environement de Travaille</h1>
            <div><img className='dock' src={docker}  alt='logo docker'/></div>
            <div><img className='dock' src={vs} alt='logo visual studio code'/></div>
            <div><img className='dock' src={debian} alt='logo debian'/></div>
            <div><img className='dock' src={github} alt='logo github'/></div>
            <div><img className='dock' src={mysql} alt='logo mysql'/></div>
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
              <a href='#'>vue sur destop<img src={destop} alt='photo de l accueil'/></a>
              <a href="#">vue sur mobile<img src={mobile} alt='photo de l accueil'/></a>
            </div>
          </section>
          <section>
            <h2>Projet gestion de planning avec rdv en ligne</h2>
            <p>Symfony</p>
            <p>Django</p>
          </section>
          <section>
            <h2>Projet application de gestion de planning</h2>
            <p>Symfony</p>
            <p>Django</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
