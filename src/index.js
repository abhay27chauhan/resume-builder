import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createFirestoreInstance } from "redux-firestore";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import reduxStore from "./redux/store";
import firebase from "./firebase/firebase.util";
import { firebaseConfig } from './firebase/secret';
import App from './App';

import './index.css';

ReactDOM.render(
  <Provider store={reduxStore}>
    <ReactReduxFirebaseProvider
      firebase={firebase}
      config={firebaseConfig}
      dispatch={reduxStore.dispatch}
      createFirestoreInstance={createFirestoreInstance}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);
