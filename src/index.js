import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthContextProvidor } from './context/authContext.jsx';
import { DarkModeContextProvidor } from './context/darkModeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvidor>
      <AuthContextProvidor>
        <App />
      </AuthContextProvidor>
    </DarkModeContextProvidor>
  </React.StrictMode>
);
