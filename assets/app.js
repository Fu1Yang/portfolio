import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import Apropos from './components/apropos';
import Projet from './components/projet';

// Vérifiez que les éléments DOM existent avant de créer les roots
const rootElement = document.getElementById('root');
const aproposElement = document.getElementById('apropos');
const projetElement = document.getElementById('mesProjet');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (aproposElement) {
  const apropos = ReactDOM.createRoot(aproposElement);
  apropos.render(
    <React.StrictMode>
      <Apropos />
    </React.StrictMode>
  );
}

if (projetElement) {
  const mesProjet = ReactDOM.createRoot(projetElement);
  mesProjet.render(
    <React.StrictMode>
      <Projet />
    </React.StrictMode>
  );
}
