import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import contactReducer from "./reducers/contactReducer";
import educationReducer from "./reducers/educationReducer";
import authReducer from "./reducers/authReducer";
import documentReducer from "./reducers/documentReducer";

const rootReducer = combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    contactSection: contactReducer,
    educationSection: educationReducer,
    document: documentReducer,
});

export default rootReducer;