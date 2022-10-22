import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Board from './components/board.component';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Board/>
  </React.StrictMode>
);

