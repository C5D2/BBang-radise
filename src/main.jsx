import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

// if (rootElement?.hasChildNodes()) {
//   ReactDOM.hydrateRoot(rootElement, app);
// } else {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(app);
// }
