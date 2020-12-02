import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';
import App from './App';
import {GlobalStyles} from './global-styles'; // the global styles across the app

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{firebase}}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>
  ,
  document.getElementById('root')
);
