import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

  // Set the configuration for your app
  // TODO: Replace with your project's config object
   var config = {
    apiKey: "AIzaSyBIRURbPeKTvTXkiNnvfp55rCXLPYX1iiE",
    authDomain: "react-final-project-bd305.firebaseapp.com",
    databaseURL: "https://react-final-project-bd305.firebaseio.com",
    storageBucket: "react-final-project-bd305.appspot.com"
  };
  firebase.initializeApp(config);

  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
