import initialState from './initialState.json';

const authReducer = (state = initialState.auth, action) => {
    switch(action.type){

        default: 
            return state;
    }
}

export default authReducer;