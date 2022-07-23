
export const changeMeasurements = (value) => {
    return {
        type: 'CHANGE_MEASUREMENTS',
        value
    };
}

export const changeValue = (value) => {
    return {
        type: 'CHANGE_VALUE',
        value
    }
}