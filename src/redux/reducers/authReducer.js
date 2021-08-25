import update from "immutability-helper";

import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const authReducer = (state = initialState.auth, action) => {
    switch(action.type){
        case actionTypes.REGISTER_REQUEST:
            return update(state, { loading: { $set: true } });
        
        case actionTypes.REGISTER_SUCCESS:
            return update(state, {
                loading: { $set: false },
                ErrorMessage: { $set: "" },
            });
        
        case actionTypes.REGISTER_FAILED:
            return update(state, {
                loading: { $set: false },
                ErrorMessage: { $set: action.error },
            });

        case actionTypes.SIGN_IN_REQUEST:
            return update(state, { loading: { $set: true } });

        case actionTypes.SIGN_IN_SUCCESS:
            return update(state, {
                loading: { $set: false },
                ErrorMessage: { $set: "" },
            });

        case actionTypes.SIGN_IN_FAILED:
            return update(state, {
                loading: { $set: false },
                ErrorMessage: { $set: action.error },
            });
        
        case actionTypes.REMOVE_ERROR:
            return update(state, { ErrorMessage: { $set: "" } });

        case actionTypes.SIGN_OUT_REQUEST:
            return update(state, { loading: { $set: true } });

        case actionTypes.SIGN_OUT_FAILED:
            return update(state, {
                loading: { $set: false },
                ErrorMessage: { $set: action.error },
            });

        default: 
            return state;
    }
}

export default authReducer;