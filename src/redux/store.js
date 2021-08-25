import { createStore, applyMiddleware } from 'redux';
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase } from "react-redux-firebase";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import firebase from "../firebase/firebase.util";
import rootReducer from "./rootReducer";

const reduxStore = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
  )
);

console.log("store ", reduxStore)

export default reduxStore;