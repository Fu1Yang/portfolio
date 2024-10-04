import '../styles/apropos.css';
import React, { useState, useEffect } from 'react';
import destop from '../../assets/imageProjet/destop.JPG';
import mobile from '../../assets/imageProjet/accueilMobile.JPG';
import mcd from '../../assets/imageProjet/mcd.PNG';
import interfac from '../../assets/imageProjet/interfaceAdmin1.PNG';
import cabinet from '../../assets/imageProjet/cabinet.PNG';
import cabinetCompte from '../../assets/imageProjet/cabinet1.PNG';
const Projet = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (

    <div id='contenaire'>
      <nav>
        <a href='/'>Accueil</a>
      </nav>
      <h1>Mes Projet</h1>
      <section id='sectionProjet'>
        <article id='para1'>
          <h1>Le site de l'association</h1>
          <h3>description:</h3>
          <p>Pendant mon stage de 11 semaines, j'ai réalisé un projet pour une association située dans la région du Cher (18) qui souhaitait      accroître sa visibilité. Le site a été conçu avec une architecture MVC en utilisant JavaScript et PHP.</p>
          <p> J'ai également développé une interface administrateur pour permettre à l'association de gérer facilement les mises à jour des contenus, d'où la création d'une base de données pour mettre en place un CMS.</p>
          <p>Les fonctionnalités CRUD ont été intégrées pour permettre la gestion des données de manière efficace et autonome.</p>
          <p>l'environement de travail 
            <ul>
              <li>Visual studio code</li>
              <li>Débian WSL</li>
              <li>Docker</li>
              <li>win11</li>
            </ul>
            </p>
            <div id='images'>
              <img src={destop}  alt="page d'accueil du site de l'association"/>
              <img src={mobile}  alt="page d'accueil du site de l'association"/>
              <img src={mcd}  alt="image du diagramme mcd" />
              <img src={interfac}  alt="page d'interface administrateur"/>
            </div>
        </article>

        <article id='para2'>
          <h1>Projet en cours</h1>
          <p></p>
          <p>Projet en phase de maquettage avec figma</p>
          <p></p>
          <p>l'environement de travail 
            <ul>
              <li>Figma</li>
              {/* <li>Visual studio code</li>
              <li>Débian WSL</li>
              <li>Docker</li>
              <li>win11</li> */}
            </ul>
            </p>
            <div id='imagesCabinet'>
              <img src={cabinet}  alt="page d'accueil du site de l'association"/>
              <img src={cabinetCompte}  alt="page d'accueil du site de l'association"/>
            </div>
        </article>
      </section>
      <footer>Copyright Yang Fu</footer>
    </div>
  );
};

export default Projet;