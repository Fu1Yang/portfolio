import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import Apropos from './components/apropos';

// Vérifiez que les éléments DOM existent avant de créer les roots
const rootElement = document.getElementById('root');
const aproposElement = document.getElementById('apropos');

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
