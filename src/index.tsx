import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './main.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}

reportWebVitals();