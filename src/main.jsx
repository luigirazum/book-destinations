import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import './assets/styles/styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <main className="full-height row align justify">
      <App />
    </main>
  </React.StrictMode>
)
