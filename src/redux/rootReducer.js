import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import contactReducer from "./reducers/contactReducer";
import educationReducer from "./reducers/educationReducer";
import authReducer from "./reducers/authReducer";
import documentReducer from "./reducers/documentReducer";
import initialState from './reducers/initialState.json';
import * as actionTypes from './actions/actionTypes';

const appReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    contactSection: contactReducer,
    educationSection: educationReducer,
    document: documentReducer,
});

const rootReducer = (state = initialState, action) => {
    if(action.type === actionTypes.SIGN_OUT_SUCCESS){
        console.log("inside appReducer, signOut success");
        return initialState;
    }

    return appReducer(state, action)
}

export default rootReducer;