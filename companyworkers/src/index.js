import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase, {config_fire} from './components/Firebase'
  

firebase.initializeApp(config_fire)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


