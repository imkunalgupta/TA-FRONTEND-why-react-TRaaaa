import React from 'react';
//import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//createRoot(document.getElementById('root')).render(<App />);
