import initialState from './initialState.json';

const educationReducer = (state = initialState.educationSection, action) => {
    switch(action.type){

        default: 
            return state;
    }
}

export default educationReducer;