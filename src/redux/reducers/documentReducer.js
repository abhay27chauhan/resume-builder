import update from "immutability-helper";

import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

const documentReducer = (state = initialState.document, action) => {
    switch(action.type){
        case actionTypes.SET_SKIN:
            return update(state, { $set: action.document });
        
        case actionTypes.UPDATE_SKIN:
            return update(state, { $merge: action.document });
            
        default: 
            return state;
    }
}

export default documentReducer;