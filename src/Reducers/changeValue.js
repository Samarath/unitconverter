const initialState = ['meter', 'meter'];

const changeTheValue = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_VALUE':
            return action.value
    
        default: return state;
    }
}

export default changeTheValue;