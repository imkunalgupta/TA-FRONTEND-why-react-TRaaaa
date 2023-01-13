import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDom from 'react-dom';
import App from './components/App';
import './stylesheet/style.css';

createRoot(document.getElementById('root')).render(<App />);
