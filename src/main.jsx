import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import './index.css';
import Portfolio from './App';

// Analytics — only runs if a measurement ID is configured (see .env.example)
const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
if (gaId) {
  ReactGA.initialize(gaId);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
}

// Register the service worker in production only — in dev it caches
// module output and serves stale code after edits.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Registration failures are non-fatal; the site works without offline support.
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);
