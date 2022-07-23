const initialState = '';

const changeTheMeasurements = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MEASUREMENTS':
            return action.value
    
        default: return state;
    }
}

export default changeTheMeasurements;