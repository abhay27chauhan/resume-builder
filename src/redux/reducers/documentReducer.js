import initialState from './initialState.json';

const documentReducer = (state = initialState.document, action) => {
    switch(action.type){

        default: 
            return state;
    }
}

export default documentReducer;