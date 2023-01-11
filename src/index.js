import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ConnexionContextProvider } from './connexionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConnexionContextProvider>
      <App />
    </ConnexionContextProvider>
  </React.StrictMode>
);
