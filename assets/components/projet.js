import '../styles/apropos.css';
import React, { useState, useEffect } from 'react';


const Projet = () => {
  return (
    <div id='contenaire'>
      <nav>
        <a href='#'>Mes Projet</a>
        <a href=''>a propos de moi</a>
        <a href='#'>menu</a>
      </nav>
      <h1>Mes Projet</h1>
      <section>
      <img src={mobile} alt='photo de l accueil'/>
      <img src={mobile} alt='photo de l accueil'/>
      <img src={mobile} alt='photo de l accueil'/>
      <img src={mobile} alt='photo de l accueil'/>

      </section>
    </div>
  );
};

export default Projet;